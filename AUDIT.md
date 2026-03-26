# 🔍 RAPPORT D'AUDIT — ASMI Transfert
Date : 26/03/2026
Fichiers analysés : 20

---

## 🔴 BUGS CRITIQUES — 3 trouvés

### BUG-001 : Image `cta-mockup.png` manquante
- **Fichier :** `src/components/sections/CTASection.tsx` — ligne ~78
- **Problème :** `CTASection` référence `/images/cta-mockup.png` mais ce fichier n'existe pas dans `public/images/`. Seul `hero-mockup.png` est présent.
- **Impact :** La section CTA affiche une image cassée en production sur desktop. Next.js `<Image fill>` renvoie une erreur 404 silencieuse et laisse un espace vide.
- **Fix :** Ajouter `public/images/cta-mockup.png`, ou remplacer par `hero-mockup.png` en attendant l'asset définitif.

---

### BUG-002 : `React` non importé dans `Button.tsx` pour le type `React.ReactNode`
- **Fichier :** `src/components/ui/Button.tsx` — ligne 9
- **Problème :** `React.ReactNode` est utilisé comme type de prop sans `import React from 'react'` ni `import type { ReactNode } from 'react'`. Le build passe grâce à la configuration Next.js, mais c'est une erreur TypeScript latente qui peut casser sur d'autres toolchains ou en mode strict pur.
- **Impact :** Non détecté à la compilation mais incorrect en TypeScript strict. Risque d'erreur à la mise à jour des outils.
- **Fix :**
  ```tsx
  import type { ReactNode } from 'react';
  // puis remplacer React.ReactNode par ReactNode
  children: ReactNode;
  ```

---

### BUG-003 : Script `lint` absent du `package.json`
- **Fichier :** `package.json` — ligne 5-9
- **Problème :** La section `scripts` ne contient pas de commande `lint`. `CLAUDE.md` référence `npm run lint` comme commande obligatoire avant tout commit.
- **Impact :** Impossible de valider la qualité du code en CI/CD ou en pré-commit. Les erreurs ESLint passent inaperçues.
- **Fix :**
  ```json
  "lint": "next lint"
  ```
  Et créer `.eslintrc.json` avec la config Next.js (`next/core-web-vitals`).

---

## 🟡 BUGS VISUELS — 5 trouvés

### VIS-001 : Couleurs hex en dur dans le lien d'évitement (skip link)
- **Fichier :** `src/app/layout.tsx` — ligne 43
- **Problème :** `focus:bg-[#E00505]` et `focus:rounded-[9999px]` utilisent des valeurs arbitraires Tailwind au lieu des tokens du design system.
- **Impact visuel :** Incohérence si la couleur brand-red change — le skip link ne suivra pas.
- **Fix :** Remplacer par `focus:bg-brand-red` et `focus:rounded-pill`.

---

### VIS-002 : Dégradés hero avec couleurs hex en dur dans `style={{}}`
- **Fichier :** `src/components/sections/HeroSection.tsx` — lignes 25 et 104
- **Problème :** `style={{ background: 'linear-gradient(166.24deg, #E00505 55%, #F9F9F9 55.1%)' }}` et `style={{ background: 'linear-gradient(180deg, #E00505 60%, #F9F9F9 60.1%)' }}` — couleurs hardcodées en inline style. Viole la règle CLAUDE.md "NE JAMAIS utiliser de couleurs hors de la palette via style inline".
- **Impact visuel :** Si les tokens changent, ces styles ne suivront pas. Interdit par les règles du projet.
- **Fix :** Déplacer ces gradients dans `globals.css` sous forme d'utilitaire :
  ```css
  @utility hero-gradient-desktop {
    background: linear-gradient(166.24deg, var(--color-brand-red) 55%, var(--color-brand-gray-light) 55.1%);
  }
  ```

---

