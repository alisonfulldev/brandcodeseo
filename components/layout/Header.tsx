"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { WHATSAPP_URL, SITE_NAME, PRICES } from "@/lib/constants";

const WA_MSG_ORCAMENTO = encodeURIComponent(
  "Olá! Quero solicitar um orçamento para o meu site. Pode me ajudar?"
);
const WA_ORCAMENTO = `${WHATSAPP_URL}?text=${WA_MSG_ORCAMENTO}`;

const servicos = [
  {
    href: "/criacao-de-sites",
    label: "Site Institucional",
    desc: "Site profissional que aparece no Google",
    preco: PRICES.institucional,
  },
  {
    href: "/loja-virtual",
    label: "Loja Virtual",
    desc: "E-commerce otimizado e fácil de gerenciar",
    preco: PRICES.lojaVirtual,
  },
  {
    href: "/landing-page",
    label: "Landing Page",
    desc: "Página de alta conversão focada em leads",
    preco: PRICES.landingPage,
  },
  {
    href: "/software-sob-medida",
    label: "Software Sob Medida",
    desc: "Sistemas e aplicativos personalizados",
    preco: "Sob consulta",
  },
] as const;

const navLinks = [
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

const WA_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const [mobileServicosOpen, setMobileServicosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => setServicosOpen(false), []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    }
    if (servicosOpen) {
      document.addEventListener("mousedown", onClickOutside);
    }
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicosOpen, closeDropdown]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setServicosOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(10,15,30,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-0.5 font-bold text-xl flex-shrink-0"
            aria-label={`${SITE_NAME} — Voltar à página inicial`}
          >
            <span style={{ color: "#3B82F6" }}>Brand</span>
            <span style={{ color: "#F8FAFC" }}>Code</span>
            <span
              className="hidden sm:inline font-normal text-base ml-1"
              style={{ color: "#94A3B8" }}
            >
              Solutions
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Menu principal"
          >
            {/* Dropdown Serviços */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicosOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={servicosOpen}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                style={{ color: "#94A3B8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                Serviços
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicosOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicosOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-1 w-72 rounded-xl shadow-2xl py-2 z-50 border"
                  style={{
                    background: "#0D1526",
                    borderColor: "rgba(59,130,246,0.2)",
                  }}
                >
                  {servicos.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      role="menuitem"
                      onClick={closeDropdown}
                      className="flex flex-col px-4 py-3 transition-colors group"
                      style={{ color: "#F8FAFC" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(59,130,246,0.08)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#F8FAFC" }}
                      >
                        {s.label}
                      </span>
                      <span className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>
                        {s.desc}
                      </span>
                      <span
                        className="text-xs font-medium mt-1"
                        style={{ color: "#3B82F6" }}
                      >
                        {s.preco}
                      </span>
                    </Link>
                  ))}
                  <div
                    className="mt-1 mx-3 pt-2"
                    style={{ borderTop: "1px solid rgba(59,130,246,0.15)" }}
                  >
                    <Link
                      href="/criacao-de-sites/quanto-custa"
                      role="menuitem"
                      onClick={closeDropdown}
                      className="block text-xs py-1 transition-colors"
                      style={{ color: "#94A3B8" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                    >
                      Quanto custa um site?
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium transition-colors duration-150 rounded-md"
                style={{ color: "#94A3B8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200"
              style={{
                border: "1px solid #3B82F6",
                color: "#3B82F6",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3B82F6";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#3B82F6";
              }}
            >
              {WA_ICON}
              Solicitar orçamento
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: "#F8FAFC" }}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "#0D1526", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Menu mobile">
            <button
              onClick={() => setMobileServicosOpen((v) => !v)}
              aria-expanded={mobileServicosOpen}
              className="flex items-center justify-between w-full text-left text-sm font-medium py-2 px-2 rounded-md transition-colors"
              style={{ color: "#94A3B8" }}
            >
              Serviços
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicosOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicosOpen && (
              <div className="pl-4 flex flex-col gap-1 mb-1">
                {servicos.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-col py-2 px-2 rounded-md transition-colors"
                  >
                    <span className="text-sm font-medium" style={{ color: "#F8FAFC" }}>
                      {s.label}
                    </span>
                    <span className="text-xs" style={{ color: "#3B82F6" }}>
                      {s.preco}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-2 px-2 rounded-md transition-colors"
                style={{ color: "#94A3B8" }}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="mt-3 pt-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <a
                href={WA_ORCAMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-sm font-bold py-3 rounded-md transition-colors"
                style={{
                  border: "1px solid #3B82F6",
                  color: "#3B82F6",
                  background: "transparent",
                }}
              >
                {WA_ICON}
                Solicitar orçamento
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
