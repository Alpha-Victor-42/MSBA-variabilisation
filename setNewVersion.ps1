git add .

$commitDescription = Read-Host "Entrez la description du commit (Ex: Descriptif de nouvelle feature / corrections effectués / ...)"

git commit -m "$commitDescription"
git push

$newVersion = Read-Host "Entrez la nouvelle version du code (En réspectant l'incrémentation Ex: v0.0.1)"

git tag -a $newVersion -m "Version $newVersion"
git push origin --tags