# Quick rebuild and redeploy UI only
Write-Host "=== Quick UI Rebuild and Redeploy ===" -ForegroundColor Cyan

Write-Host "Step 1: Cleaning old build..." -ForegroundColor Yellow
Remove-Item "dcm4chee-arc-ui2\target\webapp" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Clean complete" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Building UI2 with Maven (includes Angular build)..." -ForegroundColor Yellow
mvn clean install -pl dcm4chee-arc-ui2 -Punsecure
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Maven build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "UI2 build complete" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Building EAR..." -ForegroundColor Yellow
mvn clean install -pl dcm4chee-arc-ear -Ppsql -Punsecure
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: EAR build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "EAR build complete" -ForegroundColor Green

Write-Host ""
Write-Host "Step 4: Deploying to WildFly..." -ForegroundColor Yellow
powershell -ExecutionPolicy Bypass -File redeploy.ps1

Write-Host ""
Write-Host "=== Done ===" -ForegroundColor Green
