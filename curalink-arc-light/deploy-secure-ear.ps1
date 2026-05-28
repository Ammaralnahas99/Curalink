# Deploy the secure EAR to WildFly
Write-Host "=== Deploying Secure EAR to WildFly ===" -ForegroundColor Cyan

$WILDFLY_DEPLOY = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"
$EAR_SOURCE = "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
$EAR_NAME = "dcm4chee-arc-ear-5.34.3-psql-secure.ear"

# Check if source EAR exists
if (-not (Test-Path $EAR_SOURCE)) {
    Write-Host "ERROR: Secure EAR file not found at $EAR_SOURCE" -ForegroundColor Red
    exit 1
}

Write-Host "Step 1: Removing old deployments..." -ForegroundColor Yellow
Remove-Item "$WILDFLY_DEPLOY\dcm4chee-arc-ear*.ear" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\dcm4chee-arc-ear*.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\dcm4chee-arc-ear*.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\dcm4chee-arc-ear*.undeployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$WILDFLY_DEPLOY\dcm4chee-arc-ear*.dodeploy" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3
Write-Host "Old deployments removed" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Copying secure EAR file..." -ForegroundColor Yellow
Copy-Item $EAR_SOURCE $WILDFLY_DEPLOY -Force
Write-Host "Secure EAR copied" -ForegroundColor Green

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
        Write-Host "SUCCESS: Secure application deployed!" -ForegroundColor Green
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
Write-Host "=== Secure Deployment Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: Keycloak must be running at http://localhost:8843" -ForegroundColor Yellow
Write-Host ""
Write-Host "Application URL:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "You will be redirected to Keycloak login page." -ForegroundColor Cyan
Write-Host ""
Write-Host "Clear browser cache before testing!" -ForegroundColor Yellow
Write-Host ""
