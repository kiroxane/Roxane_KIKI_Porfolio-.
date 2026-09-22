/** Une réalisation réelle à présenter dans le portfolio. */
export type Project = {
  id: string;
  title: string;
  description: string;
  category?: 'professional' | 'personal';
  context?: string;
  imageSrc?: string;
  imageAlt?: string;
  projectUrl?: string;
  sourceUrl?: string;
  technologies: string[];
};

/** Les informations personnelles restent facultatives jusqu’à leur ajout. */
export type PortfolioContent = {
  name?: string;
  role?: string;
  introduction?: string;
  about?: string;
  portrait?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  email?: string;
  cvUrl?: string;
  projects: Project[];
};

export const portfolioContent: PortfolioContent = {
  name: 'Roxane KIKI',
  role: 'Développeuse Web Fullstack',
  introduction: 'Des interfaces aux API, je développe des projets web pour donner vie aux idées.',
  about: 'Mon portfolio réunit des projets de formation et des réalisations personnelles, du frontend au backend. Interfaces React, intégration responsive, API et optimisation web : chaque projet est une occasion de mettre mes connaissances en pratique et d’aller plus loin.',
  portrait: {
    src: '/photos/portrait-aws-summit.jpg',
    alt: 'Portrait devant un écran AWS Summit, une main levée vers le nom de l’événement.',
    width: 1200,
    height: 1600,
    caption: 'AWS Summit',
  },
  projects: [
    {
      id: 'mon-vieux-grimoire',
      imageSrc: '/projects/mon-vieux-grimoire.png',
      imageAlt: 'Page d’accueil du frontend associé au projet backend Mon Vieux Grimoire.',
      title: 'Mon Vieux Grimoire',
      category: 'professional',
      context: 'Développement backend · OpenClassrooms',
      description:
        'API REST pour partager et noter des livres : authentification, gestion des ouvrages et des notes, classement des meilleurs livres. Les images importées sont redimensionnées et converties en WebP.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Sharp'],
      sourceUrl: 'https://github.com/kiroxane/Projet_6_Openclassroom',
    },
    {
      id: 'kasa',
      imageSrc: '/projects/kasa.png',
      imageAlt: 'Accueil Kasa avec sa bannière et les photographies des logements.',
      title: 'Kasa',
      category: 'professional',
      context: 'Développement frontend · OpenClassrooms',
      description:
        'Interface React de présentation de logements : catalogue, fiches détaillées, carrousel de photos et sections dépliables. Navigation avec React Router, annonces issues de données JSON et mise en page adaptée au mobile.',
      technologies: ['React', 'React Router', 'JavaScript', 'Sass', 'Vite'],
      sourceUrl: 'https://github.com/kiroxane/Project-5-Openclassroom',
    },
    {
      id: 'nina-carducci',
      imageSrc: '/projects/nina-carducci.png',
      imageAlt: 'Portfolio Nina Carducci avec une photographie de concert en ouverture.',
      title: 'Nina Carducci',
      category: 'professional',
      context: 'Performance et référencement',
      description:
        'Optimisation d’un portfolio de photographe : images WebP, chargement différé, CSS allégé et métadonnées SEO. Une galerie filtrable et une visionneuse permettent de parcourir les photographies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SEO'],
      sourceUrl: 'https://github.com/kiroxane/Project-3',
    },
    {
      id: 'sophie-bluel',
      imageSrc: '/projects/sophie-bluel.png',
      imageAlt: 'Portfolio Sophie Bluel avec le portrait et la présentation de l’architecte.',
      title: 'Sophie Bluel',
      category: 'professional',
      context: 'Interface connectée à une API',
      description:
        'Portfolio d’architecte avec galerie alimentée par une API et filtrage par catégorie. Une interface de connexion donne accès à l’ajout et à la suppression de projets depuis des fenêtres modales.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API REST'],
      sourceUrl: 'https://github.com/kiroxane/Project-2',
    },
    {
      id: 'to-do-list',
      imageSrc: '/projects/to-do-list.png',
      imageAlt: 'Interface de la to-do list avec le champ de saisie, les filtres et deux tâches.',
      title: 'To-do list',
      category: 'personal',
      context: 'Prototype JavaScript',
      description:
        'Prototype de gestionnaire de tâches en JavaScript : ajout, suppression et suivi des tâches terminées, avec une interface réalisée à l’aide de Bootstrap.',
      technologies: ['JavaScript', 'HTML', 'Bootstrap'],
      sourceUrl: 'https://github.com/kiroxane/To-do-list',
    },
    {
      id: 'social',
      imageSrc: '/projects/social.png',
      imageAlt: 'Interface Social avec un fil d’actualité, un profil et des suggestions de contacts.',
      title: 'Social',
      category: 'personal',
      context: 'Intégration responsive',
      description:
        'Intégration HTML et CSS d’une interface de réseau social : fil d’actualité, cartes de publication, profil et suggestions de contacts. Le travail porte sur la mise en page et son adaptation aux différentes tailles d’écran.',
      technologies: ['HTML', 'CSS'],
      sourceUrl: 'https://github.com/kiroxane/Reseau-social',
    },
  ],
};
