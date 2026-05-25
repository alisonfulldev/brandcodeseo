import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import Precos from "@/components/sections/Precos";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Quanto Custa Criar um Site Profissional?",
  description: `Tabela de preços completa para criação de sites em 2025. Site Institucional ${PRICES.institucional}, Loja Virtual ${PRICES.lojaVirtual}, Landing Page ${PRICES.landingPage}. Veja o que está incluso.`,
  slug: "criacao-de-sites/quanto-custa",
  keywords: [
    "quanto custa criar um site",
    "preço de site",
    "valor de site profissional",
    "custo de criação de site",
    "tabela de preço site",
  ],
});

const faqs = [
  {
    question: "Qual o preço de um site profissional em 2025?",
    answer: `Na BrandCode Solutions: Site Institucional ${PRICES.institucional}, Loja Virtual ${PRICES.lojaVirtual} e Landing Page ${PRICES.landingPage}. Todos com SEO técnico e painel administrativo inclusos.`,
  },
  {
    question: "O que está incluso no preço?",
    answer: "Design responsivo, SEO técnico avançado, schema JSON-LD, painel administrativo, integração WhatsApp, hospedagem na Vercel e suporte pós-entrega.",
  },
  {
    question: "Tem algum custo após a implementação?",
    answer: "O investimento inicial é a taxa de implementação. Após entrar em contato, apresentamos as opções de plano de manutenção disponíveis para manter seu projeto atualizado e com suporte contínuo.",
  },
  {
    question: "Parcela no cartão?",
    answer: "Sim. Parcelamos em até 12x no cartão de crédito. Trabalhamos com 50% de entrada e 50% na entrega.",
  },
  {
    question: "Posso adicionar mais páginas depois?",
    answer: "Sim. Novas páginas e funcionalidades podem ser adicionadas sob demanda, com orçamento separado.",
  },
];

export default function QuantoCustaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Criação de Sites", url: `${SITE_URL}/criacao-de-sites` },
              { name: "Quanto Custa", url: `${SITE_URL}/criacao-de-sites/quanto-custa` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Quanto custa criar um site profissional?
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Preços claros, sem letra miúda. Veja exatamente o que você recebe em cada plano.
          </p>
        </div>
      </section>

      <Precos />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-4">
            Precisa de um orçamento personalizado?
          </h2>
          <p className="text-gray-500 mb-8">
            Projetos específicos podem ter valores diferentes. Fale conosco e receba uma proposta em minutos.
          </p>
          <WhatsAppButton
            message="Quero um orçamento personalizado para criação de site. Pode me ajudar?"
            className="px-8 py-4 text-base"
          >
            Pedir orçamento personalizado
          </WhatsAppButton>
        </div>
      </section>

      <FAQ items={faqs} title="Dúvidas sobre preços de sites" />
    </>
  );
}
