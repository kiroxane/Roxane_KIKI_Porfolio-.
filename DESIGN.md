---
name: Roxane KIKI — Portfolio
description: Portfolio éditorial ivoire et bleu signature, reprenant la composition de la référence Serah Abijo.
colors:
  accent: "#294bc6"
  accent-hover: "#203ba0"
  accent-soft: "#e8edff"
  bg: "#f7f8f5"
  text: "#202623"
  muted: "#5d665f"
  border: "#d7dcd6"
  input-border: "#79837b"
  projects-bg: "#e8edff"
  stack-bg: "#e8edff"
  tag-bg: "#e8edff"
  white: "#ffffff"
  disabled-bg: "#e8edff"
  disabled-text: "#5d665f"
  terminal-bg: "#202623"
  terminal-text: "#e8edff"
typography:
  display:
    fontFamily: "'Playfair Display Variable', Georgia, serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Playfair Display Variable', Georgia, serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Playfair Display Variable', Georgia, serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Inter Variable', 'Inter', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Inter Variable', 'Inter', sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
  terminal:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0"
rounded:
  compact: "6px"
  tag: "8px"
  thumbnail: "10px"
  card: "12px"
  portrait: "16px"
  album: "22px"
  pill: "999px"
  circle: "50%"
spacing:
  inline-tight: "6px"
  inline: "8px"
  tags: "10px"
  card-gap: "16px"
  container-gutter: "24px"
  group: "32px"
  section-mobile: "48px"
  section: "64px"
  section-large: "80px"
  columns: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-small:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.compact}"
    padding: "6px 11px"
  button-disabled:
    backgroundColor: "{colors.disabled-bg}"
    textColor: "{colors.disabled-text}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  social-link:
    backgroundColor: "transparent"
    textColor: "#5d665f"
    rounded: "{rounded.pill}"
    padding: "7px 12px"
  navigation-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "8px 13px"
  filter-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  technology-tag:
    backgroundColor: "transparent"
    textColor: "#202623"
    rounded: "{rounded.tag}"
    padding: "8px 11px"
  project-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  carousel-control:
    backgroundColor: "rgb(0 0 0 / 45%)"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    size: "32px"
  stack-control:
    backgroundColor: "{colors.stack-bg}"
    textColor: "{colors.accent}"
    rounded: "{rounded.circle}"
    size: "32px"
---

# Design System: Roxane KIKI — Portfolio

## Overview

**Creative North Star: "La référence Serah Abijo, avec les contenus de Roxane"**

Le portfolio de Roxane KIKI, Développeuse Web Fullstack, reprend la direction explicitement choisie par l’utilisatrice : la référence Serah Abijo. Le fond ivoire, les accents bleu signature, les titres à empattements et les commandes compactes accompagnent les photos personnelles et les captures de projets. À sa demande, la palette précédente est restaurée ; la composition, les carrousels et les typographies Inter et Playfair Display sont conservés.

Le rythme associe des sections aérées à des éléments denses : navigation en pilules, ruban de logos, étiquettes techniques et cartes de projets. La profondeur est réservée aux photographies. Le carrousel de l’accueil reprend les deux portraits de Roxane à l’AWS Summit ; l’album final rassemble deux photos d’ambiance. Les commandes restent accessibles et la lecture interruptible.

**Key Characteristics:**

- Fond ivoire, bleu signature pour les actions et les états sélectionnés.
- Playfair Display pour les titres, Inter pour les textes et commandes.
- Portrait étroit, album final ample et captures d’interfaces réelles.
- Cartes bordées, boutons en pilules et mouvement contrôlable.

**Portée et sources.** Ce document décrit le portfolio servi à `/`, implémenté dans [PortfolioPreview.tsx](src/pages/PortfolioPreview.tsx), [portfolio.css](src/styles/portfolio.css), [PhotoCarousel.tsx](src/components/PhotoCarousel.tsx) et [BrandIcon.tsx](src/components/BrandIcon.tsx). Les couleurs sont héritées des tokens racine de `src/styles/tokens.css` ; les polices et la composition restent définies sous `.portfolio-preview`. La page de guide du design system a été retirée du projet à la demande de Roxane : `DesignSystem.tsx`, `ui.tsx`, `components.css` et `showcase.css` sont supprimés, et `tokens.css` ne conserve que les valeurs réellement employées par le portfolio. Sa documentation reste consultable dans [INITIAL-DESIGN.md](docs/INITIAL-DESIGN.md), désormais à titre d’archive sans code correspondant.

