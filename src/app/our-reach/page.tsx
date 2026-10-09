"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { Counter, Reveal, StaggerReveal } from "@/components/anim";
import TriangleHero from "@/components/ui/TriangleHero";
import PartnerCta from "@/components/ui/PartnerCta";
import {
  Store,
  Factory,
  Users,
  Building2,
  MapPin,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function OurReach() {
  // ── Counter Reference Matrix Data (Our Reach at a Glance) ──
  const glanceStats = [
    {
      value: 2,
      suffix: "",
      label: "Core Brands",
    },
    {
      value: 2,
      suffix: "",
      label: "Manufacturing Units",
    },
    {
      value: 350,
      suffix: "+",
      label: "Manufacturing Workforce",
    },
    {
      value: 9000,
      suffix: "+",
      label: "Retail Shops Across Kerala & Tamil Nadu",
    },
  ];

  // ── Retail Network State Breakdown Cards (Reference Boxes Style) ──
  const networkCards = [
    {
      id: "01",
      state: "Kerala",
      metric: "4,000–5,000+",
      title: "Retail Shops Across Kerala",
      description:
        "Comprehensive presence across family showrooms, multi-brand counters, and specialty boutiques throughout all 14 districts of Kerala.",
      icon: Store,
      accentColor: "#0E7293",
      tag: "Primary Market",
    },
    {
      id: "02",
      state: "Tamil Nadu",
      metric: "5,000+",
      title: "Retail Shops Across Tamil Nadu",
      description:
        "Extensive retail footprint across major textile belts, town centers, and commercial hubs with agile weekly replenishment.",
      icon: Building2,
      accentColor: "#FF8A65",
      tag: "Expansion Corridor",
    },
    {
      id: "03",
      state: "Combined Reach",
      metric: "9,000+",
      title: "Active Retail Partners",
      description:
        "Uniting local store partnerships with verified quality standards, zero inventory stockouts, and responsive distributor coordination.",
      icon: Users,
      accentColor: "#22C195",
      tag: "Total Network",
    },
  ];

  return (
    <div className="flex flex-col bg-white selection:bg-cluster-blue selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. Hero Section
      ───────────────────────────────────────────────────────────── */}
      <TriangleHero
        kicker="A Growing Network. A Wider Reach."
        heading="A GROWING"
        headingHighlight="NETWORK."
        description="From manufacturing excellence to an expanding retail presence, Cluster connects quality apparel with retailers and customers across Kerala and Tamil Nadu."
        buttonText="EXPLORE OUR REACH"
        buttonHref="#glance"
        backgroundImage="/ourreach.jpg"
        backgroundAlt="Cluster Apparel Growing Network and Retail Reach"
        scrollTargetId="glance"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. Counter Reference Section: "Our Reach at a Glance"
             (Background Image: sourching.png with Dark Matrix Overlay)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="glance"
        className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#0A1118]"
      >
        {/* Background Image: sourching.png */}
        <div className="absolute inset-0">
          <Image
            src="/sourching.png"
            alt="Cluster Sourcing & Manufacturing Operations"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Deep dark atmospheric gradient overlay matching Reference Image 1 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D14]/95 via-[#0A1624]/85 to-[#070D14]/95" />
          <div className="absolute inset-0 bg-cluster-blue/15 mix-blend-multiply" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Section Header */}
            <Reveal direction="up" className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cluster-coral text-xs font-bold tracking-[0.25em] uppercase font-manrope mb-4">
                <span className="w-2 h-2 rounded-full bg-cluster-coral animate-pulse" />
                <span>Our Reach at a Glance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
                OUR REACH AT A GLANCE<span className="text-cluster-coral">.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/75 font-light max-w-xl mx-auto leading-relaxed">
                Key performance metrics powering our integrated textile and retail ecosystem across South India.
              </p>
            </Reveal>

            {/* ── 2x2 Counter Matrix (Exact Match to Reference Image 1) ── */}
            <Reveal direction="up" delay={0.15} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-md bg-black/25 shadow-2xl">
                {glanceStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:bg-white/[0.04] ${
                      i % 2 === 0 ? "sm:border-r border-white/15" : ""
                    } ${
                      i < 2
                        ? "border-b border-white/15"
                        : "max-sm:border-b max-sm:last:border-b-0 border-white/15"
                    }`}
                  >
                    {/* Big Bold Counter Number */}
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black font-manrope text-white tracking-tight leading-none">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>

                    {/* Blue Horizontal Accent Bar (Reference Style) */}
                    <div className="w-8 sm:w-10 h-1 bg-cluster-blue rounded-full my-3 sm:my-4" />

                    {/* Metric Label */}
                    <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-white/85 font-manrope max-w-xs leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. Retail Network: "Strong Roots. Expanding Markets."
             (Reference Image 2 Box Design with Watermark "01", "02", "03")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-b border-cluster-border">
        <Container>
          {/* Section Header */}
          <Reveal direction="up" className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-cluster-blue rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-blue uppercase font-manrope">
                Our Retail Network
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cluster-text leading-tight sm:leading-none">
              STRONG ROOTS.{" "}
              <span className="text-cluster-blue">EXPANDING MARKETS</span>
              <span className="text-cluster-coral">.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-cluster-muted leading-relaxed font-normal">
              Our growing retail network enables our brands to reach retailers and customers across two key South Indian markets.
            </p>
          </Reveal>

          {/* ── Reference Image 2 Style 3-Box Grid ── */}
          <StaggerReveal stagger={0.14} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {networkCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-7 sm:p-9 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_44px_rgba(0,0,0,0.09)] hover:border-cluster-blue/40 transition-all duration-400 hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Top Header: Icon & Big Faint Watermark Number */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      {/* Circular Icon Badge */}
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: card.accentColor }}
                      >
                        <IconComponent className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      {/* Large Watermark Number ("01", "02", "03") */}
                      <span className="text-5xl sm:text-6xl font-black font-manrope text-slate-100 select-none group-hover:text-slate-200 transition-colors">
                        {card.id}
                      </span>
                    </div>

                    {/* Metric Kicker */}
                    <div className="mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-manrope text-cluster-text tracking-tight block">
                        {card.metric}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-cluster-blue transition-colors">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-3 text-sm text-cluster-muted leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-manrope">
                      {card.tag}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: card.accentColor }}
                    />
                  </div>
                </div>
              );
            })}
          </StaggerReveal>


        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. Monthly Customer Reach & Built to Reach Further
             (Reference Image 2 Bottom Split Box Design)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <Container>
          <div className="flex flex-col gap-10 sm:gap-14 max-w-7xl mx-auto">
            
            {/* ──── ROW 1: 25,000+ Monthly Customers (Brand Oceanic Blue Hero Box) ──── */}
            <Reveal direction="up" duration={0.8} className="w-full">
              <div className="w-full rounded-3xl bg-gradient-to-br from-cluster-blue via-[#0c5e79] to-[#08455a] border border-white/20 text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                
                {/* Ambient glow highlights in brand tones */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/[0.12] via-transparent to-transparent pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cluster-teal/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cluster-coral/10 rounded-full blur-3xl pointer-events-none" />

                {/* Main Content: Monumental 25,000+ Focus (Brand Styling) */}
                <div className="relative z-10 py-4 sm:py-6 lg:py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Side: Editorial Context & Normal Text Heading */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                      
                      {/* Floating Chevron & Brand Marker */}
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl font-mono font-bold tracking-widest text-cluster-coral select-none">
                          »
                        </span>
                        <span className="text-xs font-mono tracking-[0.25em] text-white/70 uppercase select-none">
                          CLUSTER RETAIL ECOSYSTEM
                        </span>
                      </div>

                      {/* Normal Text: Monthly Customers (No Box, No Braces) */}
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                          Monthly Customers
                        </h3>
                      </div>

                      {/* Context Description */}
                      <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-md">
                        Connecting with over <span className="text-white font-bold">25,000+ active shoppers</span> every single month through our vast retail footprint across South India.
                      </p>

                      {/* Geographic Network Status */}
                      <div className="flex items-center gap-4 pt-1">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal animate-pulse" />
                          Kerala &amp; Tamil Nadu
                        </span>
                      </div>

                    </div>

                    {/* Right Side: Colossal 25,000+ Number Display */}
                    <div className="lg:col-span-7 flex flex-col items-start lg:items-end justify-center relative">
                      
                      {/* Ghost Watermark in Background for Cinematic Depth */}
                      <div className="absolute right-0 -top-10 sm:-top-16 text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16rem] font-black font-manrope text-white/[0.08] select-none pointer-events-none tracking-tighter leading-none -z-10">
                        25K
                      </div>

                      {/* Monumental White Number */}
                      <div className="relative">
                        <div className="text-[clamp(4.8rem,13vw,10.5rem)] font-black font-manrope tracking-tighter leading-none text-white drop-shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
                          <Counter to={25000} suffix="+" />
                        </div>
                        <div className="mt-2 text-right">
                          <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-white/70 uppercase">
                            ACTIVE CONSUMERS / MO
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </Reveal>

            {/* ──── ROW 2: Built to Reach Further (Comes Below Box 1) ──── */}
            <Reveal direction="up" duration={0.8} delay={0.1} className="w-full">
              <div className="w-full rounded-3xl bg-white border border-cluster-border/80 p-8 sm:p-12 lg:p-16 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                      Core Foundations
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-10">
                    <h3 className="lg:col-span-5 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-cluster-text leading-tight">
                      Built to Reach Further<span className="text-cluster-coral">.</span>
                    </h3>
                    <p className="lg:col-span-7 text-base sm:text-lg text-cluster-muted leading-relaxed font-normal">
                      Our manufacturing capabilities, dedicated workforce and expanding retail partnerships form the foundation of our growth. As we continue to strengthen our presence across South India, we remain focused on delivering quality apparel and building lasting relationships with our retail partners and customers.
                    </p>
                  </div>

                  {/* 3 Foundation Highlight Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-cluster-border">
                    <div className="p-6 rounded-2xl bg-neutral-50/80 border border-cluster-border/60 hover:border-cluster-blue/30 transition-all">
                      <Factory className="w-6 h-6 text-cluster-blue mb-3" />
                      <h4 className="text-base font-bold text-cluster-text mb-1.5">
                        Manufacturing
                      </h4>
                      <p className="text-sm text-cluster-muted leading-relaxed">
                        Dual facilities with automated precision cutting and scalable textile infrastructure.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-50/80 border border-cluster-border/60 hover:border-cluster-coral/30 transition-all">
                      <Users className="w-6 h-6 text-cluster-coral mb-3" />
                      <h4 className="text-base font-bold text-cluster-text mb-1.5">
                        Dedicated Workforce
                      </h4>
                      <p className="text-sm text-cluster-muted leading-relaxed">
                        350+ master artisans and garment craftsmen ensuring supreme stitch quality and fit.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-50/80 border border-cluster-border/60 hover:border-cluster-teal/30 transition-all">
                      <Store className="w-6 h-6 text-cluster-teal mb-3" />
                      <h4 className="text-base font-bold text-cluster-text mb-1.5">
                        Retail Partnerships
                      </h4>
                      <p className="text-sm text-cluster-muted leading-relaxed">
                        9,000+ active store counters spanning high-traffic destinations across Kerala &amp; Tamil Nadu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. Partner With Us CTA
      ───────────────────────────────────────────────────────────── */}
      <PartnerCta />
    </div>
  );
}
