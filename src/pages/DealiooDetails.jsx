import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DEALIOO, PROFILE } from '../data/portfolio'

function DealiooDetails() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!DEALIOO) return null

  const { caseStudy } = DEALIOO

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
            <h1 className="case-hero__title">{DEALIOO.name}</h1>
            <p className="case-hero__tagline">{DEALIOO.tagline}</p>
            <p className="case-hero__lede">{DEALIOO.shortDescription}</p>
            <ul className="tag-list">
              {DEALIOO.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {DEALIOO.liveUrl ? (
              <div className="case-hero__actions">
                <a
                  className="btn btn--primary"
                  href={DEALIOO.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit live site
                </a>
              </div>
            ) : null}
          </div>
        </section>

        <section className="case-block">
          <div className="section__inner case-grid">
            <div>
              <p className="section__label">Project overview</p>
              <h2>What Dealioo is.</h2>
              <p>{caseStudy.overview}</p>
            </div>
            <div>
              <p className="section__label">The problem</p>
              <h2>What needed solving.</h2>
              <p>{DEALIOO.problem}</p>
            </div>
          </div>
        </section>

        <section className="case-block case-block--muted">
          <div className="section__inner">
            <p className="section__label">My role</p>
            <h2>How I contributed.</h2>
            <p className="case__wide">{caseStudy.role}</p>
          </div>
        </section>

        <section className="case-block">
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
          <div className="section__inner">
            <p className="section__label">Product areas</p>
            <h2>What the platform covers.</h2>
            <div className="case-contrib">
              <article>
                <h3>Business creation</h3>
                <p>
                  Multi-step onboarding for business essentials, profile,
                  location, and optional Meta Ads, Stripe, and Google Ads
                  connections.
                </p>
              </article>
              <article>
                <h3>Business operations</h3>
                <p>
                  Admin and business dashboards for performance, campaigns,
                  orders and payments, guest pass scanning, and activity.
                </p>
              </article>
              <article>
                <h3>Campaign overview</h3>
                <p>
                  Campaign performance plus funnel canvas and automation
                  builders for the customer journey and follow-up flows.
                </p>
              </article>
              <article>
                <h3>Google and Meta Ads</h3>
                <p>
                  Integrated campaign setup, targeting, creatives, and publish
                  flows for Google Ads and Meta Ads inside the product.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-block">
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
                {DEALIOO.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-block case-block--muted">
          <div className="section__inner">
            <p className="section__label">Outcome</p>
            <h2>What shipped.</h2>
            <p className="case__wide">{DEALIOO.outcome}</p>
            <div className="case__cta">
              {DEALIOO.liveUrl ? (
                <a
                  className="btn btn--primary"
                  href={DEALIOO.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit live site
                </a>
              ) : null}
              <a className="btn btn--ghost" href={`mailto:${PROFILE.email}`}>
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

export default DealiooDetails
