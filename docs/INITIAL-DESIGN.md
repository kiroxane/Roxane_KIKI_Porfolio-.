---
name: Folio
description: Un système éditorial clair pour présenter des projets de développement.
colors:
  accent: "#294bc6"
  accent-hover: "#203ba0"
  accent-soft: "#e8edff"
  bg: "#f7f8f5"
  surface: "#ffffff"
  text: "#202623"
  muted: "#5d665f"
  border: "#d7dcd6"
  input-border: "#79837b"
  error: "#b42318"
  success: "#247047"
typography:
  display:
    fontFamily: "'Manrope Variable', 'Manrope', sans-serif"
    fontSize: "clamp(2.5rem, 5.7vw, 5rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Manrope Variable', 'Manrope', sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Manrope Variable', 'Manrope', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Manrope Variable', 'Manrope', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Manrope Variable', 'Manrope', sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
  mono:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"
  "24": "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 19px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 19px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 10px"
  badge:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "4px 9px"
  text-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  navigation-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text}"
    rounded: "6px"
    padding: "10px 13px"
---

# Design System: Folio — référence initiale

> Archive historique du système bleu/Manrope. La page de guide qu’il décrivait a été retirée du projet à la demande de Roxane : `DesignSystem.tsx`, `ui.tsx`, `components.css` et `showcase.css` n’existent plus, et les tokens qui ne servaient qu’à eux ont été retirés de `tokens.css`. Ce document ne décrit donc plus aucun code en place. Les mentions de l’ancien aperçu portfolio décrivent son état avant la refonte Serah Abijo. Le système actuel du portfolio figure dans [DESIGN.md](../DESIGN.md).

## Overview

**Creative North Star: "Le spécimen éditorial"**

Folio présente les éléments d’interface avec la clarté d’un spécimen typographique : une grande voix sans empattement, des surfaces légères et des séparations fines. L’ivoire installe le fond de lecture ; l’encre structure le contenu ; le bleu distingue les actions et les accents. La densité reste modérée, avec davantage d’espace entre les groupes qu’à l’intérieur d’un composant.

Le caractère vient de la typographie et du rythme. Les formes restent simples, les cartes planes et les transitions discrètes. « Folio » désigne le système, sans attribuer de nom ou d’identité au propriétaire du futur portfolio. La direction est décrite dans [docs/DIRECTION.md](DIRECTION.md).

**Source d’exécution :** [src/styles/tokens.css](../src/styles/tokens.css), complété par les feuilles de styles et les composants React. Ce document et l’ancien sidecar étaient des copies descriptives de l’implémentation ; le frontmatter de ce document sert aux outils documentaires et ne génère pas le CSS. En cas d’évolution, actualiser la documentation après le code. Les noms de couleurs ci-dessus correspondent au suffixe des variables `--color-*` ; les espacements correspondent aux variables `--space-*`. Les dégradés tonaux du sidecar sont des variations calculées pour sa visualisation, pas des tokens supplémentaires de l’application.

**Key Characteristics:**

- Hiérarchie typographique nette, Manrope en premier plan.
- Surfaces ivoire, blanche et brume ; accent bleu.
- Angles souples, bordures fines et profondeur minimale.
- Interactions au clavier, états explicites et réduction des mouvements.

## Colors

La palette associe une encre légèrement verte à un bleu franc et à des surfaces très claires ; les valeurs exactes figurent dans le frontmatter. Après réception des photos, les surfaces colorées ont été unifiées autour de la brume pour accompagner les tons crème et bleu marine du portrait. Les accents magenta restent portés par la photo.

### Primary

- **Bleu signature** (`accent`) : action principale, accents des titres, liens interactifs et contour de focus.
- **Bleu profond** (`accent-hover`) : survol de l’action principale.
- **Brume** (`accent-soft`) : surfaces du spécimen, aperçu sans capture, section de présentation, navigation active, badges, sélecteurs actifs du guide et lien discret au survol. Elle sert de fond, pas de couleur de texte.

