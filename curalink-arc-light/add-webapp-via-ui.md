# Fix 409 Conflict Errors - Add Missing Webapp Entry via DCM4CHEE UI

## Problem
The application shows 409 Conflict errors when accessing `/dcm4chee-arc/webapps/` because the Keycloak webapp configuration entry is missing from LDAP.

## Solution: Add Webapp Entry via DCM4CHEE UI

1. **Open DCM4CHEE Configuration UI**:
   - Navigate to: `http://localhost:8080/dcm4chee-arc/ui2/en/index.html`
   - Go to: Configuration → Devices → dcm4chee-arc

2. **Add Web Application Entry**:
   - Scroll down to find "Web Applications" section
   - Click "+" to add a new webapp entry
   - Fill in the following details:

   **Basic Settings:**
   - Application Name: `dcm4chee-arc-ui`
   - Service Path: `/dcm4chee-arc/ui2`
   - Description: `DCM4CHEE Archive UI with Keycloak Authentication`

   **Keycloak Settings:**
   - Keycloak Client ID: `dcm4chee-arc-ui`
   - Keycloak Scope: `openid profile email roles web-origins`

   **Web Service Classes (select all that apply):**
   - QIDO_RS
   - WADO_RS  
   - STOW_RS
   - UPS_RS
   - MWL_RS
   - MPPS_RS
   - IOCM_RS
   - DCM4CHEE_ARC
   - DCM4CHEE_ARC_AET

3. **Save Configuration**:
   - Click "Save" to store the webapp entry in LDAP
   - The entry will be created at: `dcmKeycloakClientID=dcm4chee-arc-ui,dicomDeviceName=dcm4chee-arc,cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org`

4. **Verify Fix**:
   - Refresh the browser and check if 409 errors are gone
   - The `/dcm4chee-arc/webapps/` endpoint should now return 200 OK

## Alternative: Direct LDAP Import (if UI method fails)

If the UI method doesn't work, we can use the LDIF file I created:

```bash
# Stop OpenLDAP first
# Then use slapadd to import the entry
C:\OpenLDAP\slapadd.exe -f slapd.conf -l "C:\Users\USER\dcm4chee-arc-light\add-webapp-entry.ldif"
# Restart OpenLDAP
```

## Expected Result
After adding the webapp entry, the 409 Conflict errors should disappear and the webapps endpoint should work correctly.