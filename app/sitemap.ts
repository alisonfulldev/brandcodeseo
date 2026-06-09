import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import cidades from "@/data/cidades.json";
import nichos from "@/data/nichos.json";
import tiposSoftware from "@/data/tipos-software.json";

const now = new Date();

const slugsSobMedida = [
  "erp", "crm", "sistema-de-gestao", "app-mobile", "sistema-de-agendamento",
  "chatbot-com-ia", "plataforma-ead", "e-commerce", "marketplace",
  "sistema-de-assinaturas", "dashboard-bi", "saas", "portal-do-cliente",
  "sistema-financeiro", "controle-de-estoque",
];

const processosAutomacao = tiposSoftware.filter(
  (t) => t.categoria === "automacao" || t.categoria === "integracao"
);

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/software-sob-medida`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  { url: `${SITE_URL}/automacao-de-processos`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  { url: `${SITE_URL}/chatbot-whatsapp`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  { url: `${SITE_URL}/ia-para-negocios`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  { url: `${SITE_URL}/desenvolvimento-de-app-mobile`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/quanto-custa/sistema-de-gestao`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
];

// /sistema-para/[segmento] — 30 pages
const sistemaSegmentoRoutes: MetadataRoute.Sitemap = nichos.map((nicho) => ({
  url: `${SITE_URL}/sistema-para/${nicho.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.85,
}));

// /ia-para/[segmento] — 30 pages
const iaSegmentoRoutes: MetadataRoute.Sitemap = nichos.map((nicho) => ({
  url: `${SITE_URL}/ia-para/${nicho.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

// /chatbot-para/[segmento] — 30 pages
const chatbotSegmentoRoutes: MetadataRoute.Sitemap = nichos.map((nicho) => ({
  url: `${SITE_URL}/chatbot-para/${nicho.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

// /desenvolvimento-de/[tipo] — 38 pages
const desenvolvimentoTipoRoutes: MetadataRoute.Sitemap = tiposSoftware.map((tipo) => ({
  url: `${SITE_URL}/desenvolvimento-de/${tipo.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.85,
}));

// /quanto-custa/[tipo] — 38 pages
const quantoCustaTipoRoutes: MetadataRoute.Sitemap = tiposSoftware.map((tipo) => ({
  url: `${SITE_URL}/quanto-custa/${tipo.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.85,
}));

// /sob-medida/[tipo] — 15 pages
const sobMedidaRoutes: MetadataRoute.Sitemap = tiposSoftware
  .filter((t) => slugsSobMedida.includes(t.slug))
  .map((tipo) => ({
    url: `${SITE_URL}/sob-medida/${tipo.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

// /automacao-de/[processo] — ~7 pages
const automacaoProcessoRoutes: MetadataRoute.Sitemap = processosAutomacao.map((tipo) => ({
  url: `${SITE_URL}/automacao-de/${tipo.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

// /desenvolvimento-de-software-em/[cidade] — all cities
const softwareCidadeRoutes: MetadataRoute.Sitemap = cidades.map((cidade) => ({
  url: `${SITE_URL}/desenvolvimento-de-software-em/${cidade.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: cidade.populacao > 500000 ? 0.85 : cidade.populacao > 100000 ? 0.75 : 0.65,
}));

// /software-para/[segmento]/[cidade] — top 20 × top 50 = 1000 pages
const topNichos = nichos.slice(0, 20);
const topCidades = [...cidades]
  .sort((a, b) => b.populacao - a.populacao)
  .slice(0, 50);

const softwareSegmentoCidadeRoutes: MetadataRoute.Sitemap = topNichos.flatMap((nicho) =>
  topCidades.map((cidade) => ({
    url: `${SITE_URL}/software-para/${nicho.slug}/${cidade.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: cidade.populacao > 500000 ? 0.8 : 0.65,
  }))
);

// /desenvolvimento-de/[tipo]/[cidade] — top 20 × top 50 = 1000 pages
const topTipos = tiposSoftware.slice(0, 20);

const desenvolvimentoTipoCidadeRoutes: MetadataRoute.Sitemap = topTipos.flatMap((tipo) =>
  topCidades.map((cidade) => ({
    url: `${SITE_URL}/desenvolvimento-de/${tipo.slug}/${cidade.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: cidade.populacao > 500000 ? 0.75 : 0.6,
  }))
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...sistemaSegmentoRoutes,
    ...iaSegmentoRoutes,
    ...chatbotSegmentoRoutes,
    ...desenvolvimentoTipoRoutes,
    ...quantoCustaTipoRoutes,
    ...sobMedidaRoutes,
    ...automacaoProcessoRoutes,
    ...softwareCidadeRoutes,
    ...softwareSegmentoCidadeRoutes,
    ...desenvolvimentoTipoCidadeRoutes,
  ];
}
