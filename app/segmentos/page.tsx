import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import nichos from "@/data/nichos.json";

export const metadata: Metadata = buildMetadata({
  title: "Software por Segmento | Sistemas para Todo Tipo de Negócio",
  description:
    "Encontre o sistema ideal para o seu segmento. Desenvolvemos software sob medida para restaurantes, clínicas, academias, escritórios, indústrias e mais de 30 tipos de negócio.",
  slug: "segmentos",
  keywords: ["software por segmento", "sistema para empresa", "software sob medida"],
});

const setores = [
  {
    titulo: "Saúde e Medicina",
    slugs: ["clinica", "hospital", "farmacia", "clinica-odontologica", "clinica-psiquiatrica", "psicologo", "nutricionista"],
  },
  { titulo: "Estética e Bem-estar", slugs: ["clinica-estetica", "salao-de-beleza", "academia"] },
  { titulo: "Alimentação", slugs: ["restaurante", "supermercado"] },
  { titulo: "Educação e Espaços", slugs: ["escola", "coworking"] },
  { titulo: "Comércio e Varejo", slugs: ["loja-de-varejo", "e-commerce", "pet-shop"] },
  {
    titulo: "Serviços Profissionais",
    slugs: ["advocacia", "contabilidade", "consultoria", "agencia-de-marketing", "financeiro"],
  },
  { titulo: "Construção e Imóveis", slugs: ["construtora", "imobiliaria"] },
  { titulo: "Indústria e Logística", slugs: ["industria", "transportadora", "oficina-mecanica"] },
  { titulo: "Hotelaria e Eventos", slugs: ["hotel", "eventos", "franquia"] },
];

export default function SegmentosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Software por Segmento", url: `${SITE_URL}/segmentos` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Software por Segmento de Negócio
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Desenvolvemos sistemas, apps, chatbots com IA e automações para mais de 30 segmentos.
            Encontre a solução certa para o seu tipo de negócio.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {setores.map((setor) => {
              const nichosDoSetor = nichos.filter((n) => setor.slugs.includes(n.slug));
              return (
                <div key={setor.titulo}>
                  <h2 className="text-xl font-bold text-[#0A1628] mb-5 pb-2 border-b border-gray-100">
                    {setor.titulo}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {nichosDoSetor.map((nicho) => (
                      <Link
                        key={nicho.slug}
                        href={`/sistema-para/${nicho.slug}`}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all"
                      >
                        {nicho.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-[#0A1628] rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Não encontrou o seu segmento?
            </h2>
            <p className="text-gray-300 mb-6 text-sm">
              Atendemos qualquer tipo de negócio. Fale com a gente para uma solução sob medida.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Falar com especialista →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
