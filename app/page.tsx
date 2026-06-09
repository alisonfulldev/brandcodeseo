import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES, WHATSAPP_LINK } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import Precos from "@/components/sections/Precos";
import FAQ from "@/components/sections/FAQ";
import CidadesGrid from "@/components/sections/CidadesGrid";
import NichosGrid from "@/components/sections/NichosGrid";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Software House | Sistemas, Apps, Automações e IA Sob Medida",
  description:
    "Desenvolvemos sistemas web, apps mobile, chatbots com IA e automações para empresas que querem crescer com tecnologia. Software 100% sob medida, entrega ágil e suporte real.",
  keywords: [
    "software house",
    "desenvolvimento de software",
    "sistema sob medida",
    "app mobile",
    "chatbot com ia",
    "automação de processos",
    "erp personalizado",
    "crm sob medida",
    "automação whatsapp",
    "inteligência artificial para empresas",
  ],
});

const homeFaqs = [
  {
    question: "Quanto custa desenvolver um software sob medida?",
    answer: `Os valores variam conforme a complexidade. Automações e chatbots com IA partem de ${PRICES.automacao}. Sistemas web e ERPs partem de ${PRICES.sistemaWeb}. Apps mobile partem de ${PRICES.appMobile}. Todos com orçamento personalizado após entender seu projeto. Fale pelo WhatsApp para receber uma proposta.`,
  },
  {
    question: "Qual o prazo de entrega de um sistema?",
    answer:
      "Automações e integrações simples: 5 a 15 dias úteis. Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias. O prazo é definido em contrato após levantamento de requisitos. Trabalhamos com entregas incrementais para que você já veja valor antes da entrega final.",
  },
  {
    question: "Vocês entregam o código-fonte?",
    answer:
      "Sim. Todo o código-fonte é seu. Você recebe o repositório completo, documentação técnica e pode contratar outro desenvolvedor no futuro se quiser. Não criamos dependência.",
  },
  {
    question: "Posso integrar com os sistemas que já uso?",
    answer:
      "Sim. Integramos com praticamente qualquer sistema via API: ERPs, CRMs, WhatsApp Business API, marketplaces, gateways de pagamento, sistemas fiscais, planilhas e muito mais. Se tem API, a gente conecta.",
  },
  {
    question: "Vocês desenvolvem chatbot com IA para WhatsApp?",
    answer:
      "Sim. Desenvolvemos chatbots com IA (GPT/Claude) integrados ao WhatsApp com fluxos personalizados, transferência para humano, integração com CRM e base de conhecimento da sua empresa. O bot responde com base no seu conteúdo, não com respostas genéricas.",
  },
  {
    question: "O que é automação de processos com N8N?",
    answer:
      "N8N é uma plataforma de automação que conecta ferramentas e automatiza processos sem código manual. Usamos N8N para criar fluxos como: novo lead no CRM → enviar WhatsApp → criar tarefa no Trello → notificar no Slack. Qualquer processo repetitivo pode ser automatizado.",
  },
  {
    question: "Como funciona o suporte após a entrega?",
    answer:
      "Suporte direto pelo WhatsApp com quem desenvolveu o seu sistema. Sem ticket, sem atendimento terceirizado. Todos os projetos incluem 3 meses de suporte pós-entrega. Oferecemos também planos de manutenção e evolução contínua mensais.",
  },
  {
    question: "A BrandCode atende qual tipo de empresa?",
    answer:
      "Atendemos empresas de todos os portes que precisam de tecnologia sob medida: restaurantes que querem delivery próprio, clínicas que precisam de sistema de agendamento, indústrias que querem ERP personalizado, fintechs, startups SaaS, e-commerces e qualquer negócio que precise automatizar ou digitalizar processos.",
  },
];

