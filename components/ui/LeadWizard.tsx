"use client";

import { useState, useEffect, useCallback } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const SEGMENTOS = [
  "Clínica / Saúde",
  "Restaurante / Food",
  "Academia / Fitness",
  "Escola / Educação",
  "Imobiliária",
  "E-commerce",
  "Indústria / Manufatura",
  "Construtora",
  "Advocacia / Jurídico",
  "Contabilidade",
  "Transportadora / Logística",
  "Financeiro / Fintech",
  "SaaS / Produto Digital",
  "Pet Shop",
  "Outro segmento",
];

const SOLUCOES = [
  "Sistema de Gestão (ERP / CRM)",
  "App Mobile (iOS / Android)",
  "Chatbot / Automação WhatsApp",
  "Plataforma SaaS ou Marketplace",
  "Inteligência Artificial",
  "Integração entre sistemas",
  "Ainda não sei — quero consultoria",
];

const PRAZOS = [
  { label: "Urgente", sub: "Preciso em até 2 meses" },
  { label: "Normal", sub: "3 a 6 meses" },
  { label: "Planejando", sub: "Ainda estou avaliando" },
];

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface LeadWizardProps {
  ctaLabel?: string;
  fallbackMsg?: string;
  variant?: "hero" | "inline";
}

export default function LeadWizard({
  ctaLabel = "Quero meu diagnóstico gratuito",
  fallbackMsg = "Olá! Vim pelo site e quero um diagnóstico gratuito.",
  variant = "hero",
}: LeadWizardProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [segmento, setSegmento] = useState("");
  const [segmentoCustom, setSegmentoCustom] = useState("");
  const [solucao, setSolucao] = useState("");
  const [solucaoCustom, setSolucaoCustom] = useState("");
  const [prazo, setPrazo] = useState("");
  const [nome, setNome] = useState("");

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setSegmento("");
      setSegmentoCustom("");
      setSolucao("");
      setSolucaoCustom("");
      setPrazo("");
      setNome("");
    }, 300);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function pickSegmento(s: string) {
    setSegmento(s);
    if (s !== "Outro segmento") setTimeout(() => setStep(2), 180);
  }

  function pickSolucao(s: string) {
    setSolucao(s);
    if (s !== "Ainda não sei — quero consultoria") setTimeout(() => setStep(3), 180);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const segmentoFinal = segmento === "Outro segmento" && segmentoCustom.trim()
      ? segmentoCustom.trim()
      : segmento;
    const solucaoFinal = solucao === "Ainda não sei — quero consultoria" && solucaoCustom.trim()
      ? solucaoCustom.trim()
      : solucao;
    const partes = [
      `Olá!${nome.trim() ? ` Meu nome é ${nome.trim()}.` : ""}`,
      segmentoFinal ? `Segmento: ${segmentoFinal}.` : "",
      solucaoFinal ? `Preciso de: ${solucaoFinal}.` : "",
      prazo ? `Prazo: ${prazo}.` : "",
      "Podem me ajudar com um diagnóstico gratuito?",
    ].filter(Boolean);
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(partes.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  }

  const pillBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "10px 14px",
    color: "#CBD5E1",
    fontSize: "0.8rem",
    cursor: "pointer",
    transition: "all 0.15s",
    textAlign: "left" as const,
    width: "100%",
  };

  const pillSelected: React.CSSProperties = {
    ...pillBase,
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.5)",
    color: "#93C5FD",
  };

  const STEPS = ["Segmento", "Solução", "Contato"];

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2.5 font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.98] ${
          variant === "hero"
            ? "text-base w-full sm:w-auto justify-center"
            : "text-sm"
        }`}
        style={{
          background: "#25D366",
          color: "#fff",
          borderRadius: "8px",
          padding: variant === "hero" ? "14px 32px" : "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {WA_ICON}
        {ctaLabel}
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(6,13,26,0.85)", backdropFilter: "blur(6px)" }}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div
            className="relative w-full max-w-lg"
            style={{
              background: "#0D1526",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Diagnóstico gratuito"
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Fechar"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "#64748B",
                cursor: "pointer",
                lineHeight: 1,
                fontSize: "1.25rem",
              }}
            >
              ✕
            </button>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              {STEPS.map((label, i) => {
                const n = i + 1;
                const done = step > n;
                const active = step === n;
                return (
                  <div key={label} className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: done ? "#3B82F6" : active ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.06)",
                          border: active ? "1px solid #3B82F6" : done ? "none" : "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: done ? "#fff" : active ? "#60A5FA" : "#475569",
                        }}
                      >
                        {done ? "✓" : n}
                      </div>
                      <span style={{ fontSize: "0.7rem", color: active ? "#CBD5E1" : "#475569", fontWeight: active ? 600 : 400 }}>
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div style={{ flex: 1, height: 1, background: done ? "#3B82F6" : "rgba(255,255,255,0.08)", marginLeft: 4 }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 style={{ color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, marginBottom: 6 }}>
                  Qual é o seu segmento?
                </h2>
                <p style={{ color: "#64748B", fontSize: "0.8rem", marginBottom: 16 }}>
                  Clique para selecionar — leva 30 segundos.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SEGMENTOS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => pickSegmento(s)}
                      style={segmento === s ? pillSelected : pillBase}
                      onMouseEnter={(e) => {
                        if (segmento !== s) e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        if (segmento !== s) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {segmento === "Outro segmento" && (
                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <input
                      autoFocus
                      type="text"
                      value={segmentoCustom}
                      onChange={(e) => setSegmentoCustom(e.target.value)}
                      placeholder="Qual é o seu segmento?"
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(59,130,246,0.4)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        color: "#F8FAFC",
                        fontSize: "0.875rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.7)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")}
                      onKeyDown={(e) => { if (e.key === "Enter" && segmentoCustom.trim()) setStep(2); }}
                    />
                    <button
                      type="button"
                      onClick={() => { if (segmentoCustom.trim()) setStep(2); }}
                      disabled={!segmentoCustom.trim()}
                      style={{
                        background: segmentoCustom.trim() ? "#3B82F6" : "rgba(59,130,246,0.2)",
                        color: segmentoCustom.trim() ? "#fff" : "#475569",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 16px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: segmentoCustom.trim() ? "pointer" : "default",
                        transition: "all 0.15s",
                      }}
                    >
                      Continuar →
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 style={{ color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, marginBottom: 6 }}>
                  O que você precisa construir?
                </h2>
                <p style={{ color: "#64748B", fontSize: "0.8rem", marginBottom: 16 }}>
                  Pode ser mais de uma coisa — escolha a principal.
                </p>
                <div className="flex flex-col gap-2">
                  {SOLUCOES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => pickSolucao(s)}
                      style={solucao === s ? pillSelected : pillBase}
                      onMouseEnter={(e) => {
                        if (solucao !== s) e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        if (solucao !== s) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {solucao === "Ainda não sei — quero consultoria" && (
                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <input
                      autoFocus
                      type="text"
                      value={solucaoCustom}
                      onChange={(e) => setSolucaoCustom(e.target.value)}
                      placeholder="Descreva brevemente o seu problema..."
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(59,130,246,0.4)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        color: "#F8FAFC",
                        fontSize: "0.875rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.7)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")}
                      onKeyDown={(e) => { if (e.key === "Enter") setStep(3); }}
                    />
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      style={{
                        background: "#3B82F6",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 16px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                    >
                      Continuar →
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{ background: "none", border: "none", color: "#475569", fontSize: "0.75rem", cursor: "pointer", marginTop: 12 }}
                >
                  ← Voltar
                </button>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 style={{ color: "#F8FAFC", fontSize: "1.1rem", fontWeight: 700, marginBottom: 6 }}>
                  Quase lá — como te chamamos?
                </h2>
                <p style={{ color: "#64748B", fontSize: "0.8rem", marginBottom: 20 }}>
                  Vamos abrir o WhatsApp com tudo preenchido para você.
                </p>

                <div className="flex flex-col gap-4 mb-4">
                  <div>
                    <label style={{ color: "#94A3B8", fontSize: "0.75rem", fontWeight: 500, display: "block", marginBottom: 6 }}>
                      Seu nome *
                    </label>
                    <input
                      required
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: João Silva"
                      autoComplete="given-name"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        padding: "11px 14px",
                        color: "#F8FAFC",
                        fontSize: "0.875rem",
                        outline: "none",
                        width: "100%",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>

                  <div>
                    <label style={{ color: "#94A3B8", fontSize: "0.75rem", fontWeight: 500, display: "block", marginBottom: 6 }}>
                      Qual é o prazo esperado?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {PRAZOS.map((p) => (
                        <button
                          key={p.label}
                          type="button"
                          onClick={() => setPrazo(p.label)}
                          style={{
                            ...pillBase,
                            ...(prazo === p.label ? { background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.5)", color: "#93C5FD" } : {}),
                            textAlign: "center",
                            padding: "10px 8px",
                          }}
                          onMouseEnter={(e) => {
                            if (prazo !== p.label) e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            if (prazo !== p.label) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                          }}
                        >
                          <span style={{ display: "block", fontWeight: 600, fontSize: "0.8rem" }}>{p.label}</span>
                          <span style={{ display: "block", fontSize: "0.65rem", marginTop: 2, color: "#64748B" }}>{p.sub}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "14px 24px",
                    border: "none",
                    cursor: "pointer",
                    marginTop: 4,
                  }}
                >
                  {WA_ICON}
                  Abrir diagnóstico no WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  style={{ background: "none", border: "none", color: "#475569", fontSize: "0.75rem", cursor: "pointer", marginTop: 12, display: "block" }}
                >
                  ← Voltar
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
