# CLAUDE.md — Règles du projet ASMI Transfert

## 🎯 Mission
Tu es l'assistant développeur du projet ASMI Transfert.
Tu travailles en respectant strictement le branding et la maquette Figma.

---

## 🎨 Design System — NON NÉGOCIABLE

### Couleurs officielles (ne jamais utiliser d'autres)
| Token Tailwind        | Hex       | Usage                        |
|-----------------------|-----------|------------------------------|
| brand-red             | #E00505   | CTA, Hero, accents           |
| brand-blue            | #0606EF   | Sécurité, liens, secondaire  |
| brand-black           | #09090b   | Footer, section sécurité     |
| brand-white           | #FFFFFF   | Fonds, textes sur fond coloré|
| brand-gray-light      | #F9F9F9   | Fonds sections secondaires   |
| brand-gray-border     | #F4F4F5   | Bordures, séparateurs        |
| brand-gray-text       | #71717A   | Textes descriptifs           |

### Typographie officielle — KARST uniquement
- KARST Bold → tous les titres, labels boutons, sections importantes
- KARST Light → corps de texte, descriptions, FAQ
- Jamais utiliser Montserrat, Inter, ou toute autre police

### Espacements & Layout
- Max width container : 1280px
- Padding horizontal : 40px (desktop)
- Border-radius cartes : 16px (rounded-card)
- Border-radius boutons pill : 9999px (rounded-pill)
- Border-radius boutons rect : 12px (rounded-btn)

---

## 📁 Structure des composants — OBLIGATOIRE

Chaque composant doit :
1. Être créé dans le bon dossier :
   - src/components/ui/       → composants réutilisables (Button, Card, Badge)
   - src/components/sections/ → sections de page (Navbar, Hero, Footer...)
2. Avoir un commentaire JSDoc en haut :
   /**
    * @section NomSection
    * @description Courte description
    * @figma https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI?node-id=XX-XX
    */
3. Être exporté proprement avec un nom explicite
4. Utiliser uniquement les tokens Tailwind du design system

---

## 📝 Règles Git — OBLIGATOIRES

Format des commits (conventional commits) :
  feat(section): description courte en français
  fix(section): description du correctif
  chore: mise à jour readme ou config

Exemples :
  feat(navbar): ajout de la barre de navigation responsive
  feat(hero): implémentation de la section hero avec CTA
  fix(footer): correction alignement liens réseaux sociaux
  chore: mise à jour README sections implémentées

---

## 📄 Mise à jour README — AUTOMATIQUE

Après CHAQUE implémentation de composant ou section :
1. Cocher la case correspondante dans README.md ([ ] → [x])
2. Ajouter la date d'implémentation
3. Faire un commit chore: mise à jour README

Format dans le README :
- [x] Navbar — ✅ implémenté le JJ/MM/AAAA
- [ ] Hero Section

---

## 🏗️ Workflow d'implémentation — À SUIVRE À CHAQUE FOIS

Pour chaque nouvelle section :
1. Créer le fichier dans src/components/sections/
2. Ajouter le commentaire JSDoc avec le lien Figma du node
3. Implémenter en respectant strictement les couleurs et polices
4. Importer dans src/app/page.tsx
5. Mettre à jour README.md
6. Faire un commit git avec le bon format

---

## 🔒 Règles absolues

- NE JAMAIS utiliser de couleurs hors de la palette officielle
- NE JAMAIS utiliser une police autre que KARST
- NE JAMAIS oublier de mettre à jour le README après chaque section
- NE JAMAIS faire un gros commit fourre-tout — un commit par section
- TOUJOURS vérifier que npm run dev tourne sans erreur avant de commit

---

## 📐 Référence Figma
- Fichier : https://www.figma.com/design/VlZmkzRjZZ2yCkIfMHpjnT/ASMI
- Nodes principaux :
  - Navbar     : node-id=1:344
  - Hero       : node-id=1:4
  - Stats      : node-id=1:261
  - Services   : node-id=1:30
  - Process    : node-id=1:75
  - Sécurité   : node-id=1:112
  - Témoignages: node-id=1:146
  - FAQ        : node-id=1:205
  - CTA        : node-id=1:247
  - Footer     : node-id=1:286
