import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Software Sob Medida para Empresas | BrandCode Solutions",
  description: `Desenvolvemos sistemas web, apps mobile, chatbots com IA e automações 100% personalizados. Código-fonte seu, sem mensalidade de licença. ${PRICES.sistemaWeb}.`,
  slug: "software-sob-medida",
  keywords: [
    "software sob medida",
    "sistema personalizado para empresa",
    "desenvolvimento de software personalizado",
    "sistema web sob medida",
    "app mobile sob medida",
    "software house brasil",
    "desenvolvimento de sistemas",
  ],
});

const whatsappMsg = "Olá! Preciso de um software sob medida para minha empresa. Podemos conversar?";

const servicos = [
  {
    slug: "sistema-de-gestao",
    titulo: "Sistemas de Gestão (ERP)",
    preco: PRICES.sistemaWeb,
    desc: "ERP, CRM e sistemas de gestão integrados com todos os módulos que o seu processo precisa. Sem limitações de plataforma genérica.",
    href: "/sob-medida/erp",
  },
  {
    slug: "app-mobile",
    titulo: "App Mobile iOS e Android",
    preco: PRICES.appMobile,
    desc: "Aplicativos nativos e híbridos para iOS e Android. Da ideia à publicação na App Store e Google Play.",
    href: "/sob-medida/app-mobile",
  },
  {
    slug: "chatbot-com-ia",
    titulo: "Chatbot com IA e Automações",
    preco: PRICES.automacao,
    desc: "Chatbots com IA para WhatsApp e site, automações de processos com N8N, Make e desenvolvimento custom.",
    href: "/sob-medida/chatbot-com-ia",
  },
  {
    slug: "saas",
    titulo: "Plataformas SaaS e Marketplaces",
    preco: PRICES.sistemaWeb,
    desc: "Produtos digitais completos: SaaS multi-tenant, marketplaces, plataformas EAD e sistemas de assinaturas.",
    href: "/sob-medida/saas",
  },
  {
    slug: "ia-para-negocios",
    titulo: "Inteligência Artificial",
    preco: PRICES.ia,
    desc: "Agentes de IA, RAG com base de conhecimento, análise de dados com IA e modelos personalizados.",
    href: "/desenvolvimento-de/ia-para-negocios",
  },
  {
    slug: "api-e-integracoes",
    titulo: "APIs e Integrações",
    preco: PRICES.sistemaWeb,
    desc: "Integramos seus sistemas existentes: ERPs, e-commerces, marketplaces e qualquer ferramenta via API.",
    href: "/desenvolvimento-de/api-e-integracoes",
  },
];

const diferenciais = [
  {
    titulo: "Código-fonte é seu",
    desc: "Você recebe o repositório completo ao final do projeto. Pode evoluir com a BrandCode ou com qualquer outro time.",
  },
  {
    titulo: "Sem mensalidade de licença",
    desc: "Investimento único no desenvolvimento. Sem surpresas de reajuste de mensalidade de software pronto no futuro.",
  },
  {
    titulo: "100% do seu processo",
    desc: "Nenhuma funcionalidade inútil, nenhum limite artificial. O sistema funciona exatamente como o seu negócio opera.",
  },
  {
    titulo: "IA integrada desde o início",
    desc: "Chatbots, automações inteligentes e análise de dados com IA já na arquitetura base do sistema.",
  },
  {
    titulo: "Entregas incrementais",
    desc: "Você começa a usar e validar partes do sistema antes da entrega final. Sem meses de espera no escuro.",
  },
  {
    titulo: "Suporte e evolução real",
    desc: "3 meses de suporte incluso. Depois, planos de evolução contínua para o sistema crescer com o negócio.",
  },
];

const processo = [
  { num: "01", titulo: "Diagnóstico gratuito", desc: "Reunião por vídeo para entender seu negócio, processo atual, gargalos e o que precisa ser construído." },
  { num: "02", titulo: "Proposta com escopo fixo", desc: "Proposta detalhada com funcionalidades, prazo e valor definidos. Sem surpresas no final." },
  { num: "03", titulo: "Desenvolvimento com sprints", desc: "Ciclos semanais de entrega. Você acompanha o progresso e valida cada etapa antes da próxima." },
  { num: "04", titulo: "Entrega e suporte", desc: "Deploy em produção, treinamento da equipe, código-fonte entregue e 3 meses de suporte inclusos." },
];

