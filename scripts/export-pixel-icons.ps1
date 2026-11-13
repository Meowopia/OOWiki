param([string]$AssetRoot = (Join-Path $PSScriptRoot '../docs/assets/branding/pixelcrest-v1'))
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$manifest = @()
foreach ($folder in Get-ChildItem -LiteralPath $AssetRoot -Directory) {
    $source = Join-Path $folder.FullName 'source.png'
    $original = [System.Drawing.Bitmap]::new($source)
    try {
        foreach ($size in @(32, 64, 128, 256, 1024)) {
            $bitmap = [System.Drawing.Bitmap]::new($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.Clear([System.Drawing.Color]::Transparent)
                $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
                $graphics.DrawImage($original, [System.Drawing.Rectangle]::new(0, 0, $size, $size), 0, 0, $original.Width, $original.Height, [System.Drawing.GraphicsUnit]::Pixel)
                $target = Join-Path $folder.FullName "logo-$size.png"
                $bitmap.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
                $manifest += [ordered]@{plugin=$folder.Name; file="$($folder.Name)/logo-$size.png"; width=$size; height=$size; bytes=(Get-Item -LiteralPath $target).Length; sha256=(Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash.ToLowerInvariant()}
            } finally { $graphics.Dispose(); $bitmap.Dispose() }
        }
    } finally { $original.Dispose() }
}
$manifest | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $AssetRoot 'assets.json') -Encoding utf8
Write-Output "Exported $($manifest.Count) transparent PNG variants."
