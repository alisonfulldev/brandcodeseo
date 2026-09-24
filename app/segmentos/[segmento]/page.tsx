import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import nichos from "@/data/nichos.json";
import cidades from "@/data/cidades.json";

type Params = { segmento: string };

export async function generateStaticParams() {
  return nichos.map((n) => ({ segmento: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) return {};
  return buildMetadata({
    title: `Tecnologia para ${nicho.nome} | Software, IA e Automação`,
    description: `Sistemas, IA, chatbots e automações para ${nicho.nomeCompleto}. Soluções 100% sob medida que resolvem os desafios reais do seu negócio.`,
    slug: `segmentos/${nicho.slug}`,
    keywords: [
      `software para ${nicho.nome.toLowerCase()}`,
      `sistema para ${nicho.nome.toLowerCase()}`,
      `ia para ${nicho.nome.toLowerCase()}`,
      `tecnologia ${nicho.nome.toLowerCase()}`,
    ],
  });
}

const solucoes = [
  {
    label: "Sistema de Gestão",
    path: (slug: string) => `/sistema-para/${slug}`,
    desc: "Software de gestão 100% sob medida com código-fonte entregue.",
  },
  {
    label: "Inteligência Artificial",
    path: (slug: string) => `/ia-para/${slug}`,
    desc: "Agentes de IA, análise de dados e automações inteligentes.",
  },
  {
    label: "Chatbot WhatsApp",
    path: (slug: string) => `/chatbot-para/${slug}`,
    desc: "Atendimento automático 24h com IA no WhatsApp.",
  },
];

export default async function SegmentoHubPage({ params }: { params: Promise<Params> }) {
  const { segmento } = await params;
  const nicho = nichos.find((n) => n.slug === segmento);
  if (!nicho) notFound();

  const topCidades = [...cidades].sort((a, b) => b.populacao - a.populacao).slice(0, 20);
  const outrosNichos = nichos.filter((n) => n.slug !== nicho.slug).slice(0, 12);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Segmentos", url: `${SITE_URL}/segmentos` },
              { name: nicho.nome, url: `${SITE_URL}/segmentos/${nicho.slug}` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Tecnologia para {nicho.nome}
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            {nicho.descricao} Desenvolvemos sistemas, IA e automações 100% sob medida.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">
            Soluções disponíveis para {nicho.nome}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {solucoes.map((s) => (
              <Link
                key={s.label}
                href={s.path(nicho.slug)}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className="font-bold text-[#0A1628] mb-2 group-hover:text-blue-700">
                  {s.label}
                </div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#0A1628] mb-6 text-center">
            {nicho.nome} por cidade
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16">
            {topCidades.map((cidade) => (
              <Link
                key={cidade.slug}
                href={`/software-para/${nicho.slug}/${cidade.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
              >
                {cidade.nome}
                <span className="block text-gray-400">{cidade.estado}</span>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-[#0A1628] mb-5">
            Outros segmentos atendidos
          </h2>
          <div className="flex flex-wrap gap-2">
            {outrosNichos.map((n) => (
              <Link
                key={n.slug}
                href={`/sistema-para/${n.slug}`}
                className="text-xs text-gray-600 bg-white border border-gray-200 rounded-md px-3 py-1.5 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {n.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
