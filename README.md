# Guide des Images Optimisées

Pour garantir des performances optimales, voici les dimensions recommandées pour chaque type d'image :

## Logo
- Format principal : WebP avec fallback PNG
- Dimensions :
  - Desktop : 150x40px
  - Mobile : 120x32px
- Poids maximum : 10KB
- Résolution : 2x pour écrans Retina
- Emplacement : `/public/images/logo.webp` et `/public/images/logo.png`
- Attributs importants :
  - `loading="eager"` (chargement prioritaire)
  - `fetchpriority="high"`
  - `decoding="async"`
  - Dimensions explicites pour éviter le CLS

## Images de la Page d'Accueil
- Hero Banner: 1920x1080px (format: WebP, JPEG)
  - Desktop: 1920x1080px
  - Tablet: 1024x576px
  - Mobile: 640x360px

## Images des Réalisations
- Avant/Après: 800x600px (format: WebP, JPEG)
  - Desktop: 800x600px
  - Tablet: 640x480px
  - Mobile: 400x300px

## Images de Services
- Vignettes: 600x400px (format: WebP, JPEG)

## Images d'En-tête de Section
- Bannières: 1600x400px (format: WebP, JPEG)

## Optimisation
- Utiliser WebP avec fallback JPEG/PNG
- Compression : 80-85% qualité
- Poids maximum :
  - Logo : 10KB
  - Hero : 200KB
  - Avant/Après : 100KB
  - Vignettes : 50KB
  - Bannières : 150KB

## Structure des Dossiers d'Images
```
public/
  images/
    logo.webp (150x40 - 2x pour Retina)
    logo.png (fallback)
    hero/
      hero-desktop.webp (1920x1080)
      hero-tablet.webp (1024x576)
      hero-mobile.webp (640x360)
    realisations/
      roubaix/
        vitrine-before.webp (800x600)
        vitrine-after.webp (800x600)
      tourcoing/
        bureaux-before.webp (800x600)
        bureaux-after.webp (800x600)
    services/
      particuliers.webp (600x400)
      professionnels.webp (600x400)
      coproprietes.webp (600x400)
```