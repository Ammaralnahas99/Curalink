# Check deployment status by testing the application endpoints

Write-Host ""
Write-Host "=== CHECKING DEPLOYMENT STATUS ===" -ForegroundColor Cyan

Write-Host ""
Write-Host "1. Testing WildFly server..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080" -TimeoutSec 5 -UseBasicParsing -ErrorAction Stop
    Write-Host "   OK: WildFly is running" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: WildFly is not responding" -ForegroundColor Red
    Write-Host "   Start WildFly first: C:\Dcm4chee\wildfly-37.0.0.Final\bin\standalone.bat" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "2. Testing DCM4CHEE application..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/dcm4chee-arc/ui2/en/" -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "   OK: Application is deployed and responding" -ForegroundColor Green
        
        # Check if it's redirecting to Keycloak
        if ($response.Content -match "keycloak") {
            Write-Host "   OK: Keycloak integration is active" -ForegroundColor Green
        } else {
            Write-Host "   INFO: Application loaded (no Keycloak redirect detected)" -ForegroundColor Blue
        }
    }
} catch {
    if ($_.Exception.Response) {
        $statusCode = $_.Exception.Response.StatusCode.value__
        if ($statusCode -eq 302 -or $statusCode -eq 307) {
            $location = $_.Exception.Response.Headers.Location
            if ($location -match "keycloak") {
                Write-Host "   OK: Application deployed - redirecting to Keycloak" -ForegroundColor Green
                Write-Host "   Redirect URL: $location" -ForegroundColor Blue
            } else {
                Write-Host "   INFO: Application deployed - redirecting to: $location" -ForegroundColor Blue
            }
        } else {
            Write-Host "   ERROR: Application not responding (Status: $statusCode)" -ForegroundColor Red
            Write-Host "   Check WildFly console for deployment errors" -ForegroundColor Yellow
        }
    } else {
        Write-Host "   ERROR: Cannot connect to application" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "3. Testing API endpoints..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/dcm4chee-arc/aets" -TimeoutSec 5 -UseBasicParsing -ErrorAction Stop
    Write-Host "   OK: API endpoints are accessible" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: API endpoints not accessible" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== STATUS CHECK COMPLETE ===" -ForegroundColor Cyan