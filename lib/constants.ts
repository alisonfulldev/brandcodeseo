export const SITE_URL = "https://brandcodesolutions.com.br";
export const SITE_NAME = "BrandCode Solutions";
export const SITE_DESCRIPTION =
  "Software house especializada em desenvolvimento de sistemas, apps, automações e soluções com IA. Desenvolvemos o software que seu negócio precisa para crescer e automatizar processos.";
export const WHATSAPP_NUMBER = "5518997330574";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MSG_DEFAULT = encodeURIComponent(
  "Olá! Quero um orçamento para desenvolvimento de software."
);
export const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MSG_DEFAULT}`;

// Preço único de entrada para todos os serviços de software. Faixas com teto
// afastavam leads; o valor final é definido no diagnóstico.
export const PRECO_INICIAL = "R$ 1.500";
export const PRECO_INICIAL_NUM = "1500";

export const PRICES = {
  sistemaWeb: `a partir de ${PRECO_INICIAL}`,
  appMobile: `a partir de ${PRECO_INICIAL}`,
  automacao: `a partir de ${PRECO_INICIAL}`,
  ia: `a partir de ${PRECO_INICIAL}`,
} as const;

export const COLORS = {
  primary: "#0A1628",
  secondary: "#FFFFFF",
  accent: "#1E40AF",
} as const;

// Dados da empresa usados no schema, na página Sobre e no llms.txt.
export const CIDADE = "Presidente Prudente";
export const ESTADO = "SP";
export const ANO_FUNDACAO = "2022";
export const LINKEDIN_URL = "https://www.linkedin.com/company/122534364/";

export const EQUIPE = [
  {
    id: "alison-lima",
    nome: "Alison Lima",
    cargo: "Fundador",
    bio: "Fundou a BrandCode Solutions em 2022. Conduz a arquitetura e o desenvolvimento dos sistemas, apps e automações com IA, do diagnóstico à entrega.",
  },
  {
    id: "thassia-minervino",
    nome: "Thassia Minervino",
    cargo: "Gestora de Projetos",
    bio: "Gerencia prazos, escopo e comunicação com os clientes, garantindo entregas incrementais e o acompanhamento de cada projeto.",
  },
] as const;

// Data da última revisão de conteúdo das páginas de serviço e segmento.
// Atualize ao mudar o conteúdo de fato: vai para o sitemap e para o "Atualizado em".
export const CONTEUDO_ATUALIZADO_EM = "2026-11-13";

export const OG_IMAGE = `${SITE_URL}/images/og-brandcode.jpg`;
export const LOGO_URL = `${SITE_URL}/images/logo-brandcode.png`;
