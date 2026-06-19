import Image from 'next/image'

type Audience = {
  id: string
  title: string
  desc: string
  img: string
}

const AUDIENCES: Audience[] = [
  {
    id: 'construtores',
    title: 'Construtores',
    desc: 'Cronograma, orçamento, equipes e documentos de todas as suas obras em um único app.',
    img: '/aud-construtores.jpg',
  },
  {
    id: 'corretores',
    title: 'Corretores',
    desc: 'Acompanhe obras, parcelas dos clientes e repasse de comissões em tempo real.',
    img: '/aud-corretores.jpg',
  },
  {
    id: 'empreiteiros',
    title: 'Empreiteiros',
    desc: 'Controle presença, pagamentos e comprove cada serviço com o diário de obra.',
    img: '/aud-empreiteiros.jpg',
  },
]

export default function AudienceSelector() {
  return (
    <section className="sec aud" id="para-quem">
      <div className="sec-inner">
        <div className="aud-header" data-anim="fade-up">
          <h2 className="aud-h2">
            Facilite o dia a dia<br />
            do seu negócio
          </h2>
          <p className="aud-lead">
            Não importa o seu papel na obra — o Construindo organiza o seu dia a dia e mantém todo mundo na mesma página, em tempo real.
          </p>
        </div>

        <div className="aud-cards">
          {AUDIENCES.map((a, i) => (
            <div className="aud-card" key={a.id} data-anim="fade-up" data-delay={i + 1}>
              <Image
                src={a.img}
                alt={a.title}
                fill
                sizes="(max-width: 880px) 100vw, 33vw"
                className="aud-card-img"
              />
              <div className="aud-card-overlay" />
              <div className="aud-card-body">
                <h3 className="aud-card-title">{a.title}</h3>
                <p className="aud-card-desc">{a.desc}</p>
                <a href="#download" className="aud-card-btn">Começar agora</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
