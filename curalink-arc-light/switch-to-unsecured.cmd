@echo off
echo ========================================
echo Switching to UNSECURED Mode (No Keycloak)
echo ========================================
echo.
echo WARNING: This will remove authentication!
echo Anyone will be able to access the application.
echo.
pause

echo Step 1: Stopping WildFly if running...
taskkill /F /IM java.exe 2>nul
timeout /t 3 >nul
echo.

echo Step 2: Removing OIDC configuration from standalone.xml...
powershell -Command "$xml = [xml](Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml'); $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable); $ns.AddNamespace('s', 'urn:jboss:domain:18.0'); $ns.AddNamespace('oidc', 'urn:wildfly:elytron-oidc-client:2.0'); $oidcNode = $xml.SelectSingleNode('//oidc:subsystem', $ns); if ($oidcNode) { $oidcNode.ParentNode.RemoveChild($oidcNode) | Out-Null; $xml.Save('C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\standalone.xml'); Write-Host 'OIDC subsystem removed' } else { Write-Host 'OIDC subsystem not found' }"
echo.

echo Step 3: Deploying UNSECURED EAR...
echo Checking if unsecured EAR exists...
if exist "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql.ear" (
    echo Found unsecured EAR, deploying...
    
    REM Remove secured EAR
    if exist "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear" (
        del /f "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear"
        del /f "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear.*" 2>nul
    )
    
    REM Deploy unsecured EAR
    copy /y "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql.ear" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\"
) else (
    echo ERROR: Unsecured EAR not found!
    echo You need to build the unsecured version first.
    echo Run: mvn clean install -Ddb=psql
    pause
    exit /b 1
)
echo.

echo ========================================
echo Switched to UNSECURED Mode
echo ========================================
echo.
echo Next steps:
echo 1. Make sure OpenLDAP is running on port 389
echo 2. Start WildFly: cd C:\Dcm4chee\wildfly-37.0.0.Final\bin && standalone.bat
echo 3. Access: http://localhost:8080/dcm4chee-arc/ui2/en/index.html
echo 4. NO LOGIN REQUIRED - Direct access to application
echo.
pause
