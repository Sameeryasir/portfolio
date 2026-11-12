import { PROFILE } from '../data/portfolio'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__inner">
        <p className="section__label">Contact</p>
        <h2 className="section__heading">{PROFILE.contactHeadline}</h2>
        <p className="contact__text">{PROFILE.contactText}</p>

        <div className="contact__details">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
        </div>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>
            Email Me
          </a>
          <a className="btn btn--ghost" href={PROFILE.cvPath} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
