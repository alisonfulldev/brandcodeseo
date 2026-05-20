import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES, WHATSAPP_LINK } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import CidadesGrid from "@/components/sections/CidadesGrid";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Criação de Landing Page Profissional que Converte | A partir de R$ 370",
  description: `Landing pages de alta conversão com SEO e foco em resultado. ${PRICES.landingPage}. Entrega em até 5 dias úteis. Ideal para Google Ads, Meta Ads e captação de leads. Solicite um orçamento.`,
  slug: "landing-page",
  keywords: [
    "criar landing page",
    "landing page profissional",
    "landing page que converte",
    "página de captura",
    "landing page com SEO",
    "landing page para Google Ads",
    "landing page para tráfego pago",
    "landing page de alta conversão",
  ],
});

const faqs = [
  {
    question: "O que é uma landing page e por que ela converte mais?",
    answer:
      "Uma landing page é uma página única focada em um único objetivo: transformar o visitante em lead ou cliente. Sem menu de navegação, sem links para outras páginas, sem distrações. Esse foco aumenta drasticamente a taxa de conversão em comparação com um site completo.",
  },
  {
    question: "Qual a diferença entre uma landing page e um site institucional?",
    answer:
      "O site institucional apresenta toda a empresa com múltiplas páginas. A landing page é uma única página com foco 100% em converter um tipo específico de visitante. Para campanhas de tráfego pago ou lançamentos, a landing page é mais eficiente.",
  },
  {
    question: "A landing page funciona com Google Ads e Meta Ads?",
    answer:
      "Sim, e muito bem. Nossas landing pages são construídas com Quality Score alto em mente para o Google Ads — o que reduz seu custo por clique. Para Meta Ads, otimizamos o tempo de carregamento e o conteúdo do primeiro scroll para maximizar a taxa de clique.",
  },
  {
    question: "Qual é o prazo de entrega da landing page?",
    answer:
      "Até 5 dias úteis após aprovação do briefing e pagamento da entrada. É o nosso produto mais ágil — perfeito para quem precisa subir uma campanha rápido.",
  },
  {
    question: "A landing page tem SEO ou só funciona com tráfego pago?",
    answer:
      "As duas coisas. Nossas landing pages são construídas com SEO técnico — meta tags, schema markup, velocidade de carregamento otimizada e URLs amigáveis. Você pode usar com tráfego pago e ao mesmo tempo ranquear organicamente para palavras-chave específicas.",
  },
  {
    question: "Posso fazer testes A/B na minha landing page?",
    answer:
      "Sim. Podemos criar variações da landing page com diferentes headlines, CTAs ou imagens para testar qual versão converte melhor. Ideal para quem já tem tráfego e quer maximizar a conversão.",
  },
];

