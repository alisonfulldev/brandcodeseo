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

const CHECK_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function Precos() {
  return (
    <section className="py-20" id="precos" style={{ background: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-bold"
            style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
          >
            Preços claros. Sem surpresas.
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
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Invista no seu negócio com segurança. Parcelas disponíveis no cartão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className="relative rounded-xl p-8 transition-all duration-200"
              style={
                plano.destaque
                  ? {
                      background: "#111827",
                      border: "1px solid #3B82F6",
                      borderRadius: "12px",
                      boxShadow: "0 0 40px rgba(59,130,246,0.15)",
                    }
                  : {
                      background: "#111827",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                    }
              }
            >
              {plano.destaque && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "#3B82F6", color: "#fff" }}
                >
                  MAIS POPULAR
                </span>
              )}

              <h3 className="font-bold text-xl mb-1" style={{ color: "#F8FAFC" }}>
                {plano.nome}
              </h3>
              <p className="text-sm mb-4" style={{ lineHeight: 1.75, color: "#94A3B8" }}>
                {plano.descricao}
              </p>

              <div className="mb-2">
                <span className="text-sm" style={{ color: "#64748B" }}>a partir de</span>
                <div
                  className="font-extrabold"
                  style={{ fontSize: "2.5rem", color: "#F8FAFC", letterSpacing: "-0.02em" }}
                >
                  {plano.preco}
                </div>
              </div>

              <p className="text-xs mb-6" style={{ color: "#64748B" }}>
                Prazo: {plano.prazo}
              </p>

              <ul className="space-y-2.5 mb-8">
                {plano.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <span style={{ color: "#25D366", marginTop: 2 }}>{CHECK_ICON}</span>
                    {f}
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={plano.msg}
                className={`w-full justify-center py-3 text-sm rounded-lg ${
                  plano.destaque ? "bg-[#3B82F6] hover:bg-[#60A5FA] text-white" : ""
                }`}
              >
                Quero esse plano
              </WhatsAppButton>

              <Link
                href={plano.href}
                className="block text-center mt-3 text-xs transition-colors hover:underline"
                style={{ color: "#64748B" }}
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
