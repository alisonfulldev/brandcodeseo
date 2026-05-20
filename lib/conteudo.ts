import type { Cidade } from "./cidades";

type TemplateFn = (nome: string, desc: string) => string;

const headlinesPorRegiao: Record<string, [string, string, string]> = {
  Sudeste: [
    "Sites que Vendem Sozinhos",
    "Sites que Geram Clientes Todo Dia",
    "Sites Profissionais que Convertem",
  ],
  Sul: [
    "Sites que Vendem Sozinhos",
    "Sites que Atraem Clientes Locais",
    "Sites que Trabalham por Você",
  ],
  Nordeste: [
    "Sites que Vendem Sozinhos",
    "Sites que Crescem com seu Negócio",
    "Sites que Geram Resultado de Verdade",
  ],
  "Centro-Oeste": [
    "Sites que Vendem Sozinhos",
    "Sites que Dominam o Google Local",
    "Sites que Trazem Clientes Orgânicos",
  ],
  Norte: [
    "Sites que Vendem Sozinhos",
    "Sites que Alcançam Todo o Brasil",
    "Sites que Abrem Mercado para Você",
  ],
};

const headlinesLojaPorRegiao: Record<string, [string, string, string]> = {
  Sudeste: [
    "Venda Online 24 Horas por Dia",
    "Sua Loja Online que Vende Sozinha",
    "E-commerce que Gera Pedidos Todo Dia",
  ],
  Sul: [
    "Venda Online 24 Horas por Dia",
    "Loja Virtual que Atrai Compradores Locais",
    "E-commerce que Trabalha por Você",
  ],
  Nordeste: [
    "Venda Online 24 Horas por Dia",
    "Loja Virtual que Cresce com seu Negócio",
    "E-commerce com Resultado de Verdade",
  ],
  "Centro-Oeste": [
    "Venda Online 24 Horas por Dia",
    "Loja Virtual que Domina o Google",
    "E-commerce que Traz Compradores Orgânicos",
  ],
  Norte: [
    "Venda Online 24 Horas por Dia",
    "Loja Virtual que Alcança Todo o Brasil",
    "E-commerce que Abre Mercado para Você",
  ],
};

const headlinesLPPorRegiao: Record<string, [string, string, string]> = {
  Sudeste: [
    "Landing Pages que Convertem de Verdade",
    "Landing Pages que Geram Leads Todo Dia",
    "Landing Pages de Alta Conversão",
  ],
  Sul: [
    "Landing Pages que Convertem de Verdade",
    "Landing Pages que Atraem Leads Locais",
    "Landing Pages que Trabalham por Você",
  ],
  Nordeste: [
    "Landing Pages que Convertem de Verdade",
    "Landing Pages que Crescem com seu Negócio",
    "Landing Pages com Resultado Real",
  ],
  "Centro-Oeste": [
    "Landing Pages que Convertem de Verdade",
    "Landing Pages que Dominam o Google Ads",
    "Landing Pages que Maximizam seu ROI",
  ],
  Norte: [
    "Landing Pages que Convertem de Verdade",
    "Landing Pages que Alcançam Todo o Brasil",
    "Landing Pages que Abrem Mercado para Você",
  ],
};

