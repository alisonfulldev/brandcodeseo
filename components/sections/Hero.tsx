import Link from "next/link";
import { PRICES } from "@/lib/constants";
import LeadWizard from "@/components/ui/LeadWizard";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  cta?: string;
  ctaHref?: string;
  whatsappMsg?: string;
  badge?: string;
  highlight?: string;
}

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
  cta = "Quero um orçamento",
  ctaHref,
  whatsappMsg = "Olá! Vim pelo site e quero um orçamento de software.",
  badge,
  highlight,
}: HeroProps) {
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
          style={{ lineHeight: 1.75, color: "#CBD5E1" }}
        >
          {subtitulo}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <LeadWizard ctaLabel={cta} fallbackMsg={whatsappMsg} variant="hero" />
          {ctaHref && (
            <Link
              href={ctaHref}
              className="text-sm font-medium transition-colors hover:underline underline-offset-4"
              style={{ color: "#94A3B8" }}
            >
              Ver preços e planos →
            </Link>
          )}
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#94A3B8" }}>
          {[
            "Código-fonte entregue",
            "Sem mensalidade de licença",
            `Sistemas ${PRICES.sistemaWeb}`,
            "Diagnóstico gratuito",
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
