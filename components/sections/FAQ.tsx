"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({
  items,
  title = "Perguntas Frequentes",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ background: "#0D1526" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-bold"
            style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", color: "#F8FAFC" }}
          >
            {title}
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
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl transition-all duration-200"
              style={{
                background: "#111827",
                border: `1px solid ${openIndex === index ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "12px",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 transition-colors"
                aria-expanded={openIndex === index}
                style={{ color: "#F8FAFC" }}
              >
                <span
                  className="font-semibold text-sm sm:text-base"
                  style={{ color: "#F8FAFC" }}
                >
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#3B82F6" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div
                  className="px-6 pb-5 text-sm"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    lineHeight: 1.75,
                    color: "#94A3B8",
                  }}
                >
                  <p className="pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
