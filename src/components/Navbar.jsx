import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, PROFILE } from '../data/portfolio'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link className="nav__brand" to="/" onClick={closeMenu}>
          <img
            className="nav__photo"
            src={PROFILE.photoPath}
            alt=""
            width={36}
            height={36}
          />
          <span className="nav__name">{PROFILE.name}</span>
        </Link>

        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`nav__links ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={isHome ? link.href : `/${link.href}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="nav__cv"
            href={PROFILE.cvPath}
            download
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
