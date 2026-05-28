# Deploy fresh EAR - clears WildFly completely

Write-Host ""
Write-Host "=== DEPLOY FRESH ===" -ForegroundColor Cyan

$wildflyBase = "C:\wildfly\wildfly-37.0.0.Final\standalone"

# Check if WildFly is running
$wildfly = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*wildfly*" -or $_.CommandLine -like "*jboss*" }
if ($wildfly) {
    Write-Host ""
    Write-Host "WARNING: WildFly is still running! Stop it first (Ctrl+C)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "1. Cleaning WildFly deployments..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\deployments\dcm4chee-arc-ear-5.34.3-psql.ear*" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear*" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\dcm4chee-arc-ui2-5.34.3.war*" -Force -ErrorAction SilentlyContinue
Write-Host "   OK: Old deployments removed" -ForegroundColor Green

Write-Host ""
Write-Host "2. Cleaning WildFly caches..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\tmp\vfs\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\data\content\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "   OK: Caches cleared" -ForegroundColor Green

Write-Host ""
Write-Host "3. Deploying fresh EAR..." -ForegroundColor Yellow
$earFile = "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql.ear"
if (Test-Path $earFile) {
    Copy-Item $earFile "$wildflyBase\deployments\dcm4chee-arc-ear-5.34.3-psql.ear" -Force
    Write-Host "   OK: EAR deployed" -ForegroundColor Green
} else {
    Write-Host "   ERROR: EAR not found at $earFile" -ForegroundColor Red
    Write-Host "   Run complete-rebuild.ps1 first" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "=== READY TO START ===" -ForegroundColor Green
Write-Host ""
Write-Host "Start WildFly:" -ForegroundColor Cyan
Write-Host "  C:\wildfly\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor White
Write-Host ""
Write-Host "After WildFly starts:" -ForegroundColor Cyan
Write-Host "  1. Close ALL browser windows" -ForegroundColor White
Write-Host "  2. Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "  3. Open NEW incognito window" -ForegroundColor White
Write-Host "  4. Go to: http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
