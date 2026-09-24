'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_DATA, BUSINESS_CONFIG } from '@/lib/business-config';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-cost');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F7F5F0] text-[#1A1A1A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#A6812F]">
            <span className="w-6 h-px bg-[#A6812F]" />
            <span>Frequently Asked Questions</span>
            <span className="w-6 h-px bg-[#A6812F]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Clear Answers to Your Construction Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Everything you need to know about planning, building, and timelines with K.M. Constructions in Chennai.
          </p>
        </div>

        {/* 6 FAQ Accordion Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen
                    ? 'border-[#C9A24B] ring-1 ring-[#C9A24B]/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#0B1F3A] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-slate-500 bg-slate-100 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C9A24B] text-[#0B1F3A]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-slate-700 text-base leading-relaxed border-t border-slate-100 font-normal"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Contact Note */}
        <div className="mt-12 text-center p-6 bg-white border border-slate-200 rounded-sm">
          <p className="text-sm text-slate-700">
            Have a specific question about your plot or structural requirements?
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] px-5 py-2.5 rounded-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request a Site Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
