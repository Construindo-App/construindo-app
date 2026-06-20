import AnimatedStats from '@/components/AnimatedStats'

type Card =
  | { type: 'quote'; quote: string; name: string; role: string; avatar: string }
  | { type: 'video'; poster: string; name: string; role: string }
  | { type: 'rating'; value: string; label: string }
  | { type: 'image'; src: string }
  | { type: 'textimage'; src: string; text: string }

type Column = { w: number; cards: Card[] }

const COLUMNS: Column[] = [
  {
    w: 360,
    cards: [
      {
        type: 'quote',
        quote: 'Reduzimos desvios de orçamento em 28% no primeiro trimestre. O alerta em tempo real mudou tudo.',
        name: 'Ana Lima',
        role: 'Engenheira de Custos, Tenda',
        avatar: '/avatars/ana.jpg',
      },
      {
        type: 'quote',
        quote: 'Meus clientes acompanham tudo pelo app. As ligações pedindo atualização da obra praticamente zeraram.',
        name: 'Patrícia Souza',
        role: 'Sócia, PS Incorporações',
        avatar: '/avatars/patricia.jpg',
      },
    ],
  },
  {
    w: 300,
    cards: [
      { type: 'video', poster: '/aud-empreiteiros.jpg', name: 'Rafael Torres', role: 'Empreiteiro' },
    ],
  },
  {
    w: 330,
    cards: [
      { type: 'image', src: '/aud-construtores.jpg' },
      { type: 'rating', value: '4,9', label: 'Avaliação média dos usuários' },
    ],
  },
  {
    w: 400,
    cards: [
      {
        type: 'quote',
        quote: 'Antes usávamos planilhas e e-mail para tudo. Hoje qualquer sócio acessa o andamento de qualquer obra pelo celular. A visibilidade é impressionante.',
        name: 'Carlos Mendonça',
        role: 'Diretor, Construtora Mendonça',
        avatar: '/avatars/carlos.jpg',
      },
    ],
  },
  {
    w: 300,
    cards: [
      { type: 'video', poster: '/aud-corretores.jpg', name: 'Juliana Alves', role: 'Corretora de Imóveis' },
    ],
  },
  {
    w: 360,
    cards: [
      {
        type: 'quote',
        quote: 'O diário de obra digital acabou com as discussões sobre o que foi ou não executado em cada etapa.',
        name: 'Marcelo Ramos',
        role: 'Engenheiro de Campo, EZTec',
        avatar: '/avatars/marcelo.jpg',
      },
      {
        type: 'quote',
        quote: 'Controlo a diária e a produção da equipe direto do celular. No fim do mês está tudo certo, sem discussão.',
        name: 'Bruno Carvalho',
        role: 'Empreiteiro',
        avatar: '/avatars/bruno.jpg',
      },
    ],
  },
  {
    w: 330,
    cards: [
      { type: 'textimage', src: '/img-bg-feat1.jpg', text: 'Junte-se a milhares de obras geridas pelo Construindo.' },
    ],
  },
]

function CardItem({ card }: { card: Card }) {
  if (card.type === 'video') {
    return (
      <div className="tm-card tm-video" style={{ backgroundImage: `url(${card.poster})` }}>
        <div className="tm-video-shade" />
        <div className="tm-video-cap">
          <div className="tm-video-name">{card.name}</div>
          <div className="tm-video-role">{card.role}</div>
        </div>
      </div>
    )
  }
  if (card.type === 'rating') {
    return (
      <div className="tm-card tm-rating-card">
        <div className="tm-rating-num">{card.value}<span className="tm-rating-star">★</span></div>
        <div className="tm-rating-lbl">{card.label}</div>
      </div>
    )
  }
  if (card.type === 'image') {
    return <div className="tm-card tm-image" style={{ backgroundImage: `url(${card.src})` }} />
  }
  if (card.type === 'textimage') {
    return (
      <div className="tm-card tm-textimage" style={{ backgroundImage: `url(${card.src})` }}>
        <div className="tm-video-shade" />
        <div className="tm-textimage-text">{card.text}</div>
      </div>
    )
  }
  return (
    <div className="tm-card tm-quote-card">
      <span className="tm-qmark" aria-hidden="true">&ldquo;</span>
      <p className="tm-quote">{card.quote}</p>
      <div className="tm-qfoot">
        <div>
          <div className="tm-name">{card.name}</div>
          <div className="tm-role">{card.role}</div>
        </div>
        <div className="tm-qav" style={{ backgroundImage: `url(${card.avatar})` }} />
      </div>
    </div>
  )
}

export default function Testimonials() {
  // duplicate the set so the marquee loops seamlessly
  const loop = [...COLUMNS, ...COLUMNS]
  return (
    <section className="testi-sec" id="depoimentos">
      <div className="tm-header" data-anim="fade-up">
        <h2 className="sec-h2">Quem usa, não volta atrás</h2>
      </div>

      <div className="tm-stats">
        <AnimatedStats />
      </div>

      <div className="tm-marquee">
        <div className="tm-track">
          {loop.map((col, i) => (
            <div className="tm-col" style={{ width: col.w }} key={i}>
              {col.cards.map((card, j) => (
                <CardItem card={card} key={j} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
