// Módulo leve (sem o conteúdo das páginas) para poder ser importado em componentes client.

// Segmentos que disputavam a mesma busca de uma página de tipo foram fundidos nela.
// Manter em sincronia com os redirects de next.config.ts.
export const NICHOS_FUNDIDOS: Record<string, string> = {
  escola: "sistema-de-gestao-escolar",
  imobiliaria: "sistema-imobiliario",
  construtora: "sistema-de-gestao-de-obras",
  "e-commerce": "e-commerce",
};

/** Link canônico para o sistema de um segmento (respeita os segmentos fundidos). */
export function hrefSistemaPara(slug: string): string {
  const tipo = NICHOS_FUNDIDOS[slug];
  return tipo ? `/desenvolvimento-de/${tipo}` : `/sistema-para/${slug}`;
}
