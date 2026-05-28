# DCM4CHEE LDAP Initialization Script (PowerShell)
# Uses System.DirectoryServices for LDAP operations

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DCM4CHEE LDAP Initialization (PowerShell)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$ldapServer = "localhost"
$ldapPort = 389
$adminDN = "cn=admin,dc=dcm4che,dc=org"
$adminPassword = "secret"
$ldapDir = "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap"

# Function to test LDAP connection
function Test-LDAPConnection {
    param(
        [string]$Server,
        [int]$Port,
        [string]$BindDN,
        [string]$Password
    )
    
    try {
        $ldapConnection = New-Object System.DirectoryServices.Protocols.LdapConnection("${Server}:${Port}")
        $ldapConnection.AuthType = [System.DirectoryServices.Protocols.AuthType]::Basic
        $credential = New-Object System.Net.NetworkCredential($BindDN, $Password)
        $ldapConnection.Bind($credential)
        return $true
    }
    catch {
        return $false
    }
}

# Function to add LDIF entry
function Add-LDIFEntry {
    param(
        [string]$LdifFile,
        [string]$Server,
        [int]$Port,
        [string]$BindDN,
        [string]$Password
    )
    
    Write-Host "Processing: $LdifFile" -ForegroundColor Yellow
    
    # For now, we'll use ldapadd if available, otherwise show instructions
    $ldapaddPath = Get-Command ldapadd -ErrorAction SilentlyContinue
    
    if ($ldapaddPath) {
        $result = & ldapadd -H "ldap://${Server}:${Port}" -D $BindDN -w $Password -f $LdifFile 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  SUCCESS" -ForegroundColor Green
            return $true
        } else {
            Write-Host "  WARNING: $result" -ForegroundColor Yellow
            return $false
        }
    } else {
        Write-Host "  SKIPPED: ldapadd not available" -ForegroundColor Yellow
        return $false
    }
}

# Check if slapd is running
Write-Host "Step 1: Checking if slapd is running..." -ForegroundColor Cyan
Write-Host "-----------------------------------" -ForegroundColor Cyan
$listening = Get-NetTCPConnection -LocalPort 389 -State Listen -ErrorAction SilentlyContinue
if ($listening) {
    Write-Host "OK: Port 389 is listening" -ForegroundColor Green
} else {
    Write-Host "ERROR: Port 389 is not listening!" -ForegroundColor Red
    Write-Host "Please start slapd.exe first" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 2: Testing LDAP connection..." -ForegroundColor Cyan
Write-Host "-----------------------------------" -ForegroundColor Cyan
if (Test-LDAPConnection -Server $ldapServer -Port $ldapPort -BindDN $adminDN -Password $adminPassword) {
    Write-Host "OK: LDAP connection successful" -ForegroundColor Green
} else {
    Write-Host "WARNING: Cannot connect to LDAP with admin credentials" -ForegroundColor Yellow
    Write-Host "This is normal if base DN doesn't exist yet" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "LDAP CLIENT TOOLS REQUIRED" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To initialize LDAP, you need OpenLDAP client tools." -ForegroundColor White
Write-Host ""
Write-Host "Option 1: Download OpenLDAP for Windows" -ForegroundColor Cyan
Write-Host "  https://www.userbooster.de/en/download/openldap-for-windows.aspx" -ForegroundColor White
Write-Host "  Install and add to PATH: C:\OpenLDAP\ClientTools" -ForegroundColor White
Write-Host ""
Write-Host "Option 2: Use Apache Directory Studio (GUI)" -ForegroundColor Cyan
Write-Host "  https://directory.apache.org/studio/" -ForegroundColor White
Write-Host "  Connect to: ldap://localhost:389" -ForegroundColor White
Write-Host "  Bind DN: cn=admin,dc=dcm4che,dc=org" -ForegroundColor White
Write-Host "  Password: secret" -ForegroundColor White
Write-Host "  Import LDIF files from: $ldapDir" -ForegroundColor White
Write-Host ""
Write-Host "Option 3: Use Python ldap3 library" -ForegroundColor Cyan
Write-Host "  Run: init-ldap-python.py" -ForegroundColor White
Write-Host ""
Write-Host "Files to import (in order):" -ForegroundColor Cyan
Write-Host "  1. slapd\dcm4chee-archive.ldif (schema)" -ForegroundColor White
Write-Host "  2. slapd\dcm4chee-archive-ui.ldif (schema)" -ForegroundColor White
Write-Host "  3. init-baseDN.ldif" -ForegroundColor White
Write-Host "  4. init-config.ldif" -ForegroundColor White
Write-Host "  5. default-config.ldif" -ForegroundColor White
Write-Host "  6. default-ui-config.ldif" -ForegroundColor White
Write-Host ""
Write-Host "All files are in: $ldapDir" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to exit"
