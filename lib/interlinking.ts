/**
 * Sistema de internal linking da BrandCode Solutions.
 *
 * Regras implementadas:
 *  - Página de cidade  → 5 cidades do mesmo estado (por população)
 *  - Página de nicho   → até 10 nichos relacionados (clusters semânticos)
 *  - Página de serviço → 20 maiores cidades do Brasil
 *  - Home              → todos os serviços + 20 maiores cidades + 15 maiores nichos
 *  - getBreadcrumb     → gera trilha de migalhas para qualquer URL
 *  - getHubLinks       → todas as páginas hub principais
 */

import { SITE_URL } from "@/lib/constants";
import {
  getCidade,
  getCidadesByEstado,
  getTopCidades,
  getAllCidades,
  type Cidade,
} from "@/lib/cidades";
import { getNicho, getAllNichos, type Nicho } from "@/lib/nichos";

// ─── Tipos exportados ────────────────────────────────────────────────────────

export interface InternalLink {
  href: string;
  label: string;
  title?: string;
  description?: string;
}

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

// ─── Clusters semânticos de nichos ───────────────────────────────────────────
// Agrupa slugs por afinidade de setor. Cada página de nicho linka para os
// outros membros do seu cluster (exceto ela mesma).

const NICHO_CLUSTERS: readonly string[][] = [
  // Saúde
  [
    "medico",
    "dentista",
    "psicologo",
    "nutricionista",
    "clinica",
    "fisioterapeuta",
    "fonoaudiologo",
    "terapeuta",
    "consultorio-medico",
    "clinica-veterinaria",
    "farmacia",
    "clinica-de-reabilitacao",
    "clinica-de-emagrecimento",
    "clinica-odontologica",
    "clinica-estetica-corporal",
  ],
  // Direito / Finanças / Gestão
  [
    "advogado",
    "advocacia-trabalhista",
    "advocacia-criminal",
    "contabilidade",
    "corretor-de-seguros",
    "sindico-profissional",
    "distribuidora",
  ],
  // Construção / Arquitetura / Reformas
  [
    "engenheiro",
    "arquiteto",
    "construtora",
    "eletricista",
    "encanador",
    "pintor",
    "limpeza-e-conservacao",
    "dedetizadora",
  ],
  // Alimentação / Hospitalidade
  [
    "restaurante",
    "hotel",
    "sorveteria",
    "padaria",
    "buffet",
    "agencia-de-viagens",
  ],
  // Beleza / Estética / Bem-estar
  [
    "salao-de-beleza",
    "estetica",
    "studio-de-pilates",
    "clinica-estetica-corporal",
  ],
  // Fitness / Saúde pessoal
  [
    "academia",
    "personal-trainer",
    "coach",
    "studio-de-pilates",
  ],
  // Imóveis / Construção
  [
    "imobiliaria",
    "construtora",
    "engenheiro",
    "arquiteto",
    "sindico-profissional",
  ],
  // Automotivo / Serviços urgentes
  [
    "oficina-mecanica",
    "assistencia-tecnica",
    "eletricista",
    "encanador",
    "dedetizadora",
    "transportadora",
  ],
  // Educação / Formação
  [
    "escola",
    "escola-de-idiomas",
    "infoprodutor",
    "coach",
  ],
  // Digital / Tecnologia / Criativo
  [
    "e-commerce",
    "marketing-digital",
    "desenvolvedor-de-software",
    "designer-grafico",
    "fotografo",
    "infoprodutor",
  ],
  // Pet
  [
    "pet-shop",
    "clinica-veterinaria",
  ],
  // Social / Religioso
  [
    "pastor-e-igreja",
    "ong",
  ],
  // Serviços profissionais B2B
  [
    "contabilidade",
    "marketing-digital",
    "desenvolvedor-de-software",
    "transportadora",
    "distribuidora",
  ],
] as const;

// Mapa invertido: slug → cluster index(es)
const _nichoClusterMap = new Map<string, Set<number>>();
NICHO_CLUSTERS.forEach((cluster, idx) => {
  cluster.forEach((slug) => {
    if (!_nichoClusterMap.has(slug)) {
      _nichoClusterMap.set(slug, new Set());
    }
    _nichoClusterMap.get(slug)!.add(idx);
  });
});

// ─── Rótulos legíveis de segmentos de URL ────────────────────────────────────

