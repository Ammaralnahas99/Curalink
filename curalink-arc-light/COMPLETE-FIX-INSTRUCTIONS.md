# DCM4CHEE Complete Fix Instructions

This document provides step-by-step instructions to fix both Keycloak authentication and LDAP configuration issues.

## Overview

You have two separate issues:
1. **Keycloak Authentication**: 401 Unauthorized errors when UI tries to access backend API
2. **LDAP Configuration**: Empty or missing LDAP database for device configuration

## Part 1: Fix Keycloak Authentication

### Current Status
✅ `redirectUri` fix applied in `globalvar.ts`  
✅ `keycloak.json` cleaned up (removed extra fields)  
✅ Backend WAR has `bearer-only` in standalone.xml  
❌ UI WAR still in standalone.xml (needs to be removed)

### Fix Steps

#### Step 1: Edit standalone.xml

**File:** `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml`

**Find this section:**
```xml
<subsystem xmlns="urn:wildfly:elytron-oidc-client:2.0">
    <secure-deployment name="dcm4chee-arc-ui2-5.34.3.war">
        <adapter-state-cookie-path>/</adapter-state-cookie-path>
        <client-id>dcm4chee-arc-ui</client-id>
        <public-client>true</public-client>
        <realm>dcm4chee</realm>
        <turn-off-change-session-id-on-login>true</turn-off-change-session-id-on-login>
        <auth-server-url>http://localhost:8843/auth</auth-server-url>
        <ssl-required>NONE</ssl-required>
        <confidential-port>0</confidential-port>
        <principal-attribute>preferred_username</principal-attribute>
    </secure-deployment>
    <secure-deployment name="dcm4chee-arc-war-5.34.3-secure.war">
        <adapter-state-cookie-path>/</adapter-state-cookie-path>
        <bearer-only>true</bearer-only>
        <client-id>dcm4chee-arc-ui</client-id>
        <public-client>true</public-client>
        <realm>dcm4chee</realm>
        <turn-off-change-session-id-on-login>true</turn-off-change-session-id-on-login>
        <auth-server-url>http://localhost:8843/auth</auth-server-url>
        <ssl-required>NONE</ssl-required>
        <confidential-port>0</confidential-port>
        <principal-attribute>preferred_username</principal-attribute>
    </secure-deployment>
</subsystem>
```

**Replace with (remove UI WAR, keep only backend):**
```xml
<subsystem xmlns="urn:wildfly:elytron-oidc-client:2.0">
    <secure-deployment name="dcm4chee-arc-war-5.34.3-secure.war">
        <bearer-only>true</bearer-only>
        <client-id>dcm4chee-arc-ui</client-id>
        <realm>dcm4chee</realm>
        <auth-server-url>http://localhost:8843</auth-server-url>
        <ssl-required>NONE</ssl-required>
        <confidential-port>0</confidential-port>
        <principal-attribute>preferred_username</principal-attribute>
    </secure-deployment>
</subsystem>
```

**Note:** Also changed `http://localhost:8843/auth` to `http://localhost:8843` (removed `/auth` path)

#### Step 2: Rebuild and Redeploy

```cmd
REM Step 1: Rebuild the UI with the fixed keycloak.json
cd C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2
call npm run build

REM Step 2: Copy built UI to temp directory
cd C:\temp\fix-deploy\war
if exist en rmdir /s /q en
xcopy /s /e /i /y "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2\target\webapp\en" "en"

REM Step 3: Repackage UI WAR
cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .

REM Step 4: Repackage EAR
cd C:\temp\fix-deploy\ear
jar cf "..\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .

REM Step 5: Undeploy current EAR
del "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear.deployed"

REM Step 6: Deploy new EAR
copy /y "C:\temp\fix-deploy\dcm4chee-arc-ear-5.34.3-psql-secure.ear" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\"

REM Step 7: Wait for deployment
echo Waiting for deployment...
timeout /t 30
dir "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\*.ear.*"
```

#### Step 3: Restart WildFly

