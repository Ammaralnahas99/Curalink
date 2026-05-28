# DCM4CHEE OpenLDAP (slapd) Configuration Fix

## Problem
DCM4CHEE requires OpenLDAP to store device configuration, but the LDAP database may be empty or missing required schema files.

## Prerequisites
- OpenLDAP (slapd.exe) installed and running on port 389
- LDAP admin credentials: `cn=admin,dc=dcm4che,dc=org` / password: `secret`
- ldapadd.exe and ldapmodify.exe tools available

## Solution: Initialize LDAP Database

### Step 1: Stop slapd if running
```cmd
REM Find and stop slapd process
tasklist | findstr slapd
taskkill /F /IM slapd.exe
```

### Step 2: Install DCM4CHEE Schema Files

The schema files define the DICOM and DCM4CHEE-specific object classes and attributes.

**Location of schema files in project:**
- `dcm4chee-arc-assembly/src/main/resources/ldap/slapd/dcm4chee-archive.ldif`
- `dcm4chee-arc-assembly/src/main/resources/ldap/slapd/dcm4chee-archive-ui.ldif`

**Install schema using ldapmodify:**
```cmd
REM Navigate to LDAP resources directory
cd C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap

REM Add DCM4CHEE Archive schema
ldapmodify -a -H ldap://localhost:389 -D "cn=config" -w secret -f slapd\dcm4chee-archive.ldif

REM Add DCM4CHEE Archive UI schema
ldapmodify -a -H ldap://localhost:389 -D "cn=config" -w secret -f slapd\dcm4chee-archive-ui.ldif
```

### Step 3: Initialize Base DN

Create the base directory structure `dc=dcm4che,dc=org`:

```cmd
REM Add base DN
ldapadd -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -f init-baseDN.ldif
```

### Step 4: Initialize DICOM Configuration Structure

Create the DICOM configuration root and registries:

```cmd
REM Add DICOM configuration structure
ldapadd -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -f init-config.ldif
```

### Step 5: Load Default DCM4CHEE Configuration

Load the default device configuration including dcm4chee-arc device:

```cmd
REM Add default configuration (this is a large file with ~19000 lines)
ldapadd -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -f default-config.ldif
```

### Step 6: Load Default UI Configuration

```cmd
REM Add default UI configuration
ldapadd -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -f default-ui-config.ldif
```

### Step 7: Verify LDAP Configuration

Test that the configuration was loaded:

```cmd
REM Search for dcm4chee-arc device
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "dc=dcm4che,dc=org" "(dicomDeviceName=dcm4chee-arc)"

REM List all devices
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org" "(objectClass=dicomDevice)" dicomDeviceName
```

Expected output should show:
- `dicomDeviceName: dcm4chee-arc`
- `dicomDeviceName: keycloak`
- `dicomDeviceName: logstash`
- `dicomDeviceName: storescp`
- `dicomDeviceName: stowrsd`
- `dicomDeviceName: scheduledstation`

### Step 8: Restart WildFly

After LDAP is properly configured, restart WildFly to connect to LDAP:

```cmd
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
standalone.bat
```

## Troubleshooting

### Error: "No such object"
This means the base DN doesn't exist. Run Step 3 first.

### Error: "Already exists"
The entry is already in LDAP. Skip that step or delete and re-add:
```cmd
ldapdelete -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret "dicomDeviceName=dcm4chee-arc,cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org"
```

### Error: "Invalid credentials"
Check the admin password in `ldap.properties`:
```
java.naming.security.principal=cn=admin,dc=dcm4che,dc=org
java.naming.security.credentials=secret
```

### Error: "Undefined object class"
The schema files weren't loaded. Run Step 2 first.

### Check if slapd is running
```cmd
netstat -an | findstr :389
```

Should show:
```
TCP    0.0.0.0:389            0.0.0.0:0              LISTENING
```

### View slapd logs
Check the slapd log file location (usually in the OpenLDAP installation directory).

## Alternative: Use Apache Directory Studio

If command-line tools are not available, you can use Apache Directory Studio (GUI):

1. Download from: https://directory.apache.org/studio/
2. Connect to `ldap://localhost:389`
3. Bind DN: `cn=admin,dc=dcm4che,dc=org`
4. Password: `secret`
5. Import LDIF files through the GUI

## Files Needed (in order)

1. `slapd/dcm4chee-archive.ldif` - Schema definition
2. `slapd/dcm4chee-archive-ui.ldif` - UI schema definition  
3. `init-baseDN.ldif` - Base directory
4. `init-config.ldif` - DICOM configuration structure
5. `default-config.ldif` - Default device configuration
6. `default-ui-config.ldif` - Default UI configuration

All files are in: `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\`

## Quick Test After Setup

Access DCM4CHEE UI and check if the device configuration loads:
```
http://localhost:8080/dcm4chee-arc/ui2/en/device/devicelist
```

If LDAP is working, you should see the list of devices without errors.
