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
import { getHeadlineLoja, getAbertura, getDepoimentos } from "@/lib/conteudo";
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

  const headline = getHeadlineLoja(cidade);

  return buildMetadata({
    title: `Loja Virtual em ${cidade.nome} — ${headline}`,
    description: `Criação de loja virtual profissional em ${cidade.nome}, ${cidade.estado}. E-commerce com SEO técnico, pagamento integrado e painel de gestão. ${PRICES.lojaVirtual}. Venda online 24 horas por dia.`,
    slug: `loja-virtual/${cidade.slug}`,
    keywords: [
      `loja virtual ${cidade.nome}`,
      `criar loja online ${cidade.nome}`,
      `e-commerce ${cidade.nome}`,
      `loja virtual ${cidade.estado}`,
      `criação de e-commerce ${cidade.nome}`,
      `vender online ${cidade.nome}`,
    ],
  });
}

export default async function LojaVirtualCidadePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { cidade: slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) notFound();

  const headline = getHeadlineLoja(cidade);
  const abertura = getAbertura(cidade);
  const depoimentos = getDepoimentos(slug);
  const vizinhas = getCidadesVizinhas(slug, 5);

  const faqs = [
    {
      question: `Vocês criam lojas virtuais para empresas em ${cidade.nome}?`,
      answer: `Sim! Criamos e-commerces completos para negócios de ${cidade.nome} e de todo o ${cidade.estado} — 100% online. Do briefing à entrega, tudo via WhatsApp e videoconferência.`,
    },
    {
      question: `Quanto custa criar uma loja virtual em ${cidade.nome}?`,
      answer: `Loja Virtual ${PRICES.lojaVirtual}. Mesmo preço para todo o Brasil — sem taxa extra por ser de ${cidade.nome}. Inclui pagamento integrado, gestão de estoque, painel administrativo e SEO técnico.`,
    },
    {
      question: `Minha loja virtual vai aparecer no Google para buscas de "${cidade.nome}"?`,
      answer: `Sim. Configuramos SEO local e técnico: páginas de produto otimizadas, schema markup de produto, title tags geolocalizadas e velocidade de carregamento para mobile. Seus produtos aparecem no Google.`,
    },
    {
      question: `Quais formas de pagamento a loja virtual vai aceitar?`,
      answer: `PIX, cartão de crédito (parcelado), boleto e cartão de débito. Integração com as principais gateways do Brasil. Seus clientes de ${cidade.nome} pagam como preferem.`,
    },
    {
      question: `Qual o prazo para minha loja virtual de ${cidade.nome} ficar pronta?`,
      answer: `Em até 25 dias úteis após a aprovação do layout e recebimento do conteúdo. Prazo registrado em contrato. Você recebe atualizações do andamento pelo WhatsApp durante todo o processo.`,
    },
  ];

  const whatsappMsg = `Olá! Quero criar uma loja virtual para meu negócio em ${cidade.nome}. Podem me passar um orçamento?`;

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
              name: `Criação de Loja Virtual em ${cidade.nome}`,
              description: `E-commerce completo para empresas de ${cidade.nome}, ${cidade.estado}. Pagamento integrado, SEO técnico avançado, gestão de estoque e painel administrativo.`,
              price: "697",
              slug: `loja-virtual/${cidade.slug}`,
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
              {
                name: cidade.nome,
                url: `${SITE_URL}/loja-virtual/${cidade.slug}`,
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
        titulo={`Loja Virtual em ${cidade.nome} — ${headline}`}
        subtitulo={`E-commerce completo para empresas de ${cidade.nome}, ${cidade.estado}. Pagamento integrado, SEO técnico avançado, gestão de estoque e painel administrativo. ${PRICES.lojaVirtual}.`}
        badge={`Loja Virtual — ${cidade.nome}, ${cidade.estado}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/loja-virtual/preco"
      />

      {/* ABERTURA COM CONTEXTO LOCAL */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {abertura.replace(
              "presença digital profissional",
              "presença no e-commerce"
            )}
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            A BrandCode Solutions cria lojas virtuais completas para
            empreendedores de {cidade.nome} que querem vender online com
            profissionalismo — com pagamento integrado, SEO técnico avançado e
            painel de gestão que você mesmo opera.
          </p>
        </div>
      </section>

      {/* POR QUE SUA LOJA EM [CIDADE] PRECISA DE E-COMMERCE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4 text-center">
            Por que ter uma loja virtual em {cidade.nome}?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            O comércio eletrônico cresceu mais de 30% nos últimos anos. Negócios
            de {cidade.nome} que vendem online não dependem do movimento da loja
            física nem do horário comercial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🛒",
                titulo: "Venda 24h por Dia",
                desc: `Sua loja de ${cidade.nome} fica aberta sempre — fins de semana, feriados e madrugada. Pedidos chegam enquanto você dorme.`,
              },
              {
                icon: "🌎",
                titulo: "Alcance Nacional",
                desc: `Sua loja em ${cidade.nome} pode vender para qualquer estado do Brasil, sem custo de expansão física.`,
              },
              {
                icon: "💳",
                titulo: "Pagamento Integrado",
                desc: "PIX, cartão de crédito parcelado, boleto e débito. Gateway de pagamento configurado e pronto para faturar.",
              },
              {
                icon: "📦",
                titulo: "Gestão de Estoque",
                desc: "Painel administrativo para controlar produtos, estoque, pedidos e clientes — sem precisar de programador.",
              },
              {
                icon: "🔍",
                titulo: "SEO para Produtos",
                desc: "Páginas de produto otimizadas para aparecer no Google quando alguém pesquisa o que você vende.",
              },
              {
                icon: "📊",
                titulo: "Relatórios de Vendas",
                desc: "Acompanhe faturamento, produtos mais vendidos e comportamento do cliente em tempo real.",
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

      {/* TABELA DE PREÇOS */}
      <section className="py-20 bg-white" id="precos">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4 text-center">
            Investimento para sua loja virtual em {cidade.nome}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Mesmo preço para todo o Brasil. Sem mensalidade. Sem surpresas.
          </p>
          <div className="bg-[#0A1628] rounded-2xl p-10 text-white text-center shadow-xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">
              Loja Virtual Completa
            </p>
            <p className="text-5xl font-extrabold mb-2">{PRICES.lojaVirtual}</p>
            <p className="text-blue-200 text-sm mb-6">
              Prazo: até 25 dias úteis · Pagamento parcelado disponível
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {[
                "Pagamento integrado (PIX, cartão, boleto)",
                "Cadastro ilimitado de produtos",
                "Gestão de estoque e pedidos",
                "SEO técnico avançado incluso",
                "Design responsivo para mobile",
                "Painel administrativo completo",
                "Google Analytics configurado",
                "Certificado SSL incluso",
                "Suporte pós-entrega via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
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
              Quero minha loja virtual
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-12 text-center">
            Resultados reais de clientes nossos
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
            Comece a vender online em {cidade.nome} hoje mesmo
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Sua loja virtual pronta em até 25 dias. Fale agora com um
            especialista e tire seu projeto do papel sem compromisso.
          </p>
          <WhatsAppButton message={whatsappMsg} className="px-10 py-4 text-base">
            Quero minha loja virtual
          </WhatsAppButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-12 text-center">
            Dúvidas sobre loja virtual em {cidade.nome}
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
              Criação de loja virtual em outras cidades de {cidade.estado}
            </h2>
            <div className="flex flex-wrap gap-3">
              {vizinhas.map((v) => (
                <Link
                  key={v.slug}
                  href={`/loja-virtual/${v.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#0A1628] hover:border-blue-400 hover:text-blue-700 transition-colors"
                >
                  Loja Virtual em {v.nome}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
