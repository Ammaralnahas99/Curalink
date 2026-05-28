@echo off
REM Extract the OIDC configuration from standalone.xml
echo Extracting OIDC configuration...
echo.

powershell -Command "$content = Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml' -Raw; if ($content -match '(?s)<subsystem xmlns=\"urn:wildfly:elytron-oidc-client:2\.0\">.*?</subsystem>') { $matches[0] } else { Write-Host 'OIDC subsystem not found' }"
