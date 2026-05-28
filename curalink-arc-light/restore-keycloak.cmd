@echo off
echo ========================================
echo Restoring Keycloak Configuration
echo ========================================
echo.

echo Step 1: Stopping WildFly...
taskkill /F /IM java.exe 2>nul
timeout /t 3 >nul
echo.

echo Step 2: Finding latest backup...
for /f "delims=" %%i in ('dir /b /o-d "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml.backup-*" 2^>nul') do (
    set BACKUP=%%i
    goto :found
)
:found

if "%BACKUP%"=="" (
    echo ERROR: No backup found!
    pause
    exit /b 1
)

echo Found backup: %BACKUP%
echo.

echo Step 3: Restoring standalone.xml...
copy /y "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\%BACKUP%" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml"
echo.

echo ========================================
echo Keycloak Configuration Restored
echo ========================================
echo.
echo Next steps:
echo 1. Make sure Keycloak is running on port 8843
echo 2. Make sure OpenLDAP is running: cd C:\OpenLDAP ^&^& slapd.exe -f slapd.conf -d 1
echo 3. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin ^&^& standalone.bat
echo 4. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo 5. Login with Keycloak credentials
echo.
pause
