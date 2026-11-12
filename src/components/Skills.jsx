import { SKILL_GROUPS } from '../data/portfolio'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <p className="section__label">Technical expertise</p>
        <h2 className="section__heading">Stack I use to ship.</h2>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <article key={group.label} className="skills__card">
              <h3>{group.label}</h3>
              {group.note ? <p className="skills__note">{group.note}</p> : null}
              <ul className="tag-list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
