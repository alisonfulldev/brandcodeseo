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
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Criação de Sites que Vendem | SEO Técnico Avançado Incluso",
  description:
    "Criamos sites que aparecem no Google e convertem visitantes em clientes via WhatsApp. SEO técnico avançado, painel admin e entrega rápida. Planos a partir de R$ 90/mês.",
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
      "Sim, sem exceção. Configuramos meta tags, sitemap XML, robots.txt, schema JSON-LD, OpenGraph, Core Web Vitals otimizados e velocidade de carregamento em todos os planos — inclusive no plano a partir de R$ 90/mês. SEO não é opcional na BrandCode, é padrão.",
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
      "Na maioria das agências, SEO é um extra pago à parte — e entregue de forma superficial. Na BrandCode, SEO técnico avançado é o ponto de partida: configuramos schema markup, otimizamos Core Web Vitals, geramos sitemaps dinâmicos e implementamos marcação estruturada JSON-LD para rich snippets no Google.",
  },
];

// SVG icons (Lucide style)
const IconSearch = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);
const IconTrendingDown = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.511l-5.511-3.182" />
  </svg>
);
const IconLock = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
const IconUsers = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);
const IconDollar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconZap = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);
const IconCart = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);
const IconTarget = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0v2.25M12 21v-2.25M3 12h2.25M21 12h-2.25" />
  </svg>
);
const IconWA = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const SectionAccent = () => (
  <div
    style={{
      width: 40,
      height: 3,
      background: "#3B82F6",
      borderRadius: 2,
      margin: "12px auto 0",
    }}
  />
);

const painPoints = [
  { icon: <IconSearch />, texto: '"Paguei R$ 2.000 por um site que não aparece nem quando digito o nome da empresa no Google."' },
  { icon: <IconTrendingDown />, texto: '"Meu site recebe visitas, mas nunca tocou o telefone. Nem um cliente veio de lá."' },
  { icon: <IconLock />, texto: '"Preciso pagar o programador toda vez que quero mudar o preço ou trocar uma foto."' },
  { icon: <IconUsers />, texto: '"Meu concorrente, que abriu depois de mim, aparece na primeira página do Google. Eu não apareço em lugar nenhum."' },
  { icon: <IconDollar />, texto: '"Gasto todo mês com Google Ads porque sem anúncio meu site some completamente."' },
  { icon: <IconZap />, texto: '"O site abre tão devagar no celular que os clientes saem antes de ver qualquer coisa."' },
];

