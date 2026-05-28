# Keycloak 302 Redirect Fix - Summary

## Problem
The DCM4CHEE UI was experiencing 302 redirect errors when making API calls to the backend. The symptoms were:
- Login page appeared correctly
- UI loaded after login
- API calls to `/dcm4chee-arc/devices`, `/dcm4chee-arc/pdq`, etc. returned 302 redirects
- Each API call triggered a new Keycloak authentication redirect

## Root Causes

### 1. Dynamic Redirect URI
The Keycloak JS adapter was using `window.location.href` as the redirect URI, meaning:
- User navigates to `/dcm4chee-arc/devices` → Keycloak redirects back to `/devices`
- User navigates to `/dcm4chee-arc/pdq` → Keycloak redirects back to `/pdq`
- This caused the "Invalid Request" errors because these URIs weren't registered in Keycloak

### 2. Missing Bearer-Only Configuration
The backend WAR (`dcm4chee-arc-war-5.34.3-secure.war`) was configured to redirect to Keycloak for authentication instead of accepting Bearer tokens from the UI. This caused:
- UI makes API call with Bearer token
- Backend ignores token and returns 302 redirect to Keycloak
- Infinite redirect loop

## Solutions Applied

### Fix 1: Static Redirect URI in UI
**File:** `dcm4chee-arc-ui2/src/app/constants/globalvar.ts`

**Change:**
```typescript
static KEYCLOAK_OPTIONS(): any {
    return {
        flow: 'standard',
        responseMode: 'fragment',
        checkLoginIframe: false,
        onLoad: 'login-required',
        redirectUri: window.location.origin + '/dcm4chee-arc/ui2/en/index.html'  // ← ADDED
    };
}
```

**Effect:** All Keycloak authentication flows now redirect to the main UI page, regardless of where the user was navigating.

### Fix 2: Bearer-Only Backend
**File:** `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml`

**Change:**
```xml
<secure-deployment name="dcm4chee-arc-war-5.34.3-secure.war">
    <bearer-only>true</bearer-only>  <!-- ← ADDED -->
    <adapter-state-cookie-path>/</adapter-state-cookie-path>
    <client-id>dcm4chee-arc-ui</client-id>
    <realm>dcm4chee</realm>
    <auth-server-url>http://localhost:8843</auth-server-url>
    <ssl-required>NONE</ssl-required>
    <confidential-port>0</confidential-port>
    <principal-attribute>preferred_username</principal-attribute>
    <public-client>true</public-client>
</secure-deployment>
```

**Effect:** The backend now accepts Bearer tokens from the UI instead of redirecting to Keycloak.

## How to Apply the Fix

### Option 1: Automated Script (Recommended)
```powershell
.\apply-keycloak-fix.ps1
```

This script:
1. Backs up standalone.xml
2. Adds bearer-only configuration
3. Verifies the UI source fix
4. Rebuilds the Angular UI
5. Extracts the deployed EAR
6. Updates the UI WAR inside the EAR
7. Repackages and redeploys everything

### Option 2: Manual Steps
1. Stop WildFly
2. Edit `standalone.xml` and add `<bearer-only>true</bearer-only>` to the backend WAR secure-deployment
3. Verify `globalvar.ts` has the redirectUri fix
4. Run `cd dcm4chee-arc-ui2 && npm run build`
5. Extract the EAR, update the UI WAR, repackage
6. Start WildFly

## Verification

After applying the fix and restarting WildFly:

1. Open: `http://localhost:8080/dcm4chee-arc/ui2/en/index.html`
2. Login with Keycloak credentials
3. Navigate to different sections (Studies, Devices, Configuration)
4. Check browser DevTools Network tab:
   - API calls should return 200 OK
   - No 302 redirects
   - No "Invalid Request" errors

## Additional Notes

### Keycloak Client Configuration
Ensure in Keycloak Admin Console:
- **Client:** dcm4chee-arc-ui
- **Valid Redirect URIs:** `http://localhost:8080/*`
- **Web Origins:** `http://localhost:8080`
- **Access Type:** public
- **Standard Flow:** Enabled
- **PKCE:** Disabled (or S256 if enabled in oidc.json)

### User Roles
Users must have the `auth` role assigned:
- Keycloak Admin → Users → [user] → Role Mappings
- Client Roles → dcm4chee-arc-ui → Assign: `auth`, `admin`, `user`

## Files Modified
- `dcm4chee-arc-ui2/src/app/constants/globalvar.ts` (source code)
- `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml` (WildFly config)
- `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear` (deployed EAR)

## Troubleshooting

### Still getting 302 redirects?
- Verify bearer-only was added: `findstr /i "bearer-only" standalone.xml`
- Check WildFly logs for OIDC subsystem override messages
- Clear browser cache and cookies

### Still getting "Invalid Request"?
- Check Keycloak Valid Redirect URIs includes `http://localhost:8080/*`
- Verify the UI was rebuilt after adding redirectUri
- Check browser console for Keycloak init errors

### API returns 403 Forbidden?
- User needs `auth` role in Keycloak
- Check token contains roles: decode JWT at jwt.io
- Verify `use-resource-role-mappings: true` in oidc.json
