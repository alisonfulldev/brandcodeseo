"use client";

import { useState, useEffect, useCallback } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const SESSION_KEY = "brandcode_exit_intent_shown";
const WA_MSG = "Olá! Quero um orçamento gratuito sem compromisso. Pode me ajudar?";

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

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);

  const trigger = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, []);

  useEffect(() => {
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 10) trigger();
    }

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [trigger]);

  function close() {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
        <button
          onClick={close}
          aria-label="Fechar popup"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded"
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

        <div className="text-center">
          <div className="text-5xl mb-4" aria-hidden="true">
            👋
          </div>

          <h2
            id="exit-intent-title"
            className="text-2xl font-extrabold text-[#0A1628] mb-3 leading-tight"
          >
            Espera! Antes de ir embora...
          </h2>

          <p className="text-gray-500 mb-8 text-base">
            Que tal um orçamento gratuito sem compromisso?
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full inline-flex items-center justify-center gap-2
                bg-[#25D366] hover:bg-[#20bc59] active:bg-[#1aa851]
                text-white font-bold
                py-3.5 px-6 rounded-full
                transition-all duration-200 hover:scale-105 active:scale-100
                shadow-md hover:shadow-lg
              "
            >
              {WA_ICON}
              Quero meu orçamento grátis
            </a>

            <button
              onClick={close}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors py-2"
            >
              Não, obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
