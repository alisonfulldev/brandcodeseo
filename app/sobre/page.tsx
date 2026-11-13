import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, ORG_ID } from "@/lib/seo/schema";
import {
  SITE_URL,
  SITE_NAME,
  PRICES,
  PRECO_INICIAL,
  CIDADE,
  ESTADO,
  ANO_FUNDACAO,
  EQUIPE,
  LINKEDIN_URL,
  WHATSAPP_LINK,
} from "@/lib/constants";
import { PROJETOS } from "@/lib/projetos";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a BrandCode Solutions | Software House",
  description: `Software house fundada em ${ANO_FUNDACAO} em ${CIDADE} (${ESTADO}). Criadora do MeetChat, B2lead e EstudAPP. Sistemas, apps e IA sob medida para todo o Brasil.`,
  slug: "sobre",
});

const fatos = [
  { rotulo: "Fundação", valor: ANO_FUNDACAO },
  { rotulo: "Sede", valor: `${CIDADE}, ${ESTADO}` },
  { rotulo: "Atendimento", valor: "Todo o Brasil, remoto" },
  { rotulo: "Projetos", valor: `A partir de ${PRECO_INICIAL}` },
];

const etapas = [
  { titulo: "Diagnóstico gratuito", desc: "Conversa para entender o processo, o problema e o resultado esperado. Sem custo e sem compromisso." },
  { titulo: "Proposta com escopo e prazo", desc: "Você recebe o que será feito, em quantas etapas, o prazo e o valor final." },
  { titulo: "Entregas incrementais", desc: "O sistema é entregue em partes. Você testa e usa antes da entrega final." },
  { titulo: "Entrega com código-fonte", desc: "Repositório completo, documentação e 3 meses de suporte incluso. Sem mensalidade de licença." },
];

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", url: SITE_URL },
              { name: "Sobre", url: `${SITE_URL}/sobre` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${SITE_URL}/sobre`,
            name: `Sobre a ${SITE_NAME}`,
            mainEntity: { "@id": ORG_ID },
          }),
        }}
      />

      <section className="bg-[#0A1628] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Sobre a {SITE_NAME}
          </h1>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Software house fundada em {ANO_FUNDACAO} em {CIDADE} ({ESTADO}). Desenvolvemos sistemas web, apps mobile,
            chatbots e automações com IA sob medida para empresas de todo o Brasil.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Quem somos</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A {SITE_NAME} é uma software house brasileira com sede em {CIDADE}, no interior de São Paulo. Desde{" "}
                {ANO_FUNDACAO}, desenvolvemos software sob medida para pequenas e médias empresas: sistemas de gestão,
                CRMs, apps, chatbots de WhatsApp e automações com inteligência artificial.
              </p>
              <p>
                Além dos projetos para clientes, criamos e mantemos produtos próprios, como o{" "}
                {PROJETOS.map((p, i) => (
                  <span key={p.slug}>
                    <Link href={`/portfolio#${p.slug}`} className="text-blue-600 hover:underline">{p.nome}</Link>{" "}
                    ({p.tipo.charAt(0).toLowerCase() + p.tipo.slice(1)}){i < PROJETOS.length - 2 ? ", " : i === PROJETOS.length - 2 ? " e o " : ""}
                  </span>
                ))}
                . Usamos neles a mesma arquitetura e o mesmo processo que aplicamos nos projetos dos clientes.
              </p>
              <p>
                O atendimento é 100% remoto, por WhatsApp e videochamada, para qualquer cidade do Brasil. Todo projeto
                parte de {PRECO_INICIAL}, e o valor final é definido em um diagnóstico gratuito.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {fatos.map((f) => (
                <div key={f.rotulo} className="bg-gray-50 rounded-xl p-4 text-center">
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">{f.rotulo}</dt>
                  <dd className="mt-1 font-bold text-[#0A1628]">{f.valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">Equipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EQUIPE.map((p) => (
                <article key={p.id} id={p.id} className="bg-gray-50 rounded-2xl p-6 scroll-mt-28">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#1E40AF] text-white font-bold flex items-center justify-center" aria-hidden="true">
                      {p.nome.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1628]">{p.nome}</h3>
                      <p className="text-sm text-blue-600">{p.cargo}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.bio}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">Como trabalhamos</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {etapas.map((e, i) => (
                <li key={e.titulo} className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-blue-200 mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-bold text-[#0A1628] mb-1">{e.titulo}</h3>
                  <p className="text-gray-500 text-sm">{e.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Nossa missão</h2>
            <p className="text-gray-600 leading-relaxed">
              Acreditamos que toda empresa merece tecnologia de qualidade, sem depender de plataformas genéricas com mensalidades crescentes. Desenvolvemos software sob medida que funciona exatamente no seu processo, com código-fonte entregue e sem lock-in de fornecedor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">O que nos diferencia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "01", titulo: "Código-fonte é seu", desc: "Você recebe o repositório completo. Pode evoluir com qualquer time no futuro." },
                { num: "02", titulo: "IA integrada", desc: "Chatbots, automações e agentes de IA já na arquitetura base de todos os projetos." },
                { num: "03", titulo: "Produtos próprios", desc: "Criamos e operamos nossos próprios sistemas. Sabemos o que é manter software no ar." },
              ].map((d) => (
                <div key={d.num} className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-blue-200 mb-2">{d.num}</div>
                  <h3 className="font-bold text-[#0A1628] mb-1">{d.titulo}</h3>
                  <p className="text-gray-500 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Nossos preços</h2>
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Automação e IA</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.automacao}</div>
                </div>
                <div className="sm:border-x border-blue-900">
                  <div className="text-sm text-gray-400 mb-1">Sistema Web / ERP</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.sistemaWeb}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">App Mobile</div>
                  <div className="text-2xl font-bold text-blue-400">{PRICES.appMobile}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Onde nos encontrar</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                LinkedIn:{" "}
                <a href={LINKEDIN_URL} target="_blank" rel="noopener" className="text-blue-600 hover:underline">
                  {SITE_NAME}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="text-blue-600 hover:underline">
                  (18) 99733-0574
                </a>
              </li>
              <li>Endereço: {CIDADE}, {ESTADO}, Brasil (atendimento remoto)</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Vamos trabalhar juntos?</h2>
            <WhatsAppButton
              message="Olá! Vi o site da BrandCode e quero um orçamento de software."
              className="px-8 py-4 text-base"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
