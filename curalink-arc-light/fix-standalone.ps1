$f = 'C:\wildfly\wildfly-37.0.0.Final\standalone\configuration\standalone.xml'

# Don't restore from backup - work with current file
Write-Host "Working with current standalone.xml"

$x = [System.IO.File]::ReadAllText($f)

# 1. Remove any <deployments> block (duplicate deployment fix)
$x = [regex]::Replace($x, '<deployments>.*?</deployments>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "OK: Removed duplicate deployments block"

# 1b. Also remove individual <deployment> entries outside of <deployments>
$x = [regex]::Replace($x, '<deployment[^>]*name="dcm4chee-arc-ui2[^"]*"[^>]*>.*?</deployment>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
$x = [regex]::Replace($x, '<deployment[^>]*name="dcm4chee-arc-ear[^"]*"[^>]*>.*?</deployment>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "OK: Removed individual deployment entries"

# 2. Add OidcRealm to ApplicationDomain
$x = $x -replace '(<realm name="local"/>)\s*(</security-domain>)', '$1<realm name="OidcRealm" role-decoder="roles-claim-decoder"/>$2'
if ($x -match 'OidcRealm.*roles-claim-decoder') {
    Write-Host "OK: OidcRealm added to ApplicationDomain"
} else {
    Write-Host "WARNING: OidcRealm NOT added"
}

# 3. Add roles-claim-decoder after groups-to-roles decoder
$x = $x -replace '(<simple-role-decoder name="groups-to-roles" attribute="groups"/>)', '$1<simple-role-decoder name="roles-claim-decoder" attribute="roles"/>'
Write-Host "OK: roles-claim-decoder added"

# 4. Add token-realm before identity-realm
$x = $x -replace '(<identity-realm name="local" identity="\$local"/>)', '<token-realm name="OidcRealm" principal-claim="preferred_username"><jwt/></token-realm>$1'
Write-Host "OK: token-realm added"

# 5. Remove any existing elytron-oidc-client subsystem
$x = [regex]::Replace($x, '<subsystem xmlns="urn:wildfly:elytron-oidc-client:2\.0">.*?</subsystem>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "OK: Removed existing OIDC subsystem"

# 6. Add fresh OIDC subsystem with auth-server-url and realm for public client
$oidcSubsystem = '<subsystem xmlns="urn:wildfly:elytron-oidc-client:2.0"><secure-deployment name="dcm4chee-arc-ui2-5.34.3.war"><realm>Curalink</realm><auth-server-url>http://localhost:8843</auth-server-url><client-id>dcm4chee-arc-ui</client-id><public-client>true</public-client><turn-off-change-session-id-on-login>true</turn-off-change-session-id-on-login><ssl-required>none</ssl-required><principal-attribute>preferred_username</principal-attribute><adapter-state-cookie-path>/</adapter-state-cookie-path></secure-deployment></subsystem>'

$profileEnd = $x.LastIndexOf('</profile>')
if ($profileEnd -ge 0) {
    $x = $x.Substring(0, $profileEnd) + $oidcSubsystem + '</profile>' + $x.Substring($profileEnd + '</profile>'.Length)
    Write-Host "OK: OIDC subsystem added"
} else {
    Write-Host "WARNING: </profile> not found"
}

# 7. Add auth-user-role system property AFTER </extensions>
if ($x -notmatch 'auth-user-role') {
    $x = $x -replace '(</extensions>)', '$1<system-properties><property name="auth-user-role" value="auth"/></system-properties>'
    Write-Host "OK: auth-user-role system property added"
}

# 8. Add DEBUG logging for OIDC (in the logging subsystem, not in profile)
if ($x -notmatch 'org.wildfly.security.http.oidc') {
    # Find the logging subsystem and add the logger there
    $x = $x -replace '(<subsystem xmlns="urn:jboss:domain:logging:8.0">)', '$1<logger category="org.wildfly.security.http.oidc"><level name="DEBUG"/></logger>'
    Write-Host "OK: OIDC debug logging added"
}

[System.IO.File]::WriteAllText($f, $x)
Write-Host "SUCCESS: File written"

Write-Host ""
Write-Host "=== VERIFICATION ==="
$v = [System.IO.File]::ReadAllText($f)
Write-Host "No duplicate deployments: $(-not ($v -match '<deployments>'))"
Write-Host "OidcRealm in ApplicationDomain: $($v -match 'OidcRealm.*roles-claim-decoder')"
Write-Host "token-realm defined: $($v -match '<token-realm name=.OidcRealm')"
Write-Host "roles-claim-decoder defined: $($v -match 'simple-role-decoder name=.roles-claim-decoder')"
Write-Host "OIDC subsystem present: $($v -match 'elytron-oidc-client')"
Write-Host "realm configured: $($v -match '<realm>Curalink</realm>')"
Write-Host "turn-off-change-session-id: $($v -match 'turn-off-change-session-id-on-login')"
Write-Host "adapter-state-cookie-path: $($v -match 'adapter-state-cookie-path')"
Write-Host "auth-user-role property: $($v -match 'auth-user-role')"
$count = ([regex]::Matches($v, 'elytron-oidc-client')).Count
Write-Host "OIDC subsystem count (should be 2): $count"