const URL_SEGMENT_LABELS: Record<string, string> = {
  "criacao-de-sites": "Criação de Sites",
  "loja-virtual": "Loja Virtual",
  "landing-page": "Landing Page",
  "software-sob-medida": "Software Sob Medida",
  blog: "Blog",
  sobre: "Sobre Nós",
  contato: "Contato",
  portfolio: "Portfólio",
  "quanto-custa": "Quanto Custa?",
  orcamento: "Solicitar Orçamento",
  beneficios: "Benefícios",
  preco: "Preço",
};

// ─── 1. getRelatedCidades ─────────────────────────────────────────────────────

/**
 * Retorna cidades do mesmo estado que a cidade informada,
 * ordenadas por população (maior primeiro), excluindo a própria cidade.
 */
export function getRelatedCidades(
  cidadeSlug: string,
  limit = 5
): InternalLink[] {
  const cidade = getCidade(cidadeSlug);
  if (!cidade) return [];

  return getCidadesByEstado(cidade.estado)
    .filter((c) => c.slug !== cidadeSlug)
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, limit)
    .map((c) => ({
      href: `/criacao-de-sites/${c.slug}`,
      label: c.nome,
      title: `Criação de Sites em ${c.nome} — ${c.estado}`,
      description: `Sites profissionais em ${c.nome} com SEO técnico avançado`,
    }));
}

/**
 * Mesma função, mas permite especificar o serviço base da URL.
 */
export function getRelatedCidadesForService(
  cidadeSlug: string,
  servicoSlug: "criacao-de-sites" | "loja-virtual" | "landing-page",
  limit = 5
): InternalLink[] {
  const cidade = getCidade(cidadeSlug);
  if (!cidade) return [];

  const serviceLabel: Record<string, string> = {
    "criacao-de-sites": "Criação de Sites",
    "loja-virtual": "Loja Virtual",
    "landing-page": "Landing Page",
  };

  return getCidadesByEstado(cidade.estado)
    .filter((c) => c.slug !== cidadeSlug)
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, limit)
    .map((c) => ({
      href: `/${servicoSlug}/${c.slug}`,
      label: c.nome,
      title: `${serviceLabel[servicoSlug]} em ${c.nome} — ${c.estado}`,
      description: `${serviceLabel[servicoSlug]} profissional em ${c.nome}`,
    }));
}

// ─── 2. getRelatedNichos ──────────────────────────────────────────────────────

/**
 * Retorna nichos semanticamente relacionados ao nicho informado,
 * baseado em clusters de setor. Exclui o próprio nicho.
 * Filtra apenas slugs que existem em nichos.json.
 */
export function getRelatedNichos(
  nichoSlug: string,
  limit = 10
): InternalLink[] {
  const allNichos = getAllNichos();
  const allSlugs = new Set(allNichos.map((n) => n.slug));

  // Normaliza entrada (aceita "site-para-medico" ou "medico")
  const normalized = nichoSlug.replace(/^site-para-/, "");

  const clusterIndexes = _nichoClusterMap.get(normalized);
  if (!clusterIndexes || clusterIndexes.size === 0) {
    // Fallback: retorna os primeiros nichos do JSON (exceto o próprio)
    return allNichos
      .filter((n) => n.slug !== normalized)
      .slice(0, limit)
      .map((n) => _nichoToLink(n));
  }

  // Coleta todos os slugs dos clusters onde este nicho está
  const candidateSlugs = new Set<string>();
  clusterIndexes.forEach((idx) => {
    NICHO_CLUSTERS[idx].forEach((s) => {
      if (s !== normalized && allSlugs.has(s)) {
        candidateSlugs.add(s);
      }
    });
  });

  const results = [...candidateSlugs]
    .map((slug) => allNichos.find((n) => n.slug === slug))
    .filter((n): n is Nicho => n !== undefined)
    .slice(0, limit)
    .map((n) => _nichoToLink(n));

  // Se não encontrou relacionados suficientes, complementa com outros
  if (results.length < limit) {
    const existing = new Set(results.map((r) => r.href));
    const fallback = allNichos
      .filter(
        (n) =>
          n.slug !== normalized &&
          !existing.has(`/site-para-${n.slug}`)
      )
      .slice(0, limit - results.length)
      .map((n) => _nichoToLink(n));
    results.push(...fallback);
  }

  return results;
}

function _nichoToLink(n: Nicho): InternalLink {
  return {
    href: `/site-para-${n.slug}`,
    label: n.nomeCompleto,
    title: `Site para ${n.nome} — ${SITE_URL}`,
    description: n.descricao,
  };
}

// ─── 3. getBreadcrumb ─────────────────────────────────────────────────────────

