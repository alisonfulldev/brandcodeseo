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
    name: `${SITE_NAME} — Criação de Sites em ${cidade}`,
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cidade,
      addressRegion: estado,
      addressCountry: "BR",
    },
    description: `Criação de sites profissionais em ${cidade}, ${estado}. Sites institucionais, lojas virtuais e landing pages com SEO técnico avançado.`,
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
    question: "Quanto custa criar um site profissional?",
    answer: `Na BrandCode Solutions, os preços são: Site Institucional ${PRICES.institucional}, Loja Virtual ${PRICES.lojaVirtual}, Landing Page ${PRICES.landingPage}. Entre em contato pelo WhatsApp para um orçamento personalizado.`,
  },
  {
    question: "O site vem com SEO incluso?",
    answer:
      "Sim! Todos os nossos sites são entregues com SEO técnico avançado já configurado: meta tags, schema markup, sitemap, robots.txt, performance otimizada e muito mais.",
  },
  {
    question: "Posso gerenciar o meu próprio site?",
    answer:
      "Sim. Todos os nossos sites incluem um painel administrativo completo para que você possa atualizar textos, imagens e produtos sem precisar de um programador.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "Landing pages em até 5 dias úteis, sites institucionais em até 15 dias úteis e lojas virtuais em até 25 dias úteis. Prazos definidos no contrato.",
  },
  {
    question: "Vocês fazem sites para qual tipo de negócio?",
    answer:
      "Atendemos todos os segmentos: médicos, advogados, dentistas, clínicas, academias, restaurantes, imobiliárias, e-commerces, profissionais liberais e muito mais.",
  },
];
