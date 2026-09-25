/** Une ligne de formation : établissement, intitulé et période. */
export type Education = {
  school: string;
  city?: string;
  title: string;
  date: string;
};

/** Un poste occupé, avec son organisation et sa période. */
export type Experience = {
  role: string;
  organization: string;
  date: string;
  detail?: string;
};

export type Language = {
  name: string;
  level: string;
};

/** Contenu propre au CV. L'identité et les projets viennent de `portfolioContent`. */
export type CvContent = {
  /** Portrait posé du CV, distinct des photos du portfolio. */
  portrait: { src: string; alt: string; width: number; height: number };
  profile: string;
  location: string;
  stack: string[];
  experience: Experience[];
  education: Education[];
  languages: Language[];
  interests: string[];
};

export const cvContent: CvContent = {
  portrait: {
    src: '/photos/portrait-cv.jpg',
    alt: 'Portrait de Roxane KIKI, en chemise claire sur fond neutre.',
    width: 800,
    height: 800,
  },
  profile:
    'Après un BTS Management Commercial Opérationnel en alternance chez Maisons du Monde, je me suis formée au développement web, du frontend au backend. Interfaces React, intégration responsive, API REST avec authentification et optimisation : six projets de formation et personnels dont le code est public. Je recherche un CDI en Île-de-France et suis disponible immédiatement.',
  location: 'Île-de-France',
  stack: ['JavaScript', 'React', 'React Router', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Vite', 'Bootstrap', 'Git', 'GitHub'],
  experience: [
    {
      role: 'Développeur web — stage',
      organization: 'iCode++',
      date: 'Juillet – Septembre 2026',
      detail: 'Participation au développement de plusieurs applications.',
    },
    {
      role: 'Manager adjoint',
      organization: 'Maisons du Monde · alternance',
      date: '2024 – 2025',
      detail: 'Animation de l’équipe de vente, suivi commercial du magasin et relation client.',
    },
  ],
  education: [
    {
      school: 'OpenClassrooms',
      title: 'Développeur Web — Bac+2',
      date: 'Février – Septembre 2026',
    },
    {
      school: 'ITIC Paris',
      title: 'BTS Management Commercial Opérationnel — Bac+2, en alternance',
      date: '2024 – 2025',
    },
  ],
  languages: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Notions' },
  ],
  interests: ['Sport', 'Neurosciences', 'Éloquence'],
};