const aberturasPorRegiao: Record<string, [TemplateFn, TemplateFn, TemplateFn]> = {
  Sudeste: [
    (nome, desc) =>
      `${nome} é um dos mercados mais competitivos do país — ${desc}. Nesse cenário, empresas que não têm presença digital profissional perdem clientes todos os dias para concorrentes que aparecem primeiro no Google.`,
    (nome, desc) =>
      `Com ${desc}, ${nome} concentra consumidores que pesquisam online antes de comprar qualquer produto ou contratar qualquer serviço. Sem um site otimizado, seu negócio é invisível para essa demanda crescente.`,
    (nome, desc) =>
      `Em ${nome}, ${desc}. O comportamento do consumidor local mudou: mais de 80% pesquisam no Google antes de qualquer decisão de compra. Seu site precisa estar na primeira página — ou seu concorrente estará.`,
  ],
  Sul: [
    (nome, desc) =>
      `${nome} tem uma das economias mais dinâmicas da região Sul — ${desc}. O consumidor local é exigente e pesquisa online antes de tomar qualquer decisão. Um site profissional é o mínimo esperado.`,
    (nome, desc) =>
      `Com ${desc}, ${nome} atrai consumidores que valorizam profissionalismo e credibilidade. Sem um site otimizado que apareça no Google, você deixa dinheiro na mesa todos os dias.`,
    (nome, desc) =>
      `O mercado de ${nome} é movimentado e competitivo, impulsionado por ${desc}. Empresas locais que investem em presença digital saem na frente e capturam clientes antes da concorrência.`,
  ],
  Nordeste: [
    (nome, desc) =>
      `${nome} vive um momento de crescimento acelerado — ${desc}. O digital chegou ao Nordeste com força total, e consumidores locais já pesquisam no Google tanto quanto nas grandes capitais.`,
    (nome, desc) =>
      `Com ${desc}, ${nome} registra crescimento significativo na busca por serviços e produtos online. Empreendedores que saíram na frente com sites profissionais já colhem resultados reais.`,
    (nome, desc) =>
      `Em ${nome}, ${desc}. A economia local aquecida criou uma nova geração de consumidores digitais — e eles pesquisam no Google antes de comprar. Seu negócio precisa aparecer lá.`,
  ],
  "Centro-Oeste": [
    (nome, desc) =>
      `${nome} é uma das cidades que mais cresce no Centro-Oeste — ${desc}. Com o desenvolvimento acelerado da região, consumidores locais tornaram-se cada vez mais digitais e exigentes.`,
    (nome, desc) =>
      `Com ${desc}, ${nome} está no coração de uma região em franca expansão. Empresas locais que se posicionam online hoje vão dominar o mercado nos próximos anos.`,
    (nome, desc) =>
      `Em ${nome}, ${desc}. O crescimento do agronegócio e do setor de serviços trouxe mais consumidores conectados — e eles buscam empresas no Google antes de fechar qualquer negócio.`,
  ],
  Norte: [
    (nome, desc) =>
      `${nome} cresce mais rápido que a média nacional — ${desc}. O avanço da conectividade na região Norte transformou o comportamento do consumidor local, que agora pesquisa online antes de comprar.`,
    (nome, desc) =>
      `Com ${desc}, ${nome} se destaca como polo econômico regional. Negócios locais que investem em presença digital alcançam não só a cidade, mas toda a região ao redor.`,
    (nome, desc) =>
      `Em ${nome}, ${desc}. Com o aumento do acesso à internet na região, consumidores locais passaram a pesquisar produtos e serviços no Google — e seu site precisa aparecer antes do concorrente.`,
  ],
};

// Deterministic variant based on slug — same city always gets same variant
export function getVariante(slug: string): 0 | 1 | 2 {
  const hash = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return (hash % 3) as 0 | 1 | 2;
}

export function getHeadline(cidade: Cidade): string {
  const v = getVariante(cidade.slug);
  const opcoes = headlinesPorRegiao[cidade.regiao] ?? headlinesPorRegiao["Sudeste"];
  return opcoes[v];
}

export function getHeadlineLoja(cidade: Cidade): string {
  const v = getVariante(cidade.slug);
  const opcoes = headlinesLojaPorRegiao[cidade.regiao] ?? headlinesLojaPorRegiao["Sudeste"];
  return opcoes[v];
}

export function getHeadlineLP(cidade: Cidade): string {
  const v = getVariante(cidade.slug);
  const opcoes = headlinesLPPorRegiao[cidade.regiao] ?? headlinesLPPorRegiao["Sudeste"];
  return opcoes[v];
}

export function getAbertura(cidade: Cidade): string {
  const v = getVariante(cidade.slug);
  const opcoes = aberturasPorRegiao[cidade.regiao] ?? aberturasPorRegiao["Sudeste"];
  return opcoes[v](cidade.nome, cidade.descricao_local);
}

const depoimentos = [
  {
    nome: "Carlos Mendes",
    cargo: "Dono de clínica",
    texto:
      "Em menos de 3 semanas o site já estava aparecendo no Google. Os clientes começaram a chegar pelo site sem eu fazer nada. Valeu cada centavo.",
  },
  {
    nome: "Fernanda Costa",
    cargo: "Advogada",
    texto:
      "Eu tinha medo de investir e não ter retorno. Hoje meu site gera pelo menos 5 contatos por semana. A BrandCode entregou tudo que prometeu.",
  },
  {
    nome: "Ricardo Oliveira",
    cargo: "Proprietário de loja",
    texto:
      "O painel de administração é muito fácil de usar. Eu mesmo atualizo o site quando quero. E o suporte pelo WhatsApp é rápido demais.",
  },
  {
    nome: "Patrícia Lima",
    cargo: "Dentista",
    texto:
      "Meu consultório lotou em 2 meses após o site ir no ar. Os pacientes chegam pesquisando no Google. Resultado real, não promessa.",
  },
  {
    nome: "Anderson Rocha",
    cargo: "Empresário",
    texto:
      "Já tinha tentado outras agências. A BrandCode foi a primeira que entregou no prazo, com qualidade e me ensinou a usar o painel.",
  },
  {
    nome: "Mariana Souza",
    cargo: "Personal trainer",
    texto:
      "Tinha zero presença digital. Hoje apareço no Google quando alguém busca personal trainer na minha cidade. Transformou meu negócio.",
  },
];

export function getDepoimentos(slug: string) {
  const v = getVariante(slug);
  return [depoimentos[v % 6], depoimentos[(v + 3) % 6]];
}
