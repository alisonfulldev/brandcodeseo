import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, WHATSAPP_LINK, PRICES } from "@/lib/constants";

const servicos = [
  { href: "/software-sob-medida", label: "Software Sob Medida" },
  { href: "/desenvolvimento-de/app-mobile", label: "App Mobile" },
  { href: "/automacao-de/chatbot-whatsapp", label: "Chatbot e Automação WhatsApp" },
  { href: "/desenvolvimento-de/ia-para-negocios", label: "Inteligência Artificial" },
  { href: "/automacao-de/automacao-de-processos", label: "Automação de Processos" },
  { href: "/desenvolvimento-de/erp", label: "Desenvolvimento de ERP" },
  { href: "/desenvolvimento-de/crm", label: "Desenvolvimento de CRM" },
  { href: "/quanto-custa/sistema-de-gestao", label: "Quanto custa um software?" },
] as const;

const top15Segmentos = [
  { href: "/sistema-para/restaurante", label: "Sistema para Restaurante" },
  { href: "/sistema-para/clinica", label: "Sistema para Clínica" },
  { href: "/sistema-para/academia", label: "Sistema para Academia" },
  { href: "/sistema-para/escola", label: "Sistema para Escola" },
  { href: "/sistema-para/imobiliaria", label: "Sistema para Imobiliária" },
  { href: "/sistema-para/salao-de-beleza", label: "Sistema para Salão" },
  { href: "/sistema-para/farmacia", label: "Sistema para Farmácia" },
  { href: "/sistema-para/construtora", label: "Sistema para Construtora" },
  { href: "/sistema-para/hotel", label: "Sistema para Hotel" },
  { href: "/sistema-para/advocacia", label: "Sistema para Advocacia" },
  { href: "/sistema-para/contabilidade", label: "Sistema para Contabilidade" },
  { href: "/sistema-para/oficina-mecanica", label: "Sistema para Oficina" },
  { href: "/sistema-para/industria", label: "Sistema para Indústria" },
  { href: "/sistema-para/transportadora", label: "Sistema para Transportadora" },
  { href: "/sistema-para/pet-shop", label: "Sistema para Pet Shop" },
] as const;

const top20Cidades = [
  { href: "/desenvolvimento-de-software-em/sao-paulo", label: "São Paulo" },
  { href: "/desenvolvimento-de-software-em/rio-de-janeiro", label: "Rio de Janeiro" },
  { href: "/desenvolvimento-de-software-em/brasilia", label: "Brasília" },
  { href: "/desenvolvimento-de-software-em/belo-horizonte", label: "Belo Horizonte" },
  { href: "/desenvolvimento-de-software-em/curitiba", label: "Curitiba" },
  { href: "/desenvolvimento-de-software-em/fortaleza", label: "Fortaleza" },
  { href: "/desenvolvimento-de-software-em/salvador", label: "Salvador" },
  { href: "/desenvolvimento-de-software-em/recife", label: "Recife" },
  { href: "/desenvolvimento-de-software-em/manaus", label: "Manaus" },
  { href: "/desenvolvimento-de-software-em/porto-alegre", label: "Porto Alegre" },
  { href: "/desenvolvimento-de-software-em/goiania", label: "Goiânia" },
  { href: "/desenvolvimento-de-software-em/belem", label: "Belém" },
  { href: "/desenvolvimento-de-software-em/campinas", label: "Campinas" },
  { href: "/desenvolvimento-de-software-em/guarulhos", label: "Guarulhos" },
  { href: "/desenvolvimento-de-software-em/natal", label: "Natal" },
  { href: "/desenvolvimento-de-software-em/maceio", label: "Maceió" },
  { href: "/desenvolvimento-de-software-em/teresina", label: "Teresina" },
  { href: "/desenvolvimento-de-software-em/campo-grande", label: "Campo Grande" },
  { href: "/desenvolvimento-de-software-em/sao-luis", label: "São Luís" },
  { href: "/desenvolvimento-de-software-em/joao-pessoa", label: "João Pessoa" },
] as const;

const WA_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer style={{ background: "#060D1A" }}>
      {/* Bloco principal */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 — Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label={`${SITE_NAME} — Página Inicial`}
            >
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={95}
                height={28}
                className="h-[28px] object-contain"
                style={{ width: "auto" }}
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#64748B" }}>
              Software house especializada em{" "}
              <strong style={{ color: "#94A3B8" }}>desenvolvimento de sistemas, apps e automações</strong>{" "}
              sob medida para empresas que querem crescer com tecnologia.
            </p>

            <div className="mt-4 space-y-1 text-sm" style={{ color: "#64748B" }}>
              <p>
                Sistema Web:{" "}
                <span style={{ color: "#94A3B8", fontWeight: 500 }}>{PRICES.sistemaWeb}</span>
              </p>
              <p>
                App Mobile:{" "}
                <span style={{ color: "#94A3B8", fontWeight: 500 }}>{PRICES.appMobile}</span>
              </p>
              <p>
                Automação / IA:{" "}
                <span style={{ color: "#94A3B8", fontWeight: 500 }}>{PRICES.automacao}</span>
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110"
              style={{ background: "#25D366", color: "#fff" }}
            >
              {WA_ICON}
              Falar no WhatsApp
            </a>
          </div>

          {/* Coluna 2 — Serviços */}
          <nav aria-label="Links de serviços">
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Serviços
            </h3>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="footer-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="font-semibold text-sm uppercase tracking-wider mt-8 mb-4"
              style={{ color: "#94A3B8" }}
            >
              Empresa
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/contato", label: "Contato" },
                { href: "/portfolio", label: "Portfólio" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3 — Software por Segmento */}
          <nav aria-label="Software por segmento de negócio">
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Software por Segmento
            </h3>
            <ul className="space-y-2">
              {top15Segmentos.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="footer-link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 4 — Cidades Atendidas */}
          <nav aria-label="Desenvolvimento de software por cidade">
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Cidades Atendidas
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {top20Cidades.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="footer-link block">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: "#64748B" }}>
              Atendemos todo o Brasil de forma remota.{" "}
              <Link href="/sobre" className="footer-link underline">
                Saiba mais
              </Link>
            </p>
          </nav>
        </div>
      </div>

      {/* Barra inferior */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ color: "#64748B" }}
        >
          <p className="text-sm">
            &copy; {ano}{" "}
            <Link href="/" className="footer-link">
              {SITE_NAME}
            </Link>
            . Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contato" className="footer-link">Contato</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link footer-link-wa"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
