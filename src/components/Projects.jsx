import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/portfolio'

function getHighlights(project) {
  if (project.highlights?.length) return project.highlights
  return project.caseStudy?.contributions?.map((item) => item.title) || []
}

function Projects() {
  const featured = PROJECTS.filter((project) => project.featured)
  const others = PROJECTS.filter((project) => !project.featured)
  const ordered = [...featured, ...others]

  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <p className="section__label">Live project</p>
        <h2 className="section__heading">Real production work.</h2>

        <div className="project-list">
          {ordered.map((project) => {
            const highlights = getHighlights(project)
            const isFeatured = Boolean(project.featured)

            return (
              <article
                key={project.id}
                className={`featured featured--text ${isFeatured ? 'featured--primary' : ''}`}
              >
                <div className="featured__copy">
                  <div className="featured__top">
                    <p className="featured__eyebrow">{project.name}</p>
                    {project.liveUrl ? (
                      <span className="featured__badge">Live</span>
                    ) : isFeatured ? (
                      <span className="featured__badge">Flagship</span>
                    ) : null}
                  </div>
                  <h3 className="featured__title">{project.tagline}</h3>
                  {project.impact ? (
                    <p className="featured__impact">{project.impact}</p>
                  ) : null}
                  <p className="featured__text">{project.shortDescription}</p>
                  <p className="featured__contribution">{project.contribution}</p>

                  {highlights.length ? (
                    <ul className="featured__highlights">
                      {highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  <ul className="tag-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="featured__actions">
                    {project.href ? (
                      <Link to={project.href} className="btn btn--primary">
                        View Case Study
                      </Link>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        className="btn btn--ghost"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
