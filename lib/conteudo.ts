import tiposGestao from "@/data/conteudo/tipos-gestao.json";
import tiposSetoriais from "@/data/conteudo/tipos-setoriais.json";
import tiposMobileWeb from "@/data/conteudo/tipos-mobile-web.json";
import tiposAutomacao from "@/data/conteudo/tipos-automacao.json";
import tiposIaDados from "@/data/conteudo/tipos-ia-dados.json";
import nichosSaude from "@/data/conteudo/nichos-saude.json";
import nichosComercio from "@/data/conteudo/nichos-comercio.json";
import nichosServicos from "@/data/conteudo/nichos-servicos.json";
import { NICHOS_FUNDIDOS } from "@/lib/rotas";

export { NICHOS_FUNDIDOS, hrefSistemaPara } from "@/lib/rotas";

export interface FaixaPreco {
  label: string;
  valor: string;
  desc: string;
}

export interface ConteudoPagina {
  intro: string[];
  funcionalidades: { titulo: string; desc: string }[];
  exemplo: { titulo: string; texto: string };
  integracoes: string[];
  precos: FaixaPreco[];
  prazo: string;
  faqs: { question: string; answer: string }[];
}

const conteudoTipos: Record<string, ConteudoPagina> = {
  ...tiposGestao,
  ...tiposSetoriais,
  ...tiposMobileWeb,
  ...tiposAutomacao,
  ...tiposIaDados,
};

const conteudoNichos: Record<string, ConteudoPagina> = {
  ...nichosSaude,
  ...nichosComercio,
  ...nichosServicos,
};

export function getConteudoTipo(slug: string): ConteudoPagina | undefined {
  return conteudoTipos[slug];
}

export function getConteudoNicho(slug: string): ConteudoPagina | undefined {
  return conteudoNichos[slug];
}

/** Só páginas com conteúdo próprio são indexáveis — template puro vira noindex. */
export function tipoIndexavel(slug: string): boolean {
  return slug in conteudoTipos;
}

export function nichoIndexavel(slug: string): boolean {
  return slug in conteudoNichos && !(slug in NICHOS_FUNDIDOS);
}
