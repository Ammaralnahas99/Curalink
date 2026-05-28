Add-Type -Assembly System.IO.Compression.FileSystem
Add-Type -Assembly System.IO.Compression

$sourceWar = 'C:\Dcm4chee\dcm4chee-arc-5.34.2-psql-secure\deploy\dcm4chee-arc-ui2-5.34.2-secure.war'
$destWar = 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ui2-5.34.2-secure.war'
$tempWar = 'C:\temp\ui2-patched.war'

# Copy original to temp
Copy-Item $sourceWar $tempWar -Force
Write-Host "Copied original WAR to temp"

$newKeycloakJson = '{
  "realm": "dcm4che",
  "clientId": "dcm4chee-arc-ui",
  "url": "http://localhost:8843",
  "ssl-required": "none",
  "public-client": true,
  "confidential-port": 0,
  "enable-pkce": true
}'

# Open the temp WAR and update all keycloak.json files in-place
$zip = [System.IO.Compression.ZipFile]::Open($tempWar, [System.IO.Compression.ZipArchiveMode]::Update)

# Find all keycloak.json entries
$keycloakEntries = $zip.Entries | Where-Object { $_.FullName -like '*/keycloak.json' -and $_.FullName -notlike '*/lib/*' }
Write-Host "Found $($keycloakEntries.Count) keycloak.json files"

foreach ($entry in @($keycloakEntries)) {
    $name = $entry.FullName
    
    # Read current content
    $reader = New-Object System.IO.StreamReader($entry.Open())
    $content = $reader.ReadToEnd()
    $reader.Close()
    
    Write-Host "Updating: $name"
    Write-Host "  Old url: $(($content | ConvertFrom-Json).url)"
    
    # Delete and recreate
    $entry.Delete()
    $newEntry = $zip.CreateEntry($name)
    $writer = New-Object System.IO.StreamWriter($newEntry.Open())
    $writer.Write($newKeycloakJson)
    $writer.Close()
    Write-Host "  Updated to: http://localhost:8843"
}

# Also update jboss-web.xml to add security-domain
$jbossWebEntry = $zip.GetEntry('WEB-INF/jboss-web.xml')
if ($jbossWebEntry) {
    $reader = New-Object System.IO.StreamReader($jbossWebEntry.Open())
    $content = $reader.ReadToEnd()
    $reader.Close()
    
    if ($content -notmatch 'security-domain') {
        $jbossWebEntry.Delete()
        $newContent = $content -replace '</jboss-web>', "    <security-domain>other</security-domain>`n</jboss-web>"
        $newEntry = $zip.CreateEntry('WEB-INF/jboss-web.xml')
        $writer = New-Object System.IO.StreamWriter($newEntry.Open())
        $writer.Write($newContent)
        $writer.Close()
        Write-Host "Added security-domain to jboss-web.xml"
    } else {
        Write-Host "security-domain already in jboss-web.xml"
    }
}

$zip.Dispose()
Write-Host "WAR patched successfully"

# Deploy
Copy-Item $tempWar $destWar -Force
Write-Host "Deployed patched WAR: $((Get-Item $destWar).Length) bytes"
