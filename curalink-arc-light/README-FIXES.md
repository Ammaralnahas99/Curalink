# DCM4CHEE Fixes - README

This directory contains complete solutions for fixing DCM4CHEE Keycloak authentication and LDAP configuration issues.

## 🚨 Your Current Situation

✅ **slapd is running** on port 389  
❌ **OpenLDAP client tools not installed**  
❌ **LDAP database is empty** (no device configuration)  
⚠️ **Keycloak authentication needs fixing** (401 errors)

## 📋 Quick Start

### For LDAP Fix (Choose One):

#### Option A: Apache Directory Studio (Recommended - No Command Line)
1. Read: **`QUICK-START-NO-LDAP-TOOLS.md`**
2. Download Apache Directory Studio
3. Import 6 LDIF files through GUI
4. Done! (~15 minutes)

#### Option B: Install OpenLDAP Client Tools
1. Read: **`INSTALL-LDAP-TOOLS.md`**
2. Install OpenLDAP for Windows
3. Run: `init-ldap.cmd`
4. Done! (~10 minutes)

#### Option C: Python Script
1. Run: `pip install ldap3`
2. Run: `python init-ldap-python.py`
3. Manually import schema files
4. Done! (~20 minutes)

### For Keycloak Fix:
1. Read: **`COMPLETE-FIX-INSTRUCTIONS.md`** (Part 1)
2. Edit `standalone.xml` (remove UI WAR from OIDC config)
3. Rebuild and redeploy
4. Restart WildFly
5. Test authentication

## 📚 Documentation Files

### Quick Start Guides
- **`QUICK-START-NO-LDAP-TOOLS.md`** ⭐ START HERE if you don't have ldap tools
  - Step-by-step GUI approach using Apache Directory Studio
  - No command-line knowledge needed
  - Easiest option for beginners

### Complete Guides
- **`COMPLETE-FIX-INSTRUCTIONS.md`** - Master document covering both fixes
  - Part 1: Keycloak authentication fix
  - Part 2: LDAP configuration fix
  - Part 3: Verification steps
  - Troubleshooting guide

- **`INSTALL-LDAP-TOOLS.md`** - How to install OpenLDAP client tools
  - 5 different installation options
  - Detailed instructions for each
  - Verification steps

- **`LDAP-FIX-GUIDE.md`** - Detailed LDAP setup using command-line
  - Manual step-by-step process
  - Explanation of each step
  - Troubleshooting tips

### Scripts

#### Batch Scripts (Windows CMD)
- **`init-ldap.cmd`** - Automated LDAP initialization
  - Requires OpenLDAP client tools installed
  - Installs schema, creates base DN, loads configuration
  - Verifies setup

- **`check-ldap.cmd`** - LDAP diagnostic tool
  - Checks if slapd is running
  - Tests LDAP connection
  - Verifies configuration
  - Lists devices

#### PowerShell Scripts
- **`init-ldap-powershell.ps1`** - PowerShell version
  - Shows installation instructions if tools not found
  - Lists files to import
  - Provides alternative options

#### Python Scripts
- **`init-ldap-python.py`** - Python-based LDAP initialization
  - Requires: `pip install ldap3`
  - Parses and imports LDIF files
  - No OpenLDAP client tools needed
  - Note: Schema files still need manual import

## 🎯 Recommended Path

### If you're not comfortable with command line:
1. **`QUICK-START-NO-LDAP-TOOLS.md`** → Apache Directory Studio (GUI)

### If you want automation:
1. **`INSTALL-LDAP-TOOLS.md`** → Install OpenLDAP for Windows
2. **`init-ldap.cmd`** → Run automated script

### If you have Python:
1. `pip install ldap3`
2. **`init-ldap-python.py`** → Run Python script
3. Manually import schema files via Apache Directory Studio

## 🔍 What Each Fix Does

### LDAP Fix
**Problem:** DCM4CHEE cannot load device configuration because LDAP database is empty

**Solution:** Initialize LDAP with:
- DCM4CHEE schema definitions (object classes and attributes)
- Base DN structure (`dc=dcm4che,dc=org`)
- DICOM configuration tree
- Default device configurations (dcm4chee-arc, keycloak, logstash, etc.)

**Result:** Device list loads in UI, configuration can be managed

