import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { tipoIndexavel, nichoIndexavel } from "@/lib/conteudo";
import { getPosts } from "@/lib/blog";
import nichos from "@/data/nichos.json";
import tiposSoftware from "@/data/tipos-software.json";

// Data fixa: atualize ao mudar conteúdo de fato. `new Date()` marcava todas as URLs
// como modificadas a cada deploy e o Google passa a ignorar o lastmod.
const now = new Date("2026-09-26");

// Só entram no sitemap páginas com conteúdo próprio. Templates sem conteúdo
// (chatbot-para, ia-para, hubs de segmento) ficam com noindex até serem enriquecidos.

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/software-sob-medida`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  { url: `${SITE_URL}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  // Hubs de navegação
  { url: `${SITE_URL}/segmentos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/tipos-de-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/mapa-do-site`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
];

// /desenvolvimento-de/[tipo]
const desenvolvimentoTipoRoutes: MetadataRoute.Sitemap = tiposSoftware
  .filter((tipo) => tipoIndexavel(tipo.slug))
  .map((tipo) => ({
    url: `${SITE_URL}/desenvolvimento-de/${tipo.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

// /sistema-para/[segmento]
const sistemaSegmentoRoutes: MetadataRoute.Sitemap = nichos
  .filter((nicho) => nichoIndexavel(nicho.slug))
  .map((nicho) => ({
    url: `${SITE_URL}/sistema-para/${nicho.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

// /blog e artigos
const blogRoutes: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/blog`, lastModified: new Date(getPosts()[0]?.publicadoEm ?? now), changeFrequency: "weekly", priority: 0.7 },
  ...getPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.atualizadoEm),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...desenvolvimentoTipoRoutes, ...sistemaSegmentoRoutes, ...blogRoutes];
}
