# Folio — Portfolio de Roxane KIKI

Portfolio monopage de **Roxane KIKI — Développeuse Web Fullstack**, réalisé avec React, TypeScript et Vite. À la demande explicite de Roxane, sa présentation reprend la référence [Serah Abijo](https://www.serahabijo.com/) : fond ivoire, accents bleu signature, titres Playfair Display, texte Inter et carrousels photo. La palette précédente ivoire, encre et bleu signature a été restaurée à sa demande, tout en conservant la composition, Inter, Playfair Display et les carrousels. La page de guide du design system « Folio » a été retirée du projet ; le portfolio en est la seule surface.

## Démarrer

Node.js `^20.19.0` ou `>=22.12.0`, avec npm.

```sh
npm ci
npm run dev
```

Ouvrir l’URL locale indiquée par Vite. L’unique page `/` affiche le portfolio de Roxane, avec navigation vers l’accueil, les compétences, les projets, la présentation et le contact.

```sh
npm run typecheck
npm run build
npm run preview
```

La compilation produit `dist/`. Le serveur de prévisualisation sert cette version compilée.

## Personnaliser

- `src/data/portfolio.ts` : identité, présentation, email, `cvUrl` et six projets.
- `src/pages/PortfolioPreview.tsx` : composition du portfolio, filtres de projets, photos et résumés affichés.
- `src/components/PhotoCarousel.tsx` : carrousels de l’accueil et de la section « En dehors du code ».
- `src/styles/portfolio.css` : usages de la palette commune héritée de `tokens.css`, Inter/Playfair Display et mise en page du portfolio.
- `src/styles/tokens.css` et `src/styles/global.css` : couleurs, polices et base commune de la page.
- [DESIGN.md](DESIGN.md), [PRODUCT.md](PRODUCT.md) et [docs/DIRECTION.md](docs/DIRECTION.md) : règles et décisions documentées. [docs/INITIAL-DESIGN.md](docs/INITIAL-DESIGN.md) archive le guide retiré et ne décrit plus de code en place.
- [docs/CONTENT.md](docs/CONTENT.md) : contenu et ressources ; [docs/PROJECTS.md](docs/PROJECTS.md) : sources et limites des six projets ; [docs/PHOTO.md](docs/PHOTO.md) : provenance des portraits.

Les polices sont servies localement via Fontsource. `DESIGN.md` et `.impeccable/design.json` sont descriptifs ; ils ne génèrent pas les styles.

## État du contenu

Le nom et l’intitulé ont été confirmés par Roxane. Les textes de présentation sont des propositions rédigées à partir de ses projets, sans parcours ni expérience supplémentaires inventés. Les deux photos originales fournies, IMG_4445 et IMG_4444, sont utilisées dans deux carrousels avec miniatures, flèches, lecture/pause et navigation tactile ou clavier. Elles sont diffusées en JPEG dans `public/photos/` ; les originaux ne sont pas modifiés.

Les six dépôts sont intégrés avec les filtres « Tous », « Professionnels » et « Personnels » : Mon Vieux Grimoire, Kasa, Nina Carducci, Sophie Bluel, To-do list et Social. Leurs aperçus sont de vraies captures de rendus locaux, stockées dans `public/projects/*.png`. Ce ne sont pas des démonstrations publiques ni une validation complète du fonctionnement des applications. Mon Vieux Grimoire montre le frontend fourni sans backend actif ; Sophie Bluel montre l’interface sans API active. Les liens des cartes ouvrent les dépôts GitHub.

L’adresse email et le CV restent à fournir. Le contact par email et le téléchargement restent indisponibles tant que leurs données réelles ne sont pas renseignées. Ajouter le PDF dans `public/`, puis renseigner `cvUrl`. Aucun backend ni envoi de message n’est implémenté.
