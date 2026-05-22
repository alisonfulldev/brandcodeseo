import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Preço de Landing Page — Quanto Custa?",
  description: `Landing page profissional ${PRICES.landingPage}. Entrega em até 5 dias úteis. Veja o que está incluso na sua página de alta conversão.`,
  slug: "landing-page/preco",
  keywords: [
    "preço landing page",
    "quanto custa landing page",
    "valor página de captura",
    "criar landing page preço",
  ],
});

export default function LandingPagePrecoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Landing Page", url: `${SITE_URL}/landing-page` },
              { name: "Preço", url: `${SITE_URL}/landing-page/preco` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Quanto custa criar uma landing page?
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Preço justo para uma landing page profissional que converte.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-[#0A1628] rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Landing Page Profissional</h2>
            <div className="text-6xl font-extrabold text-blue-400 my-4">Planos a partir de R$ 90/mês</div>
            <p className="text-gray-400 text-sm mb-6">a partir de — pagamento único ou parcelado</p>
            <ul className="text-left space-y-2 text-sm text-gray-300 mb-8 max-w-sm mx-auto">
              {[
                "1 página de alta conversão",
                "Design responsivo e moderno",
                "SEO técnico completo",
                "Integração WhatsApp e formulário",
                "Otimizado para Google Ads",
                "Hospedagem na Vercel",
                "Prazo: até 5 dias úteis",
                "1 rodada de revisão",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              message="Quero criar minha landing page. Qual o próximo passo?"
              className="w-full justify-center py-3 text-base bg-white text-blue-700 hover:bg-gray-100"
            >
              Começar agora
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
