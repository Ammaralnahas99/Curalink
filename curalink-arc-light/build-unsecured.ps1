# Build with unsecured profile - no Keycloak authentication

Write-Host "`n=== UNSECURED BUILD ===" -ForegroundColor Cyan

# Step 1: Clean Angular build cache
Write-Host "`n1. Cleaning Angular cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dcm4chee-arc-ui2\.angular -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\node_modules\.cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\target -ErrorAction SilentlyContinue
Write-Host "   OK: Angular cache cleared" -ForegroundColor Green

# Step 2: Build Angular first
Write-Host "`n2. Building Angular UI..." -ForegroundColor Yellow
Set-Location dcm4chee-arc-ui2
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: Angular build failed" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..
Write-Host "   OK: Angular built" -ForegroundColor Green

# Step 3: Rebuild UI2 WAR (unsecured)
Write-Host "`n3. Building UI2 WAR (unsecured)..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ui2 -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: UI2 build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: UI2 built (unsecured)" -ForegroundColor Green

# Step 4: Rebuild WAR (unsecured)
Write-Host "`n4. Building WAR (unsecured)..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-war -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: WAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: WAR built (unsecured)" -ForegroundColor Green

# Step 5: Rebuild EAR (unsecured with psql profile)
Write-Host "`n5. Building EAR (unsecured)..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ear -am -DskipTests -Dpsql
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: EAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: EAR built (unsecured)" -ForegroundColor Green

Write-Host "`n=== UNSECURED BUILD COMPLETE ===" -ForegroundColor Green
Write-Host "`nNext: Stop WildFly and run deploy-fresh.ps1" -ForegroundColor Cyan
Write-Host "`nApplication will be accessible without Keycloak authentication" -ForegroundColor Yellow