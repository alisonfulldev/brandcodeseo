import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import tiposSoftware from "@/data/tipos-software.json";

export const metadata: Metadata = buildMetadata({
  title: "Tipos de Software | Todos os Sistemas que Desenvolvemos",
  description:
    "Conheça todos os tipos de software desenvolvidos pela BrandCode: ERPs, apps mobile, chatbots com IA, automações, e-commerce, sistemas de gestão e muito mais.",
  slug: "tipos-de-software",
  keywords: ["tipos de software", "sistemas sob medida", "desenvolvimento de software", "app mobile", "erp personalizado"],
});

const categoriaLabels: Record<string, string> = {
  gestao: "Gestão Empresarial",
  mobile: "Aplicativos Mobile",
  ia: "Inteligência Artificial",
  automacao: "Automação de Processos",
  integracao: "Integrações e APIs",
  ecommerce: "E-commerce e Marketplace",
  educacao: "Educação",
  dados: "Dados e Analytics",
  construcao: "Construção Civil",
  imobiliario: "Mercado Imobiliário",
  logistica: "Logística e Transporte",
  atendimento: "Atendimento ao Cliente",
  saude: "Saúde",
  produto: "Produto Digital",
  outros: "Outros Sistemas",
};

const categoriaOrder = [
  "gestao", "mobile", "ia", "automacao", "integracao",
  "ecommerce", "saude", "logistica", "atendimento",
  "dados", "educacao", "imobiliario", "construcao", "produto", "outros",
];

export default function TiposDeSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Tipos de Software", url: `${SITE_URL}/tipos-de-software` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Todos os Tipos de Software que Desenvolvemos
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            De ERPs e apps mobile a chatbots com IA — desenvolvemos qualquer tipo de software
            100% sob medida para o seu negócio.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {categoriaOrder.map((cat) => {
              const tiposDaCategoria = tiposSoftware.filter((t) => t.categoria === cat);
              if (tiposDaCategoria.length === 0) return null;
              return (
                <div key={cat}>
                  <h2 className="text-xl font-bold text-[#0A1628] mb-5 pb-2 border-b border-gray-100">
                    {categoriaLabels[cat] ?? cat}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {tiposDaCategoria.map((tipo) => (
                      <Link
                        key={tipo.slug}
                        href={`/desenvolvimento-de/${tipo.slug}`}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all"
                      >
                        {tipo.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-[#0A1628] rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Tem um projeto em mente?
            </h2>
            <p className="text-gray-300 mb-6 text-sm">
              Diagnóstico gratuito em 10 minutos. Apresentamos a solução certa para o seu caso.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Solicitar diagnóstico →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
