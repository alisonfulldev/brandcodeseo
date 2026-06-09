import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import nichos from "@/data/nichos.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { segmento: string };

export async function generateStaticParams() {
  return nichos.map((n) => ({ segmento: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) return {};

  return buildMetadata({
    title: `IA para ${nicho.nome} | Inteligência Artificial Personalizada`,
    description: `Implementamos inteligência artificial para ${nicho.nome.toLowerCase()}: chatbots, automação de atendimento, análise de dados e agentes autônomos. ${PRICES.ia}.`,
    slug: `ia-para/${nicho.slug}`,
    keywords: [
      `ia para ${nicho.nome.toLowerCase()}`,
      `inteligência artificial ${nicho.nome.toLowerCase()}`,
      `chatbot ia ${nicho.nome.toLowerCase()}`,
      `automação ia ${nicho.nome.toLowerCase()}`,
    ],
  });
}

export default async function IaParaSegmentoPage({ params }: { params: Promise<Params> }) {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) notFound();

  const aplicacoes = [
    { titulo: "Chatbot com IA no WhatsApp", desc: `Atendimento automático 24h para clientes de ${nicho.nome.toLowerCase()}. Responde dúvidas, qualifica leads e agenda sem humano.` },
    { titulo: "Agente IA para processos internos", desc: `Automatiza tarefas repetitivas específicas de ${nicho.nome.toLowerCase()}: relatórios, análise de dados e tomadas de decisão.` },
    { titulo: "Base de conhecimento inteligente", desc: `IA treinada com seus documentos, protocolos e FAQs. Responde com precisão baseada no conteúdo da sua empresa.` },
    { titulo: "Análise e previsão com IA", desc: `Análise de dados do seu negócio com IA para identificar padrões, prever demanda e apoiar decisões estratégicas.` },
  ];

  const faqs = [
    {
      question: `Como a IA pode ajudar ${nicho.nome.toLowerCase()}?`,
      answer: `A IA pode automatizar atendimento no WhatsApp, qualificar leads automaticamente, analisar dados do negócio, gerar relatórios inteligentes e criar agentes autônomos que executam tarefas complexas sem intervenção humana.`,
    },
    {
      question: `Qual o investimento para implementar IA em ${nicho.nome.toLowerCase()}?`,
      answer: `Soluções de IA partem de ${PRICES.ia}. O valor varia conforme a complexidade: chatbot simples, agente autônomo completo ou IA com base de conhecimento proprietária. Diagnóstico gratuito antes da proposta.`,
    },
    {
      question: `A IA vai responder com informações erradas para meus clientes?`,
      answer: `Não, se configurada corretamente. Usamos técnicas como RAG (base de conhecimento) para que a IA responda apenas com base no conteúdo que você aprova. Além disso, o sistema faz transferência para humano quando necessário.`,
    },
    {
      question: `Quanto tempo leva para implementar IA para ${nicho.nome.toLowerCase()}?`,
      answer: `Chatbots simples: 7 a 15 dias. Agentes complexos com RAG e integrações: 30 a 60 dias. Tudo depende da complexidade das integrações e do volume de conteúdo para treinar.`,
    },
  ];

  const whatsappMsg = `Olá! Quero implementar IA na minha empresa de ${nicho.nome.toLowerCase()}. Pode me ajudar?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `IA para ${nicho.nome}`, description: `Inteligência artificial personalizada para ${nicho.nomeCompleto}`, price: "1997", slug: `ia-para/${nicho.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `IA para ${nicho.nome}`, url: `${SITE_URL}/ia-para/${nicho.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Inteligência Artificial para ${nicho.nome}`}
        subtitulo={`Chatbots com IA, agentes autônomos e automações inteligentes para ${nicho.nomeCompleto}. Atendimento 24h, análise de dados e decisões automáticas. ${PRICES.ia}.`}
        badge={`IA para ${nicho.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/ia-para-negocios"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-10 text-center">
            Aplicações de IA para {nicho.nome.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {aplicacoes.map((a) => (
              <div key={a.titulo} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#0A1628] mb-2">{a.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero IA para meu negócio de {nicho.nome.toLowerCase()}
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre IA para ${nicho.nome}`} />
    </>
  );
}