### Keycloak Fix
**Problem:** UI gets 401 Unauthorized when calling backend API

**Root Cause:** Mixed authentication - UI WAR has server-side OIDC which conflicts with client-side Keycloak JS

**Solution:**
- Remove UI WAR from WildFly OIDC configuration
- Keep backend WAR with bearer-only mode
- UI uses client-side Keycloak JS to get token
- Backend validates Bearer token

**Result:** Authentication works, no more 401 errors

## ✅ Verification

### LDAP Working:
```cmd
REM Check devices exist
ldapsearch -H ldap://localhost:389 -D "cn=admin,dc=dcm4che,dc=org" -w secret -b "dc=dcm4che,dc=org" "(dicomDeviceName=dcm4chee-arc)"
```

Or in UI:
```
http://localhost:8080/dcm4chee-arc/ui2/en/device/devicelist
```

Should show 6 devices.

### Keycloak Working:
1. Open: `http://localhost:8080/dcm4chee-arc/ui2/en/`
2. Login with Keycloak
3. Open DevTools (F12) → Network tab
4. API requests should have `Authorization: Bearer` header
5. Responses should be 200 OK, not 401

## 🆘 Troubleshooting

### LDAP Issues

**"ldapsearch: command not found"**
→ See `INSTALL-LDAP-TOOLS.md` or use Apache Directory Studio

**"Can't contact LDAP server"**
→ Check if slapd is running: `netstat -an | findstr :389`

**"No such object"**
→ Base DN not created, import `init-baseDN.ldif` first

**"Undefined object class"**
→ Schema not installed, import schema files first

**Device list empty in UI**
→ Run `check-ldap.cmd` to diagnose

### Keycloak Issues

**Still getting 401 errors**
→ Check if `Authorization: Bearer` header is present in API requests

**Keycloak login doesn't appear**
→ Clear browser cache, check if Keycloak is running on port 8843

**Token validation fails**
→ Check user has required roles in Keycloak

## 📁 File Structure

```
dcm4chee-arc-light/
├── README-FIXES.md (this file)
├── QUICK-START-NO-LDAP-TOOLS.md ⭐ Start here
├── COMPLETE-FIX-INSTRUCTIONS.md
├── INSTALL-LDAP-TOOLS.md
├── LDAP-FIX-GUIDE.md
├── init-ldap.cmd
├── check-ldap.cmd
├── init-ldap-powershell.ps1
├── init-ldap-python.py
└── dcm4chee-arc-assembly/src/main/resources/ldap/
    ├── slapd/
    │   ├── dcm4chee-archive.ldif (schema)
    │   └── dcm4chee-archive-ui.ldif (schema)
    ├── init-baseDN.ldif
    ├── init-config.ldif
    ├── default-config.ldif
    └── default-ui-config.ldif
```

## 🎓 Learning Resources

- **Apache Directory Studio:** https://directory.apache.org/studio/
- **OpenLDAP Documentation:** https://www.openldap.org/doc/
- **DCM4CHEE Wiki:** https://github.com/dcm4che/dcm4chee-arc-light/wiki
- **LDAP Basics:** https://ldap.com/

## 💡 Tips

1. **Always backup** before making changes
2. **Use Apache Directory Studio** if you're new to LDAP - it's much easier
3. **Check logs** when things don't work - they usually tell you what's wrong
4. **One fix at a time** - do LDAP first, then Keycloak
5. **Restart WildFly** after LDAP initialization

## 📞 Support

If you're stuck:
1. Check the troubleshooting section in each guide
2. Look at WildFly logs: `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log`
3. Check browser console (F12) for JavaScript errors
4. Run diagnostic scripts: `check-ldap.cmd`

## ⏱️ Time Estimates

- **LDAP Fix (GUI):** ~15 minutes
- **LDAP Fix (Command-line):** ~10 minutes
- **Keycloak Fix:** ~20 minutes
- **Total:** ~30-35 minutes

## 🎉 Success Criteria

You'll know everything is working when:
1. ✅ Device list shows 6 devices in UI
2. ✅ Login redirects to Keycloak
3. ✅ After login, UI loads without errors
4. ✅ API calls return 200 OK (not 401)
5. ✅ No errors in browser console
6. ✅ No LDAP errors in WildFly logs

Good luck! 🚀
