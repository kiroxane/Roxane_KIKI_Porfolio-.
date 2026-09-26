# Vérification de la première version

## Résultat

La compilation de production React/TypeScript/Vite réussit. La relecture indépendante conclut : **prêt pour livraison du design system**, sans correction matérielle restante relevée. Il ne s'agit pas d'un audit exhaustif de conformité.

| Point | Résultat |
| --- | --- |
| Compilation et types | `npm run build` réussi |
| Contrôle mécanique de l'interface | Aucune alerte du détecteur |
| Guide ordinateur et mobile | Inspecté à 1016 × 900 et 390 × 844 CSS px, sans débordement horizontal |
| Palette | Copie de #294BC6 et message de confirmation vérifiés |
| Typographie | Sélection 700 appliquée au spécimen |
| Boutons | États désactivé et focus vérifiés |
| Champ | Erreur sur email absent/invalide, puis succès avec test@example.com ; traitement local |
| Mouvement | Bascule interactive vérifiée ; alternative `prefers-reduced-motion` présente |
| Ancres | Navigation dans la page et arrivée directe sur les projets de l'aperçu vérifiées |
| CV absent | Bouton désactivé avec explication |
| Export CSS | Lien natif `download`, événement de téléchargement reçu ; réponse locale comparée à la source CSS |
| Console | Aucune erreur ou alerte relevée pendant la vérification |

## Comparaison visuelle

La référence générée est [design-concept.png](design-concept.png). Les captures ont été prises dans le navigateur intégré à Codex et inspectées avec l'outil d'affichage d'images ; aucune substitution par Playwright externe n'a été nécessaire. La largeur de référence de 1016 px a été contrôlée, puis une largeur mobile de 390 px.

Comparaison des éléments suivants : navigation horizontale, hiérarchie et coloration du titre, spécimen Aa sur sauge, palette en cinq surfaces, typographies Manrope/IBM Plex Mono, boutons et champs, angles arrondis et espacement des sections. Le cadrage du spécimen mobile, le décalage des ancres sous la navigation fixe et l'arrivée directe après chargement de l'aperçu ont été corrigés.

La reproduction conserve fidèlement la direction visuelle ; elle n'est pas une duplication pixel à pixel de l'image. Écarts intentionnels : ajout du lien « Rythme », contenu explicatif français adapté, exemples interactifs détaillés, section Composition et aperçu du portfolio. Le bouton de CV de la maquette devient un téléchargement réel des tokens dans le guide ; le CV reste explicitement indisponible dans l'aperçu. Le titre, le texte introductif, l'appel à l'action principal et les trois principes de la maquette sont conservés.

## À fournir à l’issue de la première version

Nom affiché, spécialité, présentation, projets, captures et textes alternatifs, email de contact, PDF du CV. Les éléments démonstratifs sont signalés ; aucun projet ni parcours n'est inventé.

## Mise à jour — photo et harmonisation de la palette

La photo originale IMG_4445 est intégrée à la section « À propos », avec cadrage et correction légère à l'affichage. Une retouche générative a été rejetée après contrôle des détails ; elle n'est pas distribuée. Les quatre nuances actuelles sont Encre, Ivoire, Bleu signature et Brume. La palette et ses surfaces remplacent la sauge de la première version ci-dessus.

Compilation réussie ; image locale 1200 × 1600 chargée ; ancre À propos et absence de débordement horizontal vérifiées à 1320 × 960 et 390 × 844 CSS px. Captures des deux formats inspectées. Le nuancier mobile affiche quatre éléments sur deux colonnes. Contrastes sur brume : encre 13,20:1, texte secondaire 5,09:1, bleu 6,17:1. Console sans erreur pendant ces vérifications.

Le contrôle mécanique signale des tailles typographiques et petits rayons déjà présents dans la première version, partiellement détaillés hors de l'échelle principale du document. Ces avertissements de documentation n'ont pas entraîné de changement de typographie dans cette mise à jour ciblée.

## Mise à jour — six projets GitHub

Les six dépôts fournis sont intégrés dans deux groupes : quatre projets professionnels et deux projets personnels. Les descriptions et technologies ont été rédigées après lecture des dépôts ; les sources et limites sont documentées dans [PROJECTS.md](PROJECTS.md). Aucun lien de démonstration ni capture d’interface non vérifiés n’ont été ajoutés.

