# Direction approuvée — Portfolio de Roxane KIKI

L’utilisatrice a choisi une reproduction fidèle du site [Serah Abijo](https://www.serahabijo.com/), carrousels compris. La composition de cette référence est conservée ; à la demande de l’utilisatrice, la palette précédente ivoire, encre et bleu signature est restaurée. Le nom confirmé est **Roxane KIKI** et l’intitulé **Développeuse Web Fullstack**. Aucun nouvel atelier de direction ni image générée ne remplace ce choix explicite.

## Expression retenue

Fond ivoire, bleu signature pour les actions et états actifs, Playfair Display dans les titres et Inter pour les textes. Le premier écran associe présentation à gauche et carrousel portrait à droite ; viennent ensuite ruban de logos, À propos, Compétences, Projets, Contact, grand album photo et pied de page. Les pilules, petits arrondis, filets et ombres réservées aux photos reprennent la grammaire de la référence.

Le portfolio se trouve à `/` et le CV à `/cv`. Cette page CV a été demandée par Roxane après consultation de la page équivalente de la référence : même ordre de sections, filets verticaux, titres en majuscules, pastilles de dates, cartes de projets et formation en une ligne, mais dans la palette ivoire, encre et bleu signature du portfolio, sans le bordeaux de la référence. Le PDF téléchargeable est cette même page rendue en A4.

La page de guide du design system, elle, a été retirée. La page de guide du design system a été retirée à la demande de Roxane ; sa documentation et la direction historique restent archivées dans [INITIAL-DESIGN.md](INITIAL-DESIGN.md), sans code correspondant. Le portfolio hérite de la palette commune dans `src/styles/tokens.css` ; ses typographies et sa composition restent définies dans sa surface locale.

## Contenu et interactions

- Les deux photos originales AWS Summit servent au carrousel de l’accueil ; deux photos d’ambiance, une salle d’escalade et une conférence à ITIC Paris, servent à l’album « En dehors du code ». Lecture toutes les 6 secondes, pause/reprise, miniatures ou indicateurs, flèches, navigation clavier et balayage tactile. Survol, focus et manipulation manuelle suspendent ou arrêtent la lecture ; la préférence de réduction des mouvements est respectée.
- Le ruban de technologies utilise les logos SVG officiels extraits de Simple Icons, une pause au survol et un bouton de pause/reprise utilisable au clavier. Il devient fixe avec réduction des mouvements.
- Six cartes disposent de captures réelles des interfaces lancées localement. Les filtres donnent 6 projets au total, 4 professionnels et 2 personnels. Les liens mènent aux dépôts GitHub.
- L’email et le PDF du CV restent absents et leur statut est expliqué. Les textes de présentation sont proposés à partir des projets connus.

Les captures ne prouvent pas les fonctions backend ni une démonstration publique. Les langues, disponibilités, expériences, passions, produits et apparitions de Serah ne sont pas attribués à Roxane. Aucun média personnel de la référence n’est réutilisé.

## Sources de vérité et vérification

[DESIGN.md](../DESIGN.md) décrit les valeurs et composants actuels, et [.impeccable/design.json](../.impeccable/design.json) leurs extensions documentaires. La composition et le contrat de surface figurent dans [le brief portfolio](../.impeccable/surfaces/src-pages-portfoliopreview-tsx.md) et le commentaire de `index.html`. [PRODUCT.md](../PRODUCT.md) conserve les faits du produit.

[VERIFICATION.md](VERIFICATION.md) consigne compilation, contrôles visuels, clavier, filtres, contrastes et limites. La relecture finale conclut « passed », sans défaut matériel restant ; la commande du ruban a été validée au clic et avec Entrée, puis la compilation finale a réussi. Les rendus ont été inspectés à 1320 × 960 et 390 × 844 CSS px, sans débordement horizontal observé. Les breakpoints intermédiaires et les dimensions exactes sont documentés à partir du CSS dans DESIGN.md. Les photos et projets ont leurs propres traces dans [PHOTO.md](PHOTO.md) et [PROJECTS.md](PROJECTS.md).
