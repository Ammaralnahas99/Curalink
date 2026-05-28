@echo off
echo Fixing 409 Conflict errors by adding missing webapp entry to LDAP
echo.

echo Step 1: Adding webapp entry using slapadd (server must be stopped first)
echo WARNING: This will temporarily stop OpenLDAP
echo.

pause

echo Stopping any running slapd processes...
taskkill /f /im slapd.exe 2>nul

echo Adding webapp entry to LDAP database...
cd /d C:\OpenLDAP
slapadd.exe -f slapd.conf -l "C:\Users\USER\dcm4chee-arc-light\add-webapp-entry.ldif"

if %errorlevel% equ 0 (
    echo SUCCESS: Webapp entry added to LDAP
) else (
    echo ERROR: Failed to add webapp entry
    pause
    exit /b 1
)

echo.
echo Restarting OpenLDAP server...
start "OpenLDAP" slapd.exe -f slapd.conf -d 1

echo.
echo Waiting for LDAP server to start...
timeout /t 5 /nobreak >nul

echo.
echo Testing LDAP connection...
echo Searching for the new webapp entry...
echo.

echo Done! The webapp entry should now be in LDAP.
echo Refresh your browser to check if 409 errors are resolved.
echo.
pause