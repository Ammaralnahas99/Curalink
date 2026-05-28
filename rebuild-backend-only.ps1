# Build backend modules only (skip UI2 since it's already built)
# This compiles the HospitalDashboardRS.java changes

$ErrorActionPreference = "Stop"

Write-Host "=== Building backend modules (excluding UI2) ===" -ForegroundColor Cyan

# Build dcm4chee-arc-light but skip the UI2 module
cd C:\curalink\dcm4chee-arc-light

Write-Host "Building curalink-arc-iocm-rs module (contains HospitalDashboardRS)..." -ForegroundColor Yellow
mvn clean install -pl curalink-arc-iocm-rs -am -DskipTests

if ($LASTEXITCODE -ne 0) {
    Write-Host "Backend build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Building EAR (excluding UI2) ===" -ForegroundColor Cyan
mvn clean install -pl curalink-arc-ear -am -DskipTests -pl '!curalink-arc-ui2'

if ($LASTEXITCODE -ne 0) {
    Write-Host "EAR build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Stopping WildFly ===" -ForegroundColor Cyan
Get-Process java -ErrorAction SilentlyContinue | ForEach-Object {
    $cmd = (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)").CommandLine
    if ($cmd -match "jboss|wildfly") {
        Write-Host "  Stopping PID $($_.Id)"
        Stop-Process -Id $_.Id -Force
    }
}
Start-Sleep -Seconds 8

Write-Host ""
Write-Host "=== Deploying EAR to WildFly ===" -ForegroundColor Cyan
$ear = "C:\curalink\dcm4chee-arc-light\curalink-arc-ear\target\curalink-arc-ear-5.34.3-psql.ear"
$deployDir = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"

if (Test-Path $ear) {
    Copy-Item $ear $deployDir -Force
    Write-Host "EAR deployed: $ear" -ForegroundColor Green
    
    # Create .dodeploy marker
    "" | Out-File "$deployDir\curalink-arc-ear-5.34.3-psql.ear.dodeploy" -Encoding ASCII
    Write-Host ".dodeploy marker created" -ForegroundColor Green
} else {
    Write-Host "EAR not found at $ear" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Starting WildFly ===" -ForegroundColor Cyan
Start-Process "C:\wildfly\wildfly-37.0.0.Final\bin\standalone.bat" -WindowStyle Minimized

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  Backend deployed!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Wait 2-3 minutes for WildFly to start, then test:" -ForegroundColor Yellow
Write-Host "  http://localhost:8080/curalink/ui2/en/#/dashboard" -ForegroundColor White
Write-Host ""
