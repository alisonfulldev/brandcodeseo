import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import tiposSoftware from "@/data/tipos-software.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { tipo: string };

export async function generateStaticParams() {
  return tiposSoftware.map((t) => ({ tipo: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { tipo } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) return {};

  return buildMetadata({
    title: `Quanto Custa ${software.nome}? | Preços Reais`,
    description: `Descubra quanto custa desenvolver ${software.nome.toLowerCase()} sob medida. Valores reais, sem enrolação. ${software.descricao}`,
    slug: `quanto-custa/${software.slug}`,
    keywords: [
      `quanto custa ${software.nome.toLowerCase()}`,
      `preço ${software.nome.toLowerCase()}`,
      `valor ${software.nome.toLowerCase()}`,
      `custo desenvolvimento ${software.nome.toLowerCase()}`,
    ],
  });
}

export default async function QuantoCustaTipoPage({ params }: { params: Promise<Params> }) {
  const { tipo } = await params;
  const software = tiposSoftware.find((t) => t.slug === tipo);
  if (!software) notFound();

  const preco = software.categoria === "mobile" ? PRICES.appMobile
    : software.categoria === "ia" || software.categoria === "automacao" ? PRICES.automacao
    : PRICES.sistemaWeb;

  const faixas = software.categoria === "mobile"
    ? [
        { label: "App simples (MVP)", valor: "R$ 4.997 – R$ 9.997", desc: "Funcionalidades essenciais, 1 plataforma (Android ou iOS), login, telas básicas." },
        { label: "App completo", valor: "R$ 10.000 – R$ 25.000", desc: "iOS + Android, integrações, notificações push, painel web de administração." },
        { label: "App enterprise", valor: "R$ 25.000+", desc: "Funcionalidades avançadas, múltiplos perfis, BI integrado, alta escalabilidade." },
      ]
    : software.categoria === "ia" || software.categoria === "automacao"
    ? [
        { label: "Automação simples", valor: "R$ 997 – R$ 2.997", desc: "Fluxo único de automação, integração entre 2-3 ferramentas, sem IA generativa." },
        { label: "Automação com IA", valor: "R$ 2.997 – R$ 7.997", desc: "Chatbot com IA, base de conhecimento, integração CRM e múltiplos fluxos." },
        { label: "Agente IA complexo", valor: "R$ 7.997+", desc: "Agente autônomo, múltiplas integrações, RAG customizado, treinamento contínuo." },
      ]
    : [
        { label: "Sistema essencial", valor: "R$ 2.997 – R$ 7.997", desc: "Módulo principal, CRUD completo, painel admin, até 3 integrações." },
        { label: "Sistema completo", valor: "R$ 8.000 – R$ 20.000", desc: "Múltiplos módulos, relatórios avançados, integrações complexas, API própria." },
        { label: "Sistema enterprise", valor: "R$ 20.000+", desc: "ERP/plataforma completa, multi-tenant, BI integrado, alta disponibilidade." },
      ];

  const fatores = [
    "Quantidade de módulos e funcionalidades",
    "Número de integrações com sistemas externos",
    "Complexidade das regras de negócio",
    "Volume de usuários e escalabilidade necessária",
    "Necessidade de app mobile além do sistema web",
    "Prazo de entrega (urgência aumenta o valor)",
  ];

  const faqs = [
    {
      question: `Qual o valor mínimo para desenvolver ${software.nome.toLowerCase()}?`,
      answer: `O valor mínimo para ${software.nome.toLowerCase()} parte de ${preco}. Esse é o ponto de entrada para uma solução funcional. Projetos mais complexos com múltiplas integrações e módulos avançados têm valores maiores — por isso fazemos um diagnóstico gratuito antes de apresentar a proposta.`,
    },
    {
      question: `O que está incluso no preço?`,
      answer: `Incluso: código-fonte completo (é seu), documentação técnica, 3 meses de suporte pós-entrega, reuniões de alinhamento durante o desenvolvimento e deploy em produção. Não cobramos mensalidade de licença.`,
    },
    {
      question: `Por que não cotar com plataforma pronta é mais barato a longo prazo?`,
      answer: `Plataformas prontas cobram mensalidade, limitam funcionalidades, não se adaptam ao seu processo exato e você fica refém do fornecedor. Com software sob medida, o investimento é único, o código é seu e o sistema faz exatamente o que seu negócio precisa.`,
    },
    {
      question: `Como recebo um orçamento real para o meu projeto?`,
      answer: `Fale pelo WhatsApp. Em 10 minutos de conversa entendemos seu projeto e apresentamos uma proposta personalizada com escopo, prazo e valor. Sem compromisso.`,
    },
  ];

  const whatsappMsg = `Olá! Quero saber o preço para desenvolver ${software.nome.toLowerCase()}. Pode me ajudar?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Quanto Custa ${software.nome}`, url: `${SITE_URL}/quanto-custa/${software.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Quanto Custa Desenvolver ${software.nome}?`}
        subtitulo={`Preços reais e transparentes. Veja as faixas de valor para ${software.nome.toLowerCase()} sob medida e entenda o que está incluso em cada faixa.`}
        badge={`Preços de ${software.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/software-sob-medida"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3 text-center">
            Faixas de preço para {software.nome.toLowerCase()}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Os valores variam conforme complexidade, módulos e integrações necessárias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {faixas.map((f, i) => (
              <div
                key={f.label}
                className={`rounded-2xl p-6 border ${i === 1 ? "border-blue-500 shadow-lg shadow-blue-100" : "border-gray-200"}`}
              >
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">{f.label}</p>
                <p className="text-2xl font-extrabold text-[#0A1628] mb-3">{f.valor}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-[#0A1628] mb-4">
            O que influencia o preço?
          </h2>
          <ul className="space-y-2 mb-10">
            {fatores.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="text-blue-500 mt-0.5">→</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#0A1628] mb-3">
              Quer um valor exato para o seu projeto?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Diagnóstico gratuito em 10 minutos. Saiba o preço real antes de decidir.
            </p>
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero saber o preço do meu projeto
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre preço de ${software.nome}`} />
    </>
  );
}
