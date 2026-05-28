# Redeploy dcm4chee-arc to WildFly
Write-Host "=== Redeploying DCM4CHEE-ARC ===" -ForegroundColor Cyan

$DEPLOYMENT_DIR = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"
$EAR_NAME = "dcm4chee-arc-ear-5.34.3-psql.ear"

Write-Host "Step 1: Removing undeployed marker..." -ForegroundColor Yellow
Remove-Item "$DEPLOYMENT_DIR\$EAR_NAME.undeployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$DEPLOYMENT_DIR\$EAR_NAME.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$DEPLOYMENT_DIR\$EAR_NAME.deployed" -Force -ErrorAction SilentlyContinue

Write-Host "Step 2: Creating .dodeploy marker to trigger deployment..." -ForegroundColor Yellow
New-Item "$DEPLOYMENT_DIR\$EAR_NAME.dodeploy" -ItemType File -Force | Out-Null

Write-Host ""
Write-Host "Waiting for deployment..." -ForegroundColor Cyan

$timeout = 120
$elapsed = 0
$deployed = $false

while ($elapsed -lt $timeout) {
    Start-Sleep -Seconds 2
    $elapsed += 2
    
    if (Test-Path "$DEPLOYMENT_DIR\$EAR_NAME.deployed") {
        Write-Host ""
        Write-Host "SUCCESS: Application deployed!" -ForegroundColor Green
        $deployed = $true
        break
    }
    
    if (Test-Path "$DEPLOYMENT_DIR\$EAR_NAME.failed") {
        Write-Host ""
        Write-Host "ERROR: Deployment failed!" -ForegroundColor Red
        Write-Host "Check logs at: C:\wildfly\wildfly-37.0.0.Final\standalone\log\server.log" -ForegroundColor Yellow
        exit 1
    }
    
    Write-Host "." -NoNewline
}

if (-not $deployed) {
    Write-Host ""
    Write-Host "WARNING: Deployment timeout" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "=== Application Ready ===" -ForegroundColor Green
Write-Host ""
Write-Host "Main Application:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "Hospital Dashboard:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/#/hospital-dashboard" -ForegroundColor White
Write-Host ""
