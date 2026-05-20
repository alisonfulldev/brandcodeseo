import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE,
  WHATSAPP_NUMBER,
  LOGO_URL,
  PRICES,
} from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GenerateMetadataParams {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
}

export interface CidadeParam {
  slug: string;
  nome: string;
  estado: string;
}

export interface ServicoParam {
  nome: string;
  slug: string;
  precoMin?: string;
}

export interface NichoParam {
  slug: string;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  palavrasChave: string[];
}

export type SchemaType =
  | "LocalBusiness"
  | "ProfessionalService"
  | "Service"
  | "FAQPage"
  | "BreadcrumbList"
  | "Organization"
  | "WebSite"
  | "Article"
  | "Product";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export function generateMetadata({
  title,
  description,
  slug = "",
  image = OG_IMAGE,
  noindex = false,
  keywords = [],
}: GenerateMetadataParams): Metadata {
  const canonical = `${SITE_URL}${slug ? `/${slug.replace(/^\//, "")}` : ""}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: canonical,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@brandcodesol",
    },
  };
}

export function generateCityMetadata(
  cidade: CidadeParam,
  servico: ServicoParam = {
    nome: "Criação de Sites",
    slug: "criacao-de-sites",
    precoMin: PRICES.institucional,
  }
): Metadata {
  const title = `Criação de Sites em ${cidade.nome} — ${cidade.estado} | ${SITE_NAME}`;
  const description = `Site profissional em ${cidade.nome}, ${cidade.estado}. ${servico.nome} com SEO técnico avançado, painel administrativo incluso${servico.precoMin ? ` e preços a partir de ${servico.precoMin}` : ""}. Solicite seu orçamento agora!`;
  const slug = `${servico.slug}/${cidade.slug}`;
  const keywords = [
    `criação de sites em ${cidade.nome}`,
    `site profissional ${cidade.nome}`,
    `agência digital ${cidade.nome}`,
    `${servico.nome.toLowerCase()} ${cidade.nome}`,
    `desenvolvimento de sites ${cidade.nome}`,
    `fazer site ${cidade.nome}`,
    `site para empresa ${cidade.nome}`,
    `criar site ${cidade.nome} ${cidade.estado}`,
    `site barato ${cidade.nome}`,
    `agência web ${cidade.nome}`,
  ];

  return generateMetadata({ title, description, slug, keywords });
}

export function generateNichoMetadata(nicho: NichoParam): Metadata {
  const title = `Site para ${nicho.nomeCompleto} | ${SITE_NAME}`;
  const description = `${nicho.descricao} SEO técnico avançado incluso. Painel administrativo completo para você gerenciar sozinho. Orçamento gratuito!`;
  const slug = `site-para-${nicho.slug}`;
  const keywords = [
    ...nicho.palavrasChave,
    `site para ${nicho.nome.toLowerCase()}`,
    `criação de site ${nicho.nome.toLowerCase()}`,
    `agência site ${nicho.nome.toLowerCase()}`,
    `site profissional ${nicho.nome.toLowerCase()}`,
    `quanto custa site ${nicho.nome.toLowerCase()}`,
  ];

  return generateMetadata({ title, description, slug, keywords });
}

// ─── Schema.org factory ───────────────────────────────────────────────────────

export function generateSchema(
  tipo: SchemaType,
  dados: Record<string, unknown> = {}
): Record<string, unknown> {
  const ctx = { "@context": "https://schema.org", "@type": tipo };

  switch (tipo) {
    case "Organization":
      return {
        ...ctx,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
          width: 400,
          height: 120,
        },
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
        ...dados,
      };

    case "LocalBusiness":
    case "ProfessionalService": {
      const cidade = (dados.cidade as string) ?? "Brasil";
      const estado = (dados.estado as string) ?? "SP";
      const servico = (dados.servico as string) ?? "Criação de Sites";
      return {
        ...ctx,
        name: `${SITE_NAME} — ${servico} em ${cidade}`,
        url: SITE_URL,
        logo: LOGO_URL,
        telephone: `+${WHATSAPP_NUMBER}`,
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "PIX, Cartão de Crédito, Boleto Bancário",
        areaServed: cidade === "Brasil"
          ? { "@type": "Country", name: "Brazil" }
          : { "@type": "City", name: cidade },
        address: {
          "@type": "PostalAddress",
          addressLocality: cidade,
          addressRegion: estado,
          addressCountry: "BR",
        },
        description: `${servico} profissional em ${cidade}, ${estado}. SEO técnico avançado incluso. Painel administrativo completo. ${PRICES.institucional} (site institucional).`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Criação de Sites",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Site Institucional",
                description: "Site profissional com SEO avançado e painel administrativo",
              },
              priceCurrency: "BRL",
              price: "497",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Loja Virtual",
                description: "E-commerce completo com integração de pagamentos e SEO",
              },
              priceCurrency: "BRL",
              price: "697",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Landing Page",
                description: "Página de alta conversão com foco em captação de leads",
              },
              priceCurrency: "BRL",
              price: "370",
            },
          ],
        },
        sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
        ...dados,
      };
    }

    case "Service": {
      const price = ((dados.price as string) ?? "").replace(/\D/g, "");
      return {
        ...ctx,
        name: dados.name,
        description: dados.description,
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        areaServed: { "@type": "Country", name: "Brazil" },
        url: `${SITE_URL}/${(dados.slug as string) ?? ""}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          price,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: price,
            priceCurrency: "BRL",
          },
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: SITE_NAME },
        },
        ...dados,
      };
    }

    case "FAQPage": {
      const faqs = (dados.faqs as { question: string; answer: string }[]) ?? [];
      return {
        ...ctx,
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      };
    }

    case "BreadcrumbList": {
      const items = (dados.items as { name: string; url: string }[]) ?? [];
      return {
        ...ctx,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
    }

    case "Article":
      return {
        ...ctx,
        headline: dados.title,
        description: dados.description,
        url: `${SITE_URL}/blog/${(dados.slug as string) ?? ""}`,
        datePublished: dados.publishedAt,
        dateModified: dados.modifiedAt ?? dados.publishedAt,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: LOGO_URL },
        },
        ...dados,
      };

    case "Product": {
      const price = ((dados.price as string) ?? "").replace(/\D/g, "");
      return {
        ...ctx,
        name: dados.name,
        description: dados.description,
        url: `${SITE_URL}/${(dados.slug as string) ?? ""}`,
        image: (dados.image as string) ?? OG_IMAGE,
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          price,
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: SITE_NAME },
        },
        ...dados,
      };
    }

    case "WebSite":
      return {
        ...ctx,
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
        ...dados,
      };

    default:
      return { ...ctx, ...dados };
  }
}