Le frontmatter est la référence des outils documentaires ; le CSS et le code restent la source d’exécution. Les noms de couleur existants correspondent aux suffixes des variables locales `--color-*` ; les autres noms décrivent des valeurs récurrentes du CSS, sans inventer de nouvelles variables. Le sidecar [.impeccable/design.json](.impeccable/design.json) étend ces données avec les ombres, mouvements, seuils et aperçus HTML/CSS. Ses gammes tonales sont calculées pour visualisation, sans devenir des couleurs supplémentaires de l’application.

## Colors

Le bleu signature marque les actions et la sélection sur des fonds ivoire et brume. Les valeurs normatives figurent dans le frontmatter ; les couleurs des logos restent celles des marques.

### Primary

- **Bleu signature** (`accent`) : boutons principaux, navigation active, filtres sélectionnés, liens, étiquettes de section et focus.
- **Bleu de survol** (`accent-hover`) : survol des boutons principaux activables.
- **Brume** (`accent-soft`) : survol discret et fond de l’invitation à prendre contact.

### Secondary

- **Brume terminal** (`terminal-text`) et **fond terminal** (`terminal-bg`) : signature du titre « La vie hors du terminal ». Ils restent locaux à ce motif.

### Neutral

- **Ivoire** (`bg`) : fond principal et en-tête.
- **Encre** (`text`) : texte principal et titres ; **gris secondaire** (`muted`) : texte secondaire.
- **Bordure neutre** (`border`) : contours des cartes, étiquettes et séparateurs ; **contour de contrôle** (`input-border`) : commandes interactives.
- **Brume projets** (`projects-bg`), **brume ruban** (`stack-bg`) et **fond d’étiquette** (`tag-bg`) : plans légers séparant les groupes.
- **Blanc** (`white`) : cartes de projets, texte des actions sélectionnées et commandes photo.
- **Brume désactivée** (`disabled-bg`) et **encre désactivée** (`disabled-text`) : CV indisponible, associé à une explication.

**The Scoped World Rule.** Hériter de la palette commune dans tokens.css et appliquer les typographies du portfolio dans sa surface dédiée `.portfolio-preview`.

## Typography

**Display Font:** Playfair Display Variable, puis Georgia et `serif`.
**Body Font:** Inter Variable, puis Inter et `sans-serif`.
**Label/Mono Font:** IBM Plex Mono, puis `monospace`, pour la signature terminal et le compteur de l’album.

**Character:** les empattements identifient les grands titres ; la sans-serif donne une lecture compacte aux descriptions, liens et commandes. Inter et Playfair Display sont importées depuis Fontsource dans la page portfolio, IBM Plex Mono depuis l’entrée de l’application. Aucune police distante n’est nécessaire.

### Hierarchy

- **Display** : identité dans le premier écran, selon `typography.display` ; taille ramenée à 36 px sur petit écran.
- **Headline** : grands titres de section, selon `typography.headline` ; les titres À propos et Contact sont à 30 px, comme les grands titres sur petit écran.
- **Title** : titres courts et invitation, selon `typography.title` ; titres des projets à 20 px.
- **Body** : base décrite par `typography.body` ; descriptions des projets à 13 px/1.6, présentation À propos à 15 px/1.8 (14 px sur mobile), texte Contact à 14 px/1.9.
- **Label** : boutons principaux selon `typography.label` ; navigation à 13 px, filtres à 12 px et petits labels des projets à 10 px. Les étiquettes de section emploient des capitales et un espacement de 0.015 em.
- **Terminal** : titre de l’album selon `typography.terminal`, réduit à 16 px sur mobile. Les légendes de l’album utilisent Playfair Display à 34 px/600, puis 29 px sur mobile.

L’introduction reste italique et limitée à 440 px. Les titres équilibrent leurs lignes avec `text-wrap: balance`.

## Layout

Le conteneur courant mesure `min(1024px, calc(100% - 48px))`. L’en-tête a son conteneur de 1120 px maximum ; le premier écran utilise 1088 px maximum, avec une colonne de texte souple et une colonne photo de 288 px. Les sections courantes ont 64 px d’espace vertical ; Compétences et Contact emploient aussi un rythme de 80 px. Ces mesures sont propres au portfolio.

