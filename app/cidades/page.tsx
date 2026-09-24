import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import cidades from "@/data/cidades.json";

export const metadata: Metadata = buildMetadata({
  title: "Desenvolvimento de Software por Cidade | Todo o Brasil",
  description:
    "Desenvolvemos software para empresas em todo o Brasil. Veja as mais de 276 cidades atendidas por região: Sudeste, Nordeste, Sul, Centro-Oeste e Norte.",
  slug: "cidades",
  keywords: ["desenvolvimento de software brasil", "software house cidades", "empresa de software"],
});

const regiaoOrder = ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"];

export default function CidadesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Cidades Atendidas", url: `${SITE_URL}/cidades` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Desenvolvimento de Software em Todo o Brasil
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Atendemos empresas em mais de 276 cidades em todo o Brasil, 100% remoto.
            Encontre sua cidade e veja as soluções disponíveis.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {regiaoOrder.map((regiao) => {
              const cidadesDaRegiao = [...cidades]
                .filter((c) => c.regiao === regiao)
                .sort((a, b) => b.populacao - a.populacao);
              if (cidadesDaRegiao.length === 0) return null;
              return (
                <div key={regiao}>
                  <h2 className="text-xl font-bold text-[#0A1628] mb-5 pb-2 border-b border-gray-100">
                    Região {regiao}
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      ({cidadesDaRegiao.length} cidades)
                    </span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {cidadesDaRegiao.map((cidade) => (
                      <Link
                        key={cidade.slug}
                        href={`/desenvolvimento-de-software-em/${cidade.slug}`}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all text-center"
                      >
                        {cidade.nome}
                        <span className="block text-xs text-gray-400 font-normal">{cidade.estado}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
