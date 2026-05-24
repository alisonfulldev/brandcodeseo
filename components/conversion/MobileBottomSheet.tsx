"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const SESSION_KEY = "brandcode_mobile_sheet_shown";
const WA_MSG = "Olá! Fiquei com uma dúvida e quero falar com um especialista.";

const IDLE_MS = 20_000;        // 20s sem rolar
const SCROLL_DEPTH = 0.80;     // 80% da página
const DEEP_IDLE_MS = 8_000;    // 8s parado após atingir 80%
const MOBILE_BREAKPOINT = 768;

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

export default function MobileBottomSheet() {
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);

  const firedRef = useRef(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const deepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (deepTimerRef.current) clearTimeout(deepTimerRef.current);
  }, []);

  const fire = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    clearTimers();
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, [clearTimers]);

  useEffect(() => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const mobileTimer = setTimeout(() => setIsMobile(true), 0);

    if (sessionStorage.getItem(SESSION_KEY)) return () => clearTimeout(mobileTimer);

    // Gatilho 1: 20s sem rolar
    idleTimerRef.current = setTimeout(fire, IDLE_MS);

    function onScroll() {
      if (firedRef.current) return;

      // Resetar timer de ociosidade total a cada rolagem
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(fire, IDLE_MS);

      // Gatilho 2: 80% da página rolada
      const pct =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (pct >= SCROLL_DEPTH) {
        // Reiniciar timer de parada profunda a cada rolagem dentro da zona
        if (deepTimerRef.current) clearTimeout(deepTimerRef.current);
        deepTimerRef.current = setTimeout(fire, DEEP_IDLE_MS);
      } else {
        // Usuário voltou para cima — cancelar timer profundo
        if (deepTimerRef.current) clearTimeout(deepTimerRef.current);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(mobileTimer);
      window.removeEventListener("scroll", onScroll);
      clearTimers();
    };
  }, [fire, clearTimers]);

  function close() {
    setVisible(false);
  }

  if (!isMobile) return null;

  return (
    <>
      {/* Backdrop leve — não bloqueia a tela inteira */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/30
          transition-opacity duration-300
          ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
        onClick={close}
      />

      {/* Bottom sheet — 50% da altura da tela */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50
          h-[50dvh] min-h-[260px]
          bg-white rounded-t-2xl shadow-2xl
          transition-transform duration-300 ease-out
          ${visible ? "translate-y-0" : "translate-y-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-hidden={!visible}
        aria-labelledby="mobile-sheet-title"
      >
        {/* Handle decorativo */}
        <div className="flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Botão fechar */}
        <button
          onClick={close}
          aria-label="Fechar"
          className="
            absolute top-4 right-4
            text-gray-400 hover:text-gray-700
            transition-colors p-1 rounded-full
          "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Conteúdo centralizado verticalmente */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-36px)] px-6 text-center gap-6">
          <div className="space-y-2">
            <h2
              id="mobile-sheet-title"
              className="text-2xl font-extrabold text-[#0A1628] leading-tight"
            >
              Ficou com dúvida?
            </h2>
            <p className="text-gray-500 text-base">
              Fale agora com um especialista no WhatsApp
            </p>
          </div>

          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 btn-wa font-bold text-base py-4 px-6 rounded-full transition-all duration-150"
            style={{ background: "#25D366", color: "#fff" }}
          >
            {WA_ICON}
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
