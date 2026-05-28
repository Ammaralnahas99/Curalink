# Step 1: Clean all WildFly caches and old deployments

Write-Host "`n=== STEP 1: Cleaning WildFly Caches ===" -ForegroundColor Cyan

$wildflyBase = "C:\wildfly\wildfly-37.0.0.Final\standalone"

Write-Host "`nRemoving old deployment files..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\deployments\curalink.ear" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear.isdeploying" -Force -ErrorAction SilentlyContinue
Write-Host "✓ Old deployment files removed" -ForegroundColor Green

Write-Host "`nRemoving VFS temp cache (contains old JavaScript chunks)..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\tmp\vfs\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✓ VFS cache cleared" -ForegroundColor Green

Write-Host "`nRemoving content repository..." -ForegroundColor Yellow
Remove-Item "$wildflyBase\data\content\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✓ Content repository cleared" -ForegroundColor Green

Write-Host "`nVerifying cleanup..." -ForegroundColor Yellow
$earExists = Test-Path "$wildflyBase\deployments\curalink.ear"
$vfsEmpty = (Get-ChildItem "$wildflyBase\tmp\vfs" -ErrorAction SilentlyContinue).Count -eq 0

if (-not $earExists -and $vfsEmpty) {
    Write-Host "✓ Cleanup successful - all old files removed" -ForegroundColor Green
} else {
    Write-Host "⚠ Some files may still exist - check manually" -ForegroundColor Yellow
}

Write-Host "`n=== STEP 1 COMPLETE ===" -ForegroundColor Green
Write-Host "Next: Run step2-rebuild-ear.ps1" -ForegroundColor Cyan
