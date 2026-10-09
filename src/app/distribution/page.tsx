"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import DistributionMap from "@/components/distribution/DistributionMap";
import { Reveal, StaggerReveal, Counter } from "@/components/anim";
import PartnerCta from "@/components/ui/PartnerCta";
import TriangleHero from "@/components/ui/TriangleHero";
import Button from "@/components/ui/Button";
import {
  Truck,
  MapPin,
  ArrowRight,
  Boxes,
  Store,
  Check,
  CheckCircle2,
  BarChart3,
  Building2,
} from "lucide-react";

export default function Distribution() {

  const workflowSteps = [
    {
      step: "01",
      title: "Factory Staging & RFID",
      sub: "Dual Facilities",
      desc: "Garments exit our Kerala & Kambam facilities with automated SKU barcoding, pre-sorted into retail-ready distribution batches.",
      icon: Building2,
      color: "text-cluster-blue",
      bgColor: "bg-cluster-blue/10",
      borderColor: "border-cluster-blue/20",
    },
    {
      step: "02",
      title: "Arterial Transit Fleet",
      sub: "Overnight Freight",
      desc: "Scheduled express freight corridors run daily across Kerala, Tamil Nadu, and interstate arterial junctions.",
      icon: Truck,
      color: "text-cluster-coral",
      bgColor: "bg-cluster-coral/10",
      borderColor: "border-cluster-coral/20",
    },
    {
      step: "03",
      title: "14 Regional Staging Nodes",
      sub: "Climate Guarded",
      desc: "Strategically positioned cross-dock hubs keep buffer stock in climate-conditioned, humidity-controlled environments.",
      icon: Boxes,
      color: "text-cluster-teal",
      bgColor: "bg-cluster-teal/10",
      borderColor: "border-cluster-teal/20",
    },
    {
      step: "04",
      title: "Storefront Fulfillment",
      sub: "24–48h Delivery",
      desc: "Direct delivery to 9,000+ retail partners with weekly replenishment cycles that eradicate deadstock risk.",
      icon: Store,
      color: "text-cluster-blue",
      bgColor: "bg-cluster-blue/10",
      borderColor: "border-cluster-blue/20",
    },
  ];

  return (
    <div className="flex flex-col pb-28 bg-white selection:bg-cluster-coral selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. REDESIGNED TRIANGLE HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <TriangleHero
        kicker="Supply Chain Grid"
        heading="GLOBAL LOGISTICS."
        description="Fourteen staging hubs powering rapid 24 to 48 hour replenishment."
        buttonText="EXPLORE NETWORK"
        buttonHref="#map-section"
        backgroundImage="/distributionhero.png"
        backgroundAlt="Cluster Regional Distribution Network and Hubs"
        scrollTargetId="map-section"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. THE ARTERIAL PIPELINE (Step-by-Step Logistics Workflow)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-cluster-border">
        <Container>
          <div className="flex flex-col gap-12 sm:gap-16">
            <Reveal direction="up" className="max-w-3xl">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                    The Distribution Architecture
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cluster-text leading-none">
                  FROM STITCH TO SHELF IN RECORD TIME<span className="text-cluster-coral">.</span>
                </h2>
                <p className="mt-4 text-base text-cluster-muted leading-relaxed font-normal">
                  Our vertically integrated supply chain eliminates middlemen and freight brokerage delays. Here is how millions of garments move reliably across South India every month.
                </p>
              </div>
            </Reveal>

            <StaggerReveal stagger={0.14} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="relative p-7 sm:p-8 rounded-[28px] bg-white border border-cluster-border shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-black font-manrope text-cluster-text/25 group-hover:text-cluster-coral transition-colors">
                          {step.step}
                        </span>
                        <div className={`w-11 h-11 rounded-xl ${step.bgColor} ${step.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <span className="text-[11px] font-manrope uppercase font-bold tracking-widest text-cluster-coral block mb-1">
                        {step.sub}
                      </span>
                      <h3 className="text-xl font-black text-cluster-text tracking-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[13.5px] text-cluster-muted leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-cluster-border/60 flex items-center gap-2 text-[11px] font-manrope font-semibold text-cluster-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cluster-teal" />
                      <span>Verified Standard</span>
                    </div>
                  </div>
                );
              })}
            </StaggerReveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. REFERENCE 3-CARD DISTRIBUTION BENCHMARK SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-cluster-border">


        {/* Max Width Container (Edge-to-Edge Responsive Grid — Not Boxed) */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Top Row: Pill Tags (Cluster Distribution Metrics with Brand Accents) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              <div className="md:col-span-3 flex justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-cluster-border text-[11px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs font-manrope">
                  <span className="w-2 h-2 rounded-full bg-cluster-blue shadow-[0_0_6px_rgba(14,114,147,0.5)]" />
                  99.8% On-Time SLA
                </span>
              </div>
              <div className="md:col-span-4 flex justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-cluster-border text-[11px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs font-manrope">
                  <span className="w-2 h-2 rounded-full bg-cluster-coral shadow-[0_0_6px_rgba(255,138,101,0.5)]" />
                  24h Tier-1 Dispatch
                </span>
              </div>
              <div className="md:col-span-5 flex justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-cluster-border text-[11px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs font-manrope">
                  <span className="w-2 h-2 rounded-full bg-cluster-teal shadow-[0_0_6px_rgba(34,193,149,0.5)]" />
                  14 Hubs · 9,000+ Retail Shops
                </span>
              </div>
            </div>

            {/* 3-Card Group: Responsive Max-Width Grid */}
            <StaggerReveal stagger={0.12} className="relative grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              {/* ── Brand Textile Embroidery Thread Seam Line across cards ── */}
              <div className="absolute top-[50%] left-6 right-6 pointer-events-none z-10 hidden md:block">
                <svg viewBox="0 0 1400 120" fill="none" className="w-full h-24 overflow-visible">
                  <defs>
                    {/* Brand gradient thread from Cluster Blue to Teal to Coral */}
                    <linearGradient id="clusterSeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0E7293" />
                      <stop offset="38%" stopColor="#0E7293" />
                      <stop offset="68%" stopColor="#22C195" />
                      <stop offset="100%" stopColor="#FF8A65" />
                    </linearGradient>
                    <filter id="threadSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Soft ambient thread filament glow */}
                  <path
                    d="M 20 72 Q 420 18, 760 52 T 1360 26"
                    stroke="url(#clusterSeamGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.25"
                    filter="url(#threadSoftGlow)"
                  />

                  {/* Active tactile embroidery running seam / spun stitch */}
                  <path
                    d="M 20 72 Q 420 18, 760 52 T 1360 26"
                    stroke="url(#clusterSeamGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="9 4.5"
                    opacity="0.95"
                  />

                  {/* Node 1: Garment Staging Eyelet Node (Cluster Blue) */}
                  <g transform="translate(240, 52)">
                    <circle cx="0" cy="0" r="9" fill="#FFFFFF" stroke="#0E7293" strokeWidth="2" strokeDasharray="3 2" />
                    <circle cx="0" cy="0" r="4.5" fill="#0E7293" />
                  </g>

                  {/* Node 2: Arterial Freight Seam Knot (Cluster Teal) */}
                  <g transform="translate(860, 44)">
                    <circle cx="0" cy="0" r="9" fill="#FFFFFF" stroke="#22C195" strokeWidth="2" strokeDasharray="3 2" />
                    <circle cx="0" cy="0" r="4.5" fill="#22C195" />
                  </g>

                  {/* Node 3 / Leading Embroidery Needle tip (Cluster Coral) */}
                  <g transform="translate(1335, 24) rotate(4)">
                    {/* Needle eyelet and polished silver steel body */}
                    <path
                      d="M -30 -1.5 L -6 -1.5 L 18 0 L -6 1.5 L -30 1.5 Z"
                      fill="#CBD5E1"
                      stroke="#94A3B8"
                      strokeWidth="0.75"
                    />
                    {/* Needle Eyelet where the Coral Thread enters */}
                    <ellipse cx="-22" cy="0" rx="3.5" ry="1.2" fill="#FF8A65" />
                    {/* Glowing Coral Needle Tip */}
                    <circle cx="18" cy="0" r="2.5" fill="#FF8A65" className="animate-pulse" />
                  </g>
                </svg>
              </div>

              {/* ── CARD 1: Off-White Container Card (99.8% ON-TIME DELIVERY) ── */}
              <div className="md:col-span-3 bg-[#EBEBEA] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 min-h-[440px] group border border-black/5">
                {/* Top Image: Textile Apparel Staging with [+] button */}
                <div>
                  <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-xs border border-black/10">
                    <Image
                      src="/textilestaging.jpg"
                      alt="Cluster Folded Textile Garments and Dispatch Staging"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Black circular [+] badge */}
                    <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/85 text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-110 transition-transform cursor-pointer">
                      +
                    </div>
                  </div>

                  {/* Local thread stitch on mobile */}
                  <div className="my-5 relative flex items-center md:hidden">
                    <svg viewBox="0 0 300 30" fill="none" className="w-full h-6">
                      <path d="M 0 15 Q 150 5, 300 20" stroke="#0E7293" strokeWidth="2.2" strokeDasharray="7 4" />
                      <circle cx="150" cy="12" r="5" fill="#FFFFFF" stroke="#0E7293" strokeWidth="2" />
                      <circle cx="150" cy="12" r="2.5" fill="#0E7293" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Text Content */}
                <div className="pt-4 relative z-10">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-manrope text-neutral-900 tracking-tight leading-none mb-2">
                    99.8%
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-neutral-900 tracking-tight leading-tight">
                    ON-TIME DELIVERY
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal mt-2.5">
                    Audited across all 14 regional nodes with barcode serialization to eliminate retail fulfillment bottlenecks.
                  </p>
                </div>
              </div>

              {/* ── CARD 2: Vibrant Solid Brand Coral Card (24h TIER-1 MARKET DISPATCH) ── */}
              <div className="md:col-span-4 bg-cluster-coral rounded-[32px] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-md shadow-cluster-coral/20 hover:shadow-xl hover:shadow-cluster-coral/30 transition-all duration-300 min-h-[440px] text-white group">
                {/* Signature Top-Right Inverted Notch & Circular White Arrow Button */}
                <div className="absolute top-0 right-0 z-20">
                  <div className="relative p-2.5 sm:p-3 bg-white rounded-bl-[28px]">
                    {/* Inverted fillet curve transitions matching Cluster Coral */}
                    <div className="absolute -left-4 top-0 w-4 h-4 overflow-hidden pointer-events-none">
                      <div className="w-8 h-8 rounded-full border-[8px] border-cluster-coral -top-4 -left-4 absolute" />
                    </div>
                    <div className="absolute right-0 -bottom-4 w-4 h-4 overflow-hidden pointer-events-none">
                      <div className="w-8 h-8 rounded-full border-[8px] border-cluster-coral -bottom-4 -right-4 absolute" />
                    </div>

                    {/* White circular arrow button */}
                    <a
                      href="#map-section"
                      aria-label="Explore Regional Logistics Hubs"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-cluster-coral flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 group/btn"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Middle spacious area */}
                <div className="flex-1" />

                {/* Bottom Text Content in Crisp White */}
                <div className="pt-6 relative z-10">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-manrope text-white tracking-tight leading-none mb-2">
                    24h
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight leading-tight">
                    TIER-1 MARKET DISPATCH
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-white/95 leading-relaxed font-normal mt-2.5">
                    Overnight arterial freight corridors connecting dual manufacturing facilities to Kochi, Chennai, Coimbatore &amp; Madurai.
                  </p>
                </div>
              </div>

              {/* ── CARD 3: Wide Off-White Card (14+ REGIONAL LOGISTICS HUBS) ── */}
              <div className="md:col-span-5 bg-[#EBEBEA] rounded-[32px] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 min-h-[440px] group border border-black/5">
                {/* Right Visual: Textile Fabric Bolt Asset breaking out */}
                <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[60%] lg:w-[62%] pointer-events-none select-none overflow-hidden">
                  <Image
                    src="/sourching.jpg"
                    alt="Cluster Textile Fabric Inspection and Roll Staging"
                    fill
                    className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Smooth horizontal gradient fade into left card content */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EBEBEA] via-[#EBEBEA]/80 to-transparent w-2/5" />
                </div>

                {/* Local trajectory node for mobile */}
                <div className="relative z-10 flex-1" />

                {/* Left Text Content */}
                <div className="pt-6 relative z-10 max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-manrope text-neutral-900 tracking-tight leading-none mb-2">
                    14+
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-neutral-900 tracking-tight leading-tight">
                    REGIONAL LOGISTICS HUBS
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal mt-2.5">
                    Strategically positioned climate-guarded cross-dock staging nodes powering 9,000+ retail storefronts across South India.
                  </p>
                </div>
              </div>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. MAIN RETAIL DISTRIBUTION & 14-HUB INTERACTIVE MAP
      ───────────────────────────────────────────────────────────── */}
      <section id="map-section" className="py-20 md:py-28 bg-white">
        {/* Max Width Container (Edge-to-Edge Responsive Grid — Not Boxed) */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col gap-12 sm:gap-16">
            {/* ── Panoramic Distribution Network Banner (Exact Reference Image Design) ── */}
            <Reveal direction="up" className="w-full">
              <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl border border-black/10 min-h-[460px] flex items-center">
                {/* Background Image: distributionback.png from public folder */}
                <Image
                  src="/distributionback.png"
                  alt="Cluster Regional Distribution Network"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Dark Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/80 md:to-black/65" />

                {/* Content Grid */}
                <div className="relative z-10 w-full p-7 sm:p-10 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Headline, Pill CTA & Thread Flourish */}
                  <div className="lg:col-span-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                      <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                        WHY CHOOSE OUR NETWORK
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black font-manrope text-white tracking-tight leading-[1.08] mt-2 mb-6">
                      Powering <span className="text-cluster-coral">9,000+</span>
                      <br />
                      Retail Stores
                    </h2>

                    <div className="flex items-center">
                      <Button
                        variant="blue"
                        href="#interactive-map"
                      >
                        Explore Interactive Map
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Regional Distribution Split (Minimal White Cards matching Reference Image) */}
                  <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-3.5">
                    {/* Item 1: Kerala */}
                    <div className="bg-white rounded-2xl sm:rounded-[22px] px-5 sm:px-6 py-3.5 sm:py-4 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-all group">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] font-bold text-neutral-900 leading-snug font-manrope">
                        Kerala: 4,000–5,000+ retail counters across 7 staging hubs.
                      </p>
                    </div>

                    {/* Item 2: Tamil Nadu */}
                    <div className="bg-white rounded-2xl sm:rounded-[22px] px-5 sm:px-6 py-3.5 sm:py-4 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-all group">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] font-bold text-neutral-900 leading-snug font-manrope">
                        Tamil Nadu: 5,000+ commercial retail counters.
                      </p>
                    </div>

                    {/* Item 3: Total Network */}
                    <div className="bg-white rounded-2xl sm:rounded-[22px] px-5 sm:px-6 py-3.5 sm:py-4 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-all group">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] font-bold text-neutral-900 leading-snug font-manrope">
                        South India network: <span className="text-cluster-coral font-black">9,000+</span> total active retail showrooms.
                      </p>
                    </div>

                    {/* Item 4: Dispatch SLA */}
                    <div className="bg-white rounded-2xl sm:rounded-[22px] px-5 sm:px-6 py-3.5 sm:py-4 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-all group">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-xs sm:text-[13.5px] font-bold text-neutral-900 leading-snug font-manrope">
                        14 regional logistics hubs with 24h rapid restock SLA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Interactive Stipple Dot-Matrix Map Card (Max Width & Kerala + Tamil Nadu) */}
            <Reveal direction="up" duration={0.8} scale={0.99} className="w-full">
              <div id="interactive-map" className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-[36px] bg-white border border-cluster-border shadow-md scroll-mt-24">
                <DistributionMap />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BUILT FOR HIGH-VELOCITY APPAREL (Exact Reference Image 2 Design)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cluster-surface border-y border-cluster-border">
        {/* Max Width Container (Edge-to-Edge Responsive Grid — Not Boxed) */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col gap-12 sm:gap-16">
            <Reveal direction="up">
              <div className="flex flex-col gap-4 max-w-5xl mb-2 sm:mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                    Enterprise Logistics Capabilities
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
                  <div className="lg:col-span-7">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase text-cluster-text leading-[1.04] tracking-tight">
                      BUILT FOR HIGH-VELOCITY APPAREL<span className="text-cluster-coral">.</span>
                    </h2>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-end">
                    <p className="text-[15px] sm:text-base text-cluster-muted leading-relaxed font-normal">
                      Apparel logistics requires specialized care. We protect fabric integrity, automate inventory visibility, and empower retail partners to operate with zero deadstock.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 4 Clean Vertical Cards Matching Reference Image 2 */}
            <StaggerReveal stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
              {/* ── CARD 1: 24h+ / Rapid Arterial Transit (Building Towers Icon) ── */}
              <div className="p-8 sm:p-9 lg:p-10 rounded-[28px] bg-[#F2F3F5] border border-black/5 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black font-manrope text-neutral-900 tracking-tight leading-none mb-3">
                    24h
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal max-w-[260px]">
                    Overnight arterial transit connecting dual manufacturing facilities to Kochi, Chennai, Coimbatore &amp; Madurai storefronts.
                  </p>
                </div>

                {/* Line-Art Architectural Twin Towers Icon (Matching Image 2 Icon 1) */}
                <div className="pt-10 flex items-center justify-center sm:justify-start">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-900 group-hover:text-cluster-blue group-hover:scale-110 transition-all duration-300"
                  >
                    {/* Tower 1 (Left angled roof) */}
                    <path d="M8 42 L8 22 L18 14 L18 42" />
                    <path d="M13 24 L13 36" />
                    {/* Tower 2 (Center taller angled roof) */}
                    <path d="M18 42 L18 10 L30 18 L30 42" />
                    <path d="M24 18 L24 36" />
                    {/* Tower 3 (Right building) */}
                    <path d="M30 42 L30 26 L40 26 L40 42" />
                    {/* Architectural Baseline */}
                    <path d="M4 42 L44 42" strokeWidth="3" />
                  </svg>
                </div>
              </div>

              {/* ── CARD 2: 9,000+ / Retail Network (Trophy Cup Icon + Folded Swatch Corner) ── */}
              <div className="relative p-8 sm:p-9 lg:p-10 rounded-[28px] bg-[#F2F3F5] border border-black/5 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                {/* Dog-Eared Folded Bottom-Left Corner (Signature Reference Image 2 Feature) */}
                <div className="absolute bottom-0 left-0 w-9 h-9 pointer-events-none z-10">
                  <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-[1px_-1px_3px_rgba(0,0,0,0.1)]">
                    <path d="M 0 0 L 0 36 L 36 36 Z" fill="#F7F7F5" />
                    <path
                      d="M 0 0 L 36 36 L 0 36 Z"
                      fill="#D8DCE3"
                      stroke="rgba(0,0,0,0.08)"
                      strokeWidth="0.75"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black font-manrope text-neutral-900 tracking-tight leading-none mb-3">
                    9,000+
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal max-w-[260px]">
                    Independent retail counters and multi-brand apparel showrooms powered with continuous supply and zero inventory stockouts.
                  </p>
                </div>

                {/* Line-Art Trophy Cup Icon (Matching Image 2 Icon 2) */}
                <div className="pt-10 flex items-center justify-center sm:justify-start">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-900 group-hover:text-cluster-coral group-hover:scale-110 transition-all duration-300"
                  >
                    {/* Trophy Cup Body */}
                    <path d="M12 8 L36 8 L36 20 C36 27 30 32 24 32 C18 32 12 27 12 20 Z" />
                    {/* Left & Right Arched Handles */}
                    <path d="M12 12 C6 12 6 22 12 22" />
                    <path d="M36 12 C42 12 42 22 36 22" />
                    {/* Stem & Stepped Base */}
                    <path d="M24 32 L24 38" />
                    <path d="M18 38 L30 38" />
                    <path d="M15 42 L33 42" strokeWidth="3" />
                  </svg>
                </div>
              </div>

              {/* ── CARD 3: 14+ / Regional Staging Hubs (Window Grid Facility Icon) ── */}
              <div className="p-8 sm:p-9 lg:p-10 rounded-[28px] bg-[#F2F3F5] border border-black/5 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black font-manrope text-neutral-900 tracking-tight leading-none mb-3">
                    14+
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal max-w-[260px]">
                    Dedicated climate-guarded staging hubs with localized buffer stock ensuring rapid weekly store replenishment across South India.
                  </p>
                </div>

                {/* Line-Art Office / Logistics Facility Icon (Matching Image 2 Icon 3) */}
                <div className="pt-10 flex items-center justify-center sm:justify-start">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-900 group-hover:text-cluster-teal group-hover:scale-110 transition-all duration-300"
                  >
                    {/* Main Facility Building */}
                    <rect x="20" y="8" width="20" height="34" rx="1.5" />
                    {/* Adjacent Entrance / Lower Bay */}
                    <path d="M8 42 L8 24 L20 24" />
                    {/* Window Grid Array (2x4) */}
                    <line x1="26" y1="14" x2="28" y2="14" strokeWidth="2.5" />
                    <line x1="32" y1="14" x2="34" y2="14" strokeWidth="2.5" />
                    <line x1="26" y1="20" x2="28" y2="20" strokeWidth="2.5" />
                    <line x1="32" y1="20" x2="34" y2="20" strokeWidth="2.5" />
                    <line x1="26" y1="26" x2="28" y2="26" strokeWidth="2.5" />
                    <line x1="32" y1="26" x2="34" y2="26" strokeWidth="2.5" />
                    <line x1="26" y1="32" x2="28" y2="32" strokeWidth="2.5" />
                    <line x1="32" y1="32" x2="34" y2="32" strokeWidth="2.5" />
                    {/* Baseline */}
                    <path d="M4 42 L44 42" strokeWidth="3" />
                  </svg>
                </div>
              </div>

              {/* ── CARD 4: 99.8% / SLA & Fabric Integrity (Faceted Diamond Gem Icon) ── */}
              <div className="p-8 sm:p-9 lg:p-10 rounded-[28px] bg-[#F2F3F5] border border-black/5 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black font-manrope text-neutral-900 tracking-tight leading-none mb-3">
                    99.8%
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal max-w-[260px]">
                    Audited on-time fulfillment SLA with end-to-end barcode serialization, zero deadstock, and specialized fabric conditioning.
                  </p>
                </div>

                {/* Line-Art Faceted Diamond Icon (Matching Image 2 Icon 4) */}
                <div className="pt-10 flex items-center justify-center sm:justify-start">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-900 group-hover:text-cluster-coral group-hover:scale-110 transition-all duration-300"
                  >
                    {/* Outer Brilliant Diamond Silhouette */}
                    <polygon points="24,6 42,18 24,42 6,18" />
                    {/* Diamond Girdle Horizontal Dividing Line */}
                    <line x1="6" y1="18" x2="42" y2="18" />
                    {/* Top Table Facets */}
                    <line x1="24" y1="6" x2="16" y2="18" />
                    <line x1="24" y1="6" x2="32" y2="18" />
                    {/* Pavilion Lower Facets Converging to Culet */}
                    <line x1="16" y1="18" x2="24" y2="42" />
                    <line x1="32" y1="18" x2="24" y2="42" />
                  </svg>
                </div>
              </div>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. PARTNER WITH US CTA
      ───────────────────────────────────────────────────────────── */}
      <PartnerCta />
    </div>
  );
}
