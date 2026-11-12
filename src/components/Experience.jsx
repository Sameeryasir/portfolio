import { EXPERIENCE } from '../data/portfolio'

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <p className="section__label">Experience</p>
        <h2 className="section__heading">Professional experience.</h2>

        <ol className="timeline">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <article className="timeline__card">
                <header className="timeline__header">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="timeline__role">{job.role}</p>
                    <p className="timeline__location">{job.location}</p>
                  </div>
                  <p className="timeline__period">{job.period}</p>
                </header>

                <p className="timeline__summary">{job.summary}</p>

                <ul className="timeline__projects">
                  {job.projects.map((project) => (
                    <li key={project.name}>
                      <strong>{project.name}</strong>
                      <span>{project.summary}</span>
                    </li>
                  ))}
                </ul>

                <ul className="tag-list tag-list--compact">
                  {job.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
