import { SITE_URL, SITE_NAME, PRECO_INICIAL, WHATSAPP_LINK } from "@/lib/constants";
import { tipoIndexavel, nichoIndexavel } from "@/lib/conteudo";
import { getPosts } from "@/lib/blog";
import nichos from "@/data/nichos.json";
import tiposSoftware from "@/data/tipos-software.json";

// Resumo do site para assistentes de IA (padrão llms.txt). Gerado a partir dos
// mesmos dados do sitemap, então páginas e artigos novos entram sozinhos.
export const dynamic = "force-static";

export function GET() {
  const tipos = tiposSoftware
    .filter((tipo) => tipoIndexavel(tipo.slug))
    .map((tipo) => `- [${tipo.nomeCompleto}](${SITE_URL}/desenvolvimento-de/${tipo.slug}): ${tipo.descricao}`);

  const segmentos = nichos
    .filter((nicho) => nichoIndexavel(nicho.slug))
    .map((nicho) => `- [Sistema para ${nicho.nomeCompleto}](${SITE_URL}/sistema-para/${nicho.slug}): ${nicho.descricao}`);

  const artigos = getPosts().map((post) => `- [${post.titulo}](${SITE_URL}/blog/${post.slug}): ${post.descricao}`);

  const body = `# ${SITE_NAME}

> Software house brasileira, do estado de São Paulo, que desenvolve software sob medida para empresas: sistemas web, ERP, CRM, apps mobile, chatbots de WhatsApp, automação de processos e soluções com inteligência artificial. Projetos a partir de ${PRECO_INICIAL}; o valor final é definido em um diagnóstico gratuito.

- O código-fonte é do cliente, sem mensalidade de licença.
- Orçamento e contato pelo WhatsApp: ${WHATSAPP_LINK}

## Páginas principais

- [Início](${SITE_URL}): visão geral dos serviços.
- [Software sob medida](${SITE_URL}/software-sob-medida): como funciona o desenvolvimento, etapas, prazos e preço inicial.
- [Tipos de software](${SITE_URL}/tipos-de-software): todos os tipos de sistema que desenvolvemos.
- [Segmentos](${SITE_URL}/segmentos): sistemas por ramo de atividade.
- [Portfólio](${SITE_URL}/portfolio): projetos entregues.
- [Sobre](${SITE_URL}/sobre): quem somos.
- [Contato](${SITE_URL}/contato): pedir orçamento.

## Tipos de software

${tipos.join("\n")}

## Sistemas por segmento

${segmentos.join("\n")}

## Blog

${artigos.join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
