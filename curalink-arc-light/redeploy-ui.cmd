@echo off
echo ========================================
echo Repackaging and Redeploying UI
echo ========================================
echo.

echo Step 1: Cleaning old UI files from WAR staging...
cd C:\temp\fix-deploy\war
if exist en rmdir /s /q en
echo.

echo Step 2: Copying new UI build...
xcopy /s /e /i /y "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2\target\webapp\en" "en"
echo.

echo Step 3: Creating UI WAR file...
cd C:\temp\fix-deploy\war
jar cf "..\ear\dcm4chee-arc-ui2-5.34.3.war" .
echo.

echo Step 4: Creating EAR file...
cd C:\temp\fix-deploy\ear
jar cf "..\dcm4chee-arc-ear-5.34.3-psql-secure.ear" .
echo.

echo Step 5: Removing old deployment marker...
cd C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments
if exist dcm4chee-arc-ear-5.34.3-psql-secure.ear.undeployed del /f dcm4chee-arc-ear-5.34.3-psql-secure.ear.undeployed
if exist dcm4chee-arc-ear-5.34.3-psql-secure.ear.failed del /f dcm4chee-arc-ear-5.34.3-psql-secure.ear.failed
if exist dcm4chee-arc-ear-5.34.3-psql-secure.ear.deployed del /f dcm4chee-arc-ear-5.34.3-psql-secure.ear.deployed
echo.

echo Step 6: Deploying new EAR...
copy /y "C:\temp\fix-deploy\dcm4chee-arc-ear-5.34.3-psql-secure.ear" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\"
echo.

echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Restart WildFly if it's running
echo 2. Make sure OpenLDAP is running on port 389
echo 3. Make sure Keycloak is running on port 8843
echo 4. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo.
