import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, WHATSAPP_LINK, SITE_NAME } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Contato — Fale com a BrandCode Solutions",
  description:
    "Entre em contato com a BrandCode Solutions. Solicite seu orçamento de site, loja virtual ou landing page pelo WhatsApp. Atendimento rápido e humanizado.",
  slug: "contato",
});

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Contato", url: `${SITE_URL}/contato` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Fale com a gente</h1>
          <p className="mt-4 text-gray-300 text-lg">
            Atendimento rápido e humanizado. Sem chatbot, sem formulário que some no vazio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white text-center">
              <div className="text-5xl mb-4">💬</div>
              <h2 className="text-xl font-bold mb-2">WhatsApp</h2>
              <p className="text-gray-400 text-sm mb-6">
                A forma mais rápida. Respondemos em minutos durante horário comercial.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-wa font-semibold py-3 rounded-full text-sm"
                style={{ background: "#25D366", color: "#fff" }}
              >
                Abrir WhatsApp
              </a>
              <p className="mt-3 text-xs text-gray-500">(18) 9 9733-0574</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
              <div className="text-5xl mb-4">📋</div>
              <h2 className="text-xl font-bold text-[#0A1628] mb-2">Orçamento Online</h2>
              <p className="text-gray-500 text-sm mb-6">
                Preencha o briefing online e receba uma proposta personalizada em até 24 horas.
              </p>
              <a
                href="/criacao-de-sites/orcamento"
                className="block w-full bg-[#0A1628] hover:bg-[#0D1E3A] text-white font-semibold py-3 rounded-full text-sm transition-colors"
              >
                Pedir orçamento online
              </a>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-600">
              <strong className="text-[#0A1628]">Horário de atendimento:</strong>{" "}
              Segunda a Sexta das 9h às 18h. Sábado das 9h às 13h.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Fora do horário? Mande mensagem — respondemos assim que possível.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
