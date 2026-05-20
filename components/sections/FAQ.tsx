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
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] text-center mb-12">
          {title}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#0A1628] text-sm sm:text-base">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
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
