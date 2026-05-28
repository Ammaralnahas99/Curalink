# Complete rebuild - clears everything and rebuilds from scratch

Write-Host "`n=== COMPLETE REBUILD ===" -ForegroundColor Cyan

# Step 1: Clean Angular build cache
Write-Host "`n1. Cleaning Angular cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dcm4chee-arc-ui2\.angular -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\node_modules\.cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\target -ErrorAction SilentlyContinue
Write-Host "   ✓ Angular cache cleared" -ForegroundColor Green

# Step 2: Rebuild UI2
Write-Host "`n2. Building UI2..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ui2 -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ✗ UI2 build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   ✓ UI2 built" -ForegroundColor Green

# Step 3: Rebuild WAR
Write-Host "`n3. Building WAR..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-war -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ✗ WAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   ✓ WAR built" -ForegroundColor Green

# Step 4: Rebuild EAR
Write-Host "`n4. Building EAR..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ear -am -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ✗ EAR build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   ✓ EAR built" -ForegroundColor Green

Write-Host "`n=== BUILD COMPLETE ===" -ForegroundColor Green
Write-Host "`nNext: Stop WildFly and run deploy-fresh.ps1" -ForegroundColor Cyan
