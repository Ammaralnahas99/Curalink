# Test API endpoints
Write-Host "=== Testing Hospital Dashboard API Endpoints ===" -ForegroundColor Cyan

$baseUrl = "http://localhost:8080/dcm4chee-arc/aets/dcm4chee-arc/rs"

Write-Host "`nTesting hospital statistics endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$baseUrl/hospitals/statistics" -Method GET -ContentType "application/json"
    Write-Host "SUCCESS: Hospital statistics endpoint accessible" -ForegroundColor Green
    Write-Host "Response: $($response | ConvertTo-Json -Depth 2)" -ForegroundColor White
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
}

Write-Host "`nTesting hospital list endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$baseUrl/hospitals/list" -Method GET -ContentType "application/json"
    Write-Host "SUCCESS: Hospital list endpoint accessible" -ForegroundColor Green
    Write-Host "Response: $($response | ConvertTo-Json -Depth 2)" -ForegroundColor White
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
}

Write-Host "`nTesting main UI endpoint (should redirect to Keycloak)..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8080/dcm4chee-arc/ui2/en/" -Method GET -MaximumRedirection 0
    Write-Host "Response Status: $($response.StatusCode)" -ForegroundColor White
} catch {
    if ($_.Exception.Response.StatusCode -eq 302) {
        Write-Host "SUCCESS: UI redirects to Keycloak (302 redirect)" -ForegroundColor Green
        Write-Host "Location: $($_.Exception.Response.Headers.Location)" -ForegroundColor White
    } else {
        Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
    }
}

Write-Host "`n=== Test Complete ===" -ForegroundColor Cyan