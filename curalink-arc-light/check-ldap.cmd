@echo off
REM DCM4CHEE LDAP Diagnostic Script

echo ========================================
echo DCM4CHEE LDAP Diagnostic Check
echo ========================================
echo.

REM Set variables
set LDAP_HOST=ldap://localhost:389
set LDAP_ADMIN=cn=admin,dc=dcm4che,dc=org
set LDAP_PASS=secret

echo 1. Checking if slapd is running...
echo -----------------------------------
netstat -an | findstr :389
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Port 389 is not listening!
    echo slapd may not be running.
    echo.
    echo To start slapd, run: slapd.exe -d 1
    pause
    exit /b 1
) else (
    echo OK: Port 389 is listening
)

echo.
echo 2. Checking if ldapsearch is available...
echo ------------------------------------------
where ldapsearch >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: ldapsearch command not found!
    echo Please install OpenLDAP client tools or add them to PATH
    pause
    exit /b 1
) else (
    echo OK: ldapsearch found
)

echo.
echo 3. Testing LDAP connection...
echo ------------------------------
ldapsearch -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -b "dc=dcm4che,dc=org" -s base
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Cannot connect to LDAP or base DN does not exist!
    echo Run init-ldap.cmd to initialize LDAP
    pause
    exit /b 1
) else (
    echo OK: LDAP connection successful
)

echo.
echo 4. Checking for DICOM Configuration...
echo ---------------------------------------
ldapsearch -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -b "dc=dcm4che,dc=org" "(cn=DICOM Configuration)" cn
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: DICOM Configuration not found!
    echo Run init-ldap.cmd to initialize LDAP
    pause
    exit /b 1
) else (
    echo OK: DICOM Configuration exists
)

echo.
echo 5. Listing all devices...
echo -------------------------
ldapsearch -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -b "cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org" "(objectClass=dicomDevice)" dicomDeviceName
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: No devices found!
    echo Run init-ldap.cmd to load default configuration
    pause
    exit /b 1
)

echo.
echo 6. Checking for dcm4chee-arc device...
echo ---------------------------------------
ldapsearch -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -b "dc=dcm4che,dc=org" "(dicomDeviceName=dcm4chee-arc)" dicomDeviceName
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: dcm4chee-arc device not found!
    echo Run init-ldap.cmd to load default configuration
    pause
    exit /b 1
) else (
    echo OK: dcm4chee-arc device found
)

echo.
echo ========================================
echo LDAP Diagnostic Complete!
echo ========================================
echo.
echo All checks passed. LDAP is properly configured.
echo.
pause
