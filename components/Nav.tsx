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

    // Sincroniza no mount: a página pode montar já rolada (reload com scroll
    // restaurado, volta pelo histórico, ou entrada por link âncora). Sem isto
    // a barra fica transparente até o primeiro scroll do usuário.
    onScroll()
    // A restauração de scroll do navegador pode acontecer depois da hidratação.
    const raf = requestAnimationFrame(onScroll)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
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
              <li><Link href="/#por-que">Funcionalidades</Link></li>
              <li><Link href="/planos">Planos</Link></li>
              <li><Link href="/#depoimentos">Reviews</Link></li>
              <li><Link href="/#download">Download</Link></li>
            </ul>
          </div>

          {/* Mobile only: centered logo — large at top, shrinks on scroll */}
          <Link href="/" className="site-nav-logo-mob" aria-label="Construindo">
            <Image src="/icon-logo.png" alt="Construindo" width={56} height={56} priority />
          </Link>

          {/* Desktop right: CTA */}
          <a href="https://conta.construindo.app" className="site-nav-cta">
            Acessar
          </a>

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
          <li><Link href="/#por-que" onClick={closeMenu}>Funcionalidades</Link></li>
          <li><Link href="/planos" onClick={closeMenu}>Planos</Link></li>
          <li><Link href="/#depoimentos" onClick={closeMenu}>Reviews</Link></li>
          <li><Link href="/#download" onClick={closeMenu}>Download</Link></li>
        </ul>
        <a href="https://conta.construindo.app" className="site-nav-drawer-cta" onClick={closeMenu}>
          Acessar
        </a>
      </div>

      {menuOpen && <div className="site-nav-backdrop" onClick={closeMenu} />}
    </>
  )
}
