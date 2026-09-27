import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { getConteudoTipo, tipoIndexavel, nichoIndexavel, hrefSistemaPara } from "@/lib/conteudo";
import { artigosRelacionados } from "@/lib/blog";
import tiposSoftware from "@/data/tipos-software.json";
import nichos from "@/data/nichos.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { ConteudoIntro, ConteudoDetalhes } from "@/components/seo/ConteudoSections";

type Params = { tipo: string };

export async function generateStaticParams() {
  return tiposSoftware.map((t) => ({ tipo: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { tipo } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) return {};

  return buildMetadata({
    title: `Desenvolvimento de ${software.nome} Sob Medida | Preços e Prazos`,
    description: `${software.descricao} Veja funcionalidades, exemplo prático, faixas de preço e prazo. Orçamento gratuito.`,
    slug: `desenvolvimento-de/${software.slug}`,
    noindex: !tipoIndexavel(software.slug),
    keywords: [
      ...software.palavrasChave,
      `desenvolvimento de ${software.nome.toLowerCase()}`,
      `quanto custa ${software.nome.toLowerCase()}`,
    ],
  });
}

export default async function DesenvolvimentoDeTipoPage({ params }: { params: Promise<Params> }) {
  const { tipo } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) notFound();
  const conteudo = getConteudoTipo(software.slug);

  const faqs = [
    ...(conteudo?.faqs ?? []),
    {
      question: `O código-fonte do ${software.nome.toLowerCase()} fica comigo?`,
      answer: `Sim. Você recebe o repositório completo, documentação técnica e 3 meses de suporte incluso. Sem mensalidade de licença e sem dependência de fornecedor.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de desenvolvimento de ${software.nome.toLowerCase()}. Pode me passar um orçamento?`;
  const precoInicial = conteudo?.precos[0]?.valor.match(/[\d.]+/)?.[0]?.replace(/\./g, "") ?? "2997";

  const indice = tiposSoftware.findIndex((t) => t.slug === software.slug);
  const tiposRelacionados = tiposSoftware
    .filter((t) => t.slug !== software.slug && t.categoria === software.categoria)
    .slice(0, 8);
  const grupoTipos = tiposRelacionados.length >= 3
    ? tiposRelacionados
    : tiposSoftware.filter((t) => t.slug !== software.slug).slice(indice % 10, (indice % 10) + 8);
  const nichosIndexaveis = nichos.filter((n) => nichoIndexavel(n.slug));
  const inicioNichos = (indice * 3) % nichosIndexaveis.length;
  const grupoNichos = [...nichosIndexaveis.slice(inicioNichos), ...nichosIndexaveis].slice(0, 8);
  const relatedGroups = [
    {
      titulo: "Tipos relacionados de software",
      links: grupoTipos.map((t) => ({ href: `/desenvolvimento-de/${t.slug}`, label: t.nome })),
    },
    {
      titulo: "Sistemas por segmento",
      links: grupoNichos.map((n) => ({ href: hrefSistemaPara(n.slug), label: `Sistema para ${n.nome}` })),
    },
    ...artigosRelacionados(`/desenvolvimento-de/${software.slug}`),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Desenvolvimento de ${software.nome}`, description: software.descricao, price: precoInicial, slug: `desenvolvimento-de/${software.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Desenvolvimento de ${software.nome}`, url: `${SITE_URL}/desenvolvimento-de/${software.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Desenvolvimento de ${software.nome} Sob Medida`}
        subtitulo={`${software.descricao} Código-fonte entregue, arquitetura escalável e suporte real.${conteudo ? ` A partir de ${conteudo.precos[0].valor.split(" – ")[0]}.` : ""}`}
        badge={`Desenvolvimento de ${software.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

      {conteudo && <ConteudoIntro conteudo={conteudo} nome={software.nome} />}

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                Por que desenvolver {software.nome.toLowerCase()} sob medida?
              </h2>
              <ul className="space-y-3">
                {software.dores.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                O que a BrandCode entrega
              </h2>
              <ul className="space-y-3">
                {software.beneficios.map((b) => (
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
                  Solicitar orçamento de {software.nome.toLowerCase()}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {conteudo && <ConteudoDetalhes conteudo={conteudo} nome={software.nome} whatsappMsg={whatsappMsg} />}

      <FAQ items={faqs} title={`Dúvidas sobre desenvolvimento de ${software.nome}`} />
      <RelatedLinksSection groups={relatedGroups} />
    </>
  );
}
