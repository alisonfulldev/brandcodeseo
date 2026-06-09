import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import nichos from "@/data/nichos.json";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";

type Params = { segmento: string };

export async function generateStaticParams() {
  return nichos.map((n) => ({ segmento: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) return {};

  return buildMetadata({
    title: `Sistema para ${nicho.nome} | Software de Gestão Personalizado`,
    description: `${nicho.descricao} Sistema 100% sob medida, código-fonte incluso e suporte real. Solicite um orçamento gratuito.`,
    slug: `sistema-para/${nicho.slug}`,
    keywords: [
      ...nicho.palavrasChave,
      `sistema para ${nicho.nome.toLowerCase()}`,
      `software para ${nicho.nome.toLowerCase()}`,
      `sistema de gestão ${nicho.nome.toLowerCase()}`,
    ],
  });
}

export default async function SistemaParaSegmentoPage({ params }: { params: Promise<Params> }) {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) notFound();

  const cidadesDestaque = [...cidades]
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, 16);

  const faqs = [
    {
      question: `Quanto custa desenvolver um sistema para ${nicho.nome.toLowerCase()}?`,
      answer: `Sistemas para ${nicho.nome.toLowerCase()} variam conforme a complexidade. Sistemas web partem de ${PRICES.sistemaWeb} e apps mobile de ${PRICES.appMobile}. Fale pelo WhatsApp para um orçamento personalizado sem compromisso.`,
    },
    {
      question: `O sistema para ${nicho.nome.toLowerCase()} vai atender o meu processo exato?`,
      answer: `Sim. Desenvolvemos 100% sob medida. Antes de escrever qualquer código, mapeamos o seu processo atual, suas dores e o que precisa ser automatizado. O sistema entregue reflete exatamente o jeito que seu negócio funciona.`,
    },
    {
      question: `Qual é o prazo de entrega?`,
      answer: `Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias. Trabalhamos com sprints curtos e entregas incrementais — você usa partes do sistema antes da entrega final.`,
    },
    {
      question: `Recebo o código-fonte do sistema?`,
      answer: `Sim. O código-fonte é seu. Entregamos o repositório completo, documentação técnica e 3 meses de suporte incluso. Sem dependência de fornecedor.`,
    },
    {
      question: `O sistema integra com outros sistemas que já uso?`,
      answer: `Sim. Integramos com qualquer ferramenta via API: WhatsApp Business, gateways de pagamento, ERPs existentes, marketplaces, sistemas fiscais e muito mais.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de um sistema para ${nicho.nome.toLowerCase()}. Pode me passar um orçamento?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Sistema para ${nicho.nome}`, description: nicho.descricao, price: "2997", slug: `sistema-para/${nicho.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Sistema para ${nicho.nome}`, url: `${SITE_URL}/sistema-para/${nicho.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Sistema para ${nicho.nome} — 100% Personalizado`}
        subtitulo={`${nicho.descricao} Software sob medida que resolve o seu processo real. Código-fonte entregue, suporte incluso e sem dependência de fornecedor.`}
        badge={`Sistema para ${nicho.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-6 text-center">
            Sistema para {nicho.nome} por cidade
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cidadesDestaque.map((cidade) => (
              <Link
                key={cidade.slug}
                href={`/software-para/${nicho.slug}/${cidade.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {cidade.nome}
                <span className="block text-gray-400 text-xs">{cidade.estado}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre sistema para ${nicho.nome}`} />
    </>
  );
}
