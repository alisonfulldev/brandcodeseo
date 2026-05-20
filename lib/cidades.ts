import cidadesData from "@/data/cidades.json";

export interface Cidade {
  slug: string;
  nome: string;
  estado: string;
  regiao: string;
  populacao: number;
  descricao_local: string;
}

const cidades = cidadesData as Cidade[];

export function getCidade(slug: string): Cidade | undefined {
  return cidades.find((c) => c.slug === slug);
}

export function getAllCidades(): Cidade[] {
  return cidades;
}

export function getCidadesByEstado(estado: string): Cidade[] {
  return cidades.filter((c) => c.estado.toUpperCase() === estado.toUpperCase());
}

export function getCidadesByRegiao(regiao: string): Cidade[] {
  return cidades.filter(
    (c) => c.regiao.toLowerCase() === regiao.toLowerCase()
  );
}

export function getTopCidades(limit = 20): Cidade[] {
  return [...cidades]
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, limit);
}

export function getCidadeNome(slug: string): string | undefined {
  return getCidade(slug)?.nome;
}

export function getCidadesVizinhas(slug: string, limit = 5): Cidade[] {
  const cidade = getCidade(slug);
  if (!cidade) return [];
  return cidades
    .filter((c) => c.estado === cidade.estado && c.slug !== slug)
    .sort((a, b) => b.populacao - a.populacao)
    .slice(0, limit);
}

export function generateStaticParams(): { cidade: string }[] {
  return cidades.map((c) => ({ cidade: c.slug }));
}

/**
 * Para rotas combinadas /[servico]/[cidade]
 */
export function generateStaticParamsWithService(
  servico: string
): { servico: string; cidade: string }[] {
  return cidades.map((c) => ({ servico, cidade: c.slug }));
}

/**
 * Para rotas combinadas /site-para-[nicho]-em-[cidade]
 * Recebe a lista de slugs de nichos para o produto cartesiano
 */
export function generateStaticParamsNichosCidades(
  nichoSlugs: string[]
): { nicho: string; cidade: string }[] {
  return nichoSlugs.flatMap((nicho) =>
    cidades.map((c) => ({ nicho, cidade: c.slug }))
  );
}
