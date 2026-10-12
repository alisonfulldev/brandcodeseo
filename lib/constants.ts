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

export const OG_IMAGE = `${SITE_URL}/images/og-brandcode.jpg`;
export const LOGO_URL = `${SITE_URL}/images/logo-brandcode.png`;
