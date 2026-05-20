import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, WHATSAPP_LINK } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Software Sob Medida para Empresas",
  description:
    "Desenvolvemos sistemas e softwares sob medida para automatizar processos, aumentar a produtividade e escalar seu negócio. Orçamento personalizado.",
  slug: "software-sob-medida",
  keywords: [
    "software sob medida",
    "sistema personalizado",
    "desenvolvimento de sistemas",
    "automação empresarial",
    "software para empresa",
  ],
});

export default function SoftwareSobMedidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Software Sob Medida",
              description: "Desenvolvimento de sistemas e softwares personalizados para automação de processos empresariais.",
              price: "1500",
              slug: "software-sob-medida",
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
              { name: "Software Sob Medida", url: `${SITE_URL}/software-sob-medida` },
            ])
          ),
        }}
      />

      <Hero
        titulo="Software Sob Medida para Automatizar seu Negócio"
        subtitulo="Sistemas personalizados que eliminam processos manuais, aumentam a produtividade e escalam junto com sua empresa."
        badge="Software Sob Medida"
        whatsappMsg="Preciso de um software sob medida para minha empresa. Podemos conversar?"
        cta="Solicitar orçamento"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] text-center mb-12">
            O que desenvolvemos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { titulo: "Sistemas de Gestão (ERP)", desc: "Controle financeiro, estoque, vendas e relatórios em um único sistema integrado." },
              { titulo: "CRM Personalizado", desc: "Gerencie leads, clientes e funil de vendas do jeito que seu negócio funciona." },
              { titulo: "Aplicativos Web", desc: "Plataformas SaaS, marketplaces e aplicações web complexas com alta escalabilidade." },
              { titulo: "Automação de Processos", desc: "Elimine tarefas repetitivas com integrações e workflows automatizados." },
              { titulo: "APIs e Integrações", desc: "Conectamos seus sistemas existentes com APIs personalizadas e robustas." },
              { titulo: "Dashboards e Relatórios", desc: "Painéis de BI e relatórios em tempo real para tomadas de decisão estratégicas." },
            ].map((f) => (
              <div key={f.titulo} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0A1628] mb-2">{f.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton
              message="Preciso de um software personalizado. Podemos agendar uma conversa?"
              className="px-8 py-4 text-base"
            >
              Falar sobre meu projeto
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
