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
  CheckCircle2,
  MapPin,
  TrendingUp,
  Sparkles,
  ArrowRight,
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

          {/* ── Summary Callout ── */}
          <Reveal direction="up" delay={0.2} className="mt-8 sm:mt-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-cluster-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cluster-blue/10 text-cluster-blue flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <p className="text-sm sm:text-base text-cluster-text font-medium leading-relaxed">
                  With an established presence across both states, we continue to expand our distribution network and strengthen our relationships with retail partners.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. Monthly Customer Reach & Built to Reach Further
             (Reference Image 2 Bottom Split Box Design)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            
            {/* ──── LEFT BOX: 25,000+ Monthly Customers (Rich Oceanic Color Box with Typographic Layout) ──── */}
            <Reveal direction="right" duration={0.8} className="lg:col-span-5 h-full">
              <div className="h-full rounded-3xl bg-gradient-to-br from-cluster-blue via-[#0c5e79] to-[#08455a] text-white p-8 sm:p-10 lg:p-11 shadow-xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Subtle blueprint grid texture overlay matching original design */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }}
                />

                {/* Ambient glow in top corner */}
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />

                {/* Top Row: Tag on left, Technical kicker on right */}
                <div className="relative z-10 flex items-center justify-between mb-8 sm:mb-10">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-white/60 uppercase font-semibold">
                    [ METRIC · 01 ]
                  </span>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] text-white/80 uppercase">
                    <span>CUSTOMER REACH</span>
                    <span className="text-cluster-coral font-bold tracking-tighter">»»»»</span>
                  </div>
                </div>

                {/* Center: Massive Number + Intersecting { MONTHLY CUSTOMERS } Tape */}
                <div className="relative z-10 my-auto py-4">
                  {/* Faint ghosted watermark behind */}
                  <div className="absolute -left-2 -top-6 text-7xl sm:text-8xl md:text-9xl font-black font-manrope text-white/10 select-none pointer-events-none tracking-tighter leading-none -z-10">
                    25K
                  </div>

                  {/* Main Giant White Number */}
                  <div className="relative flex items-baseline">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6rem] font-black font-manrope text-white tracking-tight leading-none drop-shadow-sm">
                      <Counter to={25000} suffix="+" />
                    </div>
                  </div>

                  {/* Floating Chevron Accent */}
                  <div className="flex items-center gap-1.5 mt-5 mb-2 pl-1">
                    <span className="text-xs font-mono font-bold tracking-widest text-cluster-coral">»</span>
                  </div>

                  {/* Intersecting Tape: { M O N T H L Y   C U S T O M E R S } */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 shadow-sm">
                    <span className="text-sm sm:text-base font-mono font-light text-white/70 select-none">&#123;</span>
                    <span className="text-[10px] sm:text-[11.5px] md:text-[12.5px] font-mono font-bold tracking-[0.22em] sm:tracking-[0.28em] uppercase text-white">
                      M O N T H L Y &nbsp; C U S T O M E R S
                    </span>
                    <span className="text-sm sm:text-base font-mono font-light text-white/70 select-none">&#125;</span>
                  </div>
                </div>

                {/* Bottom Section: Small, clean details without excessive clutter */}
                <div className="relative z-10 mt-8 pt-5 border-t border-white/15 flex flex-col gap-2.5">
                  <p className="text-xs sm:text-[13px] text-white/85 font-normal leading-relaxed">
                    Connecting with over 25,000+ active shoppers every month across South India.
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70 uppercase tracking-wider pt-1">
                    <span>Kerala &amp; Tamil Nadu</span>
                    <span className="inline-flex items-center gap-1.5 text-cluster-teal font-semibold font-manrope">
                      <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal animate-pulse" />
                      Active Network
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>

            {/* ──── RIGHT BOX: Built to Reach Further ──── */}
            <Reveal direction="left" duration={0.8} delay={0.1} className="lg:col-span-7 h-full">
              <div className="h-full rounded-3xl bg-white border border-cluster-border/80 p-8 sm:p-10 lg:p-12 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                      Core Foundations
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-cluster-text leading-tight mb-5">
                    Built to Reach Further<span className="text-cluster-coral">.</span>
                  </h3>

                  <p className="text-base sm:text-lg text-cluster-muted leading-relaxed font-normal mb-8">
                    Our manufacturing capabilities, dedicated workforce and expanding retail partnerships form the foundation of our growth. As we continue to strengthen our presence across South India, we remain focused on delivering quality apparel and building lasting relationships with our retail partners and customers.
                  </p>

                  {/* 3 Foundation Highlight Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-cluster-border">
                    <div className="p-4 rounded-2xl bg-neutral-50 border border-cluster-border/60">
                      <Factory className="w-5 h-5 text-cluster-blue mb-2" />
                      <h4 className="text-sm font-bold text-cluster-text mb-1">
                        Manufacturing
                      </h4>
                      <p className="text-xs text-cluster-muted">
                        Dual facilities with automated precision cutting
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-50 border border-cluster-border/60">
                      <Users className="w-5 h-5 text-cluster-coral mb-2" />
                      <h4 className="text-sm font-bold text-cluster-text mb-1">
                        Dedicated Workforce
                      </h4>
                      <p className="text-xs text-cluster-muted">
                        350+ master artisans and garment craftsmen
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-50 border border-cluster-border/60">
                      <Store className="w-5 h-5 text-cluster-teal mb-2" />
                      <h4 className="text-sm font-bold text-cluster-text mb-1">
                        Retail Partnerships
                      </h4>
                      <p className="text-xs text-cluster-muted">
                        9,000+ active store counters across 2 states
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Link to Partner With Us */}
                <div className="mt-8 pt-6 border-t border-cluster-border flex items-center justify-between">
                  <span className="text-xs text-cluster-muted font-manrope">
                    Expanding across South Indian retail destinations
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cluster-blue uppercase tracking-wider font-manrope">
                    <span>Continuous Growth</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
