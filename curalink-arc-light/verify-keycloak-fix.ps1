# Verification script for Keycloak fix

Write-Host "=== Keycloak Fix Verification ===" -ForegroundColor Cyan
Write-Host ""

$allGood = $true

# Check 1: Source code fix
Write-Host "1. Checking UI source code fix..." -ForegroundColor Yellow
$globalvarPath = "dcm4chee-arc-ui2\src\app\constants\globalvar.ts"
if (Test-Path $globalvarPath) {
    $content = Get-Content $globalvarPath -Raw
    if ($content -match 'redirectUri:.*window\.location\.origin') {
        Write-Host "   ✓ redirectUri found in globalvar.ts" -ForegroundColor Green
    } else {
        Write-Host "   ✗ redirectUri NOT found in globalvar.ts" -ForegroundColor Red
        $allGood = $false
    }
} else {
    Write-Host "   ✗ globalvar.ts not found" -ForegroundColor Red
    $allGood = $false
}

# Check 2: standalone.xml bearer-only
Write-Host "`n2. Checking standalone.xml configuration..." -ForegroundColor Yellow
$standaloneXml = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml"
if (Test-Path $standaloneXml) {
    $content = Get-Content $standaloneXml -Raw
    
    # Check for secure-deployment blocks
    $uiDeployment = $content -match 'secure-deployment name="dcm4chee-arc-ui2-5\.34\.3\.war"'
    $backendDeployment = $content -match 'secure-deployment name="dcm4chee-arc-war-5\.34\.3-secure\.war"'
    $bearerOnly = $content -match '<bearer-only>true</bearer-only>'
    
    if ($uiDeployment) {
        Write-Host "   ✓ UI secure-deployment found" -ForegroundColor Green
    } else {
        Write-Host "   ✗ UI secure-deployment NOT found" -ForegroundColor Red
        $allGood = $false
    }
    
    if ($backendDeployment) {
        Write-Host "   ✓ Backend secure-deployment found" -ForegroundColor Green
    } else {
        Write-Host "   ✗ Backend secure-deployment NOT found" -ForegroundColor Red
        $allGood = $false
    }
    
    if ($bearerOnly) {
        Write-Host "   ✓ bearer-only configuration found" -ForegroundColor Green
    } else {
        Write-Host "   ✗ bearer-only NOT found" -ForegroundColor Red
        $allGood = $false
    }
} else {
    Write-Host "   ✗ standalone.xml not found" -ForegroundColor Red
    $allGood = $false
}

# Check 3: Built UI files
Write-Host "`n3. Checking built UI files..." -ForegroundColor Yellow
$builtUI = "dcm4chee-arc-ui2\target\dcm4chee-arc-ui2-5.34.3\en"
if (Test-Path $builtUI) {
    $jsFiles = Get-ChildItem "$builtUI\*.js" -ErrorAction SilentlyContinue
    if ($jsFiles.Count -gt 0) {
        Write-Host "   ✓ Built UI files found ($($jsFiles.Count) JS files)" -ForegroundColor Green
        
        # Check if any JS file contains the redirectUri
        $foundRedirect = $false
        foreach ($file in $jsFiles) {
            $content = Get-Content $file.FullName -Raw
            if ($content -match 'redirectUri') {
                $foundRedirect = $true
                break
            }
        }
        
        if ($foundRedirect) {
            Write-Host "   ✓ redirectUri found in built JS files" -ForegroundColor Green
        } else {
            Write-Host "   ⚠ redirectUri not found in built JS (may need rebuild)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "   ✗ No JS files found in build output" -ForegroundColor Red
        $allGood = $false
    }
} else {
    Write-Host "   ⚠ Built UI not found (run npm run build)" -ForegroundColor Yellow
}

# Check 4: Deployed EAR
Write-Host "`n4. Checking deployed EAR..." -ForegroundColor Yellow
$earPath = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
if (Test-Path $earPath) {
    $earSize = (Get-Item $earPath).Length / 1MB
    Write-Host "   ✓ EAR found ($('{0:N2}' -f $earSize) MB)" -ForegroundColor Green
    
    if ($earSize -lt 30) {
        Write-Host "   ⚠ EAR seems small, may be corrupted" -ForegroundColor Yellow
    }
    
    # Check deployment status
    $deployed = Test-Path "$earPath.deployed"
    $failed = Test-Path "$earPath.failed"
    
    if ($deployed) {
        Write-Host "   ✓ EAR is deployed" -ForegroundColor Green
    } elseif ($failed) {
        Write-Host "   ✗ EAR deployment failed" -ForegroundColor Red
        $allGood = $false
    } else {
        Write-Host "   ⚠ EAR deployment status unknown" -ForegroundColor Yellow
    }
} else {
    Write-Host "   ✗ EAR not found" -ForegroundColor Red
    $allGood = $false
}

# Check 5: WildFly status
Write-Host "`n5. Checking WildFly status..." -ForegroundColor Yellow
$wildflyProcess = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object {
    $_.CommandLine -like "*wildfly*" -or $_.CommandLine -like "*standalone*"
}

if ($wildflyProcess) {
    Write-Host "   ✓ WildFly is running" -ForegroundColor Green
} else {
    Write-Host "   ⚠ WildFly is not running" -ForegroundColor Yellow
}

# Summary
Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
if ($allGood) {
    Write-Host "✓ All checks passed!" -ForegroundColor Green
    Write-Host "`nYou can now test the fix:" -ForegroundColor White
    Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/index.html" -ForegroundColor Cyan
} else {
    Write-Host "✗ Some checks failed" -ForegroundColor Red
    Write-Host "`nRun the fix script:" -ForegroundColor White
    Write-Host "  .\apply-keycloak-fix.ps1" -ForegroundColor Cyan
}
Write-Host ""
