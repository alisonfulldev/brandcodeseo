import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Preço de Loja Virtual — Quanto Custa um E-commerce?",
  description: `Tabela de preços completa para criação de loja virtual em 2025. ${PRICES.lojaVirtual}. Veja o que está incluso no seu e-commerce.`,
  slug: "loja-virtual/preco",
  keywords: [
    "preço loja virtual",
    "quanto custa loja virtual",
    "valor e-commerce",
    "criar loja online preço",
  ],
});

export default function LojaVirtualPrecoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Loja Virtual", url: `${SITE_URL}/loja-virtual` },
              { name: "Preço", url: `${SITE_URL}/loja-virtual/preco` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Quanto custa criar uma loja virtual?
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Preços claros para loja virtual com SEO, pagamento integrado e painel de gestão.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-[#0A1628] rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Loja Virtual Completa</h2>
            <div className="text-6xl font-extrabold text-blue-400 my-4">Planos a partir de R$ 90/mês</div>
            <p className="text-gray-400 text-sm mb-6">a partir de — ou parcelado em até 12x</p>
            <ul className="text-left space-y-2 text-sm text-gray-300 mb-8 max-w-sm mx-auto">
              {[
                "Catálogo de produtos ilimitado",
                "Checkout com Pix, cartão e boleto",
                "Painel de gestão de pedidos",
                "SEO técnico por página de produto",
                "Integração com frete automático",
                "Domínio + hospedagem na Vercel",
                "Prazo: até 25 dias úteis",
                "3 rodadas de revisão",
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
              message="Quero criar minha loja virtual. Qual o próximo passo?"
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
