'use client';

import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'The K.M. Way', href: '#process' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#071527] text-white border-t border-[#C9A24B]/30 relative blueprint-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#C9A24B] bg-[#0B1F3A] flex items-center justify-center text-[#C9A24B] font-serif font-bold text-lg">
                {BUSINESS_CONFIG.shortName}
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                K.M. <span className="font-light text-slate-300">Constructions</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {BUSINESS_CONFIG.tagline} Over two decades of trusted residential and commercial construction experience across Chennai.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#0B1F3A] border border-[#C9A24B]/30 hover:border-[#C9A24B] hover:bg-[#C9A24B] text-slate-300 hover:text-[#0B1F3A] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#0B1F3A] border border-[#C9A24B]/30 hover:border-[#C9A24B] hover:bg-[#C9A24B] text-slate-300 hover:text-[#0B1F3A] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A24B]">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A24B] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A24B]">Office Location</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-1" />
                <span>{BUSINESS_CONFIG.location.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Phone: {BUSINESS_CONFIG.contact.phonePlaceholder}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Email: {BUSINESS_CONFIG.contact.emailPlaceholder}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 K.M. Constructions. All rights reserved.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#C9A24B] transition-colors py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
