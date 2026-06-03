import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disponível apenas para dispositivos móveis | Construindo',
}

export default function MobileOnly() {
  return (
    <>
      <Nav />
      <main className="mobile-only-page">
        <div className="mobile-only-card">
          <div className="hero-app-icon">
            <Image src="/icon-logo.png" alt="Construindo" width={72} height={72} priority />
          </div>
          <h1 className="mobile-only-title">Disponível apenas no app</h1>
          <p className="mobile-only-desc">
            O Construindo foi criado para o canteiro de obras — e funciona exclusivamente em dispositivos móveis. O cadastro e o login são feitos diretamente pelo aplicativo.
          </p>
          <p className="mobile-only-sub">Baixe agora e comece a usar:</p>
          <div className="mobile-only-buttons">
            <Link
              href="https://apps.apple.com/us/app/construindo/id6767595567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-store btn-store-dark"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="btn-store-text">
                <span className="btn-store-pre">Download on the</span>
                <span className="btn-store-name">App Store</span>
              </div>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.construindo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-store btn-store-outline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" />
              </svg>
              <div className="btn-store-text">
                <span className="btn-store-pre">GET IT ON</span>
                <span className="btn-store-name">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
