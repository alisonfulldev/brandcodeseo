import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import tiposSoftware from "@/data/tipos-software.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { processo: string };

const processosAutomacao = tiposSoftware.filter(
  (t) => t.categoria === "automacao" || t.categoria === "integracao"
);

export async function generateStaticParams() {
  return processosAutomacao.map((t) => ({ processo: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { processo } = await params;
  const software = processosAutomacao.find((t) => t.slug === processo);
  if (!software) return {};

  return buildMetadata({
    title: `${software.nome} | Automação Empresarial`,
    description: `${software.descricao} Automatize processos, elimine retrabalho e escale seu negócio. ${PRICES.automacao}.`,
    slug: `automacao-de/${software.slug}`,
    keywords: [
      ...software.palavrasChave,
      `automação ${software.nome.toLowerCase()}`,
      `automatizar ${software.nome.toLowerCase()}`,
    ],
  });
}

export default async function AutomacaoDeProcessoPage({ params }: { params: Promise<Params> }) {
  const { processo } = await params;
  const software = processosAutomacao.find((t) => t.slug === processo);
  if (!software) notFound();

  const etapas = [
    { num: "01", titulo: "Diagnóstico do processo", desc: "Mapeamos o processo atual, identificamos gargalos e definimos o que pode e deve ser automatizado." },
    { num: "02", titulo: "Arquitetura da automação", desc: "Desenhamos o fluxo automatizado com todas as integrações necessárias entre sistemas e ferramentas." },
    { num: "03", titulo: "Desenvolvimento e testes", desc: "Desenvolvemos a automação, testamos todos os cenários e casos de erro antes de colocar em produção." },
    { num: "04", titulo: "Deploy e acompanhamento", desc: "Colocamos em produção, monitoramos o funcionamento e ajustamos conforme necessário." },
  ];

  const faqs = [
    {
      question: `O que é automação de ${software.nome.toLowerCase()}?`,
      answer: `${software.descricao} Em vez de executar esse processo manualmente, ele passa a acontecer automaticamente quando uma condição é atendida, sem intervenção humana.`,
    },
    {
      question: `Quanto custa implementar automação de ${software.nome.toLowerCase()}?`,
      answer: `Automações partem de ${PRICES.automacao}. O valor varia conforme o número de integrações e complexidade dos fluxos. Diagnóstico gratuito antes da proposta.`,
    },
    {
      question: `Qual o prazo para ter a automação funcionando?`,
      answer: `Automações simples: 5 a 15 dias. Fluxos complexos com múltiplas integrações: 20 a 45 dias. Tudo depende da quantidade de sistemas envolvidos.`,
    },
    {
      question: `Quais ferramentas vocês usam para automação?`,
      answer: `Usamos N8N (self-hosted), Make, Zapier e desenvolvimento custom com código. Para RPA, usamos ferramentas específicas. A escolha da ferramenta depende do que é mais eficiente para o seu caso.`,
    },
    {
      question: `O que acontece se a automação falhar?`,
      answer: `Desenvolvemos com tratamento de erros e alertas. Se algo falhar, você recebe uma notificação imediata e o processo pode ser executado manualmente enquanto corrigimos. Mantemos 3 meses de suporte incluso.`,
    },
  ];

  const whatsappMsg = `Olá! Quero automatizar ${software.nome.toLowerCase()} na minha empresa. Pode me ajudar?`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: software.nome, description: software.descricao, price: "997", slug: `automacao-de/${software.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: software.nome, url: `${SITE_URL}/automacao-de/${software.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo={software.nome}
        subtitulo={`${software.descricao} Elimine retrabalho, reduza erros e libere sua equipe para o que realmente importa. ${PRICES.automacao}.`}
        badge="Automação Empresarial"
        whatsappMsg={whatsappMsg}
        ctaHref="/automacao-de-processos"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                Por que automatizar agora?
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
                O que a automação entrega
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
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-8 text-center">
            Como implementamos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {etapas.map((e) => (
              <div key={e.num} className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                  {e.num}
                </div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-2">{e.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero automatizar esse processo
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre ${software.nome.toLowerCase()}`} />
    </>
  );
}
