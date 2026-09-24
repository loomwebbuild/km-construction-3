'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/lib/business-config';
import { CheckCircle } from 'lucide-react';

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#071527] text-white relative overflow-hidden border-t border-[#C9A24B]/15">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            <span className="w-6 h-px bg-[#C9A24B]" />
            <span>How We Work</span>
            <span className="w-6 h-px bg-[#C9A24B]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            The K.M. Way: Transparent 5-Step Process
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A clear, predictable roadmap from initial discussion to stepping into your newly completed home.
          </p>
        </div>

        {/* Process Steps Timeline (Desktop horizontal line, Mobile vertical flow) */}
        <div className="relative">
          {/* Connecting Gold Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C9A24B]/20 via-[#C9A24B] to-[#C9A24B]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.stepNumber}
                className="relative bg-[#0B1F3A]/80 border border-[#C9A24B]/20 p-6 sm:p-7 rounded-sm hover:border-[#C9A24B] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="w-14 h-14 rounded-full bg-[#071527] border-2 border-[#C9A24B] flex items-center justify-center text-[#C9A24B] font-serif font-bold text-lg mb-6 shadow-md group-hover:bg-[#C9A24B] group-hover:text-[#0B1F3A] transition-colors duration-300">
                    {step.stepNumber}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-semibold text-white group-hover:text-[#E0C075] transition-colors mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Status indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-[#C9A24B]/80">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Phase {step.stepNumber}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-16 bg-[#0B1F3A] border border-[#C9A24B]/30 p-8 rounded-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif font-semibold text-white">Ready to begin Phase 01?</h4>
            <p className="text-sm text-slate-300 mt-1">
              Schedule a no-obligation consultation to review your plot and construction ideas.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] rounded-sm whitespace-nowrap shadow-md transition-colors"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
