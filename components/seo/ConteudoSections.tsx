import type { ConteudoPagina } from "@/lib/conteudo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface ConteudoSectionsProps {
  conteudo: ConteudoPagina;
  nome: string;
  whatsappMsg: string;
}

export function ConteudoIntro({ conteudo, nome }: Omit<ConteudoSectionsProps, "whatsappMsg">) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">
          O que é e para quem é {nome.toLowerCase()}
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {conteudo.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConteudoDetalhes({ conteudo, nome, whatsappMsg }: ConteudoSectionsProps) {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-8 text-center">
            Funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {conteudo.funcionalidades.map((f) => (
              <div key={f.titulo} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-[#0A1628] mb-2">{f.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-2xl p-8">
            <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">{conteudo.exemplo.titulo}</h2>
            <p className="text-gray-700 leading-relaxed">{conteudo.exemplo.texto}</p>
          </div>

          <h2 className="text-xl font-extrabold text-[#0A1628] mt-12 mb-4">Integrações comuns</h2>
          <ul className="flex flex-wrap gap-2">
            {conteudo.integracoes.map((i) => (
              <li key={i} className="text-sm text-gray-700 bg-gray-100 rounded-lg px-3 py-1.5">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="precos" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3 text-center">
            Quanto custa {nome.toLowerCase()}?
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Faixas de referência. O valor exato sai do diagnóstico gratuito. Prazo típico: {conteudo.prazo}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {conteudo.precos.map((f, i) => (
              <div
                key={f.label}
                className={`bg-white rounded-2xl p-6 border ${i === 1 ? "border-blue-500 shadow-lg shadow-blue-100" : "border-gray-200"}`}
              >
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">{f.label}</p>
                <p className="text-2xl font-extrabold text-[#0A1628] mb-3">{f.valor}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <WhatsAppButton message={whatsappMsg} className="px-8 py-3 text-sm">
              Quero um orçamento exato
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
