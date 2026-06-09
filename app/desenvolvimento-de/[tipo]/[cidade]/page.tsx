import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import tiposSoftware from "@/data/tipos-software.json";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { tipo: string; cidade: string };

export async function generateStaticParams() {
  const topTipos = tiposSoftware.slice(0, 20);
  const topCidades = [...cidades].sort((a, b) => b.populacao - a.populacao).slice(0, 50);
  return topTipos.flatMap((t) =>
    topCidades.map((c) => ({ tipo: t.slug, cidade: c.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { tipo, cidade: cidadeSlug } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!software || !cidade) return {};

  return buildMetadata({
    title: `Desenvolvimento de ${software.nome} em ${cidade.nome} | Software Sob Medida`,
    description: `Desenvolvemos ${software.nome.toLowerCase()} em ${cidade.nome}. ${software.descricao} Orçamento gratuito para empresas em ${cidade.nome} e todo o Brasil.`,
    slug: `desenvolvimento-de/${software.slug}/${cidade.slug}`,
    keywords: [
      `desenvolvimento ${software.nome.toLowerCase()} ${cidade.nome}`,
      `${software.nome.toLowerCase()} em ${cidade.nome}`,
      `empresa desenvolvimento software ${cidade.nome}`,
      ...software.palavrasChave,
    ],
  });
}

export default async function DesenvolvimentoTipoCidadePage({ params }: { params: Promise<Params> }) {
  const { tipo, cidade: cidadeSlug } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!software || !cidade) notFound();

  const preco = software.categoria === "mobile" ? PRICES.appMobile
    : software.categoria === "ia" || software.categoria === "automacao" ? PRICES.automacao
    : PRICES.sistemaWeb;

  const faqs = [
    {
      question: `Vocês desenvolvem ${software.nome.toLowerCase()} em ${cidade.nome}?`,
      answer: `Sim. Atendemos ${cidade.nome} e todo o Brasil remotamente. Todo o processo — reuniões, entregas e suporte — é feito online, com a mesma qualidade de um time local.`,
    },
    {
      question: `Quanto custa o desenvolvimento de ${software.nome.toLowerCase()} em ${cidade.nome}?`,
      answer: `O valor parte de ${preco} e varia conforme a complexidade. Oferecemos orçamento personalizado e gratuito após entender seu projeto. Sem compromisso.`,
    },
    {
      question: `Qual o prazo de entrega?`,
      answer: `Soluções de automação: 5 a 15 dias. Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias. Entregas incrementais — você usa partes antes da entrega final.`,
    },
    {
      question: `O código-fonte fica comigo?`,
      answer: `Sim. Todo o código é seu. Entregamos repositório, documentação e 3 meses de suporte incluso. Sem mensalidade e sem dependência de fornecedor.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de ${software.nome.toLowerCase()} em ${cidade.nome}. Pode me passar um orçamento?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Desenvolvimento de ${software.nome} em ${cidade.nome}`, description: software.descricao, price: preco.replace(/\D/g, "") || "2997", slug: `desenvolvimento-de/${software.slug}/${cidade.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ cidade: cidade.nome, estado: cidade.estado })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Desenvolvimento de ${software.nome}`, url: `${SITE_URL}/desenvolvimento-de/${software.slug}` }, { name: cidade.nome, url: `${SITE_URL}/desenvolvimento-de/${software.slug}/${cidade.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Desenvolvimento de ${software.nome} em ${cidade.nome}`}
        subtitulo={`${software.descricao} Atendemos ${cidade.nome}, ${cidade.estado} e todo o Brasil. Código-fonte entregue, ${preco}.`}
        badge={`${software.nome} em ${cidade.nome}`}
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
                O que a BrandCode entrega em {cidade.nome}
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
                  Quero um orçamento em {cidade.nome}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre ${software.nome} em ${cidade.nome}`} />
    </>
  );
}
