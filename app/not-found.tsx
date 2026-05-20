import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Página não encontrada | BrandCode Solutions",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-blue-900 select-none">404</div>
        <h1 className="text-3xl font-bold text-white mt-4 mb-3">
          Página não encontrada
        </h1>
        <p className="text-gray-400 mb-8">
          A página que você procura não existe ou foi movida. Mas podemos ajudar você a criar um site que as pessoas vão encontrar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-white text-[#0A1628] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Voltar ao início
          </Link>
          <WhatsAppButton
            message="Olá! Estava navegando no site e preciso de ajuda."
            className="px-6 py-3 text-sm"
          >
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
