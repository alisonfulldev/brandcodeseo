import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import tiposSoftware from "@/data/tipos-software.json";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";

type Params = { tipo: string };

export async function generateStaticParams() {
  return tiposSoftware.map((t) => ({ tipo: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { tipo } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) return {};

  return buildMetadata({
    title: `Desenvolvimento de ${software.nome} | Software Sob Medida`,
    description: `${software.descricao} Desenvolvimento personalizado, código-fonte entregue e suporte real. Solicite um orçamento gratuito.`,
    slug: `desenvolvimento-de/${software.slug}`,
    keywords: [
      ...software.palavrasChave,
      `desenvolvimento de ${software.nome.toLowerCase()}`,
      `${software.nome.toLowerCase()} personalizado`,
    ],
  });
}

export default async function DesenvolvimentoDeTipoPage({ params }: { params: Promise<Params> }) {
  const { tipo } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) notFound();

  const cidadesDestaque = [...cidades].sort((a, b) => b.populacao - a.populacao).slice(0, 16);

  const preco = software.categoria === "mobile" ? PRICES.appMobile
    : software.categoria === "ia" || software.categoria === "automacao" ? PRICES.automacao
    : PRICES.sistemaWeb;

  const faqs = [
    {
      question: `Quanto custa o desenvolvimento de ${software.nome.toLowerCase()}?`,
      answer: `O desenvolvimento de ${software.nome.toLowerCase()} parte de ${preco}. O valor final depende das funcionalidades e integrações necessárias. Oferecemos diagnóstico e orçamento gratuito sem compromisso.`,
    },
    {
      question: `Qual o prazo para desenvolver ${software.nome.toLowerCase()}?`,
      answer: `Depende da complexidade. Soluções simples de automação: 5 a 15 dias. Sistemas web completos: 30 a 90 dias. Apps mobile: 60 a 120 dias. Trabalhamos com entregas incrementais.`,
    },
    {
      question: `Vocês entregam o código-fonte?`,
      answer: `Sim. O código-fonte é seu desde o primeiro dia. Você recebe o repositório completo, documentação técnica e 3 meses de suporte incluso.`,
    },
    {
      question: `${software.nome} integra com outros sistemas?`,
      answer: `Sim. Integramos com qualquer sistema via API: WhatsApp, ERPs, CRMs, marketplaces, gateways de pagamento, sistemas fiscais e qualquer ferramenta que você já use.`,
    },
    {
      question: `A solução escala conforme meu negócio cresce?`,
      answer: `Sim. Desenvolvemos com arquitetura pensada para escala. Seu sistema começa pequeno e suporta o crescimento sem precisar de refatoração completa.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de desenvolvimento de ${software.nome.toLowerCase()}. Pode me passar um orçamento?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Desenvolvimento de ${software.nome}`, description: software.descricao, price: preco.replace(/\D/g, "") || "2997", slug: `desenvolvimento-de/${software.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Desenvolvimento de ${software.nome}`, url: `${SITE_URL}/desenvolvimento-de/${software.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Desenvolvimento de ${software.nome} Sob Medida`}
        subtitulo={`${software.descricao} Código-fonte entregue, arquitetura escalável e suporte real. ${preco}.`}
        badge={`Desenvolvimento de ${software.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-6 text-center">
            Desenvolvimento de {software.nome} por cidade
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cidadesDestaque.map((cidade) => (
              <Link
                key={cidade.slug}
                href={`/desenvolvimento-de/${software.slug}/${cidade.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {cidade.nome}
                <span className="block text-gray-400 text-xs">{cidade.estado}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre desenvolvimento de ${software.nome}`} />
    </>
  );
}
