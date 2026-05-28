# Trigger deployment of standalone UI2 WAR

Write-Host ""
Write-Host "=== TRIGGER UI2 WAR DEPLOYMENT ===" -ForegroundColor Cyan

$deploymentsDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"
$warFile = "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war"

# Check if WAR exists
if (!(Test-Path $warFile)) {
    Write-Host "   ERROR: WAR file not found at $warFile" -ForegroundColor Red
    exit 1
}

$warSize = (Get-Item $warFile).Length
Write-Host "   Found WAR: $([math]::Round($warSize/1MB, 2)) MB" -ForegroundColor White

# Remove old markers
Write-Host ""
Write-Host "Step 1: Removing old deployment markers..." -ForegroundColor Yellow
Remove-Item "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war.dodeploy" -Force -ErrorAction SilentlyContinue
Remove-Item "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war.isdeploying" -Force -ErrorAction SilentlyContinue
Write-Host "   OK: Old markers removed" -ForegroundColor Green

# Create .dodeploy marker
Write-Host ""
Write-Host "Step 2: Creating .dodeploy marker..." -ForegroundColor Yellow
New-Item -ItemType File -Path "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war.dodeploy" -Force | Out-Null
Write-Host "   OK: Deployment triggered" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Current deployment files..." -ForegroundColor Yellow
Get-ChildItem "$deploymentsDir" | Where-Object { $_.Name -like "*ui2*" } | ForEach-Object {
    if ($_.Length -gt 0) {
        Write-Host "   $($_.Name) - $([math]::Round($_.Length/1MB, 2)) MB" -ForegroundColor White
    } else {
        Write-Host "   $($_.Name)" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "=== DEPLOYMENT TRIGGERED ===" -ForegroundColor Green
Write-Host ""
Write-Host "Wait 30-60 seconds, then check deployment status:" -ForegroundColor Cyan
Write-Host "  dir $deploymentsDir | findstr ui2" -ForegroundColor White
Write-Host ""
Write-Host "Expected: dcm4chee-arc-ui2-5.34.3.war.deployed (deployment success)" -ForegroundColor Yellow
Write-Host "If you see: dcm4chee-arc-ui2-5.34.3.war.failed (check WildFly logs)" -ForegroundColor Yellow
Write-Host ""
Write-Host "WARNING: Both EAR and standalone WAR will be deployed." -ForegroundColor Red
Write-Host "This may cause DuplicateServiceException conflicts." -ForegroundColor Red
