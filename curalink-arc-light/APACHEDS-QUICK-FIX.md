# ApacheDS Quick Fix - Create Partition

## Problem
You're getting: `ERR_268 Cannot find a partition for dc=dcm4che,dc=org`

This means ApacheDS doesn't have a partition for `dc=dcm4che,dc=org` yet.

## Quick Fix (5 minutes)

### In Apache Directory Studio:

#### 1. Open Configuration
- Right-click **"Root DSE"**
- Select **"Open Configuration"**

#### 2. Navigate to Partitions
```
ou=config
  └─ ads-directoryServiceId=default
      └─ ou=partitions  ← Right-click here
```

#### 3. Create New Partition
- Right-click **`ou=partitions`**
- **New** → **New Entry**
- **Create entry from scratch**

#### 4. Select Object Classes
- Add: `ads-base`
- Add: `ads-jdbmPartition`
- Click **Next**

#### 5. Set Partition Attributes
```
ads-partitionId: dcm4che
ads-partitionSuffix: dc=dcm4che,dc=org
```
- Click **Finish**

#### 6. Create Index for objectClass
- Right-click the **new partition entry**
- **New** → **New Entry**
- **Create entry from scratch**
- Add object classes: `ads-base`, `ads-jdbmIndex`
- Set attribute: `ads-indexAttributeId: objectClass`
- Click **Finish**

#### 7. Restart ApacheDS
In Apache Directory Studio:
- **Servers** view (bottom panel)
- Right-click your server
- **Stop**
- Wait 5 seconds
- **Start**

Or via command line:
```cmd
net stop ApacheDS
net start ApacheDS
```

#### 8. Reconnect and Verify
- Reconnect to `localhost:10389`
- You should now see `dc=dcm4che,dc=org` in the tree!

#### 9. Import Configuration Files
Now import these files (in order):
1. `init-baseDN.ldif` ← This will now work!
2. `init-config.ldif`
3. `default-config.ldif`
4. `default-ui-config.ldif`

**Location:** `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\`

#### 10. Update WildFly Configuration
Copy the updated `ldap.properties` to WildFly:
```cmd
copy /y "C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\configuration\dcm4chee-arc\ldap.properties" "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\dcm4chee-arc\ldap.properties"
```

The file now has:
- Port: `10389` (was 389)
- Admin DN: `uid=admin,ou=system` (was cn=admin,dc=dcm4che,dc=org)

#### 11. Restart WildFly
```cmd
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
standalone.bat
```

#### 12. Test
Open: `http://localhost:8080/dcm4chee-arc/ui2/en/device/devicelist`

You should see 6 devices! ✅

---

## Visual Guide

```
BEFORE (Error):
Root DSE
  ├─ ou=config
  ├─ ou=schema
  └─ ou=system
  
  ❌ dc=dcm4che,dc=org (missing!)

AFTER (Fixed):
Root DSE
  ├─ dc=dcm4che,dc=org ✅ (NEW!)
  │   └─ cn=DICOM Configuration
  │       └─ cn=Devices
  │           ├─ dcm4chee-arc
  │           ├─ keycloak
  │           ├─ logstash
  │           ├─ storescp
  │           ├─ stowrsd
  │           └─ scheduledstation
  ├─ ou=config
  ├─ ou=schema
  └─ ou=system
```

---

## Why This Happened

**OpenLDAP** (port 389): Creates base DN automatically when you add entries

**ApacheDS** (port 10389): Requires partitions to be created first

You're using ApacheDS, so you need to create the partition before adding entries.

---

## Summary

1. ✅ Schema files already imported (you did this!)
2. ⏳ Create partition `dcm4che` with suffix `dc=dcm4che,dc=org`
3. ⏳ Restart ApacheDS
4. ⏳ Import configuration files
5. ⏳ Update ldap.properties (already done in project)
6. ⏳ Copy to WildFly and restart

**Total time:** ~10 minutes