const servicos = [
  {
    href: "/criacao-de-sites",
    titulo: "Site Institucional",
    preco: PRICES.institucional,
    desc: "Presença digital completa com autoridade. Até 8 páginas, blog, formulário e SEO avançado para aparecer no Google.",
    icon: <IconGlobe />,
    destaque: false,
  },
  {
    href: "/loja-virtual",
    titulo: "Loja Virtual",
    preco: PRICES.lojaVirtual,
    desc: "Venda online 24h. Pagamento integrado (PIX, cartão, boleto), gestão de produtos e SEO para cada item do catálogo.",
    icon: <IconCart />,
    destaque: true,
  },
  {
    href: "/landing-page",
    titulo: "Landing Page",
    preco: PRICES.landingPage,
    desc: "Uma página. Uma missão. Converter. Ideal para campanhas de Google Ads, Meta Ads e captação de leads.",
    icon: <IconTarget />,
    destaque: false,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }])),
        }}
      />

      <Hero
        titulo="Seu concorrente está no topo do Google. E você?"
        subtitulo="Criamos sites que geram tráfego orgânico do Google e convertem visitantes em clientes via WhatsApp. SEO técnico avançado incluso em todos os planos e painel administrativo."
        whatsappMsg="Olá! Vim pelo site e quero um orçamento para criação de site."
        ctaHref="/criacao-de-sites/quanto-custa"
        badge="⚡ SEO Técnico Avançado Incluso"
        highlight="Google"
      />

      {/* Prova social */}
      <section className="py-16" style={{ background: "#0D1526" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { valor: "+200", label: "Sites entregues com resultado" },
              { valor: "100%", label: "Com SEO técnico avançado incluso" },
              { valor: "4.9★", label: "Avaliação média dos nossos clientes" },
            ].map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 100}
                className={i === 1 ? "md:border-x py-6" : "py-6"}
              >
                <div
                  className="font-extrabold"
                  style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
                >
                  {item.valor}
                </div>
                <div className="mt-1 text-sm" style={{ color: "#CBD5E1" }}>
                  {item.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Dor */}
      <section className="py-20" style={{ background: "#0A0F1E" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Reconhece alguma dessas situações?
            </h2>
            <SectionAccent />
            <p className="mt-5 max-w-2xl mx-auto" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              São as reclamações mais comuns de quem chegou até nós vindo de outra agência.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="dark-card flex items-start gap-4 p-5 h-full">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-sm italic" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
                    {item.texto}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: "#94A3B8" }}>
            Se identificou com pelo menos uma dessas situações, você está no lugar certo.
          </p>
        </div>
      </section>

      {/* Seção de Solução */}
      <section className="py-20" style={{ background: "#0D1526" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Como a BrandCode resolve isso
            </h2>
            <SectionAccent />
            <p className="mt-5 max-w-2xl mx-auto" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              Não prometemos milagre. Entregamos um site construído do zero para aparecer no
              Google e converter visitante em cliente.
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
            ].map((item, i) => (
              <AnimatedSection key={item.numero} delay={i * 100}>
                <div className="dark-card p-7 h-full">
                  <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#3B82F6" }}>
                    {item.numero}
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: "#F8FAFC" }}>
                    {item.titulo}
                  </h3>
                  <p className="text-sm" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Diferenciais />

      {/* Serviços */}
      <section className="py-20" style={{ background: "#0D1526" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Escolha o tipo de site ideal para o seu negócio
            </h2>
            <SectionAccent />
            <p className="mt-5 max-w-xl mx-auto" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              Do site simples à loja virtual completa — todos com SEO, painel admin e foco em
              conversão.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <AnimatedSection key={s.href} delay={i * 100}>
                <Link
                  href={s.href}
                  className={`relative flex flex-col p-7 h-full ${s.destaque ? "service-card-featured" : "service-card"}`}
                >
                  {s.destaque && (
                    <span
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#3B82F6", color: "#fff" }}
                    >
                      Mais popular
                    </span>
                  )}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "#F8FAFC" }}>
                    {s.titulo}
                  </h3>
                  <p className="text-sm mb-4 flex-1" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
                    {s.desc}
                  </p>
                  <span className="text-sm font-bold" style={{ color: "#3B82F6" }}>
                    {s.preco} →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Precos />

      <NichosGrid />

      <CidadesGrid />

      <FAQ items={homeFaqs} title="Perguntas Frequentes" />

      {/* CTA Final */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          background: "#0A0F1E",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
          style={{ background: "#3B82F6", filter: "blur(80px)", opacity: 0.1 }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Chega de site que não traz cliente.
            </h2>
            <p className="mb-3 text-lg" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              Fale agora pelo WhatsApp e receba um orçamento personalizado em minutos.
            </p>
            <p className="text-sm mb-10" style={{ color: "#94A3B8" }}>
              Sem compromisso. Sem enrolação. Só resultado.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-wa font-bold text-lg transition-all duration-200 active:scale-95"
              style={{ background: "#25D366", color: "#fff", borderRadius: "8px", padding: "14px 32px" }}
            >
              <IconWA />
              Quero meu site que vende
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs" style={{ color: "#94A3B8" }}>
              {["Resposta em até 1h", "Orçamento sem compromisso", "Sem enrolação"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span style={{ color: "#3B82F6" }}><IconCheck /></span>
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
