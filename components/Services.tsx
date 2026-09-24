'use client';

import React from 'react';
import {
  Home,
  Building2,
  Layers,
  Building,
  Wrench,
  Paintbrush,
  FileCheck2,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/lib/business-config';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Layers,
  Building,
  Wrench,
  Paintbrush,
  FileCheck2,
  Compass,
};

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const handleServiceInquiry = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B1F3A] text-white relative blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            <span className="w-6 h-px bg-[#C9A24B]" />
            <span>Comprehensive Building Services</span>
            <span className="w-6 h-px bg-[#C9A24B]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            End-to-End Construction Solutions in Chennai
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From plot leveling and foundational civil works to interior finishes and turnkey delivery, we manage your construction with steadfast precision.
          </p>
        </div>

        {/* 8-Card Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Home;
            return (
              <div
                key={service.id}
                className="group relative bg-[#071527] border border-[#C9A24B]/20 hover:border-[#C9A24B] p-7 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#C9A24B] transition-all duration-300 group-hover:w-full" />

                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-sm bg-[#132D52]/80 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B] group-hover:bg-[#C9A24B] group-hover:text-[#0B1F3A] transition-colors duration-300 mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#E0C075] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleServiceInquiry(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9A24B] group-hover:text-white transition-colors"
                  >
                    <span>Enquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Have a custom requirement or existing floor plan?{' '}
            <a
              href="#contact"
              className="text-[#C9A24B] underline hover:text-[#E0C075] font-medium"
            >
              Get in touch for a tailored consultation
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
