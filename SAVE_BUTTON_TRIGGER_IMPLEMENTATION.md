# Save Button Trigger Implementation for Hospital Dashboards

## Overview
This implementation automatically initializes hospital dashboards for each AE (Application Entity) Title when the device configuration is saved using the **Save button**.

## What Happens When You Click Save

### Flow Diagram:
```
User clicks "Save" button in Device Configurator
    ↓
submitFunction() is called
    ↓
Device is saved to backend
    ↓
Archive is reloaded
    ↓
✨ NEW: initializeHospitalDashboardsForAEs() is triggered
    ↓
For each AE Title in the device:
    ↓
    POST /aets/{AETitle}/rs/hospitals/dashboard/initialize
    ↓
    Hospital dashboard initialized for that AE
    ↓
Success message shown to user
```

## Files Modified

### Backend (Java)

#### 1. `HospitalDashboardRS.java`
**Location:** `dcm4chee-arc-light/curalink-arc-iocm-rs/src/main/java/org/curalink/arc/iocm/rs/HospitalDashboardRS.java`

**Added Method:**
```java
@POST
@Path("/hospitals/dashboard/initialize")
@Produces("application/json")
public Response initializeHospitalDashboard()
```

**Purpose:**
- Creates/initializes a hospital dashboard for the AE Title
- Called automatically when device is saved
- Returns confirmation with AE Title and status

**Endpoint:**
```
POST /curalink/aets/{AETitle}/rs/hospitals/dashboard/initialize
```

**Response:**
```json
{
  "aeTitle": "DCM4CHEE",
  "status": "initialized",
  "message": "Hospital dashboard initialized for AE Title: DCM4CHEE"
}
```

### Frontend (TypeScript/Angular)

#### 2. `device-configurator.component.ts`
**Location:** `dcm4chee-arc-light/curalink-arc-ui2/src/app/configuration/device-configurator/device-configurator.component.ts`

**Added Methods:**

##### a) `initializeHospitalDashboardsForAEs()`
```typescript
initializeHospitalDashboardsForAEs(){
    // Get all AE titles from the current device
    if(_.hasIn(this.service.device, 'dicomNetworkAE') && Array.isArray(this.service.device.dicomNetworkAE)){
        const aeTitles = this.service.device.dicomNetworkAE
            .filter(ae => _.hasIn(ae, 'dicomAETitle'))
            .map(ae => ae.dicomAETitle);
        
        console.log('Initializing hospital dashboards for AE titles:', aeTitles);
        
        // Initialize dashboard for each AE title
        aeTitles.forEach(aeTitle => {
            this.initializeHospitalDashboardForAE(aeTitle);
        });
    }
}
```

**Purpose:**
- Extracts all AE titles from the saved device
- Calls initialization for each AE title

##### b) `initializeHospitalDashboardForAE(aeTitle: string)`
```typescript
initializeHospitalDashboardForAE(aeTitle: string){
    const url = `${j4care.addLastSlash(this.mainservice.baseUrl)}aets/${aeTitle}/rs/hospitals/dashboard/initialize`;
    
    this.$http.post(url, {}).subscribe(
        (response) => {
            console.log(`Hospital dashboard initialized for AE: ${aeTitle}`, response);
            this.mainservice.showMsg($localize `:@@hospital_dashboard_initialized:Hospital dashboard initialized for AE Title: ${aeTitle}:aeTitle:`);
        },
        (err) => {
            console.error(`Error initializing hospital dashboard for AE: ${aeTitle}`, err);
            // Don't show error to user as this is a background operation
        }
    );
}
```

