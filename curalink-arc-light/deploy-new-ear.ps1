# Deploy the newly built EAR to WildFly
Write-Host "=== Deploying New EAR to WildFly ===" -ForegroundColor Cyan

$WILDFLY_DEPLOY = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"
$EAR_SOURCE = "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql.ear"
$EAR_NAME = "dcm4chee-arc-ear-5.34.3-psql.ear"

# Check if source EAR exists
if (-not (Test-Path $EAR_SOURCE)) {
    Write-Host "ERROR: EAR file not found at $EAR_SOURCE" -ForegroundColor Red
    exit 1
}

Write-Host "Step 1: Removing old deployment..." -ForegroundColor Yellow
Remove-Item "$WILDFLY_DEPLOY\$EAR_NAME" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\$EAR_NAME.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\$EAR_NAME.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\$EAR_NAME.undeployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\$EAR_NAME.dodeploy" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2
Write-Host "Old deployment removed" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Copying new EAR file..." -ForegroundColor Yellow
Copy-Item $EAR_SOURCE $WILDFLY_DEPLOY -Force
Write-Host "New EAR copied" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Triggering deployment..." -ForegroundColor Yellow
New-Item "$WILDFLY_DEPLOY\$EAR_NAME.dodeploy" -ItemType File -Force | Out-Null

Write-Host "Waiting for deployment..." -ForegroundColor Cyan
$timeout = 120
$elapsed = 0
$deployed = $false

while ($elapsed -lt $timeout) {
    Start-Sleep -Seconds 2
    $elapsed += 2
    
    if (Test-Path "$WILDFLY_DEPLOY\$EAR_NAME.deployed") {
        Write-Host ""
        Write-Host "SUCCESS: Application deployed!" -ForegroundColor Green
        $deployed = $true
        break
    }
    
    if (Test-Path "$WILDFLY_DEPLOY\$EAR_NAME.failed") {
        Write-Host ""
        Write-Host "ERROR: Deployment failed!" -ForegroundColor Red
        Write-Host "Check logs: C:\wildfly\wildfly-37.0.0.Final\standalone\log\server.log" -ForegroundColor Yellow
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
Write-Host "=== Deployment Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Application URL:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "Hospital Dashboard:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/#/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "IMPORTANT: Clear browser cache or use Incognito mode!" -ForegroundColor Yellow
Write-Host ""
