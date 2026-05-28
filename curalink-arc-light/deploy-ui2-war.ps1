# Deploy UI2 WAR only - for quick updates

Write-Host ""
Write-Host "=== DEPLOYING UI2 WAR ===" -ForegroundColor Cyan

$wildflyDeployments = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

# Check if WildFly is running
$wildfly = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*wildfly*" -or $_.CommandLine -like "*jboss*" }
if ($wildfly) {
    Write-Host ""
    Write-Host "WARNING: WildFly is running. The WAR will be hot-deployed." -ForegroundColor Yellow
    Write-Host "For best results, stop WildFly first (Ctrl+C)" -ForegroundColor Yellow
    Write-Host ""
    $response = Read-Host "Continue anyway? (y/n)"
    if ($response -ne "y") {
        Write-Host "Deployment cancelled" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "1. Removing old UI2 WAR..." -ForegroundColor Yellow
Remove-Item "$wildflyDeployments\dcm4chee-arc-ui2-*.war*" -Force -ErrorAction SilentlyContinue
Write-Host "   OK: Old WAR removed" -ForegroundColor Green

Write-Host ""
Write-Host "2. Deploying new UI2 WAR..." -ForegroundColor Yellow
$warFile = "dcm4chee-arc-ui2\target\dcm4chee-arc-ui2-5.34.3.war"
if (Test-Path $warFile) {
    $warSize = (Get-Item $warFile).Length
    Copy-Item $warFile "$wildflyDeployments\dcm4chee-arc-ui2-5.34.3.war" -Force
    Write-Host "   OK: WAR deployed ($([math]::Round($warSize/1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host "   ERROR: WAR not found at $warFile" -ForegroundColor Red
    Write-Host "   Run rebuild-ui2-only.ps1 first" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "=== DEPLOYMENT COMPLETE ===" -ForegroundColor Green
Write-Host ""
if ($wildfly) {
    Write-Host "WildFly will auto-deploy the WAR. Watch the console for deployment status." -ForegroundColor Cyan
    Write-Host "After deployment completes:" -ForegroundColor Cyan
} else {
    Write-Host "Start WildFly:" -ForegroundColor Cyan
    Write-Host "  C:\Dcm4chee\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor White
    Write-Host ""
    Write-Host "After WildFly starts:" -ForegroundColor Cyan
}
Write-Host "  1. Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "  2. Hard refresh (Ctrl+F5)" -ForegroundColor White
Write-Host "  3. Check: http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
