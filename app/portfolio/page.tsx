import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, projetosSchema } from "@/lib/seo/schema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { PROJETOS } from "@/lib/projetos";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Portfólio: Sistemas e Apps que Desenvolvemos",
  description:
    "MeetChat (agendamento online), B2lead (prospecção B2B), EstudAPP (gestão escolar) e outros projetos desenvolvidos pela BrandCode Solutions.",
  slug: "portfolio",
});

const outrosProjetos = [
  { segmento: "Clínica Médica", tipo: "Site Institucional", descricao: "Site para clínica com agendamento online e SEO local." },
  { segmento: "Escritório de Advocacia", tipo: "Site Institucional", descricao: "Presença digital profissional com blog jurídico e captação de leads." },
  { segmento: "Restaurante", tipo: "Site + Cardápio Digital", descricao: "Site com cardápio digital, integração WhatsApp e SEO local." },
  { segmento: "Loja de Moda", tipo: "Loja Virtual", descricao: "E-commerce completo com pagamento, estoque e SEO por produto." },
  { segmento: "Fisioterapeuta", tipo: "Landing Page", descricao: "Landing page de alta conversão para captação de pacientes." },
  { segmento: "Imobiliária", tipo: "Site + Catálogo de Imóveis", descricao: "Portal imobiliário com filtros de busca e captação de leads." },
];

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Portfólio", url: `${SITE_URL}/portfolio` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projetosSchema(PROJETOS)) }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Nosso Portfólio</h1>
          <p className="mt-4 text-gray-300 text-lg">
            Sistemas, apps e sites desenvolvidos pela {SITE_NAME}, incluindo produtos próprios em uso por clientes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-8">Produtos que desenvolvemos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJETOS.map((p) => (
              <article key={p.slug} id={p.slug} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex flex-col">
                <div className={`h-40 bg-gradient-to-br ${p.cor} flex flex-col items-center justify-center gap-2`}>
                  <span className="text-4xl" aria-hidden="true">{p.icone}</span>
                  <span className="text-2xl font-extrabold text-white tracking-tight">{p.nome}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="self-start text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{p.tipo}</span>
                  <h3 className="font-bold text-[#0A1628] mt-3 mb-2">{p.resumo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.descricao}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.funcionalidades.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5" aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener"
                      className="mt-6 self-start text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Conhecer o {p.nome} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-[#0A1628] mt-20 mb-8">Outros projetos entregues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {outrosProjetos.map((p) => (
              <div key={p.segmento} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-br from-[#0A1628] to-[#1E40AF] flex items-center justify-center">
                  <span className="text-4xl">🌐</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{p.tipo}</span>
                  <h3 className="font-bold text-[#0A1628] mt-3 mb-2">{p.segmento}</h3>
                  <p className="text-gray-500 text-sm">{p.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#0A1628] rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4">Quer um sistema assim para o seu negócio?</h2>
            <WhatsAppButton
              message="Vi o portfólio de vocês e quero um orçamento para desenvolvimento de software."
              className="px-8 py-4 text-base"
            >
              Solicitar orçamento
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
