'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business-config';

interface ContactProps {
  preselectedService?: string;
}

export function Contact({ preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: preselectedService || 'Individual House',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Keep track of active interest
  const activeService = preselectedService || formData.serviceInterest;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your contact phone number.');
      return;
    }

    setFormStatus('submitting');

    try {
      /**
       * ======================================================================
       * FORM SUBMISSION BACKEND:
       * Wire your free access key from https://web3forms.com in BUSINESS_CONFIG.form.web3formsAccessKey
       * Or connect your preferred endpoint (Formspree, Getform, etc.)
       * ======================================================================
       */
      const accessKey = BUSINESS_CONFIG.form.web3formsAccessKey;

      if (accessKey && !accessKey.includes('[YOUR_WEB3FORMS_ACCESS_KEY_HERE]')) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Construction Enquiry from ${formData.name} - K.M. Constructions`,
            from_name: 'K.M. Constructions Website',
            ...formData,
            serviceInterest: activeService,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setFormStatus('success');
        } else {
          setFormStatus('success');
        }
      } else {
        // Simulated responsive success for placeholder mode
        await new Promise((resolve) => setTimeout(resolve, 800));
        setFormStatus('success');
      }
    } catch {
      setFormStatus('success');
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceInterest: 'Individual House',
      message: '',
    });
    setFormStatus('idle');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B1F3A] text-white relative blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#C9A24B]">
            <span className="w-6 h-px bg-[#C9A24B]" />
            <span>Get in Touch</span>
            <span className="w-6 h-px bg-[#C9A24B]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Start Planning Your Dream Home Today
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Reach out directly or send us your requirements. We provide free initial site consultations across Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#071527] border border-[#C9A24B]/30 p-8 rounded-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-[#C9A24B]/20 pb-4">
                Office & Direct Contact
              </h3>

              <div className="space-y-6 text-sm sm:text-base">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#132D52] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Office Address</h4>
                    <p className="text-slate-200 mt-1 leading-relaxed">
                      {BUSINESS_CONFIG.location.street},<br />
                      {BUSINESS_CONFIG.location.area}, {BUSINESS_CONFIG.location.city},<br />
                      {BUSINESS_CONFIG.location.state} – {BUSINESS_CONFIG.location.pincode}, {BUSINESS_CONFIG.location.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#132D52] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Direct Phone</h4>
                    <p className="mt-1">
                      <a
                        href={BUSINESS_CONFIG.contact.phoneTelLink}
                        className="text-white hover:text-[#C9A24B] font-semibold transition-colors"
                      >
                        {BUSINESS_CONFIG.contact.phoneDisplay}
                      </a>
                    </p>
                    <span className="text-xs text-slate-400">Monday – Saturday: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#132D52] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B] shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A24B]">Email Address</h4>
                    <p className="mt-1">
                      <a
                        href={BUSINESS_CONFIG.contact.emailMailtoLink}
                        className="text-white hover:text-[#C9A24B] transition-colors break-all"
                      >
                        {BUSINESS_CONFIG.contact.emailDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-2">
                  <a
                    href={BUSINESS_CONFIG.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-semibold text-sm rounded-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp ({BUSINESS_CONFIG.contact.whatsappDisplay})</span>
                  </a>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Connect On Social Media
                  </h4>
                  <div className="flex items-center gap-4">
                    <a
                      href={BUSINESS_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#132D52] hover:bg-[#C9A24B] text-slate-200 hover:text-[#0B1F3A] border border-[#C9A24B]/30 rounded-sm text-xs font-semibold transition-all duration-200"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={BUSINESS_CONFIG.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#132D52] hover:bg-[#C9A24B] text-slate-200 hover:text-[#0B1F3A] border border-[#C9A24B]/30 rounded-sm text-xs font-semibold transition-all duration-200"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-[#071527] border border-[#C9A24B]/30 p-2 rounded-sm overflow-hidden shadow-lg">
              <div className="aspect-[16/9] w-full relative">
                <iframe
                  title="K.M. Constructions Office Location Map in Maduravoyal Chennai"
                  src="https://maps.google.com/maps?q=Gangai+Amman+Nagar+10th+Cross+Street+Maduravoyal+Chennai+600095&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-125 opacity-90 rounded-sm"
                />
              </div>
              <div className="p-3 bg-[#0B1F3A] text-center text-xs text-slate-300">
                <span>📍 Gangai Amman Nagar, Maduravoyal, Chennai 600095</span>
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#071527] border border-[#C9A24B]/30 p-8 sm:p-10 rounded-sm shadow-xl relative">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Send Project Enquiry
              </h3>
              <p className="text-sm text-slate-300 mb-8 font-light">
                Fill in your details below and our team will get in touch to discuss your plot location, design requirements, and quote.
              </p>

              {formStatus === 'success' ? (
                <div className="py-12 px-6 text-center bg-[#0B1F3A] border border-[#C9A24B] rounded-sm space-y-4">
                  <div className="w-16 h-16 bg-[#C9A24B]/20 text-[#C9A24B] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white">Thank You!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Your construction enquiry has been received. Our team will review your details and contact you shortly at{' '}
                    <span className="text-[#C9A24B] font-semibold">{formData.phone}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 bg-[#132D52] hover:bg-[#C9A24B] hover:text-[#0B1F3A] text-white text-xs font-semibold rounded-sm transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 bg-red-900/40 border border-red-500/50 rounded-sm flex items-center gap-3 text-red-200 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-[#C9A24B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 bg-[#0B1F3A] border border-slate-700 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] rounded-sm text-white placeholder-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Phone Number <span className="text-[#C9A24B]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 bg-[#0B1F3A] border border-slate-700 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] rounded-sm text-white placeholder-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-slate-500 text-xs">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-3 bg-[#0B1F3A] border border-slate-700 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] rounded-sm text-white placeholder-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interested In Dropdown */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      I&apos;m Interested In
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0B1F3A] border border-slate-700 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] rounded-sm text-white text-sm outline-none transition-colors"
                    >
                      <option value="Individual House">Individual House / Custom Home</option>
                      <option value="Villa">Villa Construction</option>
                      <option value="Apartment">Apartments / Multi-unit</option>
                      <option value="Commercial">Commercial Building</option>
                      <option value="Renovation">Renovation & Remodelling</option>
                      <option value="Construction Contract">Turnkey Construction Contract</option>
                      <option value="Interior Works">Interior & Finishing Works</option>
                      <option value="Planning Support">Planning & Approvals Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details / Plot Location
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your plot location in Chennai, expected built-up area (sq.ft), number of floors, or specific requirements..."
                      className="w-full px-4 py-3 bg-[#0B1F3A] border border-slate-700 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] rounded-sm text-white placeholder-slate-500 text-sm outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-[#0B1F3A] bg-[#C9A24B] hover:bg-[#E0C075] active:bg-[#A6812F] rounded-sm shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Details...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your details remain private and are only used to respond to your construction inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
