"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  Sparkles,
  Factory,
  Truck,
  Leaf,
  Layers,
  ShieldCheck,
  Heart,
  TrendingUp,
  Cpu,
  Clock,
  Users,
  Award,
  Tag,
} from "lucide-react";
import { Counter, Reveal, StaggerReveal } from "@/components/anim";
import { STATS } from "@/lib/data";
import PartnerCta from "@/components/ui/PartnerCta";
import TriangleHero from "@/components/ui/TriangleHero";
import Button from "@/components/ui/Button";
import CompanyJourney from "@/components/about/CompanyJourney";

/* ─────────────────────────────────────────────────────────────
   Main About Page Component
───────────────────────────────────────────────────────────── */
export default function About() {
  const stats = [
    { value: STATS.workforce, suffix: "+", label: "Master Artisans", desc: "Across dual manufacturing units" },
    { value: 2, suffix: "", label: "Production Facilities", desc: "Kerala & Cumbum (Tamil Nadu)" },
    { value: 25000, suffix: "+", label: "Monthly Customers", desc: "Reaching 25,000+ consumers every month" },
    { value: 9000, suffix: "+", label: "Retail Outlets", desc: "Active retail partner counters" },
  ];

  const brandPromises = [
    {
      icon: (
        <Sparkles className="w-6 h-6 text-cluster-coral group-hover:rotate-12 group-hover:scale-115 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-coral/10 border-cluster-coral/20",
      accentColor: "text-cluster-coral",
      number: "01",
      title: "Trendy Style & Comfort",
      desc: "Trendy designs crafted with the perfect blend of contemporary style and all-day breathable comfort.",
      tag: "Design & Ease",
    },
    {
      icon: (
        <Layers className="w-6 h-6 text-cluster-blue group-hover:-rotate-6 group-hover:scale-115 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-blue/10 border-cluster-blue/20",
      accentColor: "text-cluster-blue",
      number: "02",
      title: "High-Quality Fabrics & Stitching",
      desc: "Skin-friendly, combed natural textiles paired with durable, precision reinforced stitching.",
      tag: "Craft & Durability",
    },
    {
      icon: (
        <Tag className="w-6 h-6 text-cluster-teal group-hover:-translate-y-1 group-hover:scale-115 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-teal/10 border-cluster-teal/20",
      accentColor: "text-cluster-teal",
      number: "03",
      title: "Affordable Pricing for Every Segment",
      desc: "Direct-from-factory production value that delivers honest, affordable pricing across every segment.",
      tag: "Accessible Value",
    },
    {
      icon: (
        <Heart className="w-6 h-6 text-cluster-coral group-hover:scale-125 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-coral/10 border-cluster-coral/20",
      accentColor: "text-cluster-coral",
      number: "04",
      title: "Designed for Indian Women",
      desc: "Products thoughtfully designed for Indian women, tailored to their lifestyles, daily needs, and climates.",
      tag: "Women & Lifestyle",
    },
    {
      icon: (
        <Users className="w-6 h-6 text-cluster-blue group-hover:scale-115 group-hover:translate-x-1 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-blue/10 border-cluster-blue/20",
      accentColor: "text-cluster-blue",
      number: "05",
      title: "Commitment to Employee Growth",
      desc: "A steadfast focus on worker welfare, career advancement, and empowering our 70%+ women artisan workforce.",
      tag: "People & Growth",
    },
    {
      icon: (
        <Leaf className="w-6 h-6 text-cluster-teal group-hover:rotate-45 group-hover:scale-115 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-teal/10 border-cluster-teal/20",
      accentColor: "text-cluster-teal",
      number: "06",
      title: "Sustainable Practices & Value",
      desc: "Conscious material stewardship, computerized zero-waste cutting, and long-term value creation.",
      tag: "Green & Enduring",
    },
  ];





  return (
    <div className="bg-white min-h-screen text-cluster-text selection:bg-cluster-blue selection:text-white pb-24">
      {/* ─────────────────────────────────────────────────────────────
          1. REDESIGNED TRIANGLE HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <TriangleHero
        kicker="About Cluster Outfits"
        heading="BUILT FOR"
        headingHighlight="EXCELLENCE."
        description="Integrated apparel incubation and manufacturing built for high velocity retail."
        buttonText="DISCOVER STORY"
        buttonHref="#metrics"
        backgroundImage="/aboutuss.png"
        backgroundAlt="Cluster Outfits Team and Production Operations"
        scrollTargetId="metrics"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. Live Metrics Counter Bar
      ───────────────────────────────────────────────────────────── */}
      <section id="metrics" className="border-b border-cluster-border bg-cluster-surface py-12">
        <Container>
          <StaggerReveal stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-cluster-border">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 ${idx > 0 ? "lg:pl-8" : ""} ${
                  idx >= 2 ? "pt-6 lg:pt-0" : ""
                }`}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cluster-blue leading-none font-manrope tracking-tight">
                  <Counter to={item.value} suffix={item.suffix} />
                </div>
                <div className="text-[13px] font-bold uppercase tracking-wider text-cluster-text mt-1">
                  {item.label}
                </div>
                <div className="text-[12px] text-cluster-muted">{item.desc}</div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FOUNDER’S JOURNEY (Reference Design Featured Card)
      ───────────────────────────────────────────────────────────── */}
      <section id="founder" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <Container className="max-w-6xl">
          <Reveal direction="up" duration={0.8}>
            {/* Main Rounded Feature Card */}
            <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#F8F9FA] via-[#F2F4F7] to-[#E9ECEF] border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* ──── Left Column: Leadership Story ──── */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                  {/* Eyebrow / Kicker */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                      Founder’s Journey
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-slate-900 tracking-tight leading-[1.06] mb-2 font-sans">
                    Devan S
                  </h2>
                  <div className="text-base sm:text-lg font-bold text-cluster-coral uppercase tracking-wider mb-6 font-manrope">
                    Managing Director
                  </div>

                  {/* Story Narrative */}
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    <p>
                      Following <strong className="text-slate-900 font-semibold">14 years of distinguished service in the Indian Air Force</strong>, Devan S took voluntary retirement in 2022 to formally take over and establish <strong className="text-slate-900 font-semibold">Cluster Outfits</strong> as a proprietorship.
                    </p>
                    <p>
                      Through disciplined operational planning and rapid retail network expansion across South India, the enterprise grew into an industrial manufacturing powerhouse, culminating in its incorporation as <strong className="text-slate-900 font-semibold">Cluster Outfits Private Limited in 2025</strong>.
                    </p>
                    <p className="text-slate-800 font-medium border-l-2 border-cluster-teal pl-4 py-0.5 bg-cluster-teal/[0.04] rounded-r-lg">
                      Committed to women’s employment, grassroots entrepreneurship, and inclusive growth in the garment industry.
                    </p>
                  </div>
                </div>

                {/* ──── Right Column: Portrait Photo with Half Rectangle & Blurred Overlay (Matches Reference Design) ──── */}
                <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-[390px] aspect-[3/4.2] sm:aspect-[3/4.4] rounded-tl-[44px] sm:rounded-tl-[52px] rounded-tr-[24px] rounded-b-[24px] sm:rounded-b-[28px] overflow-hidden bg-slate-100/60 border border-slate-200/90 shadow-xl flex items-end justify-center group">
                    {/* 1. Left Half Rectangle with vertical outline "FOUNDER" */}
                    <div className="absolute top-0 left-0 bottom-0 w-[47%] bg-gradient-to-b from-[#E5484D] via-[#DE3D42] to-[#D9383A] rounded-tl-[44px] sm:rounded-tl-[52px] overflow-hidden flex items-center justify-center select-none pointer-events-none z-0">
                      <span
                        className="font-black text-4xl sm:text-5xl lg:text-[52px] tracking-[0.24em] uppercase text-transparent whitespace-nowrap transform -rotate-90 font-sans select-none"
                        style={{
                          WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.42)",
                        }}
                      >
                        FOUNDER
                      </span>
                    </div>

                    {/* 2. Portrait Photo Cutout */}
                    <div className="relative z-10 w-full h-full">
                      <Image
                        src="/founder.png"
                        alt="Devan S – Managing Director, Cluster Outfits Private Limited"
                        fill
                        sizes="(max-width: 1024px) 100vw, 420px"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        priority
                      />
                    </div>

                    {/* 3. Blurred Color Box Overlay at Bottom with Name & Designation */}
                    <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-7 pt-16 sm:pt-24 bg-gradient-to-t from-[#E5484D] via-[#E5484D]/90 to-transparent backdrop-blur-[3px]">
                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight font-sans drop-shadow-sm">
                          Devan S
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide font-manrope mt-1">
                          Managing Director
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>



      {/* ─────────────────────────────────────────────────────────────
          5. Mission & Vision — Dual Editorial Feature with Real Photos
      ───────────────────────────────────────────────────────────── */}
      <section id="mission" className="py-20 md:py-28 bg-white">
        <Container>
          <StaggerReveal stagger={0.16} className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Card */}
            <div className="rounded-[32px] bg-white border border-cluster-border shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              {/* Photo Showcase Top Bay */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                <Image
                  src="/design.jpg"
                  alt="Fashion Pattern Drafting and Design"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Text Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-cluster-text tracking-tight mb-3 leading-tight">
                    OUR MISSION<span className="text-cluster-coral">.</span>
                  </h2>
                  <p className="text-base text-cluster-muted leading-relaxed font-normal">
                    To engineer apparel that elevates everyday living and motherhood through uncompromising textile quality, thoughtful ergonomic silhouettes, and responsible, dignified manufacturing.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="rounded-[32px] bg-white border border-cluster-border shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              {/* Photo Showcase Top Bay */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                <Image
                  src="/cutting.jpg"
                  alt="High Tech Automated CNC Cutting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Text Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-cluster-text tracking-tight mb-4 leading-tight">
                    OUR VISION<span className="text-cluster-blue">.</span>
                  </h2>
                  <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-cluster-blue mt-2 shrink-0" />
                      <span>To be a leading Indian apparel brand known for quality, comfort, and style.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-cluster-coral mt-2 shrink-0" />
                      <span>To create large-scale employment opportunities, especially for women.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-cluster-teal mt-2 shrink-0" />
                      <span>To build a sustainable, technology-driven, and globally recognised fashion company.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. OUR BRAND STRUCTURE & INTEGRATED ECOSYSTEM
      ───────────────────────────────────────────────────────────── */}
      <section id="brand-structure" className="relative bg-cluster-surface border-t border-cluster-border pt-20 md:pt-28">
        <Container>
          {/* Section Header */}
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase font-manrope">
                  Enterprise Architecture
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cluster-text leading-tight">
                OUR BRAND STRUCTURE<span className="text-cluster-teal">.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-cluster-muted leading-relaxed font-normal max-w-2xl mx-auto">
                Under the master holding enterprise of Cluster Outfits Private Limited, our brand structure unites specialized retail consumer labels, high-precision manufacturing, and expansive arterial distribution.
              </p>
            </div>
          </Reveal>

          {/* Overlapping 3 Colored Cards matching Reference Layout */}
          <Reveal direction="up" duration={0.9} delay={0.15}>
            <div className="relative z-20 mb-8 sm:mb-12 md:-mb-28 lg:-mb-32">
              <div className="grid grid-cols-1 md:grid-cols-3 rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-black/10">
                {/* Card 1: House of Brands */}
                <div className="bg-cluster-blue p-8 sm:p-9 lg:p-11 flex flex-col items-center text-center text-white group hover:brightness-105 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center mb-5 sm:mb-6 text-white group-hover:scale-110 group-hover:border-white transition-all">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-manrope mb-3">
                    Cluster &amp; Matrutva
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-light">
                    Our consumer brand pillars: Cluster Womenswear (everyday tops, bottoms, and nightwear) and Matrutva (dedicated nursing and maternity apparel engineered for mother and baby comfort).
                  </p>
                </div>

                {/* Card 2: Manufacturing */}
                <div className="bg-cluster-teal p-8 sm:p-9 lg:p-11 flex flex-col items-center text-center text-white group hover:brightness-105 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center mb-5 sm:mb-6 text-white group-hover:scale-110 group-hover:border-white transition-all">
                    <Factory className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-manrope mb-3">
                    Texvia by Cluster
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-light">
                    Industrial textile and precision garment manufacturing backbone, operating cutting and stitching plants in Kerala and Cumbum with automated CAD and 350+ master artisans.
                  </p>
                </div>

                {/* Card 3: Logistics */}
                <div className="bg-cluster-coral p-8 sm:p-9 lg:p-11 flex flex-col items-center text-center text-white group hover:brightness-105 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center mb-5 sm:mb-6 text-white group-hover:scale-110 group-hover:border-white transition-all">
                    <Truck className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-manrope mb-3">
                    Distribution &amp; Franchise
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-light">
                    Extensive retail reach spanning 9,000+ partner counters, 14 regional staging hubs, and an expanding network of Exclusive Brand Outlets (EBOs) across South India.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>

        {/* ── Dark Bottom Tier (Craft, People & Impact) ── */}
        <div className="bg-[#111317] pt-14 sm:pt-20 md:pt-40 lg:pt-44 pb-20 md:pb-28 text-white relative overflow-hidden border-b border-white/10">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cluster-blue/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cluster-coral/10 rounded-full blur-[140px] pointer-events-none" />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              {/* Left Column: Photo Card with Overlaid Text & CTA */}
              <Reveal direction="up" duration={0.85} className="lg:col-span-6 w-full">
                <div className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden p-8 sm:p-10 md:p-12 flex flex-col justify-end shadow-2xl border border-white/15 group">
                  <Image
                    src="/stitching.jpg"
                    alt="Cluster Outfits Master Artisans at Work"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30" />

                  {/* Overlaid Content */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cluster-coral font-manrope">
                        People &amp; Culture
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight font-manrope">
                      EMPOWERING THE HANDS THAT <br className="hidden sm:block" />
                      <span className="text-cluster-coral">CRAFT EVERY SEAM.</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-md">
                      Dignified, safe, and air-filtered manufacturing facilities where 350+ skilled artisans craft apparel with pride.
                    </p>
                    <div className="pt-2">
                      <Button
                        variant="coral"
                        href="/contact"
                      >
                        Contact Our Team
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right Column: Mission Story & 3 Stats Columns */}
              <Reveal direction="up" duration={0.85} delay={0.15} className="lg:col-span-6 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cluster-teal font-manrope">
                        Our Craft &amp; Commitment
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight font-manrope">
                      ARTISANAL MASTERY AT INDUSTRIAL SCALE.
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#B0B8C4] font-light leading-relaxed">
                    At Cluster, our greatest asset is our workforce of 350+ master tailors, pattern masters, machine operators, and quality inspectors across Kerala and Tamil Nadu.
                  </p>

                  <p className="text-sm sm:text-base text-[#B0B8C4] font-light leading-relaxed">
                    Over 70% of our manufacturing workforce consists of skilled women gaining financial independence. Fair-wage compensation, comprehensive healthcare safeguards, and modern automated training anchor our ethical manufacturing standard.
                  </p>
                </div>

                {/* 3 Stats Columns matching Reference Image */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-6 pt-6 sm:pt-10 border-t border-white/15 mt-6 sm:mt-10">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-5xl font-black text-cluster-coral font-manrope leading-none">
                      <Counter to={350} suffix="+" />
                    </div>
                    <h4 className="text-[11px] sm:text-[13px] font-bold text-white uppercase mt-2 tracking-wider font-manrope">
                      Master Artisans
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-white/50 mt-0.5">Kerala &amp; Tamil Nadu</p>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-5xl font-black text-cluster-coral font-manrope leading-none">
                      <Counter to={70} suffix="%+" />
                    </div>
                    <h4 className="text-[11px] sm:text-[13px] font-bold text-white uppercase mt-2 tracking-wider font-manrope">
                      Women Artisans
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-white/50 mt-0.5">Financially empowered</p>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-5xl font-black text-cluster-coral font-manrope leading-none">
                      <Counter to={9000} suffix="+" />
                    </div>
                    <h4 className="text-[11px] sm:text-[13px] font-bold text-white uppercase mt-2 tracking-wider font-manrope">
                      Retail Partners
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-white/50 mt-0.5">Active South India grid</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. OUR BRAND PROMISE (6 Pillars with Micro-Animated Icons)
      ───────────────────────────────────────────────────────────── */}
      <section id="brand-promise" className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-col gap-10 sm:gap-14">
            <Reveal direction="up" className="max-w-3xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                    Our Commitment to You
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cluster-text leading-none">
                  OUR BRAND PROMISE<span className="text-cluster-coral">.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-cluster-muted leading-relaxed font-normal max-w-2xl">
                  Every garment we design, stitch, and deliver is anchored in these six core promises — uniting trendy style, honest affordability, and human-centric empowerment.
                </p>
              </div>
            </Reveal>

            <StaggerReveal stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {brandPromises.map((p, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-9 rounded-[28px] bg-white border border-cluster-border hover:border-cluster-coral/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${p.iconBg} border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs`}>
                        {p.icon}
                      </div>
                      <span className="text-xs font-bold font-manrope text-slate-400 group-hover:text-slate-800 transition-colors tracking-wider uppercase">
                        {p.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-cluster-coral transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. Sustainable Craft & Material Stewardship (Visual Photo Bays)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cluster-surface border-y border-cluster-border">
        <Container>
          <Reveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase font-manrope">
                  Environmental Stewardship
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-cluster-text tracking-tight leading-none">
                SUSTAINABLE PRODUCTION DISCIPLINE<span className="text-cluster-teal">.</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[15px] sm:text-base text-cluster-muted leading-relaxed font-normal">
                We believe industrial scale must be responsible. We integrate eco-conscious practices across every stage of development — minimizing textile wastage through algorithmic markers and prioritizing skin-safe cottons.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.16} className="grid md:grid-cols-2 gap-8">
            {/* Visual Card 1: Zero-Waste CAD */}
            <div className="rounded-[32px] bg-white border border-cluster-border overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <Image
                  src="/cutting.jpg"
                  alt="Automated zero-waste cutting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-cluster-teal shadow-xs">
                    <Leaf className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-wider text-cluster-teal block">
                    Material Efficiency
                  </span>
                  <h4 className="text-xl font-bold leading-tight">
                    Zero-Waste CAD Nesting
                  </h4>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[13.5px] text-cluster-muted leading-relaxed font-normal">
                  Algorithmic marker layout planning ensures maximum fabric yield and minimal offcuts during automated multi-ply CNC knife cutting across both Kerala and Cumbum facilities.
                </p>
              </div>
            </div>

            {/* Visual Card 2: Breathable Combed Cottons */}
            <div className="rounded-[32px] bg-white border border-cluster-border overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <Image
                  src="/fabric-drape.jpg"
                  alt="Certified combed natural cotton drape"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-cluster-blue shadow-xs">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] font-manrope font-bold uppercase tracking-wider text-white/80 block">
                    Certified Breathable Textiles
                  </span>
                  <h4 className="text-xl font-bold leading-tight">
                    Skin-Friendly Combed Cottons
                  </h4>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[13.5px] text-cluster-muted leading-relaxed font-normal">
                  All fabrics used in Matrutva and Cluster are tested for breathability, color-fastness, and zero harsh chemical residues — specifically engineered for delicate mother and baby contact.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. Company Journey (Company History Timeline)
      ───────────────────────────────────────────────────────────── */}
      <section id="journey">
        <CompanyJourney />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. Partner With Us CTA
      ───────────────────────────────────────────────────────────── */}
      <PartnerCta />
    </div>
  );
}
