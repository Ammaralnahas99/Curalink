@echo off
echo ========================================
echo Disabling Keycloak Authentication
echo ========================================
echo.
echo This will remove Keycloak authentication from standalone.xml
echo The application will work WITHOUT login
echo.
pause

echo Step 1: Stopping WildFly if running...
taskkill /F /IM java.exe 2>nul
timeout /t 3 >nul
echo.

echo Step 2: Backing up standalone.xml...
copy /y "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml.backup-%date:~-4,4%%date:~-10,2%%date:~-7,2%-%time:~0,2%%time:~3,2%%time:~6,2%"
echo.

echo Step 3: Removing OIDC subsystem from standalone.xml...
powershell -Command "$content = Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml' -Raw; $pattern = '(?s)<subsystem xmlns=\"urn:wildfly:elytron-oidc-client:2\.0\">.*?</subsystem>'; if ($content -match $pattern) { $content = $content -replace $pattern, ''; $content | Set-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml' -NoNewline; Write-Host 'OIDC subsystem removed successfully' } else { Write-Host 'OIDC subsystem not found' }"
echo.

echo Step 4: Removing extension reference...
powershell -Command "$content = Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml' -Raw; $pattern = '<extension module=\"org\.wildfly\.extension\.elytron-oidc-client\"/>'; if ($content -match $pattern) { $content = $content -replace $pattern, ''; $content | Set-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml' -NoNewline; Write-Host 'Extension reference removed successfully' } else { Write-Host 'Extension reference not found' }"
echo.

echo ========================================
echo Keycloak Authentication DISABLED
echo ========================================
echo.
echo The secured EAR will now work WITHOUT authentication
echo.
echo Next steps:
echo 1. Make sure OpenLDAP is running: cd C:\OpenLDAP ^&^& slapd.exe -f slapd.conf -d 1
echo 2. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin ^&^& standalone.bat
echo 3. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo 4. NO LOGIN REQUIRED - Direct access
echo.
echo Note: Backup saved to standalone.xml.backup-[timestamp]
echo To restore Keycloak, copy the backup back to standalone.xml
echo.
pause
