import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import tiposSoftware from "@/data/tipos-software.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { tipo: string };

const slugsSobMedida = [
  "erp", "crm", "sistema-de-gestao", "app-mobile", "sistema-de-agendamento",
  "chatbot-com-ia", "plataforma-ead", "e-commerce", "marketplace",
  "sistema-de-assinaturas", "dashboard-bi", "saas", "portal-do-cliente",
  "sistema-financeiro", "controle-de-estoque",
];

export async function generateStaticParams() {
  return tiposSoftware
    .filter((t) => slugsSobMedida.includes(t.slug))
    .map((t) => ({ tipo: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { tipo } = await params;
  if (!slugsSobMedida.includes(tipo)) return {};
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) return {};

  return buildMetadata({
    title: `${software.nome} Sob Medida | Desenvolvimento Personalizado`,
    description: `${software.nome} 100% personalizado para o seu negócio. ${software.descricao} Código-fonte entregue, sem mensalidade de licença.`,
    slug: `sob-medida/${software.slug}`,
    keywords: [
      `${software.nome.toLowerCase()} sob medida`,
      `${software.nome.toLowerCase()} personalizado`,
      `desenvolvimento ${software.nome.toLowerCase()} personalizado`,
      ...software.palavrasChave,
    ],
  });
}

export default async function TipoSobMedidaPage({ params }: { params: Promise<Params> }) {
  const { tipo } = await params;
  if (!slugsSobMedida.includes(tipo)) notFound();
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) notFound();

  const preco = software.categoria === "mobile" ? PRICES.appMobile
    : software.categoria === "ia" || software.categoria === "automacao" ? PRICES.automacao
    : PRICES.sistemaWeb;

  const vantagens = [
    { titulo: "100% do seu processo", desc: "Nenhuma limitação de plataforma genérica. O sistema funciona exatamente do jeito que seu negócio opera." },
    { titulo: "Código-fonte é seu", desc: "Você recebe o repositório completo. Pode evoluir com a gente ou com qualquer outro time no futuro." },
    { titulo: "Sem mensalidade de licença", desc: "Investimento único no desenvolvimento. Sem surpresas de reajuste de mensalidade no futuro." },
    { titulo: "Escala com seu crescimento", desc: "Arquitetura desenvolvida para crescer. Começa pequeno e suporta escala sem refatoração." },
  ];

  const faqs = [
    {
      question: `Por que desenvolver ${software.nome.toLowerCase()} sob medida em vez de usar plataforma pronta?`,
      answer: `Plataformas prontas cobram mensalidade, limitam funcionalidades ao que elas oferecem e você fica dependente do fornecedor. Com ${software.nome.toLowerCase()} sob medida, o sistema funciona exatamente no seu processo, o código é seu e não há mensalidade de licença.`,
    },
    {
      question: `Quanto custa ${software.nome.toLowerCase()} sob medida?`,
      answer: `O investimento parte de ${preco} dependendo das funcionalidades e integrações. Após um diagnóstico gratuito, apresentamos uma proposta com escopo, prazo e valor definitivos.`,
    },
    {
      question: `Qual o prazo para ter o ${software.nome.toLowerCase()} pronto?`,
      answer: `Varia conforme a complexidade. Trabalhamos com entregas incrementais — você começa a usar partes do sistema antes da entrega final. Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias.`,
    },
    {
      question: `O ${software.nome.toLowerCase()} sob medida vai integrar com o que já uso?`,
      answer: `Sim. Integramos com qualquer sistema via API: WhatsApp Business, ERPs, CRMs, gateways de pagamento, marketplaces e qualquer ferramenta que você já use.`,
    },
  ];

  const whatsappMsg = `Olá! Tenho interesse em ${software.nome.toLowerCase()} sob medida. Pode me passar mais detalhes?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `${software.nome} Sob Medida`, description: software.descricao, price: preco.replace(/\D/g, "") || "2997", slug: `sob-medida/${software.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `${software.nome} Sob Medida`, url: `${SITE_URL}/sob-medida/${software.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`${software.nome} Sob Medida para Sua Empresa`}
        subtitulo={`${software.descricao} Sem limitações de plataforma genérica. Código-fonte seu, sem mensalidade de licença. ${preco}.`}
        badge={`${software.nome} Sob Medida`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-10 text-center">
            Por que {software.nome.toLowerCase()} sob medida?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {vantagens.map((v) => (
              <div key={v.titulo} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#0A1628] mb-2">{v.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
            <div>
              <h2 className="text-xl font-extrabold text-[#0A1628] mb-4">
                O que uma plataforma pronta não resolve
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
              <h2 className="text-xl font-extrabold text-[#0A1628] mb-4">
                O que o {software.nome.toLowerCase()} sob medida entrega
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
                  Quero {software.nome.toLowerCase()} sob medida
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre ${software.nome} sob medida`} />
    </>
  );
}
