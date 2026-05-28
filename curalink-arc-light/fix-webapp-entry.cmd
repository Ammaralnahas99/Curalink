@echo off
echo Fixing webapp entry - removing invalid IOCM_RS service class
echo.

echo Step 1: Stopping OpenLDAP server...
taskkill /f /im slapd.exe 2>nul

echo Step 2: Removing the bad webapp entry...
cd /d C:\OpenLDAP

echo Step 3: Exporting current LDAP data without the bad entry...
slapcat.exe -f slapd.conf > temp_backup.ldif

echo Step 4: Removing the bad webapp entry from backup...
findstr /v "dcmWebAppName=dcm4chee-arc-ui" temp_backup.ldif > clean_backup.ldif

echo Step 5: Clearing database and reimporting clean data...
del /q data\*.*
slapadd.exe -f slapd.conf -l clean_backup.ldif

echo Step 6: Adding corrected webapp entry...
slapadd.exe -f slapd.conf -l "C:\Users\USER\dcm4chee-arc-light\add-webapp-entry.ldif"

if %errorlevel% equ 0 (
    echo SUCCESS: Corrected webapp entry added
) else (
    echo ERROR: Failed to add corrected webapp entry
    pause
    exit /b 1
)

echo Step 7: Restarting OpenLDAP server...
start "OpenLDAP" slapd.exe -f slapd.conf -d 1

echo Step 8: Cleaning up temporary files...
del temp_backup.ldif
del clean_backup.ldif

echo.
echo Done! The webapp entry has been corrected.
echo The invalid IOCM_RS service class has been removed.
echo.
pause