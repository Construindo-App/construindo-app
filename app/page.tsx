import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimatedBudgetCard from '@/components/AnimatedBudgetCard'
import AnimatedStats from '@/components/AnimatedStats'
import PageAnimations from '@/components/PageAnimations'

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
            Do canteiro ao escritório — cronograma, orçamento, equipes e documentos em um único app. Chega de planilha, chega de WhatsApp.
          </p>
          <div className="hero-actions">
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="btn-store btn-store-dark" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <div className="btn-store-text">
                <span className="btn-store-pre">Download on the</span>
                <span className="btn-store-name">App Store</span>
              </div>
            </Link>
            <Link href="#" className="btn-store btn-store-outline">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" /></svg>
              <div className="btn-store-text">
                <span className="btn-store-pre">GET IT ON</span>
                <span className="btn-store-name">Google Play</span>
              </div>
            </Link>
          </div>
          <p className="hero-free"><span className="hero-free-star" aria-hidden="true">✳</span>Experimente nosso plano gratuito para 1 obra</p>
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

      {/* WHY */}
      <section className="sec why" id="por-que">
        <div className="sec-inner">
          <div className="why-header">
            <h2 className="sec-h2" data-anim="fade-up" data-delay="1">Tudo que sua obra precisa,<br /><span className="grad">num único lugar</span></h2>
          </div>
          <div className="why-steps">
            <div className="why-step" data-anim="fade-up">
              <div className="why-step-body">
                <div className="why-step-num">01 <span className="why-sep">/ 03</span><span className="why-ttl">Controle financeiro</span></div>
                <p>Acompanhe orçado vs. realizado em tempo real. Identifique desvios antes que virem problema — não no fim do mês.</p>
              </div>
              <div className="why-step-visual why-step-visual--phone ws-bg-1">
                <div className="iphone-frame ws-phone">
                  <div className="iphone-inner">
                    <div className="iphone-screen ws-screen-finance">
                      <div className="wsf-budget">
                        <div className="wsf-budget-row">
                          <span className="wsf-budget-used">R$107.834,71</span>
                          <span className="wsf-budget-total">R$220.000,00</span>
                        </div>
                        <div className="wsf-budget-bar"><div className="wsf-budget-fill"></div></div>
                      </div>
                      <div className="wsf-donut-wrap">
                        <svg className="wsf-donut" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#5B7EF5" strokeWidth="16" strokeLinecap="round" className="wsf-seg-1" strokeDashoffset="-10" />
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#E8407E" strokeWidth="16" strokeLinecap="round" className="wsf-seg-2" strokeDashoffset="-124" />
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#E85440" strokeWidth="16" strokeLinecap="round" className="wsf-seg-3" strokeDashoffset="-196" />
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#F5A020" strokeWidth="16" strokeLinecap="round" className="wsf-seg-4" strokeDashoffset="-258" />
                        </svg>
                        <div className="wsf-donut-center">
                          <div className="wsf-donut-num">472</div>
                          <div className="wsf-donut-lbl">NOTAS</div>
                        </div>
                      </div>
                      <div className="wsf-legend">
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{fill:'#5B7EF5'}}><path d="M0 7.25V2.75C0 1.233 1.233 0 2.75 0H8.956C9.552 0 10.101 0.298 10.426 0.799L12.88 4.593C13.04 4.841 13.04 5.16 12.88 5.407L10.425 9.201C10.101 9.701 9.552 9.999 8.956 9.999H2.75C1.233 9.999 0 8.766 0 7.249V7.25Z"/></svg>Terreno 45.1%</div>
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{fill:'#E8407E'}}><path d="M0 7.25V2.75C0 1.233 1.233 0 2.75 0H8.956C9.552 0 10.101 0.298 10.426 0.799L12.88 4.593C13.04 4.841 13.04 5.16 12.88 5.407L10.425 9.201C10.101 9.701 9.552 9.999 8.956 9.999H2.75C1.233 9.999 0 8.766 0 7.249V7.25Z"/></svg>Mão de obra 24.9%</div>
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{fill:'#E85440'}}><path d="M0 7.25V2.75C0 1.233 1.233 0 2.75 0H8.956C9.552 0 10.101 0.298 10.426 0.799L12.88 4.593C13.04 4.841 13.04 5.16 12.88 5.407L10.425 9.201C10.101 9.701 9.552 9.999 8.956 9.999H2.75C1.233 9.999 0 8.766 0 7.249V7.25Z"/></svg>Materiais</div>
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{fill:'#F5A020'}}><path d="M0 7.25V2.75C0 1.233 1.233 0 2.75 0H8.956C9.552 0 10.101 0.298 10.426 0.799L12.88 4.593C13.04 4.841 13.04 5.16 12.88 5.407L10.425 9.201C10.101 9.701 9.552 9.999 8.956 9.999H2.75C1.233 9.999 0 8.766 0 7.249V7.25Z"/></svg>Fundação</div>
                      </div>
                      <div className="wsf-bottom">
                        <div className="wsf-search">
                          <div className="wsf-search-bar">
                            <svg className="wsf-search-icon" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                            <span className="wsf-search-placeholder">Buscar por nome ou empresa</span>
                          </div>
                          <div className="wsf-search-filter">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
                          </div>
                        </div>
                        <div className="wsf-list">
                          {[
                            {date:'24/01/2025', name:'Porcelanatos Sala Estar', cat:'#E85440', val:'R$1.271,38'},
                            {date:'24/01/2025', name:'Serviço de Pedreiro', cat:'#E8407E', val:'R$1.800,00'},
                            {date:'23/01/2025', name:'Cimento Portland CP-II', cat:'#E85440', val:'R$890,00'},
                            {date:'23/01/2025', name:'Areia e Brita', cat:'#F5A020', val:'R$620,50'},
                            {date:'22/01/2025', name:'Instalação Elétrica', cat:'#E8407E', val:'R$2.400,00'},
                            {date:'22/01/2025', name:'Vergalhão CA-50', cat:'#F5A020', val:'R$3.180,00'},
                          ].map((item, i) => (
                            <div key={i}>
                              {(i === 0 || item.date !== [{date:'24/01/2025'},{date:'24/01/2025'},{date:'23/01/2025'},{date:'23/01/2025'},{date:'22/01/2025'},{date:'22/01/2025'}][i-1]?.date) &&
                                <div className="wsf-date">{item.date}</div>}
                              <div className={`wsf-row wsf-row--anim${Math.min(i+1,6)}`}>
                                <div className="wsf-row-icon">
                                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 17H8" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 13H16" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V8.41421C20 8.149 19.8946 7.89465 19.7071 7.70711L15.2929 3.29289C15.1054 3.10536 14.851 3 14.5858 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 9H16C15.4696 9 14.9609 8.78929 14.5858 8.41421C14.2107 8.03914 14 7.53043 14 7V3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <div className="wsf-row-info">
                                  <div className="wsf-row-name">{item.name}</div>
                                  <div className="wsf-row-sub"><svg className="wsf-tag wsf-tag--sm" viewBox="0 0 14 10" style={{fill:item.cat}}><path d="M0 7.25V2.75C0 1.233 1.233 0 2.75 0H8.956C9.552 0 10.101 0.298 10.426 0.799L12.88 4.593C13.04 4.841 13.04 5.16 12.88 5.407L10.425 9.201C10.101 9.701 9.552 9.999 8.956 9.999H2.75C1.233 9.999 0 8.766 0 7.249V7.25Z"/></svg>{item.val} · Bigolin</div>
                                </div>
                                <div className="wsf-row-eye"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="iphone-home"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-step" data-anim="fade-up" data-delay="1">
              <div className="why-step-body">
                <div className="why-step-num">02 <span className="why-sep">/ 03</span><span className="why-ttl">Diário de obra</span></div>
                <p>Cada etapa documentada com fotos e anotações. Seu cliente acompanha o avanço real da obra sem precisar ligar ou visitar o canteiro.</p>
              </div>
              <div className="why-step-visual why-step-visual--phone ws-bg-2">
                <div className="iphone-frame ws-phone">
                  <div className="iphone-inner">
                    <div className="iphone-screen ws-screen-diary">
                      <div className="wsd-path">
                        <img src="/photo-path.png" alt="Progresso" style={{width:'100%',height:'100%',objectFit:'contain',objectPosition:'center'}} />
                      </div>
                      <div className="wsd-card">
                        <div className="wsd-title">Diário da Obra</div>
                        <div className="wsd-feed">
                          <div className="wsd-entry wsd-entry--anim1">
                            <div className="wsd-date-row">
                              <span className="wsd-diamond">◆</span>
                              <span className="wsd-date">8 de Janeiro, 2025</span>
                            </div>
                            <div className="wsd-photo">
                              <img src="/log-1.png" alt="Fundação" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                              <div className="wsd-photo-overlay">
                                <span className="wsd-photo-tag">Fundação</span>
                              </div>
                            </div>
                            <p className="wsd-desc">Formas e armadura das vigas baldrame posicionadas. Terreno preparado para concretagem.</p>
                          </div>
                          <div className="wsd-entry wsd-entry--anim2">
                            <div className="wsd-date-row">
                              <span className="wsd-diamond">◆</span>
                              <span className="wsd-date">2 de Janeiro, 2025</span>
                            </div>
                            <div className="wsd-photo-row">
                              <div className="wsd-photo wsd-photo--half">
                                <img src="/log-2-1.png" alt="Acabamento" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                                <div className="wsd-photo-overlay">
                                  <span className="wsd-photo-tag">Acabamento</span>
                                </div>
                              </div>
                              <div className="wsd-photo wsd-photo--half">
                                <img src="/log-2-2.png" alt="Sanca" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                              </div>
                            </div>
                            <p className="wsd-desc">Gesso e sanca com LED instalados. Porcelanato aplicado na sala principal.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="iphone-home"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-step" data-anim="fade-up" data-delay="2">
              <div className="why-step-body">
                <div className="why-step-num">03 <span className="why-sep">/ 03</span><span className="why-ttl">Equipes e fornecedores</span></div>
                <p>Gerencie presença, produtividade e pagamentos de subempreiteiros direto do app. Histórico completo de cada profissional.</p>
              </div>
              <div className="why-step-visual why-step-visual--phone ws-bg-3">
                <div className="iphone-frame ws-phone">
                  <div className="iphone-inner">
                    <div className="iphone-screen ws-screen-team">
                      <div className="wst-header">
                        <div className="wst-title">Equipe</div>
                        <div className="wst-badge">8 ativos hoje</div>
                      </div>
                      <div className="wst-list">
                        {[
                          {name:'Carlos Silva',   role:'Pedreiro',    present:true,  pay:'R$320/dia'},
                          {name:'João Oliveira',  role:'Eletricista',  present:true,  pay:'R$380/dia'},
                          {name:'Pedro Costa',    role:'Servente',     present:true,  pay:'R$200/dia'},
                          {name:'Ana Ferreira',   role:'Pintora',      present:false, pay:'R$280/dia'},
                          {name:'Lucas Mendes',   role:'Encanador',    present:true,  pay:'R$350/dia'},
                        ].map((p,i)=>(
                          <div className={`wst-row wst-row--anim${i+1}`} key={i}>
                            <div className="wst-avatar" style={{background: ['#818CF8','#E8407E','#5B7EF5','#F5A020','#34d399'][i]}}>
                              {p.name.charAt(0)}
                            </div>
                            <div className="wst-info">
                              <div className="wst-name">{p.name}</div>
                              <div className="wst-role">{p.role} · {p.pay}</div>
                            </div>
                            <div className={`wst-status ${p.present?'present':'absent'}`}>
                              {p.present ? '✓' : '○'}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="wst-section">Fornecedores</div>
                      <div className={`wst-row wst-row--anim6`}>
                        <div className="wst-avatar" style={{background:'#6b7280',fontSize:'5px',fontWeight:700}}>BM</div>
                        <div className="wst-info">
                          <div className="wst-name">Bigolin Materiais</div>
                          <div className="wst-role">Última entrega: 24/01</div>
                        </div>
                        <div className="wst-status present">✓</div>
                      </div>
                    </div>
                    <div className="iphone-home"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE DARK */}
      <section className="sec feat-dark-sec">
        <div className="feat-dark">
        <div className="feat-dark-inner">
          <div data-anim="fade-left">
            <h2 className="sec-h2">Para Imobiliárias<br />e Corretores</h2>
            <p className="sec-sub" style={{ color: 'var(--dark-muted)' }}>Tudo que o corretor precisa para acompanhar clientes, obras e comissões — em um único lugar, em tempo real.</p>
            <div className="feat-list">
              <div className="feat-item">
                <div className="feat-check">✓</div>
                <div>
                  <div className="feat-item-title">Parcelas e pagamentos dos clientes</div>
                  <div className="feat-item-desc">Acompanhe o histórico financeiro de cada comprador, parcelas pagas, pendentes e vencimentos — sem precisar ligar para a construtora.</div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-check">✓</div>
                <div>
                  <div className="feat-item-title">Andamento da obra em tempo real</div>
                  <div className="feat-item-desc">Fotos, diário de obra e percentual de avanço atualizados pela construtora. Responda seu cliente na hora, com informação precisa.</div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-check">✓</div>
                <div>
                  <div className="feat-item-title">Repasse de comissões</div>
                  <div className="feat-item-desc">Visualize o status de cada comissão, datas de repasse e valores previstos. Chega de planilha para controlar o que você tem a receber.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark-phone" data-anim="fade-right">
            <div className="dp-title">Carteira de Clientes — Edifício Nobre</div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#4ade80' }}></div>
              <div className="dp-name">Apto 301 — Marcos Antônio</div>
              <div className="dp-badge" style={{ background: 'rgba(74,222,128,.15)', color: '#4ade80' }}>Em dia</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#f59e0b' }}></div>
              <div className="dp-name">Apto 204 — Fernanda Lima</div>
              <div className="dp-badge" style={{ background: 'rgba(245,158,11,.15)', color: '#f59e0b' }}>Pendente</div>
              <div className="dp-pct">72%</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: 'var(--orange)' }}></div>
              <div className="dp-name">Apto 102 — Carlos Souza</div>
              <div className="dp-badge" style={{ background: 'rgba(222,99,51,.15)', color: 'var(--orange)' }}>Vence hoje</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#4ade80' }}></div>
              <div className="dp-name">Apto 405 — Ana Beatriz</div>
              <div className="dp-badge" style={{ background: 'rgba(74,222,128,.15)', color: '#4ade80' }}>Em dia</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#3B82F6' }}></div>
              <div className="dp-name">Apto 501 — Ricardo Neves</div>
              <div className="dp-badge" style={{ background: 'rgba(59,130,246,.15)', color: '#3B82F6' }}>Contrato</div>
              <div className="dp-pct">Novo</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FEATURE LIGHT */}
      <section className="sec feat-light">
        <div className="feat-light-inner">
          <AnimatedBudgetCard />
          <div data-anim="fade-right">
            <div className="eyebrow">Controle financeiro</div>
            <h2 className="sec-h2">Orçamento e custos em tempo real</h2>
            <p className="sec-sub">Registre notas fiscais, aprovações e pagamentos. Veja orçado vs. realizado por categoria em tempo real, antes que o desvio vire problema.</p>
            <div className="feat-list" style={{ marginTop: '28px' }}>
              <div className="feat-item">
                <div className="feat-check" style={{ background: 'var(--orange-lt)' }}>✓</div>
                <div>
                  <div className="feat-item-title" style={{ color: 'var(--text)' }}>Notas fiscais digitais</div>
                  <div className="feat-item-desc" style={{ color: 'var(--muted)' }}>Importe NF-e com um toque. Categorização automática por tipo de custo e obra.</div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-check" style={{ background: 'var(--orange-lt)' }}>✓</div>
                <div>
                  <div className="feat-item-title" style={{ color: 'var(--text)' }}>Aprovação de pagamentos</div>
                  <div className="feat-item-desc" style={{ color: 'var(--muted)' }}>Fluxo de aprovação com alçadas por valor. Histórico auditável de cada liberação.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-sec">
        <AnimatedStats />
      </section>

      {/* CLIENT PORTAL */}
      <section className="sec client-feat" id="como-funciona">
        <div className="sec-inner">
          <div className="cf-header">
<h2 className="sec-h2" data-anim="fade-up" data-delay="1">Transparência total<br /><span className="grad">para seus clientes</span></h2>
            <p className="sec-sub cf-sub" data-anim="fade-up" data-delay="2">Seus clientes acompanham a obra em tempo real — sem telefonemas, sem WhatsApp. Tudo num portal dedicado, simples e seguro.</p>
          </div>

          {/* iPhone mocks */}
          <div className="cf-phones" data-anim="fade-up" data-delay="4">

            {/* iPhone 1: Diário de obra */}
            <div className="cf-phone-col">
              <div className="iphone-frame">
                <div className="iphone-inner">
                  <div className="iphone-island"></div>
                  <div className="iphone-screen cf-snap-diary">
                    <div className="diary-scene">
                      <svg className="diary-svg" viewBox="0 0 430 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 27 131 C 60 95 85 65 110 65 C 150 65 200 135 242 145 C 285 155 340 210 362 216 C 370 240 350 258 321 258" stroke="#C8BFB0" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round"/>
                      </svg>
                      <Image src="/diary/icon-orange.png" alt="" width={46} height={46} className="dicon dicon-orange" style={{width:46,height:46}} />
                      <Image src="/diary/photo1.png" alt="" width={197} height={183} className="dphoto dphoto-1" style={{width:120,height:'auto'}} />
                      <Image src="/diary/photo2.png" alt="" width={197} height={183} className="dphoto dphoto-2" style={{width:120,height:'auto'}} />
                      <Image src="/diary/photo3.png" alt="" width={197} height={183} className="dphoto dphoto-3" style={{width:120,height:'auto'}} />
                      <Image src="/diary/icon-green.png" alt="" width={46} height={46} className="dicon dicon-green" style={{width:46,height:46}} />
                    </div>
                  </div>
                  <div className="iphone-home"></div>
                </div>
              </div>
              <div className="cf-phone-label">
                <h3>Diário de obra</h3>
                <p>Registros diários com fotos e anotações. O cliente acompanha o avanço real em tempo real.</p>
              </div>
            </div>

            {/* iPhone 2: Gestão de pagamentos */}
            <div className="cf-phone-col cf-phone-col--center">
              <div className="iphone-frame">
                <div className="iphone-inner">
                  <div className="iphone-island"></div>
                  <div className="iphone-screen cf-snap-pay">
                    <div className="cfs-profile">
                      <div className="cfs-avatar">M</div>
                      <div>
                        <div className="cfs-name">Marcos Antônio Frederico</div>
                        <div className="cfs-role">Comprador</div>
                      </div>
                    </div>
                    <div className="cfs-table">
                      <div className="cfs-tr"><span>Valor total</span><span>R$300.000,00</span></div>
                      <div className="cfs-tr"><span>Entrada</span><span>R$60.000,00</span></div>
                      <div className="cfs-tr"><span>Sinal</span><span>R$1.271,38</span></div>
                    </div>
                    <div className="cfs-pay-title">Pagamentos 3/12</div>
                    <div className="cfs-prog"><div className="cfs-prog-fill"></div></div>
                    <div className="cfs-plist">
                      <div className="cfs-prow">
                        <div className="cfs-pcheck green">✓</div>
                        <div className="cfs-pinfo"><div className="cfs-pdate">5 Out 2025</div><div className="cfs-psub">Parcela 2</div></div>
                        <div className="cfs-pamt">R$10.000</div>
                      </div>
                      <div className="cfs-prow">
                        <div className="cfs-pcheck amber">⏱</div>
                        <div className="cfs-pinfo"><div className="cfs-pdate">5 Nov 2025</div><div className="cfs-psub">Parcela 3</div></div>
                        <div className="cfs-pamt">R$1.271</div>
                      </div>
                      <div className="cfs-prow muted">
                        <div className="cfs-pcheck grey"></div>
                        <div className="cfs-pinfo"><div className="cfs-pdate">5 Dez 2025</div><div className="cfs-psub">Parcela 4</div></div>
                        <div className="cfs-pamt">R$7.500</div>
                      </div>
                    </div>
                  </div>
                  <div className="iphone-home"></div>
                </div>
              </div>
              <div className="cf-phone-label">
                <h3>Gestão de pagamentos</h3>
                <p>Cronograma financeiro e boletos organizados. Histórico completo de cada parcela.</p>
              </div>
            </div>

            {/* iPhone 3: Gestão de documentos */}
            <div className="cf-phone-col">
              <div className="iphone-frame">
                <div className="iphone-inner">
                  <div className="iphone-island"></div>
                  <div className="iphone-screen cf-snap-docs">
                    <div className="cfs-app-header">
                      <span className="cfs-back">←</span>
                      <span className="cfs-app-icon">🏠</span>
                      <span className="cfs-app-title">Casa JF</span>
                    </div>
                    <div className="cfs-doc-title">Documentos da Obra</div>
                    <div className="cfs-tabs">
                      <div className="cfs-tab active">Compartilhados</div>
                      <div className="cfs-tab">Outros</div>
                    </div>
                    <div className="cfs-drow">
                      <div className="cfs-dicon"></div>
                      <div className="cfs-dinfo"><div className="cfs-dname">Contrato de Compra</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                      <div className="cfs-toggle off"><span /></div>
                    </div>
                    <div className="cfs-drow">
                      <div className="cfs-dicon"></div>
                      <div className="cfs-dinfo"><div className="cfs-dname">Projeto Arquitetônico</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                      <div className="cfs-toggle off"><span /></div>
                    </div>
                    <div className="cfs-drow">
                      <div className="cfs-dicon"></div>
                      <div className="cfs-dinfo"><div className="cfs-dname">Matrícula da Imóvel</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                      <div className="cfs-toggle on"><span /></div>
                    </div>
                    <div className="cfs-drow">
                      <div className="cfs-dicon"></div>
                      <div className="cfs-dinfo"><div className="cfs-dname">Projeto Arq. Prefeitura</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                      <div className="cfs-toggle on"><span /></div>
                    </div>
                  </div>
                  <div className="iphone-home"></div>
                </div>
              </div>
              <div className="cf-phone-label">
                <h3>Gestão de documentos</h3>
                <p>Contratos, plantas e alvarás sempre disponíveis. Sem e-mail perdido, sem pasta física.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-sec" id="depoimentos">
        <div className="testi-header">
          <div>
            <div className="eyebrow" data-anim="fade-up">Depoimentos</div>
            <h2 className="sec-h2" data-anim="fade-up" data-delay="1">Quem usa,<br /><span className="grad">não volta atrás</span></h2>
          </div>
          <p data-anim="fade-up" data-delay="2" style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '340px', lineHeight: '1.6' }}>Construtoras de todo o Brasil entregando obras no prazo e no orçamento.</p>
        </div>
        <div className="testi-grid">
          <div className="testi-card" data-anim="scale-up" data-delay="1">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">&ldquo;Antes usávamos planilhas e e-mail para tudo. Hoje qualquer sócio acessa o andamento de qualquer obra pelo celular. A visibilidade é impressionante.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-av" style={{ background: 'var(--orange)' }}>C</div>
              <div>
                <div className="testi-name">Carlos Mendonça</div>
                <div className="testi-role">Diretor, Construtora Mendonça</div>
              </div>
            </div>
          </div>
          <div className="testi-card" data-anim="scale-up" data-delay="2">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">&ldquo;Reduzimos desvios de orçamento em 28% no primeiro trimestre. O alerta de desvio em tempo real mudou nossa forma de gerir contratos para sempre.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-av" style={{ background: '#10B981' }}>A</div>
              <div>
                <div className="testi-name">Ana Lima</div>
                <div className="testi-role">Engenheira de Custos, Tenda</div>
              </div>
            </div>
          </div>
          <div className="testi-card" data-anim="scale-up" data-delay="3">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">&ldquo;O diário de obra digital resolveu brigas históricas sobre o que foi ou não executado. Foto, data e responsável registrados para cada evento da obra.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-av" style={{ background: '#8B5CF6' }}>M</div>
              <div>
                <div className="testi-name">Marcelo Ramos</div>
                <div className="testi-role">Engenheiro de Campo, EZTec</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="download">
        <svg className="final-cta-house" viewBox="0 0 500 460" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          {/* Main walls + roof */}
          <path className="h-outline" pathLength="1" d="M 55 420 L 445 420 L 445 228 L 250 62 L 55 228 Z" />
          {/* Chimney */}
          <path className="h-chimney" pathLength="1" d="M 315 122 L 315 74 L 362 74 L 362 150" />
          {/* Door */}
          <path className="h-door" pathLength="1" d="M 198 420 L 198 308 L 302 308 L 302 420" />
          {/* Left window */}
          <path className="h-win-l" pathLength="1" d="M 88 262 L 88 332 L 172 332 L 172 262 Z" />
          {/* Right window */}
          <path className="h-win-r" pathLength="1" d="M 328 262 L 328 332 L 412 332 L 412 262 Z" />
        </svg>
        <div className="final-cta-inner" data-anim="fade-up">
          <h2>Comece a gerir suas obras<br /><span className="grad">do jeito certo.</span></h2>
          <p>Chega de planilha. Sua obra organizada ainda hoje, de graça.</p>
          <div className="final-btns">
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              Baixar na App Store
            </Link>
            <Link href="#" className="btn-secondary" style={{ fontSize: '16px', padding: '16px 36px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" /></svg>
              Baixar no Google Play
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="main" />
    </>
  )
}
