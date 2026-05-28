# Bugfix Requirements Document

## Introduction

dcm4chee-arc running on WildFly 37 with Keycloak 26 returns **403 Forbidden** after a successful login.
Two distinct bugs contribute to this failure:

1. **Duplicate deployment entry** — WildFly refuses to start because `dcm4chee-arc-ui2-5.34.2-secure.war`
   is registered both by the deployment scanner (filesystem) and by a `<deployments>` block that was
   added to `standalone.xml` via a CLI `deploy` command.

2. **Authorization-code reuse (CODE_TO_TOKEN_ERROR: invalid_code)** — The WildFly Elytron OIDC
   subsystem is misconfigured: it uses the deprecated `<provider-url>` attribute instead of
   `<auth-server-url>`, causing the subsystem to construct incorrect token-endpoint URLs. This leads
   to the authorization code being submitted more than once, which Keycloak rejects with
   `invalid_code`, ultimately surfacing as a 403 Forbidden response in the browser.

---

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN WildFly starts with both a `<deployments>` block in `standalone.xml` and the same WAR file
    present in the `deployments/` directory THEN the system fails to start with
    `WFLYCTL0212: Duplicate resource "dcm4chee-arc-ui2-5.34.2-secure.war"`.

1.2 WHEN the Elytron OIDC subsystem in `standalone.xml` is configured with `<provider-url>` pointing
    to `http://localhost:8843/realms/dcm4che` THEN the system constructs incorrect OIDC endpoint URLs
    for WildFly 37 / Keycloak 26, causing the authorization code to be exchanged multiple times.

1.3 WHEN the authorization code is submitted more than once to Keycloak's token endpoint THEN the
    system receives `CODE_TO_TOKEN_ERROR: invalid_code` from Keycloak and returns 403 Forbidden to
    the browser.

1.4 WHEN `keycloak.json` inside the WAR contains `"public-client": false` and the Keycloak client
    `dcm4chee-arc-ui` has `Client authentication` enabled (confidential) but the OIDC subsystem
    credential secret is not correctly wired THEN the system may attempt unauthenticated token
    requests, causing token exchange failures.

1.5 WHEN the Keycloak client `dcm4chee-arc-ui` does not have `http://localhost:8080/*` listed as a
    Valid Redirect URI THEN the system rejects the redirect after login with an invalid redirect URI
    error, preventing token issuance.

### Expected Behavior (Correct)

2.1 WHEN WildFly starts with the `<deployments>` block removed from `standalone.xml` and the WAR
    present only in the `deployments/` directory THEN the system SHALL start successfully without
    duplicate resource errors.

2.2 WHEN the Elytron OIDC subsystem is configured with `<auth-server-url>` set to
    `http://localhost:8843` (base URL, no realm path) under a `<provider>` element THEN the system
    SHALL correctly derive all OIDC endpoint URLs for Keycloak 26 and submit the authorization code
    exactly once.

2.3 WHEN the authorization code is submitted exactly once to Keycloak's token endpoint THEN the
    system SHALL receive a valid access token and grant the user access (HTTP 200) instead of 403.

2.4 WHEN `keycloak.json` inside the WAR specifies `"public-client": false` and the OIDC subsystem
    `<secure-deployment>` includes the matching `<credential name="secret">` THEN the system SHALL
    perform confidential-client token exchange successfully.

2.5 WHEN `http://localhost:8080/*` is added to the Valid Redirect URIs of the `dcm4chee-arc-ui`
    Keycloak client THEN the system SHALL accept the post-login redirect and complete the OIDC flow
    without redirect URI errors.

### Unchanged Behavior (Regression Prevention)

3.1 WHEN a user with valid Keycloak credentials logs in THEN the system SHALL CONTINUE TO
    authenticate the user and grant access to the dcm4chee-arc UI.

3.2 WHEN WildFly is started normally after the fix THEN the system SHALL CONTINUE TO deploy
    `dcm4chee-arc-ear-5.34.3-psql.ear` and `dcm4chee-arc-ui2-5.34.2-secure.war` without errors.

3.3 WHEN the OIDC subsystem processes a token for an authenticated user THEN the system SHALL
    CONTINUE TO populate `preferred_username` as the principal attribute.

3.4 WHEN the Keycloak realm `dcm4che` and client `dcm4chee-arc-ui` are used THEN the system SHALL
    CONTINUE TO enforce role-based access control as configured in Keycloak.

3.5 WHEN `ssl-required` is set to `NONE` in both the OIDC subsystem and `keycloak.json` THEN the
    system SHALL CONTINUE TO operate over plain HTTP on port 8080 without requiring TLS.

---

## Bug Condition (Pseudocode)

```pascal
// Bug Condition — identifies inputs that trigger the 403 failure

FUNCTION isBugCondition(config)
  INPUT: config of type WildFlyOidcConfig
  OUTPUT: boolean

  RETURN (config.standalone_xml HAS <deployments> block for ui2 WAR)
      OR (config.oidc_subsystem USES <provider-url> INSTEAD OF <auth-server-url>)
      OR (config.keycloak_client.valid_redirect_uris NOT CONTAINS "http://localhost:8080/*")
END FUNCTION

// Property: Fix Checking
FOR ALL config WHERE isBugCondition(config) DO
  result ← startWildFly'(config)
  ASSERT result.startup = SUCCESS
  AND result.oidc_flow = COMPLETES_WITHOUT_CODE_REUSE
  AND result.http_response != 403
END FOR

// Property: Preservation Checking
FOR ALL config WHERE NOT isBugCondition(config) DO
  ASSERT startWildFly(config) = startWildFly'(config)
END FOR
```
