'use client';

import React, { useState } from 'react';
import { ChevronDown, Check, Shield } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '@/lib/business-config';

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F7F5F0] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#A6812F]">
            <span className="w-6 h-px bg-[#A6812F]" />
            <span>Our Commitment</span>
            <span className="w-6 h-px bg-[#A6812F]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Why Homeowners Choose K.M. Constructions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Direct builder involvement, honest communication, and genuine attention to your preferences without corporate layers.
          </p>
        </div>

        {/* 5 Numbered Items (Interactive Accordion + Summary Cards) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const numberFormatted = `0${index + 1}`;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-sm border transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen
                    ? 'border-[#C9A24B] ring-1 ring-[#C9A24B]/30'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-sm font-serif font-bold text-[#C9A24B] tabular-nums">
                      {numberFormatted}.
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#0B1F3A]">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-slate-500 bg-slate-100 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C9A24B] text-[#0B1F3A]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                    <div className="pl-8 sm:pl-10 text-slate-700 text-base leading-relaxed">
                      <p>{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-14 max-w-4xl mx-auto bg-white border border-[#C9A24B]/30 p-6 sm:p-8 rounded-sm shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#C9A24B]/10 text-[#C9A24B] flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-base font-serif font-bold text-[#0B1F3A]">Built To Your Vision, Backed by Experience</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every home is constructed under direct personal supervision, ensuring structural durability and attention to your specific layout requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
