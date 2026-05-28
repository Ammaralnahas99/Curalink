# Clean redeploy script - removes old deployments and caches

Write-Host "=== Clean Redeploy Script ===" -ForegroundColor Cyan

# Stop WildFly if running
Write-Host "`n1. Checking if WildFly is running..." -ForegroundColor Yellow
$wildfly = Get-Process -Name "java" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*jboss*" -or $_.Path -like "*wildfly*" }
if ($wildfly) {
    Write-Host "   Stopping WildFly (PID: $($wildfly.Id))..." -ForegroundColor Yellow
    Stop-Process -Id $wildfly.Id -Force
    Start-Sleep -Seconds 3
    Write-Host "   ✓ WildFly stopped" -ForegroundColor Green
} else {
    Write-Host "   WildFly not running" -ForegroundColor Gray
}

# Clean deployment directories
Write-Host "`n2. Cleaning deployment directories..." -ForegroundColor Yellow
$wildflyBase = "C:\wildfly\wildfly-37.0.0.Final\standalone"

Remove-Item "$wildflyBase\deployments\curalink.ear" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\deployments\curalink.ear.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\tmp\vfs\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$wildflyBase\data\content\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "   ✓ Deployment cache cleared" -ForegroundColor Green

# Copy new EAR
Write-Host "`n3. Deploying new EAR..." -ForegroundColor Yellow
$earSource = "dcm4chee-arc-ear\target\curalink-5.34.3-psql.ear"
if (Test-Path $earSource) {
    Copy-Item $earSource "$wildflyBase\deployments\curalink.ear"
    Write-Host "   ✓ EAR copied to deployments" -ForegroundColor Green
} else {
    Write-Host "   ✗ EAR not found at $earSource" -ForegroundColor Red
    Write-Host "   Run: .\mvnw.cmd clean install -pl dcm4chee-arc-ear -am" -ForegroundColor Yellow
    exit 1
}

Write-Host "`n4. Starting WildFly..." -ForegroundColor Yellow
Write-Host "   Run: C:\wildfly\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor Cyan
Write-Host "`n=== Ready to start WildFly ===" -ForegroundColor Green
Write-Host "After WildFly starts, test at: http://localhost:8080/curalink/ui2/en/" -ForegroundColor Cyan
