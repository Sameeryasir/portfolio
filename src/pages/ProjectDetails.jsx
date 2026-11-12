import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PROFILE, PROJECTS } from '../data/portfolio'

function ProjectDetails() {
  const { projectId } = useParams()
  const project = PROJECTS.find((item) => item.id === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  // Dealioo keeps its dedicated screenshot-heavy case study page.
  if (projectId === 'dealioo') {
    return <Navigate to="/projects/dealioo" replace />
  }

  if (!project?.caseStudy) {
    return <Navigate to="/#projects" replace />
  }

  const { caseStudy } = project

  return (
    <div className="portfolio">
      <Navbar />
      <main className="case">
        <section className="case-hero">
          <div className="section__inner">
            <Link to="/#projects" className="case__back">
              ← Back to projects
            </Link>
            <p className="section__label">Case study</p>
            <h1 className="case-hero__title">{project.name}</h1>
            <p className="case-hero__tagline">{project.tagline}</p>
            {project.impact ? (
              <p className="case-hero__impact">{project.impact}</p>
            ) : null}
            <p className="case-hero__lede">{project.shortDescription}</p>
            <ul className="tag-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-block">
          <div className="section__inner case-grid">
            <div>
              <p className="section__label">Project overview</p>
              <h2>What this project is.</h2>
              <p>{caseStudy.overview}</p>
              {caseStudy.oneLiner ? (
                <p className="case__callout">{caseStudy.oneLiner}</p>
              ) : null}
            </div>
            <div>
              <p className="section__label">The problem</p>
              <h2>What needed solving.</h2>
              <p>{project.problem}</p>
            </div>
          </div>
        </section>

        {caseStudy.audience?.length ? (
          <section className="case-block case-block--muted">
            <div className="section__inner">
              <p className="section__label">Quick view</p>
              <h2>Who it is for.</h2>
              <div className="case-contrib">
                {caseStudy.audience.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {caseStudy.flow?.length ? (
          <section className="case-block">
            <div className="section__inner">
              <p className="section__label">How it works</p>
              <h2>From house visit to purchase order.</h2>
              <p className="case__wide">
                The commercial spine is Quote → Job → Purchase Order.
              </p>
              <ol className="case-flow">
                {caseStudy.flow.map((item, index) => (
                  <li key={item.title}>
                    <span className="case-flow__step">Step {index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        {caseStudy.quoteStatuses?.length ? (
          <section className="case-block case-block--muted">
            <div className="section__inner">
              <p className="section__label">Quote lifecycle</p>
              <h2>What each status means.</h2>
              <ul className="case-list">
                {caseStudy.quoteStatuses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="case-block">
          <div className="section__inner">
            <p className="section__label">My role</p>
            <h2>How I contributed.</h2>
            <p className="case__wide">{caseStudy.role}</p>
          </div>
        </section>

        <section className="case-block case-block--muted">
          <div className="section__inner">
            <p className="section__label">Key contributions</p>
            <h2>Major functionality I worked on.</h2>
            <div className="case-contrib">
              {caseStudy.contributions.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-block case-block--muted">
          <div className="section__inner case-grid">
            <div>
              <p className="section__label">Technical architecture</p>
              <h2>How the system is shaped.</h2>
              <ul className="case-list">
                {caseStudy.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section__label">Technology stack</p>
              <h2>Tools used to ship.</h2>
              <ul className="tag-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-block">
          <div className="section__inner">
            <p className="section__label">Outcome</p>
            <h2>What shipped.</h2>
            <p className="case__wide">{project.outcome}</p>
            <div className="case__cta">
              <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>
                Discuss this work
              </a>
              <Link to="/#projects" className="btn btn--ghost">
                Back to projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetails
