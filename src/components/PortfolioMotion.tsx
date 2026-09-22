import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import BrandIcon from './BrandIcon'

// Pause decorative loops outside the viewport and when the tab is hidden.
export function useMotionRegions(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const regions = root.current?.querySelectorAll<HTMLElement>('[data-motion-region]')
    if (!regions) return
    const visible = new Set<Element>()
    const update = () => regions.forEach(region => {
      region.dataset.motionVisible = String(visible.has(region) && !document.hidden)
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target))
      update()
    }, { threshold: 0.1 })
    regions.forEach(region => observer.observe(region))
    document.addEventListener('visibilitychange', update)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [root])
}

export function CyclingTechnology() {
  return <span className="portfolio-tech-cycle" aria-hidden="true">
    {['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'GitHub'].map(name => <span key={name}><BrandIcon name={name} size={24} colored /></span>)}
  </span>
}

export function TypingTitle({ text }: { text: string }) {
  const element = useRef<HTMLSpanElement>(null)
  const [length, setLength] = useState(0)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer: number | undefined
    let position = 0
    let started = false
    const finish = () => { started = true; window.clearInterval(timer); setLength(text.length) }
    const observer = new IntersectionObserver(entries => {
      if (started || !entries.some(entry => entry.isIntersecting)) return
      started = true
      observer.disconnect()
      if (preference.matches) { finish(); return }
      timer = window.setInterval(() => {
        position += 1
        setLength(position)
        if (position >= text.length) window.clearInterval(timer)
      }, 50)
    }, { threshold: 0.5 })
    const updatePreference = () => { if (preference.matches) finish() }
    if (preference.matches) finish()
    if (element.current) observer.observe(element.current)
    preference.addEventListener('change', updatePreference)
    return () => {
      window.clearInterval(timer)
      observer.disconnect()
      preference.removeEventListener('change', updatePreference)
    }
  }, [text])

  return <span ref={element} className="portfolio-typed-title">
    <span className="sr-only">{text}</span>
    <span className="portfolio-typed-space" aria-hidden="true">{text}<span className="portfolio-terminal-cursor" /></span>
    <span className="portfolio-typed-letters" aria-hidden="true">{text.slice(0, length)}<span className="portfolio-terminal-cursor" /></span>
  </span>
}
