@echo off
echo ========================================
echo Complete DCM4CHEE Restoration
echo Using pre-built UI from C:\temp\dcm4chee-edit
echo ========================================
echo.
pause

echo Step 1: Stopping WildFly...
taskkill /F /IM java.exe 2>nul
timeout /t 3 >nul
echo.

echo Step 2: Restoring standalone.xml with Keycloak configuration...
for /f "delims=" %%i in ('dir /b /o-d "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml.backup-*" 2^>nul') do (
    set BACKUP=%%i
    goto :found
)
:found

if "%BACKUP%"=="" (
    echo WARNING: No backup found, keeping current standalone.xml
) else (
    echo Found backup: %BACKUP%
    copy /y "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\%BACKUP%" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml"
)
echo.

echo Step 3: Preparing deployment directories...
cd C:\temp\fix-deploy
if exist war rmdir /s /q war
if exist ear rmdir /s /q ear
mkdir war
mkdir ear
echo.

echo Step 4: Copying pre-built UI from C:\temp\dcm4chee-edit...
xcopy /s /e /i /y "C:\temp\dcm4chee-edit\*" "C:\temp\fix-deploy\war\"
echo.

echo Step 5: Creating UI WAR file...
cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .
echo.

echo Step 6: Extracting current EAR to get backend WARs...
cd C:\temp\fix-deploy\ear
jar xf "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
echo.

echo Step 7: Replacing UI WAR in EAR...
copy /y "dcm4chee-arc-ui2-5.34.3.war" "dcm4chee-arc-ui2-5.34.3.war.bak"
cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .
echo.

echo Step 8: Repackaging EAR...
cd C:\temp\fix-deploy\ear
jar cf "..\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .
echo.

echo Step 9: Removing old deployment...
cd C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments
del /f dcm4chee-arc-ear-5.34.3-psql-secure.ear.* 2>nul
echo.

echo Step 10: Deploying new EAR...
copy /y "C:\temp\fix-deploy\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .
echo.

echo ========================================
echo Restoration Complete!
echo ========================================
echo.
echo Configuration restored:
echo - Keycloak authentication enabled
echo - UI updated with pre-built version from C:\temp\dcm4chee-edit
echo - EAR repackaged and deployed
echo.
echo Next steps:
echo 1. Make sure Keycloak is running on port 8843
echo 2. Make sure OpenLDAP is running: cd C:\OpenLDAP ^&^& slapd.exe -f slapd.conf -d 1
echo 3. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin ^&^& standalone.bat
echo 4. Wait for deployment to complete (watch for "Started" message)
echo 5. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo 6. Login with Keycloak credentials
echo.
pause
