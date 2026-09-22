# Sources des projets du portfolio

Les six projets ont été classés par Roxane en professionnels et personnels. Ce classement ne permet pas d’affirmer qu’ils correspondent à des missions client. Les descriptions dans `src/data/portfolio.ts` reposent sur une lecture des dépôts. Lors de cette première vérification, les applications n’avaient pas été exécutées.

Pour la refonte demandée d’après le site de Serah Abijo, les projets ont ensuite été servis localement afin de capturer leur rendu réel. Ces captures sont intégrées au portfolio ; elles ne constituent ni des démonstrations publiques ni une validation complète des parcours. Seuls les liens de code source sont proposés. Les limites de l’audit initial ci-dessous restent applicables.

## Captures locales ajoutées

| Projet | Fichier dans `public/projects/` | Périmètre de la capture |
| --- | --- | --- |
| Mon Vieux Grimoire | `mon-vieux-grimoire.png` | Accueil du frontend fourni avec le projet, sans backend ni API active. La contribution présentée reste le backend. |
| Kasa | `kasa.png` | Accueil de l’application React lancée avec Vite en local. |
| Nina Carducci | `nina-carducci.png` | Page du portfolio servie localement. |
| Sophie Bluel | `sophie-bluel.png` | Partie statique de l’interface, sans API active. |
| To-do list | `to-do-list.png` | Interface locale du prototype avec deux tâches ; les limites fonctionnelles ci-dessous restent documentées. |
| Social | `social.png` | Interface HTML/CSS statique servie localement. |

Les PNG sont des captures du navigateur, pas des visuels générés ni des maquettes inventées. Les cinq premières dimensions, hors To-do list, sont de 1150 × 647 px ; To-do list mesure 1164 × 655 px. Aucun déploiement des dépôts n’a été effectué. Les fichiers sources et leur historique GitHub ne sont pas modifiés par leur intégration au portfolio.

## Projets professionnels

### Mon Vieux Grimoire

[Dépôt Projet_6_Openclassroom](https://github.com/kiroxane/Projet_6_Openclassroom)

- **Périmètre retenu :** API REST de partage et de notation de livres, authentification, gestion des ouvrages, classement des meilleures notes et optimisation des images en WebP.
- **Technologies :** Node.js, Express, MongoDB, JWT et Sharp.
- **Preuves :** [README backend](https://github.com/kiroxane/Projet_6_Openclassroom/blob/master/backend/README.md), [contrôleur des livres](https://github.com/kiroxane/Projet_6_Openclassroom/blob/master/backend/controllers/books.js), [authentification](https://github.com/kiroxane/Projet_6_Openclassroom/blob/master/backend/controllers/auth.js), [optimisation des images](https://github.com/kiroxane/Projet_6_Openclassroom/blob/master/backend/middleware/optimize-image.js).
- **Limites :** la présentation porte sur le backend. Le frontend React présent dans le dépôt ne suffit pas à établir une contribution personnelle à cette partie. Le nom du dépôt fournit le contexte OpenClassrooms. Aucune démo publique déclarée dans les métadonnées ; le lancement nécessite une configuration MongoDB et JWT.

### Kasa

[Dépôt Project-5-Openclassroom](https://github.com/kiroxane/Project-5-Openclassroom)

- **Périmètre retenu :** interface de catalogue et de fiches de logements, carrousel, sections dépliables, routage et adaptation mobile.
- **Technologies :** React, React Router, JavaScript, Sass et Vite.
- **Preuves :** [fiche logement](https://github.com/kiroxane/Project-5-Openclassroom/blob/master/src/pages/Logement/Logement.jsx), [routes](https://github.com/kiroxane/Project-5-Openclassroom/blob/master/src/App.jsx), [styles responsive](https://github.com/kiroxane/Project-5-Openclassroom/blob/master/src/pages/Logement/Logement.scss), [dépendances](https://github.com/kiroxane/Project-5-Openclassroom/blob/master/package.json).
- **Limites :** les annonces proviennent d’un fichier JSON local. Aucune réservation, paiement ou gestion backend n’est revendiqué. Le contexte OpenClassrooms figure dans le nom du dépôt et du package. Aucune démo publique déclarée dans les métadonnées.

### Nina Carducci

[Dépôt Project-3](https://github.com/kiroxane/Project-3)

- **Périmètre retenu :** optimisation d’un portfolio de photographe, images WebP, chargement différé, CSS allégé, métadonnées SEO, galerie filtrable et visionneuse.
- **Technologies :** HTML, CSS, JavaScript, Bootstrap et SEO.
- **Preuves :** [page et métadonnées](https://github.com/kiroxane/Project-3/blob/master/index.html), [configuration PurgeCSS](https://github.com/kiroxane/Project-3/blob/master/purgecss.config.js), [scripts de galerie](https://github.com/kiroxane/Project-3/blob/master/assets/scripts.js).
- **Limites :** aucun score Lighthouse, gain chiffré ni comparaison avant/après vérifiés. L’URL GitHub Pages testée renvoie une erreur 404 ; l’URL canonique du HTML semble correspondre au site modèle et n’est pas retenue comme démo personnelle.

### Sophie Bluel

[Dépôt Project-2](https://github.com/kiroxane/Project-2)

- **Périmètre retenu :** frontend de portfolio d’architecte, galerie alimentée par une API, filtres par catégorie, connexion et interface d’ajout/suppression de projets en fenêtres modales.
- **Technologies :** JavaScript, HTML, CSS et API REST.
- **Preuves :** [README du projet d’intégrateur web](https://github.com/kiroxane/Project-2/blob/master/README.md), [code de l’interface](https://github.com/kiroxane/Project-2/blob/master/FrontEnd/assets/index.js), [connexion](https://github.com/kiroxane/Project-2/blob/master/FrontEnd/assets/login.js).
- **Limites :** un backend est présent, mais sa réalisation n’est pas attribuée à l’utilisatrice. La page frontend publique répond, cependant ses appels API pointent vers `http://localhost:5678` ; les fonctions dynamiques ne sont donc pas validées en ligne. Aucun bouton de démonstration n’est ajouté.

## Projets personnels

### To-do list

[Dépôt To-do-list](https://github.com/kiroxane/To-do-list)

- **Périmètre retenu :** prototype de gestionnaire de tâches, avec code d’ajout, de suppression et de suivi des tâches terminées.
- **Technologies :** JavaScript, HTML et Bootstrap.
- **Preuves :** [interface](https://github.com/kiroxane/To-do-list/blob/master/index.html), [logique JavaScript](https://github.com/kiroxane/To-do-list/blob/master/app.js).
- **Limites :** filtrage inachevé et absence de persistance. Un appel `li.addEventListener()` sans arguments en fin de script est susceptible de provoquer une erreur ; conserver la qualification « Prototype ». Une URL Vercel est déclarée dans les métadonnées, mais son accessibilité n’a pas été confirmée.

### Social

[Dépôt Reseau-social](https://github.com/kiroxane/Reseau-social)

- **Périmètre retenu :** intégration responsive d’une interface de réseau social, avec fil d’actualité, cartes de publication, profil et suggestions de contacts.
- **Technologies :** HTML et CSS.
- **Preuves :** [structure de la page](https://github.com/kiroxane/Reseau-social/blob/main/index.html), [mise en page et media queries](https://github.com/kiroxane/Reseau-social/blob/main/fichier.css).
- **Limites :** interface statique, sans backend ni fonctionnalités de publication ou de messagerie. L’activation de GitHub Pages apparaît dans les métadonnées, mais aucune URL de démonstration fonctionnelle n’a été confirmée.
