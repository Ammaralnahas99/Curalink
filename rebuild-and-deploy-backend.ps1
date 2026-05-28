# Save as: C:\curalink\rebuild-and-deploy-backend.ps1

$ErrorActionPreference = "Stop"

$arcLightDir   = "C:\curalink\curalink-arc-light"
$dcm4cheCore   = "C:\curalink\curalink-core"
$wildflyHome   = "C:\wildfly\wildfly-37.0.0.Final"
$deployments   = "$wildflyHome\standalone\deployments"
$earName       = "curalink-arc-ear-5.34.3-psql.ear"
$ear           = "$deployments\$earName"
$newEar        = "$arcLightDir\curalink-arc-assembly\target\$earName"
$standaloneBat = "$wildflyHome\bin\standalone.bat"
$vfsTmp        = "$wildflyHome\standalone\tmp\vfs\deployment"

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

# --- 1. Stop WildFly ---
Stop-WildFly

# --- 2. Build dcm4che-core first (backend depends on it) ---
Write-Host "=== Building dcm4che-core ===" -ForegroundColor Cyan
Set-Location $dcm4cheCore
& mvn clean install -DskipTests
if ($LASTEXITCODE -ne 0) { Write-Host "dcm4che-core build FAILED" -ForegroundColor Red; exit 1 }
Write-Host "dcm4che-core built OK" -ForegroundColor Green

# --- 3. Build the full backend ---
Write-Host "=== Building curalink-arc-light backend ===" -ForegroundColor Cyan
Set-Location $arcLightDir
& mvn clean install -DskipTests -Ddb=psql
if ($LASTEXITCODE -ne 0) { Write-Host "Backend build FAILED" -ForegroundColor Red; exit 1 }
Write-Host "Backend built OK" -ForegroundColor Green

# --- 4. Verify EAR was produced ---
if (-not (Test-Path $newEar)) {
    # Try alternate assembly locations
    $newEar = Get-ChildItem "$arcLightDir" -Recurse -Include "$earName" | 
              Where-Object { $_.FullName -notmatch "\.bak" } | 
              Select-Object -First 1 -ExpandProperty FullName
    if (-not $newEar) {
        Write-Host "EAR not found after build!" -ForegroundColor Red
        exit 1
    }
}
Write-Host "EAR built: $newEar ($('{0:N0}' -f (Get-Item $newEar).Length) bytes)" -ForegroundColor Green

# --- 5. Backup old EAR and replace ---
Write-Host "=== Deploying new EAR ===" -ForegroundColor Cyan
if (Test-Path $ear) {
    $backupName = "$ear.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
    Copy-Item $ear $backupName
    Write-Host "  Backup: $backupName"
    Remove-Item $ear -Force
}

Copy-Item $newEar $ear
Write-Host "  New EAR copied to deployments" -ForegroundColor Green

# --- 6. Force redeploy ---
Write-Host "=== Forcing redeploy ===" -ForegroundColor Cyan
Remove-Item "$ear.deployed"  -ErrorAction SilentlyContinue
Remove-Item "$ear.failed"    -ErrorAction SilentlyContinue
Remove-Item "$ear.dodeploy"  -ErrorAction SilentlyContinue
"" | Out-File "$ear.dodeploy" -Encoding ASCII
Remove-Item "$vfsTmp\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "  .dodeploy marker created, VFS cache cleared"

# --- 7. Start WildFly ---
Write-Host "=== Starting WildFly ===" -ForegroundColor Cyan
Start-Process $standaloneBat -WindowStyle Minimized
Write-Host "Waiting 120s for startup..." -ForegroundColor Yellow
Start-Sleep -Seconds 120

# --- 8. Verify ---
Write-Host "`n=== Verification ===" -ForegroundColor Cyan

# Check deployment markers
$deployedMarker = "$ear.deployed"
$failedMarker   = "$ear.failed"
if (Test-Path $failedMarker) {
    Write-Host "[ERROR] Deployment FAILED - check WildFly logs" -ForegroundColor Red
    Write-Host "  $wildflyHome\standalone\log\server.log" -ForegroundColor Yellow
} elseif (Test-Path $deployedMarker) {
    Write-Host "[OK] EAR deployed successfully" -ForegroundColor Green
} else {
    Write-Host "[WARN] No deployment marker yet - may still be starting" -ForegroundColor Yellow
}

# Test backend API
try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/ui2/rs/keycloak.json" -UseBasicParsing -TimeoutSec 15
    Write-Host "[OK] Backend API responding (keycloak.json)" -ForegroundColor Green
} catch {
    Write-Host "[WARN] Backend API: $($_.Exception.Message)" -ForegroundColor Yellow
}

# Test schema endpoint
try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/ui2/en/assets/schema/device.schema.json" -UseBasicParsing -TimeoutSec 10
    Write-Host "[OK] Schema files accessible" -ForegroundColor Green
} catch {
    Write-Host "[WARN] Schema: $($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  BACKEND DEPLOY DONE" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Check WildFly logs if issues:" -ForegroundColor Yellow
Write-Host "  $wildflyHome\standalone\log\server.log" -ForegroundColor White