import { Link } from 'react-router-dom'
import { DEALIOO, PROFILE } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__identity">
            <img
              className="hero__photo"
              src={PROFILE.photoPath}
              alt={`${PROFILE.name} profile photo`}
              width={112}
              height={112}
            />
            <div>
              <p className="hero__name">{PROFILE.name}</p>
              <p className="hero__role">{PROFILE.title}</p>
            </div>
          </div>

          <h1 className="hero__headline">{PROFILE.headline}</h1>
          <p className="hero__lede">{PROFILE.lede}</p>
          <p className="hero__value">{PROFILE.valueProp}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        {DEALIOO ? (
          <aside className="hero__feature" aria-label="Featured project">
            <div className="hero__browser">
              <div className="hero__browser-bar">
                <span />
                <span />
                <span />
                <p>
                  {DEALIOO.liveUrl?.replace(/^https?:\/\//, '') || DEALIOO.name}
                </p>
              </div>
              <div className="hero__browser-body">
                <p className="hero__feature-label">Featured work</p>
                <h2>{DEALIOO.name}</h2>
                <p>{DEALIOO.impact || DEALIOO.shortDescription}</p>
                <ul className="hero__feature-tags">
                  {DEALIOO.stack.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="hero__feature-actions">
                  <Link to={DEALIOO.href} className="btn btn--primary">
                    Case Study
                  </Link>
                  {DEALIOO.liveUrl ? (
                    <a
                      className="btn btn--ghost"
                      href={DEALIOO.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