/**
 * Gera dados de breadcrumb estruturados para qualquer path do site.
 *
 * Exemplos:
 *  /criacao-de-sites/sao-paulo → Home > Criação de Sites > São Paulo
 *  /site-para-medico-em-sao-paulo → Home > Site para Médico > São Paulo
 *  /blog → Home > Blog
 *  /loja-virtual → Home > Loja Virtual
 */
export function getBreadcrumb(path: string): BreadcrumbEntry[] {
  const crumbs: BreadcrumbEntry[] = [
    { name: "Início", url: SITE_URL },
  ];

  // Remove leading slash e trailing slash
  const clean = path.replace(/^\/|\/$/g, "");
  if (!clean) return crumbs;

  const segments = clean.split("/");

  // ── Casos compostos conhecidos ─────────────────────────────────────────────

  // /site-para-[nicho]-em-[cidade]
  const nichoCidadeMatch = clean.match(
    /^site-para-([^/]+)-em-([^/]+)$/
  );
  if (nichoCidadeMatch) {
    const nichoSlug = nichoCidadeMatch[1];
    const cidadeSlug = nichoCidadeMatch[2];
    const nicho = getNicho(nichoSlug);
    const cidade = getCidade(cidadeSlug);

    crumbs.push({
      name: nicho ? `Site para ${nicho.nome}` : `Site para ${nichoSlug}`,
      url: `${SITE_URL}/site-para-${nichoSlug}`,
    });
    if (cidade) {
      crumbs.push({
        name: cidade.nome,
        url: `${SITE_URL}/${clean}`,
      });
    }
    return crumbs;
  }

  // /site-para-[nicho]
  const nichoMatch = clean.match(/^site-para-([^/]+)$/);
  if (nichoMatch) {
    const nichoSlug = nichoMatch[1];
    const nicho = getNicho(nichoSlug);
    crumbs.push({
      name: nicho ? `Site para ${nicho.nome}` : `Site para ${nichoSlug}`,
      url: `${SITE_URL}/${clean}`,
    });
    return crumbs;
  }

  // ── Resolve segmento a segmento ────────────────────────────────────────────
  let accumulated = "";
  for (const segment of segments) {
    accumulated = accumulated ? `${accumulated}/${segment}` : segment;

    const label = URL_SEGMENT_LABELS[segment];
    if (label) {
      crumbs.push({ name: label, url: `${SITE_URL}/${accumulated}` });
      continue;
    }

    // Tenta resolver como cidade
    const cidade = getCidade(segment);
    if (cidade) {
      crumbs.push({
        name: cidade.nome,
        url: `${SITE_URL}/${accumulated}`,
      });
      continue;
    }

    // Tenta resolver como nicho
    const nicho = getNicho(segment);
    if (nicho) {
      crumbs.push({
        name: nicho.nome,
        url: `${SITE_URL}/${accumulated}`,
      });
      continue;
    }

    // Fallback: capitaliza o slug
    crumbs.push({
      name: segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      url: `${SITE_URL}/${accumulated}`,
    });
  }

  return crumbs;
}

// ─── 4. getHubLinks ───────────────────────────────────────────────────────────

/**
 * Retorna os links das páginas hub principais do site.
 * Usado na home e em sidebars de contexto.
 */
