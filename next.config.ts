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
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/site", destination: "/criacao-de-sites", permanent: true },
      { source: "/loja", destination: "/loja-virtual", permanent: true },
      { source: "/landing", destination: "/landing-page", permanent: true },
      {
        source: "/criacao-de-sites/preco",
        destination: "/criacao-de-sites/quanto-custa",
        permanent: false,
      },
      {
        source: "/orcamento",
        destination: "/criacao-de-sites/orcamento",
        permanent: true,
      },
      { source: "/contato-form", destination: "/contato", permanent: true },
    ];
  },
};

export default nextConfig;
