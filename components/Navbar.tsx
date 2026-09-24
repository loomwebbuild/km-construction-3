'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg border-b border-[#C9A24B]/20 py-3.5'
            : 'bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Logo Wordmark with Gold Monogram KM */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C9A24B] rounded-sm py-1"
              aria-label={`${BUSINESS_CONFIG.name} Home`}
            >
              <div className="w-10 h-10 border-2 border-[#C9A24B] bg-[#071527] flex items-center justify-center text-[#C9A24B] font-serif font-bold text-lg tracking-wider shadow-sm group-hover:border-[#E0C075] group-hover:shadow-[0_0_15px_rgba(201,162,75,0.3)] transition-all duration-300">
                {BUSINESS_CONFIG.shortName}
              </div>
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#E0C075] transition-colors">
                K.M. <span className="font-light text-slate-200">Constructions</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 text-slate-200 hover:text-[#C9A24B] transition-colors group text-sm font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A24B] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] active:bg-[#A6812F] shadow-sm hover:shadow-[0_0_20px_rgba(201,162,75,0.4)] transition-all duration-200 whitespace-nowrap rounded-sm"
              >
                Free Consultation
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-slate-200 hover:text-[#C9A24B] hover:bg-[#132D52] rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-[#C9A24B]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0B1F3A] border-l border-[#C9A24B]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out blueprint-grid ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#C9A24B]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 border border-[#C9A24B] bg-[#071527] flex items-center justify-center text-[#C9A24B] font-serif font-bold text-sm">
                  {BUSINESS_CONFIG.shortName}
                </div>
                <span className="font-serif font-bold text-white text-base">
                  K.M. Constructions
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-md"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-[#C9A24B] hover:bg-[#132D52]/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="pt-6 border-t border-[#C9A24B]/20 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 text-sm font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] rounded-sm shadow-md transition-colors"
            >
              Get Free Consultation
            </a>
            <div className="flex gap-2 text-xs text-slate-400 justify-center">
              <span className="text-[#C9A24B]">📍</span>
              <span>Maduravoyal, Chennai 600095</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
