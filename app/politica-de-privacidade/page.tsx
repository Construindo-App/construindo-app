import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Construindo',
}

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="page-header-inner">
          <div className="page-badge">📋 Documento Legal</div>
          <h1>Política de Privacidade</h1>
          <p>Versão 1.1 — 3 de agosto de 2026</p>
        </div>
      </div>

      <div className="doc-wrap">
        <div className="doc-section">
          <p>A sua privacidade é uma prioridade para nós. Esta Política de Privacidade descreve, de forma clara e transparente, como coletamos, utilizamos, armazenamos, compartilhamos e protegemos seus dados pessoais, em plena conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei n.º 13.709/2018), com o Marco Civil da Internet (Lei n.º 12.965/2014) e demais normas aplicáveis.</p>
        </div>

        <div className="toc">
          <h2>Índice</h2>
          <ol>
            <li><Link href="#s1">Identificação do Controlador</Link></li>
            <li><Link href="#s2">Dados Pessoais Coletados</Link></li>
            <li><Link href="#s3">Finalidades e Bases Legais do Tratamento</Link></li>
            <li><Link href="#s4">Compartilhamento de Dados Pessoais</Link></li>
            <li><Link href="#s5">Retenção e Eliminação de Dados</Link></li>
            <li><Link href="#s6">Direitos dos Titulares de Dados</Link></li>
            <li><Link href="#s7">Segurança dos Dados</Link></li>
            <li><Link href="#s8">Cookies e Tecnologias Similares</Link></li>
            <li><Link href="#s9">Dados de Menores de Idade</Link></li>
            <li><Link href="#s10">Encarregado de Proteção de Dados (DPO)</Link></li>
            <li><Link href="#s11">Alterações nesta Política</Link></li>
            <li><Link href="#s12">Autoridade Nacional de Proteção de Dados</Link></li>
            <li><Link href="#s13">Contato e Canal de Privacidade</Link></li>
          </ol>
        </div>

        <div className="doc-section" id="s1">
          <h2>1. IDENTIFICAÇÃO DO CONTROLADOR</h2>
          <p>Nobre Construtora LTDA, inscrita no CNPJ sob o n.º 54.768.794/0001-67, com sede em Rua Maranhão 1665, Centro - Cascavel, PR, é a Controladora dos Dados Pessoais coletados por meio da Plataforma <strong>Construindo</strong>, sendo responsável pelas decisões referentes ao tratamento de dados pessoais.</p>
          <p>Encarregado de Proteção de Dados (DPO): Rodrigo Parra</p>
          <p>Contato do DPO: <a href="mailto:dpo@construindo.com.br" style={{ color: 'var(--orange)', fontWeight: 600 }}>dpo@construindo.com.br</a></p>
        </div>

        <div className="doc-section" id="s2">
          <h2>2. DADOS PESSOAIS COLETADOS</h2>
          <h3>2.1 Dados fornecidos pelo Usuário</h3>
          <p>Durante o cadastro e uso da Plataforma, podemos coletar:</p>
          <ul>
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>CPF ou CNPJ;</li>
            <li>Número de telefone/celular;</li>
            <li>Endereço residencial ou comercial;</li>
            <li>Dados profissionais (CRECI, no caso do Corretor de Imóvel);</li>
            <li>Senha (armazenada em formato criptografado);</li>
            <li>Informações financeiras e contratuais inseridas voluntariamente (notas fiscais, parcelas, valores).</li>
          </ul>
          <h3>2.2 Dados coletados automaticamente</h3>
          <p>Ao acessar a Plataforma, podemos coletar automaticamente:</p>
          <ul>
            <li>Endereço IP e dados de geolocalização (quando autorizado pelo Usuário);</li>
            <li>Tipo de dispositivo, sistema operacional e versão do aplicativo;</li>
            <li>Identificadores de dispositivo (Device ID);</li>
            <li>Dados de navegação, páginas acessadas e tempo de uso;</li>
            <li>Logs de acesso, conforme exigido pelo art. 15 do Marco Civil da Internet.</li>
          </ul>
          <h3>2.3 Dados de terceiros</h3>
          <p>Poderemos receber dados pessoais de Usuários fornecidos por outras partes, como quando um Construtor cadastra um Cliente ou um Corretor na Plataforma. Nestes casos, a parte que insere os dados declara possuir base legal adequada para o compartilhamento.</p>
        </div>

        <div className="doc-section" id="s3">
          <h2>3. FINALIDADES E BASES LEGAIS DO TRATAMENTO</h2>
          <p>Nos termos do art. 7.º da LGPD, o tratamento de dados pessoais na Plataforma ocorre com fundamento nas seguintes bases legais:</p>
          <h3>3.1 Execução de Contrato (art. 7.º, V, LGPD)</h3>
          <p>Os dados são tratados para viabilizar a prestação dos serviços contratados, incluindo:</p>
          <ul>
            <li>Autenticação e controle de acesso por perfil de Usuário;</li>
            <li>Gerenciamento de obras, lançamentos financeiros e documentos;</li>
            <li>Registro e acompanhamento de vendas e pagamentos de parcelas;</li>
            <li>Agendamento de visitas a imóveis;</li>
            <li>Comunicação entre Construtor, Cliente e Corretor.</li>
          </ul>
          <h3>3.2 Cumprimento de Obrigação Legal ou Regulatória (art. 7.º, II, LGPD)</h3>
          <p>Dados poderão ser tratados para cumprir exigências legais, tais como:</p>
          <ul>
            <li>Guarda de logs de acesso pelo prazo de 6 (seis) meses, nos termos do art. 15 do Marco Civil da Internet;</li>
            <li>Atendimento a requisições de autoridades públicas, judiciais ou regulatórias competentes;</li>
            <li>Cumprimento de obrigações fiscais e contábeis.</li>
          </ul>
          <h3>3.3 Legítimo Interesse (art. 7.º, IX, LGPD)</h3>
          <p>Poderemos tratar dados com base no legítimo interesse da Empresa, observados os limites do art. 10 da LGPD, para:</p>
          <ul>
            <li>Prevenção a fraudes e garantia da segurança da Plataforma;</li>
            <li>Melhoria contínua dos serviços e funcionalidades;</li>
            <li>Envio de comunicações sobre atualizações e novidades da Plataforma.</li>
          </ul>
          <h3>3.4 Consentimento (art. 7.º, I, LGPD)</h3>
          <p>Para finalidades específicas não previstas nas bases acima, como o envio de comunicações de marketing e uso de dados de localização, solicitaremos o consentimento expresso do Usuário, que poderá ser revogado a qualquer momento.</p>
        </div>

        <div className="doc-section" id="s4">
          <h2>4. COMPARTILHAMENTO DE DADOS PESSOAIS</h2>
          <p>Os dados pessoais dos Usuários poderão ser compartilhados nas seguintes hipóteses:</p>
          <h3>4.1 Entre Usuários da Plataforma</h3>
          <ul>
            <li>O Construtor terá acesso aos dados dos Clientes e Corretores vinculados às suas obras;</li>
            <li>O Corretor terá acesso limitado aos dados dos Clientes referentes às obras por ele comercializadas;</li>
            <li>O Cliente terá acesso apenas aos seus próprios dados e documentos a ele disponibilizados pelo Construtor.</li>
          </ul>
          <h3>4.2 Fornecedores e Parceiros</h3>
          <p>Poderemos compartilhar dados com terceiros que nos prestam serviços essenciais, tais como:</p>
          <ul>
            <li>Provedores de infraestrutura em nuvem (armazenamento e processamento de dados);</li>
            <li>Plataformas de pagamento (para processamento de cobranças de assinatura);</li>
            <li>Serviços de envio de e-mail e notificações push;</li>
            <li>Ferramentas de análise e monitoramento de desempenho.</li>
          </ul>
          <p>Esses fornecedores atuam como Operadores de Dados e estão contratualmente obrigados a tratar os dados conforme nossas instruções e em conformidade com a LGPD.</p>
          <h3>4.3 Meta Platforms (publicidade e mensuração)</h3>
          <p>A Empresa utiliza tecnologias da <strong>Meta Platforms, Inc.</strong> e da <strong>Meta Platforms Ireland Limited</strong> (responsáveis pelo Facebook e pelo Instagram), que atuam como <strong>Operadoras</strong> de dados pessoais, para veicular e mensurar o desempenho de suas campanhas publicitárias. O compartilhamento ocorre de duas formas:</p>
          <ul>
            <li><strong>Pixel da Meta (site):</strong> ao navegar em construindo.app, são coletados e enviados à Meta o endereço IP, o identificador de cookie do navegador, a página visitada e o clique em botões de download e de contratação de plano;</li>
            <li><strong>API de Conversões (servidor):</strong> quando uma assinatura é contratada, a Empresa envia à Meta, a partir de seus próprios servidores, o registro do evento de assinatura acompanhado de um identificador da empresa contratante submetido a criptografia unidirecional (hash SHA-256). A Meta não recebe o identificador em formato legível.</li>
          </ul>
          <p><strong>Base legal:</strong> consentimento do Usuário (art. 7.º, I, da LGPD) para as finalidades de publicidade e mensuração. O Usuário pode revogar o consentimento a qualquer momento, sem prejuízo do uso da Plataforma, por meio do e-mail <a href="mailto:privacidade@construindo.com.br" style={{ color: 'var(--orange)', fontWeight: 600 }}>privacidade@construindo.com.br</a>, das configurações de cookies do seu navegador ou das preferências de anúncios da própria Meta.</p>
          <p>Esse compartilhamento envolve <strong>transferência internacional de dados</strong> para os Estados Unidos e para a União Europeia, observado o disposto no item 4.4 abaixo. A Meta atua sob termos contratuais próprios de tratamento de dados e as informações não são utilizadas pela Empresa para decisões automatizadas que afetem os interesses do Usuário.</p>

          <h3>4.4 Transferência Internacional</h3>
          <p>Eventuais transferências internacionais de dados pessoais somente ocorrerão para países ou organismos internacionais que proporcionem grau de proteção de dados adequado, ou mediante a adoção de salvaguardas específicas, conforme art. 33 da LGPD.</p>
          <h3>4.5 Autoridades</h3>
          <p>Dados poderão ser compartilhados com autoridades públicas, judiciais ou regulatórias, sempre que exigido por lei ou ordem judicial.</p>
        </div>

        <div className="doc-section" id="s5">
          <h2>5. RETENÇÃO E ELIMINAÇÃO DE DADOS</h2>
          <p>Os dados pessoais serão retidos pelo tempo necessário para as finalidades que motivaram sua coleta, observados os seguintes critérios:</p>
          <ul>
            <li><strong>Dados de conta e contratuais:</strong> mantidos enquanto durar o relacionamento com o Usuário e, após o encerramento da conta, pelo prazo de 5 (cinco) anos para fins de cumprimento de obrigações legais, ressalvadas exigências específicas;</li>
            <li><strong>Logs de acesso:</strong> mantidos por 6 (seis) meses, nos termos do art. 15 do Marco Civil da Internet;</li>
            <li><strong>Dados financeiros e de notas fiscais:</strong> mantidos pelo prazo exigido pela legislação fiscal e tributária aplicável;</li>
            <li><strong>Dados tratados com base no consentimento:</strong> eliminados após a revogação do consentimento, salvo se houver outra base legal que justifique a retenção.</li>
          </ul>
          <p>Após o prazo de retenção, os dados serão eliminados de forma segura ou anonimizados, nos termos do art. 16 da LGPD.</p>
        </div>

        <div className="doc-section" id="s6">
          <h2>6. DIREITOS DOS TITULARES DE DADOS</h2>
          <p>Nos termos dos arts. 17 a 22 da LGPD, o titular de dados pessoais possui os seguintes direitos, que poderão ser exercidos a qualquer momento:</p>
          <ul>
            <li><strong>Confirmação:</strong> confirmar a existência de tratamento de seus dados pessoais;</li>
            <li><strong>Acesso:</strong> acessar os dados pessoais tratados pela Empresa;</li>
            <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
            <li><strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
            <li><strong>Portabilidade:</strong> solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto, quando aplicável;</li>
            <li><strong>Eliminação:</strong> solicitar a eliminação dos dados tratados com base no consentimento;</li>
            <li><strong>Informação sobre compartilhamento:</strong> obter informações sobre as entidades com as quais a Empresa compartilhou seus dados;</li>
            <li><strong>Revogação do consentimento:</strong> revogar o consentimento a qualquer momento, sem prejuízo da licitude do tratamento realizado anteriormente;</li>
            <li><strong>Oposição:</strong> se opor ao tratamento realizado com fundamento em bases legais distintas do consentimento, nos casos de não conformidade com a LGPD.</li>
          </ul>
          <div className="info-box">
            <p>Para exercer qualquer desses direitos, o Usuário deverá entrar em contato por meio do e-mail <strong>privacidade@construindo.com.br</strong>, com identificação suficiente para confirmação de sua identidade. A Empresa responderá às solicitações em até <strong>15 (quinze) dias</strong>.</p>
          </div>
        </div>

        <div className="doc-section" id="s7">
          <h2>7. SEGURANÇA DOS DADOS</h2>
          <p>A Empresa adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda acidental, destruição ou divulgação indevida, incluindo:</p>
          <ul>
            <li>Criptografia dos dados em trânsito (protocolo TLS/SSL) e em repouso;</li>
            <li>Controle de acesso baseado em perfil (RBAC), garantindo que cada Usuário acesse apenas as informações pertinentes ao seu perfil;</li>
            <li>Autenticação com senhas criptografadas (hashing);</li>
            <li>Monitoramento contínuo de segurança e registros de auditoria (logs);</li>
            <li>Política de acesso mínimo necessário para colaboradores internos;</li>
            <li>Programas de treinamento em privacidade e segurança da informação para a equipe.</li>
          </ul>
          <p>Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos Usuários, a Empresa notificará a Autoridade Nacional de Proteção de Dados (ANPD) e os Usuários afetados em prazo razoável, conforme art. 48 da LGPD.</p>
        </div>

        <div className="doc-section" id="s8">
          <h2>8. COOKIES E TECNOLOGIAS SIMILARES</h2>
          <p>A versão web da Plataforma pode utilizar cookies e tecnologias similares para:</p>
          <ul>
            <li>Manter a sessão do Usuário autenticado;</li>
            <li>Lembrar preferências e configurações;</li>
            <li>Analisar o uso da Plataforma e aprimorar a experiência;</li>
            <li>Mensurar o desempenho de campanhas publicitárias, por meio de <strong>cookies de terceiros do Pixel da Meta</strong>, conforme detalhado no item 4.3 desta Política.</li>
          </ul>
          <p>Os cookies de publicidade e mensuração dependem do consentimento do Usuário e não são necessários ao funcionamento da Plataforma; sua recusa não impede o uso dos serviços.</p>
          <p>O Usuário pode configurar seu navegador para bloquear cookies; no entanto, isso pode impactar o funcionamento de algumas funcionalidades da Plataforma. No aplicativo mobile, identificadores de dispositivo podem ser utilizados com finalidades similares.</p>
        </div>

        <div className="doc-section" id="s9">
          <h2>9. DADOS DE MENORES DE IDADE</h2>
          <p>A Plataforma não é destinada a pessoas menores de 18 (dezoito) anos. A Empresa não coleta intencionalmente dados pessoais de menores. Caso identifiquemos que dados de menores foram coletados sem o consentimento adequado, esses dados serão eliminados de forma imediata.</p>
        </div>

        <div className="doc-section" id="s10">
          <h2>10. ENCARREGADO DE PROTEÇÃO DE DADOS (DPO)</h2>
          <p>Nos termos do art. 41 da LGPD, a Empresa designou um Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer — DPO), responsável por:</p>
          <ul>
            <li>Aceitar reclamações e comunicações dos titulares;</li>
            <li>Prestar esclarecimentos e adotar providências;</li>
            <li>Receber comunicações da ANPD;</li>
            <li>Orientar os colaboradores sobre as práticas de proteção de dados.</li>
          </ul>
          <p>Contato do DPO: <a href="mailto:dpo@construindo.com.br" style={{ color: 'var(--orange)', fontWeight: 600 }}>dpo@construindo.com.br</a></p>
        </div>

        <div className="doc-section" id="s11">
          <h2>11. ALTERAÇÕES NESTA POLÍTICA</h2>
          <p>Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas práticas de tratamento de dados ou em decorrência de alterações legais. A Empresa notificará os Usuários sobre alterações relevantes com antecedência mínima de 30 (trinta) dias, por e-mail ou aviso na Plataforma.</p>
          <p>A versão mais recente desta Política estará sempre disponível na Plataforma. O uso continuado após a entrada em vigor das alterações implica a aceitação da nova versão.</p>
        </div>

        <div className="doc-section" id="s12">
          <h2>12. AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS</h2>
          <p>Caso o Usuário entenda que seus direitos não foram atendidos de forma satisfatória, poderá apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD), nos termos do art. 18, § 1.º, da LGPD.</p>
          <p>Site da ANPD: <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', fontWeight: 600 }}>www.gov.br/anpd</a></p>
        </div>

        <div className="doc-section" id="s13">
          <h2>13. CONTATO E CANAL DE PRIVACIDADE</h2>
          <p>Para exercer seus direitos, tirar dúvidas ou apresentar reclamações sobre o tratamento de seus dados pessoais:</p>
          <div className="contact-card">
            <p>📧 <strong>E-mail de Privacidade:</strong> <a href="mailto:privacidade@construindo.com.br">privacidade@construindo.com.br</a></p>
            <p>🔒 <strong>E-mail do DPO:</strong> <a href="mailto:dpo@construindo.com.br">dpo@construindo.com.br</a></p>
            <p>📍 <strong>Endereço:</strong> Rua Maranhão 1665, Centro - Cascavel, PR</p>
            <p>📞 <strong>Telefone:</strong> (45) 99147-0711</p>
          </div>
          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--muted)' }}><strong>Construindo</strong> — Última atualização: 3 de agosto de 2026</p>
        </div>
      </div>

      <Footer variant="legal" />
    </>
  )
}
