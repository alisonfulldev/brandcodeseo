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
    <section className="py-16" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            className="font-bold"
            style={{ fontSize: "1.75rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
          >
            {titulo}
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#3B82F6",
              borderRadius: 2,
              margin: "10px auto 0",
            }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {cidadesDestaque.map((cidade) => (
            <Link
              key={cidade.slug}
              href={`/${prefixo}/${cidade.slug}`}
              className="dark-pill px-3 py-2 text-sm text-center font-medium block"
            >
              {cidade.nome}
              <span className="block text-xs font-normal mt-0.5" style={{ color: "#64748B" }}>
                {cidade.estado}
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center mt-6 text-sm" style={{ color: "#64748B" }}>
          Atendemos mais de 200 cidades em todo o Brasil.{" "}
          <Link
            href="/contato"
            className="transition-colors hover:underline"
            style={{ color: "#3B82F6" }}
          >
            Consulte a sua cidade.
          </Link>
        </p>
      </div>
    </section>
  );
}
