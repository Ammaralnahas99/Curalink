# Deploy the current secure EAR that was built

Write-Host ""
Write-Host "=== DEPLOY CURRENT SECURE EAR ===" -ForegroundColor Cyan

$wildflyBase = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone"

# Check if WildFly is running
$wildfly = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*wildfly*" -or $_.CommandLine -like "*jboss*" }
if ($wildfly) {
    Write-Host ""
    Write-Host "WARNING: WildFly is still running! Stop it first (Ctrl+C)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "1. Cleaning WildFly deployments..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\deployments\dcm4chee-arc-ear-*.ear*" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\dcm4chee-arc-ui2-*.war*" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear*" -Force -ErrorAction SilentlyContinue
Write-Host "   ✓ Old deployments removed" -ForegroundColor Green

Write-Host ""
Write-Host "2. Cleaning WildFly caches..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\tmp\vfs\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\data\content\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "   ✓ Caches cleared" -ForegroundColor Green

Write-Host ""
Write-Host "3. Deploying secure EAR..." -ForegroundColor Yellow
$earFile = "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
if (Test-Path $earFile) {
    $earSize = (Get-Item $earFile).Length
    Copy-Item $earFile "$wildflyBase\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear" -Force
    Write-Host "   ✓ Secure EAR deployed ($([math]::Round($earSize/1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host "   ✗ Secure EAR not found at $earFile" -ForegroundColor Red
    Write-Host "   Available EAR files:" -ForegroundColor Yellow
    Get-ChildItem "dcm4chee-arc-ear\target\*.ear" | ForEach-Object { Write-Host "     $($_.Name)" -ForegroundColor White }
    exit 1
}

Write-Host ""
Write-Host "=== DEPLOYMENT COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Start WildFly: C:\Dcm4chee\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor White
Write-Host "  2. Wait for deployment to complete (watch console)" -ForegroundColor White
Write-Host "  3. Clear browser cache and use incognito window" -ForegroundColor White
Write-Host "  4. Access: http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "The application will redirect to Keycloak for authentication." -ForegroundColor Yellow