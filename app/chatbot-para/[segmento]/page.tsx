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
    title: `Chatbot para ${nicho.nome} | Atendimento Automático com IA`,
    description: `Chatbot com IA para ${nicho.nome.toLowerCase()} no WhatsApp e site. Atendimento 24h, qualificação de leads e agendamento automático. ${PRICES.automacao}.`,
    slug: `chatbot-para/${nicho.slug}`,
    keywords: [
      `chatbot para ${nicho.nome.toLowerCase()}`,
      `bot whatsapp ${nicho.nome.toLowerCase()}`,
      `atendimento automático ${nicho.nome.toLowerCase()}`,
      `chatbot com ia ${nicho.nome.toLowerCase()}`,
    ],
  });
}

export default async function ChatbotParaSegmentoPage({ params }: { params: Promise<Params> }) {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) notFound();

  const funcionalidades = [
    { titulo: "Atendimento 24h no WhatsApp", desc: `Seus clientes de ${nicho.nome.toLowerCase()} recebem resposta imediata a qualquer hora, sem depender de equipe humana.` },
    { titulo: "Qualificação automática de leads", desc: "O chatbot faz perguntas estratégicas, identifica o interesse do cliente e só transfere para humano quando há real potencial." },
    { titulo: "Agendamento automático", desc: `Clientes agendam serviços, consultas ou reuniões diretamente pelo chatbot, sem ligação e sem espera.` },
    { titulo: "Base de conhecimento personalizada", desc: `Treinado com informações específicas do seu negócio de ${nicho.nome.toLowerCase()}. Responde com precisão, não com respostas genéricas.` },
    { titulo: "Transferência inteligente para humano", desc: "Quando o cliente precisa de atendimento humano, o chatbot transfere com o histórico completo da conversa." },
    { titulo: "Integração com CRM", desc: "Cada lead capturado pelo chatbot é registrado automaticamente no CRM com dados de contato e interesse." },
  ];

  const faqs = [
    {
      question: `Como um chatbot pode ajudar ${nicho.nome.toLowerCase()}?`,
      answer: `Para ${nicho.nome.toLowerCase()}, o chatbot resolve: responde dúvidas frequentes 24h, faz triagem de clientes, agenda atendimentos sem humano, envia confirmações automáticas e libera a equipe para atividades de maior valor.`,
    },
    {
      question: `Quanto custa um chatbot com IA para ${nicho.nome.toLowerCase()}?`,
      answer: `Chatbots partem de ${PRICES.automacao}. O valor varia conforme integrações, quantidade de fluxos e se usa IA generativa. Diagnóstico gratuito antes da proposta.`,
    },
    {
      question: `O chatbot funciona no WhatsApp ou só no site?`,
      answer: `Funciona nos dois. Desenvolvemos chatbots para WhatsApp Business API, site, Instagram e Telegram. O mais comum e com maior resultado é o WhatsApp.`,
    },
    {
      question: `Quanto tempo leva para o chatbot estar funcionando?`,
      answer: `Chatbots simples com fluxos básicos: 7 a 15 dias. Chatbots com IA generativa, base de conhecimento e múltiplas integrações: 20 a 45 dias.`,
    },
    {
      question: `O chatbot vai responder errado para os meus clientes?`,
      answer: `Não, se configurado corretamente. Testamos todos os fluxos antes de lançar. Para chatbots com IA, usamos base de conhecimento aprovada por você para garantir respostas precisas.`,
    },
  ];

  const whatsappMsg = `Olá! Quero um chatbot com IA para minha empresa de ${nicho.nome.toLowerCase()}. Pode me ajudar?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Chatbot com IA para ${nicho.nome}`, description: `Chatbot inteligente para atendimento automático em ${nicho.nomeCompleto}`, price: "997", slug: `chatbot-para/${nicho.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: `Chatbot para ${nicho.nome}`, url: `${SITE_URL}/chatbot-para/${nicho.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={`Chatbot com IA para ${nicho.nome}`}
        subtitulo={`Atendimento automático 24h no WhatsApp para ${nicho.nomeCompleto}. Qualifica leads, agenda e responde sem humano. Treinado com o conteúdo da sua empresa. ${PRICES.automacao}.`}
        badge={`Chatbot para ${nicho.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/chatbot-whatsapp"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-10 text-center">
            O que o chatbot faz para {nicho.nome.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {funcionalidades.map((f) => (
              <div key={f.titulo} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#0A1628] mb-2">{f.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero chatbot para meu {nicho.nome.toLowerCase()}
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre chatbot para ${nicho.nome}`} />
    </>
  );
}
