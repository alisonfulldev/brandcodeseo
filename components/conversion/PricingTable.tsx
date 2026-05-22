import { WHATSAPP_URL } from "@/lib/constants";

const CHECK_ICON = (
  <svg
    className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const WA_ICON = (
  <svg
    className="w-5 h-5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface Plano {
  nome: string;
  preco: string;
  tag: string | null;
  descricao: string;
  features: string[];
  msg: string;
  destaque: boolean;
}

const planos: Plano[] = [
  {
    nome: "Landing Page",
    preco: "Planos a partir de R$ 90/mês",
    tag: null,
    descricao: "Ideal para captar leads e divulgar um serviço específico.",
    features: [
      "Design moderno e responsivo",
      "SEO técnico completo",
      "Integração WhatsApp",
      "Formulário de contato",
      "Hospedagem na Vercel",
    ],
    msg: "Olá! Quero uma landing page. Pode me ajudar?",
    destaque: false,
  },
  {
    nome: "Site Institucional",
    preco: "Planos a partir de R$ 90/mês",
    tag: "Mais escolhido",
    descricao: "O site completo para seu negócio aparecer no Google e vender.",
    features: [
      "Até 8 páginas completas",
      "SEO técnico avançado",
      "Painel administrativo incluso",
      "Schema JSON-LD e Open Graph",
      "Hospedagem na Vercel",
    ],
    msg: "Olá! Quero um site institucional. Pode me ajudar?",
    destaque: true,
  },
  {
    nome: "Loja Virtual",
    preco: "Planos a partir de R$ 90/mês",
    tag: null,
    descricao: "Sua loja online com pagamentos, estoque e SEO para produtos.",
    features: [
      "Catálogo de produtos ilimitado",
      "Pagamento integrado (Pix/Cartão)",
      "Painel de gestão completo",
      "SEO para páginas de produto",
      "Hospedagem na Vercel",
    ],
    msg: "Olá! Quero uma loja virtual. Pode me ajudar?",
    destaque: false,
  },
];

export default function PricingTable() {
  return (
    <section className="py-20 bg-[#0A1628]" id="tabela-precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Preços claros. Sem surpresas.
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Parcelas disponíveis no
            cartão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`rounded-2xl p-8 relative flex flex-col ${
                plano.destaque
                  ? "bg-blue-600 ring-2 ring-blue-400 shadow-2xl md:scale-105"
                  : "bg-[#0D1E3A] border border-blue-900/50"
              }`}
            >
              {plano.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-[#0A1628] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  ★ {plano.tag.toUpperCase()}
                </span>
              )}

              <div>
                <h3 className="text-white font-bold text-xl mb-1">
                  {plano.nome}
                </h3>
                <p className="text-sm text-gray-300 mb-5">{plano.descricao}</p>

                <div className="mb-6">
                  <span className="text-gray-400 text-sm block">a partir de</span>
                  <span className="text-4xl font-extrabold text-white">
                    {plano.preco}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plano.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-gray-200"
                  >
                    {CHECK_ICON}
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(plano.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-full inline-flex items-center justify-center gap-2
                  py-3 px-6 rounded-full font-semibold text-sm
                  transition-all duration-200 hover:scale-105 active:scale-100
                  ${
                    plano.destaque
                      ? "bg-white text-[#0A1628] hover:bg-[#F1F5F9]"
                      : "bg-[#25D366] text-white hover:bg-[#20bc59]"
                  }
                `}
              >
                {WA_ICON}
                Quero esse plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
