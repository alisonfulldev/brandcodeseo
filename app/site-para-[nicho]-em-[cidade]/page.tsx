import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import nichos from "@/data/nichos.json";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { nicho: string; cidade: string };

export async function generateStaticParams() {
  const topNichos = nichos.slice(0, 20);
  const topCidades = [...cidades]
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, 50);

  const params: Params[] = [];
  for (const nicho of topNichos) {
    for (const cidade of topCidades) {
      params.push({ nicho: nicho.slug, cidade: cidade.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { nicho: nichoSlug, cidade: cidadeSlug } = await params;
  const nicho = nichos.find((n) => n.slug === nichoSlug);
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!nicho || !cidade) return {};

  return buildMetadata({
    title: `Site para ${nicho.nome} em ${cidade.nome} — ${cidade.estado}`,
    description: `${nicho.descricao} Atendemos ${cidade.nome}, ${cidade.estado}. SEO técnico avançado incluso. ${PRICES.institucional}. Apareça no Google local e conquiste mais clientes.`,
    slug: `site-para-${nicho.slug}-em-${cidade.slug}`,
    keywords: [
      `site para ${nicho.nome.toLowerCase()} em ${cidade.nome}`,
      `${nicho.nome.toLowerCase()} ${cidade.nome}`,
      `criar site ${nicho.nome.toLowerCase()} ${cidade.nome}`,
      `site ${nicho.nome.toLowerCase()} ${cidade.estado}`,
    ],
  });
}

export default async function NichoCidadePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { nicho: nichoSlug, cidade: cidadeSlug } = await params;
  const nicho = nichos.find((n) => n.slug === nichoSlug);
  const cidade = cidades.find((c) => c.slug === cidadeSlug);
  if (!nicho || !cidade) notFound();

  const faqs = [
    {
      question: `Vocês criam site para ${nicho.nome.toLowerCase()} em ${cidade.nome}?`,
      answer: `Sim! Atendemos ${nicho.nomeCompleto} em ${cidade.nome} e em todo o ${cidade.estado}. O processo é 100% online.`,
    },
    {
      question: `Quanto custa um site para ${nicho.nome.toLowerCase()} em ${cidade.nome}?`,
      answer: `Os preços são iguais para todo o Brasil: Site Institucional ${PRICES.institucional}, Loja Virtual ${PRICES.lojaVirtual} e Landing Page ${PRICES.landingPage}.`,
    },
    {
      question: `Meu site vai aparecer para buscas locais em ${cidade.nome}?`,
      answer: `Sim. Configuramos SEO local completo para que seu site apareça quando alguém buscar "${nicho.palavrasChave[0]} em ${cidade.nome}" ou "${nicho.nome.toLowerCase()} ${cidade.nome}" no Google.`,
    },
    {
      question: "O SEO local funciona para Google Maps também?",
      answer: `Configuramos seu site para integrar com o Google Meu Negócio, potencializando seu aparecimento no Google Maps de ${cidade.nome}.`,
    },
  ];

  const whatsappMsg = `Olá! Sou ${nicho.nome.toLowerCase()} em ${cidade.nome} e preciso de um site profissional. Pode me passar um orçamento?`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({ cidade: cidade.nome, estado: cidade.estado })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Site para ${nicho.nome} em ${cidade.nome}`,
              description: `${nicho.descricao} Atendemos ${cidade.nome}, ${cidade.estado}.`,
              price: "497",
              slug: `site-para-${nicho.slug}-em-${cidade.slug}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              {
                name: `Site para ${nicho.nome}`,
                url: `${SITE_URL}/site-para-${nicho.slug}`,
              },
              {
                name: cidade.nome,
                url: `${SITE_URL}/site-para-${nicho.slug}-em-${cidade.slug}`,
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Hero
        titulo={`Site para ${nicho.nome} em ${cidade.nome} que Aparece no Google`}
        subtitulo={`${nicho.descricao} Atendemos ${cidade.nome}, ${cidade.estado}. SEO local avançado, painel administrativo e conversão via WhatsApp. ${PRICES.institucional}.`}
        badge={`${nicho.nome} em ${cidade.nome} — ${cidade.estado}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/criacao-de-sites/quanto-custa"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-8 text-center">
            Benefícios do seu site de {nicho.nome.toLowerCase()} em {cidade.nome}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nicho.beneficios.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
              <svg
                className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-blue-800 text-sm font-medium">
                SEO local para aparecer em buscas de {cidade.nome} e região
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-4 text-base">
              Quero meu site em {cidade.nome}
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title={`Dúvidas sobre site para ${nicho.nome} em ${cidade.nome}`}
      />
    </>
  );
}
