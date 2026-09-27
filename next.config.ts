import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]
        : []),
    ];
  },

  async redirects() {
    return [
      { source: "/site", destination: "/software-sob-medida", permanent: true },
      { source: "/loja", destination: "/desenvolvimento-de/e-commerce", permanent: true },
      { source: "/landing", destination: "/software-sob-medida", permanent: true },
      { source: "/orcamento", destination: "/contato", permanent: true },
      { source: "/contato-form", destination: "/contato", permanent: true },
      { source: "/criacao-de-sites", destination: "/software-sob-medida", permanent: true },
      { source: "/criacao-de-sites/:path*", destination: "/software-sob-medida", permanent: true },
      { source: "/loja-virtual", destination: "/desenvolvimento-de/e-commerce", permanent: true },
      { source: "/loja-virtual/:path*", destination: "/desenvolvimento-de/e-commerce", permanent: true },
      { source: "/landing-page", destination: "/software-sob-medida", permanent: true },
      { source: "/landing-page/:path*", destination: "/software-sob-medida", permanent: true },
      // Páginas por cidade removidas (conteúdo duplicado) → página equivalente sem cidade
      { source: "/desenvolvimento-de/:tipo/:cidade", destination: "/desenvolvimento-de/:tipo", permanent: true },
      { source: "/software-para/:segmento/:cidade", destination: "/sistema-para/:segmento", permanent: true },
      { source: "/software-para/:segmento", destination: "/sistema-para/:segmento", permanent: true },
      { source: "/desenvolvimento-de-software-em/:cidade", destination: "/software-sob-medida", permanent: true },
      { source: "/cidades", destination: "/segmentos", permanent: true },
      // Páginas que disputavam a mesma busca → uma página forte por assunto
      { source: "/sob-medida/:tipo", destination: "/desenvolvimento-de/:tipo", permanent: true },
      { source: "/quanto-custa/:tipo", destination: "/desenvolvimento-de/:tipo#precos", permanent: true },
      { source: "/automacao-de/:processo", destination: "/desenvolvimento-de/:processo", permanent: true },
      // URLs que a home linkava por engano (davam 404)
      { source: "/desenvolvimento-de-app-mobile", destination: "/desenvolvimento-de/app-mobile", permanent: true },
      { source: "/chatbot-whatsapp", destination: "/desenvolvimento-de/chatbot-whatsapp", permanent: true },
      { source: "/automacao-de-processos", destination: "/desenvolvimento-de/automacao-de-processos", permanent: true },
      { source: "/api-e-integracoes", destination: "/desenvolvimento-de/api-e-integracoes", permanent: true },
      { source: "/ia-para-negocios", destination: "/desenvolvimento-de/ia-para-negocios", permanent: true },
      // Segmentos fundidos na página de tipo (manter em sincronia com NICHOS_FUNDIDOS em lib/conteudo.ts)
      { source: "/sistema-para/escola", destination: "/desenvolvimento-de/sistema-de-gestao-escolar", permanent: true },
      { source: "/sistema-para/imobiliaria", destination: "/desenvolvimento-de/sistema-imobiliario", permanent: true },
      { source: "/sistema-para/construtora", destination: "/desenvolvimento-de/sistema-de-gestao-de-obras", permanent: true },
      { source: "/sistema-para/e-commerce", destination: "/desenvolvimento-de/e-commerce", permanent: true },
    ];
  },
};

export default nextConfig;
