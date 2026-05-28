# Fix URL issues by rebuilding Angular with correct config

Write-Host "`n=== FIXING URL ISSUES ===" -ForegroundColor Cyan

# Step 1: Clean everything
Write-Host "`n1. Cleaning build artifacts..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dcm4chee-arc-ui2\target -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\.angular -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\node_modules\.cache -ErrorAction SilentlyContinue
Write-Host "   OK: Cleaned" -ForegroundColor Green

# Step 2: Build Angular with correct config
Write-Host "`n2. Building Angular..." -ForegroundColor Yellow
Set-Location dcm4chee-arc-ui2
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: Angular build failed" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..
Write-Host "   OK: Angular built" -ForegroundColor Green

# Step 3: Build UI2 WAR
Write-Host "`n3. Building UI2 WAR..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ui2 -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: UI2 WAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: UI2 WAR built" -ForegroundColor Green

# Step 4: Build EAR
Write-Host "`n4. Building EAR..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ear -am -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: EAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: EAR built" -ForegroundColor Green

Write-Host "`n=== BUILD COMPLETE ===" -ForegroundColor Green
Write-Host "`nNext: Run deploy-fresh.ps1" -ForegroundColor Cyan