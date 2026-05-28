# Build script for Curalink (renamed from dcm4chee-arc)

Write-Host "=== Building Curalink UI ===" -ForegroundColor Cyan
pushd dcm4chee-arc-ui2
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "UI build failed!" -ForegroundColor Red
    popd
    exit 1
}
popd

Write-Host "`n=== Building UI2 WAR ===" -ForegroundColor Cyan
.\mvnw.cmd package -DskipTests -pl dcm4chee-arc-ui2
if ($LASTEXITCODE -ne 0) {
    Write-Host "WAR build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Building EAR with new context path ===" -ForegroundColor Cyan
.\mvnw.cmd package -DskipTests -pl dcm4chee-arc-ear -P psql
if ($LASTEXITCODE -ne 0) {
    Write-Host "EAR build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Build Complete ===" -ForegroundColor Green
Write-Host "UI2 WAR: dcm4chee-arc-ui2\target\dcm4chee-arc-ui2-5.34.3.war"
Write-Host "EAR: dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql.ear"
Write-Host "`nNew URL will be: http://localhost:8080/curalink/ui2/en/"
Write-Host "`nDon't forget to:"
Write-Host "1. Copy files to C:\wildfly\wildfly-37.0.0.Final\standalone\deployments\"
Write-Host "2. Update Keycloak redirect URIs to http://localhost:8080/curalink/*"
Write-Host "3. Restart WildFly"
