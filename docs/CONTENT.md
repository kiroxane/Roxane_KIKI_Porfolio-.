# Contenu du portfolio

Les informations principales sont centralisées dans `src/data/portfolio.ts`. **Roxane KIKI** et **Développeuse Web Fullstack** sont les libellés confirmés par l’utilisatrice. Les six projets, leurs captures locales et les photos fournies sont intégrés. L’adresse email, les profils GitHub et LinkedIn et le CV sont renseignés.

Le portfolio, servi à `/`, adopte la référence Serah Abijo choisie explicitement par Roxane, avec Inter, Playfair Display et la palette ivoire, encre et bleu signature. La page de guide du design system a été retirée du projet, avec son spécimen « Exemple de projet » qui n’était pas une réalisation réelle.

## Présentation et contact

Champs de `portfolioContent` :

- `name` : nom confirmé, « Roxane KIKI ».
- `role` : intitulé confirmé, « Développeuse Web Fullstack ».
- `introduction` : courte présentation ; la proposition actuelle s’appuie sur les projets frontend et backend.
- `about` : présentation proposée à partir des projets de formation et personnels. Aucun employeur, diplôme, nombre d’années d’expérience ou résultat chiffré n’est ajouté.
- `portrait` : informations du portrait principal, avec `src`, `alt`, dimensions intrinsèques `width`/`height` et `caption` facultative.
- `email` : adresse de contact réelle, sans préfixe `mailto:`. Renseignée : `kiroxane@gmail.com`.
- `githubUrl` et `linkedinUrl` : profils publics réels, fournis par Roxane. Les deux pages les lisent depuis ce fichier ;
  aucune URL n'est écrite en dur dans les composants.
- `cvUrl` : chemin du CV réel. Renseigné : `/cv.pdf`, régénéré par `npm run cv:pdf`.
- `summary` de chaque projet : résumé court affiché par les cartes du portfolio et du CV ; `description` reste le texte long.

Deux listes de `src/pages/PortfolioPreview.tsx` fournissent les images, textes alternatifs et légendes des carrousels : `heroPhotos` pour les deux portraits AWS Summit de l’accueil, `storyPhotos` pour les deux photos d’ambiance de « En dehors du code ». Les entrées de `storyPhotos` portent en plus une `description`, affichée sous la légende de l’album ; ce texte était auparavant écrit en dur dans `PhotoCarousel.tsx`. Le portrait principal est aussi affiché dans la présentation et dans le pied de page. Voir [PHOTO.md](PHOTO.md) pour la provenance et les conversions.

Ne pas ajouter de fausse adresse, de faux lien ou de document temporaire présenté comme un CV. Les champs facultatifs restent absents jusqu’à réception du contenu.

## CV

`src/data/cv.ts` porte le contenu propre au CV : portrait posé, profil, stack, expérience, formation, langues et centres d’intérêt. L’identité et les six projets viennent de `portfolioContent` ; le CV ne duplique pas ces données.

Faits communiqués par Roxane : BTS Management Commercial Opérationnel à ITIC Paris, en alternance chez Maisons du Monde comme manager adjoint, 2024-2025 ; parcours Développeur Web chez OpenClassrooms de février à septembre 2026 ; Île-de-France, mobile sur toute la région ; français langue maternelle et anglais notions ; recherche d’un CDI, disponible immédiatement ; centres d’intérêt sport, neurosciences et éloquence.

Roxane avait d’abord situé le BTS en 2023-2024, puis confirmé 2024-2025 pour la formation comme pour l’alternance. Le descriptif des missions du poste est une proposition rédigée à partir de l’intitulé ; il n’a pas été dicté. Le nom de l’enseigne est orthographié « Maisons du Monde » et le poste « Manager adjoint ».

La page `/cv` et le PDF téléchargeable partagent cette source et cette mise en page : le PDF est la page rendue en A4 par la feuille de style d’impression de `src/styles/cv.css`. Toute modification du contenu impose de relancer `npm run cv:pdf`, sans quoi le PDF diffère de la page.

## Projets

Chaque entrée de `portfolioContent.projects` comporte :

| Champ | Contenu attendu |
| --- | --- |
| `id` | Identifiant unique et stable. |
| `title` | Nom réel du projet. |
| `description` | Objectif et contribution, d’après le dépôt. |
| `category` | `professional` ou `personal`, selon le classement fourni. |
| `context` | Contexte bref, par exemple « Développement backend · OpenClassrooms ». |
| `technologies` | Technologies effectivement utilisées. |
| `imageSrc` | Chemin de la capture réelle. |
| `imageAlt` | Description informative du contenu visible. |
| `projectUrl` | URL publique de démonstration, seulement lorsqu’elle est vérifiée. |
| `sourceUrl` | URL publique du code source. |

Les cartes du portfolio et du CV utilisent le champ `summary` de chaque projet, avec `description` comme repli. Ces résumés étaient auparavant écrits en dur dans `PortfolioPreview.tsx` ; ils vivent désormais avec les données, en un seul endroit. Les filtres conservent le classement fourni : quatre projets professionnels et deux personnels ; ce classement n’affirme pas qu’il s’agit de missions client.

Les six entrées possèdent une capture dans `public/projects/` et un `sourceUrl`. Aucun lien de démonstration publique n’est ajouté. Les captures proviennent des applications servies localement pour documenter leur rendu : elles ne prouvent pas le fonctionnement d’un backend ni la validation de tous les parcours. Voir [PROJECTS.md](PROJECTS.md) pour le périmètre vérifié et les limites, notamment Mon Vieux Grimoire et Sophie Bluel sans API active.

Les champs `category`, `context`, les captures et les liens restent facultatifs dans le type `Project`. Omettre les données manquantes plutôt que renseigner `#` ou une URL fictive. Une carte sans `imageSrc` n’affiche pas d’image de remplacement.

## Captures et fichiers locaux

Placer les ressources dans `public/`. Un fichier `public/projects/nom-du-projet.png` est référencé par `imageSrc: '/projects/nom-du-projet.png'`.

Privilégier une capture nette au format paysage, en WebP, JPEG ou PNG, montrant une fonction ou une vue réelle du projet. Ajouter un texte alternatif utile, par exemple « Accueil Kasa avec sa bannière et les photographies des logements ».

Pour le CV, ajouter le PDF à `public/cv.pdf`, puis renseigner `cvUrl: '/cv.pdf'`. Le chemin doit correspondre exactement au fichier ajouté. Activer le téléchargement seulement lorsque ce document réel est présent.

## Avant publication

Relire les textes de présentation et le descriptif des missions de l’alternance, vérifier les liens GitHub et LinkedIn ainsi que le téléchargement du CV, régénérer le PDF avec `npm run cv:pdf` après toute modification du contenu, puis contrôler les captures et les carrousels sur mobile. Les aperçus locaux des projets ne sont pas des sites déployés et ne doivent pas être proposés comme démonstrations publiques.
