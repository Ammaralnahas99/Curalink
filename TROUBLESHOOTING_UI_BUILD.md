# Troubleshooting UI Build Issues

## Common Issues with Your Script

### 1. **Path Issues**
Your script uses:
```powershell
$wildflyHome = "C:\wildfly\wildfly-37.0.0.Final"
```

But based on your previous commands, WildFly might be at:
```powershell
$wildflyHome = "C:\Dcm4chee\wildfly-37.0.0.Final"
```

**Fix:** Update the path in the script to match your actual WildFly location.

### 2. **Node Modules Missing**
If `node_modules` doesn't exist, `npm run build` will fail.

**Fix:** The improved script checks for this and runs `npm install` if needed.

### 3. **Maven Not in PATH**
If Maven (`mvn`) is not in your system PATH, the script will fail.

**Fix:** Either:
- Add Maven to PATH
- Use the Maven wrapper: `.\mvnw.cmd` instead of `mvn`

### 4. **WildFly Not Stopped Properly**
Sometimes WildFly processes don't stop cleanly.

**Fix:** The improved script waits longer and checks more thoroughly.

### 5. **Deployment Timing**
100 seconds might not be enough for WildFly to fully start and deploy.

**Fix:** Wait longer or check deployment markers more carefully.

## How to Fix Your Current Situation

### Option 1: Use the Improved Script

Run the new script I created:
```powershell
powershell -ExecutionPolicy Bypass -File C:\curalink\rebuild-ui-with-dashboard.ps1
```

### Option 2: Fix Your Original Script

Edit your script and change these lines:

**Line 13 - Fix WildFly path:**
```powershell
# OLD:
$wildflyHome   = "C:\wildfly\wildfly-37.0.0.Final"

# NEW (if your WildFly is in C:\Dcm4chee):
$wildflyHome   = "C:\Dcm4chee\wildfly-37.0.0.Final"
```

**Line 47 - Use Maven wrapper:**
```powershell
# OLD:
& mvn package -DskipTests

# NEW:
& .\mvnw.cmd package -DskipTests
```

**Line 40 - Add node_modules check:**
```powershell
# Add before npm run build:
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    & npm install
}
```

### Option 3: Manual Build (Most Reliable)

If scripts keep failing, build manually:

#### Step 1: Build UI
```powershell
cd C:\curalink\dcm4chee-arc-light\curalink-arc-ui2

# Clean
Remove-Item .angular -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item target -Recurse -Force -ErrorAction SilentlyContinue

# Install dependencies (if needed)
npm install

# Build
npm run build

# Package
.\mvnw.cmd package -DskipTests
```

#### Step 2: Stop WildFly
```powershell
# Find and kill WildFly process
Get-Process java | Where-Object {
    (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)").CommandLine -match "wildfly"
} | Stop-Process -Force
```

#### Step 3: Deploy
```powershell
# Copy WAR to deployments
$war = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\target\curalink-arc-ui2-5.34.3.war"
$deployDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

Copy-Item $war $deployDir -Force

# Create deploy marker
"" | Out-File "$deployDir\curalink-arc-ui2-5.34.3.war.dodeploy" -Encoding ASCII
```

#### Step 4: Start WildFly
```powershell
cd C:\Dcm4chee\wildfly-37.0.0.Final\bin
Start-Process .\standalone.bat -WindowStyle Minimized
```

## Checking if Build Succeeded

### 1. Check if WAR was created:
```powershell
Get-Item C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\target\*.war
```

Should show:
```
curalink-arc-ui2-5.34.3.war
```

### 2. Check WAR size:
```powershell
$war = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\target\curalink-arc-ui2-5.34.3.war"
[math]::Round((Get-Item $war).Length / 1MB, 2)
```

Should be around 10-20 MB. If it's very small (< 1 MB), the build failed.

