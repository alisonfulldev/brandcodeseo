import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/constants";
import { getPost, getPosts, tempoLeitura } from "@/lib/blog";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TextoRico from "@/components/blog/TextoRico";

type Params = { slug: string };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.titulo,
    description: post.descricao,
    slug: `blog/${post.slug}`,
    keywords: post.palavrasChave,
  });
}

function formatarData(data: string) {
  return new Date(`${data}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const outros = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const whatsappMsg = `Olá! Li o artigo "${post.titulo}" e quero conversar sobre um projeto.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ titulo: post.titulo, descricao: post.descricao, slug: post.slug, autor: post.autor, publicadoEm: post.publicadoEm, atualizadoEm: post.atualizadoEm })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Início", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.titulo, url: `${SITE_URL}/blog/${post.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }} />

      <header className="bg-[#0A1628] pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Trilha" className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Início</Link>
            {" / "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <span className="text-xs font-semibold text-blue-300 bg-blue-900/40 px-2 py-1 rounded">{post.categoria}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">{post.titulo}</h1>
          <p className="mt-4 text-gray-300 text-lg">{post.resumo}</p>
          <p className="mt-6 text-sm text-gray-400">
            Por {post.autor} · <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time>
            {post.atualizadoEm !== post.publicadoEm && <> · atualizado em <time dateTime={post.atualizadoEm}>{formatarData(post.atualizadoEm)}</time></>}
            {" · "}
            {tempoLeitura(post)} min de leitura
          </p>
        </div>
      </header>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-gray-700 leading-relaxed">
          {post.secoes.map((secao) => (
            <section key={secao.titulo} className="mb-12">
              <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">{secao.titulo}</h2>
              {secao.paragrafos?.map((p) => (
                <p key={p.slice(0, 50)} className="mb-4"><TextoRico texto={p} /></p>
              ))}
              {secao.lista && (
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  {secao.lista.map((item) => (
                    <li key={item.slice(0, 50)}><TextoRico texto={item} /></li>
                  ))}
                </ul>
              )}
              {secao.tabela && (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {secao.tabela.cabecalho.map((c) => (
                          <th key={c} className="text-left font-semibold text-[#0A1628] px-4 py-3 border-b border-gray-200">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {secao.tabela.linhas.map((linha) => (
                        <tr key={linha.join("|")} className="border-b border-gray-100">
                          {linha.map((celula, i) => (
                            <td key={i} className="px-4 py-3 align-top"><TextoRico texto={celula} /></td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {secao.paragrafosFinais?.map((p) => (
                <p key={p.slice(0, 50)} className="mb-4"><TextoRico texto={p} /></p>
              ))}
            </section>
          ))}

          <aside className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center my-12">
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Quer saber quanto custaria o seu projeto?</h2>
            <p className="text-gray-600 text-sm mb-6">
              Conte o que você precisa. Em uma conversa curta mostramos a faixa de investimento e o prazo, sem compromisso.
            </p>
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Falar com a BrandCode
            </WhatsAppButton>
          </aside>

          {post.relacionados.length > 0 && (
            <nav aria-label="Páginas relacionadas" className="mb-4">
              <h2 className="text-lg font-bold text-[#0A1628] mb-3">Veja também</h2>
              <ul className="flex flex-wrap gap-2">
                {post.relacionados.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="inline-block text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5 hover:bg-blue-100">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>

      <FAQ items={post.faqs} title="Perguntas frequentes" />

      {outros.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-8 text-center">Outros artigos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outros.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-blue-600">{p.categoria}</span>
                  <h3 className="font-bold text-[#0A1628] mt-2 leading-snug">{p.titulo}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
