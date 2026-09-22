---
version: 1
slug: "src-pages-portfoliopreview-tsx"
primary_target: "src/pages/PortfolioPreview.tsx"
related_targets: ["src/styles/portfolio.css","src/components/PhotoCarousel.tsx"]
---

Mode : Experience. Portfolio React monopage pour recruteurs IT et responsables techniques. Nom confirmé : Roxane KIKI, Développeuse Web Fullstack. Objectifs : parcourir six projets, prendre contact, télécharger le CV lorsqu’il sera fourni.

Le portfolio est la seule surface du projet et occupe la racine `/`. La page de guide du design system a été retirée à la demande de Roxane ; `DesignSystem.tsx`, `ui.tsx`, `components.css` et `showcase.css` sont supprimés et `tokens.css` est réduit aux valeurs employées ici.

Direction explicitement choisie : reproduction fidèle de https://www.serahabijo.com/ avec contenus personnels. La référence fournie et la demande « copie conforme » fixent la composition ; aucun atelier de directions ni maquette générée ne remplace cette référence. À la demande de l’utilisatrice, la palette précédente ivoire, encre et bleu signature est restaurée. Playfair Display/Inter, le hero 2 colonnes, le carrousel portrait à droite (288×512), le ruban de logos, les sections About/Skills/Projects/Contact, la grille 3 colonnes et le grand carrousel final sont repris. Le guide ancien reste une surface distincte.

Inventaire : interface HTML/CSS/React sémantique ; photographies originales IMG_4445 et IMG_4444 en JPEG ; six captures des interfaces réellement lancées en local ; logos officiels Simple Icons extraits localement ; commandes Lucide ; aucun média personnel de la référence réutilisé. Le frontend de Mon Vieux Grimoire reste présenté comme support au projet backend, pas comme une nouvelle contribution frontend.

Référence capturée : /private/tmp/folio-redesign/reference-hero.png, reference-projects.png, reference-gallery.png, reference-mobile.png. Pas de comp générée. Contrat dans index.html, clé de traçabilité 02a7fb22 subordonnée au choix explicite.

Composants : en-tête 57px (99px mobile), nav pilule ; carte 12px, boutons pilule, hero portrait16px ; gallery22px comme référence ; traits1px ; 1024px contenu/1088px hero. Palette héritée de tokens.css ; typographies et composition locales dans portfolio.css. Titres36px desktop/30mobile, h1 38/36, corps14px. Le contraste texte reste≥4,5:1.

Carrousels : 2 photos, autoplay6s, pauseauhover/focus, miniatures/dots, flèches et glissement tactile, flèches clavier. Arrêt après interactionmanuelle ; respectsystèmereducedmotion. Ruban animé s’arrête au survol et selon reducedmotion.

Adaptations de vérité : langues, disponibilités, LinkedIn, produits SaaS, apparitions média et passions de Serah ne sont pas copiés comme faits de Roxane. Les sections correspondantes sans contenus personnels sont omises ; la galerie utilise les photos AWS fournies. Contact et CV indisponibles explicitement jusqu’à réception des données. Présentation proposée à partir des projets, modifiable dans portfolioContent.
