'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

function CountUpNumber({
  target,
  suffix = '',
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-serif font-bold text-4xl sm:text-5xl text-[#0B1F3A] tabular-nums">
      {count}
      <span className="text-[#C9A24B]">{suffix}</span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F5F0] text-[#1A1A1A] relative overflow-hidden">
      {/* Decorative subtle ambient pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Craftsmanship Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C9A24B]/40 rounded-sm pointer-events-none hidden sm:block" />
              
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-sm overflow-hidden shadow-xl bg-slate-200">
                <Image
                  src="/images/about_craft_builder_1790236171461.jpg"
                  alt="K.M. Constructions team supervising civil work on site in Chennai"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Trust Badge overlay */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0B1F3A] text-white p-5 rounded-sm shadow-xl border border-[#C9A24B]/30 max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24B]/20 flex items-center justify-center text-[#C9A24B] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#C9A24B] font-semibold uppercase tracking-wider">Trusted Quality</p>
                    <p className="text-sm font-medium text-slate-200">Built To Your Exact Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Stats */}
          <div className="lg:col-span-7 lg:pl-4">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#A6812F]">
              <span className="w-6 h-px bg-[#A6812F]" />
              <span>About K.M. Constructions</span>
            </div>

            {/* Section Title */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] tracking-tight leading-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Constructing Homes with Deep Integrity & Personal Care
            </h2>

            {/* Honest, Grounded Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                At <strong className="text-[#0B1F3A] font-semibold">K.M. Constructions</strong>, we believe building a home is one of the most meaningful investments of a lifetime. Based in Maduravoyal, Chennai, we operate with the hands-on care, reliability, and warm accessibility of an experienced builder who treats every project as if it were our own.
              </p>
              <p>
                Rather than imposing standardized floor plans or pushing rigid designs, we listen closely to your vision. Whether you are building an independent duplex home, a family villa, a residential floor extension, or remodeling an existing property, we construct every detail to match your exact lifestyle, budget, and taste.
              </p>
            </div>

            {/* Two Honest Count-up Statistics (No fake numbers) */}
            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-sm border border-slate-200/80 shadow-sm">
                <CountUpNumber target={20} suffix="+ Years" />
                <p className="text-sm font-semibold text-[#0B1F3A] mt-2">Hands-on Experience</p>
                <p className="text-xs text-slate-500 mt-1">Over two decades of trusted construction across Chennai</p>
              </div>

              <div className="bg-white p-6 rounded-sm border border-slate-200/80 shadow-sm">
                <CountUpNumber target={100} suffix="%" />
                <p className="text-sm font-semibold text-[#0B1F3A] mt-2">Built Your Way</p>
                <p className="text-xs text-slate-500 mt-1">100% custom-tailored to your architectural layout and choices</p>
              </div>
            </div>

            {/* Consultation CTA Link */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#A6812F] transition-colors group"
              >
                <span>Discuss your building plans with us</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24B] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