L’en-tête reste collant et mesure au minimum 57 px. Les ancres dégagent sa hauteur plus 24 px. La page suit l’ordre : accueil, ruban, À propos, Compétences, Projets, Contact, album, pied de page. La navigation reprend cet ordre : Portfolio, À propos, Compétences, Projets, Contact. Les ancres du pied de page en découlent. Un menu qui annonce un autre ordre que celui de la lecture désoriente ; ajouter ou déplacer une section impose donc de mettre à jour `navigation` dans `PortfolioPreview.tsx`.

| Seuil observé | Adaptation |
| --- | --- |
| Au-dessus de 1050 px | Présentation et photo en deux colonnes ; projets sur trois colonnes, séparées de 16 px. |
| 1050 px et moins | Espaces entre colonnes resserrés ; label textuel « Code » masqué dans les cartes. |
| 760 px et moins | En-tête sur deux lignes, au minimum 99 px ; navigation horizontale défilante, CV au-dessus. Accueil, À propos, Compétences et Contact en une colonne. Sections courantes à 48 px ; grille projets sur deux colonnes. Label « Code » rétabli. Pied de page sur deux colonnes. |
| 520 px et moins | Projets sur une colonne ; filtres plus compacts ; profil du pied de page sur toute la largeur. |

Le carrousel portrait passe de 288 × 512 px à 256 × 440 px au seuil de 760 px ; ses miniatures passent de 58 × 80 à 48 × 64 px. L’album mesure au maximum 448 px de large et 600 px de haut, puis une largeur fluide et 460 px de haut sur mobile. Les images de projets ont un ratio d’affichage 16:9, une hauteur automatique et un cadrage en haut ; ne pas les étirer.

## Elevation & Depth

La structure générale reste plane : fonds ivoire et brume, bordures fines et espaces suffisent à distinguer les contenus. Les ombres accompagnent les photos et le survol des projets. Le portrait utilise `0 14px 24px rgb(32 38 35 / 12%)` ; l’album utilise `0 20px 30px rgb(32 38 35 / 18%)`. Les cartes de projets sont planes au repos ; au survol ou au focus interne elles remontent de 3 px, prennent une ombre légère et leur image zoome à 1,05 en 500 ms.

Les états des commandes changent en 180 ms. Le portrait avance toutes les 8 secondes avec un glissement latéral et un fondu de 500 ms, suivant `cubic-bezier(.4, 0, .2, 1)`. Sa légende monte de 10 px en 300 ms après un délai de 250 ms. L’album reste manuel : les cartes se superposent avec 12 px de décalage et une échelle réduite de 5 % par niveau ; la carte sort de 400 px avec une rotation de 20° en 500 ms, puis la suivante remonte. Le ruban parcourt sa boucle en 30 secondes, de façon linéaire. Les détails de pause sont décrits dans Components.

Avec `prefers-reduced-motion: reduce`, le ruban devient une liste fixe qui se replie, sa copie décorative et son bouton de lecture disparaissent. Les transitions et les déplacements au glissement sont supprimés ; `matchMedia` désactive la lecture automatique du portrait, dont la commande de lecture disparaît. L’album reste manuel dans tous les modes. Les contrôles manuels restent disponibles. La réduction globale des mouvements supprime aussi le défilement fluide.

Les liens sociaux entrent en 300 ms, décalés de 100 ms, puis remontent de 2 px au survol. Le badge photo effectue un signe de 1,8 s suivi de 3 s de repos. Les icônes des compétences tournent toutes les 2 s ; les blocs du titre Projets rebondissent sur 12 px pendant 800 ms, puis se reposent 2 s. L’invitation combine un flottement de 6 px, une rotation du signe plus et un halo bleu. Les trois points du contact rebondissent de 5 px avec un décalage de 200 ms. Le titre terminal s’écrit une seule fois, à 50 ms par caractère, avec un curseur de 800 ms. Les animations décoratives sont suspendues hors écran ou dans un onglet masqué et neutralisées en mouvement réduit, où le titre complet reste lisible. Les sections restent statiques, comme sur la référence.

