import Link from "next/link";
import nichos from "@/data/nichos.json";

export default function NichosGrid() {
  return (
    <section className="py-16" style={{ background: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            className="font-bold"
            style={{ fontSize: "1.75rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
          >
            Sites para Cada Segmento
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
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>
            Criamos sites especializados para mais de 50 segmentos. Encontre o seu:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {nichos.map((nicho) => (
            <Link
              key={nicho.slug}
              href={`/site-para-${nicho.slug}`}
              className="dark-pill px-3 py-2.5 text-sm text-center font-medium block"
            >
              {nicho.nome}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
