# Quick rebuild script to apply the Keycloak redirectUri fix

Write-Host "=== Rebuilding DCM4CHEE UI with Keycloak redirectUri fix ===" -ForegroundColor Cyan

# Step 1: Build the UI
Write-Host "`nStep 1: Building Angular UI..." -ForegroundColor Yellow
Push-Location dcm4chee-arc-ui2
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "UI build failed!" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

# Step 2: Extract the current EAR
Write-Host "`nStep 2: Extracting current EAR..." -ForegroundColor Yellow
$tempDir = "C:\temp\ear-rebuild"
$earPath = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"

if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}
New-Item -ItemType Directory -Path $tempDir | Out-Null
New-Item -ItemType Directory -Path "$tempDir\ear-extracted" | Out-Null
New-Item -ItemType Directory -Path "$tempDir\war-extracted" | Out-Null

Push-Location "$tempDir\ear-extracted"
jar xf $earPath
Pop-Location

# Step 3: Extract the UI WAR from the EAR
Write-Host "`nStep 3: Extracting UI WAR..." -ForegroundColor Yellow
Push-Location "$tempDir\war-extracted"
jar xf "$tempDir\ear-extracted\dcm4chee-arc-ui2-5.34.3.war"
Pop-Location

# Step 4: Copy the new built UI files
Write-Host "`nStep 4: Copying new UI files..." -ForegroundColor Yellow
$sourceUI = "dcm4chee-arc-ui2\target\dcm4chee-arc-ui2-5.34.3\en"
$destUI = "$tempDir\war-extracted\en"

if (Test-Path $destUI) {
    Remove-Item -Recurse -Force $destUI
}
Copy-Item -Recurse $sourceUI $destUI

# Step 5: Repackage the WAR
Write-Host "`nStep 5: Repackaging UI WAR..." -ForegroundColor Yellow
Push-Location "$tempDir\war-extracted"
jar cf "$tempDir\ear-extracted\dcm4chee-arc-ui2-5.34.3.war" .
Pop-Location

# Step 6: Repackage the EAR
Write-Host "`nStep 6: Repackaging EAR..." -ForegroundColor Yellow
Push-Location "$tempDir\ear-extracted"
jar cf "$tempDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .
Pop-Location

# Step 7: Deploy
Write-Host "`nStep 7: Deploying to WildFly..." -ForegroundColor Yellow
$deployDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

# Remove old deployment marker
Remove-Item -Force "$deployDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear.deployed" -ErrorAction SilentlyContinue

# Copy new EAR
Copy-Item -Force "$tempDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear" $earPath

# Trigger deployment
New-Item -Force "$deployDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear.dodeploy" | Out-Null

Write-Host "`n=== Build and Deployment Complete ===" -ForegroundColor Green
Write-Host "The UI has been rebuilt with the redirectUri fix."
Write-Host "Wait 30 seconds for WildFly to redeploy, then test:"
Write-Host "http://localhost:8080/dcm4chee-arc/ui2/en/index.html"
Write-Host "`nThe fix ensures all Keycloak redirects go to the main UI page."
