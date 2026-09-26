import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { responsiveImage, thumbnailImage } from '../data/images'
import '../styles/carousel-motion.css'

/** `description` accompagne la légende dans la variante album ; elle décrit la photo affichée. */
export type CarouselPhoto = { src: string; alt: string; caption: string; description?: string }
type SlideTransition = { from: number; to: number; direction: number; offset: number; exitSign: number }
type Drag = { pointerId: number; x: number; y: number; offset: number; axis: 'pending' | 'horizontal' | 'vertical' }
const PORTRAIT_INTERVAL = 8000
const TRANSITION_DURATION = 500

/** Largeur affichée des photos, pour que le navigateur télécharge la bonne taille. */
const slideSizes = { portrait: '(max-width: 760px) 256px, 288px', stories: '(max-width: 520px) calc(100vw - 64px), 448px' }

export default function PhotoCarousel({ photos, variant = 'portrait' }: { photos: CarouselPhoto[]; variant?: 'portrait' | 'stories' }) {
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [playing, setPlaying] = useState(() => variant === 'portrait' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [inView, setInView] = useState(false)
  const [pageVisible, setPageVisible] = useState(!document.hidden)
  const [dragOffset, setDragOffset] = useState<number | null>(null)
  const [transition, setTransition] = useState<SlideTransition | null>(null)
  const root = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLElement>(null)
  const drag = useRef<Drag | null>(null)
  const transitionRef = useRef<SlideTransition | null>(null)
  const transitionTimers = useRef<number[]>([])
  const elapsed = useRef(0)
  const currentIndex = Math.min(index, Math.max(photos.length - 1, 0))
  const canPlay = variant === 'portrait' && playing && !reducedMotion && inView && pageVisible && !hovered && !focused && dragOffset === null && !transition && photos.length > 1

  const clearTransition = useCallback(() => {
    transitionTimers.current.forEach(window.clearTimeout)
    transitionTimers.current = []
    transitionRef.current = null
    setTransition(null)
  }, [])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setReducedMotion(preference.matches)
      if (preference.matches) {
        setPlaying(false)
        if (transitionRef.current) setIndex(transitionRef.current.to)
        clearTransition()
      }
    }
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [clearTransition])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.25), { threshold: 0.25 })
    if (root.current) observer.observe(root.current)
    const visibility = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', visibility)
      transitionTimers.current.forEach(window.clearTimeout)
    }
  }, [])

  const select = useCallback((next: number, manual = true, offset = 0) => {
    if (manual) setPlaying(false)
    if (photos.length < 2 || transitionRef.current) return
    const to = (next + photos.length) % photos.length
    if (to === currentIndex) return
    elapsed.current = 0
    if (progress.current) progress.current.style.transform = 'scaleX(0)'
    if (reducedMotion) { setIndex(to); return }
    const direction = next > currentIndex ? 1 : -1
    const change = { from: currentIndex, to, direction, offset, exitSign: offset ? Math.sign(offset) : direction }
    transitionRef.current = change
    setTransition(change)
    if (variant === 'portrait') setIndex(to)
    else transitionTimers.current.push(window.setTimeout(() => setIndex(to), 200))
    transitionTimers.current.push(window.setTimeout(clearTransition, TRANSITION_DURATION))
  }, [clearTransition, currentIndex, photos.length, reducedMotion, variant])

  useEffect(() => {
    if (!canPlay) return
    let frame = 0
    let previous = performance.now()
    const tick = (now: number) => {
      elapsed.current += now - previous
      previous = now
      if (progress.current) progress.current.style.transform = `scaleX(${Math.min(elapsed.current / PORTRAIT_INTERVAL, 1)})`
      if (elapsed.current >= PORTRAIT_INTERVAL) select(currentIndex + 1, false)
      else frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [canPlay, currentIndex, select])

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (photos.length < 2 || transitionRef.current || !event.isPrimary || event.button !== 0 || (event.target as HTMLElement).closest('button')) return
    drag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, offset: 0, axis: 'pending' }
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current
    if (!gesture || gesture.pointerId !== event.pointerId) return
    const x = event.clientX - gesture.x
    const y = event.clientY - gesture.y
    if (gesture.axis === 'pending' && Math.max(Math.abs(x), Math.abs(y)) > 8) {
      gesture.axis = Math.abs(x) > Math.abs(y) ? 'horizontal' : 'vertical'
      if (gesture.axis === 'horizontal') event.currentTarget.setPointerCapture(event.pointerId)
    }
    if (gesture.axis !== 'horizontal') return
    gesture.offset = x
    setDragOffset(x * 0.8)
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const gesture = drag.current
    if (!gesture || gesture.pointerId !== event.pointerId) return
    drag.current = null
    setDragOffset(null)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    if (!cancelled && gesture.axis === 'horizontal' && Math.abs(gesture.offset) > (variant === 'stories' ? 100 : 45)) {
      select(currentIndex + (gesture.offset < 0 ? 1 : -1), true, reducedMotion ? 0 : gesture.offset * 0.8)
    }
  }

  if (!photos.length) return null
  const motionStyle = {
    '--carousel-direction': transition?.direction ?? 1,
    '--carousel-exit-x': `${(transition?.exitSign ?? 1) * 400}px`,
    '--carousel-exit-rotation': `${(transition?.exitSign ?? 1) * 20}deg`,
    '--carousel-start-x': `${transition?.offset ?? 0}px`,
    '--carousel-start-rotation': `${(transition?.offset ?? 0) / 20}deg`,
    '--carousel-drag-x': `${reducedMotion ? 0 : dragOffset ?? 0}px`,
    '--carousel-drag-rotation': `${reducedMotion ? 0 : (dragOffset ?? 0) / 20}deg`,
  } as CSSProperties

  return (
    <div ref={root} className={`photo-carousel photo-carousel--${variant}`} style={motionStyle} data-dragging={dragOffset !== null} data-transitioning={!!transition} role="region" aria-roledescription="carrousel" aria-label={variant === 'stories' ? 'Album de Roxane' : 'Photos de Roxane'}
      onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }} onPointerLeave={event => { if (event.pointerType === 'mouse') setHovered(false) }}
      onFocusCapture={event => setFocused(!(event.target as HTMLElement).closest('[data-carousel-play]'))}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); select(currentIndex - 1) }
        if (event.key === 'ArrowRight') { event.preventDefault(); select(currentIndex + 1) }
      }}>
      <div className="photo-carousel-frame" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={event => finishDrag(event)} onPointerCancel={event => finishDrag(event, true)} onLostPointerCapture={event => finishDrag(event, true)}>
        <div className="photo-carousel-slides" aria-live={canPlay ? 'off' : 'polite'}>
          {photos.map((photo, photoIndex) => {
            const active = photoIndex === currentIndex
            const exiting = transition?.from === photoIndex
            const stackIndex = (photoIndex - currentIndex + photos.length) % photos.length
            return <div key={photo.src} className={`photo-carousel-slide${active ? ' is-active' : ''}${exiting ? ' is-exiting' : ''}${transition?.to === photoIndex ? ' is-arriving' : ''}`} style={{ '--stack-index': stackIndex } as CSSProperties} aria-hidden={!active || exiting} role="group" aria-roledescription="diapositive" aria-label={`${photoIndex + 1} sur ${photos.length}`}><figure className="photo-carousel-figure">
              <img {...responsiveImage(photo.src, slideSizes[variant])} alt={photo.alt} width={1200} height={1600} loading={variant === 'portrait' ? 'eager' : 'lazy'} fetchPriority={variant === 'portrait' && photoIndex === 0 ? 'high' : 'auto'} decoding="async" draggable={false} />
              <figcaption><strong>{photo.caption}</strong>{variant === 'stories' ? <span>{photo.description}<small>{String(photoIndex + 1).padStart(2, '0')} — {String(photos.length).padStart(2, '0')}</small></span> : null}</figcaption>
            </figure></div>
          })}
        </div>
        {variant === 'portrait' ? <div className="photo-carousel-progress" aria-hidden="true">{photos.map((photo, photoIndex) => <span key={photo.src} className={photoIndex === currentIndex ? 'is-active' : photoIndex < currentIndex ? 'is-complete' : ''}><i ref={photoIndex === currentIndex ? progress : undefined} style={{ transform: photoIndex === currentIndex ? `scaleX(${Math.min(elapsed.current / PORTRAIT_INTERVAL, 1)})` : undefined }} /></span>)}</div> : null}
        <button className="photo-carousel-arrow photo-carousel-arrow--previous" onClick={() => select(currentIndex - 1)} aria-label="Photo précédente"><ChevronLeft size={20} /></button>
        <button className="photo-carousel-arrow photo-carousel-arrow--next" onClick={() => select(currentIndex + 1)} aria-label="Photo suivante"><ChevronRight size={20} /></button>
        {variant === 'portrait' && !reducedMotion ? <button data-carousel-play className="photo-carousel-play" onClick={() => { setPlaying(value => !value); setFocused(false) }} aria-label={playing ? 'Mettre le carrousel en pause' : 'Lancer le carrousel'}>{playing ? <Pause size={14} /> : <Play size={14} />}</button> : null}
      </div>
      <div className="photo-carousel-thumbnails" role="group" aria-label="Choisir une photo">
        {photos.map((photo, photoIndex) => <button key={photo.src} aria-label={`Afficher la photo ${photoIndex + 1} : ${photo.caption}`} aria-pressed={photoIndex === currentIndex} onClick={() => select(photoIndex)}><img src={thumbnailImage(photo.src)} alt="" width={60} height={80} loading="lazy" draggable={false} /></button>)}
      </div>
    </div>
  )
}
