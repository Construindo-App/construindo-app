'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      if (window.scrollY > 40) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={[
          'site-nav',
          scrolled ? 'site-nav--scrolled' : '',
          menuOpen ? 'site-nav--open' : '',
        ].filter(Boolean).join(' ')}
      >
        <div className="site-nav-inner">

          {/* Desktop left: logo (hidden at top, slides in on scroll) + links */}
          <div className="site-nav-left">
            <Link href="/" className="site-nav-logo" aria-label="Construindo">
              <Image src="/icon-logo.png" alt="Construindo" width={32} height={32} priority />
            </Link>
            <ul className="site-nav-links">
              <li><Link href="/#funcionalidades">Funcionalidades</Link></li>
              <li><Link href="/planos">Planos</Link></li>
              <li><Link href="/#reviews">Reviews</Link></li>
              <li><Link href="/#download">Download</Link></li>
            </ul>
          </div>

          {/* Mobile only: centered logo — large at top, shrinks on scroll */}
          <Link href="/" className="site-nav-logo-mob" aria-label="Construindo">
            <Image src="/icon-logo.png" alt="Construindo" width={56} height={56} priority />
          </Link>

          {/* Desktop right: CTA */}
          <Link href="https://app.construindo.com" className="site-nav-cta">
            Acessar
          </Link>

          {/* Mobile right: hamburger */}
          <button
            className="site-nav-burger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* Mobile slide-down drawer */}
      <div
        className={`site-nav-drawer${menuOpen ? ' site-nav-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="site-nav-drawer-links">
          <li><Link href="/#funcionalidades" onClick={closeMenu}>Funcionalidades</Link></li>
          <li><Link href="/planos" onClick={closeMenu}>Planos</Link></li>
          <li><Link href="/#reviews" onClick={closeMenu}>Reviews</Link></li>
          <li><Link href="/#download" onClick={closeMenu}>Download</Link></li>
        </ul>
        <Link href="https://app.construindo.com" className="site-nav-drawer-cta" onClick={closeMenu}>
          Acessar
        </Link>
      </div>

      {menuOpen && <div className="site-nav-backdrop" onClick={closeMenu} />}
    </>
  )
}
