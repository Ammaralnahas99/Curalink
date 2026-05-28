# Fix deployment conflict - Remove standalone WAR, keep only EAR

Write-Host ""
Write-Host "=== FIXING DEPLOYMENT CONFLICT ===" -ForegroundColor Cyan

$deployDir = "C:\Dcm4chee\wildfly-37.0.0.Final\standalone\deployments"

Write-Host ""
Write-Host "Step 1: Removing standalone WAR files..." -ForegroundColor Yellow
Remove-Item "$deployDir\dcm4chee-arc-ui2-*.war" -Force -ErrorAction SilentlyContinue
Remove-Item "$deployDir\dcm4chee-arc-ui2-*.war.*" -Force -ErrorAction SilentlyContinue
Write-Host "   OK: Standalone WAR removed" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Marking EAR for redeployment..." -ForegroundColor Yellow
Remove-Item "$deployDir\dcm4chee-arc-ear-*.ear.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$deployDir\dcm4chee-arc-ear-*.ear.deployed" -Force -ErrorAction SilentlyContinue

# Create .dodeploy marker
$earFiles = Get-ChildItem "$deployDir\dcm4chee-arc-ear-*.ear" -ErrorAction SilentlyContinue
if ($earFiles) {
    foreach ($ear in $earFiles) {
        $deployMarker = "$($ear.FullName).dodeploy"
        New-Item -ItemType File -Path $deployMarker -Force | Out-Null
        Write-Host "   OK: Created deployment marker for $($ear.Name)" -ForegroundColor Green
    }
} else {
    Write-Host "   WARNING: No EAR file found" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 3: Waiting for deployment (30 seconds)..." -ForegroundColor Yellow
Start-Sleep -Seconds 30

Write-Host ""
Write-Host "Step 4: Checking deployment status..." -ForegroundColor Yellow
Get-ChildItem "$deployDir" | Where-Object { $_.Name -match "\.(ear|war)" } | ForEach-Object {
    Write-Host "   $($_.Name)" -ForegroundColor White
}

Write-Host ""
Write-Host "=== CONFLICT RESOLUTION COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Check WildFly console for successful deployment" -ForegroundColor White
Write-Host "  2. Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor White
Write-Host "  3. Use incognito window" -ForegroundColor White
Write-Host "  4. Access: http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "The EAR now owns the UI - no more conflicts!" -ForegroundColor Yellow