export default function LandingPagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Criação de Landing Page Profissional",
              description:
                "Desenvolvimento de landing pages de alta conversão com SEO técnico, integração com WhatsApp, Google Ads e Meta Ads. Entrega em 5 dias úteis.",
              price: "370",
              slug: "landing-page",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Landing Page", url: `${SITE_URL}/landing-page` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Hero
        titulo="Uma Página. Uma Missão. Converter."
        subtitulo={`Landing pages profissionais com SEO e foco total em resultado. Entrega em até 5 dias úteis. ${PRICES.landingPage}. Para Google Ads, Meta Ads e tráfego orgânico.`}
        badge="🎯 Landing Page"
        whatsappMsg="Olá! Quero uma landing page profissional. Pode me dar mais detalhes?"
        ctaHref="/landing-page/preco"
      />

      {/* Por que landing page */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0A1628] mb-6">
                Por que uma landing page converte mais que um site comum?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quando alguém clica no seu anúncio e chega ao site completo com menu, blog e 10 páginas diferentes, a atenção se dispersa. A taxa de conversão despenca.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Uma landing page remove todas as distrações. O visitante tem apenas uma opção: agir. Preencher o formulário, ligar ou abrir o WhatsApp. Essa é a diferença entre investir em tráfego e realmente lucrar com ele.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Taxa de conversão média", site: "1–3%", lp: "8–15%" },
                  { label: "Tempo de decisão do visitante", site: "Alto", lp: "Baixo" },
                ].map((c) => (
                  <div key={c.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">{c.label}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Site</p>
                        <p className="font-bold text-gray-600">{c.site}</p>
                      </div>
                      <div className="text-gray-300 text-lg">→</div>
                      <div>
                        <p className="text-xs text-green-600">Landing Page</p>
                        <p className="font-bold text-green-700">{c.lp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
              <span className="text-blue-400 text-xs font-bold tracking-widest">LANDING PAGE</span>
              <div className="text-5xl font-extrabold text-white mt-3 mb-1">R$ 370</div>
              <p className="text-gray-400 text-sm mb-7">Ou parcelado em até 12x no cartão</p>
              <ul className="space-y-2.5 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                {[
                  "1 página completa e otimizada",
                  "SEO técnico avançado incluso",
                  "Integração com WhatsApp",
                  "Formulário de captura de leads",
                  "Pronta para Google Ads e Meta Ads",
                  "Entrega em até 5 dias úteis",
                  "1 rodada de revisão inclusa",
                  "Hospedagem na Vercel (gratuita)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message="Olá! Quero criar uma landing page profissional. Como funciona?"
                className="w-full justify-center py-3.5 text-base"
              >
                Quero minha landing page →
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] text-center mb-4">
            Para quem é a landing page?
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Qualquer negócio que precise captar leads ou converter um produto específico — com tráfego pago ou orgânico.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                nicho: "Médicos e clínicas",
                uso: "Página para captar agendamentos direto no WhatsApp ou em sistemas de agendamento online.",
                icon: "🩺",
              },
              {
                nicho: "Coaches e mentores",
                uso: "Página de inscrição para mentorias, programas e chamadas de diagnóstico gratuito.",
                icon: "🎯",
              },
              {
                nicho: "Infoprodutores",
                uso: "Página de vendas para cursos, e-books e produtos digitais com checkout integrado.",
                icon: "📚",
              },
              {
                nicho: "Imobiliárias",
                uso: "Páginas por empreendimento para captar leads qualificados com formulário de interesse.",
                icon: "🏠",
              },
              {
                nicho: "Prestadores de serviço",
                uso: "Página única focada em converter visitas em orçamentos via WhatsApp.",
                icon: "🔧",
              },
              {
                nicho: "Lançamentos e promoções",
                uso: "Página temporária para campanhas sazonais, Black Friday e lançamentos de produto.",
                icon: "🚀",
              },
            ].map((c) => (
              <div key={c.nicho} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[#0A1628] mb-2">{c.nicho}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.uso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] text-center mb-4">
            Integra com as ferramentas que você já usa
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Sua landing page não fica isolada — conectamos com as principais ferramentas de marketing e vendas.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { ferramenta: "Google Ads", desc: "Pixel de conversão configurado e Quality Score otimizado." },
              { ferramenta: "Meta Ads", desc: "Pixel do Facebook instalado e eventos de conversão mapeados." },
              { ferramenta: "Google Analytics 4", desc: "Acompanhe cada visita, evento e conversão em tempo real." },
              { ferramenta: "WhatsApp Business", desc: "Botão direto com mensagem personalizada por campanha." },
              { ferramenta: "RD Station / HubSpot", desc: "Formulários conectados ao seu CRM automaticamente." },
              { ferramenta: "Google Search Console", desc: "Indexação monitorada e tráfego orgânico acompanhado." },
            ].map((i) => (
              <div key={i.ferramenta} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-bold text-[#0A1628] text-sm mb-1">{i.ferramenta}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton
              message="Quero uma landing page. Qual seria o próximo passo?"
              className="px-8 py-4 text-base"
            >
              Quero minha landing page agora
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Dúvidas sobre Landing Page" />

      <CidadesGrid prefixo="landing-page" titulo="Landing Page por Cidade" />
    </>
  );
}
