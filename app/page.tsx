'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Portfolio } from '@/components/Portfolio';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>('Individual House');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleOpenConsultation = () => {
    setSelectedService('Individual House');
  };

  return (
    <main className="min-h-screen bg-[#0B1F3A] text-[#1A1A1A] flex flex-col antialiased selection:bg-[#C9A24B] selection:text-[#0B1F3A]">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Services Grid */}
      <Services onSelectService={handleSelectService} />

      {/* 5. The K.M. Way (Process) */}
      <Process />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Portfolio / Gallery */}
      <Portfolio />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Contact Section */}
      <Contact preselectedService={selectedService} />

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp & Mobile Sticky Action Bar */}
      <FloatingContact />
    </main>
  );
}
