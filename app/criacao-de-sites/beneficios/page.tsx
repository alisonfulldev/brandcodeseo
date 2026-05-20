import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Diferenciais from "@/components/sections/Diferenciais";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Benefícios de Ter um Site Profissional com SEO",
  description:
    "Descubra por que seu negócio precisa de um site profissional com SEO. Apareça no Google, gere leads e venda mais 24 horas por dia.",
  slug: "criacao-de-sites/beneficios",
  keywords: [
    "benefícios de ter um site",
    "por que ter um site profissional",
    "vantagens de criar um site",
    "site profissional para empresa",
  ],
});

export default function BeneficiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Criação de Sites", url: `${SITE_URL}/criacao-de-sites` },
              { name: "Benefícios", url: `${SITE_URL}/criacao-de-sites/beneficios` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Por que seu negócio precisa de um site profissional?
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Um site bem feito não é custo — é o vendedor que trabalha 24 horas, 7 dias por semana, sem folga.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {[
            {
              numero: "01",
              titulo: "Apareça no Google quando o cliente busca por você",
              descricao:
                "87% das pessoas pesquisam no Google antes de comprar. Um site com SEO técnico avançado garante que sua empresa apareça quando o cliente mais precisa. Sem site profissional, você inexiste para esses compradores.",
            },
            {
              numero: "02",
              titulo: "Credibilidade que fecha contratos",
              descricao:
                "Um cliente em potencial que visita seu site e encontra um design profissional, depoimentos, portfólio e informações claras tem muito mais confiança para fechar negócio — seja pelo WhatsApp ou pessoalmente.",
            },
            {
              numero: "03",
              titulo: "Vendedor 24/7 sem custo extra",
              descricao:
                "Seu site trabalha enquanto você dorme. Leads chegam pelo WhatsApp de madrugada, fins de semana e feriados. Com botão de WhatsApp estrategicamente posicionado, cada visitante é uma oportunidade de venda.",
            },
            {
              numero: "04",
              titulo: "Independência das redes sociais",
              descricao:
                "Perfis no Instagram e Facebook pertencem a empresas americanas. Seu site é seu. Algoritmos mudam, contas caem, mas seu domínio sempre será seu e sempre aparecerá no Google.",
            },
            {
              numero: "05",
              titulo: "Redução de custo em tráfego pago",
              descricao:
                "Com SEO bem feito, você atrai visitantes orgânicos gratuitamente. Isso reduz a dependência e o custo de campanhas pagas no Google Ads e Meta Ads ao longo do tempo.",
            },
          ].map((b) => (
            <div key={b.numero} className="flex gap-6">
              <div className="text-5xl font-extrabold text-blue-100 select-none flex-shrink-0 w-14">
                {b.numero}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0A1628] mb-2">{b.titulo}</h2>
                <p className="text-gray-600 leading-relaxed">{b.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Diferenciais />

      <section className="py-16 bg-[#0A1628] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">
            Pronto para ter esses benefícios?
          </h2>
          <WhatsAppButton
            message="Quero criar meu site profissional com SEO. Pode me ajudar?"
            className="px-8 py-4 text-base"
          >
            Criar meu site agora
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
