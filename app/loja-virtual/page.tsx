import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES, WHATSAPP_LINK } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import CidadesGrid from "@/components/sections/CidadesGrid";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Criação de Loja Virtual com SEO Técnico | Venda Online 24 Horas",
  description: `Crie sua loja virtual com SEO técnico avançado, painel de gestão completo, pagamento integrado (PIX, cartão, boleto) e hospedagem profissional. ${PRICES.lojaVirtual}. Comece a vender online hoje.`,
  slug: "loja-virtual",
  keywords: [
    "criar loja virtual",
    "loja online profissional",
    "e-commerce com SEO",
    "criar loja online",
    "loja virtual com pagamento",
    "loja virtual profissional",
    "criar site de vendas",
    "loja virtual com SEO técnico",
  ],
});

const faqs = [
  {
    question: "Quanto custa criar uma loja virtual profissional?",
    answer: `Nossa loja virtual parte de ${PRICES.lojaVirtual}. O valor final depende do número de produtos, variações e integrações necessárias. Parcelamos em até 12x. Todo plano inclui SEO técnico avançado, painel de gestão, pagamento integrado e hospedagem na Vercel. Solicite um orçamento personalizado.`,
  },
  {
    question: "Quais formas de pagamento posso aceitar na loja?",
    answer:
      "Integramos com os principais gateways do Brasil: Mercado Pago, Stripe, PagSeguro e Pagar.me. Seus clientes pagam com PIX, cartão de crédito (até 12x), cartão de débito e boleto bancário — tudo dentro da sua loja, sem redirecionar para outra página.",
  },
  {
    question: "Consigo cadastrar e editar produtos sozinho?",
    answer:
      "Sim. O painel de gestão permite cadastrar produtos com fotos, descrições, variações (tamanho, cor, etc.), preços e controle de estoque. Você também gerencia pedidos, vê relatórios de vendas e atualiza o layout — sem precisar de programador.",
  },
  {
    question: "A loja virtual tem SEO para aparecer no Google?",
    answer:
      "Sim, em todos os níveis. Cada página de produto é otimizada com URL amigável, meta tags únicas, schema de produto (Product schema) para rich snippets no Google, breadcrumb e imagens com alt text. A loja inteira é indexável e rastreável.",
  },
  {
    question: "Qual é o prazo de entrega da loja virtual?",
    answer:
      "Até 25 dias úteis após aprovação do briefing e início do projeto. O prazo é definido em contrato. Para lojas com muitos produtos, fazemos uma importação em massa para agilizar o processo.",
  },
  {
    question: "A loja funciona bem no celular?",
    answer:
      "Sim, é mobile-first por padrão. Mais de 70% das compras online no Brasil são feitas via celular — nossas lojas são construídas com essa realidade em mente. Checkout simplificado, imagens otimizadas e navegação fluida em qualquer tela.",
  },
];

