# Complete Keycloak redirect fix script
# This fixes the 302 redirect issue by:
# 1. Adding redirectUri to Keycloak init in the UI
# 2. Adding bearer-only to the backend WAR in standalone.xml
# 3. Rebuilding and redeploying everything

Write-Host "=== DCM4CHEE Keycloak Redirect Fix ===" -ForegroundColor Cyan
Write-Host "This will fix the 302 redirect errors on API calls`n" -ForegroundColor White

# Check if WildFly is running
$wildflyProcess = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object {
    $_.CommandLine -like "*wildfly*" -or $_.CommandLine -like "*jboss*"
}

if ($wildflyProcess) {
    Write-Host "WARNING: WildFly appears to be running!" -ForegroundColor Yellow
    Write-Host "Please stop WildFly before running this script." -ForegroundColor Yellow
    $response = Read-Host "Continue anyway? (y/n)"
    if ($response -ne 'y') {
        exit 0
    }
}

# Step 1: Fix standalone.xml
Write-Host "`nStep 1: Fixing standalone.xml..." -ForegroundColor Yellow
$standaloneXml = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml"

if (!(Test-Path $standaloneXml)) {
    Write-Host "ERROR: standalone.xml not found at $standaloneXml" -ForegroundColor Red
    exit 1
}

# Backup
Copy-Item $standaloneXml "$standaloneXml.backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Host "  Backup created" -ForegroundColor Gray

# Read and modify
$content = Get-Content $standaloneXml -Raw

# Add bearer-only if not present
if ($content -notmatch '<bearer-only>true</bearer-only>') {
    Write-Host "  Adding bearer-only to backend WAR..." -ForegroundColor Gray
    $pattern = '(<secure-deployment name="dcm4chee-arc-war-5\.34\.3-secure\.war">\s*)'
    $replacement = '$1<bearer-only>true</bearer-only>'
    $content = $content -replace $pattern, $replacement
    
    $content | Set-Content $standaloneXml -Encoding UTF8
    Write-Host "  bearer-only added!" -ForegroundColor Green
} else {
    Write-Host "  bearer-only already configured" -ForegroundColor Green
}

# Step 2: Verify the UI source fix
Write-Host "`nStep 2: Verifying UI source fix..." -ForegroundColor Yellow
$globalvarPath = "dcm4chee-arc-ui2\src\app\constants\globalvar.ts"

if (!(Test-Path $globalvarPath)) {
    Write-Host "ERROR: globalvar.ts not found" -ForegroundColor Red
    exit 1
}

$globalvarContent = Get-Content $globalvarPath -Raw
if ($globalvarContent -match 'redirectUri:') {
    Write-Host "  redirectUri already in source code!" -ForegroundColor Green
} else {
    Write-Host "ERROR: redirectUri not found in globalvar.ts" -ForegroundColor Red
    Write-Host "The source code fix was not applied correctly." -ForegroundColor Red
    exit 1
}

# Step 3: Rebuild UI
Write-Host "`nStep 3: Rebuilding Angular UI..." -ForegroundColor Yellow
Push-Location dcm4chee-arc-ui2
npm run build 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: UI build failed!" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location
Write-Host "  UI built successfully!" -ForegroundColor Green

# Step 4: Extract and update EAR
Write-Host "`nStep 4: Updating deployed EAR..." -ForegroundColor Yellow
$tempDir = "C:\temp\keycloak-fix-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
$earPath = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"

if (!(Test-Path $earPath)) {
    Write-Host "ERROR: EAR not found at $earPath" -ForegroundColor Red
    exit 1
}

New-Item -ItemType Directory -Path "$tempDir\ear" -Force | Out-Null
New-Item -ItemType Directory -Path "$tempDir\war" -Force | Out-Null

# Extract EAR
Write-Host "  Extracting EAR..." -ForegroundColor Gray
Push-Location "$tempDir\ear"
jar xf $earPath 2>&1 | Out-Null
Pop-Location

# Extract UI WAR
Write-Host "  Extracting UI WAR..." -ForegroundColor Gray
Push-Location "$tempDir\war"
jar xf "$tempDir\ear\dcm4chee-arc-ui2-5.34.3.war" 2>&1 | Out-Null
Pop-Location

# Replace UI files
Write-Host "  Copying new UI files..." -ForegroundColor Gray
$sourceUI = "dcm4chee-arc-ui2\target\dcm4chee-arc-ui2-5.34.3\en"
$destUI = "$tempDir\war\en"

if (Test-Path $destUI) {
    Remove-Item -Recurse -Force $destUI
}
Copy-Item -Recurse $sourceUI $destUI

# Repackage WAR
Write-Host "  Repackaging UI WAR..." -ForegroundColor Gray
Push-Location "$tempDir\war"
jar cf "$tempDir\ear\dcm4chee-arc-ui2-5.34.3.war" . 2>&1 | Out-Null
Pop-Location

# Repackage EAR
Write-Host "  Repackaging EAR..." -ForegroundColor Gray
Push-Location "$tempDir\ear"
jar cf "$tempDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear" . 2>&1 | Out-Null
Pop-Location

# Deploy
Write-Host "  Deploying..." -ForegroundColor Gray
$deployDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

Remove-Item -Force "$deployDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear.deployed" -ErrorAction SilentlyContinue
Copy-Item -Force "$tempDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear" $earPath
New-Item -Force "$deployDir\dcm4chee-arc-ear-5.34.3-psql-secure.ear.dodeploy" | Out-Null

Write-Host "`n=== Fix Applied Successfully! ===" -ForegroundColor Green
Write-Host "`nWhat was fixed:" -ForegroundColor White
Write-Host "  1. Added redirectUri to Keycloak init (always redirects to main UI page)" -ForegroundColor Gray
Write-Host "  2. Added bearer-only to backend WAR (accepts Bearer tokens from UI)" -ForegroundColor Gray
Write-Host "`nNext steps:" -ForegroundColor White
Write-Host "  1. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin && standalone.bat" -ForegroundColor Cyan
Write-Host "  2. Wait 30 seconds for deployment" -ForegroundColor Cyan
Write-Host "  3. Test: http://localhost:8080/dcm4chee-arc/ui2/en/index.html" -ForegroundColor Cyan
Write-Host "`nThe 302 redirect errors should now be fixed!" -ForegroundColor Green
