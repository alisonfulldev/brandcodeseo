import nichosData from "@/data/nichos.json";

export interface Nicho {
  slug: string;
  nome: string;
  nomeCompleto: string;
  descricao: string;
  palavrasChave: string[];
  dores: string[];
  beneficios: string[];
}

const nichos = nichosData as Nicho[];

export function getNicho(slug: string): Nicho | undefined {
  // Aceita "medico" ou "site-para-medico" como entrada
  const normalized = slug.replace(/^site-para-/, "");
  return nichos.find((n) => n.slug === normalized || n.slug === slug);
}

export function getAllNichos(): Nicho[] {
  return nichos;
}

export function getNichoNome(slug: string): string | undefined {
  return getNicho(slug)?.nome;
}

export function getNichosByCategoria(nomes: string[]): Nicho[] {
  const set = new Set(nomes.map((n) => n.toLowerCase()));
  return nichos.filter((n) => set.has(n.nome.toLowerCase()));
}

/**
 * Para uso em generateStaticParams de /[nicho] ou /site-para-[nicho]
 */
export function generateStaticParams(): { nicho: string }[] {
  return nichos.map((n) => ({ nicho: n.slug }));
}

/**
 * Para rotas combinadas /site-para-[nicho]-em-[cidade]
 * Recebe a lista de slugs de cidades para o produto cartesiano
 */
export function generateStaticParamsWithCidades(
  cidadeSlugs: string[]
): { nicho: string; cidade: string }[] {
  return nichos.flatMap((n) =>
    cidadeSlugs.map((cidade) => ({ nicho: n.slug, cidade }))
  );
}
