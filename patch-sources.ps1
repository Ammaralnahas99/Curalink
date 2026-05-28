# --- Patch 1: j4care.service.ts line 1653 ---
$j4 = "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\src\app\helpers\j4care.service.ts"
Copy-Item $j4 "$j4.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
$content = Get-Content $j4 -Raw
$content = $content -replace "\.replace\('\/curalink\\/curalink','\/dcm4chee-arc'\)", ".replace('/curalink\/curalink','/curalink')"
[System.IO.File]::WriteAllText($j4, $content, [System.Text.Encoding]::UTF8)
Write-Host "=== Patched line 1653 ===" -ForegroundColor Cyan
Get-Content $j4 | Select-Object -Skip 1650 -First 5

# --- Patch 2: static dcm4chee-arc.json files ---
$jsonFiles = @(
    "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\src\assets\dcm4chee-arc.json",
    "C:\curalink\dcm4chee-arc-light\curalink-arc-ui2\src\main\webapp\en\assets\dcm4chee-arc.json"
)
foreach ($jf in $jsonFiles) {
    if (Test-Path $jf) {
        Copy-Item $jf "$jf.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
        $c = Get-Content $jf -Raw
        $c = $c -replace "http://localhost:8080/dcm4chee-arc", "http://localhost:8080/curalink"
        [System.IO.File]::WriteAllText($jf, $c, [System.Text.Encoding]::UTF8)
        Write-Host "Patched $jf" -ForegroundColor Green
        Write-Host (Get-Content $jf -Raw)
    }
}
