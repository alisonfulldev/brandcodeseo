import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  WHATSAPP_NUMBER,
  LOGO_URL,
  PRICES,
  PRECO_INICIAL,
  PRECO_INICIAL_NUM,
  CIDADE,
  ESTADO,
  ANO_FUNDACAO,
  LINKEDIN_URL,
  EQUIPE,
} from "@/lib/constants";
import type { Projeto } from "@/lib/projetos";

// @id fixos para que todas as páginas apontem para a mesma entidade
// em vez de descrever a empresa de novo (e de forma diferente) em cada schema.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const personId = (id: string) => `${SITE_URL}/sobre#${id}`;

const ofertaServico = (name: string, description: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
  priceCurrency: "BRL",
  price: PRECO_INICIAL_NUM,
  priceSpecification: {
    "@type": "PriceSpecification",
    minPrice: Number(PRECO_INICIAL_NUM),
    priceCurrency: "BRL",
  },
  availability: "https://schema.org/InStock",
});

/** Empresa, site e equipe num único @graph — vai no layout, vale para todas as páginas. */
export function siteGraphSchema() {
  const [fundador, ...equipe] = EQUIPE;
  const pessoa = (p: (typeof EQUIPE)[number]) => ({
    "@type": "Person",
    "@id": personId(p.id),
    name: p.nome,
    jobTitle: p.cargo,
    description: p.bio,
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/sobre#${p.id}`,
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: LOGO_URL },
        image: LOGO_URL,
        description: SITE_DESCRIPTION,
        foundingDate: ANO_FUNDACAO,
        foundingLocation: { "@type": "Place", name: `${CIDADE}, ${ESTADO}, Brasil` },
        founder: { "@id": personId(fundador.id) },
        employee: equipe.map((p) => ({ "@id": personId(p.id) })),
        telephone: `+${WHATSAPP_NUMBER}`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${WHATSAPP_NUMBER}`,
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: CIDADE,
          addressRegion: ESTADO,
          addressCountry: "BR",
        },
        areaServed: { "@type": "Country", name: "Brasil" },
        priceRange: `A partir de ${PRECO_INICIAL}`,
        currenciesAccepted: "BRL",
        paymentAccepted: "PIX, Cartão de Crédito, Boleto Bancário",
        knowsAbout: [
          "Desenvolvimento de software sob medida",
          "Sistemas web e ERP",
          "Aplicativos mobile",
          "Chatbots de WhatsApp com IA",
          "Automação de processos",
          "Inteligência artificial para empresas",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Desenvolvimento de Software",
          itemListElement: [
            ofertaServico("Sistema Web e ERP Sob Medida", "Desenvolvimento de sistemas web, ERPs e CRMs personalizados para empresas"),
            ofertaServico("App Mobile iOS e Android", "Aplicativos mobile nativos e híbridos para iOS e Android"),
            ofertaServico("Automação com IA e Chatbot WhatsApp", "Chatbots com IA, automação de atendimento e processos empresariais"),
          ],
        },
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "pt-BR",
        publisher: { "@id": ORG_ID },
      },
      ...EQUIPE.map(pessoa),
    ],
  };
}

export function serviceSchema({
  name,
  description,
  price,
  slug,
}: {
  name: string;
  description: string;
  price: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    url: `${SITE_URL}/${slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: price.replace(/\D/g, ""),
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: price.replace(/\D/g, ""),
        priceCurrency: "BRL",
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": ORG_ID },
    },
  };
}

export function localBusinessSchema({
  cidade,
  estado,
}: {
  cidade: string;
  estado: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} — Desenvolvimento de Software em ${cidade}`,
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cidade,
      addressRegion: estado,
      addressCountry: "BR",
    },
    description: `Software house com desenvolvimento de sistemas, apps mobile e automações em ${cidade}, ${estado}. Software sob medida para empresas de todos os segmentos.`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "PIX, Cartão de Crédito, Boleto",
    areaServed: cidade,
  };
}

export function projetosSchema(projetos: Projeto[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Produtos desenvolvidos pela ${SITE_NAME}`,
    itemListElement: projetos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.nome,
        description: p.descricao,
        applicationCategory: p.categoria,
        operatingSystem: "Web",
        ...(p.url && { url: p.url }),
        creator: { "@id": ORG_ID },
      },
    })),
  };
}

/** Membro da equipe vira referência à Person do @graph; outro nome cai na organização. */
export function membroEquipe(nome: string) {
  return EQUIPE.find((p) => p.nome === nome);
}

function autorRef(nome: string) {
  const membro = membroEquipe(nome);
  return membro ? { "@id": personId(membro.id) } : { "@id": ORG_ID };
}

export function articleSchema({
  titulo,
  descricao,
  slug,
  autor,
  publicadoEm,
  atualizadoEm,
}: {
  titulo: string;
  descricao: string;
  slug: string;
  autor: string;
  publicadoEm: string;
  atualizadoEm: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: titulo,
    description: descricao,
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    datePublished: publicadoEm,
    dateModified: atualizadoEm,
    inLanguage: "pt-BR",
    author: autorRef(autor),
    publisher: { "@id": ORG_ID },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const defaultFaqs = [
  {
    question: "Quanto custa desenvolver um software sob medida?",
    answer: `Na BrandCode Solutions, automações e chatbots com IA partem de ${PRICES.automacao}, sistemas web e ERPs partem de ${PRICES.sistemaWeb} e apps mobile partem de ${PRICES.appMobile}. Orçamento personalizado após entender seu projeto.`,
  },
  {
    question: "Qual o prazo de entrega de um sistema?",
    answer:
      "Automações simples: 5 a 15 dias. Sistemas web: 30 a 90 dias. Apps mobile: 60 a 120 dias. Trabalhamos com entregas incrementais para que você já veja valor antes da entrega final.",
  },
  {
    question: "Vocês entregam o código-fonte?",
    answer:
      "Sim. Todo o código-fonte é seu. Você recebe o repositório completo e documentação técnica. Sem dependência de fornecedor.",
  },
  {
    question: "Posso integrar com os sistemas que já uso?",
    answer:
      "Sim. Integramos com qualquer sistema via API: ERPs, CRMs, WhatsApp, marketplaces, gateways de pagamento, sistemas fiscais e muito mais.",
  },
  {
    question: "A BrandCode atende qual tipo de empresa?",
    answer:
      "Atendemos empresas de todos os portes: restaurantes, clínicas, academias, indústrias, fintechs, startups SaaS, e-commerces e qualquer negócio que precise automatizar ou digitalizar processos.",
  },
];
