import Link from "next/link";
import nichos from "@/data/nichos.json";

export default function NichosGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0A1628] mb-3 text-center">
          Sites para Cada Segmento
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8 max-w-xl mx-auto">
          Criamos sites especializados para mais de 50 segmentos. Encontre o seu:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {nichos.map((nicho) => (
            <Link
              key={nicho.slug}
              href={`/site-para-${nicho.slug}`}
              className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-[#0A1628] transition-all font-medium"
            >
              {nicho.nome}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
