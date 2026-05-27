import type { Metadata } from "next";
import UrgencyBar from "./_components/UrgencyBar";

export const metadata: Metadata = {
  title: "Seu Site Profissional em até 7 Dias | Brandcode",
  robots: { index: false, follow: false },
};

const WA = "5518996742364";

const WaSvg = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.886a.5.5 0 0 0 .611.61l6.083-1.46A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.856 9.856 0 0 1-5.031-1.378l-.36-.214-3.733.897.934-3.654-.235-.375A9.857 9.857 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z" />
  </svg>
);

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

export default function OfertaSecreta() {
  return (
    <>
      <UrgencyBar />

      {/* Hero */}
      <section className="hero" style={{ paddingTop: 100 }}>
        <div className="badge">✦ Oferta Exclusiva — Vagas Limitadas</div>
        <h1>
          Seu negócio <span>na internet hoje</span>,<br />
          sem complicação e sem pagar caro
        </h1>
        <p className="hero-sub">
          Sites profissionais entregues em até 7 dias. Do mini site à presença institucional
          completa — você escolhe o pacote.
        </p>
        <a
          href={waLink("Oi, vim da página de ofertas e quero saber mais sobre os sites!")}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          <WaSvg size={26} />
          Falar no WhatsApp agora
        </a>
      </section>

      {/* Proof bar */}
      <div className="proof-bar">
        <div className="proof-item"><strong>+80</strong><span>Sites entregues</span></div>
        <div className="proof-item"><strong>7 dias</strong><span>Prazo de entrega</span></div>
        <div className="proof-item"><strong>100%</strong><span>Responsivo mobile</span></div>
        <div className="proof-item"><strong>5★</strong><span>Avaliação média</span></div>
      </div>

      {/* Dor */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-tag">Você ainda está assim?</div>
          <h2 className="section-title">Seu negócio merece mais do que um perfil no Instagram</h2>
          <p className="section-desc">
            Enquanto você não tem um site, está perdendo clientes que pesquisam no Google e não te
            encontram.
          </p>
          <div className="pain-grid">
            <div className="pain-card"><span className="emoji">😤</span><p>Cansado de depender só do Instagram para conseguir clientes novos?</p></div>
            <div className="pain-card"><span className="emoji">🔍</span><p>Seu negócio não aparece quando alguém pesquisa no Google?</p></div>
            <div className="pain-card"><span className="emoji">💸</span><p>Achou que ter um site seria caro demais ou muito complicado?</p></div>
            <div className="pain-card"><span className="emoji">⏳</span><p>Perdeu tempo e dinheiro com agências que não cumpriram o prazo?</p></div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-tag">Portfólio recente</div>
          <h2 className="section-title">Mini Sites que entregamos essa semana</h2>
          <p className="section-desc">
            Cada site foi feito do zero, exclusivo para o negócio do cliente — sem template genérico.
          </p>
          <div className="portfolio-grid">
            {/* Personal Trainer */}
            <div className="port-card">
              <div className="port-browser">
                <div className="port-dots"><span /><span /><span /></div>
                <div className="port-url">carlafit.com.br</div>
              </div>
              <div className="port-preview theme-fitness">
                <div className="mock-nav">
                  <div className="mock-logo" />
                  <div className="mock-nav-links"><span /><span /><span /></div>
                </div>
                <div className="mock-hero">
                  <div className="mock-h1" /><div className="mock-h2" /><div className="mock-cta-btn" />
                </div>
                <div className="mock-sections">
                  <span style={{ height: 18 }} /><span style={{ height: 14 }} /><span style={{ height: 20 }} />
                </div>
              </div>
              <div className="port-info">
                <div className="port-tag">Personal Trainer</div>
                <div className="port-name">Carla Fit — Academia & Treinos</div>
                <div className="port-desc">3 seções: Hero de impacto, serviços e contato com WhatsApp direto.</div>
                <div className="port-footer">
                  <span className="port-badge">Entregue em 3 dias</span>
                  <a href={waLink("Quero um Mini Site igual ao da Personal Trainer!")} target="_blank" rel="noopener noreferrer" className="port-cta-link">Quero igual →</a>
                </div>
              </div>
            </div>
            {/* Estética */}
            <div className="port-card">
              <div className="port-browser">
                <div className="port-dots"><span /><span /><span /></div>
                <div className="port-url">estudiobelavida.com.br</div>
              </div>
              <div className="port-preview theme-beauty">
                <div className="mock-nav">
                  <div className="mock-logo" />
                  <div className="mock-nav-links"><span /><span /><span /></div>
                </div>
                <div className="mock-hero">
                  <div className="mock-h1" /><div className="mock-h2" /><div className="mock-cta-btn" />
                </div>
                <div className="mock-sections">
                  <span style={{ height: 16 }} /><span style={{ height: 22 }} /><span style={{ height: 14 }} />
                </div>
              </div>
              <div className="port-info">
                <div className="port-tag">Estética & Beleza</div>
                <div className="port-name">Estúdio Bela Vida</div>
                <div className="port-desc">Apresentação de serviços, fotos dos resultados e agendamento pelo WhatsApp.</div>
                <div className="port-footer">
                  <span className="port-badge">Entregue em 4 dias</span>
                  <a href={waLink("Quero um Mini Site igual ao do Estúdio de Estética!")} target="_blank" rel="noopener noreferrer" className="port-cta-link">Quero igual →</a>
                </div>
              </div>
            </div>
            {/* Restaurante */}
            <div className="port-card">
              <div className="port-browser">
                <div className="port-dots"><span /><span /><span /></div>
                <div className="port-url">pizzariadozinho.com.br</div>
              </div>
              <div className="port-preview theme-food">
                <div className="mock-nav">
                  <div className="mock-logo" />
                  <div className="mock-nav-links"><span /><span /><span /></div>
                </div>
                <div className="mock-hero">
                  <div className="mock-h1" /><div className="mock-h2" /><div className="mock-cta-btn" />
                </div>
                <div className="mock-sections">
                  <span style={{ height: 20 }} /><span style={{ height: 14 }} /><span style={{ height: 18 }} />
                </div>
              </div>
              <div className="port-info">
                <div className="port-tag">Alimentação & Delivery</div>
                <div className="port-name">Pizzaria do Zinho</div>
                <div className="port-desc">Cardápio resumido, horários e botão de pedido direto no WhatsApp.</div>
                <div className="port-footer">
                  <span className="port-badge">Entregue em 2 dias</span>
                  <a href={waLink("Quero um Mini Site igual ao da Pizzaria!")} target="_blank" rel="noopener noreferrer" className="port-cta-link">Quero igual →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-cta-wrap">
            <p>O seu negócio pode ser o próximo. Comece hoje por apenas <strong style={{ color: "var(--white)" }}>R$ 97</strong>.</p>
            <a href={waLink("Quero meu Mini Site por R$ 97!")} target="_blank" rel="noopener noreferrer" className="cta-big" style={{ fontSize: "1rem", padding: "16px 36px" }}>
              <WaSvg size={22} />
              Quero meu Mini Site agora
            </a>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="section bg-alt" id="planos">
        <div className="container">
          <div className="section-tag">Escolha seu pacote</div>
          <h2 className="section-title">Preço direto, sem surpresa</h2>
          <p className="section-desc">
            Três opções para cada momento do seu negócio. Comece pequeno, cresça na hora certa.
          </p>
          <div className="plans">
            {/* Mini Site */}
            <div className="plan">
              <div className="plan-icon">⚡</div>
              <div className="plan-name">Mini Site</div>
              <div className="plan-tagline">Presença online em um único dia</div>
              <div className="plan-price">
                <div className="from">De R$ 250</div>
                <div className="amount"><span className="currency">R$</span><span className="value">97</span></div>
                <div className="note">pagamento único · à vista</div>
              </div>
              <ul className="plan-features">
                <li><span className="check">✓</span> Até 3 seções (início, sobre, contato)</li>
                <li><span className="check">✓</span> Design personalizado para seu negócio</li>
                <li><span className="check">✓</span> 100% responsivo (mobile-first)</li>
                <li><span className="check">✓</span> Botão WhatsApp integrado</li>
                <li><span className="check">✓</span> Entrega em até 5 dias úteis</li>
                <li><span className="check">✓</span> 1 rodada de revisão</li>
              </ul>
              <a href={waLink("Quero o Mini Site por R$ 97!")} target="_blank" rel="noopener noreferrer" className="plan-btn secondary">
                <WaSvg size={20} /> Quero contratar
              </a>
            </div>
            {/* Landing Page */}
            <div className="plan highlight">
              <div className="plan-ribbon">⭐ Mais escolhido</div>
              <div className="plan-icon">🎯</div>
              <div className="plan-name">Landing Page</div>
              <div className="plan-tagline">Focada em converter visitante em cliente</div>
              <div className="plan-price">
                <div className="from">De R$ 600</div>
                <div className="amount"><span className="currency">R$</span><span className="value">297</span></div>
                <div className="note">pagamento único · à vista</div>
              </div>
              <ul className="plan-features">
                <li><span className="check">✓</span> Página de vendas de alta conversão</li>
                <li><span className="check">✓</span> Copywriting estruturado para vender</li>
                <li><span className="check">✓</span> CTA estratégicos em toda a página</li>
                <li><span className="check">✓</span> Design premium e exclusivo</li>
                <li><span className="check">✓</span> 100% responsivo (mobile-first)</li>
                <li><span className="check">✓</span> Formulário ou botão WhatsApp</li>
                <li><span className="check">✓</span> SEO básico configurado</li>
                <li><span className="check">✓</span> Entrega em até 7 dias úteis</li>
                <li><span className="check">✓</span> 2 rodadas de revisão</li>
              </ul>
              <a href={waLink("Quero a Landing Page por R$ 297!")} target="_blank" rel="noopener noreferrer" className="plan-btn primary">
                <WaSvg size={20} /> Quero contratar
              </a>
            </div>
            {/* Site Institucional */}
            <div className="plan">
              <div className="plan-icon">🏢</div>
              <div className="plan-name">Site Institucional</div>
              <div className="plan-tagline">Presença completa e profissional</div>
              <div className="plan-price">
                <div className="from">De R$ 1.200</div>
                <div className="amount"><span className="currency">R$</span><span className="value">497</span></div>
                <div className="note">pagamento único · à vista</div>
              </div>
              <ul className="plan-features">
                <li><span className="check">✓</span> Até 6 páginas completas</li>
                <li><span className="check">✓</span> Home · Sobre · Serviços · Portfólio</li>
                <li><span className="check">✓</span> Blog ou Depoimentos · Contato</li>
                <li><span className="check">✓</span> Design exclusivo por página</li>
                <li><span className="check">✓</span> 100% responsivo (mobile-first)</li>
                <li><span className="check">✓</span> SEO estruturado em todas as páginas</li>
                <li><span className="check">✓</span> Formulário + WhatsApp integrados</li>
                <li><span className="check">✓</span> Google Analytics configurado</li>
                <li><span className="check">✓</span> Entrega em até 10 dias úteis</li>
                <li><span className="check">✓</span> 3 rodadas de revisão</li>
              </ul>
              <a href={waLink("Quero o Site Institucional por R$ 497!")} target="_blank" rel="noopener noreferrer" className="plan-btn secondary">
                <WaSvg size={20} /> Quero contratar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Processo</div>
          <h2 className="section-title">Do primeiro contato ao site no ar</h2>
          <p className="section-desc">Simples, rápido e sem burocracia.</p>
          <div className="steps">
            <div className="step"><div className="step-num">1</div><h3>Fala comigo</h3><p>Me conta sobre o seu negócio pelo WhatsApp — sem compromisso.</p></div>
            <div className="step"><div className="step-num">2</div><h3>Escolha o pacote</h3><p>Definimos juntos o melhor pacote para o seu negócio.</p></div>
            <div className="step"><div className="step-num">3</div><h3>Aprovação e pagamento</h3><p>Aprovamos o briefing, você paga e o projeto começa.</p></div>
            <div className="step"><div className="step-num">4</div><h3>Site no ar</h3><p>Entrego o projeto, fazemos os ajustes e seu site vai ao ar!</p></div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-tag">Depoimentos</div>
          <h2 className="section-title">Quem já tem site, vende mais</h2>
          <p className="section-desc">Resultados reais de clientes reais.</p>
          <div className="testimonials">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;Tinha medo de investir e não ter retorno. Em menos de 30 dias, fechei 3 clientes novos que me acharam no Google. Valeu muito cada centavo!&rdquo;</blockquote>
              <div className="testimonial-author"><div className="avatar">C</div><div><strong>Carla Mendes</strong><span>Personal Trainer · Mini Site</span></div></div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;Minha landing page ficou incrível e entregou antes do prazo. As minhas vendas online dobraram no primeiro mês. Super recomendo a Brandcode!&rdquo;</blockquote>
              <div className="testimonial-author"><div className="avatar">R</div><div><strong>Rafael Souza</strong><span>Consultor Financeiro · Landing Page</span></div></div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;Meu site institucional ficou profissional demais. Agora quando chego em reuniões e mostro o site, o cliente já fecha. Isso não tem preço.&rdquo;</blockquote>
              <div className="testimonial-author"><div className="avatar">A</div><div><strong>Amanda Costa</strong><span>Advogada · Site Institucional</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Pronto para ter seu site<br />no ar essa semana?</h2>
        <p>Vagas limitadas por mês. Me chama agora e garante a sua antes que esgote.</p>
        <a href={waLink("Olá! Quero criar meu site com a Brandcode. Pode me ajudar?")} target="_blank" rel="noopener noreferrer" className="cta-big">
          <WaSvg size={28} />
          Falar com a Brandcode agora
        </a>
        <div className="guarantee">🔒 Sem compromisso · Resposta em até 1 hora · Atendimento humano</div>
      </section>

      <footer className="page-footer">
        &copy; 2025 Brandcode Solutions · Todos os direitos reservados · Esta página não é indexada pelo Google.
      </footer>

      {/* Floating WhatsApp */}
      <div className="float-wpp">
        <div className="float-label">Tire suas dúvidas agora!</div>
        <a href={waLink("Olá! Quero saber mais sobre os sites!")} target="_blank" rel="noopener noreferrer" className="float-btn" aria-label="WhatsApp">
          <WaSvg size={30} />
        </a>
      </div>
    </>
  );
}