- `npm run build` réussi (TypeScript et compilation de production Vite).
- Six cartes présentes, classées en groupes de quatre et deux, sans carte de démonstration dans le portfolio.
- Six liens de code source conformes aux URL fournies, avec ouverture dans un nouvel onglet et `noopener noreferrer`.
- Hiérarchie des titres : section niveau 2, groupes niveau 3, projets niveau 4.
- Navigation vers l’ancre Projets vérifiée ; titre visible sous la barre de navigation.
- Rendus ordinateur 1320 × 960 et mobile 390 × 844 CSS px inspectés dans le navigateur intégré. Deux colonnes sur ordinateur, une sur mobile, aucun débordement horizontal des cartes ou de la page.
- Console sans erreur ni avertissement pendant la vérification.

Les cartes réelles sans capture affichent directement leurs textes et liens. Les prochaines données à fournir sont les captures et leurs textes alternatifs, le nom affiché, la spécialité, la présentation, l’email de contact et le PDF du CV.

## Refonte — référence Serah Abijo

La demande de reproduction fidèle de `serahabijo.com` remplace la direction visuelle précédente pour le portfolio. Le guide initial reste accessible séparément. L'identité confirmée est Roxane KIKI, Développeuse Web Fullstack.

- Compilation TypeScript/Vite réussie après la refonte.
- Deux carrousels utilisant les photos originales : format portrait à l’accueil et grand album en bas de page. Boutons suivant, miniatures et flèche droite au clavier testés ; sélection correcte et arrêt du défilement automatique après une interaction manuelle.
- Prise en compte de `prefers-reduced-motion` vérifiée dans le CSS et la logique `matchMedia` ; aucune préférence système de l’utilisateur n’a été modifiée.
- Filtres « Tous », « Professionnels » et « Personnels » testés : respectivement 6, 4 et 2 projets attendus.
- Six captures d’interfaces réelles réalisées depuis les dépôts lancés localement, puis chargées dans le portfolio. Les backends de Mon Vieux Grimoire et Sophie Bluel n’ont pas été démarrés ; les captures ne valident pas leurs fonctions dynamiques.
- Rendus inspectés à 1320 × 960 et 390 × 844 CSS px. Grille de trois colonnes sur ordinateur et une sur mobile, sans débordement horizontal.
- Hauteur des images corrigée pour conserver les proportions des cartes ; suivi de section active corrigé après redimensionnement. L’ancre du premier écran confirme ensuite « Portfolio » actif.
- Fontes Inter et Playfair Display servies localement et chargées. Logos officiels extraits de Simple Icons, sans chargement de bibliothèque d’icônes complète à l’exécution.
- Contrastes calculés : texte secondaire/fond 5,53:1, bordeaux/fond 7,71:1, blanc/bordeaux 8,22:1, texte de carte/fond 5,84:1 et texte du terminal/fond sombre 9,96:1.
- Détecteur ciblé exécuté une fois sur les nouvelles sources, indépendamment des anciens tokens du guide : aucune alerte. Les ajouts de la galerie suivent la même grammaire, relue visuellement.

Les journaux du navigateur conservent une erreur de développement ancienne liée à l’export `Github`, corrigée par le composant `BrandIcon`. Aucun nouvel échec n’a été relevé après cette correction. L’email et le CV restent à fournir ; les langues, disponibilités, passions, apparitions et produits personnels de la référence ne sont pas attribués à Roxane.

La relecture indépendante a demandé une commande clavier/tactile pour arrêter le ruban de technologies. Une commande pause/reprise a été ajoutée : clic et touche Entrée testés, état `data-paused` et animation calculée contrôlés. Le contrôle disparaît lorsque les animations sont déjà réduites par le système. Une nouvelle capture mobile complète confirme `scrollY = 0`, 390 px de largeur et « Portfolio » actif.

### Verdict de la relecture finale

**Verdict UI : passed.** La correction du ruban est résolue ; aucun problème matériel d’interface restant n’a été relevé dans ce périmètre.

| Point | Verdict |
| --- | --- |
| Pause/reprise accessible du ruban | passed |
| Premier écran mobile | passed |
| Fidélité et fonctionnement relus | passed |
| Problèmes matériels UI relevés | aucun restant |
| Email et CV | open — données utilisateur manquantes, états explicites |

Il s’agit d’une reproduction adaptée aux contenus de Roxane, pas d’une copie strictement identique : la navigation, les filtres, les contenus disponibles et les informations de contact diffèrent de la référence.

## Retour à la palette initiale

