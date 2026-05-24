import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/seo/schema";
import { SITE_URL, PRICES } from "@/lib/constants";
import { getCidade, getCidadesVizinhas } from "@/lib/cidades";
import { getHeadline, getAbertura, getDepoimentos } from "@/lib/conteudo";
import cidades from "@/data/cidades.json";
import Hero from "@/components/sections/Hero";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Params = { cidade: string };

export async function generateStaticParams() {
  return cidades.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { cidade: slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) return {};

  const headline = getHeadline(cidade);

  return buildMetadata({
    title: `Criação de Sites em ${cidade.nome} — ${headline}`,
    description: `Criação de sites profissionais em ${cidade.nome}, ${cidade.estado}. SEO técnico avançado incluso, painel administrativo e foco em conversão. ${PRICES.institucional}. Apareça no Google e venda mais.`,
    slug: `criacao-de-sites/${cidade.slug}`,
    keywords: [
      `criação de sites ${cidade.nome}`,
      `site profissional ${cidade.nome}`,
      `agência de sites ${cidade.nome}`,
      `criar site ${cidade.nome}`,
      `desenvolvimento web ${cidade.nome}`,
      `site para empresa ${cidade.nome} ${cidade.estado}`,
      `criação de sites ${cidade.estado}`,
    ],
  });
}

export default async function CriacaoDeSitesCidadePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { cidade: slug } = await params;
  const cidade = getCidade(slug);
  if (!cidade) notFound();

  const headline = getHeadline(cidade);
  const abertura = getAbertura(cidade);
  const depoimentos = getDepoimentos(slug);
  const vizinhas = getCidadesVizinhas(slug, 5);

  const faqs = [
    {
      question: `Vocês criam sites para empresas em ${cidade.nome}?`,
      answer: `Sim! Atendemos ${cidade.nome} e toda a região de ${cidade.estado} — 100% online, sem precisar de visita presencial. Briefing, aprovação e entrega tudo via WhatsApp e videoconferência. Já atendemos clientes em mais de 50 cidades brasileiras.`,
    },
    {
      question: `Quanto custa criar um site profissional em ${cidade.nome}?`,
      answer: `Site Institucional ${PRICES.institucional}, Landing Page ${PRICES.landingPage} e Loja Virtual ${PRICES.lojaVirtual}. Mesmo preço para todo o Brasil — sem taxa extra por ser de ${cidade.nome}. Nada de mensalidade ou cobrança de manutenção.`,
    },
    {
      question: `Meu site vai aparecer nas buscas de "${cidade.nome}" no Google?`,
      answer: `Sim. Configuramos SEO local específico para ${cidade.nome}: title tags geolocalizadas, meta description, schema markup LocalBusiness, palavras-chave por cidade e integração com Google Search Console. Seu cliente te acha no Google.`,
    },
    {
      question: `Qual o prazo de entrega para um site em ${cidade.nome}?`,
      answer: `Landing page em até 5 dias úteis. Site institucional em até 15 dias úteis. Loja virtual em até 25 dias úteis. Prazos registrados em contrato — sem enrolação. Você recebe atualizações diárias via WhatsApp.`,
    },
    {
      question: `O que está incluso no site para minha empresa de ${cidade.nome}?`,
      answer: `SEO técnico avançado, painel administrativo para você mesmo editar, integração com WhatsApp, Google Analytics, Search Console, sitemap.xml, robots.txt, certificado SSL, design responsivo para mobile, hospedagem de alta performance na Vercel e suporte pós-entrega. Tudo incluso no preço.`,
    },
  ];

  const whatsappMsg = `Olá! Preciso de um site para minha empresa em ${cidade.nome}. Podem me passar um orçamento?`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({ cidade: cidade.nome, estado: cidade.estado })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Criação de Sites em ${cidade.nome}`,
              description: `Desenvolvimento de sites profissionais com SEO técnico avançado em ${cidade.nome}, ${cidade.estado}. Painel administrativo, integração WhatsApp e foco em conversão real.`,
              price: "497",
              slug: `criacao-de-sites/${cidade.slug}`,
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
              {
                name: cidade.nome,
                url: `${SITE_URL}/criacao-de-sites/${cidade.slug}`,
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* HERO */}
      <Hero
        titulo={`Criação de Sites em ${cidade.nome} — ${headline}`}
        subtitulo={`Agência digital com SEO técnico avançado já incluso. Painel administrativo, integração WhatsApp e foco total em conversão. Para empresas de ${cidade.nome}, ${cidade.estado}. ${PRICES.institucional}.`}
        badge={`${cidade.nome} — ${cidade.estado}`}
        whatsappMsg={whatsappMsg}
        ctaHref="/criacao-de-sites/quanto-custa"
      />

      {/* ABERTURA COM CONTEXTO LOCAL */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-gray-700 leading-relaxed">{abertura}</p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            A BrandCode Solutions cria sites profissionais para empresas de{" "}
            {cidade.nome} com SEO técnico avançado já incluso no preço — não é
            um extra. Nossos clientes aparecem no Google e recebem contatos pelo
            próprio site, sem depender só de indicações.
          </p>
        </div>
      </section>

      {/* POR QUE [CIDADE] PRECISA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4 text-center">
            Por que empresas em {cidade.nome} precisam de um site que vende?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Ter um site bonito não basta. Em {cidade.nome}, seus concorrentes já
            estão no Google. A questão é: você aparece antes deles?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                titulo: "Visibilidade no Google",
                desc: `Otimizamos para você aparecer nas buscas de "${cidade.nome}" — exatamente quando seu cliente está procurando seu serviço.`,
              },
              {
                icon: "📱",
                titulo: "100% Responsivo para Mobile",
                desc: `A maioria dos usuários de ${cidade.nome} acessa pelo celular. Seu site carrega rápido e funciona perfeitamente em qualquer tela.`,
              },
              {
                icon: "⚡",
                titulo: "Velocidade e Core Web Vitals",
                desc: "Sites lentos perdem clientes e posições no Google. Otimizamos performance técnica para máxima velocidade de carregamento.",
              },
              {
                icon: "💬",
                titulo: "WhatsApp que Converte",
                desc: `Botão fixo e CTAs estratégicos em todas as seções. Seu cliente de ${cidade.nome} chega direto no seu WhatsApp com um clique.`,
              },
              {
                icon: "🛠️",
                titulo: "Painel Administrativo",
                desc: `Você atualiza seu site de ${cidade.nome} sozinho — textos, imagens, produtos — sem depender de programador.`,
              },
              {
                icon: "📈",
                titulo: "Analytics e Monitoramento",
                desc: "Google Analytics e Search Console configurados. Você sabe de onde vêm seus clientes e o que converte mais.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="text-2xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA DE PREÇOS */}
      <section className="py-20 bg-white" id="precos">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-4 text-center">
            Preços para sites em {cidade.nome}
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Sem taxas de deslocamento. Sem cobranças extras. O mesmo preço justo
            para todo o Brasil — incluindo {cidade.nome}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tipo: "Landing Page",
                preco: "Planos a partir de R$ 90/mês",
                prazo: "5 dias úteis",
                desc: "Ideal para campanhas de Google Ads, Meta Ads ou captura de leads qualificados.",
                href: "/landing-page/preco",
                destaque: false,
              },
              {
                tipo: "Site Institucional",
                preco: "Planos a partir de R$ 90/mês",
                prazo: "15 dias úteis",
                desc: "Site completo com múltiplas páginas, SEO avançado e painel administrativo incluso.",
                href: "/criacao-de-sites/quanto-custa",
                destaque: true,
              },
              {
                tipo: "Loja Virtual",
                preco: "Planos a partir de R$ 90/mês",
                prazo: "25 dias úteis",
                desc: "E-commerce completo com pagamento integrado, estoque e gestão de pedidos.",
                href: "/loja-virtual/preco",
                destaque: false,
              },
            ].map((plano) => (
              <div
                key={plano.tipo}
                className={`rounded-2xl p-8 border ${
                  plano.destaque
                    ? "bg-[#0A1628] text-white border-[#0A1628] shadow-xl"
                    : "bg-gray-50 text-[#0A1628] border-gray-100"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                    plano.destaque ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  {plano.tipo}
                </p>
                <p
                  className={`text-3xl font-extrabold mb-1 ${
                    plano.destaque ? "text-white" : "text-[#0A1628]"
                  }`}
                >
                  a partir de {plano.preco}
                </p>
                <p
                  className={`text-xs mb-5 ${
                    plano.destaque ? "text-blue-200" : "text-gray-400"
                  }`}
                >
                  Prazo: {plano.prazo}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    plano.destaque ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plano.desc}
                </p>
                <Link
                  href={plano.href}
                  className={`text-sm font-semibold underline underline-offset-4 transition-colors ${
                    plano.destaque
                      ? "text-blue-300 hover:text-white"
                      : "text-blue-700 hover:text-[#0A1628]"
                  }`}
                >
                  Ver o que está incluso →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-12 text-center">
            O que clientes dizem sobre nossos sites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex mb-4" aria-label="5 estrelas">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#0A1628]">{d.nome}</p>
                  <p className="text-sm text-gray-400">
                    {d.cargo} — {cidade.nome}, {cidade.estado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para ter um site que vende em {cidade.nome}?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Fale agora com um especialista. Respondemos em minutos pelo
            WhatsApp e fazemos um orçamento sem compromisso para sua empresa em{" "}
            {cidade.nome}.
          </p>
          <WhatsAppButton message={whatsappMsg} className="px-10 py-4 text-base">
            Solicitar orçamento grátis
          </WhatsAppButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#0A1628] mb-12 text-center">
            Dúvidas sobre criação de sites em {cidade.nome}
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-semibold text-[#0A1628] text-left">
                    {faq.question}
                  </span>
                  <span
                    className="text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INTERLINKING — CIDADES DO MESMO ESTADO */}
      {vizinhas.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-[#0A1628] mb-6">
              Criação de sites em outras cidades de {cidade.estado}
            </h2>
            <div className="flex flex-wrap gap-3">
              {vizinhas.map((v) => (
                <Link
                  key={v.slug}
                  href={`/criacao-de-sites/${v.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#0A1628] hover:border-blue-400 hover:text-blue-700 transition-colors"
                >
                  Sites em {v.nome}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
