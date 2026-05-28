# Force clean rebuild with dcm4chee realm
Write-Host "=== Force Clean Rebuild with dcm4chee Realm ===" -ForegroundColor Cyan

Write-Host "Step 1: Complete clean..." -ForegroundColor Yellow
mvn clean
Remove-Item "dcm4chee-arc-ui2\target" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "dcm4chee-arc-war\target" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "dcm4chee-arc-ear\target" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Clean complete" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Building with dcm4chee realm..." -ForegroundColor Yellow
mvn clean install -Psecure -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "Build complete" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Deploying..." -ForegroundColor Yellow
powershell -ExecutionPolicy Bypass -File deploy-secure-ear.ps1

Write-Host ""
Write-Host "=== Rebuild Complete ===" -ForegroundColor Green
Write-Host "The application should now use dcm4chee realm" -ForegroundColor Cyan