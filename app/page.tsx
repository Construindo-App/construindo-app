import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimatedBudgetCard from '@/components/AnimatedBudgetCard'
import AnimatedStats from '@/components/AnimatedStats'
import PageAnimations from '@/components/PageAnimations'
import WhySection from '@/components/WhySection'
import AudienceSelector from '@/components/AudienceSelector'
import ClientPortal from '@/components/ClientPortal'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Nav />
      <PageAnimations />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-app-icon">
            <Image src="/icon-logo.png" alt="Construindo" width={72} height={72} priority />
          </div>
          <h1 className="hero-h1">
            Sua obra.<br /><span className="grad">Sob controle.</span>
          </h1>
          <p className="hero-sub">
            Lance a nota à noite, do celular, e saiba na hora quanto a obra já consumiu. Orçamento, diário, equipe e documentos no mesmo app — sem planilha, sem grupo de WhatsApp.
          </p>
          <div className="hero-actions">
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="btn-store btn-store-dark" target="_blank" rel="noopener noreferrer" data-fb-event="DownloadClick" data-fb-platform="ios">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <div className="btn-store-text">
                <span className="btn-store-pre">Download on the</span>
                <span className="btn-store-name">App Store</span>
              </div>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=app.construindo" className="btn-store btn-store-outline" target="_blank" rel="noopener noreferrer" data-fb-event="DownloadClick" data-fb-platform="android">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" /></svg>
              <div className="btn-store-text">
                <span className="btn-store-pre">GET IT ON</span>
                <span className="btn-store-name">Google Play</span>
              </div>
            </Link>
          </div>
          <p className="hero-free"><span className="hero-free-star" aria-hidden="true">✳</span>Grátis para a sua primeira obra. Sem cartão.</p>
        </div>
        <div className="hero-right">
          {/* Clip wrapper — overflow:hidden here so cards can escape hero-right */}
          <div className="hero-right-clip">
            <div className="hero-card" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hand-mockup.png" alt="App Construindo" className="hero-mockup-img" />
          </div>

          {/* Floating feature cards — inside hero-right so they can be shown on mobile */}
          <div className="hero-fc hero-fc--1" aria-hidden="true">
            <div className="hero-fc-ic">
              <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="2" y="3" width="18" height="17" rx="3"/>
                <path d="M2 8h18M7 1v4M15 1v4"/>
              </svg>
            </div>
            <div className="hero-fc-body">
              <span className="hero-fc-title">Próximo pagamento</span>
              <span className="hero-fc-sub">R$1.271,38 · 05 Fev 2026</span>
            </div>
            <span className="hero-fc-cta">Pagar</span>
          </div>

          <div className="hero-fc hero-fc--2" aria-hidden="true">
            <div className="hero-fc-ic hero-fc-ic--green">
              <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <polyline points="4 12 9 17 18 6"/>
              </svg>
            </div>
            <div className="hero-fc-body">
              <span className="hero-fc-title">Etapa concluída</span>
              <span className="hero-fc-sub">Fundação · 8 Jan 2026</span>
            </div>
          </div>

          <div className="hero-fc hero-fc--3" aria-hidden="true">
            <div className="hero-fc-ic hero-fc-ic--plain">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon-msword.svg" alt="" width={26} height={26} />
            </div>
            <div className="hero-fc-body">
              <span className="hero-fc-title">Contrato de Venda</span>
              <span className="hero-fc-sub">PDF · Compartilhado agora</span>
            </div>
            <span className="hero-fc-badge">Novo</span>
          </div>
        </div>

      </section>

      {/* AUDIENCE SELECTOR */}
      <AudienceSelector />

      {/* WHY */}
      <WhySection />

      {/* CLIENT PORTAL */}
      <ClientPortal />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* DOWNLOAD CTA */}
      <section className="dl-cta" id="download">
        <div className="dl-cta-outer">
          <div className="dl-cta-box">
            <div className="dl-cta-bg" />
            <div className="dl-cta-top">
              <div className="dl-cta-icon">
                <Image src="/icon-logo.png" alt="Construindo" width={72} height={72} />
              </div>
              <h2 className="dl-cta-h2">Comece a gerir suas obras<br />do jeito certo.</h2>
              <p className="dl-cta-p">Chega de planilha. Sua obra organizada ainda hoje, de graça.</p>
              <div className="dl-cta-btns">
                <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="btn-store btn-store-dark" target="_blank" rel="noopener noreferrer" data-fb-event="DownloadClick" data-fb-platform="ios">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  <div className="btn-store-text">
                    <span className="btn-store-pre">Download on the</span>
                    <span className="btn-store-name">App Store</span>
                  </div>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=app.construindo" className="btn-store btn-store-white" target="_blank" rel="noopener noreferrer" data-fb-event="DownloadClick" data-fb-platform="android">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" /></svg>
                  <div className="btn-store-text">
                    <span className="btn-store-pre">GET IT ON</span>
                    <span className="btn-store-name">Google Play</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="dl-cta-devices">
              <div className="dl-cta-phone-frame">
                <img className="dl-cta-phone" src="/dl-phone.webp" alt="Construindo no celular" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="main" />
    </>
  )
}
