# Quick diagnostic to check UI build and deployment status

$ErrorActionPreference = "Continue"

Write-Host "=== Checking UI Build Status ===" -ForegroundColor Cyan
Write-Host ""

# 1. Check if WAR was built
Write-Host "1. Checking if WAR was built..." -ForegroundColor Yellow
$warPath = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\target\curalink-arc-ui2-5.34.3.war"

if (Test-Path $warPath) {
    $warSize = (Get-Item $warPath).Length
    $warSizeMB = [math]::Round($warSize / 1MB, 2)
    $warDate = (Get-Item $warPath).LastWriteTime
    
    Write-Host "  ✓ WAR exists: $warPath" -ForegroundColor Green
    Write-Host "    Size: $warSizeMB MB" -ForegroundColor Gray
    Write-Host "    Last modified: $warDate" -ForegroundColor Gray
    
    if ($warSizeMB -lt 1) {
        Write-Host "  ⚠ WARNING: WAR is very small, build may have failed" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ✗ WAR not found at: $warPath" -ForegroundColor Red
    Write-Host "    The UI was not built successfully" -ForegroundColor Red
}

Write-Host ""

# 2. Check if WAR contains dashboard code
Write-Host "2. Checking if dashboard code is in WAR..." -ForegroundColor Yellow

if (Test-Path $warPath) {
    try {
        Add-Type -AssemblyName System.IO.Compression.FileSystem
        $zip = [System.IO.Compression.ZipFile]::OpenRead($warPath)
        
        $dashboardFiles = $zip.Entries | Where-Object { 
            $_.FullName -match "hospital-dashboard" 
        }
        
        if ($dashboardFiles) {
            Write-Host "  ✓ Dashboard code found in WAR:" -ForegroundColor Green
            $dashboardFiles | Select-Object -First 5 | ForEach-Object {
                Write-Host "    - $($_.FullName)" -ForegroundColor Gray
            }
            if ($dashboardFiles.Count -gt 5) {
                Write-Host "    ... and $($dashboardFiles.Count - 5) more files" -ForegroundColor Gray
            }
        } else {
            Write-Host "  ✗ No dashboard code found in WAR" -ForegroundColor Red
            Write-Host "    The dashboard component was not included in the build" -ForegroundColor Red
        }
        
        $zip.Dispose()
    } catch {
        Write-Host "  ✗ Error reading WAR: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""

# 3. Check WildFly deployment
Write-Host "3. Checking WildFly deployment..." -ForegroundColor Yellow
$deployDir = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"

if (Test-Path $deployDir) {
    Write-Host "  ✓ Deployment directory exists" -ForegroundColor Green
    
    # Check for EAR
    $earFiles = Get-ChildItem "$deployDir\*.ear" -ErrorAction SilentlyContinue
    if ($earFiles) {
        Write-Host "  ✓ Found EAR files:" -ForegroundColor Green
        $earFiles | ForEach-Object {
            Write-Host "    - $($_.Name)" -ForegroundColor Gray
            
            # Check deployment status
            $deployed = Test-Path "$($_.FullName).deployed"
            $failed = Test-Path "$($_.FullName).failed"
            
            if ($deployed) {
                Write-Host "      Status: DEPLOYED ✓" -ForegroundColor Green
            } elseif ($failed) {
                Write-Host "      Status: FAILED ✗" -ForegroundColor Red
            } else {
                Write-Host "      Status: UNKNOWN" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "  ✗ No EAR files found in deployment directory" -ForegroundColor Red
    }
    
    # Check for WAR
    $warFiles = Get-ChildItem "$deployDir\*.war" -ErrorAction SilentlyContinue
    if ($warFiles) {
        Write-Host "  ✓ Found WAR files:" -ForegroundColor Green
        $warFiles | ForEach-Object {
            Write-Host "    - $($_.Name)" -ForegroundColor Gray
        }
    }
} else {
    Write-Host "  ✗ Deployment directory not found: $deployDir" -ForegroundColor Red
}

Write-Host ""

# 4. Check if WildFly is running
Write-Host "4. Checking if WildFly is running..." -ForegroundColor Yellow

$wildflyProcess = Get-Process java -ErrorAction SilentlyContinue | Where-Object {
    $cmd = (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)" -ErrorAction SilentlyContinue).CommandLine
    $cmd -match "wildfly"
}

if ($wildflyProcess) {
    Write-Host "  ✓ WildFly is running (PID: $($wildflyProcess.Id))" -ForegroundColor Green
} else {
    Write-Host "  ✗ WildFly is not running" -ForegroundColor Red
    Write-Host "    Start WildFly to test the application" -ForegroundColor Yellow
}

Write-Host ""

# 5. Test application endpoints
Write-Host "5. Testing application endpoints..." -ForegroundColor Yellow

if ($wildflyProcess) {
    # Test main UI
    try {
        $response = Invoke-WebRequest "http://localhost:8080/curalink/ui2/en/" -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
        Write-Host "  ✓ Main UI accessible (Status: $($response.StatusCode))" -ForegroundColor Green
    } catch {
        Write-Host "  ✗ Main UI not accessible: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Test AE titles endpoint
    try {
        $response = Invoke-WebRequest "http://localhost:8080/curalink/rs/aes" -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
        $aes = $response.Content | ConvertFrom-Json
        Write-Host "  ✓ AE titles endpoint working ($($aes.Count) AE titles)" -ForegroundColor Green
        
        if ($aes.Count -gt 0) {
            Write-Host "    AE Titles found:" -ForegroundColor Gray
            $aes | Select-Object -First 5 | ForEach-Object {
                Write-Host "    - $($_.dicomAETitle)" -ForegroundColor Gray
            }
        }
    } catch {
        Write-Host "  ✗ AE titles endpoint not accessible: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Test hospital statistics endpoint (if we have AE titles)
    if ($aes -and $aes.Count -gt 0) {
        $testAE = $aes[0].dicomAETitle
        try {
            $response = Invoke-WebRequest "http://localhost:8080/curalink/aets/$testAE/rs/hospitals/statistics" -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
            $hospitals = $response.Content | ConvertFrom-Json
            Write-Host "  ✓ Hospital statistics endpoint working ($($hospitals.Count) hospitals for $testAE)" -ForegroundColor Green
        } catch {
            Write-Host "  ⚠ Hospital statistics endpoint: $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "  ⚠ Skipping endpoint tests (WildFly not running)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Summary ===" -ForegroundColor Cyan

# Determine overall status
$issues = @()

if (-not (Test-Path $warPath)) {
    $issues += "WAR not built"
}

if ((Test-Path $warPath) -and ((Get-Item $warPath).Length / 1MB) -lt 1) {
    $issues += "WAR is too small (build failed)"
}

if (-not $wildflyProcess) {
    $issues += "WildFly not running"
}

if ($issues.Count -eq 0) {
    Write-Host "✓ Everything looks good!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Open browser: http://localhost:8080/curalink/ui2/en/" -ForegroundColor White
    Write-Host "  2. Login" -ForegroundColor White
    Write-Host "  3. Navigate to: http://localhost:8080/curalink/ui2/en/#/dashboard" -ForegroundColor White
    Write-Host ""
    Write-Host "If you don't see the dashboard:" -ForegroundColor Yellow
    Write-Host "  - Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor White
    Write-Host "  - Hard refresh (Ctrl+F5)" -ForegroundColor White
    Write-Host "  - Try incognito mode" -ForegroundColor White
} else {
    Write-Host "✗ Issues found:" -ForegroundColor Red
    $issues | ForEach-Object {
        Write-Host "  - $_" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Recommended action:" -ForegroundColor Yellow
    Write-Host "  Run the rebuild script again:" -ForegroundColor White
    Write-Host "  powershell -ExecutionPolicy Bypass -File C:\curalink\rebuild-ui-with-dashboard.ps1" -ForegroundColor White
}

Write-Host ""
