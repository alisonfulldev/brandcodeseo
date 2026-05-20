import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, SITE_NAME, WHATSAPP_LINK, PRICES } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a BrandCode Solutions",
  description:
    "Conheça a BrandCode Solutions, agência digital especializada em criação de sites que vendem. SEO técnico avançado, painel administrativo e foco em conversão real.",
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
            Somos uma agência digital especializada em criação de sites que vendem. Nossa missão é simples: fazer seu negócio aparecer no Google e converter visitantes em clientes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Nossa missão</h2>
            <p className="text-gray-600 leading-relaxed">
              Acreditamos que todo negócio merece uma presença digital profissional, acessível e que realmente funcione. Não fazemos sites por fazer — entregamos ferramentas de vendas com SEO técnico avançado incluso em todos os projetos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">O que nos diferencia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "01", titulo: "Sites que se vendem sozinhos", desc: "SEO técnico avançado configurado desde o primeiro dia." },
                { num: "02", titulo: "Painel admin incluso", desc: "Você gerencia seu próprio site sem depender de nós." },
                { num: "03", titulo: "Foco em conversão", desc: "Cada elemento pensado para transformar visitante em cliente." },
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
                  <div className="text-sm text-gray-400 mb-1">Landing Page</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.landingPage}</div>
                </div>
                <div className="sm:border-x border-blue-900">
                  <div className="text-sm text-gray-400 mb-1">Site Institucional</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.institucional}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Loja Virtual</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.lojaVirtual}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Vamos trabalhar juntos?</h2>
            <WhatsAppButton
              message="Olá! Vi o site da BrandCode e quero um orçamento."
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
