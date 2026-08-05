import Link from 'next/link'
import ConsentLink from '@/components/ConsentLink'

interface FooterProps {
  variant?: 'main' | 'legal'
}

export default function Footer({ variant = 'main' }: FooterProps) {
  const bg = variant === 'main' ? '#222222' : '#111827'

  return (
    <footer className="site-footer" style={{ background: bg }}>
      <div className={variant === 'main' ? 'footer-top footer-top-3' : 'footer-top'}>
        <div className="footer-brand">
          <img src="/favicon.svg" alt="Construindo" className="footer-logo-icon" width={48} height={48} />
          {variant === 'main' ? (
            <p>Gestão de obras simples, transparente e acessível para construtoras de todo o Brasil.</p>
          ) : (
            <p>Conecte construtoras, engenheiros e clientes. Gestão de obras simples, transparente e acessível para todo o Brasil.</p>
          )}
          <div className="footer-socials">
            <Link href="#" className="soc">f</Link>
            <Link href="#" className="soc">in</Link>
            <Link href="#" className="soc">tw</Link>
            <Link href="#" className="soc">yt</Link>
          </div>
        </div>
        {variant === 'legal' && (
          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/#sobre">Sobre</Link></li>
              <li><Link href="/#por-que">Recursos</Link></li>
              <li><Link href="/#depoimentos">Contato</Link></li>
            </ul>
          </div>
        )}
        <div className="footer-col">
          <h4>{variant === 'main' ? 'Empresa' : 'Recursos'}</h4>
          <ul>
            {variant === 'main' ? (
              <>
                <li><Link href="#">Sobre nós</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Carreiras</Link></li>
                <li><Link href="#">Contato</Link></li>
              </>
            ) : (
              <>
                <li><Link href="#">Cronograma</Link></li>
                <li><Link href="#">Orçamentos</Link></li>
                <li><Link href="#">Diário de Obra</Link></li>
                <li><Link href="#">Equipes</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/politica-de-privacidade">Privacidade</Link></li>
            <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
            <li><ConsentLink /></li>
            <li><Link href="#">Central de Ajuda</Link></li>
            <li><Link href="#">{variant === 'main' ? 'Status' : 'Fale Conosco'}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Construindo App. Todos os direitos reservados.</p>
        <p>Feito com ❤️ para a construção civil brasileira</p>
      </div>
    </footer>
  )
}
