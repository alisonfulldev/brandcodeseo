const diferenciais = [
  {
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titulo: "Sites que se vendem sozinhos",
    descricao:
      "SEO técnico avançado configurado desde o primeiro dia. Seu site aparece no Google enquanto você dorme.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    titulo: "Painel admin completo",
    descricao:
      "Você gerencia textos, imagens e produtos sem precisar de programador. Autonomia total nas suas mãos.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    titulo: "Sites que convertem",
    descricao:
      "Não fazemos site bonito por fazer. Cada elemento é pensado para converter visitante em cliente via WhatsApp.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    titulo: "Hospedagem na Vercel",
    descricao:
      "Infraestrutura de nível enterprise. Velocidade máxima, 99.9% de uptime e HTTPS grátis inclusos.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titulo: "Schema & Rich Snippets",
    descricao:
      "Marcação estruturada JSON-LD que faz seu site se destacar nos resultados do Google com estrelas e informações extras.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    titulo: "Suporte humanizado",
    descricao:
      "Atendimento direto pelo WhatsApp. Sem ticket, sem chatbot. Você fala com quem fez o seu site.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
            Por que a BrandCode é diferente?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Mais do que um site bonito — entregamos uma máquina de vendas no ar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">{d.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
