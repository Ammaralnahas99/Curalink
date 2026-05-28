# ============================================================================
# Curalink UI2 Rebuild & Deploy Script (with Hospital Dashboard Support)
# - Rebuilds curalink-arc-ui2 from source (npm + maven)
# - Includes the new hospital dashboard code
# - Patches keycloak.json files inside the WAR
# - Injects the new WAR into the deployed EAR
# - Triggers WildFly redeploy
# ============================================================================

$ErrorActionPreference = "Stop"

# --- Paths ---
$ui2Dir        = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2"
$wildflyHome   = "C:\wildfly\wildfly-37.0.0.Final"
$deployments   = "$wildflyHome\standalone\deployments"
$ear           = "$deployments\curalink-arc-ear-5.34.3-psql.ear"
$newWar        = "$ui2Dir\target\curalink-arc-ui2-5.34.3.war"
$standaloneBat = "$wildflyHome\bin\standalone.bat"
$vfsTmp        = "$wildflyHome\standalone\tmp\vfs\deployment"

# --- Keycloak config ---
$correctJson = @'
{
  "realm": "curalink",
  "auth-server-url": "http://localhost:8843",
  "ssl-required": "none",
  "resource": "curalink-arc-ui",
  "public-client": true,
  "confidential-port": 0,
  "enable-pkce": true
}
'@

# --- Helper Functions ---
function Stop-WildFly {
    Write-Host "=== Stopping WildFly ===" -ForegroundColor Cyan
    Get-Process java -ErrorAction SilentlyContinue | ForEach-Object {
        $cmd = (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)").CommandLine
        if ($cmd -match "jboss|wildfly") {
            Write-Host "  Stopping PID $($_.Id)"
            Stop-Process -Id $_.Id -Force
        }
    }
    Start-Sleep -Seconds 8
}

function Test-NodeModules {
    if (-not (Test-Path "$ui2Dir\node_modules")) {
        Write-Host "=== Installing npm dependencies ===" -ForegroundColor Yellow
        Set-Location $ui2Dir
        & npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "npm install failed" -ForegroundColor Red
            exit 1
        }
    }
}

# --- 1. Verify paths exist ---
Write-Host "=== Verifying paths ===" -ForegroundColor Cyan

if (-not (Test-Path $ui2Dir)) {
    Write-Host "ERROR: UI2 directory not found: $ui2Dir" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $wildflyHome)) {
    Write-Host "ERROR: WildFly directory not found: $wildflyHome" -ForegroundColor Red
    exit 1
}

Write-Host "  ✓ UI2 directory: $ui2Dir" -ForegroundColor Green
Write-Host "  ✓ WildFly home: $wildflyHome" -ForegroundColor Green

# --- 2. Stop WildFly ---
Stop-WildFly

# --- 3. Ensure node_modules exists ---
Test-NodeModules

# --- 4. Clean build of UI2 ---
Write-Host "=== Clean rebuild of UI2 ===" -ForegroundColor Cyan
Set-Location $ui2Dir

Write-Host "  Cleaning cache directories..." -ForegroundColor DarkCyan
Remove-Item ".angular" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "target"   -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "dist" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "--- npm run build ---" -ForegroundColor DarkCyan
& npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm build failed" -ForegroundColor Red
    Write-Host "Check the error messages above for details" -ForegroundColor Yellow
    exit 1
}

Write-Host "--- mvn package ---" -ForegroundColor DarkCyan
& mvn package -DskipTests

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: mvn package failed" -ForegroundColor Red
    Write-Host "Check the error messages above for details" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $newWar)) {
    Write-Host "ERROR: WAR not produced at $newWar" -ForegroundColor Red
    exit 1
}

$warSize = (Get-Item $newWar).Length
Write-Host "  ✓ WAR built: $newWar ($([math]::Round($warSize/1MB, 2)) MB)" -ForegroundColor Green

# --- 5. Patch keycloak.json files inside the WAR ---
Write-Host "=== Patching keycloak.json files inside WAR ===" -ForegroundColor Cyan

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

try {
    $zip = [System.IO.Compression.ZipFile]::Open($newWar, [System.IO.Compression.ZipArchiveMode]::Update)
    
    try {
        $targets = @($zip.Entries | Where-Object { $_.Name -eq "keycloak.json" } | ForEach-Object { $_.FullName })
        
        if ($targets.Count -eq 0) {
            Write-Host "  No keycloak.json files found in WAR" -ForegroundColor Yellow
        } else {
            foreach ($name in $targets) {
                $entry = $zip.GetEntry($name)
                if ($entry) { 
                    $entry.Delete() 
                }
                
                $newEntry = $zip.CreateEntry($name)
                $sw = New-Object System.IO.StreamWriter($newEntry.Open())
                $sw.Write($correctJson)
                $sw.Close()
                
                Write-Host "  ✓ Patched $name" -ForegroundColor Green
            }
        }
    } finally {
        $zip.Dispose()
    }
} catch {
    Write-Host "ERROR: Failed to patch WAR: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# --- 6. Inject the WAR into the EAR ---
Write-Host "=== Injecting WAR into EAR ===" -ForegroundColor Cyan

if (-not (Test-Path $ear)) {
    Write-Host "ERROR: EAR not found at $ear" -ForegroundColor Red
    Write-Host "Available EAR files:" -ForegroundColor Yellow
    Get-ChildItem "$deployments\*.ear" | ForEach-Object { Write-Host "  - $($_.Name)" }
    exit 1
}

# Backup EAR
$backupName = "$ear.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item $ear $backupName
Write-Host "  ✓ Backup created: $backupName" -ForegroundColor Green

try {
    $earZip = [System.IO.Compression.ZipFile]::Open($ear, [System.IO.Compression.ZipArchiveMode]::Update)
    
    try {
        # Remove old WAR
        $old = $earZip.GetEntry("curalink-arc-ui2-5.34.3.war")
        if ($old) {
            $old.Delete()
            Write-Host "  ✓ Removed old WAR from EAR" -ForegroundColor Green
        }
        
        # Add new WAR
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
            $earZip, 
            $newWar, 
            "curalink-arc-ui2-5.34.3.war",
            [System.IO.Compression.CompressionLevel]::Optimal
        ) | Out-Null
        
        Write-Host "  ✓ Injected fresh WAR into EAR" -ForegroundColor Green
    } finally {
        $earZip.Dispose()
    }
} catch {
    Write-Host "ERROR: Failed to inject WAR into EAR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Restoring backup..." -ForegroundColor Yellow
    Copy-Item $backupName $ear -Force
    exit 1
}

