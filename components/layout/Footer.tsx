import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, WHATSAPP_LINK, PRICES } from "@/lib/constants";

const servicos = [
  { href: "/criacao-de-sites", label: "Criação de Sites" },
  { href: "/loja-virtual", label: "Loja Virtual" },
  { href: "/landing-page", label: "Landing Page" },
  { href: "/software-sob-medida", label: "Software Sob Medida" },
  { href: "/criacao-de-sites/quanto-custa", label: "Quanto Custa um Site?" },
  { href: "/criacao-de-sites/orcamento", label: "Solicitar Orçamento" },
] as const;

const top15Nichos = [
  { href: "/site-para-medico", label: "Site para Médico" },
  { href: "/site-para-advogado", label: "Site para Advogado" },
  { href: "/site-para-dentista", label: "Site para Dentista" },
  { href: "/site-para-restaurante", label: "Site para Restaurante" },
  { href: "/site-para-imobiliaria", label: "Site para Imobiliária" },
  { href: "/site-para-academia", label: "Site para Academia" },
  { href: "/site-para-salao-de-beleza", label: "Site para Salão de Beleza" },
  { href: "/site-para-pet-shop", label: "Site para Pet Shop" },
  { href: "/site-para-escola", label: "Site para Escola" },
  { href: "/site-para-psicologo", label: "Site para Psicólogo" },
  { href: "/site-para-nutricionista", label: "Site para Nutricionista" },
  { href: "/site-para-construtora", label: "Site para Construtora" },
  { href: "/site-para-contabilidade", label: "Site para Contabilidade" },
  { href: "/site-para-oficina-mecanica", label: "Site para Oficina Mecânica" },
  { href: "/site-para-e-commerce", label: "Site para E-commerce" },
] as const;

const top20Cidades = [
  { href: "/criacao-de-sites/sao-paulo", label: "São Paulo", title: "Criação de Sites em São Paulo" },
  { href: "/criacao-de-sites/rio-de-janeiro", label: "Rio de Janeiro", title: "Criação de Sites no Rio de Janeiro" },
  { href: "/criacao-de-sites/brasilia", label: "Brasília", title: "Criação de Sites em Brasília" },
  { href: "/criacao-de-sites/salvador", label: "Salvador", title: "Criação de Sites em Salvador" },
  { href: "/criacao-de-sites/fortaleza", label: "Fortaleza", title: "Criação de Sites em Fortaleza" },
  { href: "/criacao-de-sites/belo-horizonte", label: "Belo Horizonte", title: "Criação de Sites em Belo Horizonte" },
  { href: "/criacao-de-sites/manaus", label: "Manaus", title: "Criação de Sites em Manaus" },
  { href: "/criacao-de-sites/curitiba", label: "Curitiba", title: "Criação de Sites em Curitiba" },
  { href: "/criacao-de-sites/recife", label: "Recife", title: "Criação de Sites em Recife" },
  { href: "/criacao-de-sites/goiania", label: "Goiânia", title: "Criação de Sites em Goiânia" },
  { href: "/criacao-de-sites/belem", label: "Belém", title: "Criação de Sites em Belém" },
  { href: "/criacao-de-sites/porto-alegre", label: "Porto Alegre", title: "Criação de Sites em Porto Alegre" },
  { href: "/criacao-de-sites/guarulhos", label: "Guarulhos", title: "Criação de Sites em Guarulhos" },
  { href: "/criacao-de-sites/campinas", label: "Campinas", title: "Criação de Sites em Campinas" },
  { href: "/criacao-de-sites/sao-luis", label: "São Luís", title: "Criação de Sites em São Luís" },
  { href: "/criacao-de-sites/sao-goncalo", label: "São Gonçalo", title: "Criação de Sites em São Gonçalo" },
  { href: "/criacao-de-sites/maceio", label: "Maceió", title: "Criação de Sites em Maceió" },
  { href: "/criacao-de-sites/natal", label: "Natal", title: "Criação de Sites em Natal" },
  { href: "/criacao-de-sites/teresina", label: "Teresina", title: "Criação de Sites em Teresina" },
  { href: "/criacao-de-sites/campo-grande", label: "Campo Grande", title: "Criação de Sites em Campo Grande" },
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
              Agência digital especializada em{" "}
              <strong style={{ color: "#94A3B8" }}>sites que vendem sozinhos</strong>.
              SEO técnico avançado e painel administrativo inclusos em todos os projetos.
            </p>

            <div className="mt-4 space-y-1 text-sm" style={{ color: "#64748B" }}>
              <p>
                Site Institucional:{" "}
                <span style={{ color: "#94A3B8", fontWeight: 500 }}>{PRICES.institucional}</span>
              </p>
              <p>
                Loja Virtual:{" "}
                <span style={{ color: "#94A3B8", fontWeight: 500 }}>{PRICES.lojaVirtual}</span>
              </p>
              <p>
                Landing Page:{" "}
                <span style={{ color: "#94A3B8", fontWeight: 500 }}>{PRICES.landingPage}</span>
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
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3 — Sites por Nicho */}
          <nav aria-label="Sites por segmento de negócio">
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Sites por Nicho
            </h3>
            <ul className="space-y-2">
              {top15Nichos.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="footer-link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 4 — Cidades Atendidas */}
          <nav aria-label="Criação de sites por cidade">
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Cidades Atendidas
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {top20Cidades.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} title={c.title} className="footer-link block">
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