export function getHubLinks(): {
  services: InternalLink[];
  topCidades: InternalLink[];
  topNichos: InternalLink[];
  institutional: InternalLink[];
} {
  const topCidades = getTopCidades(20);
  const allNichos = getAllNichos();

  return {
    services: [
      {
        href: "/criacao-de-sites",
        label: "Criação de Sites",
        title: "Criação de Sites Profissionais com SEO — BrandCode Solutions",
        description:
          "Sites institucionais com SEO técnico avançado, painel admin e foco em conversão",
      },
      {
        href: "/loja-virtual",
        label: "Loja Virtual",
        title: "Loja Virtual Profissional — BrandCode Solutions",
        description:
          "E-commerce completo com catálogo, checkout, SEO e painel administrativo",
      },
      {
        href: "/landing-page",
        label: "Landing Page",
        title: "Landing Page de Alta Conversão — BrandCode Solutions",
        description:
          "Páginas de conversão focadas em captação de leads e vendas diretas",
      },
      {
        href: "/software-sob-medida",
        label: "Software Sob Medida",
        title: "Software Sob Medida — BrandCode Solutions",
        description:
          "Sistemas e aplicações personalizados para necessidades específicas do negócio",
      },
      {
        href: "/criacao-de-sites/quanto-custa",
        label: "Quanto Custa um Site?",
        title: "Quanto Custa um Site Profissional em 2025?",
        description: "Tabela de preços detalhada por tipo de projeto",
      },
      {
        href: "/criacao-de-sites/orcamento",
        label: "Solicitar Orçamento",
        title: "Solicitar Orçamento de Site — BrandCode Solutions",
        description: "Peça seu orçamento personalizado sem compromisso",
      },
    ],

    topCidades: topCidades.map((c: Cidade) => ({
      href: `/criacao-de-sites/${c.slug}`,
      label: c.nome,
      title: `Criação de Sites em ${c.nome} — ${c.estado}`,
      description: `Sites profissionais com SEO em ${c.nome}`,
    })),

    topNichos: allNichos.slice(0, 15).map((n: Nicho) => ({
      href: `/site-para-${n.slug}`,
      label: n.nomeCompleto,
      title: `Site para ${n.nome} — BrandCode Solutions`,
      description: n.descricao,
    })),

    institutional: [
      {
        href: "/sobre",
        label: "Sobre Nós",
        title: "Sobre a BrandCode Solutions",
        description: "Conheça nossa história, equipe e valores",
      },
      {
        href: "/portfolio",
        label: "Portfólio",
        title: "Portfólio de Projetos — BrandCode Solutions",
        description: "Veja os sites que já entregamos para nossos clientes",
      },
      {
        href: "/blog",
        label: "Blog",
        title: "Blog de Criação de Sites e SEO — BrandCode Solutions",
        description: "Artigos sobre criação de sites, SEO e marketing digital",
      },
      {
        href: "/contato",
        label: "Contato",
        title: "Fale com a BrandCode Solutions",
        description: "Entre em contato para um orçamento personalizado",
      },
    ],
  };
}

// ─── 5. getServiceCityLinks ───────────────────────────────────────────────────

/**
 * Para páginas de serviço: linka para as 20 maiores cidades do Brasil.
 * Usado em criacao-de-sites/page.tsx, loja-virtual/page.tsx, etc.
 */
export function getServiceCityLinks(
  servicoSlug: "criacao-de-sites" | "loja-virtual" | "landing-page",
  limit = 20
): InternalLink[] {
  const serviceLabel: Record<string, string> = {
    "criacao-de-sites": "Criação de Sites",
    "loja-virtual": "Loja Virtual",
    "landing-page": "Landing Page",
  };

  return getTopCidades(limit).map((c: Cidade) => ({
    href: `/${servicoSlug}/${c.slug}`,
    label: c.nome,
    title: `${serviceLabel[servicoSlug]} em ${c.nome} — ${c.estado}`,
    description: `${serviceLabel[servicoSlug]} profissional em ${c.nome} com SEO técnico avançado`,
  }));
}

// ─── 6. getNichoCityLinks ────────────────────────────────────────────────────

/**
 * Para páginas de nicho: linka para páginas nicho+cidade das maiores cidades.
 */
export function getNichoCityLinks(
  nichoSlug: string,
  limit = 15
): InternalLink[] {
  const normalized = nichoSlug.replace(/^site-para-/, "");
  const nicho = getNicho(normalized);
  if (!nicho) return [];

  return getTopCidades(limit).map((c: Cidade) => ({
    href: `/site-para-${normalized}-em-${c.slug}`,
    label: `${nicho.nome} em ${c.nome}`,
    title: `Site para ${nicho.nome} em ${c.nome} — ${c.estado}`,
    description: `${nicho.descricao} Atendemos ${c.nome} e região.`,
  }));
}

// ─── 7. getAllStates ─────────────────────────────────────────────────────────

/**
 * Retorna a lista de estados únicos (siglas) das cidades cadastradas.
 */
export function getAllStates(): string[] {
  const states = new Set(getAllCidades().map((c) => c.estado));
  return [...states].sort();
}

/**
 * Retorna cidades de um estado específico para sitemaps e listagens.
 */
export function getCidadesDoEstado(
  estado: string,
  limit?: number
): InternalLink[] {
  const cidades = getCidadesByEstado(estado)
    .sort((a, b) => b.populacao - a.populacao);

  return (limit ? cidades.slice(0, limit) : cidades).map((c) => ({
    href: `/criacao-de-sites/${c.slug}`,
    label: c.nome,
    title: `Criação de Sites em ${c.nome} — ${estado}`,
    description: `Sites profissionais com SEO em ${c.nome}, ${estado}`,
  }));
}
