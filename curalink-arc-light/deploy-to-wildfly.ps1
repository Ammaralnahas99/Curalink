# Deploy dcm4chee-arc to WildFly
# This script copies the built EAR file to WildFly deployment directory

Write-Host "=== DCM4CHEE-ARC Deployment Script ===" -ForegroundColor Cyan
Write-Host ""

# Configuration
$WILDFLY_HOME = "C:\wildfly\wildfly-37.0.0.Final"
$DEPLOYMENT_DIR = "$WILDFLY_HOME\standalone\deployments"
$EAR_FILE = "dcm4chee-arc-ear\target\dcm4chee-arc-ear-5.34.3-psql.ear"

# Check if WildFly exists
if (-not (Test-Path $WILDFLY_HOME)) {
    Write-Host "ERROR: WildFly not found at $WILDFLY_HOME" -ForegroundColor Red
    exit 1
}

# Check if EAR file exists
if (-not (Test-Path $EAR_FILE)) {
    Write-Host "ERROR: EAR file not found at $EAR_FILE" -ForegroundColor Red
    Write-Host "Please run the build first: mvn clean install -Ppsql -Punsecure" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Removing old deployment..." -ForegroundColor Yellow
Remove-Item "$DEPLOYMENT_DIR\dcm4chee-arc-ear*.ear" -Force -ErrorAction SilentlyContinue
Remove-Item "$DEPLOYMENT_DIR\dcm4chee-arc-ear*.deployed" -Force -ErrorAction SilentlyContinue
Remove-Item "$DEPLOYMENT_DIR\dcm4chee-arc-ear*.failed" -Force -ErrorAction SilentlyContinue
Remove-Item "$DEPLOYMENT_DIR\dcm4chee-arc-ear*.isdeploying" -Force -ErrorAction SilentlyContinue
Write-Host "Old deployment removed" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Copying new EAR file..." -ForegroundColor Yellow
Copy-Item $EAR_FILE $DEPLOYMENT_DIR -Force
Write-Host "EAR file copied to deployment directory" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Waiting for deployment..." -ForegroundColor Yellow
Write-Host "Monitoring deployment status (this may take 30-60 seconds)..." -ForegroundColor Cyan

$earFileName = Split-Path $EAR_FILE -Leaf
$deployedMarker = "$DEPLOYMENT_DIR\$earFileName.deployed"
$failedMarker = "$DEPLOYMENT_DIR\$earFileName.failed"

$timeout = 120
$elapsed = 0
$deployed = $false

while ($elapsed -lt $timeout) {
    Start-Sleep -Seconds 2
    $elapsed += 2
    
    if (Test-Path $deployedMarker) {
        Write-Host ""
        Write-Host "SUCCESS: Application deployed successfully!" -ForegroundColor Green
        $deployed = $true
        break
    }
    
    if (Test-Path $failedMarker) {
        Write-Host ""
        Write-Host "ERROR: Deployment failed!" -ForegroundColor Red
        Write-Host "Check WildFly logs at: $WILDFLY_HOME\standalone\log\server.log" -ForegroundColor Yellow
        exit 1
    }
    
    Write-Host "." -NoNewline
}

if (-not $deployed) {
    Write-Host ""
    Write-Host "WARNING: Deployment timeout. Check WildFly logs." -ForegroundColor Yellow
    Write-Host "Log location: $WILDFLY_HOME\standalone\log\server.log" -ForegroundColor Cyan
    exit 1
}

Write-Host ""
Write-Host "=== Deployment Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Access the application at:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/" -ForegroundColor White
Write-Host ""
Write-Host "Hospital Dashboard:" -ForegroundColor Cyan
Write-Host "  http://localhost:8080/dcm4chee-arc/ui2/en/#/hospital-dashboard" -ForegroundColor White
Write-Host ""