**The Controlled Motion Rule.** Toute lecture automatique possède une commande de pause et respecte la préférence de réduction des mouvements.

## Shapes

Les commandes principales, les liens sociaux et les filtres sont des pilules. Le petit CV de l’en-tête conserve un arrondi plus court ; les étiquettes de compétences ont des angles doux. Les cartes et l’encart de contact partagent l’arrondi `card`, les photos l’arrondi `portrait`, l’album l’arrondi `album` et les miniatures l’arrondi `thumbnail`.

Les contours sont généralement de 1 px ; les miniatures sélectionnées ont un contour de 2 px. Le cadre portrait possède un filet extérieur à 10 px du média avec un arrondi de 14 px. Les flèches, boutons de lecture et badges photo sont circulaires. La sélection et le focus restent visibles indépendamment des seuls effets de survol.

## Components

Les composants décrits ici appartiennent à la page portfolio, seule surface du projet. Les primitives du guide initial et ses champs de formulaire ont été supprimés avec lui ; le portfolio n’affiche pas de formulaire.

### Buttons

Des commandes compactes, en bleu signature plein pour l’action principale et bordées pour les liens sociaux.

- **Principal** : minimum 38 px de hauteur, forme pilule ; variante compacte du CV à 34 px minimum. Les paddings sont décrits dans le frontmatter.
- **Lien social** : surface transparente, contour de contrôle ; survol brume avec texte bleu signature.
- **Focus** : contour bleu signature de 2 px décalé de 4 px, partagé par les éléments interactifs du portfolio.
- **CV** : boutons natifs désactivés tant que `cvUrl` est absent, liés à l’explication par `aria-describedby`. Le lien de téléchargement n’apparaît que lorsqu’une URL réelle est fournie.
- **Email** : un `mailto:` et une copie avec retour explicite apparaissent lorsque `email` existe ; actuellement, la section affiche « Adresse email à ajouter. ».

### Navigation

Les cinq ancres sont des liens natifs, avec état actif bleu signature et `aria-current="location"`. L’état suit les positions des sections au défilement et au redimensionnement. L’en-tête se replie à deux lignes sur mobile ; la navigation conserve ses ancres et son défilement horizontal. Le lien « Aller au contenu » devient visible au focus et cible le `main`.

### Chips and filters

Les étiquettes de compétences restent informatives et combinent un logo et son nom. Les petits tags de carte utilisent une surface neutre et au plus quatre technologies par projet. `BrandIcon` insère les tracés SVG de Simple Icons extraits dans `brand-icons.generated.ts` ; les marques sont colorées dans les tags et GitHub suit la couleur du lien. Ces SVG sont décoratifs, accompagnés de texte. Les noms sans tracé utilisent une icône Lucide de code ou de recherche pour SEO.

Les filtres sont des boutons distincts, dans un groupe nommé, avec `aria-pressed` : Tous (6), Professionnels (4), Personnels (2). Ils changent la grille et annoncent le nombre affiché dans une zone de statut. La catégorie professionnelle reprend le classement fourni et ne prétend pas établir une mission client.

### Project cards

Cartes bordées, fond blanc, coins arrondis et contenu vertical. La capture précède un corps espacé de `17px 16px 16px` : titre Playfair Display, lien de code, catégorie, description, puis technologies. Les tags s’alignent au bas du corps. Les titres de carte sont des `h3`, sous le `h2` de section ; la carte entière n’est pas un lien.

Les six captures proviennent des interfaces réellement lancées en local. Le frontend de Mon Vieux Grimoire illustre le support du projet backend. Les captures ne valident pas de démo publique ni les fonctions dynamiques des backends non lancés. Les destinations actuelles sont les dépôts GitHub, ouverts avec `noopener noreferrer`. La provenance est détaillée dans [PROJECTS.md](docs/PROJECTS.md).

L’invitation sous les cartes associe fond brume, contour pointillé, symbole plus et lien vers Contact. Son apparence de bouton appartient au même lien, sans contrôle imbriqué.

### Photo carousels

`PhotoCarousel` reçoit `photos: CarouselPhoto[]` et `variant?: 'portrait' | 'stories'`. Une photo possède `src`, `alt` et `caption`. Une liste vide ne rend rien. Les deux instances actuelles réutilisent les deux originaux AWS Summit ; les informations de provenance et les cadrages figurent dans [PHOTO.md](docs/PHOTO.md).

