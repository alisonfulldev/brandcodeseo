import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import cidades from "@/data/cidades.json";
import nichos from "@/data/nichos.json";

const now = new Date();

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${SITE_URL}/criacao-de-sites`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${SITE_URL}/loja-virtual`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${SITE_URL}/landing-page`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${SITE_URL}/software-sob-medida`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/sobre`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/contato`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/portfolio`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/blog`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  },
  // Subpáginas comerciais
  {
    url: `${SITE_URL}/criacao-de-sites/quanto-custa`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/criacao-de-sites/orcamento`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/criacao-de-sites/beneficios`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/loja-virtual/preco`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/landing-page/preco`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

const cidadeRoutes: MetadataRoute.Sitemap = cidades.flatMap((cidade) => [
  {
    url: `${SITE_URL}/criacao-de-sites/${cidade.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: cidade.populacao > 500000 ? 0.85 : cidade.populacao > 100000 ? 0.75 : 0.65,
  },
  {
    url: `${SITE_URL}/loja-virtual/${cidade.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: cidade.populacao > 500000 ? 0.8 : cidade.populacao > 100000 ? 0.7 : 0.6,
  },
  {
    url: `${SITE_URL}/landing-page/${cidade.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: cidade.populacao > 500000 ? 0.8 : cidade.populacao > 100000 ? 0.7 : 0.6,
  },
]);

const nichoRoutes: MetadataRoute.Sitemap = nichos.map((nicho) => ({
  url: `${SITE_URL}/site-para-${nicho.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.85,
}));

// Nicho + Cidade: top 20 nichos × top 50 cidades = 1000 URLs
const topNichos = nichos.slice(0, 20);
const topCidades = [...cidades]
  .sort((a, b) => b.populacao - a.populacao)
  .slice(0, 50);

const nichoCidadeRoutes: MetadataRoute.Sitemap = topNichos.flatMap((nicho) =>
  topCidades.map((cidade) => ({
    url: `${SITE_URL}/site-para-${nicho.slug}-em-${cidade.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: cidade.populacao > 500000 ? 0.8 : 0.65,
  }))
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...nichoRoutes,
    ...cidadeRoutes,
    ...nichoCidadeRoutes,
  ];
}
