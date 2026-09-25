# Photos de Roxane

Sources fournies par l’utilisatrice : `IMG_4445.HEIC` et `IMG_4444.HEIC`, prises devant le décor AWS Summit. Les originaux dans Downloads ne sont pas modifiés. À la demande de Roxane de reprendre les carrousels de la référence [Serah Abijo](https://www.serahabijo.com/), les deux photos sont désormais intégrées.

## Versions utilisées

| Source | Fichier web | Dimensions | Préparation |
| --- | --- | --- | --- |
| `IMG_4445.HEIC` | `public/photos/portrait-aws-summit.jpg` | 1200 × 1600 px | Conversion de la photo originale en JPEG, orientation normalisée. |
| `IMG_4444.HEIC` | `public/photos/portrait-aws-summit-2.jpg` | 1200 × 1600 px | Aperçu Quick Look de l’original, puis conversion en JPEG ; la conversion HEIC directe avec `sips` produisait une image noire. |

Ces fichiers conservent le contenu des prises de vue. Aucune image générée n’est intégrée.

## Affichage actuel

Le carrousel de l’accueil utilise les deux portraits AWS Summit ; celui de « En dehors du code » utilise les deux photos d’ambiance décrites plus bas. Les deux listes, `heroPhotos` et `storyPhotos`, sont séparées dans `src/pages/PortfolioPreview.tsx`. Le composant `src/components/PhotoCarousel.tsx` propose miniatures, flèches, navigation au clavier et glissement souris/tactile. Le portrait avance toutes les 8 secondes, avec un glissement et un fondu de 500 ms ; sa légende monte en 300 ms après 250 ms. Sa commande lecture/pause reste utilisable au clavier. Le survol, le focus sur les autres contrôles, la sortie de l’écran et le masquage de l’onglet suspendent le temps écoulé. Une sélection manuelle arrête la lecture jusqu’à une reprise explicite.

L’album est une pile manuelle de ses deux cartes : la carte arrière est décalée de 12 px et réduite à 95 %, puis remonte après la sortie latérale et la rotation de la carte de devant. Les légendes apparaissent progressivement. Aucun défilement automatique ni bouton lecture n’est présent dans cet album. Un glissement insuffisant ramène la carte à sa place ; le changement demande plus de 100 px dans l’album et 45 px dans le portrait. Avec la préférence de réduction des mouvements, les transitions et la lecture automatique sont désactivées ; les commandes manuelles restent disponibles immédiatement.

La liste des images, textes alternatifs et légendes des carrousels se trouve dans `src/pages/PortfolioPreview.tsx`. Les informations du portrait principal restent également dans `src/data/portfolio.ts`. La photo IMG_4445 est reprise dans la section « À propos » et dans le pied de page.

Le cadrage et les effets sont appliqués par `src/styles/portfolio.css`, les animations par `src/styles/carousel-motion.css`, et restent réversibles. Les vues des carrousels emploient `object-fit: cover`, un léger agrandissement et `brightness(1.08) saturate(0.96)`. Les variantes d’affichage adaptent le cadre au portrait et à l’album. Il ne s’agit pas d’une correction locale du visage ni d’un remplacement de la scène.

À la demande de Roxane, le portfolio refondu retrouve la palette précédente ivoire, encre et bleu signature, avec des surfaces brume et blanches. Inter, Playfair Display, la composition et les carrousels sont conservés.

## Photos de « En dehors du code »

Sources fournies par l’utilisatrice : `IMG_6919.PNG` et `IMG_6920.PNG`, deux captures d’écran au format 1170 × 2532. Les originaux dans Downloads ne sont pas modifiés.

Chaque capture contenait une bande noire de 226 px en haut et de 226 px en bas, pour un contenu réel de 1170 × 2080. Ces bandes ont été mesurées par analyse de la luminosité des rangées, puis retirées. Une fenêtre 3:4 de 1170 × 1560 a ensuite été prélevée, redimensionnée en 1200 × 1600 et enregistrée en JPEG qualité 80 avec `sips` :

| Fichier | Contenu | Décalage vertical | Poids |
| --- | --- | --- | --- |
| `public/photos/escalade.jpg` | Ascension d’un mur d’escalade en salle, vue de dos | 656 px, cadré sur la personne | 333 Ko |
| `public/photos/conference-itic-paris.jpg` | Amphithéâtre d’ITIC Paris, deux intervenants sur scène | 486 px, centré sur le contenu | 256 Ko |

Aucune retouche de couleur n’est appliquée au fichier : seuls le recadrage, le redimensionnement et la compression JPEG interviennent. Les photos héritent en revanche des effets d’affichage communs aux carrousels décrits plus haut, dont `brightness(1.08) saturate(0.96)`.

Les légendes et descriptions affichées sont des propositions, modifiables dans `storyPhotos`. Les textes alternatifs décrivent la scène visible sans affirmer l’identité des personnes photographiées. La conférence montre des tiers identifiables de dos et deux intervenants sur scène ; leur diffusion relève d’une décision de Roxane.

## Portrait du CV

Source fournie par l’utilisatrice : `Roxane (3).jpg`, portrait posé en studio, 3744 × 5616. L’original n’est pas modifié.

Un carré de 3100 × 3100 a été prélevé avec `sips`, décalé de 280 px vers le bas et de 450 px vers la droite pour centrer le visage et conserver les épaules, puis réduit en 800 × 800 et enregistré en JPEG qualité 82 sous `public/photos/portrait-cv.jpg`, soit 108 Ko. Aucune retouche de couleur, de peau ou de décor n’est appliquée.

Ce portrait sert uniquement au bandeau de la page `/cv` et à son PDF. Il est déclaré dans `cvContent.portrait`, distinct de `portfolioContent.portrait` : le portfolio conserve les photos AWS Summit.

## Historique de la première version

La première intégration utilisait uniquement IMG_4445 dans la section « À propos », avec un cadre 4:5, un agrandissement de 10 % et un point d’ancrage à 80 % de la hauteur. Cette disposition a été remplacée lors de la refonte et de l’ajout des carrousels.

Une retouche par l’outil Image Gen intégré avait été évaluée puis écartée : elle modifiait des détails au-delà de la correction lumineuse demandée. Cette image générée n’est ni intégrée ni distribuée dans le site.

Consigne de l’essai : « Recadrage portrait conservant le visage, la main levée et le texte AWS SUMMIT ; correction légère de balance des blancs et d’exposition du visage ; préserver l’identité, la texture de peau, les traits, l’expression, la tenue, les mains, la pose, le badge et tous les éléments du décor ; aucun embellissement ni changement de fond. »
