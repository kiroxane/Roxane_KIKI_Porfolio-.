import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Code2, ContactRound, Copy, Database, FileText, Mail, Menu, Pause, Play, Plus, Sparkles, X } from 'lucide-react'
import PhotoCarousel from '../components/PhotoCarousel'
import BrandIcon from '../components/BrandIcon'
import { CyclingTechnology, TypingTitle, useMotionRegions } from '../components/PortfolioMotion'
import { responsiveImage, thumbnailImage } from '../data/images'
import { portfolioContent } from '../data/portfolio'
import { applyPageMeta } from '../data/seo'
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/inter'
import '../styles/portfolio.css'
import '../styles/portfolio-motion.css'

/** L'ordre suit celui des sections dans la page. */
const navigation = [
  { id: 'accueil', label: 'Portfolio' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]
const filters = [{ id: 'all', label: 'Tous' }, { id: 'professional', label: 'Professionnels' }, { id: 'personal', label: 'Personnels' }] as const
const technologies = ['JavaScript', 'React', 'Express', 'MongoDB', 'HTML', 'CSS', 'Node.js', 'Vite', 'GitHub']
const githubUrl = portfolioContent.githubUrl ?? 'https://github.com/kiroxane'
const linkedinUrl = portfolioContent.linkedinUrl
/** Portraits du premier écran, repris dans « À propos » et le pied de page. */
const heroPhotos = [
  { src: '/photos/portrait-aws-summit.jpg', alt: 'Roxane devant un écran AWS Summit, une main levée vers le nom de l’événement.', caption: 'À l’AWS Summit' },
  { src: '/photos/portrait-aws-summit-2.jpg', alt: 'Roxane de plein pied devant le décor bleu et rose de l’AWS Summit.', caption: 'L’envie de découvrir' },
]
/** Album « En dehors du code ». Les légendes et descriptions sont modifiables ici. */
const storyPhotos = [
  { src: '/photos/escalade.jpg', alt: 'Ascension d’un mur d’escalade en salle, vue de dos, au milieu de prises colorées.', caption: 'Prendre de la hauteur', description: 'Une séance d’escalade en salle.' },
  { src: '/photos/conference-itic-paris.jpg', alt: 'Amphithéâtre d’ITIC Paris : deux intervenants sur scène devant le public assis.', caption: 'En conférence', description: 'Un échange en amphithéâtre à ITIC Paris.' },
]
function TechLabel({ name }: { name: string }) {
  return <span className="tech-label"><BrandIcon name={name} colored />{name}</span>
}

function Github({ size = 18 }: { size?: number; 'aria-hidden'?: string }) {
  return <BrandIcon name="GitHub" size={size} />
}

export default function PortfolioPreview() {
  const motionRoot = useRef<HTMLDivElement>(null)
  useMotionRegions(motionRoot)
  const content = portfolioContent
  const [activeSection, setActiveSection] = useState('accueil')
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all')
  const [copyStatus, setCopyStatus] = useState('')
  const [stackPaused, setStackPaused] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const projects = content.projects.filter(project => filter === 'all' || project.category === filter)

  useEffect(() => {
    applyPageMeta({
      title: `${content.name} — ${content.role}`,
      description: `Portfolio de ${content.name}, ${content.role} en Île-de-France. Six projets React, JavaScript, Node.js et intégration web, avec le code source et le CV.`,
      path: '/',
    })
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim())
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' })
    let frame = 0
    const updateSection = () => {
      frame = 0
      const threshold = (document.querySelector('.portfolio-header')?.getBoundingClientRect().bottom ?? 57) + 100
      const sections = navigation.map(item => ({ id: item.id, top: document.getElementById(item.id)?.getBoundingClientRect().top ?? Infinity }))
      const current = sections.filter(section => section.top <= threshold).sort((a, b) => b.top - a.top)[0]
      setActiveSection(current?.id ?? 'accueil')
    }
    const scheduleUpdate = () => { if (!frame) frame = window.requestAnimationFrame(updateSection) }
    updateSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [content.name, content.role])

  // Menu mobile : se ferme avec Échap ou quand l'écran repasse en largeur bureau.
  useEffect(() => {
    if (!menuOpen) return
    const desktop = window.matchMedia('(min-width: 761px)')
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus() } }
    const onChange = () => { if (desktop.matches) setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onChange)
    }
  }, [menuOpen])

  async function copyEmail() {
    if (!content.email) return
    try { await navigator.clipboard.writeText(content.email); setCopyStatus('Adresse copiée') }
    catch { setCopyStatus('Sélectionnez l’adresse pour la copier.') }
  }

  return (
    <div className="portfolio-preview" ref={motionRoot}>
      <a className="portfolio-skip-link" href="#main-content">Aller au contenu</a>
      <header className="portfolio-header">
        <div className="portfolio-header-inner">
          <a className="portfolio-header-brand" href="#accueil" onClick={() => setMenuOpen(false)}>{content.name}</a>
          <button ref={menuButton} type="button" className="portfolio-menu-toggle" aria-expanded={menuOpen} aria-controls="portfolio-menu" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
          <div id="portfolio-menu" className="portfolio-menu" data-open={menuOpen} onClick={event => { if ((event.target as HTMLElement).closest('a')) setMenuOpen(false) }}>
            <nav className="portfolio-navigation" aria-label="Navigation principale">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
            <a className="portfolio-button portfolio-button--small" href="/cv"><FileText size={16} aria-hidden="true" /> Voir CV</a>
          </div>
        </div>
        {menuOpen && <div className="portfolio-menu-backdrop" aria-hidden="true" onClick={() => setMenuOpen(false)} />}
      </header>
      <main id="main-content" tabIndex={-1}>
        <section id="accueil" className="portfolio-hero" aria-labelledby="portfolio-title">
          <div className="portfolio-hero-copy">
            <p className="portfolio-role">{content.role}</p>
            <h1 id="portfolio-title">{content.name}.</h1>
            <p className="portfolio-introduction">{content.introduction}</p>
            <p className="portfolio-hero-note"><Code2 size={15} aria-hidden="true" /> Projets professionnels & personnels</p>
            <p className="portfolio-focus"><span>Mes technologies</span> React <b>•</b> JavaScript <b>•</b> Node.js</p>
            <div className="portfolio-socials">
              <a href="#contact" className="portfolio-social-link"><Mail size={18} aria-hidden="true" /> Contact</a>
              <a href="#projets" className="portfolio-social-link"><Code2 size={18} aria-hidden="true" /> Projets</a>
              <a href={githubUrl} className="portfolio-social-link" target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub (nouvel onglet)"><Github size={18} aria-hidden="true" /> GitHub</a>
              {linkedinUrl ? <a href={linkedinUrl} className="portfolio-social-link" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn (nouvel onglet)"><ContactRound size={18} aria-hidden="true" /> LinkedIn</a> : null}
            </div>
          </div>
          <PhotoCarousel photos={heroPhotos} />
        </section>
        <div className="portfolio-stack" data-paused={stackPaused} aria-label="Technologies utilisées dans mes projets"><div className="portfolio-stack-track">{[0, 1].map(copy => <div key={copy} className="portfolio-stack-group" aria-hidden={copy === 1 || undefined}>{technologies.map(technology => <TechLabel key={technology} name={technology} />)}</div>)}</div><button className="portfolio-stack-toggle" aria-label={stackPaused ? 'Relancer le défilement des technologies' : 'Mettre le défilement des technologies en pause'} aria-pressed={stackPaused} onClick={() => setStackPaused(value => !value)}>{stackPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}</button></div>
        <section id="a-propos" className="portfolio-container portfolio-about portfolio-section" aria-labelledby="about-title">
          <div className="portfolio-about-photo" data-motion-region><img {...responsiveImage(heroPhotos[0].src, '(max-width: 760px) 220px, 400px')} alt="Portrait de Roxane KIKI à l’AWS Summit" width={1200} height={1600} loading="lazy" decoding="async" /><span className="portfolio-photo-badge"><Sparkles size={22} strokeWidth={1.6} aria-hidden="true" /></span></div>
          <div className="portfolio-about-copy"><p className="portfolio-section-label">À propos</p><h2 id="about-title">Qui suis-je ?</h2><p>{content.about}</p><a className="portfolio-text-link" href="#projets">Découvrir mes projets <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </section>
        <section id="competences" className="portfolio-container portfolio-section portfolio-skills" aria-labelledby="skills-title">
          <p className="portfolio-section-label">Compétences</p><h2 id="skills-title" data-motion-region>Ce que j’apporte<CyclingTechnology /></h2>
          <div className="portfolio-skills-grid"><div><h3><Code2 size={20} aria-hidden="true" /> Compétences techniques</h3><div className="portfolio-skill-tags">{technologies.map(technology => <TechLabel key={technology} name={technology} />)}</div></div><div><h3><Database size={20} aria-hidden="true" /> Dans mes projets</h3><div className="portfolio-practice-tags">{['Interfaces responsive', 'API REST', 'Authentification', 'Optimisation web', 'SEO'].map(skill => <span key={skill}>{skill}</span>)}</div></div></div>
        </section>
        <section id="projets" className="portfolio-projects portfolio-section" aria-labelledby="projects-title"><div className="portfolio-container">
          <p className="portfolio-section-label">Projets</p><h2 id="projects-title" data-motion-region>Ce que j’ai créé<span className="portfolio-title-motif" aria-hidden="true"><i /><i /><i /></span></h2><p className="portfolio-section-intro">Quelques projets sur lesquels j’ai travaillé.</p>
          <div className="portfolio-filters" role="group" aria-label="Filtrer les projets">{filters.map(item => <button key={item.id} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}<span>{content.projects.filter(project => item.id === 'all' || project.category === item.id).length}</span></button>)}</div>
          <p className="sr-only" role="status">{projects.length} projets affichés</p>
          <div className="portfolio-project-grid">{projects.map(project => <article className="portfolio-project-card" key={project.id} aria-label={project.title}>
            {project.imageSrc ? <div className="portfolio-project-media"><img className="portfolio-project-image" {...responsiveImage(project.imageSrc, '(max-width: 520px) calc(100vw - 48px), (max-width: 760px) 50vw, 340px')} alt={project.imageAlt || `Interface du projet ${project.title}`} width={1280} height={800} loading="lazy" decoding="async" /></div> : null}
            <div className="portfolio-project-body"><div className="portfolio-project-heading"><h3>{project.title}</h3><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Code source de ${project.title} (nouvel onglet)`} className="portfolio-project-source"><Github size={17} aria-hidden="true" /><span>Code</span><ArrowUpRight size={13} aria-hidden="true" /></a></div><p className="portfolio-project-category">{project.category === 'professional' ? 'Projet professionnel' : 'Projet personnel'}</p><p className="portfolio-project-description">{project.summary || project.description}</p><div className="portfolio-project-tags">{project.technologies.slice(0, 4).map(technology => <TechLabel key={technology} name={technology} />)}</div></div>
          </article>)}</div>
          <a href="#contact" className="portfolio-project-invitation" data-motion-region><span className="portfolio-invitation-plus"><Plus size={23} aria-hidden="true" /></span><div><h3>Votre prochain projet ?</h3><p>Construisons quelque chose ensemble.</p></div><span className="portfolio-button">Me contacter <ArrowUpRight size={16} aria-hidden="true" /></span></a>
        </div></section>
        <section id="contact" className="portfolio-container portfolio-section portfolio-contact" aria-labelledby="contact-title"><div><p className="portfolio-section-label">Me contacter</p><h2 id="contact-title" data-motion-region>On discute ?<span className="portfolio-contact-dots" aria-hidden="true"><i /><i /><i /></span></h2><p>Un projet, une équipe, une idée à développer ? Je serais ravie d’échanger sur ce que nous pourrions construire ensemble.</p>
          {content.email ? <div className="portfolio-email"><a href={`mailto:${content.email}`}><Mail size={18} aria-hidden="true" />{content.email}</a><button className="portfolio-social-link" onClick={copyEmail} aria-label="Copier mon adresse email">{copyStatus === 'Adresse copiée' ? <Check size={16} /> : <Copy size={16} />} Copier</button><span role="status">{copyStatus}</span></div> : <p className="portfolio-content-note">Adresse email à ajouter.</p>}
          <div className="portfolio-socials"><a className="portfolio-social-link" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub (nouvel onglet)"><Github size={18} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></a>{linkedinUrl ? <a className="portfolio-social-link" href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn (nouvel onglet)"><ContactRound size={18} aria-hidden="true" />LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></a> : null}</div>
          </div><aside className="portfolio-contact-aside" aria-label="Mon profil en bref"><h3>En bref</h3><dl><div><dt>Profil</dt><dd>{content.role}</dd></div><div><dt>Projets</dt><dd>4 professionnels · 2 personnels</dd></div><div><dt>Code source</dt><dd><a href={githubUrl} target="_blank" rel="noopener noreferrer">github.com/kiroxane</a></dd></div></dl>{content.cvUrl ? <a className="portfolio-button" href={content.cvUrl} type="application/pdf" download>Télécharger mon CV (PDF, 417 Ko) <ArrowDown size={16} aria-hidden="true" /></a> : <><button className="portfolio-button" disabled aria-describedby="cv-note">Télécharger mon CV <ArrowDown size={16} aria-hidden="true" /></button><p id="cv-note" className="portfolio-content-note">Le CV sera disponible prochainement.</p></>}</aside>
        </section>
        <section className="portfolio-container portfolio-section portfolio-stories" aria-labelledby="stories-title">
          <p className="portfolio-section-label">En dehors du code</p>
          <h2 className="portfolio-terminal-title" id="stories-title" data-motion-region><span aria-hidden="true">$</span><TypingTitle text="La vie hors du terminal" /></h2>
          <PhotoCarousel photos={storyPhotos} variant="stories" />
        </section>
      </main>
      <footer className="portfolio-footer"><div className="portfolio-container portfolio-footer-grid"><div className="portfolio-footer-profile"><div><img src={thumbnailImage(heroPhotos[0].src)} alt="" width={40} height={40} loading="lazy" /><a href="#accueil">{content.name}</a></div><p>{content.role}<br />Des interfaces aux API.</p></div><div><h3>Sections</h3><nav aria-label="Navigation de pied de page">{navigation.slice(1).map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav></div><div><h3>À découvrir</h3><a href="#projets">Tous les projets</a><a href="/cv">Mon CV</a><a href="#a-propos">À propos</a></div><div><h3>Contact</h3><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>{linkedinUrl ? <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a> : null}<a href="#contact">Échangeons</a></div></div><div className="portfolio-container portfolio-footer-bottom"><span>© {new Date().getFullYear()} {content.name}. Tous droits réservés.</span><span>Développé avec React.</span></div></footer>
    </div>
  )
}
