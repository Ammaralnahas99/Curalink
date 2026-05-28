@echo off
echo Checking WildFly deployment status...
echo.

echo Deployment files:
dir "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\*.ear*"
echo.

echo Last 100 lines of server.log:
powershell -Command "Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log' -Tail 100"
echo.

pause
