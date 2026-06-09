import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import cidades from "@/data/cidades.json";
import nichos from "@/data/nichos.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";

type Params = { cidade: string };

export async function generateStaticParams() {
  return cidades.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { cidade: cidadeSlug } = await params;
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!cidade) return {};

  return buildMetadata({
    title: `Desenvolvimento de Software em ${cidade.nome} | Sistemas e Apps`,
    description: `Software house em ${cidade.nome}. Desenvolvemos sistemas web, apps mobile, chatbots com IA e automações sob medida para empresas em ${cidade.nome} e todo o Brasil.`,
    slug: `desenvolvimento-de-software-em/${cidade.slug}`,
    keywords: [
      `desenvolvimento de software em ${cidade.nome}`,
      `software house ${cidade.nome}`,
      `empresa de software ${cidade.nome}`,
      `desenvolvimento de sistemas ${cidade.nome}`,
      `app mobile ${cidade.nome}`,
    ],
  });
}

export default async function DesenvolvimentoSoftwareCidadePage({ params }: { params: Promise<Params> }) {
  const { cidade: cidadeSlug } = await params;
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!cidade) notFound();

  const nichosDestaque = nichos.slice(0, 12);

  const servicos = [
    { nome: "Sistemas Web e ERP", preco: PRICES.sistemaWeb, desc: "Sistemas de gestão, ERPs e CRMs personalizados." },
    { nome: "App Mobile iOS e Android", preco: PRICES.appMobile, desc: "Aplicativos nativos e híbridos sob medida." },
    { nome: "Chatbot e IA", preco: PRICES.automacao, desc: "Chatbots com IA para WhatsApp e atendimento automático." },
    { nome: "Automação de Processos", preco: PRICES.automacao, desc: "RPA, N8N e integrações entre sistemas." },
  ];

  const faqs = [
    {
      question: `A BrandCode atende empresas em ${cidade.nome}?`,
      answer: `Sim. Atendemos empresas em ${cidade.nome}, ${cidade.estado} e todo o Brasil remotamente. Todo o processo — briefing, desenvolvimento, entregas e suporte — é feito online com a mesma qualidade de um time local.`,
    },
    {
      question: `Qual tipo de software vocês desenvolvem para empresas em ${cidade.nome}?`,
      answer: `Desenvolvemos sistemas web, ERPs, CRMs, apps mobile iOS e Android, chatbots com IA, automações de processos, integrações entre sistemas e plataformas SaaS. Qualquer empresa em ${cidade.nome} que precise de tecnologia sob medida.`,
    },
    {
      question: `Qual o investimento para uma empresa em ${cidade.nome}?`,
      answer: `Automações e chatbots partem de ${PRICES.automacao}. Sistemas web partem de ${PRICES.sistemaWeb}. Apps mobile partem de ${PRICES.appMobile}. Diagnóstico gratuito antes da proposta.`,
    },
    {
      question: `Como funciona o processo para uma empresa em ${cidade.nome}?`,
      answer: `Reunião de diagnóstico por videoconferência (gratuita), levantamento de requisitos, proposta com escopo e prazo, desenvolvimento com sprints semanais, entregas incrementais e suporte pós-entrega. 100% remoto.`,
    },
  ];

  const whatsappMsg = `Olá! Sou de ${cidade.nome} e preciso de desenvolvimento de software. Pode me ajudar?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Desenvolvimento de Software em ${cidade.nome}`, description: `Software house para empresas em ${cidade.nome}`, price: "2997", slug: `desenvolvimento-de-software-em/${cidade.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ cidade: cidade.nome, estado: cidade.estado })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Software em ${cidade.nome}`, url: `${SITE_URL}/desenvolvimento-de-software-em/${cidade.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Desenvolvimento de Software em ${cidade.nome}`}
        subtitulo={`Software house para empresas em ${cidade.nome}, ${cidade.estado}. Sistemas web, apps mobile, chatbots com IA e automações sob medida. Código-fonte entregue.`}
        badge={`Software em ${cidade.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-10 text-center">
            O que desenvolvemos para empresas em {cidade.nome}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {servicos.map((s) => (
              <div key={s.nome} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#0A1628] mb-1">{s.nome}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{s.preco}</p>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-[#0A1628] mb-6 text-center">
            Sistemas por segmento em {cidade.nome}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {nichosDestaque.map((nicho) => (
              <Link
                key={nicho.slug}
                href={`/software-para/${nicho.slug}/${cidade.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {nicho.nome}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero desenvolver software em {cidade.nome}
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre desenvolvimento de software em ${cidade.nome}`} />
    </>
  );
}
