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
    ];
  },
};

export default nextConfig;
