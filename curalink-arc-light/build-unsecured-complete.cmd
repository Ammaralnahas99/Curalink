@echo off
echo ========================================
echo Building DCM4CHEE in UNSECURED Mode
echo ========================================
echo.

echo Step 1: Building UI with npm...
cd C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2
call npm run build
if errorlevel 1 (
    echo ERROR: npm build failed!
    pause
    exit /b 1
)
echo.

echo Step 2: Building backend with Maven (unsecured)...
cd C:\Users\USER\dcm4chee-arc-light
call mvn clean install -Ddb=psql -Dsecure=false -DskipTests
if errorlevel 1 (
    echo ERROR: Maven build failed!
    pause
    exit /b 1
)
echo.

echo Step 3: Stopping WildFly if running...
taskkill /F /IM java.exe 2>nul
timeout /t 3 >nul
echo.

echo Step 4: Removing OIDC configuration from standalone.xml...
powershell -Command "$xml = [xml](Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml'); $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable); $ns.AddNamespace('s', 'urn:jboss:domain:18.0'); $ns.AddNamespace('oidc', 'urn:wildfly:elytron-oidc-client:2.0'); $oidcNode = $xml.SelectSingleNode('//oidc:subsystem', $ns); if ($oidcNode) { $oidcNode.ParentNode.RemoveChild($oidcNode) | Out-Null; $xml.Save('C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml'); Write-Host 'OIDC subsystem removed' } else { Write-Host 'OIDC subsystem not found' }"
echo.

echo Step 5: Deploying UNSECURED EAR...
cd C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments

REM Remove old deployments
del /f dcm4chee-arc-ear-*.ear 2>nul
del /f dcm4chee-arc-ear-*.ear.* 2>nul

REM Copy new unsecured EAR
copy /y "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql.ear" .
echo.

echo ========================================
echo Build and Deployment Complete!
echo ========================================
echo.
echo UNSECURED MODE - No authentication required
echo.
echo Next steps:
echo 1. Make sure OpenLDAP is running: cd C:\OpenLDAP && slapd.exe -f slapd.conf -d 1
echo 2. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin && standalone.bat
echo 3. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo 4. NO LOGIN - Direct access
echo.
pause
