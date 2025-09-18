# CloudOps Fackop - Landing Page

Landing page moderne pour la plateforme CloudOps Fackop, construite avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne** avec glassmorphism et animations fluides
- **Responsive design** optimisé pour tous les appareils
- **Mode sombre/clair** avec persistance
- **Animations Framer Motion** pour une expérience utilisateur premium
- **Formulaire de contact** fonctionnel
- **Sections complètes** : Hero, Features, Benefits, CTA, Contact, Footer

## 🛠️ Technologies utilisées

- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Heroicons** pour les icônes
- **Zustand** pour la gestion d'état
- **Class Variance Authority** pour les variants de composants

## 📦 Installation

1. Clonez le repository :
```bash
git clone <url-du-repo>
cd landing-page-cloudops-fackop
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` avec une palette personnalisée :
- Primary (bleu) : #2563eb
- Secondary (slate) : #334155
- Success, Warning, Error, Info

### Composants
- `Button` : Composant avec variants (primary, secondary, ghost, outline)
- `ThemeToggle` : Bouton de basculement de thème
- Sections modulaires dans `/src/components/sections/`

### Animations
Les animations Framer Motion sont configurées pour :
- Entrée des éléments au scroll
- Effets hover sur les cartes
- Transitions fluides entre les états

## 📱 Responsive

La landing page est optimisée pour :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Grands écrans (1280px+)

## 🔧 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Lance l'application en production
- `npm run lint` : Vérifie le code avec ESLint

## 📄 Structure du projet

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── FeaturesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── index.ts
│   └── ThemeToggle.tsx
├── hooks/
│   ├── useAuthStore.ts
│   └── useTheme.ts
├── styles/
│   └── globals.css
└── utils/
    └── cn.ts
```

## 🎯 Fonctionnalités de la landing page

1. **Header** : Navigation sticky avec logo et boutons CTA
2. **Hero** : Titre principal, description, boutons d'action et statistiques
3. **Features** : Grille des 6 fonctionnalités principales
4. **Benefits** : Section sombre avec liste des avantages
5. **CTA** : Call-to-action principal avec dégradé
6. **Contact** : Formulaire de contact + informations
7. **Footer** : Liens et copyright

## 🚀 Déploiement

Pour déployer sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez automatiquement à chaque push

## 📝 Licence

Ce projet est sous licence MIT.
