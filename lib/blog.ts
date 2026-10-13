import quantoCustaSistema from "@/data/blog/quanto-custa-desenvolver-sistema-sob-medida.json";
import sistemaProntoOuSobMedida from "@/data/blog/sistema-pronto-ou-sob-medida.json";
import chatbotWhatsappApiOficial from "@/data/blog/chatbot-whatsapp-api-oficial.json";
import erpParaPequenaEmpresa from "@/data/blog/erp-para-pequena-empresa.json";
import comoReduzirFaltasNaClinica from "@/data/blog/como-reduzir-faltas-na-clinica.json";
import integrarErpComMarketplaces from "@/data/blog/integrar-erp-com-marketplaces.json";

export interface SecaoPost {
  titulo: string;
  paragrafos?: string[];
  lista?: string[];
  tabela?: { cabecalho: string[]; linhas: string[][] };
  paragrafosFinais?: string[];
}

export interface Post {
  slug: string;
  titulo: string;
  descricao: string;
  resumo: string;
  categoria: string;
  autor: string;
  publicadoEm: string;
  atualizadoEm: string;
  palavrasChave: string[];
  secoes: SecaoPost[];
  faqs: { question: string; answer: string }[];
  relacionados: { href: string; label: string }[];
}

// Para publicar um artigo novo: criar o JSON em data/blog/ e importá-lo aqui.
const posts: Post[] = [
  quantoCustaSistema,
  sistemaProntoOuSobMedida,
  chatbotWhatsappApiOficial,
  erpParaPequenaEmpresa,
  comoReduzirFaltasNaClinica,
  integrarErpComMarketplaces,
];

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Grupo de links para os artigos que citam a página `href` (link de volta automático). */
export function artigosRelacionados(href: string) {
  const artigos = getPosts().filter((p) => p.relacionados.some((r) => r.href === href));
  if (artigos.length === 0) return [];
  return [
    {
      titulo: "Artigos relacionados",
      links: artigos.map((p) => ({ href: `/blog/${p.slug}`, label: p.titulo })),
    },
  ];
}

/** Minutos de leitura estimados (~200 palavras por minuto). */
export function tempoLeitura(post: Post): number {
  const texto = post.secoes
    .flatMap((s) => [...(s.paragrafos ?? []), ...(s.lista ?? []), ...(s.paragrafosFinais ?? [])])
    .join(" ");
  return Math.max(1, Math.round(texto.split(/\s+/).length / 200));
}
