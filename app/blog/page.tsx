import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { getPosts, tempoLeitura } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Custos, Decisões e Tecnologia para Empresas",
  description:
    "Artigos da BrandCode Solutions sobre quanto custa um software, sistema pronto ou sob medida, chatbots no WhatsApp, automação e IA para empresas.",
  slug: "blog",
});

export default function BlogPage() {
  const posts = getPosts();

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
            Respostas diretas para quem está decidindo investir em software: custos, prazos e como escolher.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block p-6 h-full">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {post.categoria}
                  </span>
                  <h2 className="font-bold text-[#0A1628] mt-3 mb-2 text-base leading-snug">{post.titulo}</h2>
                  <p className="text-gray-500 text-sm mb-4">{post.resumo}</p>
                  <p className="text-xs text-gray-400">
                    <time dateTime={post.publicadoEm}>
                      {new Date(`${post.publicadoEm}T12:00:00`).toLocaleDateString("pt-BR")}
                    </time>
                    {" · "}
                    {tempoLeitura(post)} min de leitura
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