### Neutral

- **Ivoire** (`bg`) : page et en-tête fixe ; fond du champ désactivé.
- **Blanc** (`surface`) : cartes, champs et boutons secondaires ; texte des actions principales.
- **Encre** (`text`) : titres, texte principal et navigation active.
- **Gris végétal** (`muted`) : descriptions, indications, légendes et navigation au repos.
- **Filet doux** (`border`) : séparateurs et contours des cartes.
- **Contour de contrôle** (`input-border`) : bordures des champs et des boutons secondaires.

### Feedback

- **Rouge d’erreur** (`error`) : message d’erreur et bordure du champ concerné.
- **Vert de validation** (`success`) : retour de validation du formulaire de démonstration.

**The Surface Rule.** La brume soutient les contenus ; utiliser encre, gris végétal ou bleu pour son texte. Un état de formulaire s’accompagne d’un message, au-delà de sa couleur.

## Typography

**Display Font:** Manrope Variable, puis Manrope et `sans-serif`.
**Body Font:** la même famille Manrope.
**Label/Mono Font:** IBM Plex Mono, puis `monospace`, pour le code et les valeurs.

**Character:** Manrope conserve une lecture ouverte dans les titres comme dans le texte courant. IBM Plex Mono différencie les informations techniques, sans devenir la voix principale. Les polices sont livrées par les paquets Fontsource et importées localement dans `src/main.tsx`.

### Hierarchy

- **Display** : titre principal ; la base globale est décrite par `typography.display`.
- **Headline** : titres de section, décrits par `typography.headline`.
- **Title** : sous-titres, décrits par `typography.title`.
- **Body** : texte courant, décrit par `typography.body` ; certaines descriptions du guide sont limitées à 65–75 caractères de largeur.
- **Label** : libellés des champs ; pas de capitales systématiques.
- **Mono** : valeurs de tokens, code et légendes typographiques.

Les composants ont leurs propres ajustements : boutons en 14 px/600, badges en 11 px/400 et titres de carte en 22 px/650. Le guide réduit visuellement ses échantillons typographiques pour tenir dans sa colonne ; ses étiquettes indiquent l’échelle globale.

L’aperçu portfolio applique une composition plus ample : titre principal `clamp(58px, 7vw, 96px)`, graisse 550 et interligne 1.06 ; titres de section `clamp(34px, 4.2vw, 52px)`, graisse 550 et interligne 1.12. À 640 px et moins, le titre principal devient `clamp(54px, 14vw, 78px)`. Ces variantes restent propres à cette page.

**The Reading Voice Rule.** Conserver Manrope pour les contenus et les actions ; réserver IBM Plex Mono aux valeurs et aux expressions techniques.

## Layout

Le conteneur du guide est centré : `min(1184px, calc(100% - 2 × clamp(1.25rem, 5.3vw, 4.75rem)))`. Le rythme suit une base de 4 px ; l’échelle exacte est dans `spacing`. Les sections du guide ont 48 px de padding vertical sur grand écran et 36 px à partir du seuil de 760 px. Ses compositions à deux ou trois colonnes se replient en une colonne ; la palette présente quatre nuances sur une rangée, puis deux rangées de deux couleurs sur petit écran.

La navigation reste horizontale et fixe en haut de page. À 960 px et moins, son sous-titre disparaît. À 720 px et moins, les ancres passent sur une deuxième ligne défilante ; les liens y mesurent au minimum 40 px de hauteur, contre 44 px sur grand écran. L’en-tête mesure alors au minimum 123 px, tandis que le token de décalage des ancres passe de 88 à 128 px. Les ancres ajoutent encore 24 px pour dégager le contenu.

L’aperçu portfolio emploie un conteneur distinct, limité à 1120 px et entouré de 48 px de marge par côté. Ces marges deviennent 24 px à 900 px, puis 20 px à 640 px. La grille de projets utilise deux colonnes avec 24 px d’écart ; les grilles deviennent une colonne à 640 px. Les grandes sections utilisent 96 px de padding vertical, puis 56 px sur petit écran. Ces choix de composition ne changent pas les dimensions des primitives.

