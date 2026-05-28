# DCM4CHEE Keycloak 401 Error - Final Fix

## Root Cause
You're mixing server-side OIDC (WildFly) with client-side Keycloak JS authentication. They conflict with each other.

## Solution: Use Client-Side Keycloak JS Only

### Step 1: Remove OIDC from UI web.xml

File: `C:\temp\fix-deploy\war\WEB-INF\web.xml`

Replace with:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="3.0" xmlns="http://java.sun.com/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
    </welcome-file-list>
</web-app>
```

### Step 2: Remove UI from standalone.xml

File: `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml`

Find and REMOVE this entire block:
```xml
<secure-deployment name="dcm4chee-arc-ui2-5.34.3.war">
    ...
</secure-deployment>
```

Keep ONLY the backend WAR with bearer-only:
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
        <public-client>true</public-client>
    </secure-deployment>
</subsystem>
```

### Step 3: Verify keycloak.json (no PKCE)

File: `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2\src\assets\keycloak.json`

```json
{
  "realm": "dcm4chee",
  "clientId": "dcm4chee-arc-ui",
  "url": "http://localhost:8843",
  "ssl-required": "none",
  "public-client": true,
  "confidential-port": 0
}
```

### Step 4: Rebuild and Deploy

```cmd
cd C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2
npm run build

cd C:\temp\fix-deploy\war
rmdir /s /q en
xcopy /s /e /i /y "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2\target\webapp\en" "en"

cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .

cd C:\temp\fix-deploy\ear
jar cf "..\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .

del "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear.deployed"
copy /y "C:\temp\fix-deploy\dcm4chee-arc-ear-5.34.3-psql-secure.ear" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
```

### Step 5: Restart WildFly

Stop (Ctrl+C) and start:
```cmd
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
standalone.bat
```

### Step 6: Test

1. Clear browser cache (Ctrl+Shift+Delete)
2. Open: `http://localhost:8080/dcm4chee-arc/ui2/en/index.html`
3. Keycloak login should appear
4. After login, UI loads
5. API calls should work (no 401 errors)

## How It Works

- **UI**: Unsecured at WildFly level, Angular Keycloak JS handles login
- **Backend**: bearer-only, accepts Bearer tokens from UI
- **Flow**: UI gets token from Keycloak → Attaches to API calls → Backend validates token

## If Still 401

Check in browser DevTools Network tab:
- Is `Authorization: Bearer ...` header present in API requests?
- If NO: Keycloak JS isn't initializing (check console for errors)
- If YES: Token is invalid (check roles in Keycloak)
