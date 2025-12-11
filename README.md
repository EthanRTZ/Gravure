# Gravure PAPS - Site Web

Site web pour une entreprise de gravure laser spécialisée dans les médailles de course.

## Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **Vue Router** - Gestion de navigation
- **Vite** - Outil de build rapide
- **CSS3** - Styles personnalisés

## Structure du projet

```
Gravure_paps/
├── src/
│   ├── components/         # Composants réutilisables
│   │   ├── Navigation.vue  # Barre de navigation
│   │   └── Footer.vue      # Pied de page
│   ├── views/             # Pages du site
│   │   ├── Home.vue       # Page d'accueil
│   │   ├── Products.vue   # Page produits
│   │   └── Contact.vue    # Page contact
│   ├── router/            # Configuration des routes
│   │   └── index.js
│   ├── App.vue           # Composant racine
│   ├── main.js           # Point d'entrée
│   └── style.css         # Styles globaux
├── index.html            # Template HTML
├── vite.config.js        # Configuration Vite
└── package.json          # Dépendances

```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Le site sera accessible sur `http://localhost:3000`

## Build pour la production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Fonctionnalités

### Page d'accueil
- **Hero fullscreen** avec image de fond et effet parallaxe
- **Indicateur de défilement animé** pour guider l'utilisateur
- Présentation de l'entreprise avec animations
- Mise en avant des services (Rapidité, Précision, Personnalisation)
- Exemples de réalisations en grille responsive
- Appels à l'action multiples

### Page Produits
- Catalogue complet des médailles
- Filtrage par catégorie
- Détails des produits
- Système de tarification

### Page Contact
- Formulaire de contact
- Informations de contact
- Liens vers les réseaux sociaux
- Carte de localisation (placeholder)

## Personnalisation

Pour personnaliser le site, modifiez les variables CSS dans `src/style.css` :

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #e74c3c;
  --accent-color: #f39c12;
}
```

## Prochaines étapes

- [x] Hero fullscreen avec image de fond
- [x] Animations et effets de défilement
- [ ] Intégrer de vraies images de médailles dans `src/assets/`
- [ ] Intégrer une vraie carte Google Maps
- [ ] Connecter le formulaire de contact à un backend
- [ ] Ajouter une galerie d'images réelles avec lightbox
- [ ] Implémenter un système de devis en ligne
- [ ] Optimiser le SEO (meta tags, sitemap)
- [ ] Configurer le déploiement automatique
- [ ] Ajouter une galerie d'images réelles
- [ ] Implémenter un système de devis en ligne
- [ ] Ajouter des animations
- [ ] Optimiser le SEO

## Licence

© 2025 Gravure PAPS. Tous droits réservés.

