# Fix the bearer-only configuration in standalone.xml

$standaloneXml = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml"

Write-Host "=== Fixing bearer-only in standalone.xml ===" -ForegroundColor Cyan

# Read the file
$content = Get-Content $standaloneXml -Raw

# Check if bearer-only already exists
if ($content -match '<bearer-only>true</bearer-only>') {
    Write-Host "bearer-only is already configured!" -ForegroundColor Green
    exit 0
}

# Add bearer-only to the backend WAR secure-deployment
$pattern = '(<secure-deployment name="dcm4chee-arc-war-5\.34\.3-secure\.war">)'
$replacement = '$1<bearer-only>true</bearer-only>'

$newContent = $content -replace $pattern, $replacement

# Verify the replacement worked
if ($newContent -eq $content) {
    Write-Host "Failed to add bearer-only - pattern not found!" -ForegroundColor Red
    Write-Host "Looking for secure-deployment blocks..." -ForegroundColor Yellow
    
    # Show what we have
    $matches = [regex]::Matches($content, '(?s)<secure-deployment[^>]*>.*?</secure-deployment>')
    foreach ($match in $matches) {
        Write-Host "`nFound:" -ForegroundColor Yellow
        Write-Host $match.Value.Substring(0, [Math]::Min(200, $match.Value.Length))
    }
    exit 1
}

# Save the file
$newContent | Set-Content $standaloneXml -Encoding UTF8

Write-Host "bearer-only added successfully!" -ForegroundColor Green
Write-Host "`nVerifying..." -ForegroundColor Yellow

# Verify
$verify = Get-Content $standaloneXml -Raw
if ($verify -match '<bearer-only>true</bearer-only>') {
    Write-Host "Verification successful!" -ForegroundColor Green
    Write-Host "`nNow restart WildFly for changes to take effect."
} else {
    Write-Host "Verification failed!" -ForegroundColor Red
}
