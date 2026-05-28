$f = 'C:\wildfly\wildfly-37.0.0.Final\standalone\configuration\standalone.xml'

Write-Host "Reading standalone.xml..."
$x = [System.IO.File]::ReadAllText($f)

Write-Host "Before: File size = $($x.Length)"

# Remove <deployments> blocks
$before = $x.Length
$x = [regex]::Replace($x, '<deployments>.*?</deployments>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "Removed <deployments> blocks: $($before - $x.Length) bytes"

# Remove individual <deployment> entries
$before = $x.Length
$x = [regex]::Replace($x, '<deployment[^>]*>.*?</deployment>', '', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "Removed <deployment> entries: $($before - $x.Length) bytes"

Write-Host "After: File size = $($x.Length)"

[System.IO.File]::WriteAllText($f, $x)
Write-Host "File written successfully"

# Verify
$v = [System.IO.File]::ReadAllText($f)
$deploymentCount = ([regex]::Matches($v, '<deployment')).Count
Write-Host "Remaining <deployment entries: $deploymentCount (should be 0)"