export default function LojaVirtualPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Criação de Loja Virtual com SEO",
              description:
                "Desenvolvimento de loja virtual completa com SEO técnico avançado, painel de gestão, pagamento integrado (PIX, cartão, boleto) e hospedagem na Vercel.",
              price: "697",
              slug: "loja-virtual",
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
              { name: "Loja Virtual", url: `${SITE_URL}/loja-virtual` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Hero
        titulo="Sua Loja Virtual Vendendo 24 Horas por Dia, 7 Dias por Semana"
        subtitulo={`Lojas virtuais completas com SEO técnico avançado, pagamento integrado, painel de gestão e hospedagem profissional. ${PRICES.lojaVirtual}. Comece a vender online hoje.`}
        badge="🛒 Loja Virtual"
        whatsappMsg="Olá! Quero um orçamento para criar minha loja virtual."
        ctaHref="/loja-virtual/preco"
      />

      {/* Por que criar uma loja virtual */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4">
              Por que sua loja precisa estar online agora
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Lojas que dependem só do ponto físico ou do Instagram perdem vendas todo dia. Uma loja virtual profissional trabalha enquanto você dorme — e aparece no Google quando o cliente está procurando o que você vende.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { numero: "87%", desc: "dos brasileiros pesquisam no Google antes de comprar qualquer produto" },
              { numero: "24h", desc: "sua loja fica aberta — sem vendedor, sem ponto físico, sem limite de horário" },
              { numero: "3×", desc: "mais faturamento médio de negócios com loja virtual bem otimizada para SEO" },
            ].map((s) => (
              <div key={s.numero} className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="text-4xl font-extrabold text-[#0A1628] mb-3">{s.numero}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] text-center mb-4">
            Tudo que sua loja virtual precisa para vender
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Uma loja completa, do produto ao checkout — sem cobrar à parte por funcionalidades essenciais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📦",
                titulo: "Catálogo de produtos completo",
                desc: "Cadastre produtos ilimitados com fotos, variações (cor, tamanho, modelo), preços e controle de estoque integrado.",
              },
              {
                icon: "💳",
                titulo: "Checkout com múltiplos pagamentos",
                desc: "PIX com desconto, cartão de crédito em até 12x, débito e boleto. Integração com Mercado Pago, Stripe e PagSeguro.",
              },
              {
                icon: "🔍",
                titulo: "SEO para cada produto",
                desc: "URL amigável, meta tags únicas, schema de produto JSON-LD e breadcrumb em cada página. Seu produto aparece no Google.",
              },
              {
                icon: "📊",
                titulo: "Painel de gestão completo",
                desc: "Gerencie pedidos, estoque, clientes e relatórios de vendas sem precisar de programador. Acesso por qualquer dispositivo.",
              },
              {
                icon: "📱",
                titulo: "Mobile-first por padrão",
                desc: "+70% das compras no Brasil são feitas pelo celular. Nossas lojas são otimizadas para converter no mobile antes de qualquer coisa.",
              },
              {
                icon: "🚚",
                titulo: "Cálculo de frete integrado",
                desc: "Cálculo automático via Correios, Jadlog e transportadoras regionais. O cliente vê o frete antes de finalizar o pedido.",
              },
              {
                icon: "🔒",
                titulo: "Segurança e HTTPS incluso",
                desc: "Certificado SSL gratuito, hospedagem na Vercel com 99.9% de uptime e proteção contra ataques automática.",
              },
              {
                icon: "📧",
                titulo: "E-mails transacionais automáticos",
                desc: "Confirmação de pedido, notificação de envio e atualização de status enviados automaticamente para o cliente.",
              },
              {
                icon: "📈",
                titulo: "Analytics e rastreamento",
                desc: "Google Analytics 4, Google Search Console e pixels de conversão configurados para você acompanhar cada venda.",
              },
            ].map((f) => (
              <div key={f.titulo} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#0A1628] mb-2">{f.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Plataforma profissional. Preço acessível.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nossas lojas são construídas em Next.js com hospedagem na Vercel — a mesma infraestrutura usada por gigantes do e-commerce mundial. Você tem tecnologia de ponta sem pagar preço de enterprise.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  "Next.js + Vercel — infraestrutura de nível enterprise",
                  "Lighthouse 95+ em todas as métricas",
                  "Core Web Vitals otimizados (Google ranqueia melhor)",
                  "Sem mensalidade de plataforma (diferente de Shopify e VTEX)",
                  "Você é dono do código — sem vendor lock-in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <span className="text-blue-600 text-xs font-bold tracking-widest">LOJA VIRTUAL</span>
              <div className="text-5xl font-extrabold text-[#0A1628] mt-3 mb-1">Planos a partir de R$ 90/mês</div>
              <p className="text-gray-400 text-sm mb-7">Ou em até 12x no cartão</p>
              <ul className="space-y-2.5 text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                {[
                  "Produtos ilimitados no catálogo",
                  "Pagamento integrado (PIX, cartão, boleto)",
                  "SEO técnico para cada produto",
                  "Painel de gestão completo incluso",
                  "Prazo: até 25 dias úteis",
                  "Treinamento pós-entrega incluso",
                  "Suporte via WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message="Olá! Quero criar minha loja virtual. Como funciona o processo?"
                className="w-full justify-center py-3.5 text-base"
              >
                Quero minha loja virtual →
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4">
            Suporte que você consegue quando precisa
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Nenhum ticket, nenhum chatbot, nenhuma fila de suporte. Você fala diretamente com quem construiu a sua loja — pelo WhatsApp, em português, em tempo real.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                titulo: "Treinamento na entrega",
                desc: "Quando sua loja fica pronta, fazemos uma sessão de treinamento para você dominar o painel admin do zero.",
                icon: "🎓",
              },
              {
                titulo: "Suporte pós-entrega",
                desc: "Qualquer dúvida após a entrega, responderemos via WhatsApp. Sem prazo de expiração de suporte.",
                icon: "💬",
              },
              {
                titulo: "Planos de manutenção",
                desc: "Precisa de atualizações frequentes? Oferecemos planos mensais de manutenção com horas dedicadas.",
                icon: "🔧",
              },
            ].map((s) => (
              <div key={s.titulo} className="bg-gray-50 border border-gray-100 rounded-2xl p-7 text-left">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[#0A1628] mb-2">{s.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <WhatsAppButton
              message="Quero criar minha loja virtual. Como funciona e qual o prazo?"
              className="px-8 py-4 text-base"
            >
              Falar com especialista agora
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Dúvidas sobre Loja Virtual" />

      <CidadesGrid prefixo="loja-virtual" titulo="Loja Virtual por Cidade" />
    </>
  );
}