### 3. Check if dashboard code is in WAR:
```powershell
Add-Type -AssemblyName System.IO.Compression.FileSystem
$war = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\target\curalink-arc-ui2-5.34.3.war"
$zip = [System.IO.Compression.ZipFile]::OpenRead($war)
$zip.Entries | Where-Object { $_.Name -match "hospital-dashboard" } | Select-Object FullName
$zip.Dispose()
```

Should show files like:
```
en/hospital-dashboard.component.js
en/hospital-dashboard.component.css
```

### 4. Check WildFly deployment:
```powershell
$deployDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"
Get-ChildItem $deployDir\*.deployed
```

Should show `.deployed` markers for your applications.

### 5. Check WildFly logs:
```powershell
Get-Content "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\log\server.log" -Tail 50
```

Look for:
- ✓ "Deployed" messages
- ✗ "Failed" or "Error" messages

## Common Error Messages and Solutions

### Error: "npm: command not found"
**Solution:** Install Node.js or add it to PATH

### Error: "mvn: command not found"
**Solution:** Use `.\mvnw.cmd` instead of `mvn`

### Error: "Cannot find path"
**Solution:** Check all paths in the script match your system

### Error: "Access denied" when stopping WildFly
**Solution:** Run PowerShell as Administrator

### Error: "Port 8080 already in use"
**Solution:** WildFly is already running, stop it first

### Error: "Deployment failed"
**Solution:** Check WildFly logs for specific error

## Quick Diagnostic

Run this to check your environment:

```powershell
Write-Host "=== Environment Check ===" -ForegroundColor Cyan

# Check Node.js
try {
    $nodeVersion = & node --version
    Write-Host "✓ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found" -ForegroundColor Red
}

# Check npm
try {
    $npmVersion = & npm --version
    Write-Host "✓ npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm not found" -ForegroundColor Red
}

# Check Maven
try {
    $mvnVersion = & mvn --version | Select-Object -First 1
    Write-Host "✓ Maven: $mvnVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠ Maven not in PATH, will use mvnw" -ForegroundColor Yellow
}

# Check WildFly
$wildflyPath = "C:\Dcm4chee\wildfly-37.0.0.Final"
if (Test-Path $wildflyPath) {
    Write-Host "✓ WildFly found at: $wildflyPath" -ForegroundColor Green
} else {
    Write-Host "✗ WildFly not found at: $wildflyPath" -ForegroundColor Red
}

# Check UI2 directory
$ui2Path = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2"
if (Test-Path $ui2Path) {
    Write-Host "✓ UI2 directory found" -ForegroundColor Green
} else {
    Write-Host "✗ UI2 directory not found" -ForegroundColor Red
}

# Check if WildFly is running
$wildfly = Get-Process java -ErrorAction SilentlyContinue | Where-Object {
    (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)").CommandLine -match "wildfly"
}
if ($wildfly) {
    Write-Host "⚠ WildFly is currently running (PID: $($wildfly.Id))" -ForegroundColor Yellow
} else {
    Write-Host "✓ WildFly is not running" -ForegroundColor Green
}
```

## What to Do Next

1. **Run the diagnostic** above to check your environment
2. **Use the improved script** (`rebuild-ui-with-dashboard.ps1`)
3. **If that fails**, use the manual build steps
4. **Check the logs** if deployment fails
5. **Open the test dashboard** (`test-ae-dashboard.html`) to verify backend is working

## Still Not Working?

If you've tried everything and it's still not working:

1. **Check if the backend was built:**
   ```powershell
   cd C:\curalink\dcm4chee-arc-light
   .\mvnw.cmd clean install -DskipTests
   ```

2. **Verify the backend endpoint exists:**
   Open `check-dashboard-status.html` in your browser

3. **Check browser console:**
   - Open browser (F12)
   - Go to Console tab
   - Navigate to dashboard
   - Look for errors

4. **Try the standalone test:**
   Open `test-ae-dashboard.html` in your browser
   This bypasses the Angular app and tests the backend directly
