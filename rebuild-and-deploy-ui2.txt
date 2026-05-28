# Save as: C:\curalink\rebuild-and-deploy-ui2.ps1
# Usage:   powershell -ExecutionPolicy Bypass -File C:\curalink\rebuild-and-deploy-ui2.ps1

$ErrorActionPreference = "Stop"

# --- Paths ---
$ui2Dir        = "C:\curalink\curalink-arc-light\curalink-arc-ui2"
$wildflyHome   = "C:\wildfly\wildfly-37.0.0.Final"
$deployments   = "$wildflyHome\standalone\deployments"
$ear           = "$deployments\curalink-arc-ear-5.34.3-psql.ear"
$newWar        = "$ui2Dir\target\curalink-arc-ui2-5.34.3.war"
$standaloneBat = "$wildflyHome\bin\standalone.bat"
$vfsTmp        = "$wildflyHome\standalone\tmp\vfs\deployment"

# --- Keycloak config ---
$correctJson = @'
{
  "realm": "curalink",
  "auth-server-url": "http://localhost:8843",
  "ssl-required": "none",
  "resource": "curalink-arc-ui",
  "public-client": true,
  "confidential-port": 0,
  "enable-pkce": true
}
'@

# --- Helper ---
function Stop-WildFly {
    Write-Host "=== Stopping WildFly ===" -ForegroundColor Cyan
    Get-Process java -ErrorAction SilentlyContinue | ForEach-Object {
        $cmd = (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)").CommandLine
        if ($cmd -match "jboss|wildfly") {
            Write-Host "  Stopping PID $($_.Id)"
            Stop-Process -Id $_.Id -Force
        }
    }
    Start-Sleep -Seconds 8
}

# ============================================================
# STEP 1: Stop WildFly
# ============================================================
Stop-WildFly

# ============================================================
# STEP 2: Apply Source Patches BEFORE building
# ============================================================
Write-Host "=== Applying source patches ===" -ForegroundColor Cyan

# --- Patch 1: j4care.service.ts ---
$j4 = "$ui2Dir\src\app\helpers\j4care.service.ts"
if (Test-Path $j4) {
    Copy-Item $j4 "$j4.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
    $content = Get-Content $j4 -Raw
    $content = $content -replace "\.replace\('\/curalink\\/curalink','\/dcm4chee-arc'\)", ".replace('/curalink\/curalink','/curalink')"
    [System.IO.File]::WriteAllText($j4, $content, [System.Text.Encoding]::UTF8)
    Write-Host "  Patched j4care.service.ts" -ForegroundColor Green
    Write-Host "  --- Lines 1651-1655 ---"
    Get-Content $j4 | Select-Object -Skip 1650 -First 5
} else {
    Write-Host "  [WARN] j4care.service.ts not found at $j4" -ForegroundColor Yellow
}

# --- Patch 2: dcm4chee-arc.json files ---
$jsonFiles = @(
    "$ui2Dir\src\assets\dcm4chee-arc.json",
    "$ui2Dir\src\main\webapp\en\assets\dcm4chee-arc.json"
)
foreach ($jf in $jsonFiles) {
    if (Test-Path $jf) {
        Copy-Item $jf "$jf.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
        $c = Get-Content $jf -Raw
        $c = $c -replace "http://localhost:8080/dcm4chee-arc", "http://localhost:8080/curalink"
        [System.IO.File]::WriteAllText($jf, $c, [System.Text.Encoding]::UTF8)
        Write-Host "  Patched $jf" -ForegroundColor Green
    } else {
        Write-Host "  [WARN] Not found: $jf" -ForegroundColor Yellow
    }
}

# --- Patch 3: Replace dcm4che proprietary in all schema JSONs ---
Write-Host "  Replacing 'dcm4che proprietary' in schema files..." -ForegroundColor DarkCyan
Get-ChildItem -Path "C:\curalink" -Recurse -Include "*.json" |
ForEach-Object {
    $c = Get-Content $_.FullName -Raw -Encoding UTF8
    if ($c -match "dcm4che proprietary") {
        $c = $c -replace "dcm4che proprietary", "Curalink proprietary"
        Set-Content -Path $_.FullName -Value $c -Encoding UTF8
        Write-Host "    Updated: $($_.FullName)" -ForegroundColor Green
    }
}

# ============================================================
# STEP 3: Clean rebuild of UI2
# ============================================================
Write-Host "=== Clean rebuild of UI2 ===" -ForegroundColor Cyan
Set-Location $ui2Dir

Remove-Item ".angular"           -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "target"             -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "--- npm run build ---" -ForegroundColor DarkCyan
& npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "npm build failed" -ForegroundColor Red; exit 1 }

