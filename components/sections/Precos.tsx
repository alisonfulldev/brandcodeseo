import { WHATSAPP_URL } from "@/lib/constants";

const CHECK_ICON = (
  <svg
    className="w-4 h-4 flex-shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
    style={{ color: "#3B82F6" }}
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
    nome: "Presença Digital",
    preco: "R$ 199",
    tag: null,
    descricao:
      "Para empresas que precisam de um site profissional e confiável na internet.",
    features: [
      "Até 5 páginas profissionais",
      "Site moderno e responsivo (celular e computador)",
      "Hospedagem inclusa",
      "Domínio configurado",
      "Estrutura profissional pronta para crescer",
      "Suporte via WhatsApp",
    ],
    msg: "Olá! Tenho interesse no Plano Presença Digital. Pode me passar mais detalhes?",
    destaque: false,
  },
  {
    nome: "Crescimento Digital",
    preco: "R$ 299",
    tag: "Mais escolhido",
    descricao:
      "Para empresas que querem aparecer no Google e atrair clientes de forma orgânica.",
    features: [
      "Até 20 páginas otimizadas",
      "SEO técnico configurado",
      "Google Meu Negócio configurado",
      "Integração com Google Analytics 4",
      "Indexação acelerada no Google",
      "Monitoramento mensal de desempenho",
      "Ajustes e melhorias periódicas",
    ],
    msg: "Olá! Tenho interesse no Plano Crescimento Digital. Pode me passar mais detalhes?",
    destaque: true,
  },
  {
    nome: "Autoridade Digital",
    preco: "R$ 399",
    tag: null,
    descricao:
      "Para empresas que querem dominar o Google e gerar clientes de forma consistente e escalável.",
    features: [
      "Páginas ilimitadas por cidade, serviço e nicho",
      "SEO avançado com Programmatic SEO",
      "Estrutura focada em geração de leads",
      "Expansão contínua do site todo mês",
      "Otimizações frequentes baseadas em dados",
      "Estratégia de crescimento orgânico de longo prazo",
      "Relatório mensal de desempenho",
    ],
    msg: "Olá! Tenho interesse no Plano Autoridade Digital. Pode me passar mais detalhes?",
    destaque: false,
  },
];

export default function Precos() {
  return (
    <section className="py-20" id="precos" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "#CBD5E1" }}>
            Escolha o plano certo para o tamanho e objetivo do seu negócio.
          </p>
        </div>

        {/* Cards dos planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className="relative rounded-2xl p-8 flex flex-col"
              style={
                plano.destaque
                  ? {
                      background: "#111827",
                      border: "2px solid #3B82F6",
                      borderRadius: "16px",
                      boxShadow: "0 0 40px rgba(59,130,246,0.18)",
                    }
                  : {
                      background: "#111827",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                    }
              }
            >
              {plano.tag && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: "#3B82F6", color: "#fff" }}
                >
                  ★ {plano.tag.toUpperCase()}
                </span>
              )}

              <div>
                <h3 className="font-bold text-xl mb-1" style={{ color: "#F8FAFC" }}>
                  {plano.nome}
                </h3>
                <p className="text-sm mb-5" style={{ color: "#CBD5E1", lineHeight: 1.7 }}>
                  {plano.descricao}
                </p>

                <div className="mb-2">
                  <div
                    className="font-extrabold"
                    style={{ fontSize: "2.25rem", color: "#F8FAFC", letterSpacing: "-0.02em" }}
                  >
                    {plano.preco}
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#94A3B8" }}>
                    taxa de implementação única
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6 mb-8 flex-1">
                {plano.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#CBD5E1" }}
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
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 ${!plano.destaque ? "btn-wa" : ""}`}
                style={
                  plano.destaque
                    ? { background: "#3B82F6", color: "#fff" }
                    : { background: "#25D366", color: "#fff" }
                }
              >
                {WA_ICON}
                Quero esse plano
              </a>
            </div>
          ))}
        </div>

        {/* Frase final */}
        <div className="text-center py-10">
          <h3 className="font-bold text-2xl mb-3" style={{ color: "#F8FAFC" }}>
            Não sabe qual plano escolher?
          </h3>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>
            Fale com um especialista agora. Em 5 minutos a gente indica o plano certo
            para o tamanho e objetivo do seu negócio.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              "Olá! Não sei qual plano escolher. Pode me ajudar?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-wa py-4 px-8 rounded-full font-bold text-base transition-all duration-200 active:scale-95"
            style={{ background: "#25D366", color: "#fff" }}
          >
            {WA_ICON}
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
