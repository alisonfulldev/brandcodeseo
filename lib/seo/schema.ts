import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  WHATSAPP_NUMBER,
  LOGO_URL,
  PRICES,
} from "@/lib/constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: SITE_DESCRIPTION,
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
      addressCountry: "BR",
      addressRegion: "SP",
    },
    sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
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
