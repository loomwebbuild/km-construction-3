'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Instagram, Eye, X } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem, BUSINESS_CONFIG } from '@/lib/business-config';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0B1F3A] text-white relative blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            <span className="w-6 h-px bg-[#C9A24B]" />
            <span>Workmanship & Projects</span>
            <span className="w-6 h-px bg-[#C9A24B]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Residential Portfolio & Craftsmanship
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A glimpse into recent custom homes, elevations, and structural developments across Chennai.
          </p>
        </div>

        {/* 
          ======================================================================
          PORTFOLIO IMAGES NOTICE:
          The photos below are high-quality architectural representations of
          K.M. Constructions project types (Custom Homes, Villas, Apartments,
          Interiors, Duplexes, Remodels). Real site photographs from the client's
          official Instagram (@k.m_constructions_) should replace these paths in
          /lib/business-config.ts as they are cataloged.
          ======================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#071527] border border-[#C9A24B]/20 cursor-pointer transition-all duration-300 hover:border-[#C9A24B] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={project.imageSrc}
                alt={project.altText}
                fill
                referrerPolicy="no-referrer"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700 text-xs text-slate-300">
                    <span>{project.location}</span>
                    <span className="inline-flex items-center gap-1 text-[#E0C075] font-medium">
                      <Eye className="w-3.5 h-3.5" /> View Photo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More on Instagram Call-to-Action */}
        <div className="mt-14 text-center">
          <a
            href={BUSINESS_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] rounded-sm shadow-lg hover:shadow-[0_0_20px_rgba(201,162,75,0.4)] transition-all duration-200 group"
          >
            <Instagram className="w-5 h-5 text-[#0B1F3A]" />
            <span>See More Projects on Instagram</span>
            <ExternalLink className="w-4 h-4 text-[#0B1F3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <p className="text-xs text-slate-400 mt-3">
            Follow <span className="text-[#C9A24B]">@k.m_constructions_</span> for ongoing site updates & recent handover photos
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#071527] border border-[#C9A24B]/40 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0B1F3A]/80 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-700"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={selectedProject.imageSrc}
                alt={selectedProject.altText}
                fill
                referrerPolicy="no-referrer"
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 bg-[#0B1F3A] border-t border-[#C9A24B]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Location: {selectedProject.location}
                </p>
              </div>

              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] px-4 py-2.5 rounded-sm transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit Instagram Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
