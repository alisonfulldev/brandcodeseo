import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { getConteudoNicho, nichoIndexavel, hrefSistemaPara, NICHOS_FUNDIDOS } from "@/lib/conteudo";
import nichos from "@/data/nichos.json";
import tiposSoftware from "@/data/tipos-software.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { ConteudoIntro, ConteudoDetalhes } from "@/components/seo/ConteudoSections";

type Params = { segmento: string };

export async function generateStaticParams() {
  // Segmentos fundidos redirecionam para a página de tipo (next.config.ts)
  return nichos.filter((n) => !(n.slug in NICHOS_FUNDIDOS)).map((n) => ({ segmento: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) return {};

  return buildMetadata({
    title: `Sistema para ${nicho.nome} Sob Medida | Funcionalidades e Preços`,
    description: `${nicho.descricao} Veja funcionalidades, exemplo prático, integrações e faixas de preço. Orçamento gratuito.`,
    slug: `sistema-para/${nicho.slug}`,
    noindex: !nichoIndexavel(nicho.slug),
    keywords: [
      ...nicho.palavrasChave,
      `sistema para ${nicho.nome.toLowerCase()}`,
      `software para ${nicho.nome.toLowerCase()}`,
    ],
  });
}

export default async function SistemaParaSegmentoPage({ params }: { params: Promise<Params> }) {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) notFound();
  const conteudo = getConteudoNicho(nicho.slug);

  const faqs = [
    ...(conteudo?.faqs ?? []),
    {
      question: `Recebo o código-fonte do sistema para ${nicho.nome.toLowerCase()}?`,
      answer: `Sim. O código-fonte é seu. Entregamos o repositório completo, documentação técnica e 3 meses de suporte incluso. Sem dependência de fornecedor.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de um sistema para ${nicho.nome.toLowerCase()}. Pode me passar um orçamento?`;
  const precoInicial = conteudo?.precos[0]?.valor.match(/[\d.]+/)?.[0]?.replace(/\./g, "") ?? "2997";

  const nichosIndexaveis = nichos.filter((n) => nichoIndexavel(n.slug) && n.slug !== nicho.slug);
  const indice = nichos.findIndex((n) => n.slug === nicho.slug);
  const inicio = (indice * 3) % nichosIndexaveis.length;
  const outrosNichos = [...nichosIndexaveis.slice(inicio), ...nichosIndexaveis].slice(0, 8);
  const inicioTipos = (indice * 5) % tiposSoftware.length;
  const tiposSugeridos = [...tiposSoftware.slice(inicioTipos), ...tiposSoftware].slice(0, 6);
  const relatedGroups = [
    {
      titulo: `Soluções que também atendem ${nicho.nome.toLowerCase()}`,
      links: tiposSugeridos.map((t) => ({ href: `/desenvolvimento-de/${t.slug}`, label: t.nome })),
    },
    {
      titulo: "Outros segmentos atendidos",
      links: outrosNichos.map((n) => ({ href: hrefSistemaPara(n.slug), label: n.nome })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Sistema para ${nicho.nome}`, description: nicho.descricao, price: precoInicial, slug: `sistema-para/${nicho.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Sistema para ${nicho.nome}`, url: `${SITE_URL}/sistema-para/${nicho.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Sistema para ${nicho.nome} — 100% Personalizado`}
        subtitulo={`${nicho.descricao} Código-fonte entregue, suporte incluso e sem dependência de fornecedor.`}
        badge={`Sistema para ${nicho.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

      {conteudo && <ConteudoIntro conteudo={conteudo} nome={`Sistema para ${nicho.nome}`} />}

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                Problemas que o sistema resolve
              </h2>
              <ul className="space-y-3">
                {nicho.dores.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                O que o sistema entrega
              </h2>
              <ul className="space-y-3">
                {nicho.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton message={whatsappMsg} className="px-6 py-3 text-sm">
                  Quero um orçamento para {nicho.nome.toLowerCase()}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {conteudo && <ConteudoDetalhes conteudo={conteudo} nome={`um sistema para ${nicho.nome}`} whatsappMsg={whatsappMsg} />}

      <FAQ items={faqs} title={`Dúvidas sobre sistema para ${nicho.nome}`} />
      <RelatedLinksSection groups={relatedGroups} />
    </>
  );
}