Write-Host "--- mvn package ---" -ForegroundColor DarkCyan
& mvn package -DskipTests
if ($LASTEXITCODE -ne 0) { Write-Host "mvn package failed" -ForegroundColor Red; exit 1 }

if (-not (Test-Path $newWar)) {
    Write-Host "WAR not produced at $newWar" -ForegroundColor Red
    exit 1
}
Write-Host "WAR built: $newWar ($('{0:N0}' -f (Get-Item $newWar).Length) bytes)" -ForegroundColor Green

# ============================================================
# STEP 4: Patch keycloak.json inside the WAR
# ============================================================
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

Write-Host "=== Patching keycloak.json files inside WAR ===" -ForegroundColor Cyan
$zip = [System.IO.Compression.ZipFile]::Open($newWar, [System.IO.Compression.ZipArchiveMode]::Update)
try {
    $targets = @($zip.Entries | Where-Object { $_.Name -eq "keycloak.json" } | ForEach-Object { $_.FullName })
    foreach ($name in $targets) {
        $entry = $zip.GetEntry($name)
        if ($entry) { $entry.Delete() }
        $newEntry = $zip.CreateEntry($name)
        $sw = New-Object System.IO.StreamWriter($newEntry.Open())
        $sw.Write($correctJson)
        $sw.Close()
        Write-Host "  Patched $name" -ForegroundColor Green
    }
} finally {
    $zip.Dispose()
}

# ============================================================
# STEP 5: Inject WAR into EAR
# ============================================================
Write-Host "=== Injecting WAR into EAR ===" -ForegroundColor Cyan
if (-not (Test-Path $ear)) {
    Write-Host "EAR not found at $ear" -ForegroundColor Red
    exit 1
}

$backupName = "$ear.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item $ear $backupName
Write-Host "  Backup: $backupName"

$earZip = [System.IO.Compression.ZipFile]::Open($ear, [System.IO.Compression.ZipArchiveMode]::Update)
try {
    $old = $earZip.GetEntry("curalink-arc-ui2-5.34.3.war")
    if ($old) {
        $old.Delete()
        Write-Host "  Removed old WAR from EAR"
    }
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $earZip, $newWar, "curalink-arc-ui2-5.34.3.war",
        [System.IO.Compression.CompressionLevel]::Optimal
    ) | Out-Null
    Write-Host "  Injected fresh WAR" -ForegroundColor Green
} finally {
    $earZip.Dispose()
}

# ============================================================
# STEP 6: Force redeploy
# ============================================================
Write-Host "=== Forcing redeploy ===" -ForegroundColor Cyan
"" | Out-File "$ear.dodeploy" -Encoding ASCII
Remove-Item "$vfsTmp\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "  .dodeploy marker created, VFS cache cleared"

# ============================================================
# STEP 7: Start WildFly
# ============================================================
Write-Host "=== Starting WildFly ===" -ForegroundColor Cyan
Start-Process $standaloneBat -WindowStyle Minimized
Write-Host "Waiting 100s for startup..." -ForegroundColor Yellow
Start-Sleep -Seconds 100

# ============================================================
# STEP 8: Verify
# ============================================================
Write-Host ""
Write-Host "=== Verification ===" -ForegroundColor Cyan

try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/ui2/en/assets/keycloak.json" -UseBasicParsing -TimeoutSec 30
    if ($r.Content -match "auth-server-url") {
        Write-Host "[OK] /assets/keycloak.json returns OIDC config" -ForegroundColor Green
    } else {
        Write-Host "[WARN] /assets/keycloak.json returned unexpected content" -ForegroundColor Yellow
        Write-Host $r.Content
    }
} catch {
    Write-Host "[ERROR] /assets/keycloak.json: $($_.Exception.Message)" -ForegroundColor Red
}

try {
    $r = Invoke-WebRequest "http://localhost:8080/curalink/ui2/rs/keycloak.json" -UseBasicParsing -TimeoutSec 10
    if ($r.Content -match "auth-server-url") {
        Write-Host "[OK] /rs/keycloak.json returns OIDC config" -ForegroundColor Green
    }
} catch {
    Write-Host "[WARN] /rs/keycloak.json: $($_.Exception.Message)" -ForegroundColor Yellow
}

$deployedMarker = "$ear.deployed"
$failedMarker   = "$ear.failed"
if (Test-Path $failedMarker) {
    Write-Host "[ERROR] Deployment FAILED - see $failedMarker" -ForegroundColor Red
} elseif (Test-Path $deployedMarker) {
    Write-Host "[OK] Deployment marker present" -ForegroundColor Green
} else {
    Write-Host "[WARN] No deployment marker yet - may still be starting" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  DONE" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Test in a FRESH incognito window:" -ForegroundColor Yellow
Write-Host "  http://localhost:8080/curalink/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "Make sure Keycloak is running on port 8843" -ForegroundColor Yellow