## Elevation & Depth

Les composants rendus restent plats : les surfaces colorées, les contours et les espacements créent la hiérarchie. Le token `--shadow-raised` vaut `0 12px 30px rgb(32 38 35 / 8%)`, mais aucun composant actuel ne l’utilise. Il ne constitue donc pas une élévation standard à ajouter aux cartes.

Les transitions des primitives utilisent `--duration-fast` (180 ms) et `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`). Elles concernent le fond, la bordure, la couleur et, pour les boutons, un déplacement de 1 px à l’activation. `--duration-medium` (320 ms) est défini mais inutilisé. Le chargement d’un bouton tourne en 850 ms ; le libellé reste visible. Avec `prefers-reduced-motion: reduce`, le défilement redevient immédiat et les durées d’animation ou de transition sont ramenées à 0.01 ms.

## Shapes

Les trois arrondis principaux sont ceux de `rounded.sm`, `rounded.md` et `rounded.lg` : contrôles compacts, éléments de démonstration, puis cartes et médias. Les badges utilisent `rounded.pill`. Les bordures des contrôles et des cartes sont de 1 px. La carte masque ce qui dépasse de son contour arrondi ; son média conserve un ratio de 8:5.

Quelques détails sont locaux : les liens de navigation ont un arrondi de 6 px, les carrés de l’échelle d’espacement de 3 px et le carré décoratif du spécimen garde des angles droits. Ils ne remplacent pas l’échelle des composants.

## Components

Toutes les APIs décrites ici sont exportées par [src/components/ui.tsx](../src/components/ui.tsx). Importer les styles globaux une fois à l’entrée de l’application pour bénéficier des tokens, des styles des primitives et des adaptations d’écran.

### Buttons

Des actions compactes, lisibles et clairement hiérarchisées.

- **API `Button`** : attributs natifs de `<button>`, `variant?: 'primary' | 'secondary' | 'ghost'`, `size?: 'sm' | 'md'`, `loading?: boolean`. Par défaut : `primary`, `md`, `loading=false`, `type='button'`.
- **API `LinkButton`** : attributs natifs de `<a>` et mêmes `variant`/`size`. Pour `target='_blank'`, `rel` devient `noopener noreferrer` s’il n’est pas fourni. Le composant ne possède pas d’état `disabled` ni `loading`.
- **Forme** : petit arrondi, hauteur minimale de 48 px et espacement interne défini dans le frontmatter. La taille `sm` descend à 44 px et utilise `9px 15px` ; le style `ghost` conserve 10 px sur les côtés.
- **Primary** : fond bleu et texte blanc ; bleu profond au survol.
- **Secondary** : fond blanc, texte encre et contour de contrôle ; fond ivoire au survol.
- **Ghost** : fond transparent ; fond brume et texte bleu au survol.
- **Focus** : contour bleu de 2 px, décalé de 4 px. L’activation déplace le bouton de 1 px vers le bas.
- **Disabled / Loading** : opacité 0.45 et absence d’activation. `loading` désactive le bouton, expose `aria-busy` et affiche un indicateur décoratif, sans remplacer le texte.

```tsx
import { Button, LinkButton } from './components/ui'

<Button variant="secondary" onClick={handleDownload}>Télécharger</Button>
<Button type="submit" loading={isSubmitting}>Valider</Button>
<LinkButton href="#projets">Voir les projets</LinkButton>
```

### Chips

`Badge({ children: ReactNode })` est une étiquette informative non interactive, utilisée pour les technologies. Elle associe texte bleu, fond brume, forme pilule et hauteur minimale de 28 px. Elle n’expose ni sélection ni action.

### Cards / Containers

