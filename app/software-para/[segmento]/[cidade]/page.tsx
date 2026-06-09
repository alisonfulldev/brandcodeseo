import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import nichos from "@/data/nichos.json";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { segmento: string; cidade: string };

export async function generateStaticParams() {
  const topNichos = nichos.slice(0, 20);
  const topCidades = [...cidades].sort((a, b) => b.populacao - a.populacao).slice(0, 50);
  return topNichos.flatMap((n) =>
    topCidades.map((c) => ({ segmento: n.slug, cidade: c.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { segmento, cidade: cidadeSlug } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!nicho || !cidade) return {};

  return buildMetadata({
    title: `Software para ${nicho.nome} em ${cidade.nome} | Sistema Sob Medida`,
    description: `Desenvolvemos software e sistemas para ${nicho.nome.toLowerCase()} em ${cidade.nome}. ${nicho.descricao} Orçamento gratuito.`,
    slug: `software-para/${nicho.slug}/${cidade.slug}`,
    keywords: [
      `software para ${nicho.nome.toLowerCase()} em ${cidade.nome}`,
      `sistema para ${nicho.nome.toLowerCase()} ${cidade.nome}`,
      `desenvolvimento software ${nicho.nome.toLowerCase()} ${cidade.nome}`,
      ...nicho.palavrasChave,
    ],
  });
}

export default async function SoftwarePorSegmentoECidadePage({ params }: { params: Promise<Params> }) {
  const { segmento, cidade: cidadeSlug } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!nicho || !cidade) notFound();

  const faqs = [
    {
      question: `Vocês desenvolvem software para ${nicho.nome.toLowerCase()} em ${cidade.nome}?`,
      answer: `Sim. Atendemos empresas em ${cidade.nome} e em todo o Brasil de forma remota. Desenvolvemos sistemas para ${nicho.nome.toLowerCase()} com reuniões por videoconferência e entregas totalmente online.`,
    },
    {
      question: `Quanto custa um sistema para ${nicho.nome.toLowerCase()} em ${cidade.nome}?`,
      answer: `Sistemas web partem de ${PRICES.sistemaWeb} e apps mobile de ${PRICES.appMobile}. O valor final depende das funcionalidades necessárias. Oferecemos orçamento personalizado sem compromisso.`,
    },
    {
      question: `Qual o prazo de desenvolvimento?`,
      answer: `Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias. Trabalhamos com entregas incrementais — você já usa partes do sistema antes da entrega final.`,
    },
    {
      question: `O sistema é desenvolvido por uma empresa de ${cidade.nome}?`,
      answer: `A BrandCode atende clientes em ${cidade.nome} e todo o Brasil remotamente. Nossa equipe trabalha com videoconferências, sprints ágeis e você acompanha o andamento em tempo real.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de um software para ${nicho.nome.toLowerCase()} em ${cidade.nome}. Pode me passar um orçamento?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Software para ${nicho.nome} em ${cidade.nome}`, description: nicho.descricao, price: "2997", slug: `software-para/${nicho.slug}/${cidade.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ cidade: cidade.nome, estado: cidade.estado })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Sistema para ${nicho.nome}`, url: `${SITE_URL}/sistema-para/${nicho.slug}` }, { name: cidade.nome, url: `${SITE_URL}/software-para/${nicho.slug}/${cidade.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Software para ${nicho.nome} em ${cidade.nome}`}
        subtitulo={`${nicho.descricao} Atendemos ${cidade.nome} e todo o Brasil remotamente. Sistema 100% sob medida, código-fonte entregue.`}
        badge={`${nicho.nome} em ${cidade.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                Problemas que resolvemos para {nicho.nome.toLowerCase()} em {cidade.nome}
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
                O que entregamos
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
                  Quero um orçamento em {cidade.nome}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre software para ${nicho.nome} em ${cidade.nome}`} />
    </>
  );
}
