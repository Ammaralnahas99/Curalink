@echo off
echo ========================================
echo Checking WildFly Status
echo ========================================
echo.

echo Checking if WildFly is running...
netstat -ano | findstr ":8080"
echo.

echo Checking deployment status...
dir "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments\*.ear*"
echo.

echo Last 50 lines of server.log:
powershell -Command "Get-Content 'C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log' -Tail 50"
echo.

pause