À la demande de Roxane, la palette ivoire/encre/bleu/brume est restaurée sur la composition existante. Le portfolio hérite à nouveau directement des couleurs de `src/styles/tokens.css` ; ses typographies Inter/Playfair Display, ses dimensions, ses contenus et ses deux carrousels restent en place. Les teintes bordeaux/rosées écrites en dur ont été remplacées par les rôles de couleur du système. Les photographies et les couleurs officielles des logos sont conservées.

Compilation TypeScript/Vite réussie. Valeurs calculées vérifiées dans le navigateur : fond #F7F8F5, encre #202623, bleu #294BC6, brume #E8EDFF ; six cartes et deux carrousels présents. Contrastes calculés : texte/fond 14,45:1, texte secondaire/fond 5,58:1, texte secondaire/brume 5,09:1, bleu/brume 6,17:1, blanc/bleu 7,20:1 et brume/encre 13,20:1.

Contrôle visuel ciblé : premier écran et grille des projets sur ordinateur ; premier écran mobile contrôlé à 325 px sans débordement horizontal. Les couleurs calculées et les familles de caractères confirment la restauration de la palette sans changement de typographie.


## Animations de la référence — carrousels

`npm run typecheck` réussi après le remplacement du fondu seul par le glissement du portrait, la pile manuelle de l’album et la correction de reprise au clavier. Compilation de production `npm run build` également réussie.


Contrôle ciblé des animations dans le navigateur intégré (ordinateur 1164 × 818 et mobile 390 × 844) : page Roxane identifiée, contenu complet, aucun écran d’erreur ni avertissement/erreur console dans l’onglet de test. Palette #F7F8F5 / #294BC6 conservée.

| Référence observée | Résultat local vérifié |
| --- | --- |
| Liens sociaux entrant avec décalage | Animation CSS 300 ms, décalage 100 ms ; pas de révélation ajoutée aux sections statiques. |
| Icône de compétence pivotante et blocs de projets rebondissants | Transforms calculés animés ; pause confirmée hors écran. |
| Carte de projet surélevée et image zoomée | Survol réel : translateY −3 px, image scale 1,05. |
| Portrait glissant et fondu | Capture en transition : deux photos avec translations/opacités intermédiaires ; reprise clavier et progression automatique confirmées. |
| Album en pile, sortie avec rotation | État arrière translateY 12 px / scale 0,95 ; sortie latérale et rotation observées. |
| Drag et clavier | Geste court conserve la photo 2 ; geste long passe à la photo 1 ; flèche droite au clavier revient à la photo 2. |
| Animations secondaires | Points du contact mobiles ; titre terminal complet à la fin de la frappe. |
| Mobile | Compétences et pile vérifiées ; aucune largeur débordante, y compris pendant la sortie de carte. |

Préférence de mouvement réduit : branche React et règles CSS relues ; l’émulation native de cette préférence n’est pas proposée par le navigateur de test, elle n’a donc pas été exercée dans celui-ci. Les gestes tactiles partagent Pointer Events avec le drag testé à la souris ; aucun appareil tactile physique n’a été utilisé. Le système de ressort de la référence est approché par une courbe CSS ; les photos et les technologies restent celles de Roxane.

## Retrait de la page de design system

À la demande de Roxane, la page de guide est supprimée et le portfolio devient l’unique surface, servie à `/`. Fichiers retirés : `src/pages/DesignSystem.tsx`, `src/components/ui.tsx`, `src/styles/showcase.css`, `src/styles/components.css`, ainsi que l’export `demoProject` de `src/data/portfolio.ts`. `App.tsx` rend directement le portfolio, sans lecture du paramètre `preview` ni chargement différé. Le lien « Design system » du pied de page est remplacé par l’ancre « À propos ».

Nettoyages associés : `global.css` ne conserve que la base partagée, la dépendance `@fontsource-variable/manrope` et son import sont retirés, `tokens.css` est réduit aux couleurs et polices employées par le portfolio, `--font-sans` passe à Inter, le `scroll-margin-top` de `main[id]` est scopé sous `.portfolio-preview`, et `index.html` porte désormais le titre et la description du portfolio. IBM Plex Mono est conservé : le titre « La vie hors du terminal » et le compteur de l’album l’utilisent.