`ProjectCard({ project: Project, showImagePlaceholder = false, headingLevel = 3 })` regroupe l’aperçu facultatif, les technologies, le titre, le contexte, la description et les liens disponibles. La surface est blanche, son contour est doux et son grand arrondi masque le média lorsqu’il existe. Le corps dispose de 24 px de padding, réduit à 20 px à 720 px et moins. Les liens s’alignent en bas des cartes d’une même ligne. Aucune ombre ni animation de survol n’est appliquée à la carte entière.

`Project` est défini dans `src/data/portfolio.ts` : `id`, `title`, `description` et `technologies` sont requis ; `category`, `context`, `imageSrc`, `imageAlt`, `projectUrl` et `sourceUrl` sont facultatifs. `category` distingue les réalisations `professional` et `personal` ; `context` précise le périmètre du travail. Sans image, la carte commence directement par son contenu. Le spécimen du guide active `showImagePlaceholder` pour illustrer la place d’une future capture. Une image utilise `object-fit: cover`, un chargement différé et un texte alternatif fourni ou dérivé du titre. Chaque lien n’apparaît que si son URL est renseignée et indique l’ouverture d’un nouvel onglet dans son nom accessible.

Dans le portfolio, la section Projets porte un titre de niveau 2, chaque groupe un titre de niveau 3 et chaque carte un titre de niveau 4 via `headingLevel={4}`. Les groupes affichent leur nombre de projets et sont séparés par 64 px. Les projets sans catégorie restent visibles dans un groupe « Autres réalisations ».

### Inputs / Fields

`TextField` accepte les attributs natifs d’un `<input>`, un `label` obligatoire, un `hint` et un `error` facultatifs. Un identifiant est généré si `id` est absent. Le libellé est associé au champ ; aide, erreur et éventuel `aria-describedby` fourni sont combinés.

Le champ a un fond blanc, un contour de contrôle, le petit arrondi et une hauteur minimale de 48 px. Le focus ajoute le contour bleu commun et colore la bordure. `error` applique le rouge à la bordure, expose `aria-invalid` et affiche le texte dans une zone d’alerte. `disabled` conserve l’attribut natif et rend le fond ivoire. La validation appartient au formulaire appelant : ce composant ne valide pas une adresse et n’envoie aucune donnée.

```tsx
<TextField
  label="Votre email"
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  hint="Démonstration locale : aucune donnée n’est envoyée."
  error={error}
  required
/>
```

### Navigation

`Navbar` reçoit `items: { id: string; label: string }[]`, puis les props facultatives `brand`, `action`, `homeHref` et `subtitle`. `brand` vaut `folio` et `homeHref` vaut `#` par défaut. Chaque `id` doit correspondre à une section existante.

Le composant crée de vrais liens d’ancrage. Il suit la section visible avec `IntersectionObserver`, initialise l’état à partir du fragment de l’URL et marque l’ancre courante avec `aria-current='location'`. Au repos, le texte est gris végétal ; au survol et pour l’ancre courante, il devient encre sur brume. Le focus reste visible. La variante mobile conserve le défilement horizontal, sans menu supplémentaire.

Les pages ajoutent un lien « Aller au contenu » visible au focus et un `main` ciblable. Les composants posent des bases d’accessibilité ; cette documentation n’atteste pas un audit WCAG exhaustif.

### Spécimens interactifs

Le guide propose cinq actions locales : copier une couleur (avec retour explicite si le presse-papiers est indisponible), changer la graisse du spécimen, comparer les états d’un bouton, tester une validation d’email sans envoi et déclencher une transition. Le téléchargement des tokens exporte le contenu réel de `src/styles/tokens.css` sous le nom `folio-tokens.css`.

### Portrait dans « À propos »

