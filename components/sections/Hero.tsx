import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";
import { PRICES } from "@/lib/constants";

interface HeroProps {
  titulo: string;
  subtitulo: string;
  cta?: string;
  ctaHref?: string;
  whatsappMsg?: string;
  badge?: string;
}

export default function Hero({
  titulo,
  subtitulo,
  cta = "Quero meu site agora",
  ctaHref,
  whatsappMsg = "Olá! Vim pelo site e quero um orçamento.",
  badge,
}: HeroProps) {
  return (
    <section className="relative bg-[#0A1628] pt-28 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e40af 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-flex items-center gap-2 bg-blue-900/60 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-700">
            {badge}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
          {titulo}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitulo}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            message={whatsappMsg}
            className="text-base px-8 py-4 shadow-xl"
          >
            {cta}
          </WhatsAppButton>

          {ctaHref && (
            <Link
              href={ctaHref}
              className="text-gray-300 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
            >
              Ver preços e planos
            </Link>
          )}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            SEO técnico incluso
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Painel administrativo
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {PRICES.institucional}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Entrega rápida
          </div>
        </div>
      </div>
    </section>
  );
}
