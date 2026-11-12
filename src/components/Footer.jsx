import { PROFILE } from '../data/portfolio'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="footer__role">{PROFILE.valueProp}</p>
      </div>
    </footer>
  )
}

export default Footer
