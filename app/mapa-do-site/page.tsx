import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import nichos from "@/data/nichos.json";
import tiposSoftware from "@/data/tipos-software.json";
import { hrefSistemaPara } from "@/lib/rotas";

export const metadata: Metadata = buildMetadata({
  title: "Mapa do Site",
  description:
    "Navegue por todas as páginas da BrandCode Solutions: serviços, sistemas por segmento, tipos de software e muito mais.",
  slug: "mapa-do-site",
});

const topNichos = nichos.slice(0, 20);
const topTipos = tiposSoftware.slice(0, 20);

const secoes = [
  {
    titulo: "Páginas Principais",
    links: [
      { href: "/", label: "Início" },
      { href: "/software-sob-medida", label: "Software Sob Medida" },
      { href: "/portfolio", label: "Portfólio" },
      { href: "/sobre", label: "Sobre Nós" },
      { href: "/contato", label: "Contato" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    titulo: "Hubs de Navegação",
    links: [
      { href: "/segmentos", label: "Software por Segmento" },
      { href: "/tipos-de-software", label: "Tipos de Software" },
      { href: "/mapa-do-site", label: "Mapa do Site" },
    ],
  },
  {
    titulo: "Software por Segmento (Top 20)",
    links: topNichos.map((n) => ({
      href: hrefSistemaPara(n.slug),
      label: `Sistema para ${n.nome}`,
    })),
  },
  {
    titulo: "Tipos de Software (Top 20)",
    links: topTipos.map((t) => ({
      href: `/desenvolvimento-de/${t.slug}`,
      label: `Desenvolvimento de ${t.nome}`,
    })),
  },
];

export default function MapaDoSitePage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white">Mapa do Site</h1>
          <p className="mt-4 text-gray-300">
            Navegue por todas as páginas da BrandCode Solutions.
          </p>
        </div>
      </section>

      <section className="bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-14">
            {secoes.map((secao) => (
              <div key={secao.titulo}>
                <h2 className="text-xl font-bold text-[#0A1628] mb-5 pb-2 border-b border-gray-100">
                  {secao.titulo}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {secao.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
