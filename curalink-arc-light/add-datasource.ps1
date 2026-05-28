# Backup standalone.xml
Copy-Item "C:\wildfly\wildfly-37.0.0.Final\standalone\configuration\standalone.xml" "C:\wildfly\wildfly-37.0.0.Final\standalone\configuration\standalone.xml.backup"

# Read standalone.xml
$xml = [xml](Get-Content "C:\wildfly\wildfly-37.0.0.Final\standalone\configuration\standalone.xml")

# Find the datasources element
$datasources = $xml.server.profile.subsystem | Where-Object { $_.'xmlns' -like '*datasources*' }

# Create PacsDS datasource
$pacsDS = $xml.CreateElement("datasource", $datasources.xmlns)
$pacsDS.SetAttribute("jndi-name", "java:/PacsDS")
$pacsDS.SetAttribute("pool-name", "PacsDS")

$connectionUrl = $xml.CreateElement("connection-url", $datasources.xmlns)
$connectionUrl.InnerText = "jdbc:postgresql://localhost:5432/dcm4chee"
$pacsDS.AppendChild($connectionUrl) | Out-Null

$driver = $xml.CreateElement("driver", $datasources.xmlns)
$driver.InnerText = "postgresql"
$pacsDS.AppendChild($driver) | Out-Null

$security = $xml.CreateElement("security", $datasources.xmlns)
$security.SetAttribute("user-name", "dcm4chee")
$security.SetAttribute("password", "dcm4chee")
$pacsDS.AppendChild($security) | Out-Null

# Add PacsDS to datasources
$datasources.datasources.AppendChild($pacsDS) | Out-Null

# Add PostgreSQL driver if not exists
$drivers = $datasources.datasources.drivers
if (-not $drivers) {
    $drivers = $xml.CreateElement("drivers", $datasources.xmlns)
    $datasources.datasources.AppendChild($drivers) | Out-Null
}

$postgresDriver = $xml.CreateElement("driver", $datasources.xmlns)
$postgresDriver.SetAttribute("name", "postgresql")
$postgresDriver.SetAttribute("module", "org.postgresql")
$drivers.AppendChild($postgresDriver) | Out-Null

# Save
$xml.Save("C:\wildfly\wildfly-37.0.0.Final\standalone\configuration\standalone.xml")

Write-Host "PacsDS datasource added to standalone.xml successfully!"
