

# Folio — Portfolio de Roxane KIKI

Portfolio monopage de **Roxane KIKI — Développeuse Web Fullstack**, réalisé avec React, TypeScript et Vite. Nous sommes sur un fond ivoire, accents bleu signature, titres Playfair Display, texte Inter et carrousels photo. La palette précédente ivoire, encre et bleu signature a été restaurée à sa demande, tout en conservant la composition, Inter, Playfair Display et les carrousels. La page de guide du design system a été retirée du projet.

## Démarrer

Node.js `^20.19.0` ou `>=22.12.0`, avec npm.

```sh
npm ci
npm run dev
```

Ouvrir l’URL locale indiquée par Vite :

- `/` : le portfolio, avec navigation vers l’accueil, les compétences, les projets, la présentation et le contact.
- `/cv` : le CV en ligne — identité, profil, stack, expérience, projets, formation, langues et centres d’intérêt.

```sh
npm run typecheck
npm run build
npm run preview
```

La compilation produit `dist/`. Le serveur de prévisualisation sert cette version compilée.

Le PDF téléchargeable est cette même page `/cv`, rendue en A4 par la feuille de style d’impression de `src/styles/cv.css`. Le régénérer après toute modification du contenu :

```sh
npm run cv:pdf
```

La commande compile le site, le sert localement et convertit `/cv` en `public/cv.pdf` avec Google Chrome. Elle s’arrête avec un message explicite si Chrome est absent.

## Référencement

`.env` contient `VITE_SITE_URL`, l'adresse publique du site. **C'est le seul endroit à modifier au déploiement** : l'URL canonique, les aperçus de partage, les données structurées, `robots.txt` et `sitemap.xml` en découlent. Après changement, relancer `npm run build`.

- `index.html` porte en dur le titre, la description, les balises Open Graph et Twitter, et un bloc de données structurées `Person`. Ces valeurs doivent rester statiques : les robots de LinkedIn, WhatsApp et Slack n'exécutent pas le JavaScript.
- `src/data/seo.ts` corrige titre, description et URL canonique lors de la navigation entre `/` et `/cv`.
- `public/og-image.png` est l'image d'aperçu des partages, en 1200 × 630. La régénérer depuis `scripts/og-image.html` après un changement de nom, d'intitulé ou de portrait.
- `robots.txt` et `sitemap.xml` sont générés à chaque build par `scripts/build-seo.mjs`. Ajouter toute nouvelle route dans son tableau `pages`.
- `public/_redirects` (Netlify) et `vercel.json` (Vercel) renvoient les URL inconnues vers `index.html`, nécessaire pour servir `/cv`.

Limite connue : le site est rendu côté navigateur. Google exécute le JavaScript et indexe le contenu, mais le HTML servi ne contient que les métadonnées. Un rendu statique au build améliorerait ce point si le besoin se confirme.

Hébergement : `/cv` est une route côté client. Sur un hébergeur statique, rediriger les URL inconnues vers `index.html` — `_redirects` sur Netlify, `vercel.json` sur Vercel, une copie de `index.html` en `404.html` sur GitHub Pages.

## Personnaliser

- `src/data/portfolio.ts` : identité, présentation, email, `cvUrl` et six projets, chacun avec sa description longue et son résumé court.
- `src/data/cv.ts` : contenu propre au CV — profil, stack, expérience, formation, langues et centres d’intérêt.
- `src/pages/Cv.tsx` et `src/styles/cv.css` : page CV et sa version imprimable.
- `src/pages/PortfolioPreview.tsx` : composition du portfolio, filtres de projets, photos et résumés affichés.
- `src/components/PhotoCarousel.tsx` : carrousels de l’accueil et de la section « En dehors du code ».
- `src/styles/portfolio.css` : usages de la palette commune héritée de `tokens.css`, Inter/Playfair Display et mise en page du portfolio.
- `src/styles/tokens.css` et `src/styles/global.css` : couleurs, polices et base commune aux deux pages.
- [DESIGN.md](DESIGN.md), [PRODUCT.md](PRODUCT.md) et [docs/DIRECTION.md](docs/DIRECTION.md) : règles et décisions documentées. [docs/INITIAL-DESIGN.md](docs/INITIAL-DESIGN.md) archive le guide retiré et ne décrit plus de code en place.
- [docs/CONTENT.md](docs/CONTENT.md) : contenu et ressources ; [docs/PROJECTS.md](docs/PROJECTS.md) : sources et limites des six projets ; [docs/PHOTO.md](docs/PHOTO.md) : provenance des portraits.

Les polices sont servies localement via Fontsource. `DESIGN.md` et `.impeccable/design.json` sont descriptifs ; ils ne génèrent pas les styles.

## État du contenu

Le nom et l’intitulé ont été confirmés par Roxane. Les textes de présentation sont des propositions rédigées à partir de ses projets, sans parcours ni expérience supplémentaires inventés. Les deux photos originales fournies, IMG_4445 et IMG_4444, sont utilisées dans deux carrousels avec miniatures, flèches, lecture/pause et navigation tactile ou clavier. Elles sont diffusées en JPEG dans `public/photos/` ; les originaux ne sont pas modifiés.

Les six dépôts sont intégrés avec les filtres « Tous », « Professionnels » et « Personnels » : Mon Vieux Grimoire, Kasa, Nina Carducci, Sophie Bluel, To-do list et Social. Leurs aperçus sont de vraies captures de rendus locaux, stockées dans `public/projects/*.png`. Ce ne sont pas des démonstrations publiques ni une validation complète du fonctionnement des applications. Mon Vieux Grimoire montre le frontend fourni sans backend actif ; Sophie Bluel montre l’interface sans API active. Les liens des cartes ouvrent les dépôts GitHub.

L’adresse de contact `kiroxane@gmail.com` et le CV ont été fournis par Roxane. Le contact par email et le téléchargement du CV sont actifs. Aucun backend ni envoi de message n’est implémenté : le contact repose sur un lien `mailto:` et un bouton de copie.

Le CV reprend la formation, l’alternance, les langues et les centres d’intérêt communiqués par Roxane, ainsi que le profil et les projets déjà présents dans le portfolio. Son portrait posé, `public/photos/portrait-cv.jpg`, est distinct des photos du portfolio.