const faqs = [
  {
    question: "Qual a diferença entre software sob medida e plataforma pronta?",
    answer: `Plataformas prontas (Salesforce, SAP, Shopify etc.) cobram mensalidade, limitam você ao que elas oferecem e você nunca tem o código. Com software sob medida, o sistema funciona exatamente no seu processo, o código é seu e não há mensalidade de licença. O investimento inicial é maior, mas o custo total ao longo dos anos é menor.`,
  },
  {
    question: "Quanto custa desenvolver um software sob medida?",
    answer: `Depende do tipo e complexidade: automações e chatbots partem de ${PRICES.automacao}, sistemas web partem de ${PRICES.sistemaWeb} e apps mobile partem de ${PRICES.appMobile}. Fazemos diagnóstico gratuito e apresentamos proposta com escopo e valor fixos antes de qualquer comprometimento.`,
  },
  {
    question: "Qual o prazo para ter o software pronto?",
    answer: `Automações simples: 5 a 15 dias. Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias. Trabalhamos com entregas incrementais, então você começa a usar partes do sistema bem antes da entrega final.`,
  },
  {
    question: "Vocês desenvolvem para qual segmento?",
    answer: `Atendemos qualquer segmento: clínicas, restaurantes, construtoras, e-commerces, escolas, transportadoras, imobiliárias, indústrias, fintechs e muito mais. O software é construído para o seu processo específico, não para um setor genérico.`,
  },
  {
    question: "O software vai integrar com os sistemas que já uso?",
    answer: `Sim. Integramos com qualquer sistema via API: WhatsApp Business, ERPs, CRMs, gateways de pagamento, marketplaces (Mercado Livre, Shopee, Amazon), contabilidade, e qualquer ferramenta que possua API.`,
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: `Diagnóstico gratuito → proposta com escopo e prazo → desenvolvimento em sprints semanais (você acompanha) → entregas incrementais para validação → deploy em produção → entrega do código-fonte → 3 meses de suporte. Tudo 100% remoto com reuniões por vídeo.`,
  },
];

const segmentos = [
  { slug: "clinica", nome: "Clínica" },
  { slug: "restaurante", nome: "Restaurante" },
  { slug: "escola", nome: "Escola" },
  { slug: "construtora", nome: "Construtora" },
  { slug: "imobiliaria", nome: "Imobiliária" },
  { slug: "industria", nome: "Indústria" },
  { slug: "academia", nome: "Academia" },
  { slug: "transportadora", nome: "Transportadora" },
  { slug: "e-commerce", nome: "E-commerce" },
  { slug: "financeiro", nome: "Financeiro" },
  { slug: "contabilidade", nome: "Contabilidade" },
  { slug: "advocacia", nome: "Advocacia" },
];

export default function SoftwareSobMedidaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Software Sob Medida", description: "Desenvolvimento de sistemas, apps mobile, chatbots com IA e automações 100% personalizados para empresas.", price: "2997", slug: "software-sob-medida" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: "Software Sob Medida", url: `${SITE_URL}/software-sob-medida` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        titulo="Software Sob Medida para Sua Empresa"
        subtitulo={`Sistemas web, apps mobile, chatbots com IA e automações 100% personalizados. Código-fonte entregue, sem mensalidade de licença. ${PRICES.sistemaWeb}.`}
        badge="Software Sob Medida"
        whatsappMsg={whatsappMsg}
        ctaHref="/contato"
      />

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3 text-center">
            O que desenvolvemos
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-xl mx-auto">
            Do chatbot mais simples ao ERP mais complexo — qualquer software que seu negócio precisa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {servicos.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <h3 className="font-bold text-[#0A1628] mb-1 group-hover:text-blue-700 transition-colors">{s.titulo}</h3>
                <p className="text-blue-600 text-xs font-medium mb-2">{s.preco}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero um orçamento
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-10 text-center">
            Por que software sob medida?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2 text-sm">{d.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-10 text-center">
            Como funciona o processo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {processo.map((p) => (
              <div key={p.num} className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                  {p.num}
                </div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-2">{p.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Agendar diagnóstico gratuito
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#0A1628] mb-6 text-center">
            Software por segmento
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {segmentos.map((s) => (
              <Link
                key={s.slug}
                href={`/sistema-para/${s.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {s.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Dúvidas sobre software sob medida" />
    </>
  );
}
