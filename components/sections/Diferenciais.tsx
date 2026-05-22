const diferenciais = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titulo: "Sites que se vendem sozinhos",
    descricao:
      "SEO técnico avançado configurado desde o primeiro dia. Seu site aparece no Google enquanto você dorme.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    titulo: "Painel admin completo",
    descricao:
      "Você gerencia textos, imagens e produtos sem precisar de programador. Autonomia total nas suas mãos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    titulo: "Sites que convertem",
    descricao:
      "Não fazemos site bonito por fazer. Cada elemento é pensado para converter visitante em cliente via WhatsApp.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    titulo: "Schema & Rich Snippets",
    descricao:
      "Marcação estruturada JSON-LD que faz seu site se destacar nos resultados do Google com estrelas e informações extras.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    titulo: "Suporte humanizado",
    descricao:
      "Atendimento direto pelo WhatsApp. Sem ticket, sem chatbot. Você fala com quem fez o seu site.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-20" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-bold"
            style={{
              fontSize: "2.5rem",
              letterSpacing: "-0.02em",
              color: "#F8FAFC",
            }}
          >
            Por que a BrandCode é diferente?
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "#3B82F6",
              borderRadius: 2,
              margin: "12px auto 0",
            }}
          />
          <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Mais do que um site bonito — entregamos uma máquina de vendas no ar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((d, i) => (
            <div key={i} className="dark-card p-8">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(59,130,246,0.1)" }}
              >
                <span style={{ color: "#3B82F6" }}>{d.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#F8FAFC" }}>
                {d.titulo}
              </h3>
              <p className="text-sm" style={{ lineHeight: 1.75, color: "#94A3B8" }}>
                {d.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
