"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const STORAGE_KEY = "brandcode_urgency_banner_closed";
const WA_MSG = "Olá! Quero garantir minha vaga este mês. Pode me ajudar?";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  function close() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628] border-b border-blue-900/70 shadow-lg"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-white flex-1 text-center">
          <span className="text-yellow-400 font-bold mr-1" aria-hidden="true">
            ⚡
          </span>
          <span className="font-bold">3 vagas disponíveis este mês</span>
          {" — "}
          Reserve a sua agora
        </p>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#25D366] hover:bg-[#20bc59]
              text-white text-xs font-bold
              px-4 py-1.5 rounded-full
              transition-colors duration-150 whitespace-nowrap
            "
          >
            Garantir vaga
          </a>

          <button
            onClick={close}
            aria-label="Fechar aviso de vagas"
            className="text-gray-400 hover:text-white transition-colors p-1 rounded"
          >
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </div>
  );
}
