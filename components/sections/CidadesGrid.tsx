import Link from "next/link";
import cidades from "@/data/cidades.json";

const cidadesDestaque = cidades
  .sort((a, b) => b.populacao - a.populacao)
  .slice(0, 24);

interface CidadesGridProps {
  prefixo?: string;
  titulo?: string;
}

export default function CidadesGrid({
  prefixo = "criacao-de-sites",
  titulo = "Criação de Sites por Cidade",
}: CidadesGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0A1628] mb-8 text-center">
          {titulo}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {cidadesDestaque.map((cidade) => (
            <Link
              key={cidade.slug}
              href={`/${prefixo}/${cidade.slug}`}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-[#0A1628] transition-all font-medium"
            >
              {cidade.nome}
              <span className="block text-xs text-gray-400 font-normal">{cidade.estado}</span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          Atendemos mais de 200 cidades em todo o Brasil.{" "}
          <Link href="/contato" className="text-blue-600 hover:underline">
            Consulte a sua cidade.
          </Link>
        </p>
      </div>
    </section>
  );
}
