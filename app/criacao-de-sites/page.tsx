import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL, PRICES, WHATSAPP_LINK } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import FAQ from "@/components/sections/FAQ";
import CidadesGrid from "@/components/sections/CidadesGrid";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Criação de Sites Profissionais com SEO Técnico Avançado",
  description: `Crie um site profissional que aparece no Google e converte visitantes em clientes. SEO técnico avançado incluso, painel administrativo e hospedagem na Vercel. ${PRICES.institucional}. Solicite um orçamento.`,
  slug: "criacao-de-sites",
  keywords: [
    "criação de sites profissionais",
    "criar site profissional",
    "site empresarial com SEO",
    "desenvolvimento web profissional",
    "site com SEO técnico",
    "criação de site para empresa",
    "agência de criação de sites",
    "site que aparece no Google",
  ],
});

const faqs = [
  {
    question: "Quanto custa criar um site profissional com a BrandCode?",
    answer: `Site Institucional ${PRICES.institucional} (até 8 páginas completas), Loja Virtual ${PRICES.lojaVirtual} e Landing Page ${PRICES.landingPage}. Parcelamos em até 12x no cartão sem juros. Todo plano inclui SEO técnico, painel admin e hospedagem. Fale pelo WhatsApp para um orçamento personalizado.`,
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "Sites institucionais ficam prontos em até 15 dias úteis após aprovação do briefing e pagamento da entrada. O prazo é definido em contrato — sem surpresas. Landing pages saem em 5 dias úteis.",
  },
  {
    question: "Preciso contratar hospedagem separada?",
    answer:
      "Não. Hospedamos todos os sites na Vercel sem custo adicional para você. HTTPS automático e gratuito incluso. Você só precisa ter um domínio (.com.br a partir de R$ 40/ano no Registro.br).",
  },
  {
    question: "Consigo atualizar o site sozinho depois que ele ficar pronto?",
    answer:
      "Sim. Entregamos um painel administrativo completo junto com o site. Você atualiza textos, imagens, preços e páginas inteiras sem precisar de programador. Fazemos um treinamento de uso na entrega.",
  },
  {
    question: "O SEO técnico avançado está realmente incluso em todos os planos?",
    answer:
      "Sim, sem exceção. Configuramos meta tags, sitemap XML, robots.txt, schema JSON-LD para rich snippets, OpenGraph para redes sociais, Core Web Vitals otimizados e velocidade de carregamento. Somos finalistas do Prêmio Nacional de Melhor SEO do Brasil 2025 — SEO é o nosso forte.",
  },
  {
    question: "Como funciona o processo do início ao fim?",
    answer:
      "1) Você nos contata pelo WhatsApp. 2) Fazemos um briefing para entender seu negócio e objetivos. 3) Apresentamos o projeto para aprovação. 4) Desenvolvemos e entregamos com treinamento. 5) Suporte pós-entrega incluso. Simples, direto e sem enrolação.",
  },
];

