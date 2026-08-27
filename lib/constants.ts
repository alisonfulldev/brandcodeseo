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

export const PRICES = {
  sistemaWeb: "a partir de R$ 2.997",
  appMobile: "a partir de R$ 4.997",
  automacao: "a partir de R$ 997",
  ia: "a partir de R$ 1.997",
} as const;

export const COLORS = {
  primary: "#0A1628",
  secondary: "#FFFFFF",
  accent: "#1E40AF",
} as const;

export const OG_IMAGE = `${SITE_URL}/images/og-brandcode.jpg`;
export const LOGO_URL = `${SITE_URL}/images/logo-brandcode.png`;