- `npm run typecheck` et `npm run build` réussis après le retrait ; `npm install` a resynchronisé `package-lock.json`.
- Sortie de compilation contrôlée : plus aucune fonte Manrope dans `dist/assets/`, et aucune classe du guide (`swatch`, `font-specimen`, `button-stage`, `ds-section`) dans le CSS produit.
- Couverture typographique relue règle par règle : les tailles de `h1`, `h2` et `h3`, y compris celles du pied de page, des compétences, des cartes et de l’encart de contact, sont définies sous `.portfolio-preview` et ne dépendaient donc pas des règles globales supprimées.
- `npm run preview` sert la page ; le document servi porte le nouveau titre et référence le seul bundle du portfolio.

**Limite de cette vérification :** aucun contrôle visuel en navigateur n’a été effectué pour ce retrait, l’outil de navigation n’étant pas disponible pendant l’intervention. Les contrôles ci-dessus sont statiques et de compilation. Un passage visuel sur ordinateur et mobile reste à faire pour confirmer le rendu.

## Deux photos ajoutées à « En dehors du code »

À la demande de Roxane, l’album ne reprend plus les portraits AWS Summit : il présente deux photos d’ambiance, une salle d’escalade et une conférence à ITIC Paris. Le carrousel de l’accueil, la section « À propos » et le pied de page conservent les portraits AWS Summit, inchangés.

- La liste `photos` de `src/pages/PortfolioPreview.tsx` est scindée en `heroPhotos` et `storyPhotos` ; les quatre usages ont été repris, y compris l’avatar du pied de page.
- `PhotoCarousel.tsx` affichait « Souvenir de l’AWS Summit. » en dur sous chaque légende de l’album. Ce texte devient le champ `description` de `CarouselPhoto`, propre à chaque photo ; sans lui, les nouvelles images auraient porté une légende fausse.
- Préparation des fichiers : bandes noires de 226 px mesurées par analyse de luminosité puis retirées, fenêtre 3:4 prélevée, sortie JPEG 1200 × 1600 correspondant aux attributs `width`/`height` du composant. Détails et décalages dans [PHOTO.md](PHOTO.md).
- `npm run build` réussi ; `dist/photos/` contient les quatre fichiers ; aucune référence résiduelle à l’ancienne variable `photos`.
- Recadrages contrôlés à l’image : la personne est entière dans la photo d’escalade ; l’écran ITIC Paris, les deux intervenants et le public sont présents dans la photo de conférence.

**Limites :** aucun contrôle en navigateur n’a été effectué pour cet ajout, l’outil de navigation n’étant pas disponible. Le rendu de l’album, la pile, le glissement et le compteur « 01 — 02 » restent à vérifier visuellement. Les légendes et descriptions proposées ne sont pas confirmées par Roxane. Les textes alternatifs décrivent la scène sans affirmer l’identité des personnes.

## Email, page CV et PDF

Roxane a fourni son adresse `kiroxane@gmail.com`, sa formation, son alternance, ses langues et ses centres d’intérêt, puis a demandé une page CV reprenant celle de la référence tout en conservant sa charte. Les couleurs de la référence n’ont pas été reprises.

- Contact : l’adresse est renseignée dans `portfolioContent`. Le lien `mailto:` et le bouton de copie sont actifs ; les mentions « Adresse email à ajouter » ont disparu. Valeur retrouvée une fois dans le bundle compilé.
- Page `/cv` : nouvelle surface servie par `App.tsx` selon `window.location.pathname`. Le bouton « Voir CV » de l’en-tête et le lien « Mon CV » du pied de page y mènent. `curl` sur `/cv` renvoie 200 depuis `vite preview`.
- PDF : `public/cv.pdf` est la page `/cv` rendue en A4 par la feuille de style d’impression, via `npm run cv:pdf`. Résultat contrôlé à l’image : **une page**, 410 Ko, toutes les sections présentes.
- Mise en page d’impression corrigée deux fois : les règles mobiles s’appliquaient au rendu PDF, d’où un bandeau empilé et des pastilles de dates mal placées ; le bloc `@media print` a été déplacé en fin de fichier pour les annuler. La section Projets basculait entière en page 2 à cause d’un `break-inside: avoid` trop large, remplacé par `auto` sur la section et conservé sur les cartes. Langues et Centres d’intérêt sont placés côte à côte à l’impression pour tenir sur une page.
- Portrait du CV : carré 800 × 800 tiré du portrait posé fourni, distinct des photos du portfolio. Recadrage contrôlé à l’image.
- Déduplication : les résumés courts des projets, jusque-là écrits en dur dans `PortfolioPreview.tsx`, sont devenus le champ `summary` de chaque projet et servent aux deux pages.
- `npm run typecheck` et `npm run build` réussis après chaque étape.

