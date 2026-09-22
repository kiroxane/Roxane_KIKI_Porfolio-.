import { Code2, Search } from 'lucide-react'
import { brandIcons } from './brand-icons.generated'

type BrandIconProps = {
  name: string
  size?: number
  className?: string
  colored?: boolean
}

export default function BrandIcon({ name, size = 18, className, colored = false }: BrandIconProps) {
  const normalizedName = name.trim().toLowerCase()
  const icon = brandIcons[normalizedName]

  if (!icon) {
    const FallbackIcon = normalizedName === 'seo' ? Search : Code2
    return <FallbackIcon size={size} className={className} aria-hidden="true" />
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={colored ? `#${icon.hex}` : 'currentColor'}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  )
}
