# DCM4CHEE LDAP Fix for Apache Directory Server (ApacheDS)

## Problem Identified

You're using **Apache Directory Server (ApacheDS)** on port **10389**, not OpenLDAP.

The error `ERR_268 Cannot find a partition for dc=dcm4che,dc=org` means you need to create a partition in ApacheDS before adding entries.

## Solution: Create Partition in Apache Directory Studio

### Step 1: Open Apache Directory Studio

You already have it open and connected to `localhost:10389`.

### Step 2: Create a New Partition

1. **In the LDAP Browser**, right-click on **"Root DSE"**
2. Select **"Open Configuration"**
3. This opens the ApacheDS configuration tree

4. Navigate to:
   ```
   ou=config
     └─ ads-directoryServiceId=default
         └─ ou=partitions
   ```

5. **Right-click on `ou=partitions`** → **"New"** → **"New Entry"**

6. Select **"Create entry from scratch"**

7. **Add Object Classes:**
   - Click **"Add"**
   - Select: `ads-base`
   - Select: `ads-jdbmPartition`
   - Click **"Next"**

8. **Set Attributes:**
   - `ads-partitionId`: `dcm4che` (partition ID)
   - `ads-partitionSuffix`: `dc=dcm4che,dc=org` (base DN)
   - Click **"Finish"**

### Step 3: Create Indexes for the Partition

1. **Right-click on the new partition** → **"New"** → **"New Entry"**

2. Select **"Create entry from scratch"**

3. **Add Object Classes:**
   - `ads-base`
   - `ads-jdbmIndex`

4. **Set Attributes:**
   - `ads-indexAttributeId`: `objectClass`
   - Click **"Finish"**

5. **Repeat for these indexes:**
   - `dc`
   - `ou`
   - `cn`
   - `uid`
   - `dicomDeviceName`

### Step 4: Restart ApacheDS

ApacheDS needs to be restarted for the partition to be created.

**In Apache Directory Studio:**
1. Right-click on the connection
2. Select **"Close Connection"**
3. Find the ApacheDS server in the **"Servers"** view (bottom panel)
4. Right-click → **"Stop"**
5. Wait a few seconds
6. Right-click → **"Start"**
7. Reconnect to the server

**Or restart the ApacheDS service:**
```cmd
REM Stop ApacheDS
net stop ApacheDS

REM Start ApacheDS
net start ApacheDS
```

### Step 5: Verify Partition Exists

1. Reconnect to `localhost:10389`
2. In the LDAP Browser, you should now see:
   ```
   Root DSE
     ├─ dc=dcm4che,dc=org (NEW!)
     ├─ ou=config
     ├─ ou=schema
     └─ ou=system
   ```

### Step 6: Import LDIF Files

Now you can import the DCM4CHEE configuration files:

1. **Right-click on connection** → **"Import"** → **"LDIF Import"**

2. **Import in this order:**

   **Schema files (already imported - you showed success):**
   - ✅ `slapd\dcm4chee-archive.ldif` (already done)
   - ✅ `slapd\dcm4chee-archive-ui.ldif` (already done)

   **Configuration files:**
   - `init-baseDN.ldif` (this will now work!)
   - `init-config.ldif`
   - `default-config.ldif`
   - `default-ui-config.ldif`

3. For each file:
   - Browse to: `C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap\`
   - Select the file
   - Click **"Finish"**

### Step 7: Verify Configuration

After importing, expand the tree:
```
dc=dcm4che,dc=org
  └─ cn=DICOM Configuration
      └─ cn=Devices
          ├─ dicomDeviceName=dcm4chee-arc
          ├─ dicomDeviceName=keycloak
          ├─ dicomDeviceName=logstash
          ├─ dicomDeviceName=storescp
          ├─ dicomDeviceName=stowrsd
          └─ dicomDeviceName=scheduledstation
```

If you see these devices, **SUCCESS!** ✅

---

## Alternative: Create Partition via LDIF

If you prefer command-line, create a file `create-partition.ldif`:

```ldif
dn: ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-partition
objectClass: ads-jdbmPartition
ads-partitionId: dcm4che
ads-partitionSuffix: dc=dcm4che,dc=org
ads-enabled: TRUE

dn: ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: organizationalUnit
ou: indexes

dn: ads-indexAttributeId=objectClass,ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-jdbmIndex
ads-indexAttributeId: objectClass
ads-indexHasReverse: FALSE

dn: ads-indexAttributeId=dc,ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-jdbmIndex
ads-indexAttributeId: dc
ads-indexHasReverse: FALSE

dn: ads-indexAttributeId=ou,ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-jdbmIndex
ads-indexAttributeId: ou
ads-indexHasReverse: FALSE

dn: ads-indexAttributeId=cn,ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-jdbmIndex
ads-indexAttributeId: cn
ads-indexHasReverse: FALSE

dn: ads-indexAttributeId=uid,ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-jdbmIndex
ads-indexAttributeId: uid
ads-indexHasReverse: FALSE

dn: ads-indexAttributeId=dicomDeviceName,ou=indexes,ads-partitionId=dcm4che,ou=partitions,ads-directoryServiceId=default,ou=config
objectClass: ads-base
objectClass: ads-jdbmIndex
ads-indexAttributeId: dicomDeviceName
ads-indexHasReverse: FALSE
```

Then import via Apache Directory Studio or ldapadd.

---

## Update ldap.properties

Your `ldap.properties` needs to point to port **10389**, not 389:

**File:** `C:\Dcm4chee\wildfly-37.0.0.Final\standalone\configuration\dcm4chee-arc\ldap.properties`

```properties
java.naming.factory.initial=com.sun.jndi.ldap.LdapCtxFactory
java.naming.ldap.attributes.binary=dicomVendorData
java.naming.provider.url=ldap://localhost:10389/dc=dcm4che,dc=org
java.naming.security.principal=uid=admin,ou=system
java.naming.security.credentials=secret
```

**Note:** ApacheDS default admin is `uid=admin,ou=system`, not `cn=admin,dc=dcm4che,dc=org`

---

## Troubleshooting

### "Cannot find a partition"
- Partition not created yet
- Follow Step 2 to create partition
- Restart ApacheDS after creating partition

### "Invalid credentials"
For ApacheDS, use:
- DN: `uid=admin,ou=system`
- Password: `secret` (default)

### Partition not appearing after restart
- Check ApacheDS logs
- Verify partition was created in `ou=config`
- Try creating partition via GUI instead of LDIF

### Schema already imported
Good! You already successfully imported the schema files. Now just:
1. Create partition
2. Restart ApacheDS
3. Import configuration files

---

## Summary

**Your situation:**
- ✅ ApacheDS running on port 10389
- ✅ Schema files imported successfully
- ❌ Partition `dc=dcm4che,dc=org` doesn't exist
- ❌ Cannot add base DN without partition

**Fix:**
1. Create partition `dcm4che` with suffix `dc=dcm4che,dc=org`
2. Restart ApacheDS
3. Import configuration LDIF files
4. Update `ldap.properties` to use port 10389
5. Restart WildFly

**Time:** ~10 minutes

---

## Next Steps

After fixing LDAP:
1. Update `ldap.properties` to use port 10389
2. Restart WildFly
3. Test device list in UI
4. Fix Keycloak authentication (see `COMPLETE-FIX-INSTRUCTIONS.md`)
