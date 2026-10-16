"use client";

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Mail, Phone, MapPin, Building2, Send, Clock, ShieldCheck, Check, ChevronDown, Instagram, Facebook } from 'lucide-react';
import { Reveal } from '@/components/anim';
import PartnerCta from '@/components/ui/PartnerCta';
import TriangleHero from '@/components/ui/TriangleHero';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Please accept the terms & conditions to proceed.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="bg-cluster-surface min-h-screen text-cluster-text selection:bg-cluster-blue selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. Redesigned Triangle Hero
      ───────────────────────────────────────────────────────────── */}
      <TriangleHero
        kicker="Get In Touch"
        heading="LET'S BUILD"
        headingHighlight="TOGETHER."
        description="Partner with South India's fastest growing vertical apparel enterprise today."
        buttonText="GET IN TOUCH"
        buttonHref="#contact-channels"
        backgroundImage="/contactus.jpg"
        backgroundAlt="Cluster Corporate Partnerships and Offices"
        scrollTargetId="contact-channels"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. 3-Card Direct Channels Section (Email, Phone, Address)
      ───────────────────────────────────────────────────────────── */}
      <section id="contact-channels" className="relative z-30 mt-6 sm:-mt-14 md:-mt-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Email Address */}
            <Reveal direction="up" delay={0.05} duration={0.6}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-[0_12px_32px_rgba(5,24,36,0.08)] border border-slate-100 hover:shadow-[0_20px_48px_rgba(5,24,36,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative inline-flex items-center justify-center mb-5 sm:mb-6">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-slate-800" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="10" y="24" width="44" height="28" rx="3" />
                    <polyline points="10 26 32 42 54 26" />
                    <path d="M18 24V12a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12" />
                    <line x1="24" y1="17" x2="34" y2="17" />
                    <line x1="24" y1="21" x2="40" y2="21" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#DE4326] text-white rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
                  Email Address
                </h3>
                <div className="flex flex-col gap-2 text-slate-600 text-sm sm:text-base mt-auto break-all sm:break-normal">
                  <a href="mailto:clusterorg2016@gmail.com" className="hover:text-cluster-coral transition-colors font-medium">
                    clusterorg2016@gmail.com
                  </a>
                  <a href="mailto:contact@clusteroutfits.com" className="hover:text-cluster-coral transition-colors font-medium">
                    contact@clusteroutfits.com
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Phone Number */}
            <Reveal direction="up" delay={0.15} duration={0.6}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-[0_12px_32px_rgba(5,24,36,0.08)] border border-slate-100 hover:shadow-[0_20px_48px_rgba(5,24,36,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative inline-flex items-center justify-center mb-5 sm:mb-6">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-slate-800" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16c2-3.5 4.5-3 6.5-1.5l3 2.5c2 1.5 2 3.8-.5 6.5l-2.2 2.2c-.8.8-.8 2 1.2 4.5l4 4.5c2 2.2 3.2 2.2 4 1.2l2.2-2.2c2.7-2.5 5-2.5 6.5-.5l2.5 3c1.5 2 2 4.5-1 6-4.5 2.5-11.5 1-19.5-7S18 20.5 21 16z" />
                    <path d="M38 18c2.5 1.5 4.5 4 5 7" />
                    <path d="M43 13c4.5 2.5 7.5 7 8 12" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#DE4326] text-white rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
                  Phone Number
                </h3>
                <div className="flex flex-col gap-2 text-slate-600 text-sm sm:text-base mt-auto">
                  <a href="tel:+919995832016" className="hover:text-cluster-coral transition-colors font-medium">
                    +91 99958 32016
                  </a>
                  <a href="tel:+918848483741" className="hover:text-cluster-coral transition-colors font-medium">
                    +91 88484 83741
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Office Address */}
            <Reveal direction="up" delay={0.25} duration={0.6}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-[0_12px_32px_rgba(5,24,36,0.08)] border border-slate-100 hover:shadow-[0_20px_48px_rgba(5,24,36,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative inline-flex items-center justify-center mb-5 sm:mb-6">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-slate-800" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 40 24 35 40 40 52 35 52 51 40 55 24 50 12 55" />
                    <line x1="24" y1="35" x2="24" y2="50" />
                    <line x1="40" y1="40" x2="40" y2="55" />
                    <path d="M32 12c-5.5 0-10 4.5-10 10 0 7.5 10 17 10 17s10-9.5 10-17c0-5.5-4.5-10-10-10z" />
                    <circle cx="32" cy="22" r="3.5" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#DE4326] text-white rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
                  Office &amp; Factory
                </h3>
                <div className="flex flex-col gap-3 text-left text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto w-full">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold block text-[10px] sm:text-[11px] uppercase tracking-wider text-cluster-coral font-manrope mb-1">Registered Office</span>
                    <address className="not-italic flex flex-col text-slate-700">
                      <span className="font-semibold text-slate-800">3rd Floor, VIII/307-1, Thujanth B&amp;B Tower</span>
                      <span>TVM Road, Pulamon (PO), Kottarakara</span>
                      <span>Kollam, Kerala – 691531</span>
                    </address>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold block text-[10px] sm:text-[11px] uppercase tracking-wider text-cluster-teal font-manrope mb-1">Manufacturing Unit (Texvia)</span>
                    <address className="not-italic flex flex-col text-slate-700">
                      <span className="font-semibold text-slate-800">10-K2, P Kuruppathevar Building</span>
                      <span>Near Cumbum New Bus Stand, Cumbum</span>
                      <span>Kambam, Theni, Tamil Nadu – 625516</span>
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Official Social Channels */}
          <Reveal direction="up" delay={0.3} duration={0.6}>
            <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-[0_12px_32px_rgba(5,24,36,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col text-center md:text-left">
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                  Follow &amp; Connect
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-1">
                  Official Social Channels
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                  Stay updated with brand lookbooks, seasonal drops, and franchise expansions.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/cluster_outfits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-pink-500 hover:text-pink-600 bg-slate-50/60 hover:bg-pink-50/30 text-xs sm:text-sm font-semibold text-slate-700 transition-all shadow-2xs hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@cluster_outfits</span>
                </a>

                <a
                  href="https://www.instagram.com/crew.dfashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-pink-500 hover:text-pink-600 bg-slate-50/60 hover:bg-pink-50/30 text-xs sm:text-sm font-semibold text-slate-700 transition-all shadow-2xs hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@crew.dfashion (Crew-D)</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61578611106514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#1877F2] hover:text-[#1877F2] bg-slate-50/60 hover:bg-blue-50/30 text-xs sm:text-sm font-semibold text-slate-700 transition-all shadow-2xs hover:scale-105"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Cluster Outfits Facebook</span>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. Redesigned Contact Section (Reference Image Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-20 sm:pb-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            
            {/* ──── LEFT COLUMN: Editorial Image Card ──── */}
            <Reveal direction="right" duration={0.8} className="lg:col-span-5 h-full">
              <div className="relative h-full min-h-[460px] sm:min-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                {/* Background Image */}
                <Image
                  src="/design.jpg"
                  alt="Cluster Apparel Design and Operations"
                  fill
                  className="object-cover object-center"
                />

                {/* Dark Gradient Overlay for optimal text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />



                {/* Top / Main Text Content */}
                <div className="relative z-10 flex flex-col items-start">
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white leading-[1.08] tracking-tight">
                    Have something in mind?<br />
                    <span className="text-[#DE4326]">Let&apos;s connect.</span>
                  </h2>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light mt-5 max-w-sm">
                    Send us a message to be connected with our manufacturing, retail, and partnership specialists.
                  </p>

                  {/* Curved Arrow Graphic (Reference Style) */}
                  <div className="mt-8 sm:mt-12 text-white/90">
                    <svg
                      className="w-14 h-14 sm:w-16 sm:h-16 -rotate-6"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 24 C16 42, 28 50, 48 42" />
                      <path d="M38 48 L50 42 L46 30" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Status Pill */}
                <div className="relative z-10 mt-auto pt-8">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#22C195] animate-pulse" />
                    <span>Ready To Collaborate</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ──── RIGHT COLUMN: Clean Modern Form ──── */}
            <Reveal direction="left" duration={0.8} delay={0.1} className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-4 lg:p-6 flex flex-col justify-center">
                {isSubmitted ? (
                  <div className="p-8 sm:p-12 rounded-2xl bg-white border border-cluster-border text-center flex flex-col items-center justify-center gap-4 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-[#22C195]/10 text-[#22C195] flex items-center justify-center">
                      <Check className="w-7 h-7 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base max-w-md">
                      Thank you for reaching out. Our team will review your inquiry and connect with you within 24 business hours.
                    </p>
                    <Button
                      type="button"
                      variant="dark"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-lg sm:rounded-xl bg-[#F2F2F2] border border-transparent focus:border-slate-300 focus:bg-white text-slate-800 placeholder:text-slate-500 text-base outline-none transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-lg sm:rounded-xl bg-[#F2F2F2] border border-transparent focus:border-slate-300 focus:bg-white text-slate-800 placeholder:text-slate-500 text-base outline-none transition-all"
                      />
                    </div>

                    {/* Select a Subject Dropdown */}
                    <div className="relative">
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-lg sm:rounded-xl bg-[#F2F2F2] border border-transparent focus:border-slate-300 focus:bg-white text-slate-700 text-base outline-none appearance-none transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select a Subject</option>
                        <option value="wholesale">Brand Stocking & Wholesale (Cluster & Matrutva)</option>
                        <option value="manufacturing">Contract Manufacturing (Texvia Facilities)</option>
                        <option value="distribution">Distribution & Logistics Partnership</option>
                        <option value="careers">Careers & Hiring</option>
                        <option value="general">General Inquiries</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <textarea
                        rows={6}
                        placeholder="Message..."
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full p-5 rounded-lg sm:rounded-xl bg-[#F2F2F2] border border-transparent focus:border-slate-300 focus:bg-white text-slate-800 placeholder:text-slate-500 text-base outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Circular Checkbox: Terms & Conditions (Reference Style) */}
                    <div className="pt-2">
                      <label className="inline-flex items-center gap-3 cursor-pointer select-none group">
                        <button
                          type="button"
                          onClick={() => setAcceptedTerms(!acceptedTerms)}
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                            acceptedTerms
                              ? "border-2 border-[#DE4326]"
                              : "border-2 border-slate-300 group-hover:border-slate-400"
                          }`}
                          aria-label="Toggle terms and conditions"
                        >
                          {acceptedTerms && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#DE4326]" />
                          )}
                        </button>
                        <span className="text-sm text-slate-600 font-medium">
                          I accept your terms &amp; conditions
                        </span>
                      </label>
                    </div>

                    {/* Submit Button (Reference Style Red/Coral Block) */}
                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="coral"
                        className="w-full sm:w-auto"
                      >
                        Submit Now
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* Partner With Us CTA */}
      <PartnerCta />
    </div>
  );
}
