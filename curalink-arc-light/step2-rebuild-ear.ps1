# Step 2: Rebuild EAR with fresh UI2 and deploy

Write-Host "`n=== STEP 2: Rebuild and Deploy EAR ===" -ForegroundColor Cyan

Write-Host "`n1. Building EAR with fresh UI2..." -ForegroundColor Yellow
Write-Host "   This will include the newly built UI2 WAR (without old paths)" -ForegroundColor Gray

# Build the EAR
& .\mvnw.cmd clean install -pl dcm4chee-arc-ear -am -DskipTests

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ EAR build successful" -ForegroundColor Green
} else {
    Write-Host "✗ EAR build failed" -ForegroundColor Red
    exit 1
}

Write-Host "`n2. Verifying EAR file..." -ForegroundColor Yellow
$earFile = "dcm4chee-arc-ear\target\curalink-5.34.3-psql.ear"
if (Test-Path $earFile) {
    $earSize = (Get-Item $earFile).Length / 1MB
    Write-Host "✓ EAR file exists: $earFile ($([math]::Round($earSize, 2)) MB)" -ForegroundColor Green
} else {
    Write-Host "✗ EAR file not found at $earFile" -ForegroundColor Red
    exit 1
}

Write-Host "`n3. Deploying to WildFly..." -ForegroundColor Yellow
$deployDir = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"
Copy-Item $earFile "$deployDir\curalink.ear" -Force
Write-Host "✓ EAR copied to: $deployDir\curalink.ear" -ForegroundColor Green

Write-Host "`n4. Verifying deployment file..." -ForegroundColor Yellow
if (Test-Path "$deployDir\curalink.ear") {
    $deployedSize = (Get-Item "$deployDir\curalink.ear").Length / 1MB
    Write-Host "✓ Deployed EAR: $([math]::Round($deployedSize, 2)) MB" -ForegroundColor Green
} else {
    Write-Host "✗ Deployment failed - file not found" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== STEP 2 COMPLETE ===" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Start WildFly: C:\wildfly\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor White
Write-Host "2. Wait for deployment (watch for 'Registered web context: /curalink')" -ForegroundColor White
Write-Host "3. Clear browser cache completely (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "4. Open in NEW incognito window: http://localhost:8080/curalink/ui2/en/" -ForegroundColor White
