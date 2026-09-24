'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export function FloatingContact() {
  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href={BUSINESS_CONFIG.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105"
          aria-label="Chat with K.M. Constructions on WhatsApp"
        >
          {/* Soft pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />
          
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />

          {/* Hover Tooltip Label */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0B1F3A] text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-lg border border-[#C9A24B]/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (strictly under 15% viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0B1F3A]/95 backdrop-blur-md border-t border-[#C9A24B]/30 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5">
          {/* Call Button */}
          <a
            href={BUSINESS_CONFIG.contact.phoneTelLink}
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#132D52] active:bg-[#1a3a69] text-white border border-[#C9A24B]/40 rounded-sm text-xs font-bold tracking-wide"
            aria-label="Call K.M. Constructions"
          >
            <Phone className="w-4 h-4 text-[#C9A24B]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={BUSINESS_CONFIG.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] active:bg-[#20bd5a] text-slate-950 rounded-sm text-xs font-bold tracking-wide shadow-md"
            aria-label="WhatsApp K.M. Constructions"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