**Purpose:**
- Makes POST request to backend to initialize dashboard
- Shows success message to user
- Logs errors silently (doesn't interrupt save process)

**Modified Method:**

##### c) `submitFunction(value)` - Added trigger after reload
```typescript
$this.service.reloadArchive().subscribe((res) => {
    console.log('res', res);
    $this.mainservice.showMsg($localize `:@@reload_successful:Reload successful`);
    
    // ... existing code ...
    
    // ✨ NEW: Initialize hospital dashboards for new AE titles
    $this.initializeHospitalDashboardsForAEs();
    
    $this.cfpLoadingBar.complete();
}, (err) => {
    $this.cfpLoadingBar.complete();
});
```

## User Experience

### When Saving a Device with AE Titles:

1. **User clicks "Save" button**
2. **Device is saved** - "Device saved successfully!" message
3. **Archive is reloaded** - "Reload successful" message
4. **✨ Dashboards are initialized** - For each AE Title:
   - "Hospital dashboard initialized for AE Title: DCM4CHEE"
   - "Hospital dashboard initialized for AE Title: PACS_AE"
   - etc.

### Example Scenario:

**Device has 3 AE Titles:**
- DCM4CHEE
- PACS_AE
- BACKUP_AE

**After clicking Save, user sees:**
```
✓ Device saved successfully!
✓ Reload successful
✓ Hospital dashboard initialized for AE Title: DCM4CHEE
✓ Hospital dashboard initialized for AE Title: PACS_AE
✓ Hospital dashboard initialized for AE Title: BACKUP_AE
```

## Technical Details

### Trigger Point
The initialization is triggered in the `submitFunction()` method, specifically after:
1. Device is successfully saved
2. Archive is successfully reloaded
3. UI config is updated (if applicable)

### Error Handling
- **Backend errors**: Logged to console, don't interrupt save process
- **Network errors**: Logged to console, don't show to user
- **Save process**: Continues normally even if dashboard initialization fails

### Performance
- **Asynchronous**: Dashboard initialization doesn't block the save process
- **Parallel**: All AE titles are initialized simultaneously
- **Non-blocking**: User can continue working immediately after save

## Configuration

### Backend Endpoint
```
POST /curalink/aets/{AETitle}/rs/hospitals/dashboard/initialize
```

**Path Parameter:**
- `AETitle`: The AE Title to initialize dashboard for

**Request Body:**
- Empty `{}`

**Response:**
```json
{
  "aeTitle": "DCM4CHEE",
  "status": "initialized",
  "message": "Hospital dashboard initialized for AE Title: DCM4CHEE"
}
```

### Frontend Configuration
No configuration needed - automatically triggered on save.

## Testing

### Manual Testing Steps:

1. **Navigate to Device Configuration:**
   ```
   http://localhost:8080/curalink/ui2/en/#/device/edit/{deviceName}
   ```

2. **Add or Edit AE Titles:**
   - Go to "Network AE" section
   - Add new AE Title or edit existing one
   - Fill in required fields (AE Title, Description, etc.)

3. **Click Save Button**

4. **Verify Messages:**
   - ✓ "Device saved successfully!"
   - ✓ "Reload successful"
   - ✓ "Hospital dashboard initialized for AE Title: {AETitle}"

5. **Check Console:**
   ```
   Initializing hospital dashboards for AE titles: ["DCM4CHEE", "PACS_AE"]
   Hospital dashboard initialized for AE: DCM4CHEE
   Hospital dashboard initialized for AE: PACS_AE
   ```

6. **Navigate to Dashboard:**
   ```
   http://localhost:8080/curalink/ui2/en/#/dashboard
   ```

7. **Verify:**
   - All AE titles are displayed
   - Each AE has its own dashboard section
   - Hospital statistics are loaded

### Automated Testing:

```typescript
// Test: Dashboard initialization is triggered on save
it('should initialize hospital dashboards after device save', () => {
    // Arrange
    const device = {
        dicomNetworkAE: [
            { dicomAETitle: 'DCM4CHEE' },
            { dicomAETitle: 'PACS_AE' }
        ]
    };
    
    // Act
    component.submitFunction(device);
    
    // Assert
    expect(httpMock.post).toHaveBeenCalledWith(
        '/curalink/aets/DCM4CHEE/rs/hospitals/dashboard/initialize',
        {}
    );
    expect(httpMock.post).toHaveBeenCalledWith(
        '/curalink/aets/PACS_AE/rs/hospitals/dashboard/initialize',
        {}
    );
});
```

## Benefits

### 1. **Automatic**
- No manual dashboard creation needed
- Happens automatically on save

### 2. **Seamless**
- Integrated into existing save workflow
- No additional user action required

### 3. **Reliable**
- Triggered after successful save
- Error handling prevents interruption

### 4. **User-Friendly**
- Clear success messages
- Immediate feedback

### 5. **Scalable**
- Handles any number of AE titles
- Parallel initialization for performance

## Troubleshooting

### Issue: Dashboard not initialized
**Check:**
1. Device was saved successfully
2. AE Title has `dicomAETitle` property
3. Backend endpoint is accessible
4. Check browser console for errors

### Issue: No success message
**Check:**
1. Message localization is configured
2. `mainservice.showMsg()` is working
3. Check browser console for errors

### Issue: Backend error
**Check:**
1. Database connection is working
2. Entity manager is configured
3. Check server logs for errors

## Future Enhancements

1. **Batch Initialization**: Initialize multiple AE titles in single request
2. **Progress Indicator**: Show progress bar for multiple AE titles
3. **Retry Logic**: Automatic retry on failure
4. **Validation**: Check if dashboard already exists before initializing
5. **Cleanup**: Remove dashboards for deleted AE titles
6. **Audit Log**: Log all dashboard initializations

## Summary

This implementation ensures that **every time a device is saved with AE Titles, hospital dashboards are automatically initialized** for each AE Title. The process is:

- ✅ **Automatic** - Triggered by save button
- ✅ **Seamless** - Integrated into save workflow
- ✅ **Reliable** - Error handling and logging
- ✅ **User-Friendly** - Clear feedback messages
- ✅ **Scalable** - Handles multiple AE titles

**Result:** Users don't need to manually create dashboards - they're created automatically when saving the device configuration!
