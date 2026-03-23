# ASMI Transfert — Landing Page

> Plateforme de transfert de fonds nouvelle génération pour l'Afrique et l'Europe.

## 🚀 Stack Technique
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Police : Karst (Bold & Light)

## 🎨 Design System
### Couleurs
| Nom | Hex | Usage |
|-----|-----|-------|
| Rouge principal | `#E00505` | CTA, Hero, accents |
| Bleu secondaire | `#0606EF` | Sécurité, liens, boutons secondaires |
| Noir | `#09090b` | Footer, section sécurité |
| Blanc | `#FFFFFF` | Fonds, textes sur fond coloré |

### Typographie
- **KARST Bold** → Titres, labels boutons, sections importantes
- **KARST Light** → Corps de texte, descriptions

## 📁 Structure du projet
```
src/
├── app/                  # App Router Next.js
│   ├── layout.tsx        # Layout global + métadonnées
│   ├── page.tsx          # Page principale
│   └── globals.css       # Styles globaux Tailwind
├── components/
│   ├── ui/               # Composants réutilisables (Button, Card...)
│   └── sections/         # Sections de la landing page
├── lib/
│   └── constants.ts      # Design tokens et données statiques
└── types/
    └── index.ts          # Types TypeScript globaux
```

## 📦 Installation
```bash
npm install
npm run dev
```

## 🗺️ Sections implémentées
- [x] Navbar — ✅ implémenté le 23/03/2026
- [x] Hero Section — ✅ implémenté le 23/03/2026
- [x] Stats Section — ✅ implémenté le 23/03/2026
- [x] Services Section — ✅ implémenté le 23/03/2026
- [x] Process Section — ✅ implémenté le 23/03/2026
- [x] Security Section — ✅ implémenté le 23/03/2026
- [x] Testimonials Section — ✅ implémenté le 23/03/2026
- [x] FAQ Section — ✅ implémenté le 23/03/2026
- [x] CTA Download Section — ✅ implémenté le 23/03/2026
- [x] Footer — ✅ implémenté le 23/03/2026

## 📐 Maquette
Figma : https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI

## ✅ Statut du projet
Version : 1.0.0
Statut : Production ready

## 🎯 Finitions appliquées
- [x] Police Karst configurée
- [x] Animations Framer Motion
- [x] SEO & Open Graph
- [x] Optimisation images Next.js
- [x] Accessibilité (a11y)
- [x] Variables CSS globales
- [x] Hover effects & micro-interactions
- [x] Scroll smooth & ancres
- [x] Page de chargement

## 👥 Équipe
Made by HustlerLabs
