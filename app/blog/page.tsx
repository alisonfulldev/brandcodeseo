import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Dicas de Sites, SEO e Marketing Digital",
  description:
    "Blog da BrandCode Solutions com dicas práticas de criação de sites, SEO técnico, marketing digital e como vender mais pela internet.",
  slug: "blog",
});

const posts = [
  {
    slug: "quanto-custa-criar-um-site-profissional",
    titulo: "Quanto custa criar um site profissional em 2025?",
    resumo: "Descubra os preços reais de sites institucionais, lojas virtuais e landing pages no Brasil.",
    categoria: "Preços",
    data: "2025-01-15",
  },
  {
    slug: "seo-tecnico-para-pequenas-empresas",
    titulo: "SEO técnico para pequenas empresas: o guia completo",
    resumo: "Como pequenas empresas podem aparecer no Google com SEO técnico avançado.",
    categoria: "SEO",
    data: "2025-01-10",
  },
  {
    slug: "landing-page-vs-site-institucional",
    titulo: "Landing page ou site institucional: qual escolher?",
    resumo: "Entenda as diferenças e saiba qual é o melhor para o seu objetivo de negócio.",
    categoria: "Estratégia",
    data: "2025-01-05",
  },
  {
    slug: "core-web-vitals-o-que-sao",
    titulo: "Core Web Vitals: o que são e por que afetam seu Google",
    resumo: "Os fatores de experiência da página que o Google usa para rankear sites em 2025.",
    categoria: "SEO",
    data: "2024-12-28",
  },
  {
    slug: "como-criar-loja-virtual-do-zero",
    titulo: "Como criar uma loja virtual do zero em 2025",
    resumo: "Passo a passo completo para lançar seu e-commerce com SEO e integração de pagamento.",
    categoria: "E-commerce",
    data: "2024-12-20",
  },
  {
    slug: "schema-markup-para-seo",
    titulo: "Schema Markup: como aparecer com Rich Snippets no Google",
    resumo: "Guia prático de marcação estruturada JSON-LD para destacar seu site nos resultados de busca.",
    categoria: "SEO",
    data: "2024-12-15",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
            ])
          ),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Blog</h1>
          <p className="mt-4 text-gray-300 text-lg">
            Dicas práticas de sites, SEO e marketing digital para crescer na internet.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-32 bg-gradient-to-br from-[#0A1628] to-[#1E40AF]" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {post.categoria}
                  </span>
                  <h2 className="font-bold text-[#0A1628] mt-3 mb-2 text-base leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                      {post.titulo}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{post.resumo}</p>
                  <time className="text-xs text-gray-400" dateTime={post.data}>
                    {new Date(post.data).toLocaleDateString("pt-BR")}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
