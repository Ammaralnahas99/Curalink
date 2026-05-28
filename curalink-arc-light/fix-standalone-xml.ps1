# Fix standalone.xml - Remove UI WAR from OIDC configuration

$standaloneXml = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml"

Write-Host "Reading standalone.xml..." -ForegroundColor Cyan
$content = Get-Content $standaloneXml -Raw

# Backup original file
$backupFile = "$standaloneXml.backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item $standaloneXml $backupFile
Write-Host "Backup created: $backupFile" -ForegroundColor Green

# Remove the UI WAR secure-deployment block
$pattern = '(?s)<secure-deployment name="dcm4chee-arc-ui2-5\.34\.3\.war">.*?</secure-deployment>\s*'
$content = $content -replace $pattern, ''

# Fix auth-server-url (remove /auth)
$content = $content -replace 'http://localhost:8843/auth', 'http://localhost:8843'

# Write back
Set-Content $standaloneXml $content -NoNewline

Write-Host "`nFixed standalone.xml:" -ForegroundColor Green
Write-Host "  - Removed UI WAR from OIDC configuration" -ForegroundColor Yellow
Write-Host "  - Fixed auth-server-url (removed /auth)" -ForegroundColor Yellow
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. Stop WildFly (Ctrl+C)" -ForegroundColor White
Write-Host "  2. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin && standalone.bat" -ForegroundColor White
Write-Host "  3. Test: http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