`PortfolioContent.portrait` accepte `src`, `alt`, `width`, `height` et une `caption` facultative. Le portrait fourni est diffusé en JPEG 1200 × 1600 px, avec chargement différé. Le cadre 4:5 a des angles de 16 px ; un agrandissement CSS de 10 % et un point d'ancrage à 80 % réduisent la place du plafond. `brightness(1.08) saturate(0.96)` reste un traitement d'affichage réversible. La grille partage l'espace à 0.95fr / 1.05fr sur ordinateur et se replie en une colonne à 640 px. Sans portrait, le texte occupe une colonne. Voir `docs/PHOTO.md` pour la provenance et le traitement retenu.

## Do's and Don'ts

### Do:

- **Do** réutiliser les tokens CSS et les variantes des composants pour conserver les mêmes couleurs, contours et états.
- **Do** choisir `Button` pour une action et `LinkButton` pour une destination.
- **Do** conserver un libellé, un focus visible et une explication textuelle des états indisponibles ou erronés.
- **Do** prévoir le retour à une colonne et la navigation horizontale sur les petits écrans.
- **Do** garder visibles les mentions de démonstration jusqu’à l’ajout de contenus réels.

### Don't:

- **Don't** transformer un `Badge` informatif en contrôle de filtre sans définir une API et des états dédiés.
- **Don't** attribuer une action de clic à toute la carte alors que ses destinations sont portées par des liens explicites.
- **Don't** appliquer par défaut l’ombre réservée aux cartes actuellement planes.
- **Don't** présenter les projets de démonstration, les champs vides ou « Folio » comme une identité et des réalisations personnelles établies.
- **Don't** activer le contact ou le téléchargement du CV avant de renseigner leurs données réelles.


---

# Direction initiale archivée

# Direction proposée — Folio

Le choix de palette et de typographie est délégué dans la demande. « Folio » est le nom de travail du design system, pas une identité personnelle attribuée à l'utilisateur.

## Intention

Un spécimen éditorial : montrer les matières du système à travers les couleurs, les caractères, les dimensions et les composants eux-mêmes. Le portfolio dérivé mettra en premier les réalisations réelles.

## Direction visuelle

Fond ivoire très léger #F7F8F5, encre #202623, bleu signature #294BC6 et brume #E8EDFF. Manrope pour la lecture et les titres ; IBM Plex Mono pour les valeurs et exemples de code. Le monospace n'est pas la voix principale. Bordures fines, angles de 8, 12 et 16 px, grille large et espace généreux entre sections.

La palette est révisée après réception des photos et accord de l'utilisateur : les anciennes surfaces sauge cèdent la place à la brume, qui accompagne les tons crème et bleu marine du portrait. Le magenta reste présent dans les photos, sans devenir un accent d'interface. Le portrait IMG_4445 est retenu pour la section À propos. L'image de référence initiale est conservée comme trace de l'exploration, avec sa palette d'origine.

## Structure de la page de référence

Navigation horizontale ; grand titre « Vos projets. Une signature. » et spécimen Aa ; palette copiable ; typographie réglable ; composants et états ; rythme, arrondis et mouvement ; aperçu de la structure monopage et carte projet.

## Structure de l'aperçu portfolio

Accueil → Projets → À propos → Contact. CV disponible uniquement lorsque le fichier est renseigné. Les sections et données provisoires sont explicitement identifiées.

## Références explorées

Sept familles de composition : documentation technique, catalogue de réalisations, dossier de candidature, grille de conférence, spécimen typographique, index de projets, carnet de fabrication. Le spécimen typographique sert de référence à cette page de design system (clé d'exploration 8dbe6838, position 5). L'exploration a également proposé des pistes fondées sur les autocollants, la grille typographique et le papier plié ; l'accumulation et la déformation auraient affaibli la lisibilité de ce guide.

## Limites

Deux photos personnelles sont fournies, dont IMG_4445 retenue pour À propos. Aucun nom, parcours, contact, CV, capture de projet ou projet réel fourni. Ne pas transformer les exemples ni le contexte de l'événement visible sur la photo en affirmations de parcours. Aucun backend ni envoi de formulaire n'est demandé. Cette proposition peut évoluer après réception des autres contenus.
