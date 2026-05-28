# Add dcm4chee-arc-ui webapp entry to LDAP
# This fixes the "dcmWebAppName=dcm4chee-arc-ui could not find" error

Write-Host "=== Adding dcm4chee-arc-ui Webapp Entry to LDAP ===" -ForegroundColor Cyan
Write-Host ""

# LDAP connection details
$ldapHost = "ldap://localhost:389"
$ldapAdmin = "cn=admin,dc=dcm4che,dc=org"
$ldapPass = "secret"
$ldifFile = "add-webapp-entry.ldif"

# Check if LDIF file exists
if (-not (Test-Path $ldifFile)) {
    Write-Host "ERROR: $ldifFile not found!" -ForegroundColor Red
    Write-Host "Make sure you're running this from the dcm4chee-arc-light directory" -ForegroundColor Yellow
    exit 1
}

# Check if ldapadd is available
$ldapaddCmd = Get-Command ldapadd -ErrorAction SilentlyContinue

if ($ldapaddCmd) {
    Write-Host "Method 1: Using ldapadd (OpenLDAP must be running)" -ForegroundColor Yellow
    Write-Host "Command: ldapadd -H $ldapHost -D $ldapAdmin -w [password] -f $ldifFile" -ForegroundColor Gray
    Write-Host ""
    
    # Try to add the entry
    $output = & ldapadd -H $ldapHost -D $ldapAdmin -w $ldapPass -f $ldifFile 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "SUCCESS: Webapp entry added to LDAP!" -ForegroundColor Green
        Write-Host ""
        Write-Host "The entry has been created at:" -ForegroundColor Cyan
        Write-Host "  dcmWebAppName=dcm4chee-arc-ui,dicomDeviceName=dcm4chee-arc,cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org" -ForegroundColor White
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "  1. Restart WildFly if it's running" -ForegroundColor White
        Write-Host "  2. Access the UI at http://localhost:8080/dcm4chee-arc/ui2" -ForegroundColor White
        Write-Host "  3. The 409 Conflict errors should be resolved" -ForegroundColor White
    } elseif ($output -match "Already exists") {
        Write-Host "INFO: Webapp entry already exists in LDAP" -ForegroundColor Yellow
        Write-Host "If you're still getting errors, the entry might be corrupted." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "To fix a corrupted entry, run: .\fix-webapp-entry.cmd" -ForegroundColor Cyan
    } else {
        Write-Host "ERROR: Failed to add webapp entry" -ForegroundColor Red
        Write-Host "Output: $output" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Possible issues:" -ForegroundColor Yellow
        Write-Host "  1. OpenLDAP is not running (start it first)" -ForegroundColor White
        Write-Host "  2. Wrong credentials (check ldap.properties)" -ForegroundColor White
        Write-Host "  3. Entry already exists but is corrupted" -ForegroundColor White
        Write-Host ""
        Write-Host "Alternative: Use fix-webapp-ldap.cmd (requires stopping OpenLDAP)" -ForegroundColor Cyan
        exit 1
    }
} else {
    Write-Host "WARNING: ldapadd command not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "You have two options:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Option 1: Install OpenLDAP client tools" -ForegroundColor Cyan
    Write-Host "  - Download from: https://www.openldap.org/" -ForegroundColor White
    Write-Host "  - Add to PATH and run this script again" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 2: Use slapadd (requires stopping OpenLDAP)" -ForegroundColor Cyan
    Write-Host "  - Run: .\fix-webapp-ldap.cmd" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 3: Add via DCM4CHEE UI" -ForegroundColor Cyan
    Write-Host "  - See instructions in: add-webapp-via-ui.md" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green