const IconCode = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);
const IconMobile = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
  </svg>
);
const IconBot = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);
const IconGear = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3M15.75 4.505l-.75 1.3M5.507 4.507l1.149.964m11.49 9.642l1.149.964M13.5 20.507l-.75-1.301M10.5 3.493l.75 1.301" />
  </svg>
);
const IconAPI = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);
const IconWA = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const SectionAccent = () => (
  <div style={{ width: 40, height: 3, background: "#3B82F6", borderRadius: 2, margin: "12px auto 0" }} />
);

const painPoints = [
  { texto: '"Estou perdendo tempo com planilhas e processos manuais que poderiam ser automáticos."' },
  { texto: '"Meu concorrente já tem app e sistema próprio. Eu ainda dependo de ferramentas genéricas."' },
  { texto: '"Pago caro por plataformas prontas que não fazem tudo que eu preciso."' },
  { texto: '"Minha equipe gasta horas respondendo as mesmas perguntas no WhatsApp todo dia."' },
  { texto: '"Não tenho visibilidade do meu negócio — sem relatórios, sem dados, sem controle real."' },
  { texto: '"Quero lançar um produto digital mas não sei por onde começar e com quem confiar."' },
];

const servicos = [
  {
    href: "/software-sob-medida",
    titulo: "Sistema Web e ERP",
    preco: PRICES.sistemaWeb,
    desc: "Sistemas de gestão, ERPs, CRMs e plataformas web 100% personalizadas. Seu processo, sua regra, seu sistema.",
    icon: <IconCode />,
    destaque: false,
  },
  {
    href: "/desenvolvimento-de-app-mobile",
    titulo: "App Mobile",
    preco: PRICES.appMobile,
    desc: "Aplicativos iOS e Android sob medida. Do app de gestão interno ao produto digital voltado ao consumidor final.",
    icon: <IconMobile />,
    destaque: true,
  },
  {
    href: "/chatbot-whatsapp",
    titulo: "Chatbot e IA",
    preco: PRICES.automacao,
    desc: "Chatbot com IA para WhatsApp, atendimento automatizado 24h e agentes inteligentes que resolvem sem humano.",
    icon: <IconBot />,
    destaque: false,
  },
  {
    href: "/automacao-de-processos",
    titulo: "Automação",
    preco: PRICES.automacao,
    desc: "Elimine processos manuais com N8N, RPA e integrações. Conectamos qualquer ferramenta que você já usa.",
    icon: <IconGear />,
    destaque: false,
  },
  {
    href: "/api-e-integracoes",
    titulo: "APIs e Integrações",
    preco: PRICES.automacao,
    desc: "Conectamos seus sistemas, ERPs, marketplaces e ferramentas com APIs robustas. Zero importação manual.",
    icon: <IconAPI />,
    destaque: false,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }])),
        }}
      />

      <Hero
        titulo="Seu negócio precisa de software. A gente constrói."
        subtitulo="Desenvolvemos sistemas web, apps mobile, chatbots com IA e automações sob medida para empresas que querem crescer com tecnologia de verdade."
        whatsappMsg="Olá! Vim pelo site e quero um orçamento para desenvolvimento de software."
        ctaHref="/software-sob-medida"
        badge="⚡ Software 100% Sob Medida"
        highlight="software"
      />

      {/* Prova social */}
      <section className="py-16" style={{ background: "#0D1526" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { valor: "+80", label: "Sistemas entregues com sucesso" },
              { valor: "100%", label: "Código-fonte entregue ao cliente" },
              { valor: "4.9★", label: "Avaliação média dos nossos clientes" },
            ].map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 100}
                className={i === 1 ? "md:border-x py-6" : "py-6"}
              >
                <div
                  className="font-extrabold"
                  style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
                >
                  {item.valor}
                </div>
                <div className="mt-1 text-sm" style={{ color: "#CBD5E1" }}>
                  {item.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Dor */}
      <section className="py-20" style={{ background: "#0A0F1E" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Reconhece alguma dessas situações?
            </h2>
            <SectionAccent />
            <p className="mt-5 max-w-2xl mx-auto" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              São os problemas mais comuns que resolvemos para nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="dark-card flex items-start gap-4 p-5 h-full">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{ background: "#3B82F6" }}
                  />
                  <p className="text-sm italic" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
                    {item.texto}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: "#94A3B8" }}>
            Se identificou com pelo menos uma — você está no lugar certo.
          </p>
        </div>
      </section>

      {/* Como resolvemos */}
      <section className="py-20" style={{ background: "#0D1526" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Como a BrandCode resolve isso
            </h2>
            <SectionAccent />
            <p className="mt-5 max-w-2xl mx-auto" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              Não vendemos tecnologia pela tecnologia. Resolvemos o problema real do seu negócio com o software certo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                numero: "01",
                titulo: "Levantamento do problema real",
                desc: "Antes de escrever uma linha de código, entendemos seu processo, suas dores e o que precisa ser automatizado ou construído. O diagnóstico é gratuito.",
              },
              {
                numero: "02",
                titulo: "Desenvolvimento ágil com entregas visíveis",
                desc: "Trabalhamos em sprints curtos. Você acompanha o progresso em tempo real e já usa partes do sistema antes da entrega final.",
              },
              {
                numero: "03",
                titulo: "Entrega, suporte e evolução contínua",
                desc: "Código-fonte entregue, documentação completa, 3 meses de suporte incluso e possibilidade de continuar evoluindo o sistema com a gente.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.numero} delay={i * 100}>
                <div className="dark-card p-7 h-full">
                  <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#3B82F6" }}>
                    {item.numero}
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: "#F8FAFC" }}>
                    {item.titulo}
                  </h3>
                  <p className="text-sm" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Diferenciais />

      {/* Serviços */}
      <section className="py-20" style={{ background: "#0D1526" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              O que desenvolvemos
            </h2>
            <SectionAccent />
            <p className="mt-5 max-w-xl mx-auto" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              Do chatbot de IA ao ERP completo — entregamos o software que seu negócio precisa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <AnimatedSection key={s.href} delay={i * 100}>
                <Link
                  href={s.href}
                  className={`relative flex flex-col p-7 h-full ${s.destaque ? "service-card-featured" : "service-card"}`}
                >
                  {s.destaque && (
                    <span
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#3B82F6", color: "#fff" }}
                    >
                      Mais contratado
                    </span>
                  )}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "#F8FAFC" }}>
                    {s.titulo}
                  </h3>
                  <p className="text-sm mb-4 flex-1" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
                    {s.desc}
                  </p>
                  <span className="text-sm font-bold" style={{ color: "#3B82F6" }}>
                    {s.preco} →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Precos />

      <NichosGrid />

      <CidadesGrid
        prefixo="desenvolvimento-de-software-em"
        titulo="Desenvolvimento de Software por Cidade"
      />

      <FAQ items={homeFaqs} title="Perguntas Frequentes" />

      {/* CTA Final */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          background: "#0A0F1E",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
          style={{ background: "#3B82F6", filter: "blur(80px)", opacity: 0.1 }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
            >
              Chega de processo manual. Vamos automatizar.
            </h2>
            <p className="mb-3 text-lg" style={{ lineHeight: 1.75, color: "#CBD5E1" }}>
              Fale agora pelo WhatsApp e receba um diagnóstico gratuito em minutos.
            </p>
            <p className="text-sm mb-10" style={{ color: "#94A3B8" }}>
              Sem compromisso. Sem enrolação. Só resultado.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-wa font-bold text-lg transition-all duration-200 active:scale-95"
              style={{ background: "#25D366", color: "#fff", borderRadius: "8px", padding: "14px 32px" }}
            >
              <IconWA />
              Quero um diagnóstico gratuito
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs" style={{ color: "#94A3B8" }}>
              {["Resposta em até 1h", "Diagnóstico sem compromisso", "Código-fonte seu"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span style={{ color: "#3B82F6" }}><IconCheck /></span>
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
