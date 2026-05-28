# Installing OpenLDAP Client Tools on Windows

You need OpenLDAP client tools (`ldapadd`, `ldapsearch`, `ldapmodify`) to initialize the DCM4CHEE LDAP database.

## Option 1: OpenLDAP for Windows (Recommended)

### Download and Install

1. **Download OpenLDAP for Windows:**
   - Visit: https://www.userbooster.de/en/download/openldap-for-windows.aspx
   - Download the latest version (e.g., `openldap-for-windows-x64.exe`)

2. **Install:**
   - Run the installer
   - Default installation path: `C:\OpenLDAP`
   - Client tools will be in: `C:\OpenLDAP\ClientTools`

3. **Add to PATH:**
   ```cmd
   setx PATH "%PATH%;C:\OpenLDAP\ClientTools"
   ```
   
   Or manually:
   - Right-click "This PC" → Properties
   - Advanced system settings → Environment Variables
   - Edit "Path" variable
   - Add: `C:\OpenLDAP\ClientTools`
   - Click OK and restart Command Prompt

4. **Verify Installation:**
   ```cmd
   ldapsearch -VV
   ```
   
   Should show version information.

### After Installation

Run the initialization script:
```cmd
cd C:\Users\USER\dcm4chee-arc-light
init-ldap.cmd
```

---

## Option 2: Apache Directory Studio (GUI - Easiest)

If you prefer a graphical interface:

### Download and Install

1. **Download:**
   - Visit: https://directory.apache.org/studio/
   - Download: `ApacheDirectoryStudio-2.0.0.v20210717-M17-win32.win32.x86_64.zip`

2. **Extract:**
   - Extract to: `C:\ApacheDirectoryStudio`
   - Run: `ApacheDirectoryStudio.exe`

### Connect to LDAP

1. **Create New Connection:**
   - Click "New Connection" button
   - Connection name: `DCM4CHEE LDAP`
   - Hostname: `localhost`
   - Port: `389`
   - Click "Next"

2. **Authentication:**
   - Bind DN: `cn=admin,dc=dcm4che,dc=org`
   - Bind password: `secret`
   - Click "Finish"

### Import LDIF Files

1. **Right-click connection** → Import → LDIF Import

2. **Import in this order:**
   
   **Schema files (use cn=config as base):**
   - `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\slapd\dcm4chee-archive.ldif`
   - `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\slapd\dcm4chee-archive-ui.ldif`
   
   **Configuration files:**
   - `init-baseDN.ldif`
   - `init-config.ldif`
   - `default-config.ldif`
   - `default-ui-config.ldif`

3. **Verify:**
   - Browse to: `dc=dcm4che,dc=org` → `cn=DICOM Configuration` → `cn=Devices`
   - You should see: dcm4chee-arc, keycloak, logstash, etc.

---

## Option 3: Python Script (No Installation Required)

If you have Python installed:

### Install Python ldap3 Library

```cmd
pip install ldap3
```

### Run Python Script

```cmd
cd C:\Users\USER\dcm4chee-arc-light
python init-ldap-python.py
```

**Note:** The Python script can handle most initialization but schema files still need to be installed manually using ldapmodify or Apache Directory Studio.

---

## Option 4: Use Existing OpenLDAP Installation

If you already have OpenLDAP server (slapd) installed, the client tools should be included.

### Find Client Tools

Check these locations:
- `C:\OpenLDAP\ClientTools\`
- `C:\Program Files\OpenLDAP\bin\`
- Where slapd.exe is located

### Add to PATH

```cmd
REM Find where ldapadd.exe is located
where /R C:\ ldapadd.exe

REM Add that directory to PATH
setx PATH "%PATH%;C:\path\to\ldap\tools"
```

---

## Option 5: Manual LDIF Import (Advanced)

If you cannot install any tools, you can manually create entries using PowerShell and .NET:

### PowerShell Script

```powershell
# Load .NET LDAP library
Add-Type -AssemblyName System.DirectoryServices.Protocols

# Create connection
$ldapConnection = New-Object System.DirectoryServices.Protocols.LdapConnection("localhost:389")
$ldapConnection.AuthType = [System.DirectoryServices.Protocols.AuthType]::Basic
$credential = New-Object System.Net.NetworkCredential("cn=admin,dc=dcm4che,dc=org", "secret")
$ldapConnection.Bind($credential)

# Add base DN
$addRequest = New-Object System.DirectoryServices.Protocols.AddRequest
$addRequest.DistinguishedName = "dc=dcm4che,dc=org"
$addRequest.Attributes.Add((New-Object System.DirectoryServices.Protocols.DirectoryAttribute("objectClass", @("top", "dcObject", "organization"))))
$addRequest.Attributes.Add((New-Object System.DirectoryServices.Protocols.DirectoryAttribute("o", "dcm4che.org")))
$addRequest.Attributes.Add((New-Object System.DirectoryServices.Protocols.DirectoryAttribute("dc", "dcm4che")))

try {
    $ldapConnection.SendRequest($addRequest)
    Write-Host "Base DN created successfully"
} catch {
    Write-Host "Error: $_"
}
```

This is complex and error-prone. **Use Option 1 or 2 instead.**

---

## Verification

After installing tools and initializing LDAP, verify:

```cmd
REM Check if tools are available
ldapsearch -VV

REM Test LDAP connection
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "dc=dcm4che,dc=org" -s base

REM List devices
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org" "(objectClass=dicomDevice)" dicomDeviceName

REM Check for dcm4chee-arc device
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "dc=dcm4che,dc=org" "(dicomDeviceName=dcm4chee-arc)" dicomDeviceName
```

Expected output should show the dcm4chee-arc device.

---

## Troubleshooting

### "ldapsearch: command not found"
- Client tools not installed or not in PATH
- Restart Command Prompt after adding to PATH
- Use full path: `C:\OpenLDAP\ClientTools\ldapsearch.exe`

### "Can't contact LDAP server"
- slapd not running
- Check: `netstat -an | findstr :389`
- Start slapd: `slapd.exe -d 1`

### "Invalid credentials"
- Wrong admin password
- Check `ldap.properties` for correct credentials
- Default: `cn=admin,dc=dcm4che,dc=org` / `secret`

### "No such object"
- Base DN doesn't exist
- Import `init-baseDN.ldif` first

### "Undefined object class"
- Schema not installed
- Import schema files from `slapd/` directory first

---

## Recommended Approach

**For beginners:** Use **Apache Directory Studio** (Option 2)
- Easy GUI interface
- Visual feedback
- No command-line knowledge needed

**For automation:** Use **OpenLDAP for Windows** (Option 1)
- Command-line tools
- Can be scripted
- Faster for repeated operations

**For Python users:** Use **Python script** (Option 3)
- No additional installation
- Cross-platform
- Good for automation

---

## Next Steps

After installing tools and initializing LDAP:

1. Restart WildFly
2. Access DCM4CHEE UI: `http://localhost:8080/dcm4chee-arc/ui2/en/`
3. Check device list: `http://localhost:8080/dcm4chee-arc/ui2/en/device/devicelist`
4. Verify devices are loaded

If devices appear, LDAP is working correctly!
