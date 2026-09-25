/**
 * Métadonnées appliquées à la navigation côté client.
 *
 * Les valeurs par défaut du portfolio sont déjà en dur dans `index.html`, pour les
 * robots qui n'exécutent pas le JavaScript. Ces fonctions ne servent qu'à corriger
 * le titre, la description et l'URL canonique quand on passe d'une page à l'autre.
 */

/** Adresse publique du site, déclarée dans `.env`. */
export const siteUrl = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/+$/, '');

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

function setMeta(selector: string, attribute: string, value: string) {
  document.head.querySelector(`meta[${selector}]`)?.setAttribute(attribute, value);
}

export function applyPageMeta({ title, description, path }: PageMeta) {
  document.title = title;
  setMeta('name="description"', 'content', description);
  setMeta('property="og:title"', 'content', title);
  setMeta('property="og:description"', 'content', description);
  setMeta('name="twitter:title"', 'content', title);
  setMeta('name="twitter:description"', 'content', description);

  const url = `${siteUrl}${path}`;
  setMeta('property="og:url"', 'content', url);
  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', url);
}
