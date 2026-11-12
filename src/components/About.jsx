import { EDUCATION, PROFILE } from '../data/portfolio'

function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner about__layout">
        <div>
          <p className="section__label">About</p>
          <h2 className="section__heading">Focused on scalable systems and clean code.</h2>
          <p className="about__text">{PROFILE.about}</p>
        </div>

        <div className="about__side">
          <figure className="about__photo-card">
            <img
              src={PROFILE.photoPath}
              alt={`${PROFILE.name} profile photo`}
              width={320}
              height={400}
              loading="lazy"
            />
          </figure>

          <div className="about__card">
            <h3 className="about__side-title">Education</h3>
            <p className="about__degree">{EDUCATION.degree}</p>
            <p className="about__school">
              {EDUCATION.school} · {EDUCATION.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
