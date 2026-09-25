import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight, ContactRound, FileDown, Globe, Mail, MapPin } from 'lucide-react'
import BrandIcon from '../components/BrandIcon'
import { portfolioContent } from '../data/portfolio'
import { cvContent } from '../data/cv'
import { applyPageMeta } from '../data/seo'
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/inter'
import '../styles/cv.css'

/** Dernier segment d'une URL de profil, pour un affichage court. */
function handleOf(url: string) {
  return url.replace(/\/+$/, '').split('/').pop() ?? url
}

export default function Cv() {
  const content = portfolioContent
  const cv = cvContent

  useEffect(() => {
    applyPageMeta({
      title: `CV — ${content.name}, ${content.role}`,
      description: `Le CV de ${content.name}, ${content.role} en Île-de-France : formation, stage en développement web, compétences React et Node.js, projets et contact.`,
      path: '/cv',
    })
  }, [content.name, content.role])

  return (
    <div className="cv-page">
      <a className="cv-skip-link" href="#cv-content">Aller au contenu</a>
      <header className="cv-header">
        <div className="cv-header-inner">
          <nav className="cv-navigation" aria-label="Navigation principale">
            <a href="/">Portfolio</a>
            <a href="/cv" aria-current="page">CV</a>
          </nav>
          {content.cvUrl
            ? <a className="cv-download" href={content.cvUrl} download><FileDown size={16} aria-hidden="true" /> Télécharger PDF</a>
            : null}
        </div>
      </header>

      <main id="cv-content" tabIndex={-1}>
        <div className="cv-container">

          <section className="cv-masthead" aria-labelledby="cv-name">
            <div className="cv-portrait">
              <img src={cv.portrait.src} alt={cv.portrait.alt} width={cv.portrait.width} height={cv.portrait.height} />
            </div>
            <div className="cv-identity">
              <h1 id="cv-name">{content.name}</h1>
              <p className="cv-role">{content.role}</p>
              <div className="cv-contact-grid">
                {content.email ? (
                  <a href={`mailto:${content.email}`}>
                    <span className="cv-contact-icon"><Mail size={15} aria-hidden="true" /></span>
                    <span className="cv-contact-value">{content.email}</span>
                  </a>
                ) : null}
                <p>
                  <span className="cv-contact-icon"><MapPin size={15} aria-hidden="true" /></span>
                  <span className="cv-contact-value">{cv.location}</span>
                </p>
                {content.githubUrl ? (
                  <a href={content.githubUrl} target="_blank" rel="noopener noreferrer">
                    <span className="cv-contact-icon"><BrandIcon name="GitHub" size={15} /></span>
                    <span className="cv-contact-value">{handleOf(content.githubUrl)}</span>
                  </a>
                ) : null}
                {content.linkedinUrl ? (
                  <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <span className="cv-contact-icon"><ContactRound size={15} aria-hidden="true" /></span>
                    <span className="cv-contact-value">LinkedIn</span>
                  </a>
                ) : null}
                <a href="/">
                  <span className="cv-contact-icon"><Globe size={15} aria-hidden="true" /></span>
                  <span className="cv-contact-value">Portfolio</span>
                </a>
              </div>
            </div>
          </section>

          <section className="cv-section" aria-labelledby="cv-profile-title">
            <h2 id="cv-profile-title">Profil</h2>
            <p className="cv-profile">{cv.profile}</p>
          </section>

          <section className="cv-section" aria-labelledby="cv-stack-title">
            <h2 id="cv-stack-title">Stack technique</h2>
            <div className="cv-stack">
              {cv.stack.map(technology => <span key={technology}><BrandIcon name={technology} size={15} colored />{technology}</span>)}
            </div>
          </section>

          {cv.experience.length ? (
            <section className="cv-section" aria-labelledby="cv-experience-title">
              <h2 id="cv-experience-title">Expérience</h2>
              {cv.experience.map(job => (
                <div className="cv-entry" key={`${job.role}-${job.organization}`}>
                  <div className="cv-entry-main">
                    <h3>{job.role}</h3>
                    <p>{job.organization}</p>
                    {job.detail ? <p className="cv-entry-detail">{job.detail}</p> : null}
                  </div>
                  <span className="cv-date">{job.date}</span>
                </div>
              ))}
            </section>
          ) : null}

          <section className="cv-section" aria-labelledby="cv-projects-title">
            <h2 id="cv-projects-title">Projets</h2>
            <div className="cv-projects-grid">
              {content.projects.map(project => (
                <article className="cv-project" key={project.id}>
                  <div className="cv-project-top">
                    <h3>{project.title}</h3>
                    <span className="cv-project-logos">
                      {project.technologies.slice(0, 3).map(technology => <BrandIcon key={technology} name={technology} size={15} colored />)}
                    </span>
                  </div>
                  <p>{project.summary || project.description}</p>
                  <a className="cv-project-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Code source de ${project.title} (nouvel onglet)`}>
                    <BrandIcon name="GitHub" size={14} /> Voir le code <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section cv-education" aria-labelledby="cv-education-title">
            <h2 id="cv-education-title">Formation</h2>
            {cv.education.map(step => (
              <div className="cv-entry" key={`${step.school}-${step.title}`}>
                <div className="cv-entry-main">
                  <h3>{step.school}{step.city ? `, ${step.city}` : ''}</h3>
                  <p className="cv-education-title"> — {step.title}</p>
                </div>
                <span className="cv-date">{step.date}</span>
              </div>
            ))}
          </section>

          {/* Ces deux sections courtes se placent côte à côte sur le PDF. */}
          <div className="cv-pair">
            <section className="cv-section" aria-labelledby="cv-languages-title">
              <h2 id="cv-languages-title">Langues</h2>
              <dl className="cv-languages">
                {cv.languages.map(language => (
                  <div key={language.name}>
                    <dt>{language.name}</dt>
                    <dd>{language.level}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {cv.interests.length ? (
              <section className="cv-section" aria-labelledby="cv-interests-title">
                <h2 id="cv-interests-title">Centres d’intérêt</h2>
                <div className="cv-interests">
                  {cv.interests.map(interest => <span key={interest}>{interest}</span>)}
                </div>
              </section>
            ) : null}
          </div>

        </div>
      </main>

      <footer className="cv-footer">
        <div className="cv-container cv-footer-inner">
          <span>© {new Date().getFullYear()} {content.name}. Tous droits réservés.</span>
          <a href="/"><ArrowLeft size={14} aria-hidden="true" /> Retour au portfolio</a>
        </div>
      </footer>
    </div>
  )
}
