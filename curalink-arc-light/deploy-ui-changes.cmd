@echo off
echo ============================================
echo  DCM4CHEE UI Deploy Script
echo ============================================

echo.
echo [1/5] Building Angular UI...
cd /d C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ERROR: npm build failed!
    pause
    exit /b 1
)
echo Build complete.

echo.
echo [2/5] Cleaning temp folders...
rmdir /s /q C:\temp\war-with-schema 2>nul
del /f /q C:\temp\dcm4chee-arc-ui2-5.34.3-patched.war 2>nul
rmdir /s /q C:\temp\ear-redeploy 2>nul
del /f /q C:\temp\dcm4chee-arc-ear-5.34.3-psql-secure-new.ear 2>nul
echo Cleaned.

echo.
echo [3/5] Building patched WAR from known-good base...
mkdir C:\temp\war-with-schema
cd /d C:\temp\war-with-schema
"C:\Program Files\Java\jdk-21\bin\jar.exe" xf C:\temp\ear-check\dcm4chee-arc-ui2-5.34.3.war
rmdir /s /q en
mkdir en
xcopy /E /I /Y "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-ui2\target\webapp" en
xcopy /E /I /Y C:\temp\official-schema-extract\en\assets\schema en\assets\schema
"C:\Program Files\Java\jdk-21\bin\jar.exe" cf C:\temp\dcm4chee-arc-ui2-5.34.3-patched.war .
echo WAR ready.

echo.
echo [4/5] Injecting WAR into EAR and deploying...
mkdir C:\temp\ear-redeploy
cd /d C:\temp\ear-redeploy
"C:\Program Files\Java\jdk-21\bin\jar.exe" xf C:\wildfly\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear
copy /Y C:\temp\dcm4chee-arc-ui2-5.34.3-patched.war dcm4chee-arc-ui2-5.34.3.war
"C:\Program Files\Java\jdk-21\bin\jar.exe" cf C:\temp\dcm4chee-arc-ear-5.34.3-psql-secure-new.ear .
copy /Y C:\temp\dcm4chee-arc-ear-5.34.3-psql-secure-new.ear C:\wildfly\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear
echo. > C:\wildfly\wildfly-37.0.0.Final\standalone\deployments\dcm4chee-arc-ear-5.34.3-psql-secure.ear.dodeploy
echo Deployment triggered.

echo.
echo [5/5] Watching log...
echo Press Ctrl+C when you see: WFLYSRV0016 Replaced deployment
echo Then clear cache (Ctrl+Shift+Delete) and hard refresh (Ctrl+F5)
echo.
powershell -Command "Get-Content C:\wildfly\wildfly-37.0.0.Final\standalone\log\server.log -Tail 10 -Wait"

echo.
echo ============================================
echo  Done! http://localhost:8080/dcm4chee-arc/ui2/en/
echo ============================================
pause
