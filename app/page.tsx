import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES, WHATSAPP_LINK } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import Precos from "@/components/sections/Precos";
import FAQ from "@/components/sections/FAQ";
import CidadesGrid from "@/components/sections/CidadesGrid";
import NichosGrid from "@/components/sections/NichosGrid";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Criação de Sites que Vendem | SEO Técnico Avançado Incluso",
  description:
    "Agência digital premiada. Criamos sites que aparecem no Google e convertem visitantes em clientes via WhatsApp. SEO técnico avançado, painel admin e entrega rápida. Site institucional a partir de R$ 497.",
  keywords: [
    "criação de sites",
    "agência de sites",
    "site profissional",
    "site com SEO",
    "site que vende",
    "criar site empresarial",
    "desenvolvimento de sites",
    "agência digital",
    "site que aparece no Google",
    "criação de sites com SEO",
  ],
});

const homeFaqs = [
  {
    question: "Quanto custa criar um site profissional com a BrandCode?",
    answer: `Trabalhamos com três planos: Site Institucional ${PRICES.institucional}, Landing Page ${PRICES.landingPage} e Loja Virtual ${PRICES.lojaVirtual}. Todos os planos incluem SEO técnico avançado, painel administrativo e hospedagem na Vercel. Parcelamos em até 12x no cartão. Solicite um orçamento personalizado pelo WhatsApp.`,
  },
  {
    question: "O SEO já vem incluso mesmo no plano mais em conta?",
    answer:
      "Sim, sem exceção. Configuramos meta tags, sitemap XML, robots.txt, schema JSON-LD, OpenGraph, Core Web Vitals otimizados e velocidade de carregamento em todos os planos — inclusive na Landing Page de R$ 370. SEO não é opcional na BrandCode, é padrão.",
  },
  {
    question: "Posso atualizar o meu site sem precisar de programador?",
    answer:
      "Sim. Todo site entregue pela BrandCode inclui um painel administrativo completo. Você atualiza textos, imagens, produtos, preços e páginas inteiras sem escrever uma linha de código. Isso é autonomia de verdade.",
  },
  {
    question: "Qual é o prazo de entrega de cada tipo de site?",
    answer:
      "Landing pages: até 5 dias úteis. Sites institucionais: até 15 dias úteis. Lojas virtuais: até 25 dias úteis. Os prazos são definidos em contrato e começam a contar após aprovação do briefing e pagamento da entrada.",
  },
  {
    question: "A BrandCode atende qual tipo de negócio?",
    answer:
      "Atendemos médicos, dentistas, advogados, clínicas, academias, restaurantes, imobiliárias, coaches, infoprodutores, e-commerces, prestadores de serviço e qualquer empresa que precise de presença digital profissional. Se você tem um negócio, temos um site que funciona para ele.",
  },
  {
    question: "Que tecnologia vocês usam para criar os sites?",
    answer:
      "Usamos Next.js com App Router e hospedagem na Vercel — a mesma infraestrutura usada por empresas como TikTok e Twitch. Isso garante velocidade máxima de carregamento, 99.9% de uptime e Lighthouse 95+ em todos os sites entregues.",
  },
  {
    question: "Como funciona o suporte após a entrega do site?",
    answer:
      "Suporte direto via WhatsApp, sem ticket, sem chatbot. Você fala com quem construiu o seu site. Oferecemos suporte pós-entrega incluso e planos de manutenção mensal para quem precisa de atualização frequente de conteúdo.",
  },
  {
    question: "Por que o SEO da BrandCode é diferente de outras agências?",
    answer:
      "Na maioria das agências, SEO é um extra pago à parte — e entregue de forma superficial. Na BrandCode, SEO técnico avançado é o ponto de partida: configuramos schema markup, otimizamos Core Web Vitals, geramos sitemaps dinâmicos e implementamos marcação estruturada JSON-LD para rich snippets no Google. Somos finalistas do Prêmio Nacional de Melhor SEO do Brasil 2025 — isso diz tudo.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Início", url: SITE_URL }])
          ),
        }}
      />

      <Hero
        titulo="Seu concorrente está no topo do Google. E você?"
        subtitulo="Criamos sites que aparecem no Google sem você gastar R$ 1 em anúncio. SEO técnico avançado incluso em todos os planos, painel administrativo e conversão via WhatsApp."
        badge="🏆 Finalista — Prêmio Nacional de Melhor SEO do Brasil 2025"
        whatsappMsg="Olá! Vim pelo site e quero um orçamento para criação de site."
        ctaHref="/criacao-de-sites/quanto-custa"
      />

      {/* Prova social — números reais */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-extrabold text-[#0A1628]">+200</div>
              <div className="text-gray-500 mt-1 text-sm">Sites entregues com resultado</div>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-gray-100">
              <div className="text-4xl font-extrabold text-[#0A1628]">100%</div>
              <div className="text-gray-500 mt-1 text-sm">Com SEO técnico avançado incluso</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-extrabold text-[#0A1628]">4.9★</div>
              <div className="text-gray-500 mt-1 text-sm">Avaliação média dos nossos clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dor — problemas que o cliente tinha antes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
              Reconhece alguma dessas situações?
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              São as reclamações mais comuns de quem chegou até nós vindo de outra agência.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                emoji: "😤",
                texto:
                  "\"Paguei R$ 2.000 por um site que não aparece nem quando digito o nome da empresa no Google.\"",
              },
              {
                emoji: "📉",
                texto:
                  "\"Meu site recebe visitas, mas nunca tocou o telefone. Nem um cliente veio de lá.\"",
              },
              {
                emoji: "🔒",
                texto:
                  "\"Preciso pagar o programador toda vez que quero mudar o preço ou trocar uma foto.\"",
              },
              {
                emoji: "👀",
                texto:
                  "\"Meu concorrente, que abriu depois de mim, aparece na primeira página do Google. Eu não apareço em lugar nenhum.\"",
              },
              {
                emoji: "💸",
                texto:
                  "\"Gasto todo mês com Google Ads porque sem anúncio meu site some completamente.\"",
              },
              {
                emoji: "🐌",
                texto:
                  "\"O site abre tão devagar no celular que os clientes saem antes de ver qualquer coisa.\"",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <p className="text-gray-600 text-sm italic leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-500 text-sm">
            Se identificou com pelo menos uma dessas situações, você está no lugar certo.
          </p>
        </div>
      </section>

      {/* Seção de Solução */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Como a BrandCode resolve isso
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Não prometemos milagre. Entregamos um site construído do zero para aparecer no Google e converter visitante em cliente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                numero: "01",
                titulo: "SEO configurado antes de ir ao ar",
                desc: "Meta tags, sitemap, robots.txt, schema JSON-LD e Core Web Vitals otimizados desde o primeiro commit. Seu site já nasce pronto para o Google indexar.",
              },
              {
                numero: "02",
                titulo: "Conversão em cada elemento",
                desc: "Botão fixo de WhatsApp, CTAs estratégicos em cada seção, formulário de contato, copy orientado à ação. Visitante entra — cliente sai.",
              },
              {
                numero: "03",
                titulo: "Você no controle, sem depender de ninguém",
                desc: "Painel administrativo completo entregue com o site. Você atualiza, adiciona páginas e gerencia conteúdo sem precisar de programador.",
              },
            ].map((item) => (
              <div
                key={item.numero}
                className="bg-white/5 border border-white/10 rounded-2xl p-7"
              >
                <div className="text-blue-400 text-xs font-bold tracking-widest mb-3">
                  {item.numero}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Diferenciais />

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] text-center mb-4">
            Escolha o tipo de site ideal para o seu negócio
          </h2>
          <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
            Do site simples à loja virtual completa — todos com SEO, painel admin e foco em conversão.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                href: "/criacao-de-sites",
                titulo: "Site Institucional",
                preco: PRICES.institucional,
                desc: "Presença digital completa com autoridade. Até 8 páginas, blog, formulário e SEO avançado para aparecer no Google.",
                icon: "🌐",
                destaque: false,
              },
              {
                href: "/loja-virtual",
                titulo: "Loja Virtual",
                preco: PRICES.lojaVirtual,
                desc: "Venda online 24h. Pagamento integrado (PIX, cartão, boleto), gestão de produtos e SEO para cada item do catálogo.",
                icon: "🛒",
                destaque: true,
              },
              {
                href: "/landing-page",
                titulo: "Landing Page",
                preco: PRICES.landingPage,
                desc: "Uma página. Uma missão. Converter. Ideal para campanhas de Google Ads, Meta Ads e captação de leads.",
                icon: "🎯",
                destaque: false,
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`relative rounded-2xl p-7 border transition-all group ${
                  s.destaque
                    ? "bg-[#0A1628] border-[#0A1628] text-white"
                    : "bg-gray-50 border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                {s.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mais popular
                  </span>
                )}
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className={`font-bold text-xl mb-2 ${
                    s.destaque ? "text-white" : "text-[#0A1628] group-hover:text-blue-700"
                  }`}
                >
                  {s.titulo}
                </h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    s.destaque ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {s.desc}
                </p>
                <span
                  className={`text-sm font-bold ${
                    s.destaque ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {s.preco} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Precos />

      {/* Autoridade — Prêmio Nacional de Melhor SEO */}
      <section className="py-16 bg-blue-950 border-y border-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-900/50 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-400 text-xl">🏆</span>
            <span className="text-blue-200 text-sm font-semibold tracking-wide">
              PRÊMIO NACIONAL DE MELHOR SEO DO BRASIL
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Finalista 2025 — Reconhecidos entre as melhores agências digitais do país
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Nosso trabalho em SEO técnico avançado foi reconhecido nacionalmente. Enquanto outras agências entregam sites bonitos, a BrandCode entrega sites que aparecem no Google e geram clientes de verdade — e isso foi validado por especialistas do mercado digital brasileiro.
          </p>
        </div>
      </section>

      <NichosGrid />

      <CidadesGrid />

      <FAQ items={homeFaqs} title="Perguntas Frequentes" />

      {/* CTA Final */}
      <section className="py-20 bg-[#0A1628] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Chega de site que não traz cliente.
          </h2>
          <p className="text-gray-400 mb-3 text-lg">
            Fale agora pelo WhatsApp e receba um orçamento personalizado em minutos.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Sem compromisso. Sem enrolação. Só resultado.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero meu site que vende
          </a>
          <div className="mt-6 flex justify-center gap-6 text-xs text-gray-600">
            <span>✓ Resposta em até 1h</span>
            <span>✓ Orçamento sem compromisso</span>
            <span>✓ Sem enrolação</span>
          </div>
        </div>
      </section>
    </>
  );
}
