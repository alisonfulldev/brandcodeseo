import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Proposta Personalizada — BrandCode Solutions",
  robots: { index: false, follow: false },
};

const CHECK = (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#3B82F6" }}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const WA = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const planos = [
  {
    nome: "Presença Digital",
    implementacao: "R$ 199",
    mensalidade: "R$ 90/mês",
    tag: null,
    descricao: "Para empresas que precisam de um site profissional e confiável na internet.",
    features: [
      "Até 5 páginas profissionais",
      "Site moderno e responsivo",
      "Hospedagem inclusa",
      "Domínio configurado",
      "Estrutura profissional pronta para crescer",
      "Suporte via WhatsApp",
    ],
    msg: "Olá! Quero o Plano Presença Digital (R$ 199 implementação + R$ 90/mês). Pode me passar mais detalhes?",
    destaque: false,
  },
  {
    nome: "Crescimento Digital",
    implementacao: "R$ 299",
    mensalidade: "R$ 120/mês",
    tag: "Mais escolhido",
    descricao: "Para empresas que querem aparecer no Google e atrair clientes de forma orgânica.",
    features: [
      "Até 20 páginas otimizadas",
      "SEO técnico configurado",
      "Google Meu Negócio configurado",
      "Integração com Google Analytics 4",
      "Indexação acelerada no Google",
      "Monitoramento mensal de desempenho",
      "Ajustes e melhorias periódicas",
    ],
    msg: "Olá! Quero o Plano Crescimento Digital (R$ 299 implementação + R$ 120/mês). Pode me passar mais detalhes?",
    destaque: true,
  },
  {
    nome: "Autoridade Digital",
    implementacao: "R$ 399",
    mensalidade: "R$ 180/mês",
    tag: null,
    descricao: "Para empresas que querem dominar o Google e gerar clientes de forma consistente.",
    features: [
      "Páginas ilimitadas por cidade, serviço e nicho",
      "SEO avançado com Programmatic SEO",
      "Estrutura focada em geração de leads",
      "Expansão contínua do site todo mês",
      "Otimizações frequentes baseadas em dados",
      "Estratégia de crescimento orgânico de longo prazo",
      "Relatório mensal de desempenho",
    ],
    msg: "Olá! Quero o Plano Autoridade Digital (R$ 399 implementação + R$ 180/mês). Pode me passar mais detalhes?",
    destaque: false,
  },
];

const autogerenciadoFeatures = [
  "Site entregue com código-fonte completo",
  "SEO técnico configurado na entrega",
  "Google Analytics 4 e Search Console integrados",
  "Sem contrato, sem mensalidade, sem vínculo",
  "Suporte técnico na transição (7 dias)",
  "Valor mediante orçamento conforme projeto",
];

export default function PropostaPage() {
  return (
    <main style={{ background: "#0A0F1E", minHeight: "100vh" }}>

      {/* Hero */}
      <section className="pt-28 pb-14 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#3B82F6" }}>
          Proposta exclusiva
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
          Escolha o melhor plano<br className="hidden sm:block" /> para o seu negócio
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>
          Abaixo estão todas as opções disponíveis — com ou sem mensalidade.
          Escolha o que faz mais sentido para você.
        </p>
      </section>

      {/* ── Planos com mensalidade ── */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-2" style={{ color: "#F8FAFC" }}>
            Planos com suporte e manutenção mensal
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#94A3B8" }}>
            A BrandCode cuida do seu site todos os meses — SEO, atualizações, melhorias e suporte contínuo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {planos.map((plano) => (
              <div
                key={plano.nome}
                className="relative rounded-2xl p-8 flex flex-col"
                style={
                  plano.destaque
                    ? { background: "#111827", border: "2px solid #3B82F6", borderRadius: 16, boxShadow: "0 0 40px rgba(59,130,246,0.18)" }
                    : { background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16 }
                }
              >
                {plano.tag && (
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={{ background: "#3B82F6", color: "#fff" }}
                  >
                    ★ {plano.tag.toUpperCase()}
                  </span>
                )}

                <h3 className="font-bold text-xl mb-1" style={{ color: "#F8FAFC" }}>
                  {plano.nome}
                </h3>
                <p className="text-sm mb-6" style={{ color: "#CBD5E1", lineHeight: 1.7 }}>
                  {plano.descricao}
                </p>

                {/* Preços */}
                <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>Taxa de implementação</span>
                    <span className="font-bold text-lg" style={{ color: "#F8FAFC" }}>{plano.implementacao}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>Manutenção mensal</span>
                    <span className="font-bold text-lg" style={{ color: "#3B82F6" }}>{plano.mensalidade}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plano.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#CBD5E1" }}>
                      {CHECK}
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(plano.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={plano.destaque ? { background: "#3B82F6", color: "#fff" } : { background: "#25D366", color: "#fff" }}
                >
                  {WA}
                  Quero esse plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center gap-4 max-w-2xl mx-auto px-4 pb-10">
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
        <span className="text-sm font-bold px-4 py-1.5 rounded-full" style={{ background: "#1E293B", color: "#94A3B8" }}>
          ou
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
      </div>

      {/* ── Opção sem mensalidade ── */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛠️</span>
              <h2 className="text-2xl font-bold" style={{ color: "#F8FAFC" }}>
                Tenho equipe de SEO ou sei programar
              </h2>
            </div>
            <p className="text-sm mb-6" style={{ color: "#CBD5E1", lineHeight: 1.8 }}>
              Quer manter o site você mesmo? A BrandCode cria e entrega o projeto pronto —
              código-fonte incluso, SEO configurado desde o primeiro dia.
              <strong style={{ color: "#F8FAFC" }}> Zero mensalidade. Pague só a criação.</strong>
            </p>

            <ul className="space-y-3 mb-8">
              {autogerenciadoFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#CBD5E1" }}>
                  {CHECK}
                  {f}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-4 mb-8 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs mb-1" style={{ color: "#94A3B8" }}>Investimento</p>
              <p className="text-3xl font-extrabold" style={{ color: "#F8FAFC" }}>Sob orçamento</p>
              <p className="text-xs mt-1" style={{ color: "#64748B" }}>conforme escopo do projeto — sem mensalidades</p>
            </div>

            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                "Olá! Tenho equipe de SEO e quero contratar apenas a criação do site, sem mensalidade. Pode me passar um orçamento?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: "#25D366", color: "#fff" }}
            >
              {WA}
              Quero orçamento sem mensalidade
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
