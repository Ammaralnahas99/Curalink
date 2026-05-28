# Quick Start: LDAP Fix Without Client Tools

You have slapd running but don't have OpenLDAP client tools installed. Here are your options:

## ✅ Recommended: Apache Directory Studio (GUI)

This is the **easiest** option - no command line needed!

### Step 1: Download and Install

1. Download: https://directory.apache.org/studio/
2. Extract the ZIP file to `C:\ApacheDirectoryStudio`
3. Run `ApacheDirectoryStudio.exe`

### Step 2: Connect to Your LDAP Server

1. Click **"New Connection"** button (or File → New → LDAP Connection)
2. Enter connection details:
   - **Connection name:** DCM4CHEE LDAP
   - **Hostname:** localhost
   - **Port:** 389
   - Click **"Next"**

3. Authentication:
   - **Bind DN or user:** `cn=admin,dc=dcm4che,dc=org`
   - **Bind password:** `secret`
   - Click **"Check Authentication"** to verify
   - Click **"Finish"**

### Step 3: Import LDIF Files

You need to import 6 files in this specific order:

#### A. Import Schema Files (to cn=config)

**Important:** Schema files go to `cn=config`, not the regular tree!

1. Right-click on **"Root DSE"** → **"Import"** → **"LDIF Import"**
2. Browse to: `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\slapd\dcm4chee-archive.ldif`
3. Make sure **"Update existing entries"** is checked
4. Click **"Finish"**

5. Repeat for: `slapd\dcm4chee-archive-ui.ldif`

**Note:** If schema import fails, you may need to use ldapmodify command. See Option 2 below.

#### B. Import Configuration Files (to dc=dcm4che,dc=org)

1. Right-click on connection → **"Import"** → **"LDIF Import"**
2. Import these files in order:
   - `init-baseDN.ldif`
   - `init-config.ldif`
   - `default-config.ldif` (this is large, may take a minute)
   - `default-ui-config.ldif`

3. For each file:
   - Browse to the file
   - Click **"Finish"**
   - If you get "Entry already exists" errors, that's OK - skip to next file

### Step 4: Verify

1. In Apache Directory Studio, expand the tree:
   ```
   dc=dcm4che,dc=org
     └─ cn=DICOM Configuration
         └─ cn=Devices
             ├─ dicomDeviceName=dcm4chee-arc
             ├─ dicomDeviceName=keycloak
             ├─ dicomDeviceName=logstash
             ├─ dicomDeviceName=storescp
             ├─ dicomDeviceName=stowrsd
             └─ dicomDeviceName=scheduledstation
   ```

2. If you see these devices, **SUCCESS!** ✅

### Step 5: Restart WildFly

```cmd
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
standalone.bat
```

### Step 6: Test in DCM4CHEE UI

Open: `http://localhost:8080/dcm4chee-arc/ui2/en/device/devicelist`

You should see the list of devices!

---

## Option 2: Install OpenLDAP Client Tools

If Apache Directory Studio doesn't work for schema import, install command-line tools:

### Download and Install

1. Visit: https://www.userbooster.de/en/download/openldap-for-windows.aspx
2. Download and install OpenLDAP for Windows
3. Add to PATH:
   ```cmd
   setx PATH "%PATH%;C:\OpenLDAP\ClientTools"
   ```
4. **Restart Command Prompt**

### Run Initialization Script

```cmd
cd C:\Users\USER\dcm4chee-arc-light
init-ldap.cmd
```

This will automatically:
- Install schema files
- Create base DN
- Load all configuration
- Verify setup

---

## Option 3: Python Script (If You Have Python)

### Install Python ldap3 Library

```cmd
pip install ldap3
```

### Run Script

```cmd
cd C:\Users\USER\dcm4chee-arc-light
python init-ldap-python.py
```

**Note:** Schema files still need manual installation via ldapmodify or Apache Directory Studio.

---

## Troubleshooting

### Apache Directory Studio: "Can't connect"

**Check:**
1. Is slapd running?
   ```cmd
   netstat -an | findstr :389
   ```
   Should show LISTENING on port 389

2. Try credentials:
   - DN: `cn=admin,dc=dcm4che,dc=org`
   - Password: `secret`

### Apache Directory Studio: "Entry already exists"

This is normal if you're re-running the import. Skip to the next file.

### Apache Directory Studio: "Undefined object class"

Schema files weren't imported correctly. You need to:
1. Use ldapmodify command (requires OpenLDAP client tools)
2. Or manually add schema through cn=config

### No devices showing in DCM4CHEE UI

**Check:**
1. Did you import all 6 LDIF files?
2. Is WildFly restarted after LDAP initialization?
3. Check WildFly logs:
   ```cmd
   powershell Get-Content "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log" -Tail 50 | Select-String -Pattern "ldap"
   ```

---

## Summary

**Easiest path:**
1. Download Apache Directory Studio
2. Connect to localhost:389
3. Import 6 LDIF files in order
4. Restart WildFly
5. Check device list in UI

**Total time:** ~15 minutes

---

## Files Location

All LDIF files are in:
```
C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\
```

Files to import:
1. `slapd\dcm4chee-archive.ldif` (schema)
2. `slapd\dcm4chee-archive-ui.ldif` (schema)
3. `init-baseDN.ldif`
4. `init-config.ldif`
5. `default-config.ldif`
6. `default-ui-config.ldif`

---

## Need Help?

See detailed instructions in:
- `INSTALL-LDAP-TOOLS.md` - How to install LDAP tools
- `LDAP-FIX-GUIDE.md` - Detailed LDAP setup guide
- `COMPLETE-FIX-INSTRUCTIONS.md` - Complete fix for both Keycloak and LDAP