export default function CriacaoDeSitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Criação de Sites Profissionais",
              description:
                "Desenvolvimento de sites empresariais com SEO técnico avançado incluso, painel administrativo completo e hospedagem profissional na Vercel.",
              price: "497",
              slug: "criacao-de-sites",
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
              { name: "Criação de Sites", url: `${SITE_URL}/criacao-de-sites` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <Hero
        titulo="Criação de Sites Profissionais que Aparecem no Google e Vendem"
        subtitulo={`Sites institucionais com SEO técnico avançado incluso desde o primeiro dia. Painel administrativo, hospedagem na Vercel e foco total em conversão. ${PRICES.institucional}.`}
        badge="🌐 Site Institucional"
        whatsappMsg="Olá! Quero um orçamento para criação de site profissional."
        ctaHref="/criacao-de-sites/quanto-custa"
      />

      {/* O que está incluso */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0A1628] mb-3">
                Tudo que seu site precisa, incluso no preço
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Nenhuma surpresa no fim. Nenhum extra escondido. O que está listado aqui é o que você recebe — sem custo adicional.
              </p>
              <ul className="space-y-3">
                {[
                  { item: "Design responsivo mobile-first (celular, tablet e desktop)", impacto: "+70% das buscas vêm do celular" },
                  { item: "SEO técnico: meta tags, sitemap XML e robots.txt", impacto: "Indexação correta no Google desde o dia 1" },
                  { item: "Schema JSON-LD para Rich Snippets no Google", impacto: "Seu site se destaca nos resultados com estrelas e FAQ" },
                  { item: "Painel administrativo completo para você gerenciar", impacto: "Zero dependência de programador" },
                  { item: "Blog integrado para produção de conteúdo", impacto: "Conteúdo que atrai tráfego orgânico no longo prazo" },
                  { item: "Botão fixo de WhatsApp + formulário de contato", impacto: "Conversão em todas as telas" },
                  { item: "Hospedagem profissional na Vercel (HTTPS grátis)", impacto: "99.9% de uptime, velocidade máxima" },
                  { item: "Core Web Vitals otimizados — Lighthouse 95+", impacto: "Google ranqueia melhor sites rápidos" },
                  { item: "OpenGraph para compartilhamento em redes sociais", impacto: "Seus links ficam bonitos no WhatsApp e Instagram" },
                  { item: "Google Analytics e Search Console configurados", impacto: "Você acompanha todo tráfego e performance" },
                ].map(({ item, impacto }) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                      <span className="block text-xs text-gray-400 mt-0.5">{impacto}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white sticky top-28">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-400 text-xs font-bold tracking-widest">SITE INSTITUCIONAL</span>
              </div>
              <div className="text-5xl font-extrabold text-white mb-1">R$ 497</div>
              <p className="text-gray-400 text-sm mb-6">
                Ou em até 12x no cartão — sem juros
              </p>
              <ul className="space-y-2.5 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Até 8 páginas completas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Prazo: até 15 dias úteis
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2 rodadas de revisão inclusas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Treinamento do painel admin incluso
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Suporte pós-entrega via WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SEO técnico completo (não é extra)
                </li>
              </ul>
              <WhatsAppButton
                message="Olá! Quero começar meu site institucional. Pode me explicar o processo?"
                className="w-full justify-center py-3.5 text-base"
              >
                Começar agora →
              </WhatsAppButton>
              <div className="mt-4 flex gap-3 justify-center text-xs text-gray-500">
                <Link href="/criacao-de-sites/quanto-custa" className="hover:text-gray-300 underline">
                  Ver tabela de preços
                </Link>
                <Link href="/criacao-de-sites/orcamento" className="hover:text-gray-300 underline">
                  Pedir orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo — como funciona */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] text-center mb-4">
            Do briefing ao site no ar: como funciona
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Um processo transparente, sem surpresas e com prazo definido em contrato.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                passo: "1",
                titulo: "Briefing",
                desc: "Conversamos no WhatsApp para entender seu negócio, objetivo e público. Sem formulário longo. Leva menos de 30 minutos.",
              },
              {
                passo: "2",
                titulo: "Proposta",
                desc: "Enviamos a proposta com escopo, prazo e preço. Você aprova, pagamos a entrada e o projeto começa.",
              },
              {
                passo: "3",
                titulo: "Desenvolvimento",
                desc: "Construímos o site com SEO configurado desde o primeiro arquivo. Você recebe atualizações durante o processo.",
              },
              {
                passo: "4",
                titulo: "Entrega + Treinamento",
                desc: "Site no ar, Google Analytics configurado e treinamento do painel admin. Você já sai gerenciando sozinho.",
              },
            ].map((p) => (
              <div key={p.passo} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                  <div className="w-8 h-8 bg-[#0A1628] text-white text-sm font-bold rounded-full flex items-center justify-center mb-4">
                    {p.passo}
                  </div>
                  <h3 className="font-bold text-[#0A1628] mb-2">{p.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] text-center mb-4">
            Criamos sites para qualquer segmento
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Mais de +200 sites entregues em segmentos como:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Médicos e clínicas",
              "Advogados",
              "Dentistas",
              "Psicólogos",
              "Academias",
              "Restaurantes",
              "Imobiliárias",
              "Construtoras",
              "Lojas físicas",
              "Contadores",
              "Arquitetos",
              "Engenheiros",
              "Coaches",
              "Educação",
              "Salões de beleza",
              "Pet shops",
              "Consultórios",
              "Escritórios",
            ].map((nicho) => (
              <span
                key={nicho}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {nicho}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <WhatsAppButton
              message="Olá! Quero criar um site profissional para meu negócio. Pode me ajudar?"
              className="px-8 py-4 text-base"
            >
              Quero meu site profissional
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <Diferenciais />

      <FAQ items={faqs} title="Dúvidas sobre Criação de Sites" />

      <CidadesGrid titulo="Criação de Sites por Cidade" />
    </>
  );
}
