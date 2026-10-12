$ErrorActionPreference = 'Stop'
$project = Split-Path -Parent $PSScriptRoot
$items = Get-Content -LiteralPath (Join-Path $project 'assets/source/catalogue-downloads.json') -Raw | ConvertFrom-Json
foreach ($item in $items) {
  $target = Join-Path $project ('assets/source/' + $item.name + '.jpg')
  if (!(Test-Path -LiteralPath $target)) {
    Invoke-WebRequest -Uri ('https://drive.google.com/uc?export=download&id=' + $item.id) -OutFile $target
    Write-Output ('Downloaded ' + $item.name)
  }
}
