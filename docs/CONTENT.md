# Contenu du portfolio

Les informations principales sont centralisées dans `src/data/portfolio.ts`. **Roxane KIKI** et **Développeuse Web Fullstack** sont les libellés confirmés par l’utilisatrice. Les six projets, leurs captures locales et les deux photos fournies sont intégrés. L’adresse email et le CV restent à compléter.

Le portfolio, servi à `/`, adopte la référence Serah Abijo choisie explicitement par Roxane, avec Inter, Playfair Display et la palette ivoire, encre et bleu signature. La page de guide du design system a été retirée du projet, avec son spécimen « Exemple de projet » qui n’était pas une réalisation réelle.

## Présentation et contact

Champs de `portfolioContent` :

- `name` : nom confirmé, « Roxane KIKI ».
- `role` : intitulé confirmé, « Développeuse Web Fullstack ».
- `introduction` : courte présentation ; la proposition actuelle s’appuie sur les projets frontend et backend.
- `about` : présentation proposée à partir des projets de formation et personnels. Aucun employeur, diplôme, nombre d’années d’expérience ou résultat chiffré n’est ajouté.
- `portrait` : informations du portrait principal, avec `src`, `alt`, dimensions intrinsèques `width`/`height` et `caption` facultative.
- `email` : adresse de contact réelle, sans préfixe `mailto:` ; actuellement absente.
- `cvUrl` : chemin du CV réel ; actuellement absent.

Deux listes de `src/pages/PortfolioPreview.tsx` fournissent les images, textes alternatifs et légendes des carrousels : `heroPhotos` pour les deux portraits AWS Summit de l’accueil, `storyPhotos` pour les deux photos d’ambiance de « En dehors du code ». Les entrées de `storyPhotos` portent en plus une `description`, affichée sous la légende de l’album ; ce texte était auparavant écrit en dur dans `PhotoCarousel.tsx`. Le portrait principal est aussi affiché dans la présentation et dans le pied de page. Voir [PHOTO.md](PHOTO.md) pour la provenance et les conversions.

Ne pas ajouter de fausse adresse, de faux lien ou de document temporaire présenté comme un CV. Les champs facultatifs restent absents jusqu’à réception du contenu.

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

Les cartes du portfolio utilisent des résumés courts définis dans `summaries`, dans `src/pages/PortfolioPreview.tsx`, et les descriptions de données comme repli. Garder ces textes cohérents lors d’une modification. Les filtres conservent le classement fourni : quatre projets professionnels et deux personnels ; ce classement n’affirme pas qu’il s’agit de missions client.

Les six entrées possèdent une capture dans `public/projects/` et un `sourceUrl`. Aucun lien de démonstration publique n’est ajouté. Les captures proviennent des applications servies localement pour documenter leur rendu : elles ne prouvent pas le fonctionnement d’un backend ni la validation de tous les parcours. Voir [PROJECTS.md](PROJECTS.md) pour le périmètre vérifié et les limites, notamment Mon Vieux Grimoire et Sophie Bluel sans API active.

Les champs `category`, `context`, les captures et les liens restent facultatifs dans le type `Project`. Omettre les données manquantes plutôt que renseigner `#` ou une URL fictive. Une carte sans `imageSrc` n’affiche pas d’image de remplacement.

## Captures et fichiers locaux

Placer les ressources dans `public/`. Un fichier `public/projects/nom-du-projet.png` est référencé par `imageSrc: '/projects/nom-du-projet.png'`.

Privilégier une capture nette au format paysage, en WebP, JPEG ou PNG, montrant une fonction ou une vue réelle du projet. Ajouter un texte alternatif utile, par exemple « Accueil Kasa avec sa bannière et les photographies des logements ».

Pour le CV, ajouter le PDF à `public/cv.pdf`, puis renseigner `cvUrl: '/cv.pdf'`. Le chemin doit correspondre exactement au fichier ajouté. Activer le téléchargement seulement lorsque ce document réel est présent.

## Avant publication

Compléter l’email et le CV, relire les textes de présentation, vérifier les liens GitHub et le téléchargement, puis contrôler les captures et les carrousels sur mobile. Les aperçus locaux des projets ne sont pas des sites déployés et ne doivent pas être proposés comme démonstrations publiques.
