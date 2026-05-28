# Complete rebuild and deploy secure EAR

Write-Host ""
Write-Host "=== COMPLETE SECURE REBUILD AND DEPLOY ===" -ForegroundColor Cyan

# Check if WildFly is running
$wildfly = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*wildfly*" -or $_.CommandLine -like "*jboss*" }
if ($wildfly) {
    Write-Host ""
    Write-Host "WARNING: WildFly is running. Please stop it first (Ctrl+C)" -ForegroundColor Red
    Write-Host "Press any key to continue after stopping WildFly, or Ctrl+C to cancel..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

Write-Host ""
Write-Host "Step 1: Cleaning caches..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dcm4chee-arc-ui2\.angular -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\node_modules\.cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\target -ErrorAction SilentlyContinue
Write-Host "   OK: Caches cleared" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Building UI2..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ui2 -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: UI2 build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: UI2 built" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Building WAR with secure profile..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-war -Psecure -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: WAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: Secure WAR built" -ForegroundColor Green

Write-Host ""
Write-Host "Step 4: Building secure EAR..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ear -Psecure -Ddb=psql -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: Secure EAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: Secure EAR built" -ForegroundColor Green

Write-Host ""
Write-Host "Step 5: Deploying to WildFly..." -ForegroundColor Yellow
$wildflyDeployments = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

# Remove old deployments
Remove-Item "$wildflyDeployments\dcm4chee-arc-ear-*.ear*" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyDeployments\dcm4chee-arc-ui2-*.war*" -Force -ErrorAction SilentlyContinue
Write-Host "   OK: Old deployments removed" -ForegroundColor Green

# Clear WildFly caches
$wildflyBase = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone"
Remove-Item "$wildflyBase\tmp\vfs\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\data\content\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "   OK: WildFly caches cleared" -ForegroundColor Green

# Deploy secure EAR
$earFile = "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
if (Test-Path $earFile) {
    $earSize = (Get-Item $earFile).Length
    Copy-Item $earFile "$wildflyDeployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear" -Force
    Write-Host "   OK: Secure EAR deployed ($([math]::Round($earSize/1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host "   ERROR: Secure EAR not found at $earFile" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== DEPLOYMENT COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Start WildFly: C:\Dcm4chee\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor White
Write-Host "  2. Wait for deployment to complete (watch console)" -ForegroundColor White
Write-Host "  3. Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "  4. Use incognito window" -ForegroundColor White
Write-Host "  5. Access: http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "You will be redirected to Keycloak for authentication." -ForegroundColor Yellow
