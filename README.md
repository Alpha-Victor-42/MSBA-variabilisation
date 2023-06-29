# MSBA-variabilisation
Module de variabilisation pour MSBA

## Récupération du code source
```
git clone https://github.com/Alpha-Victor-42/MSBA-variabilisation.git
```

## Envoyer ces modifications sur la branche main
```
git add .
git commit -m "[description du commit]"
git push
```

## Créer un tag de nouvelle version - En réspéctant l'incrémentation

```
git tag -a v0.0.1 -m "Nom de la version"
git push origin --tags
```

## Créer une nouvelle release

- Aller sur la page des tags du repository : **https://github.com/Alpha-Victor-42/MSBA-variabilisation/tags**
- Cliquer sur les 3 points du tag que l'on à crée dans l'étape précédente et cliquer sur **"Create new release"**
- Une nouvelle page s'ouvre, **remplir les information** et cliquer sur **"create release"**

## Mettre à jour le CDN sur webflow

Sur webflow dans le projet **MSBA-2023** aller dans les **Settings > Custom code** et dans **le footer**, modifier la version du CDN :
```html 
<script src="https://cdn.jsdelivr.net/gh/Alpha-Victor-42/MSBA@[**nouvelle version**]/Module%20de%20variabilisation/app.js"></script>
```