- **Portrait** : filet extérieur, deux barres de progression, glissement latéral avec fondu, légende montante sur dégradé sombre et deux miniatures sous le cadre. Les miniatures grandissent au survol (1,08) et se contractent à l’activation (0,95).
- **Stories** : pile des photos de l’album, cadre plus ample, ombre plus forte, légende Playfair Display, description de la photo et compteur ; les miniatures deviennent deux indicateurs en haut de l’image. La carte sortante part sur le côté avec une rotation ; l’index change après 200 ms et la carte suivante remonte. Les légendes apparaissent en 400 ms, avec des délais de 150 ms pour le bloc, 200 ms pour le titre et 300 ms pour la description ; le filet se dessine après 500 ms. Aucune image supplémentaire n’est dupliquée pour remplir la pile.
- **Lecture** : seul le portrait avance automatiquement, toutes les 8 secondes si plusieurs images et aucune réduction de mouvement. Le survol, le focus dans les contrôles autres que lecture/pause, une visibilité inférieure à 25 % et un onglet masqué suspendent le temps écoulé ; la reprise conserve ce temps. La commande de lecture reste activable au clavier même lorsqu’elle garde le focus. Une sélection par flèche, miniature, clavier ou glissement arrête la lecture jusqu’à une reprise explicite. L’album reste manuel, sans commande lecture/pause.
- **Commandes** : précédent/suivant, flèches gauche/droite au clavier, lecture/pause pour le portrait ; glissement horizontal à la souris ou au toucher de plus de 45 px pour le portrait et 100 px pour l’album. Le déplacement suit 80 % du geste et revient en place si le seuil n’est pas atteint, tout en conservant le défilement vertical tactile. Les flèches deviennent visibles au survol et au focus ; elles restent visibles sur mobile.
- **Sémantique** : région nommée « carrousel », diapositives numérotées, éléments inactifs masqués aux technologies d’assistance, sélection via `aria-pressed` et annonces `polite` lorsque la lecture est arrêtée.

Les images emploient `object-fit: cover`, un agrandissement de 8 % et une correction d’affichage `brightness(1.08) saturate(.96)`. Ces effets restent réversibles et ne changent pas les fichiers source.

### Technology ribbon

Le ruban affiche JavaScript, React, Express, MongoDB, HTML, CSS, Node.js, Vite et GitHub. Deux groupes identiques assurent la boucle ; le second est masqué aux technologies d’assistance. Le survol suspend la boucle. Le bouton circulaire natif permet de mettre en pause et de relancer au clavier ou au pointeur ; son libellé décrit l’action et `aria-pressed` expose la pause persistante. La réduction des mouvements transforme le ruban en liste fixe.

### Contact and footer

L’encart « En bref » rassemble le profil confirmé, le nombre de projets, GitHub et le statut du CV. Le pied de page répète les ancres de la page. Le nom et le rôle sont définitifs ; l’email et le fichier CV restent à fournir. Les détails personnels de la référence ne servent pas de contenu de remplacement.

## Do's and Don'ts

### Do:

- **Do** conserver les couleurs communes dans tokens.css et les familles du portfolio dans sa portée locale, puis actualiser cette documentation après le code.
- **Do** employer les photos fournies par Roxane et les six captures réelles, avec leurs textes alternatifs et limites de provenance.
- **Do** conserver les boutons natifs, les noms accessibles, le focus visible et les états de sélection des filtres et carrousels.
- **Do** vérifier les compositions à trois, deux et une colonnes ainsi que les ancres sous les deux hauteurs d’en-tête.
- **Do** afficher une explication lorsque l’email ou le CV sont absents.

### Don't:

- **Don’t** modifier les tokens racine bleus pour faire évoluer uniquement le portfolio.
- **Don’t** attribuer à Roxane les biographies, langues, disponibilités, passions, produits ou médias personnels de la référence.
- **Don’t** remplacer les captures réelles par des interfaces inventées ni présenter une capture locale comme une démonstration publique.
- **Don’t** ajouter d’ombre aux cartes de projets par défaut ou supprimer les commandes de pause.
- **Don’t** réactiver automatiquement un carrousel après une sélection manuelle ; sa reprise reste une action explicite.
