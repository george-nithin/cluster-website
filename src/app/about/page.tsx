"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Sparkles,
  ArrowRight,
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
} from "lucide-react";
import { Counter, Reveal, StaggerReveal } from "@/components/anim";
import { STATS } from "@/lib/data";
import PartnerCta from "@/components/ui/PartnerCta";
import TriangleHero from "@/components/ui/TriangleHero";
import Button from "@/components/ui/Button";

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



  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-cluster-blue" />,
      title: "Industrial Automation",
      desc: "Precision CAD pattern grading, tension-free computerized fabric spreaders, and CNC knife cutting with ±0.5mm tolerances.",
    },
    {
      icon: <Heart className="w-6 h-6 text-cluster-coral" />,
      title: "Dignified Artisan Craft",
      desc: "Over 70% of our manufacturing workforce is women. We provide safe, air-filtered environments, fair compensation, and specialized training.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cluster-teal" />,
      title: "Zero-Defect Standards",
      desc: "AQL 1.5 quality checks across 6 critical manufacturing checkpoints, including automated dual-head needle detector scans.",
    },
    {
      icon: <Clock className="w-6 h-6 text-cluster-blue" />,
      title: "14-Day Speed-to-Shelf",
      desc: "Vertical integration eliminates vendor friction, allowing seasonal concepts to progress from prototype to retail store shelves in 14 days.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-cluster-teal" />,
      title: "Conscious Material Care",
      desc: "Algorithmic marker layout planning ensures minimal textile offcuts, paired exclusively with certified natural breathable cottons.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cluster-coral" />,
      title: "Retail Partner Success",
      desc: "Weekly replenishment cadences and dedicated support that help 9,000+ retail counters operate with zero deadstock risk.",
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
          3. Mission & Vision — Dual Editorial Feature with Real Photos
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <StaggerReveal stagger={0.16} className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Card (Design & Ergonomics with Design Photo) */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-bold tracking-widest uppercase text-cluster-coral border border-black/[0.04] shadow-sm">
                    Our Purpose
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase font-manrope tracking-wider text-white/80 block">
                    Zero Compromise
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                    Ethical Fashion Engineering
                  </h3>
                </div>
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

                <div className="mt-8 pt-6 border-t border-cluster-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="px-3 py-1 rounded-md bg-[#F7F7F5] font-manrope font-semibold text-cluster-text border border-cluster-border">
                    100% Breathable Cotton
                  </span>
                  <span className="font-manrope text-cluster-coral font-bold uppercase tracking-wider">
                    Motherhood &amp; Lifestyle
                  </span>
                </div>
              </div>
            </div>

            {/* Vision Card (Industrial Scale & Speed with Cutting Photo) */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-bold tracking-widest uppercase text-cluster-blue border border-black/[0.04] shadow-sm">
                    Our Horizon
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase font-manrope tracking-wider text-white/80 block">
                    Speed-To-Shelf
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                    South India&apos;s Agile Grid
                  </h3>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-cluster-text tracking-tight mb-3 leading-tight">
                    OUR VISION<span className="text-cluster-blue">.</span>
                  </h2>
                  <p className="text-base text-cluster-muted leading-relaxed font-normal">
                    To build South India’s most trusted and agile apparel ecosystem — seamlessly connecting artisanal tailoring mastery with computerized automation and an expansive 9,000+ retail network.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-cluster-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="px-3 py-1 rounded-md bg-[#F7F7F5] font-manrope font-semibold text-cluster-text border border-cluster-border">
                    9,000+ Retail Counters
                  </span>
                  <span className="font-manrope text-cluster-blue font-bold uppercase tracking-wider">
                    24–48h Fulfillment
                  </span>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE INTEGRATED ECOSYSTEM & ARTISAN WORKFORCE (Combined Section)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-cluster-surface border-t border-cluster-border pt-20 md:pt-28">
        <Container>
          {/* Section Header */}
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase font-manrope">
                  Unified Operational Model
                </span>
                <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cluster-text leading-tight">
                THE INTEGRATED ECOSYSTEM<span className="text-cluster-teal">.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-cluster-muted leading-relaxed font-normal max-w-2xl mx-auto">
                Cluster Outfits operates as a complete, unified pipeline. By controlling every stage from fabric procurement to retail delivery, we guarantee exceptional quality, pricing value, and unmatched speed-to-market.
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
                    In-house purpose-built labels spanning versatile everyday contemporary womenswear and South India’s premier maternity and nursing wear line.
                  </p>
                </div>

                {/* Card 2: Manufacturing */}
                <div className="bg-cluster-teal p-8 sm:p-9 lg:p-11 flex flex-col items-center text-center text-white group hover:brightness-105 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center mb-5 sm:mb-6 text-white group-hover:scale-110 group-hover:border-white transition-all">
                    <Factory className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-manrope mb-3">
                    Texvia Dual Facilities
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-light">
                    Twin precision manufacturing plants in Kerala and Tamil Nadu with automated CAD spreading, 350+ master tailors, and strict AQL 1.5 audits.
                  </p>
                </div>

                {/* Card 3: Logistics */}
                <div className="bg-cluster-coral p-8 sm:p-9 lg:p-11 flex flex-col items-center text-center text-white group hover:brightness-105 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center mb-5 sm:mb-6 text-white group-hover:scale-110 group-hover:border-white transition-all">
                    <Truck className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-manrope mb-3">
                    14-Node Regional Grid
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-light">
                    Strategically positioned distribution hubs delivering guaranteed 24–48h replenishment to 9,000+ active retail counters across South India.
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
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cluster-coral font-manrope">
                      People &amp; Culture
                    </span>
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
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cluster-teal font-manrope block mb-3">
                      Our Craft &amp; Commitment
                    </span>
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
          6. Core Values & Principles (Clean Interactive Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-col gap-10 sm:gap-14">
            <Reveal direction="up" className="max-w-3xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-cluster-blue rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-blue uppercase font-manrope">
                    Foundational Non-Negotiables
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cluster-text leading-none">
                  THE VALUES WE STAND BY<span className="text-cluster-blue">.</span>
                </h2>
              </div>
            </Reveal>

            <StaggerReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-[28px] bg-white border border-cluster-border hover:border-cluster-blue/40 hover:shadow-lg transition-all duration-300 group flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cluster-text tracking-tight">
                    {v.title}
                  </h3>
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
          9. Partner With Us CTA
      ───────────────────────────────────────────────────────────── */}
      <PartnerCta />
    </div>
  );
}
