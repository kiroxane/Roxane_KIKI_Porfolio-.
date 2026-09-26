/**
 * Versions WebP redimensionnées des images de `public/`, générées avec cwebp :
 * photos en 120, 600 et 1200 px de large, captures de projets en 600, 800 et 1150 px.
 * Le navigateur choisit la plus légère selon `sizes` et la densité de l'écran.
 */
const variantWidths = { photos: [600, 1200], projects: [600, 800, 1150] } as const

function base(src: string) {
  return src.replace(/\.(jpe?g|png)$/, '')
}

export function responsiveImage(src: string, sizes: string) {
  const widths = src.startsWith('/projects/') ? variantWidths.projects : variantWidths.photos
  return {
    src: `${base(src)}-${widths[0]}.webp`,
    srcSet: widths.map(width => `${base(src)}-${width}.webp ${width}w`).join(', '),
    sizes,
  }
}

/** Miniature de 120 px pour les vignettes du carrousel et l'avatar du pied de page. */
export function thumbnailImage(src: string) {
  return `${base(src)}-120.webp`
}