# --- 7. Force WildFly redeploy ---
Write-Host "=== Forcing redeploy ===" -ForegroundColor Cyan

# Remove old markers
Remove-Item "$ear.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$ear.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$ear.isdeploying" -Force -ErrorAction SilentlyContinue
Remove-Item "$ear.undeployed" -Force -ErrorAction SilentlyContinue

# Create dodeploy marker
"" | Out-File "$ear.dodeploy" -Encoding ASCII
Write-Host "  ✓ Created .dodeploy marker" -ForegroundColor Green

# Clear VFS cache
if (Test-Path $vfsTmp) {
    Remove-Item "$vfsTmp\*" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✓ Cleared VFS cache" -ForegroundColor Green
}

# --- 8. Start WildFly ---
Write-Host "=== Starting WildFly ===" -ForegroundColor Cyan
Start-Process $standaloneBat -WindowStyle Minimized
Write-Host "  Waiting for startup (100 seconds)..." -ForegroundColor Yellow

# Wait and show progress
for ($i = 1; $i -le 10; $i++) {
    Start-Sleep -Seconds 10
    Write-Host "  $($i * 10)s..." -ForegroundColor DarkGray
}

# --- 9. Verify deployment ---
Write-Host ""
Write-Host "=== Verification ===" -ForegroundColor Cyan

# Check deployment markers
$deployedMarker = "$ear.deployed"
$failedMarker   = "$ear.failed"

if (Test-Path $failedMarker) {
    Write-Host "  ✗ Deployment FAILED" -ForegroundColor Red
    Write-Host "  Check WildFly logs: $wildflyHome\standalone\log\server.log" -ForegroundColor Yellow
    exit 1
} elseif (Test-Path $deployedMarker) {
    Write-Host "  ✓ Deployment marker present" -ForegroundColor Green
} else {
    Write-Host "  ⚠ No deployment marker yet - may still be starting" -ForegroundColor Yellow
}

# Test endpoints
Write-Host ""
Write-Host "Testing endpoints..." -ForegroundColor Cyan

try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/ui2/en/assets/keycloak.json" -UseBasicParsing -TimeoutSec 30
    if ($r.Content -match "auth-server-url") {
        Write-Host "  ✓ /assets/keycloak.json returns OIDC config" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ /assets/keycloak.json returned unexpected content" -ForegroundColor Yellow
    }
} catch {
    Write-Host "  ✗ /assets/keycloak.json: $($_.Exception.Message)" -ForegroundColor Red
}

try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/ui2/rs/keycloak.json" -UseBasicParsing -TimeoutSec 10
    if ($r.Content -match "auth-server-url") {
        Write-Host "  ✓ /rs/keycloak.json returns OIDC config" -ForegroundColor Green
    }
} catch {
    Write-Host "  ⚠ /rs/keycloak.json: $($_.Exception.Message)" -ForegroundColor Yellow
}

# Test AE titles endpoint (for dashboard)
try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/rs/aes" -UseBasicParsing -TimeoutSec 10
    $aes = $r.Content | ConvertFrom-Json
    Write-Host "  ✓ /rs/aes endpoint working ($($aes.Count) AE titles found)" -ForegroundColor Green
} catch {
    Write-Host "  ⚠ /rs/aes: $($_.Exception.Message)" -ForegroundColor Yellow
}

# --- 10. Summary ---
Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  DEPLOYMENT COMPLETE" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Open a FRESH incognito window" -ForegroundColor White
Write-Host "  2. Navigate to: http://localhost:8080/curalink/ui2/en/" -ForegroundColor White
Write-Host "  3. Login with your credentials" -ForegroundColor White
Write-Host "  4. Go to Dashboard: http://localhost:8080/curalink/ui2/en/#/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "To see your AE title dashboards:" -ForegroundColor Yellow
Write-Host "  - Navigate to the Dashboard menu item" -ForegroundColor White
Write-Host "  - You should see all your AE titles with their hospitals" -ForegroundColor White
Write-Host ""
Write-Host "If you don't see the dashboards:" -ForegroundColor Yellow
Write-Host "  1. Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "  2. Hard refresh (Ctrl+F5)" -ForegroundColor White
Write-Host "  3. Check browser console for errors (F12)" -ForegroundColor White
Write-Host ""
Write-Host "Make sure Keycloak is running on port 8843" -ForegroundColor Yellow
Write-Host ""
