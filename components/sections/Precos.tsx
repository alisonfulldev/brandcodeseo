import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";

const planos = [
  {
    nome: "Landing Page",
    preco: "R$ 370",
    descricao: "Ideal para captar leads e divulgar um produto ou serviço específico.",
    prazo: "Até 5 dias úteis",
    features: [
      "Design moderno e responsivo",
      "SEO técnico completo",
      "Integração WhatsApp",
      "Formulário de contato",
      "1 revisão inclusa",
      "Hospedagem na Vercel",
    ],
    destaque: false,
    href: "/landing-page",
    msg: "Quero uma Landing Page. Qual o prazo e próximos passos?",
  },
  {
    nome: "Site Institucional",
    preco: "R$ 497",
    descricao: "O site completo para o seu negócio aparecer no Google e vender mais.",
    prazo: "Até 15 dias úteis",
    features: [
      "Até 8 páginas completas",
      "SEO técnico avançado",
      "Schema JSON-LD incluso",
      "Painel administrativo",
      "Blog integrado",
      "Integração WhatsApp",
      "2 revisões inclusas",
      "Hospedagem na Vercel",
    ],
    destaque: true,
    href: "/criacao-de-sites",
    msg: "Quero um Site Institucional. Pode me passar mais detalhes?",
  },
  {
    nome: "Loja Virtual",
    preco: "R$ 697",
    descricao: "Sua loja online com pagamentos, estoque e SEO para produtos.",
    prazo: "Até 25 dias úteis",
    features: [
      "Catálogo de produtos ilimitado",
      "Pagamento integrado (Pix/Cartão)",
      "Painel de gestão completo",
      "SEO para páginas de produto",
      "Integração com frete",
      "WhatsApp + Email marketing",
      "3 revisões inclusas",
      "Hospedagem na Vercel",
    ],
    destaque: false,
    href: "/loja-virtual",
    msg: "Quero uma Loja Virtual. Como funciona o processo?",
  },
];

export default function Precos() {
  return (
    <section className="py-20 bg-[#0A1628]" id="precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Preços claros. Sem surpresas.
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Invista no seu negócio com segurança. Parcelas disponíveis no cartão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`rounded-2xl p-8 relative ${
                plano.destaque
                  ? "bg-blue-600 ring-2 ring-blue-400 shadow-2xl scale-105"
                  : "bg-[#0D1E3A] border border-blue-900"
              }`}
            >
              {plano.destaque && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-[#0A1628] text-xs font-bold px-4 py-1.5 rounded-full">
                  MAIS POPULAR
                </span>
              )}

              <h3 className="text-white font-bold text-xl mb-1">{plano.nome}</h3>
              <p className="text-sm text-gray-300 mb-4">{plano.descricao}</p>

              <div className="mb-2">
                <span className="text-gray-400 text-sm">a partir de</span>
                <div className="text-4xl font-extrabold text-white">{plano.preco}</div>
              </div>

              <p className="text-xs text-gray-400 mb-6">Prazo: {plano.prazo}</p>

              <ul className="space-y-2 mb-8">
                {plano.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-200">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={plano.msg}
                className={`w-full justify-center py-3 text-sm ${
                  plano.destaque ? "bg-white text-blue-700 hover:bg-gray-100" : ""
                }`}
              >
                Quero esse plano
              </WhatsAppButton>

              <Link
                href={plano.href}
                className="block text-center mt-3 text-xs text-gray-400 hover:text-gray-200 underline transition-colors"
              >
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
