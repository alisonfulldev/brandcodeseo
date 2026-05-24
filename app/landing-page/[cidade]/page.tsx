import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import { getCidade, getCidadesVizinhas } from "@/lib/cidades";
import { getHeadlineLP, getAbertura, getDepoimentos } from "@/lib/conteudo";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { cidade: string };

export async function generateStaticParams() {
  return cidades.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { cidade: slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) return {};

  const headline = getHeadlineLP(cidade);

  return buildMetadata({
    title: `Landing Page em ${cidade.nome} — ${headline}`,
    description: `Criação de landing page profissional em ${cidade.nome}, ${cidade.estado}. Alta conversão para Google Ads, Meta Ads e SEO. ${PRICES.landingPage}. Entrega em até 5 dias úteis.`,
    slug: `landing-page/${cidade.slug}`,
    keywords: [
      `landing page ${cidade.nome}`,
      `criar landing page ${cidade.nome}`,
      `página de captura ${cidade.nome}`,
      `landing page ${cidade.estado}`,
      `página de vendas ${cidade.nome}`,
      `landing page alta conversão ${cidade.nome}`,
    ],
  });
}

export default async function LandingPageCidadePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { cidade: slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) notFound();

  const headline = getHeadlineLP(cidade);
  const abertura = getAbertura(cidade);
  const depoimentos = getDepoimentos(slug);
  const vizinhas = getCidadesVizinhas(slug, 5);

  const faqs = [
    {
      question: `O que é uma landing page e por que meu negócio em ${cidade.nome} precisa de uma?`,
      answer: `Landing page é uma página focada em conversão — feita para transformar visitantes em leads ou clientes. Para negócios em ${cidade.nome} que investem em Google Ads ou Meta Ads, uma landing page bem construída pode dobrar o retorno do investimento em tráfego pago.`,
    },
    {
      question: `Quanto custa criar uma landing page profissional em ${cidade.nome}?`,
      answer: `Landing Page ${PRICES.landingPage}. Mesmo preço para todo o Brasil. Inclui design personalizado, SEO on-page, integração com WhatsApp, formulário de captura e hospedagem de alta performance.`,
    },
    {
      question: `Em quanto tempo a landing page fica pronta para minha empresa em ${cidade.nome}?`,
      answer: `Em até 5 dias úteis após a aprovação do briefing e recebimento do material. Prazo registrado em contrato. Para empresas de ${cidade.nome} com campanhas rodando, entregamos com prioridade.`,
    },
    {
      question: `A landing page vai funcionar com Google Ads e Meta Ads?`,
      answer: `Sim. Criamos a página com os critérios de qualidade do Google Ads (Quality Score), velocidade de carregamento otimizada para mobile e estrutura de conversão que maximiza o ROAS das suas campanhas.`,
    },
    {
      question: `Posso editar minha landing page de ${cidade.nome} depois da entrega?`,
      answer: `Sim. Todas as nossas landing pages incluem painel administrativo para você editar textos, imagens e ofertas sem precisar de programador. Qualquer ajuste na campanha, você mesmo faz.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de uma landing page para meu negócio em ${cidade.nome}. Podem me passar um orçamento?`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({ cidade: cidade.nome, estado: cidade.estado })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Landing Page em ${cidade.nome}`,
              description: `Criação de landing page de alta conversão para empresas de ${cidade.nome}, ${cidade.estado}. Integração com Google Ads, Meta Ads, SEO e WhatsApp.`,
              price: "370",
              slug: `landing-page/${cidade.slug}`,
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
              {
                name: cidade.nome,
                url: `${SITE_URL}/landing-page/${cidade.slug}`,
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* HERO */}
      <Hero
        titulo={`Landing Page em ${cidade.nome} — ${headline}`}
        subtitulo={`Páginas de alta conversão para negócios de ${cidade.nome}, ${cidade.estado}. Integração com Google Ads, Meta Ads e SEO orgânico. Entrega em até 5 dias. ${PRICES.landingPage}.`}
        badge={`Landing Page — ${cidade.nome}, ${cidade.estado}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/landing-page/preco"
      />

      {/* ABERTURA COM CONTEXTO LOCAL */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-gray-700 leading-relaxed">{abertura}</p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Uma landing page bem estruturada pode multiplicar o retorno das suas
            campanhas em {cidade.nome} — seja no Google Ads, Meta Ads ou SEO
            orgânico. A BrandCode entrega páginas focadas em uma única ação:
            fazer o visitante entrar em contato com você.
          </p>
        </div>
      </section>

      {/* POR QUE SUA LANDING PAGE EM [CIDADE] PRECISA SER PROFISSIONAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4 text-center">
            Por que negócios em {cidade.nome} precisam de uma landing page que converte?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Tráfego pago sem landing page de qualidade é dinheiro jogado fora.
            Cada real investido em anúncios precisa de uma página preparada para
            converter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                titulo: "Foco Total na Conversão",
                desc: `Sem menu, sem distração. Cada elemento da página foi pensado para transformar visitantes de ${cidade.nome} em leads ou clientes.`,
              },
              {
                icon: "⚡",
                titulo: "Velocidade para Mobile",
                desc: "Google Ads penaliza páginas lentas com Quality Score baixo. Nossas landing pages carregam em menos de 2 segundos no celular.",
              },
              {
                icon: "📊",
                titulo: "Rastreamento Completo",
                desc: "Google Analytics, Meta Pixel e conversões configuradas. Você sabe exatamente quantos leads cada campanha gerou.",
              },
              {
                icon: "💬",
                titulo: "WhatsApp como CTA Principal",
                desc: `Botão de WhatsApp estrategicamente posicionado. Seu lead de ${cidade.nome} entra em contato com um clique.`,
              },
              {
                icon: "🔧",
                titulo: "Testes A/B Prontos",
                desc: "Estrutura preparada para testes de títulos, CTAs e ofertas. Você melhora a conversão ao longo do tempo.",
              },
              {
                icon: "🖊️",
                titulo: "Painel para Edições Rápidas",
                desc: "Mudou a oferta ou a promoção? Você mesmo edita a landing page sem precisar de programador.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="text-2xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREÇO + O QUE INCLUI */}
      <section className="py-20 bg-white" id="precos">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4 text-center">
            Investimento para sua landing page em {cidade.nome}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Pronto em até 5 dias úteis. Mesmo preço para todo o Brasil.
          </p>
          <div className="bg-[#0A1628] rounded-2xl p-10 text-white text-center shadow-xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">
              Landing Page Profissional
            </p>
            <p className="text-5xl font-extrabold mb-2">{PRICES.landingPage}</p>
            <p className="text-blue-200 text-sm mb-6">
              Entrega em até 5 dias úteis · Pagamento parcelado disponível
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {[
                "Design personalizado de alta conversão",
                "SEO on-page completo",
                "Integração com WhatsApp",
                "Formulário de captura de leads",
                "Google Analytics e Meta Pixel",
                "Design responsivo para mobile",
                "Velocidade otimizada (Core Web Vitals)",
                "Painel para edições independentes",
                "Certificado SSL incluso",
                "Hospedagem de alta performance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <svg
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppButton message={whatsappMsg} className="px-10 py-4 text-base">
              Quero minha landing page
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-12 text-center">
            Resultados reais de quem investiu em landing page
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex mb-4" aria-label="5 estrelas">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#0A1628]">{d.nome}</p>
                  <p className="text-sm text-gray-400">
                    {d.cargo} — {cidade.nome}, {cidade.estado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pare de desperdiçar tráfego em {cidade.nome}
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Cada clique no seu anúncio que não converte é dinheiro perdido. Uma
            landing page profissional para seu negócio em {cidade.nome} resolve
            isso em até 5 dias úteis.
          </p>
          <WhatsAppButton message={whatsappMsg} className="px-10 py-4 text-base">
            Quero minha landing page
          </WhatsAppButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-12 text-center">
            Dúvidas sobre landing page em {cidade.nome}
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-semibold text-[#0A1628] text-left">
                    {faq.question}
                  </span>
                  <span
                    className="text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INTERLINKING */}
      {vizinhas.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-[#0A1628] mb-6">
              Landing pages em outras cidades de {cidade.estado}
            </h2>
            <div className="flex flex-wrap gap-3">
              {vizinhas.map((v) => (
                <Link
                  key={v.slug}
                  href={`/landing-page/${v.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#0A1628] hover:border-blue-400 hover:text-blue-700 transition-colors"
                >
                  Landing Page em {v.nome}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
