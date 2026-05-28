@echo off
echo ========================================
echo Fixing Keycloak Configuration and Redeploying
echo ========================================
echo.

echo Step 1: Stopping WildFly...
taskkill /F /IM java.exe 2>nul
timeout /t 3 >nul
echo.

echo Step 2: Fixing keycloak.json in C:\temp\dcm4chee-edit...
powershell -Command "$json = Get-Content 'C:\temp\dcm4chee-edit\en\assets\keycloak.json' | ConvertFrom-Json; $json.url = 'http://localhost:8843/auth'; $json | ConvertTo-Json | Set-Content 'C:\temp\dcm4chee-edit\en\assets\keycloak.json'"
echo Fixed keycloak.json
echo.

echo Step 3: Also fix the lib copy...
powershell -Command "$json = Get-Content 'C:\temp\dcm4chee-edit\en\assets\lib\keycloak.json' | ConvertFrom-Json; $json.url = 'http://localhost:8843/auth'; $json | ConvertTo-Json | Set-Content 'C:\temp\dcm4chee-edit\en\assets\lib\keycloak.json'"
echo Fixed lib/keycloak.json
echo.

echo Step 4: Preparing deployment directories...
cd C:\temp\fix-deploy
if exist war rmdir /s /q war
if exist ear rmdir /s /q ear
mkdir war
mkdir ear
echo.

echo Step 5: Copying fixed UI...
xcopy /s /e /i /y "C:\temp\dcm4chee-edit\*" "C:\temp\fix-deploy\war\"
echo.

echo Step 6: Creating UI WAR file...
cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .
echo.

echo Step 7: Extracting current EAR...
cd C:\temp\fix-deploy\ear
jar xf "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
echo.

echo Step 8: Replacing UI WAR in EAR...
cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .
echo.

echo Step 9: Repackaging EAR...
cd C:\temp\fix-deploy\ear
jar cf "..\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .
echo.

echo Step 10: Removing old deployment...
cd C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments
del /f dcm4chee-arc-ear-5.34.3-psql-secure.ear.* 2>nul
echo.

echo Step 11: Deploying new EAR...
copy /y "C:\temp\fix-deploy\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .
echo.

echo ========================================
echo Fix Applied and Deployed!
echo ========================================
echo.
echo Changes made:
echo - Fixed keycloak.json URL to include /auth
echo - Repackaged and deployed EAR
echo.
echo Next steps:
echo 1. Make sure Keycloak is running on port 8843
echo 2. Make sure OpenLDAP is running
echo 3. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin ^&^& standalone.bat
echo 4. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo 5. Login with Keycloak credentials
echo.
pause
