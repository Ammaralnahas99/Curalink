# Extract UI2 WAR from EAR and deploy it standalone for testing

Write-Host ""
Write-Host "=== EXTRACT AND DEPLOY UI2 WAR FROM EAR ===" -ForegroundColor Cyan

$earPath = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
$tempDir = "C:\temp\war-fix"
$deploymentsDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

# Step 1: Extract UI2 WAR from EAR
Write-Host ""
Write-Host "Step 1: Extracting UI2 WAR from EAR..." -ForegroundColor Yellow

if (!(Test-Path $earPath)) {
    Write-Host "   ERROR: EAR file not found at $earPath" -ForegroundColor Red
    exit 1
}

# Clean temp directory
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Extract UI2 WAR from EAR
Set-Location $tempDir
jar xf $earPath dcm4chee-arc-ui2-5.34.3.war

if (!(Test-Path "dcm4chee-arc-ui2-5.34.3.war")) {
    Write-Host "   ERROR: Failed to extract UI2 WAR from EAR" -ForegroundColor Red
    exit 1
}

$warSize = (Get-Item "dcm4chee-arc-ui2-5.34.3.war").Length
Write-Host "   OK: UI2 WAR extracted ($([math]::Round($warSize/1MB, 2)) MB)" -ForegroundColor Green

# Step 2: Deploy to WildFly
Write-Host ""
Write-Host "Step 2: Deploying UI2 WAR..." -ForegroundColor Yellow

# Remove old UI2 WAR deployments
Remove-Item "$deploymentsDir\dcm4chee-arc-ui2-*.war*" -Force -ErrorAction SilentlyContinue

# Copy WAR to deployments
Copy-Item "dcm4chee-arc-ui2-5.34.3.war" "$deploymentsDir\dcm4chee-arc-ui2-5.34.3.war" -Force

Write-Host "   OK: UI2 WAR copied to deployments" -ForegroundColor Green

# Step 3: Check deployment
Write-Host ""
Write-Host "Step 3: Checking deployment files..." -ForegroundColor Yellow
Get-ChildItem "$deploymentsDir" | Where-Object { $_.Name -like "*war*" } | ForEach-Object {
    Write-Host "   $($_.Name) - $([math]::Round($_.Length/1MB, 2)) MB" -ForegroundColor White
}

Write-Host ""
Write-Host "=== EXTRACTION COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. WildFly will auto-deploy the WAR (watch for .deployed marker)" -ForegroundColor White
Write-Host "  2. Wait 30-60 seconds for deployment" -ForegroundColor White
Write-Host "  3. Check: dir $deploymentsDir | findstr war" -ForegroundColor White
Write-Host "  4. Clear browser cache and test" -ForegroundColor White
Write-Host ""
Write-Host "WARNING: This deploys BOTH the EAR and standalone WAR." -ForegroundColor Yellow
Write-Host "This may cause conflicts. For production, use only the EAR." -ForegroundColor Yellow

Set-Location C:\Users\USER\dcm4chee-arc-light
