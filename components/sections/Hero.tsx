import Link from "next/link";
import { WHATSAPP_URL, PRICES } from "@/lib/constants";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  cta?: string;
  ctaHref?: string;
  whatsappMsg?: string;
  badge?: string;
  highlight?: string;
}

const WA_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CHECK_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

function renderTitle(titulo: string, highlight?: string) {
  if (!highlight || !titulo.includes(highlight)) {
    return <>{titulo}</>;
  }
  const parts = titulo.split(highlight);
  return (
    <>
      {parts[0]}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(90deg, #3B82F6, #60A5FA)",
        }}
      >
        {highlight}
      </span>
      {parts[1]}
    </>
  );
}

export default function Hero({
  titulo,
  subtitulo,
  cta = "Quero meu site agora",
  ctaHref,
  whatsappMsg = "Olá! Vim pelo site e quero um orçamento.",
  badge,
  highlight,
}: HeroProps) {
  const waLink = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden"
      style={{
        background: "#0A0F1E",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* Glow azul atrás do título */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "#3B82F6",
          filter: "blur(80px)",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        {badge && (
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-2 font-medium rounded-full"
              style={{
                border: "1px solid #3B82F6",
                background: "rgba(59,130,246,0.08)",
                color: "#60A5FA",
                fontSize: "0.8rem",
                padding: "4px 14px",
              }}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Headline */}
        <h1
          className="font-extrabold leading-tight max-w-5xl mx-auto"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.03em",
            color: "#F8FAFC",
          }}
        >
          {renderTitle(titulo, highlight)}
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto"
          style={{ lineHeight: 1.75, color: "#94A3B8" }}
        >
          {subtitulo}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Botão WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-wa font-semibold text-base transition-all duration-200 active:scale-95"
            style={{ background: "#25D366", color: "#fff", borderRadius: "8px", padding: "14px 28px" }}
          >
            {WA_ICON}
            {cta}
          </a>

          {ctaHref && (
            <Link
              href={ctaHref}
              className="text-sm font-medium transition-colors hover:underline underline-offset-4"
              style={{ color: "#94A3B8" }}
            >
              Ver preços e planos
            </Link>
          )}
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#64748B" }}>
          {[
            "SEO técnico incluso",
            "Painel administrativo",
            `a partir de ${PRICES.institucional}`,
            "Entrega rápida",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <span style={{ color: "#3B82F6" }}>{CHECK_ICON}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
