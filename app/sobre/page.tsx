import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, SITE_NAME, PRICES } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a BrandCode Solutions | Software House",
  description:
    "Somos uma software house especializada em sistemas sob medida, apps mobile, automações com IA e integrações. Código-fonte entregue, sem mensalidade de licença.",
  slug: "sobre",
});

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Sobre", url: `${SITE_URL}/sobre` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Sobre a {SITE_NAME}
          </h1>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Software house especializada em sistemas sob medida, apps mobile, automações com IA e integrações. Construímos o software que seu negócio precisa para automatizar processos e escalar.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Nossa missão</h2>
            <p className="text-gray-600 leading-relaxed">
              Acreditamos que toda empresa merece tecnologia de qualidade, sem depender de plataformas genéricas com mensalidades crescentes. Desenvolvemos software sob medida que funciona exatamente no seu processo, com código-fonte entregue e sem lock-in de fornecedor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">O que nos diferencia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "01", titulo: "Código-fonte é seu", desc: "Você recebe o repositório completo. Pode evoluir com qualquer time no futuro." },
                { num: "02", titulo: "IA integrada", desc: "Chatbots, automações e agentes de IA já na arquitetura base de todos os projetos." },
                { num: "03", titulo: "Entregas incrementais", desc: "Você começa a usar o sistema antes da entrega final. Sem meses de espera." },
              ].map((d) => (
                <div key={d.num} className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-blue-200 mb-2">{d.num}</div>
                  <h3 className="font-bold text-[#0A1628] mb-1">{d.titulo}</h3>
                  <p className="text-gray-500 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Nossos preços</h2>
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Automação e IA</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.automacao}</div>
                </div>
                <div className="sm:border-x border-blue-900">
                  <div className="text-sm text-gray-400 mb-1">Sistema Web / ERP</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.sistemaWeb}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">App Mobile</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.appMobile}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Vamos trabalhar juntos?</h2>
            <WhatsAppButton
              message="Olá! Vi o site da BrandCode e quero um orçamento de software."
              className="px-8 py-4 text-base"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
