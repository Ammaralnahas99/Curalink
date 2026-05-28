# Rebuild UI2 only - for quick style changes

Write-Host ""
Write-Host "=== REBUILDING UI2 ONLY ===" -ForegroundColor Cyan

Write-Host ""
Write-Host "1. Cleaning UI2 cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dcm4chee-arc-ui2\.angular -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\node_modules\.cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dcm4chee-arc-ui2\target -ErrorAction SilentlyContinue
Write-Host "   OK: Cache cleared" -ForegroundColor Green

Write-Host ""
Write-Host "2. Building UI2..." -ForegroundColor Yellow
& .\mvnw.cmd install -pl dcm4chee-arc-ui2 -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: UI2 build failed" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: UI2 built successfully" -ForegroundColor Green

Write-Host ""
Write-Host "=== UI2 BUILD COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next: Run deploy-ui2-war.ps1 to deploy the updated WAR" -ForegroundColor Cyan