### VIS-003 : Couleur `#FAFAFA` hardcodée dans `ServicesSection`
- **Fichier :** `src/components/sections/ServicesSection.tsx` — ligne 58
- **Problème :** `text-[#FAFAFA]` est une couleur arbitraire non définie dans le design system. La plus proche serait `brand-gray-light` (#F9F9F9) ou `brand-white`.
- **Impact visuel :** Couleur non synchronisée avec les tokens officiels.
- **Fix :** Remplacer par `text-brand-gray-light` ou ajouter un token `--color-brand-watermark: #FAFAFA` dans `@theme`.

---

### VIS-004 : Copyright hardcodé à `2024` dans le Footer
- **Fichier :** `src/components/sections/Footer.tsx` — ligne 84
- **Problème :** `© 2024 ASMI TRANSFERT.` — l'année est figée à 2024 alors que nous sommes en 2026.
- **Impact visuel :** Visuellement incorrect et non professionnel.
- **Fix :**
  ```tsx
  © {new Date().getFullYear()} ASMI TRANSFERT.
  ```
  Note : comme Footer est un Server Component (pas de hook), `new Date()` fonctionne directement.

---

### VIS-005 : `.hero-image-col` positionné avec `left: 426px` fixe — tronqué entre 768px et 1200px
- **Fichier :** `src/app/globals.css` — lignes 342-350
- **Problème :** `.hero-image-col { left: 426px; width: 930px; height: 930px }` — ces valeurs fixes dépassent largement la largeur de l'écran sur les tablettes (768–1200px) malgré le `hidden md:block`. Le conteneur hero fait `100vw` mais le mockup sort du viewport, créant un débordement horizontal si `overflow-hidden` est mal calculé.
- **Impact visuel :** Décalage visible entre 768px et 1280px — le mockup est partiellement coupé.
- **Fix :** Convertir en positionnement relatif/flex ou utiliser des valeurs `%` / `vw`.

---

## 🟠 BUGS RESPONSIVE — 5 trouvés

### RES-001 : Hero desktop inutilisable entre 768px et ~1200px (overlap)
- **Fichier :** `src/app/globals.css` — `.hero-image-col` + `src/components/sections/HeroSection.tsx`
- **Problème :** Le layout desktop s'active à `md:` (≥768px) mais `.hero-image-col { left: 426px; width: 930px }` nécessite ~1356px pour ne pas déborder. Sur une tablette iPad Pro (1024px), le mockup et le texte se chevauchent.
- **Impact :** Le hero est illisible sur tablette.
- **Fix :** Déclencher le layout desktop à `lg:` (1024px) ou `xl:` (1280px) plutôt qu'à `md:`.

---

### RES-002 : Boutons hero mobiles — conflit `width: 246px` vs `w-full`
- **Fichier :** `src/components/sections/HeroSection.tsx` — lignes 138-150
- **Problème :** `.btn-hero-white` définit `width: 246px` en CSS. Sur mobile, la classe `w-full` et `style={{ width: '100%' }}` tentent de contredire cette valeur. Le style inline `style={{ width: '100%' }}` prend bien le dessus, mais la classe `w-full` est redondante. De plus, `.btn-secondary-hero { width: 203px }` a le même problème sans correction inline.
- **Impact :** `btn-secondary-hero` reste à `203px` sur mobile au lieu de prendre toute la largeur.
- **Fix :** Supprimer les `width` fixes des classes CSS `.btn-hero-white` et `.btn-secondary-hero` dans `globals.css`.

---

### RES-003 : `StatsSection` — padding `p-12` trop grand sur mobile (< 375px)
- **Fichier :** `src/components/sections/StatsSection.tsx` — ligne 52
- **Problème :** La grille mobile utilise `p-12` (48px de padding) et `px-6` sur chaque cellule, ce qui laisse très peu d'espace pour les chiffres (`40px`) et les labels sur les petits écrans.
- **Impact :** Texte compressé ou débordant sur iPhone SE (375px).
- **Fix :** Réduire à `p-8` ou `p-6` pour mobile.

---

### RES-004 : `CTASection` — hauteur fixe `h-[528px]` sans adaptation mobile
- **Fichier :** `src/components/sections/CTASection.tsx` — ligne 21
- **Problème :** `h-[528px] md:h-[528px]` — même hauteur desktop et mobile. Sur petit écran, le titre `48px` en 2 lignes plus la description et les 2 boutons dépassent 528px.
- **Impact :** Contenu coupé sur mobile (boutons Google Play/App Store invisibles).
- **Fix :** Remplacer par `h-auto md:h-[528px] py-16 md:py-0`.

---

### RES-005 : `SecuritySection` — grille `grid-cols-2` et cartes à hauteur fixe `184px`
- **Fichier :** `src/app/globals.css` — `.security-card { height: 184px }` + `src/components/sections/SecuritySection.tsx`
- **Problème :** Sur mobile (375-480px), les cartes font 184px de haut avec le contenu actuel (emoji + titre + description). La description est sur plusieurs lignes et déborde du container fixe.
- **Impact :** Texte de description coupé/invisible sur mobile.
- **Fix :** Remplacer `height: 184px` par `min-height: 184px` dans `.security-card`.

---

## 🔵 BUGS PERFORMANCE — 1 trouvé

### PERF-001 : Image hero mobile chargée en `lazy` alors qu'elle est above-the-fold
- **Fichier :** `src/components/sections/HeroSection.tsx` — ligne 163
- **Problème :** La version mobile du Hero (`.flex.flex-col.md:hidden`) contient une image avec `loading="lazy"`. Or cette image est dans la section hero visible dès le chargement — above the fold.
- **Impact :** LCP (Largest Contentful Paint) dégradé sur mobile. La bannière principale est chargée avec délai, ce qui pénalise le score Lighthouse et Core Web Vitals.
- **Fix :** Remplacer `loading="lazy"` par `priority` (prop Next.js `<Image>`), qui est l'équivalent de `fetchpriority="high"` et `loading="eager"`.

---

## ⚪ BUGS ACCESSIBILITÉ — 6 trouvés

### A11Y-001 : FAQ — boutons accordéon sans `aria-controls`
- **Fichier :** `src/components/sections/FAQSection.tsx` — ligne 95-110
- **Problème :** Chaque `<button aria-expanded={isOpen}>` n'a pas d'attribut `aria-controls` pointant vers l'id du panneau de réponse correspondant. Les panneaux n'ont pas d'`id`.
- **Impact :** Les lecteurs d'écran ne peuvent pas associer le bouton à son contenu développable.
- **Fix :** Ajouter `id={`faq-panel-${index}`}` sur les `<div>` panneaux et `aria-controls={`faq-panel-${index}`}` sur les boutons.

---

### A11Y-002 : FAQ — `aria-hidden` sur le panneau mais pas de `role="region"`
- **Fichier :** `src/components/sections/FAQSection.tsx` — ligne 112-119
- **Problème :** Le div réponse utilise `aria-hidden={!isOpen}` mais n'a pas de `role="region"` ou `role="group"`. La navigation au clavier et par lecteur d'écran est incomplète.
- **Impact :** Expérience dégradée pour les utilisateurs de NVDA/JAWS.
- **Fix :** Ajouter `role="region"` et `id` sur le panneau.

---

### A11Y-003 : Liens `href="#"` — navigation indésirable vers le haut de page
- **Fichiers :** `Navbar.tsx:60,99` · `ServicesSection.tsx:71` · `CTASection.tsx:42,53` · `Footer.tsx:32,37,42,57,67,76,77`
- **Problème :** Tous les CTA et liens de navigation pointent vers `href="#"`. Au clic, la page scroll vers le haut (comportement par défaut du navigateur pour les ancres vides).
- **Impact :** UX cassée — cliquer sur "Ouvrir un compte", "Télécharger", "EN SAVOIR PLUS", ou les liens footer ramène systématiquement en haut de page.
- **Fix :** Remplacer par `href="#"` avec `onClick={(e) => e.preventDefault()}` en attendant les vraies URLs, ou pointer vers des ancres valides.

---

### A11Y-004 : `TestimonialsSection` — notation étoiles sans texte accessible
- **Fichier :** `src/components/sections/TestimonialsSection.tsx` — lignes 69-71
- **Problème :** Les étoiles de notation (`★`) sont rendues avec `aria-hidden="true"`. Il n'y a aucun texte alternatif pour indiquer la note aux lecteurs d'écran.
- **Impact :** Les utilisateurs non-voyants ne savent pas que les avis sont notés 5/5.
- **Fix :** Ajouter un `<span className="sr-only">Note : 5 étoiles sur 5</span>` dans chaque carte témoignage.

---

### A11Y-005 : `CTASection` — boutons store sans `aria-label` descriptif
- **Fichier :** `src/components/sections/CTASection.tsx` — lignes 42-65
- **Problème :** Les liens `<a href="#" className="btn-store">` contiennent du texte visible ("App Store", "Google Play") mais pas d'`aria-label` global. Comme `href="#"`, ils sont non fonctionnels.
- **Impact :** Double problème : non fonctionnel + navigation clavier sans destination claire.
- **Fix :** Ajouter `aria-label="Télécharger ASMI Transfert sur l'App Store"` et pointer vers les vraies URLs stores.

---

### A11Y-006 : `layout.tsx` — lien d'évitement avec classes arbitraires au lieu des tokens
- **Fichier :** `src/app/layout.tsx` — ligne 43
- **Problème :** `focus:rounded-[9999px]` et `focus:tracking-[1px]` utilisent des valeurs arbitraires Tailwind. Mineur sur l'accessibilité mais incohérent avec le design system.
- **Impact :** Le skip link est fonctionnel mais non aligné avec les tokens.
- **Fix :** Utiliser `focus:rounded-pill` et `focus:tracking-widest` (ou ajouter un token `--tracking-nav`).

---

## 📊 SCORE GLOBAL

| Catégorie      | Bugs trouvés | Sévérité |
|----------------|-------------|----------|
| Critiques      | 3           | 🔴       |
| Visuels        | 5           | 🟡       |
| Responsive     | 5           | 🟠       |
| Performance    | 1           | 🔵       |
| Accessibilité  | 6           | ⚪       |
| **TOTAL**      | **20**      |          |

---

## ✅ ORDRE DE CORRECTION RECOMMANDÉ

1. **BUG-001** — Ajouter `public/images/cta-mockup.png` (image manquante visible en prod)
2. **PERF-001** — Image hero mobile : `loading="lazy"` → `priority` (LCP mobile cassé)
3. **RES-004** — CTASection hauteur fixe → `h-auto` sur mobile (boutons stores coupés)
4. **RES-002** — Supprimer `width` fixes sur `.btn-hero-white` et `.btn-secondary-hero`
5. **RES-001** — Hero desktop : breakpoint `md:` → `lg:` pour éviter l'overlap tablette
6. **RES-005** — `.security-card` : `height: 184px` → `min-height: 184px`
7. **VIS-004** — Footer copyright `2024` → `new Date().getFullYear()`
8. **A11Y-003** — `href="#"` partout : ajouter `e.preventDefault()` ou des vraies URLs
9. **A11Y-001** — FAQ : ajouter `aria-controls` + `id` sur les panneaux
10. **A11Y-004** — Témoignages : ajouter `<span className="sr-only">` pour la note
11. **VIS-001** — `layout.tsx` : `bg-[#E00505]` → `bg-brand-red`
12. **VIS-002** — HeroSection : gradients inline → classes CSS utilitaires
13. **VIS-003** — ServicesSection : `text-[#FAFAFA]` → token design system
14. **BUG-002** — Button.tsx : importer `ReactNode` depuis react
15. **BUG-003** — Ajouter script `lint` dans `package.json`
16. **A11Y-002** — FAQ panneaux : ajouter `role="region"`
17. **A11Y-005** — CTASection boutons store : `aria-label` descriptif
18. **RES-003** — StatsSection padding mobile : réduire `p-12` → `p-8`
19. **VIS-005** — `.hero-image-col` : convertir `left: 426px` en valeur relative
20. **A11Y-006** — Skip link : remplacer classes arbitraires par tokens
