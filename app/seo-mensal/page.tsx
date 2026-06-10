import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Mensal para Sites | BrandCode Solutions",
  robots: { index: false, follow: false },
};

const WA = "5518996742364";

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

const WaSvg = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.886a.5.5 0 0 0 .611.61l6.083-1.46A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.856 9.856 0 0 1-5.031-1.378l-.36-.214-3.733.897.934-3.654-.235-.375A9.857 9.857 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z" />
  </svg>
);

const WA_MSG = waLink("Oi, quero saber mais sobre o SEO mensal para o meu site!");
const WA_MSG_CONTRATAR = waLink("Oi, quero contratar o SEO para o meu site! Vi a página sobre o setup e a mensalidade.");

export default function SeoMensalPage() {
  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        Página exclusiva para clientes BrandCode — <span>não compartilhe este link</span>
      </div>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-badge">📊 SEO Mensal Profissional</div>
        <h1>
          Seu site foi entregue.<br />
          Mas sem SEO mensal, ele{" "}
          <span className="hl-red">nunca vai crescer</span>{" "}
          no Google.
        </h1>
        <p className="hero-sub">
          Um site recém-criado é como uma loja nova num bairro deserto. Sem trabalho
          contínuo de SEO, o Google ignora ele — e seus concorrentes ficam na frente.
          Todo mês. Sempre.
        </p>
        <a href={WA_MSG} target="_blank" rel="noopener noreferrer" className="hero-cta">
          <WaSvg size={22} />
          Quero aparecer no Google
        </a>
      </section>

      {/* ── Proof bar ── */}
      <div className="proof-bar">
        <div className="proof-item">
          <strong>+500×</strong>
          <span>Mudanças no algoritmo do Google por ano</span>
        </div>
        <div className="proof-item">
          <strong>3–6 meses</strong>
          <span>Para resultados sólidos com SEO mensal</span>
        </div>
        <div className="proof-item">
          <strong>92%</strong>
          <span>Dos usuários não passam da 1ª página</span>
        </div>
        <div className="proof-item">
          <strong>Top 3</strong>
          <span>Posição alvo no Google</span>
        </div>
      </div>

      {/* ── Por que o site sozinho não cresce ── */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-tag">A verdade que ninguém te conta</div>
          <h2 className="section-title">
            Ter um site não é suficiente.<br />Nunca foi.
          </h2>
          <p className="section-desc">
            A maioria dos donos de site acha que ter um domínio no ar já garante visibilidade.
            Não garante. O Google precisa ser "convencido" todo mês que você merece estar na frente.
          </p>

          <div className="warning-box">
            <div className="icon">⚠️</div>
            <p>
              O Google atualiza seu algoritmo <strong>mais de 500 vezes por ano</strong>.
              Um site que estava bem rankeado hoje pode desaparecer amanhã sem manutenção.
              Enquanto você não faz SEO, seus concorrentes estão fazendo — e subindo.
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <span className="emoji">📉</span>
              <div>
                <h3>Posição cai com o tempo</h3>
                <p>Sites sem atualização perdem posições gradualmente. O Google prioriza conteúdo fresco e relevante.</p>
              </div>
            </div>
            <div className="problem-card">
              <span className="emoji">🏃</span>
              <div>
                <h3>Concorrentes não param</h3>
                <p>Enquanto você está parado, eles estão otimizando. Todo mês eles ficam mais fortes e você fica mais invisível.</p>
              </div>
            </div>
            <div className="problem-card">
              <span className="emoji">🔎</span>
              <div>
                <h3>Palavras-chave mudam</h3>
                <p>O jeito que as pessoas pesquisam muda o tempo todo. Sem monitoramento, você perde tráfego sem perceber.</p>
              </div>
            </div>
            <div className="problem-card">
              <span className="emoji">🐛</span>
              <div>
                <h3>Erros técnicos se acumulam</h3>
                <p>Links quebrados, páginas lentas, indexação errada — erros silenciosos que derrubam seu ranking dia após dia.</p>
              </div>
            </div>
            <div className="problem-card">
              <span className="emoji">🗺️</span>
              <div>
                <h3>Google Maps sem atualização</h3>
                <p>Sem sinais mensais de atividade, seu perfil no Google Business perde relevância local e deixa de aparecer.</p>
              </div>
            </div>
            <div className="problem-card">
              <span className="emoji">📵</span>
              <div>
                <h3>Zero autoridade de domínio</h3>
                <p>Sem novos backlinks e menções na web, seu site não ganha autoridade e fica eternamente invisível nos resultados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Com vs Sem SEO ── */}
      <section className="section">
        <div className="container">
          <div className="section-tag">A diferença é gritante</div>
          <h2 className="section-title">Site com SEO vs. site sem SEO</h2>
          <p className="section-desc">Veja como os dois caminhos se desenvolvem nos primeiros 6 meses.</p>

          <div className="compare-wrap">
            <div className="compare-col">
              <div className="compare-header bad">❌ Sem SEO mensal</div>
              <div className="compare-body">
                <div className="compare-row"><span className="ic">📵</span>Invisível no Google para quem procura seu serviço</div>
                <div className="compare-row"><span className="ic">📉</span>Posição cai gradualmente a cada mês</div>
                <div className="compare-row"><span className="ic">🤷</span>Não sabe quais palavras trazem clientes</div>
                <div className="compare-row"><span className="ic">💸</span>Gasta com tráfego pago porque o orgânico não funciona</div>
                <div className="compare-row"><span className="ic">😰</span>Concorrente aparece na frente em todas as buscas</div>
                <div className="compare-row"><span className="ic">🐌</span>Site lento e cheio de erros técnicos acumulados</div>
              </div>
            </div>
            <div className="compare-col">
              <div className="compare-header good">✅ Com SEO mensal</div>
              <div className="compare-body">
                <div className="compare-row good-row"><span className="ic">🚀</span>Sobe no ranking a cada mês com trabalho consistente</div>
                <div className="compare-row good-row"><span className="ic">📈</span>Tráfego orgânico cresce mês a mês, sem pagar por clique</div>
                <div className="compare-row good-row"><span className="ic">🎯</span>Aparece exatamente para quem está procurando o que você oferece</div>
                <div className="compare-row good-row"><span className="ic">📊</span>Relatórios mensais mostrando o progresso real</div>
                <div className="compare-row good-row"><span className="ic">💪</span>Autoridade de domínio crescendo e difícil de ser ultrapassada</div>
                <div className="compare-row good-row"><span className="ic">🏆</span>Na 1ª página do Google em 3 a 6 meses para as palavras certas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── O que está incluso ── */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-tag">O que fazemos todo mês</div>
          <h2 className="section-title">Tudo que seu site precisa para crescer</h2>
          <p className="section-desc">
            Não é só "otimizar o título". SEO mensal profissional envolve dezenas de ações técnicas
            e estratégicas realizadas todos os meses.
          </p>

          <div className="includes-grid">
            <div className="include-item">
              <span className="include-check">✓</span>
              Relatório mensal de posições no Google
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Monitoramento do Google Search Console
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Análise e otimização de palavras-chave
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Otimização de velocidade e performance (Core Web Vitals)
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Correção de erros técnicos de indexação
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Atualização de meta tags e descrições
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Otimização de Schema Markup (dados estruturados)
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Construção de links externos (link building)
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Otimização de imagens e alt texts
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Análise de concorrentes e oportunidades
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Otimização do Google Business Profile (Maps)
            </div>
            <div className="include-item">
              <span className="include-check">✓</span>
              Acompanhamento de métricas via Google Analytics
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefícios detalhados ── */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Por que vale cada centavo</div>
          <h2 className="section-title">Benefícios reais do SEO mensal</h2>
          <p className="section-desc">
            Não é um custo — é um investimento que cresce com o tempo e se paga várias vezes.
          </p>

          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Clientes que já querem comprar</h3>
              <p>
                Diferente das redes sociais, quem pesquisa no Google já está com intenção de compra.
                SEO te coloca na frente dessas pessoas no momento certo.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔁</div>
              <h3>Tráfego que não some quando você para de pagar</h3>
              <p>
                Anúncios param quando você para de pagar. O SEO é cumulativo — quanto mais tempo
                investe, mais forte fica. Um ativo que só cresce.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Autoridade de marca no Google</h3>
              <p>
                Aparecer nas primeiras posições transmite confiança. Clientes encaram como validação:
                "se o Google recomenda, deve ser bom."
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3>Domínio local na sua cidade</h3>
              <p>
                Com SEO local, você aparece quando alguém pesquisa seu serviço + sua cidade.
                Clientes próximos que estão prontos para fechar.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Dados reais, não achismos</h3>
              <p>
                Você recebe todo mês um relatório mostrando em quais posições está, quais palavras
                trazem mais visitas e o que foi feito no período.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Custo por cliente cada vez menor</h3>
              <p>
                Com o tempo, o custo de cada lead orgânico cai enquanto o volume aumenta.
                É o canal de marketing com melhor ROI a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Como funciona (timeline) ── */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-tag">Sua evolução no Google</div>
          <h2 className="section-title">O que acontece mês a mês</h2>
          <p className="section-desc">
            SEO é uma maratona, não uma corrida. Veja o que esperar em cada fase.
          </p>

          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot">1</div>
              <div className="tl-content">
                <h4>Mês 1 — Diagnóstico e fundação técnica</h4>
                <p>
                  Auditoria completa do site, correção de erros técnicos críticos, configuração
                  do Search Console e Analytics, definição das palavras-chave estratégicas e
                  otimização das páginas principais.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot">2</div>
              <div className="tl-content">
                <h4>Mês 2 — Otimização de conteúdo e velocidade</h4>
                <p>
                  Otimização de todos os textos e meta tags, melhoria de Core Web Vitals,
                  início da estratégia de link building e otimização do Google Business Profile.
                  O Google começa a rastrear as mudanças.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot">3</div>
              <div className="tl-content">
                <h4>Mês 3 — Primeiros resultados visíveis</h4>
                <p>
                  As posições começam a subir para palavras de menor concorrência. Tráfego
                  orgânico começa a crescer. Relatório mostrando os primeiros avanços concretos
                  no ranking.
                </p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot">6</div>
              <div className="tl-content">
                <h4>Mês 6 — Resultados sólidos e crescimento contínuo</h4>
                <p>
                  Múltiplas palavras-chave estratégicas na 1ª página do Google. Tráfego orgânico
                  estável e crescente. Autoridade de domínio estabelecida. O investimento se paga
                  com os clientes chegando pelo Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Preço ── */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Investimento</div>
          <h2 className="section-title">Simples, transparente e justo</h2>
          <p className="section-desc">
            Dois passos: um setup completo para colocar tudo no lugar, depois uma mensalidade
            acessível para manter o crescimento todo mês.
          </p>

          <div className="pricing-cols">
            {/* Card Setup */}
            <div className="price-card setup">
              <div className="price-ribbon">⚡ Passo 1 — Setup inicial</div>
              <div className="price-icon">🔧</div>
              <div className="price-tag-once">Pagamento único</div>
              <h3>Setup Completo de SEO</h3>
              <p className="subtitle">Tudo configurado e otimizado do zero</p>

              <div className="price-display">
                <div className="amount">
                  <span className="currency">R$</span>
                  <span className="value">370</span>
                </div>
                <p className="note">Uma vez só. Sem recorrência nesta etapa.</p>
              </div>

              <ul className="price-features">
                <li><span className="ck">✓</span> Auditoria técnica completa do site</li>
                <li><span className="ck">✓</span> Configuração do Google Search Console</li>
                <li><span className="ck">✓</span> Configuração do Google Analytics</li>
                <li><span className="ck">✓</span> Pesquisa e mapeamento de palavras-chave</li>
                <li><span className="ck">✓</span> Otimização técnica inicial (velocidade, erros, indexação)</li>
                <li><span className="ck">✓</span> Implementação de Schema Markup</li>
                <li><span className="ck">✓</span> Configuração do Google Business Profile</li>
                <li><span className="ck">✓</span> Otimização das páginas principais</li>
              </ul>

              <a href={WA_MSG_CONTRATAR} target="_blank" rel="noopener noreferrer" className="price-btn">
                <WaSvg size={20} />
                Contratar setup — R$ 370
              </a>
              <p className="price-guarantee">🔒 Pagamento único · Sem recorrência</p>
            </div>

            {/* Card Mensalidade */}
            <div className="price-card">
              <div className="price-ribbon">📅 Passo 2 — Manutenção mensal</div>
              <div className="price-icon">📈</div>
              <div className="price-tag-recur">Recorrente · cancele quando quiser</div>
              <h3>SEO Mensal Contínuo</h3>
              <p className="subtitle">Crescimento consistente todo mês</p>

              <div className="price-display">
                <div className="amount">
                  <span className="currency">R$</span>
                  <span className="value">150</span>
                  <span className="period">/mês</span>
                </div>
                <p className="note">Por site. Cancele quando quiser.</p>
              </div>

              <ul className="price-features">
                <li><span className="ck">✓</span> Relatório mensal de posições e evolução</li>
                <li><span className="ck">✓</span> Monitoramento contínuo do Search Console</li>
                <li><span className="ck">✓</span> Ajustes técnicos e de conteúdo mensais</li>
                <li><span className="ck">✓</span> Link building e construção de autoridade</li>
                <li><span className="ck">✓</span> Análise de concorrentes e oportunidades</li>
                <li><span className="ck">✓</span> Otimização contínua do Google Business</li>
                <li><span className="ck">✓</span> Acompanhamento de métricas e tráfego</li>
                <li><span className="ck">✓</span> Suporte direto via WhatsApp</li>
              </ul>

              <a href={WA_MSG_CONTRATAR} target="_blank" rel="noopener noreferrer" className="price-btn">
                <WaSvg size={20} />
                Contratar mensalidade — R$ 150/mês
              </a>
              <p className="price-guarantee">🔒 Sem fidelidade · Cancele quando quiser</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-tag">Dúvidas frequentes</div>
          <h2 className="section-title">Perguntas e respostas</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h4><span className="q">Q</span> Quanto tempo leva para aparecer na primeira página?</h4>
              <p>Depende da competitividade do nicho e da cidade. Para buscas locais menos disputadas, é possível ver resultados em 60 a 90 dias. Para nichos mais competitivos, o prazo realista é de 4 a 6 meses. SEO é consistência — quanto mais tempo, mais forte fica.</p>
            </div>
            <div className="faq-item">
              <h4><span className="q">Q</span> O site precisa ter sido feito pela BrandCode?</h4>
              <p>Não necessariamente. Analisamos o seu site atual e verificamos se é possível trabalhar o SEO. Se o site tiver limitações técnicas graves, podemos indicar melhorias antes de começar.</p>
            </div>
            <div className="faq-item">
              <h4><span className="q">Q</span> Tenho contrato de fidelidade?</h4>
              <p>Não. Você pode cancelar quando quiser, sem multa. Mas vale lembrar: SEO é acumulativo — cancelar cedo significa perder todo o trabalho investido. Recomendamos pelo menos 6 meses para ver o resultado completo.</p>
            </div>
            <div className="faq-item">
              <h4><span className="q">Q</span> Preciso fazer isso mesmo tendo redes sociais?</h4>
              <p>Sim. Redes sociais e SEO são canais completamente diferentes. O Instagram depende de você postar — se parar, some. O SEO gera tráfego 24h por dia, 7 dias por semana, sem precisar postar nada. São complementares, não substitutos.</p>
            </div>
            <div className="faq-item">
              <h4><span className="q">Q</span> Como acompanho os resultados?</h4>
              <p>Todo mês você recebe um relatório detalhado com: posições das palavras-chave monitoradas, evolução do tráfego orgânico, principais ações realizadas no mês e o planejamento para o mês seguinte.</p>
            </div>
            <div className="faq-item">
              <h4><span className="q">Q</span> Posso contratar para mais de um site?</h4>
              <p>Sim. O setup de R$ 370 e a mensalidade de R$ 150 são por site. Cada site tem sua estratégia e relatório separado. Entre em contato para conversarmos sobre condições para múltiplos sites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta">
        <h2>
          Seu concorrente já está fazendo SEO.<br />
          E você?
        </h2>
        <p>
          Cada mês sem SEO é um mês que você cede terreno para quem está investindo.
          Quanto antes começar, mais rápido chega à primeira página.
        </p>
        <a href={WA_MSG_CONTRATAR} target="_blank" rel="noopener noreferrer" className="cta-big">
          <WaSvg size={26} />
          Começar meu SEO mensal agora
        </a>
        <p className="cta-note">Setup R$ 370 · Mensalidade R$ 150/mês · Cancele quando quiser</p>
      </section>

      {/* ── Footer ── */}
      <footer className="page-footer">
        © {new Date().getFullYear()} BrandCode Solutions — Página exclusiva para clientes
      </footer>

      {/* ── Float WhatsApp ── */}
      <div className="float-wpp">
        <a href={WA_MSG} target="_blank" rel="noopener noreferrer" className="float-btn" aria-label="WhatsApp">
          <WaSvg size={30} />
        </a>
      </div>
    </>
  );
}
