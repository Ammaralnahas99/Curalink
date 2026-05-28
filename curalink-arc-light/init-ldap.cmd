@echo off
REM DCM4CHEE LDAP Initialization Script
REM This script initializes OpenLDAP with DCM4CHEE configuration

echo ========================================
echo DCM4CHEE LDAP Initialization
echo ========================================
echo.

REM Set variables
set LDAP_HOST=ldap://localhost:389
set LDAP_ADMIN=cn=admin,dc=dcm4che,dc=org
set LDAP_PASS=secret
set LDAP_CONFIG_ADMIN=cn=config
set LDAP_DIR=C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap

REM Check if ldapadd is available
where ldapadd >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: ldapadd command not found!
    echo Please install OpenLDAP client tools or add them to PATH
    pause
    exit /b 1
)

echo Step 1: Installing DCM4CHEE Schema Files...
echo -------------------------------------------
cd /d "%LDAP_DIR%"

echo Adding dcm4chee-archive schema...
ldapmodify -a -H %LDAP_HOST% -D "%LDAP_CONFIG_ADMIN%" -w %LDAP_PASS% -f slapd\dcm4chee-archive.ldif
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Schema may already exist or error occurred
)

echo Adding dcm4chee-archive-ui schema...
ldapmodify -a -H %LDAP_HOST% -D "%LDAP_CONFIG_ADMIN%" -w %LDAP_PASS% -f slapd\dcm4chee-archive-ui.ldif
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Schema may already exist or error occurred
)

echo.
echo Step 2: Initializing Base DN...
echo --------------------------------
ldapadd -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -f init-baseDN.ldif
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Base DN may already exist or error occurred
)

echo.
echo Step 3: Initializing DICOM Configuration Structure...
echo ------------------------------------------------------
ldapadd -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -f init-config.ldif
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Config structure may already exist or error occurred
)

echo.
echo Step 4: Loading Default DCM4CHEE Configuration...
echo --------------------------------------------------
echo This may take a minute (large file)...
ldapadd -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -f default-config.ldif
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to load default configuration
    echo Check if schema files were loaded correctly
    pause
    exit /b 1
)

echo.
echo Step 5: Loading Default UI Configuration...
echo --------------------------------------------
ldapadd -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -f default-ui-config.ldif
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: UI config may already exist or error occurred
)

echo.
echo Step 6: Verifying Configuration...
echo -----------------------------------
echo Searching for dcm4chee-arc device...
ldapsearch -H %LDAP_HOST% -D "%LDAP_ADMIN%" -w %LDAP_PASS% -b "dc=dcm4che,dc=org" "(dicomDeviceName=dcm4chee-arc)" dicomDeviceName
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Device not found! LDAP initialization may have failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo LDAP Initialization Complete!
echo ========================================
echo.
echo You can now restart WildFly to connect to LDAP.
echo.
pause
