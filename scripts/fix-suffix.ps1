$content = Get-Content -Path "d:\git\god_strategy\my-server\yueduxiehua\data\writing-data.js" -Raw

$content = $content -replace "title: '([^']+)\.png'", "title: '$1'"
$content = $content -replace "emoji: '([^']+)\.png'", "emoji: '$1'"
$content = $content -replace "description: '([^']+)\.png'", "description: '$1'"
$content = $content -replace "hint: '([^']+)\.png'", "hint: '$1'"
$content = $content -replace "difficulty: '([^']+)\.png'", "difficulty: '$1'"
$content = $content -replace "difficultyText: '([^']+)\.png'", "difficultyText: '$1'"
$content = $content -replace "category: '([^']+)\.png'", "category: '$1'"
$content = $content -replace "subCategory: '([^']+)\.png'", "subCategory: '$1'"
$content = $content -replace "question: '([^']+)\.png'", "question: '$1'"
$content = $content -replace "sentence: '([^']+)\.png'", "sentence: '$1'"
$content = $content -replace "name: '([^']+)\.png'", "name: '$1'"
$content = $content -replace "icon: '([^']+)\.png'", "icon: '$1'"
$content = $content -replace "desc: '([^']+)\.png'", "desc: '$1'"

$content = $content -replace "'([^']+)\.png'", {
    param($match)
    $value = $match.Groups[1].Value
    if ($value -match '/images/') {
        return "'$value.png'"
    }
    return "'$value'"
}

Set-Content -Path "d:\git\god_strategy\my-server\yueduxiehua\data\writing-data.js" -Value $content -NoNewline
Write-Host "Fixed all .png suffixes successfully!"
