'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

export function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-[#0B1F3A]"
    >
      {/* Background Photography with Scrim Overlays */}
      {/* 
        ========================================================================
        HERO PHOTO PLACEHOLDER
        Replace '/images/hero_chennai_residential_1790236153257.jpg' with your
        own high-resolution project photo from K.M. Constructions portfolio.
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full animate-ken-burns">
          <Image
            src="/images/hero_chennai_residential_1790236153257.jpg"
            alt="Modern residential architecture built by K.M. Constructions in Chennai"
            fill
            priority
            referrerPolicy="no-referrer"
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Cinematic Scrim & Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/75 to-[#0B1F3A]/60" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B1F3A]/30 to-[#0B1F3A]/80 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow / Location Trust Marker */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A24B] animate-hero-fade">
            <span className="w-6 sm:w-8 h-px bg-[#C9A24B]" />
            <span>Maduravoyal, Chennai</span>
            <span className="w-6 sm:w-8 h-px bg-[#C9A24B]" />
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade animation-delay-100"
            style={{ textWrap: 'balance' }}
          >
            We Build Your{' '}
            <span className="italic font-normal text-[#C9A24B] drop-shadow-[0_2px_15px_rgba(201,162,75,0.3)]">
              Dream Home
            </span>{' '}
            The Way You Want.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 animate-hero-fade animation-delay-200">
            {BUSINESS_CONFIG.taglineSecondary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-hero-fade animation-delay-300">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] active:bg-[#A6812F] shadow-lg shadow-[#C9A24B]/20 hover:shadow-[#C9A24B]/40 transition-all duration-200 rounded-sm group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F3A] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('#services')}
              className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-[#132D52]/60 hover:bg-[#132D52] border border-[#C9A24B]/40 hover:border-[#C9A24B] transition-all duration-200 rounded-sm"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Gold Marquee Strip Under Hero */}
      <div className="relative z-10 w-full bg-[#071527] border-y border-[#C9A24B]/30 py-3.5 sm:py-4 overflow-hidden shadow-inner">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...BUSINESS_CONFIG.marqueeItems, ...BUSINESS_CONFIG.marqueeItems, ...BUSINESS_CONFIG.marqueeItems].map(
            (item, index) => (
              <div key={index} className="inline-flex items-center mx-4 sm:mx-6">
                <span className="text-xs sm:text-sm font-serif font-semibold tracking-wider text-[#E0C075] uppercase">
                  {item}
                </span>
                <span className="mx-4 text-[#C9A24B]/60 text-xs">◆</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
