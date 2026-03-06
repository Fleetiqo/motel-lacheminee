# Guide de Déploiement GitHub Pages

## 🚀 Votre site est prêt pour GitHub Pages!

Tous les fichiers nécessaires sont configurés et prêts pour le déploiement.

## 📋 Étapes de Déploiement

### 1. Pousser vers GitHub
```bash
git add .
git commit -m "Site Motel la Cheminée prêt pour déploiement"
git push origin main
```

### 2. Activer GitHub Pages
1. Allez dans votre dépôt sur GitHub
2. Cliquez sur l'onglet **Settings**
3. Naviguez vers **Pages** dans la barre latérale
4. Sous **Source**, sélectionnez **GitHub Actions**
5. Le workflow déploiera automatiquement votre site

### 3. Accéder à Votre Site
Votre site sera disponible à:
```
https://[votre-nom-utilisateur].github.io/motel-lacheminee/
```

## ✅ Configuration Complétée

- ✅ Configuration Vite avec le bon chemin de base
- ✅ Workflow GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Toutes les images du site original intégrées
- ✅ Contenu extrait et adapté
- ✅ Design moderne basé sur saintsauveur-hotel
- ✅ Responsive pour tous les appareils

## 🔧 Détails de Configuration

### Config Vite (`vite.config.js`)
```javascript
base: '/motel-lacheminee/'
```
Assure que tous les chemins d'assets fonctionnent correctement sur GitHub Pages.

## 🎨 Fonctionnalités Incluses

- Diaporama héro avec 7 images du motel
- Section chambres avec 4 types de chambres
- Forfait Tourbillon avec détails
- Galerie d'installations (piscine, spa, jardins)
- Section localisation avec informations de contact
- Footer complet avec navigation
- Design responsive
- Animations fluides
- Logo original du motel

## 🛠️ Développement Local

```bash
# Serveur de développement
npm run dev

# Construction pour production
npm run build

# Prévisualisation de la version de production
npm run preview
```

## 📝 Contenu Intégré

Tout le contenu du site original a été extrait et intégré:
- Logo du motel (images/logo.png)
- 7 photos du diaporama d'accueil
- Photos des chambres
- Photos des installations (piscine, jardins, fleurs)
- Informations de contact
- Numéro CITQ: 584334
- Forfait Tourbillon

## 🐛 Dépannage

Si le site ne se charge pas correctement:
1. Vérifiez que GitHub Pages est activé dans les paramètres
2. Vérifiez que le chemin de base dans `vite.config.js` correspond au nom du dépôt
3. Assurez-vous que le workflow s'est terminé avec succès dans l'onglet Actions
4. Attendez quelques minutes pour la propagation DNS

---

**Prêt à déployer!** Poussez simplement vers GitHub et votre site sera en ligne automatiquement. 🎉
