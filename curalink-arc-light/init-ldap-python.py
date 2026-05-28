#!/usr/bin/env python3
"""
DCM4CHEE LDAP Initialization Script (Python)
Uses ldap3 library to initialize OpenLDAP with DCM4CHEE configuration
"""

import sys
import os

try:
    from ldap3 import Server, Connection, ALL, MODIFY_ADD, MODIFY_REPLACE
    from ldap3.core.exceptions import LDAPException, LDAPEntryAlreadyExistsResult
except ImportError:
    print("ERROR: ldap3 library not found!")
    print("Install it with: pip install ldap3")
    sys.exit(1)

# Configuration
LDAP_SERVER = "localhost"
LDAP_PORT = 389
ADMIN_DN = "cn=admin,dc=dcm4che,dc=org"
ADMIN_PASSWORD = "secret"
CONFIG_DN = "cn=config"
LDAP_DIR = r"C:\Users\USER\dcm4chee-arc-light\dcm4chee-arc-assembly\src\main\resources\ldap"

def parse_ldif_file(filepath):
    """Parse LDIF file and return list of entries"""
    entries = []
    current_entry = {}
    current_attr = None
    
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.rstrip('\n\r')
            
            # Skip comments and version
            if line.startswith('#') or line.startswith('version:'):
                continue
            
            # Empty line marks end of entry
            if not line.strip():
                if current_entry:
                    entries.append(current_entry)
                    current_entry = {}
                    current_attr = None
                continue
            
            # Continuation line (starts with space)
            if line.startswith(' ') and current_attr:
                current_entry[current_attr][-1] += line[1:]
                continue
            
            # New attribute
            if ':' in line:
                attr, value = line.split(':', 1)
                value = value.lstrip()
                
                if attr not in current_entry:
                    current_entry[attr] = []
                current_entry[attr].append(value)
                current_attr = attr
    
    # Add last entry
    if current_entry:
        entries.append(current_entry)
    
    return entries

def add_ldif_entries(conn, filepath, description):
    """Add entries from LDIF file to LDAP"""
    print(f"\n{description}")
    print("-" * 50)
    
    if not os.path.exists(filepath):
        print(f"ERROR: File not found: {filepath}")
        return False
    
    try:
        entries = parse_ldif_file(filepath)
        print(f"Found {len(entries)} entries in LDIF file")
        
        success_count = 0
        skip_count = 0
        
        for entry in entries:
            if 'dn' not in entry:
                continue
            
            dn = entry['dn'][0]
            attributes = {}
            
            for attr, values in entry.items():
                if attr == 'dn':
                    continue
                attributes[attr] = values
            
            try:
                conn.add(dn, attributes=attributes)
                if conn.result['result'] == 0:
                    success_count += 1
                    print(f"  ✓ Added: {dn}")
                elif conn.result['result'] == 68:  # Already exists
                    skip_count += 1
                    print(f"  - Skipped (exists): {dn}")
                else:
                    print(f"  ✗ Error: {dn} - {conn.result['description']}")
            except LDAPEntryAlreadyExistsResult:
                skip_count += 1
                print(f"  - Skipped (exists): {dn}")
            except Exception as e:
                print(f"  ✗ Error adding {dn}: {str(e)}")
        
        print(f"\nSummary: {success_count} added, {skip_count} skipped")
        return success_count > 0 or skip_count > 0
        
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return False

def main():
    print("=" * 50)
    print("DCM4CHEE LDAP Initialization (Python)")
    print("=" * 50)
    
    # Connect to LDAP
    print("\nConnecting to LDAP server...")
    server = Server(LDAP_SERVER, port=LDAP_PORT, get_info=ALL)
    
    try:
        # Try to connect with admin credentials
        conn = Connection(server, user=ADMIN_DN, password=ADMIN_PASSWORD, auto_bind=True)
        print(f"✓ Connected as: {ADMIN_DN}")
    except Exception as e:
        print(f"✗ Connection failed: {str(e)}")
        print("\nMake sure:")
        print("  1. slapd is running on port 389")
        print("  2. Admin credentials are correct")
        print(f"     DN: {ADMIN_DN}")
        print(f"     Password: {ADMIN_PASSWORD}")
        sys.exit(1)
    
    # Note: Schema files need to be added via ldapmodify to cn=config
    # This requires special handling and is better done with ldapmodify tool
    print("\n" + "=" * 50)
    print("IMPORTANT: Schema Installation")
    print("=" * 50)
    print("\nSchema files must be installed using ldapmodify:")
    print(f"  ldapmodify -a -H ldap://{LDAP_SERVER}:{LDAP_PORT} -D \"{CONFIG_DN}\" -w {ADMIN_PASSWORD} -f slapd\\dcm4chee-archive.ldif")
    print(f"  ldapmodify -a -H ldap://{LDAP_SERVER}:{LDAP_PORT} -D \"{CONFIG_DN}\" -w {ADMIN_PASSWORD} -f slapd\\dcm4chee-archive-ui.ldif")
    print("\nSkipping schema installation (requires ldapmodify)...")
    
    # Initialize base DN
    success = add_ldif_entries(
        conn,
        os.path.join(LDAP_DIR, "init-baseDN.ldif"),
        "Step 1: Initializing Base DN"
    )
    
    if not success:
        print("\n✗ Failed to initialize base DN")
        print("This might be normal if it already exists")
    
    # Initialize DICOM configuration structure
    success = add_ldif_entries(
        conn,
        os.path.join(LDAP_DIR, "init-config.ldif"),
        "Step 2: Initializing DICOM Configuration Structure"
    )
    
    # Load default configuration
    success = add_ldif_entries(
        conn,
        os.path.join(LDAP_DIR, "default-config.ldif"),
        "Step 3: Loading Default DCM4CHEE Configuration"
    )
    
    if not success:
        print("\n✗ Failed to load default configuration")
        print("Make sure schema files are installed first!")
        conn.unbind()
        sys.exit(1)
    
    # Load default UI configuration
    add_ldif_entries(
        conn,
        os.path.join(LDAP_DIR, "default-ui-config.ldif"),
        "Step 4: Loading Default UI Configuration"
    )
    
    # Verify configuration
    print("\n" + "=" * 50)
    print("Step 5: Verifying Configuration")
    print("=" * 50)
    
    conn.search(
        search_base='dc=dcm4che,dc=org',
        search_filter='(dicomDeviceName=dcm4chee-arc)',
        attributes=['dicomDeviceName']
    )
    
    if conn.entries:
        print("✓ dcm4chee-arc device found!")
        print(f"  DN: {conn.entries[0].entry_dn}")
    else:
        print("✗ dcm4chee-arc device NOT found!")
        print("  Configuration may not be loaded correctly")
    
    # List all devices
    conn.search(
        search_base='cn=Devices,cn=DICOM Configuration,dc=dcm4che,dc=org',
        search_filter='(objectClass=dicomDevice)',
        attributes=['dicomDeviceName']
    )
    
    print(f"\nFound {len(conn.entries)} devices:")
    for entry in conn.entries:
        print(f"  - {entry.dicomDeviceName}")
    
    conn.unbind()
    
    print("\n" + "=" * 50)
    print("LDAP Initialization Complete!")
    print("=" * 50)
    print("\nYou can now restart WildFly to connect to LDAP.")

if __name__ == "__main__":
    main()
