# Force clean redeploy by clearing WildFly caches

Write-Host "=== Stopping WildFly (if running) ===" -ForegroundColor Yellow
Write-Host "Please stop WildFly manually (Ctrl+C in its terminal)"
Write-Host "Press Enter when WildFly is stopped..."
Read-Host

Write-Host "`n=== Clearing WildFly caches ===" -ForegroundColor Cyan
$paths = @(
    "C:\wildfly\wildfly-37.0.0.Final\standalone\tmp",
    "C:\wildfly\wildfly-37.0.0.Final\standalone\data"
)

foreach ($path in $paths) {
    if (Test-Path $path) {
        Write-Host "Clearing: $path"
        Remove-Item -Path "$path\*" -Recurse -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "`n=== Removing old deployment markers ===" -ForegroundColor Cyan
$deployDir = "C:\wildfly\wildfly-37.0.0.Final\standalone\deployments"
Remove-Item "$deployDir\*.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$deployDir\*.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$deployDir\*.isdeploying" -Force -ErrorAction SilentlyContinue
Remove-Item "$deployDir\*.undeployed" -Force -ErrorAction SilentlyContinue

Write-Host "`n=== Recopying deployment files ===" -ForegroundColor Cyan
Copy-Item "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql.ear" "$deployDir\" -Force
Copy-Item "dcm4chee-arc-ui2\target\dcm4chee-arc-ui2-5.34.3.war" "$deployDir\" -Force

Write-Host "`n=== Done! ===" -ForegroundColor Green
Write-Host "Now start WildFly and access: http://localhost:8080/curalink/ui2/en/"
Write-Host "`nIMPORTANT: Open browser in Incognito/Private mode to avoid cache!"