**Contrôle du responsive.** Une capture directe à `--window-size=390` laissait croire à un débordement horizontal de la page CV. Vérification faite, le viewport de Chrome headless ne correspondait pas à la largeur demandée et l’image était simplement rognée. Une page de mesure temporaire, chargeant `/cv` dans une iframe de 390 px et parcourant le DOM, a donné `scrollWidth = 390` pour un viewport de 390 et aucun élément débordant. La page mobile a ensuite été recapturée à travers cette iframe calibrée, sans défaut. Le fichier de mesure a été supprimé.

## Référencement

Mise en place demandée par Roxane. L'état de départ se limitait au `lang`, au titre et à une description ; ni Open Graph, ni canonique, ni `robots.txt`, ni `sitemap.xml`, ni données structurées.

- Adresse publique centralisée dans `.env` (`VITE_SITE_URL`), injectée dans `index.html` par Vite et lue par `src/data/seo.ts`. Valeur : `https://roxane-kiki-porfolio.vercel.app` (hébergement Vercel), qui remplace la valeur provisoire Netlify.
- `index.html` : titre, description, `author`, `robots`, canonique, Open Graph complet, carte Twitter `summary_large_image`, favicon et bloc JSON-LD `Person` avec profils, formation, langues et compétences.
- `src/data/seo.ts` met à jour titre, description, canonique et Open Graph au passage entre `/` et `/cv`.
- `public/og-image.png` : 1200 × 630, 249 Ko, généré depuis `scripts/og-image.html` par Chrome, dans la charte du site. Rendu contrôlé à l'image.
- `robots.txt` et `sitemap.xml` générés par `scripts/build-seo.mjs`, branché sur `npm run build`.
- `public/_redirects` et `vercel.json` ajoutés pour que `/cv` réponde sur un hébergeur statique.
- Le commentaire de conception laissé dans `index.html` a été retiré. Il était servi en production et mentionnait la reproduction de `serahabijo.com` : visible par quiconque affiche le code source de la page.

Vérifications : `npm run typecheck` et `npm run build` réussis ; plus aucun `%VITE_SITE_URL%` dans `dist/index.html` ; canonique, `og:url` et `og:image` en absolu ; JSON-LD relu par un analyseur JSON, type `Person` et deux profils `sameAs` ; `robots.txt` et `sitemap.xml` présents dans `dist/` avec les deux routes.

**Limites :** aucun test avec les validateurs en ligne de LinkedIn, Facebook ou Google, le site n'étant pas déployé. Les balises ne seront réellement exploitables qu'une fois l'adresse définitive renseignée. Le rendu reste côté navigateur : le HTML servi ne contient pas le contenu des pages.

## Profils GitHub et LinkedIn

Roxane a demandé l'ajout de ses profils. GitHub était déjà présent ; LinkedIn a été ajouté et les deux URL sont passées dans `portfolioContent` (`githubUrl`, `linkedinUrl`) plutôt qu'écrites en dur.

- Portfolio : LinkedIn ajouté aux liens de l'accueil, à ceux de la section Contact et à la colonne Contact du pied de page, à côté de GitHub.
- CV : LinkedIn ajouté au bandeau de coordonnées, entre GitHub et Portfolio.
- Le logo officiel de LinkedIn n'est pas utilisé. La marque l'a fait retirer de Simple Icons comme de Lucide ; aucune des deux bibliothèques du projet ne le fournit, et il n'a pas été redessiné. L'entrée porte l'icône neutre `ContactRound` de Lucide et le libellé « LinkedIn ». GitHub conserve son logo officiel, toujours disponible dans Simple Icons.
- La ligne supplémentaire faisait passer le PDF à deux pages. Les coordonnées passent à trois colonnes à l'impression : retour à une page, 412 Ko.
- `npm run typecheck` et `npm run build` réussis ; l'URL LinkedIn est présente une fois dans le bundle ; accueil et PDF contrôlés à l'image.

**Limites :** les contrôles sont automatisés, par capture et par mesure du DOM ; aucune relecture humaine du rendu n’a eu lieu. Le descriptif des missions du poste de manager adjoint est une proposition. La cohérence des dates a été signalée à Roxane, qui a confirmé 2024-2025. Sur un hébergeur statique, la route `/cv` exige une redirection des URL inconnues vers `index.html` ; ce point n’a pas été testé hors de `vite preview`.
