# Build dcm4chee-arc with Keycloak security enabled
Write-Host "=== Building DCM4CHEE-ARC with Keycloak Security ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "IMPORTANT: Make sure Keycloak is running before deploying!" -ForegroundColor Yellow
Write-Host "Keycloak should be accessible at: http://localhost:8843" -ForegroundColor Yellow
Write-Host ""

$response = Read-Host "Is Keycloak running? (y/n)"
if ($response -ne "y") {
    Write-Host "Please start Keycloak first, then run this script again." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 1: Cleaning old build..." -ForegroundColor Yellow
Remove-Item "dcm4chee-arc-ui2\target\webapp" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Clean complete" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Building all WAR modules with security..." -ForegroundColor Yellow
mvn clean install -Psecure -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "All modules built successfully" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Deploying to WildFly..." -ForegroundColor Yellow
powershell -ExecutionPolicy Bypass -File deploy-new-ear.ps1

Write-Host ""
Write-Host "=== Build Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "The application is now secured with Keycloak." -ForegroundColor Cyan
Write-Host "You will be redirected to Keycloak login when accessing the application." -ForegroundColor Cyan
Write-Host ""
Write-Host "Application URL:" -ForegroundColor Yellow
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "Keycloak Admin Console:" -ForegroundColor Yellow
Write-Host "  http://localhost:8843/admin" -ForegroundColor White
Write-Host ""
