export const SITE_URL = "https://brandcodesolutions.com.br";
export const SITE_NAME = "BrandCode Solutions";
export const SITE_DESCRIPTION =
  "Agência digital especializada em criação de sites que vendem. SEO técnico avançado, painel administrativo incluso e foco em conversão real.";
export const WHATSAPP_NUMBER = "5518996742364";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MSG_DEFAULT = encodeURIComponent(
  "Olá! Quero um orçamento para o meu site."
);
export const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MSG_DEFAULT}`;

export const PRICES = {
  institucional: "a partir de R$ 497",
  lojaVirtual: "a partir de R$ 697",
  landingPage: "a partir de R$ 370",
} as const;

export const COLORS = {
  primary: "#0A1628",
  secondary: "#FFFFFF",
  accent: "#1E40AF",
} as const;

export const OG_IMAGE = `${SITE_URL}/images/og-brandcode.jpg`;
export const LOGO_URL = `${SITE_URL}/images/logo-brandcode.png`;
