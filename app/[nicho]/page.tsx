import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import nichos from "@/data/nichos.json";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";

type Params = { nicho: string };

export async function generateStaticParams() {
  return nichos.map((n) => ({ nicho: `site-para-${n.slug}` }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { nicho: nichoParam } = await params;
  const slug = nichoParam.replace("site-para-", "");
  const nicho = nichos.find((n) => n.slug === slug);
  if (!nicho) return {};

  return buildMetadata({
    title: `Site para ${nicho.nome} — Profissional com SEO`,
    description: `${nicho.descricao} SEO técnico avançado incluso. ${PRICES.institucional}. Apareça no Google e conquiste mais clientes.`,
    slug: `site-para-${nicho.slug}`,
    keywords: [
      ...nicho.palavrasChave,
      `site profissional ${nicho.nome.toLowerCase()}`,
      `criar site ${nicho.nome.toLowerCase()}`,
    ],
  });
}

export default async function NichoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { nicho: nichoParam } = await params;
  const slug = nichoParam.replace("site-para-", "");
  const nicho = nichos.find((n) => n.slug === slug);
  if (!nicho) notFound();

  const cidadesDestaque = [...cidades]
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, 12);

  const faqs = [
    {
      question: `Quanto custa um site para ${nicho.nome.toLowerCase()}?`,
      answer: `Site Institucional ${PRICES.institucional}, Loja Virtual ${PRICES.lojaVirtual} e Landing Page ${PRICES.landingPage}. Todos com SEO técnico e painel administrativo inclusos.`,
    },
    {
      question: `O site para ${nicho.nome.toLowerCase()} vai aparecer no Google?`,
      answer: `Sim. Configuramos SEO técnico avançado específico para ${nicho.nomeCompleto}, incluindo palavras-chave como "${nicho.palavrasChave[0]}", schema JSON-LD e otimização local.`,
    },
    {
      question: `Quais são as principais funcionalidades do site para ${nicho.nome.toLowerCase()}?`,
      answer: `${nicho.beneficios.join(", ")}. Tudo configurado para converter visitantes em clientes pelo WhatsApp.`,
    },
    {
      question: "Qual é o prazo de entrega?",
      answer: "Landing pages em até 5 dias úteis, sites institucionais em até 15 dias e lojas virtuais em até 25 dias.",
    },
  ];

  const whatsappMsg = `Olá! Preciso de um site para ${nicho.nome.toLowerCase()}. Pode me passar um orçamento?`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Site para ${nicho.nome}`,
              description: nicho.descricao,
              price: "497",
              slug: `site-para-${nicho.slug}`,
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
              { name: `Site para ${nicho.nome}`, url: `${SITE_URL}/site-para-${nicho.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Hero
        titulo={`Site para ${nicho.nome} que Aparece no Google e Vende`}
        subtitulo={`${nicho.descricao} SEO técnico avançado, painel administrativo e conversão via WhatsApp. ${PRICES.institucional}.`}
        badge={`Site para ${nicho.nome}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/criacao-de-sites/quanto-custa"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                O que seu site de {nicho.nome.toLowerCase()} vai resolver
              </h2>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                  Problemas que resolve:
                </h3>
                <ul className="space-y-2">
                  {nicho.dores.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-red-400 mt-0.5">✗</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
                Benefícios do seu site
              </h2>
              <ul className="space-y-3">
                {nicho.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700 text-sm">
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
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton message={whatsappMsg} className="px-6 py-3 text-sm">
                  Quero meu site de {nicho.nome.toLowerCase()}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-6 text-center">
            Site para {nicho.nome} por cidade
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cidadesDestaque.map((cidade) => (
              <Link
                key={cidade.slug}
                href={`/site-para-${nicho.slug}-em-${cidade.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {cidade.nome}
                <span className="block text-gray-400 text-xs">{cidade.estado}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} title={`Dúvidas sobre site para ${nicho.nome}`} />
    </>
  );
}
