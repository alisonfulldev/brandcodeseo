import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE, WHATSAPP_NUMBER } from "@/lib/constants";
import { organizationSchema, webSiteSchema } from "@/lib/seo/schema";

// ─── Fontes ───────────────────────────────────────────────────────────────────

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

// ─── Google Analytics 4 ───────────────────────────────────────────────────────

const GA_ID = "G-SSYB2EDFJY";

// ─── Schema.org LocalBusiness (raiz = cobertura nacional) ────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "PIX, Cartão de Crédito, Boleto Bancário",
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Desenvolvimento de Software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistema Web e ERP Sob Medida",
          description: "Desenvolvimento de sistemas web, ERPs e CRMs personalizados para empresas",
        },
        priceCurrency: "BRL",
        price: "2997",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2997,
          priceCurrency: "BRL",
        },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Mobile iOS e Android",
          description: "Aplicativos mobile nativos e híbridos para iOS e Android",
        },
        priceCurrency: "BRL",
        price: "4997",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 4997,
          priceCurrency: "BRL",
        },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automação com IA e Chatbot WhatsApp",
          description: "Chatbots com IA, automação de atendimento e processos empresariais",
        },
        priceCurrency: "BRL",
        price: "997",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 997,
          priceCurrency: "BRL",
        },
        availability: "https://schema.org/InStock",
      },
    ],
  },
  sameAs: [
    `https://wa.me/${WHATSAPP_NUMBER}`,
  ],
};

// ─── Metadata base global ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Software House | Sistemas, Apps e Automações`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords:
    "desenvolvimento de software, software sob medida, sistema web, app mobile, automação de processos, chatbot whatsapp, inteligência artificial, erp personalizado, crm sob medida, software house",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Software House | Sistemas, Apps e Automações`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Agência digital especializada em sites que vendem`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Software House | Sistemas, Apps e Automações`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@brandcodesol",
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} h-full`}>
      <head>
        {/* Schema.org — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {/* Schema.org — WebSite (SearchAction) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
        {/* Schema.org — LocalBusiness / ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900">
        {/* Google Analytics 4 — carregado após interação para não bloquear LCP */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Botão fixo WhatsApp — visível em todas as páginas */}
        <WhatsAppButton fixed />
      </body>
    </html>
  );
}