Stop WildFly (Ctrl+C in the terminal where it's running), then:

```cmd
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
standalone.bat
```

#### Step 4: Test Keycloak Authentication

1. Clear browser cache completely (Ctrl+Shift+Delete)
2. Open: `http://localhost:8080/dcm4chee-arc/ui2/en/index.html`
3. You should be redirected to Keycloak login
4. Login with your Keycloak credentials
5. After login, UI should load without 401 errors

**Check in Browser DevTools (F12):**
- Network tab → Look at API requests (e.g., `/dcm4chee-arc/devices`)
- Request Headers should include: `Authorization: Bearer <long-token>`
- Response should be 200 OK, not 401 Unauthorized

---

## Part 2: Fix LDAP Configuration

### Current Status
❌ LDAP database may be empty or missing schema files  
❌ Device configuration not loading

### Fix Steps

#### Option A: Automated (Recommended)

Run the automated initialization script:

```cmd
cd C:\Users\USER\dcm4chee-arc-light
check-ldap.cmd
```

If the check fails, run:

```cmd
init-ldap.cmd
```

This will:
1. Install DCM4CHEE schema files
2. Create base DN structure
3. Load default device configuration
4. Verify the setup

#### Option B: Manual

Follow the detailed instructions in `LDAP-FIX-GUIDE.md`

#### Verify LDAP is Working

After initialization, test:

```cmd
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "dc=dcm4che,dc=org" "(dicomDeviceName=dcm4chee-arc)" dicomDeviceName
```

Expected output:
```
# dcm4chee-arc, Devices, DICOM Configuration, dcm4che.org
dn: dicomDeviceName=dcm4chee-arc,cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org
dicomDeviceName: dcm4chee-arc
```

#### Restart WildFly

After LDAP is configured:

```cmd
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
standalone.bat
```

Check WildFly logs for LDAP connection:
```cmd
powershell Get-Content "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log" -Tail 50 | Select-String -Pattern "ldap"
```

---

## Part 3: Final Verification

### Test Device Configuration

Access the device list in the UI:
```
http://localhost:8080/dcm4chee-arc/ui2/en/device/devicelist
```

You should see:
- dcm4chee-arc
- keycloak
- logstash
- storescp
- stowrsd
- scheduledstation

### Test API Access

Open browser DevTools (F12) and check:

1. **Network Tab**: API calls should return 200 OK
2. **Console Tab**: No authentication errors
3. **Application Tab → Cookies**: Should have Keycloak session cookies

### Common Issues

#### Still getting 401 errors after Keycloak fix

**Check:**
1. Is `Authorization: Bearer` header present in API requests?
   - If NO: Keycloak JS not initializing (check browser console for errors)
   - If YES: Token validation issue (check Keycloak roles)

2. Verify Keycloak client configuration:
   - Client ID: `dcm4chee-arc-ui`
   - Access Type: `public`
   - Valid Redirect URIs: `http://localhost:8080/*`
   - Web Origins: `http://localhost:8080`

3. Check user has required roles in Keycloak

#### Device list is empty

**Check:**
1. Is slapd running? `netstat -an | findstr :389`
2. Run `check-ldap.cmd` to diagnose
3. Check WildFly logs for LDAP connection errors
4. Verify `ldap.properties` has correct credentials

#### WildFly won't start

**Check:**
1. Port conflicts (8080, 9990 already in use)
2. Check `server.log` for errors
3. Verify standalone.xml is valid XML (no syntax errors)

---

## Summary of Changes Made

### Keycloak Fix
1. ✅ Added `redirectUri` to `KEYCLOAK_OPTIONS` in `globalvar.ts`
2. ✅ Cleaned up `keycloak.json` (removed extra fields)
3. ⏳ Need to remove UI WAR from `standalone.xml`
4. ⏳ Need to rebuild and redeploy

### LDAP Fix
1. ⏳ Need to install schema files
2. ⏳ Need to initialize base DN
3. ⏳ Need to load default configuration

---

## Files Created

- `LDAP-FIX-GUIDE.md` - Detailed LDAP setup instructions
- `init-ldap.cmd` - Automated LDAP initialization script
- `check-ldap.cmd` - LDAP diagnostic script
- `COMPLETE-FIX-INSTRUCTIONS.md` - This file

---

## Next Steps

1. **Fix Keycloak**: Edit standalone.xml, rebuild, redeploy, restart WildFly
2. **Fix LDAP**: Run `init-ldap.cmd` or follow manual steps
3. **Test**: Access UI and verify both authentication and device configuration work

---

## Support

If you encounter issues:
1. Check WildFly logs: `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log`
2. Check browser console (F12) for JavaScript errors
3. Run `check-ldap.cmd` to diagnose LDAP issues
4. Verify Keycloak is running: `http://localhost:8843`
