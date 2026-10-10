"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TriangleHero from "@/components/ui/TriangleHero";
import { Reveal, StaggerReveal } from "@/components/anim";
import Button from "@/components/ui/Button";
import {
  Store,
  Layers,
  Sparkles,
  Maximize,
  TrendingUp,
  Heart,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Send,
  PhoneCall,
  MapPin,
  Building,
  Check,
  ShieldAlert,
  ChevronDown,
} from "lucide-react";

export default function OurFranchisePage() {
  // Form State
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    ownsBusiness: "Yes",
    hasSpace: "No",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const franchisePillars = [
    {
      icon: (
        <Layers className="w-6 h-6 text-cluster-coral group-hover:rotate-12 group-hover:scale-115 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-coral/10 border-cluster-coral/20",
      accentBorder: "hover:border-cluster-coral/40",
      accentBar: "from-cluster-coral to-rose-400",
      number: "01",
      title: "Two Brands. One Retail Destination.",
      desc: "Bring everyday fashion and maternity wear together through a single unified retail concept.",
      tag: "Dual Power",
    },
    {
      icon: (
        <Sparkles className="w-6 h-6 text-cluster-teal group-hover:scale-120 group-hover:-rotate-6 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-teal/10 border-cluster-teal/20",
      accentBorder: "hover:border-cluster-teal/40",
      accentBar: "from-cluster-teal to-cyan-400",
      number: "02",
      title: "Focused Product Assortment",
      desc: "Serve a variety of customer needs with a curated women's apparel collection designed for everyday life.",
      tag: "Curated Range",
    },
    {
      icon: (
        <Maximize className="w-6 h-6 text-cluster-blue group-hover:scale-115 group-hover:rotate-45 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-blue/10 border-cluster-blue/20",
      accentBorder: "hover:border-cluster-blue/40",
      accentBar: "from-cluster-blue to-indigo-400",
      number: "03",
      title: "Compact Store Format",
      desc: "Our proposed franchise store format ranges from 200 to 600 sq. ft., subject to location and business requirements.",
      tag: "High Efficiency",
    },
    {
      icon: (
        <TrendingUp className="w-6 h-6 text-cluster-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-teal/10 border-cluster-teal/20",
      accentBorder: "hover:border-cluster-teal/40",
      accentBar: "from-cluster-teal to-emerald-400",
      number: "04",
      title: "Growing Market Presence",
      desc: "Be part of our planned retail expansion across Kerala, Tamil Nadu, and other key South Indian markets.",
      tag: "Regional Growth",
    },
    {
      icon: (
        <Heart className="w-6 h-6 text-cluster-coral group-hover:scale-125 transition-transform duration-300" />
      ),
      iconBg: "bg-cluster-coral/10 border-cluster-coral/20",
      accentBorder: "hover:border-cluster-coral/40",
      accentBar: "from-cluster-coral to-amber-400",
      number: "05",
      title: "Built Around Women's Needs",
      desc: "Offer customers a shopping destination focused on comfort, style, quality, and affordable fashion.",
      tag: "Customer-Centric",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-cluster-text selection:bg-cluster-coral selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: BRING CREW-D TO YOUR CITY
      ───────────────────────────────────────────────────────────── */}
      <TriangleHero
        kicker="Our Franchise"
        heading="BRING CREW-D TO"
        headingHighlight="YOUR CITY."
        description="A New Opportunity in Women's Fashion Retail by Cluster Outfits Private Limited — bringing everyday fashion and maternity wear together under one roof."
        buttonText="ENQUIRE ABOUT A FRANCHISE"
        buttonHref="#enquiry-form"
        backgroundImage="/frannchise.png"
        backgroundAlt="Crew-D Franchise Partnership"
        scrollTargetId="concept-overview"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. CONCEPT OVERVIEW: A NEW OPPORTUNITY IN WOMEN'S FASHION
      ───────────────────────────────────────────────────────────── */}
      <section id="concept-overview" className="py-16 sm:py-24 md:py-28 bg-white border-b border-cluster-border relative overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Reveal direction="up" duration={0.6}>
            <div className="w-full rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 border border-slate-200/80 p-8 sm:p-14 md:p-20 shadow-sm relative overflow-hidden text-center flex flex-col items-center">
              {/* Subtle luxury ambient glow */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cluster-coral/5 rounded-full blur-3xl pointer-events-none" />

              {/* 1. THE HIGHLIGHT: Big Centered Crew-D Logo */}
              <div className="relative z-10 w-full flex justify-center mb-6 sm:mb-8">
                <div className="relative w-64 sm:w-80 md:w-[480px] lg:w-[560px] aspect-[1148/473] transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/logos/crew-d-logo-clean.png"
                    alt="Crew-D – Together We Create. Fashion"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Subheading / Kicker */}
              <div className="relative z-10 flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                  A New Opportunity in Women&apos;s Fashion Retail
                </span>
              </div>

              {/* 2. THE TITLE */}
              <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12] mb-6 font-sans uppercase max-w-5xl">
                Bring Everyday Fashion &amp; Maternity Wear Together Under One Roof.
              </h2>

              {/* 3. THE DESCRIPTION */}
              <div className="relative z-10 max-w-3xl sm:max-w-4xl mx-auto space-y-4 text-slate-600 text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-900 font-bold">Crew-D</strong> is a multi-brand women&apos;s fashion retail concept by{" "}
                  <strong className="text-slate-900 font-bold">Cluster Outfits Private Limited</strong>, bringing everyday fashion and maternity wear together under one roof through our brands,{" "}
                  <span className="text-cluster-teal font-bold">Cluster</span> and{" "}
                  <span className="text-cluster-coral font-bold">Matrutva</span>.
                </p>
                <p>
                  With a focus on <strong className="text-slate-900 font-bold">style, comfort, quality, and affordability</strong>, Crew-D aims to create a convenient shopping destination for women while building a growing retail network across South India.
                </p>
                <div className="pt-3">
                  <p className="inline-block text-slate-800 font-medium bg-cluster-coral/[0.05] border border-cluster-coral/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base leading-relaxed max-w-3xl">
                    <strong className="text-slate-900 font-bold">Interested in owning a Crew-D franchise?</strong> We invite entrepreneurs, aspiring business owners, and retail partners to connect with us and explore the opportunity.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. WHAT IS CREW-D? (ONE DESTINATION. MULTIPLE FASHION NEEDS)
      ───────────────────────────────────────────────────────────── */}
      <section id="what-is-crew-d" className="py-20 sm:py-28 md:py-32 bg-slate-50/70 border-b border-cluster-border relative overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex justify-center mb-5">
              <div className="relative h-12 sm:h-14 w-44 sm:w-52 overflow-hidden">
                <Image
                  src="/logos/crew-d-logo-clean.png"
                  alt="Crew-D Fashion Retail"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase font-manrope">
                Retail Concept
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4 font-sans">
              What Is Crew-D?
            </h2>
            <p className="text-lg sm:text-xl font-bold text-cluster-coral uppercase tracking-wide font-manrope mb-4">
              One Destination. Multiple Fashion Needs.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Crew-D is designed to make women&apos;s fashion shopping convenient by bringing together a carefully selected range of everyday apparel and maternity wear in one store.
            </p>
          </div>

          {/* Dual Brand Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* 1. CLUSTER – EVERYDAY FASHION */}
            <Reveal direction="up" duration={0.6}>
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-cluster-border hover:border-cluster-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/ladieshome.png"
                    alt="Cluster Everyday Fashion Collection"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow-sm">
                      <Image
                        src="/logos/cluster-main.png"
                        alt="Cluster Brand Logo"
                        width={90}
                        height={32}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white font-manrope bg-cluster-teal/90 px-3 py-1 rounded-lg backdrop-blur-xs">
                      Everyday Fashion
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-cluster-teal transition-colors">
                      Cluster – Everyday Fashion
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      Explore a range of bottoms, short tops, tops, and nightwear designed for everyday style and comfort.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2. MATRUTVA – MATERNITY WEAR */}
            <Reveal direction="up" duration={0.6} delay={0.1}>
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-cluster-border hover:border-cluster-coral/40 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/maternityhome.png"
                    alt="Matrutva Maternity Wear Collection"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow-sm">
                      <Image
                        src="/logos/matrutva-clean-logo.png"
                        alt="Matrutva Brand Logo"
                        width={90}
                        height={32}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white font-manrope bg-cluster-coral/90 px-3 py-1 rounded-lg backdrop-blur-xs">
                      Maternity Care
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-cluster-coral transition-colors">
                      Matrutva – Maternity Wear
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      Discover maternity bras, maternity bottoms, and maternity nightwear designed with comfort and the needs of motherhood in mind.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Unified Statement Banner */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <Reveal direction="up" duration={0.6}>
              <div className="p-7 sm:p-9 rounded-[24px] bg-gradient-to-r from-cluster-blue/[0.08] via-cluster-teal/[0.08] to-cluster-coral/[0.08] border border-cluster-border text-center flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border-2 border-amber-300/40 shrink-0">
                  <Image
                    src="/logos/crew-d-badge.jpg"
                    alt="Crew-D Fashion Emblem"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 font-manrope max-w-2xl">
                  &ldquo;Together, our brands create a retail experience that caters to women at different stages of life.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY EXPLORE A CREW-D FRANCHISE? (5 VALUE PILLARS)
      ───────────────────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────────────────────
          4. WHY EXPLORE A CREW-D FRANCHISE? (STAGGERED BENTO GRID - MAX WIDTH + BG IMAGE)
      ───────────────────────────────────────────────────────────── */}
      <section id="why-crew-d" className="py-20 sm:py-28 md:py-32 text-white relative overflow-hidden bg-black w-full border-b border-white/10">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          {/* Header centered matching reference */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase font-manrope">
                Franchise Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12] font-sans">
              Why Explore a Crew-D Franchise?<br />
              <span className="text-slate-300 font-normal text-2xl sm:text-3xl lg:text-[34px] block mt-2">
                Turning dual-brand synergy into retail growth
              </span>
            </h2>
          </div>

          {/* Staggered Bento Grid matching reference layout - Max Width */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch w-full">
              
              {/* ─── COLUMN 1: Cluster Coral Card (Left) ─── */}
              <div className="flex flex-col">
                <div className="rounded-[26px] bg-gradient-to-br from-[#E86D46] via-[#D65B34] to-[#B84420] p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 shadow-2xl group border border-white/10 hover:border-white/25">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                        Two Brands. One Store.
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white font-manrope bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full border border-white/30 shrink-0">
                        Dual Power
                      </span>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed font-normal">
                      Bring everyday fashion and maternity wear together through a single unified retail concept that multiplies footfall and customer reach under one roof.
                    </p>
                  </div>

                  {/* Big Number at Bottom Left with Small Text Next to It */}
                  <div className="flex items-center gap-4 pt-8 mt-8 border-t border-white/20">
                    <div className="text-5xl sm:text-6xl font-black text-white font-sans tracking-tight shrink-0 drop-shadow-sm">
                      2x
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/90 leading-snug font-manrope">
                      Dual-brand synergy delivering higher customer lifetime value &amp; repeat visits.
                    </p>
                  </div>
                </div>
              </div>

              {/* ─── COLUMN 2: Cluster Teal Family Cards (Center) ─── */}
              <div className="flex flex-col gap-5">
                
                {/* Card 2A: Top Small Banner with Region Badges */}
                <div className="rounded-[24px] bg-[#141414] border border-white/10 hover:border-cluster-teal/40 p-5 sm:p-6 transition-all duration-300 shadow-lg flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Overlapping Regional Node Badges */}
                    <div className="flex -space-x-2.5 overflow-hidden">
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-black bg-gradient-to-tr from-cluster-blue to-cyan-400 text-white text-[11px] font-black flex items-center justify-center font-manrope shadow-xs">
                        KL
                      </div>
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-black bg-gradient-to-tr from-cluster-coral to-rose-400 text-white text-[11px] font-black flex items-center justify-center font-manrope shadow-xs">
                        TN
                      </div>
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-black bg-gradient-to-tr from-cluster-teal to-emerald-400 text-white text-[11px] font-black flex items-center justify-center font-manrope shadow-xs">
                        KA
                      </div>
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-black bg-gradient-to-tr from-purple-500 to-indigo-500 text-white text-[11px] font-black flex items-center justify-center font-manrope shadow-xs">
                        AP
                      </div>
                    </div>
                    <span className="text-sm font-bold text-white font-manrope">
                      20+ Retail Hubs
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cluster-teal font-manrope bg-cluster-teal/15 px-2.5 py-1 rounded-full border border-cluster-teal/30 shrink-0">
                    Active Grid
                  </span>
                </div>

                {/* Card 2B: Middle Teal Card with Big Number (200 - 600 sq. ft.) */}
                <div className="rounded-[26px] bg-gradient-to-br from-[#1DA883] via-[#168A6A] to-[#0E634C] p-7 sm:p-8 flex flex-col justify-between flex-1 transition-all duration-300 shadow-2xl group border border-white/10 hover:border-white/25">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                        Compact Store Format
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white font-manrope bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full border border-white/30 shrink-0">
                        High Velocity
                      </span>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed font-normal">
                      Compact, high-velocity retail footprint optimized for fast inventory turnover and capital efficiency.
                    </p>
                  </div>

                  {/* Big Number Specification */}
                  <div className="pt-6 mt-4">
                    <div className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight drop-shadow-sm">
                      200 – 600 <span className="text-lg sm:text-xl font-medium text-white/85">sq. ft.</span>
                    </div>
                  </div>
                </div>

                {/* Card 2C: Bottom Card (Tailored Range) */}
                <div className="rounded-[26px] bg-[#141414] border border-white/10 hover:border-cluster-teal/40 p-6 sm:p-7 transition-all duration-300 shadow-lg">
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight font-sans">
                      Focused Assortment
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cluster-teal font-manrope bg-cluster-teal/15 px-3 py-1 rounded-full border border-cluster-teal/30 shrink-0">
                      Curated Range
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Serve daily fashion &amp; maternity wear with a curated collection designed for South Indian customer preferences.
                  </p>
                </div>
              </div>

              {/* ─── COLUMN 3: Cluster Blue Card (Right) ─── */}
              <div className="flex flex-col">
                <div className="rounded-[26px] bg-gradient-to-br from-[#0E7293] via-[#0B5C77] to-[#084257] p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 shadow-2xl group border border-white/10 hover:border-white/25">
                  {/* Big Number at Top Right with Small Text Next to It */}
                  <div>
                    <div className="flex items-center gap-4 pb-8 mb-8 border-b border-white/20">
                      <div className="text-5xl sm:text-6xl font-black text-white font-sans tracking-tight shrink-0 drop-shadow-sm">
                        100%
                      </div>
                      <p className="text-xs sm:text-[13px] text-white/90 leading-snug font-manrope">
                        Breathable, combed cottons &amp; verified factory craftsmanship across all categories.
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                        Growing Presence
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white font-manrope bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full border border-white/30 shrink-0">
                        Regional Scale
                      </span>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed font-normal">
                      Be part of our planned retail network expansion across Kerala, Tamil Nadu, and South India&apos;s fastest growing commercial districts.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-xs font-bold font-manrope text-white/80">
                    <span className="uppercase tracking-wider">South India Expansion</span>
                    <span className="text-white flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                      Verified Model
                    </span>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BECOME A CREW-D FRANCHISE PARTNER & ENQUIRY FORM
      ───────────────────────────────────────────────────────────── */}
      <section id="enquiry-form" className="py-12 sm:py-18 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Reveal direction="up" duration={0.6}>
            {/* Master Card with Split Layout - Max Width */}
            <div className="w-full rounded-[32px] sm:rounded-[40px] bg-white p-4 sm:p-6 lg:p-8 shadow-xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
              
              {/* Left Column: Vibrant Green Gradient Panel */}
              <div className="lg:col-span-7 bg-gradient-to-br from-[#22C195] via-[#1AA67F] to-[#0E7256] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden min-h-[540px]">
                {/* Soft ambient lighting highlights */}
                <div className="absolute -top-24 -right-24 w-88 h-88 bg-white/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-88 h-88 bg-[#064E3B]/40 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 pt-2 sm:pt-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.08] mb-4 font-sans uppercase">
                    START YOUR JOURNEY
                  </h2>

                  <p className="text-emerald-50 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
                    Follow these simple steps to explore partnership with South India&apos;s fast-growing dual-brand fashion retail grid.
                  </p>
                </div>

                {/* Bottom: 3 Step Cards Side-by-Side (1, 2, 3 Matching Reference Image) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 mt-8 border-t border-white/15">
                  {/* Card 1: Active White Card */}
                  <div className="rounded-2xl bg-white text-slate-900 p-4 sm:p-5 shadow-xl flex flex-col justify-between min-h-[145px] transition-transform hover:-translate-y-0.5">
                    <div className="w-7 h-7 rounded-full bg-[#1AA67F] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-sm font-sans">
                      1
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug mt-3 font-sans">
                      Dual-brand power of Cluster &amp; Matrutva
                    </div>
                  </div>

                  {/* Card 2: Frosted Glass Card */}
                  <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white p-4 sm:p-5 flex flex-col justify-between min-h-[145px] transition-transform hover:-translate-y-0.5">
                    <div className="w-7 h-7 rounded-full bg-white/25 text-white text-xs font-black flex items-center justify-center shrink-0 border border-white/30 font-sans">
                      2
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-white/95 leading-snug mt-3 font-sans">
                      Compact store format (200 – 600 sq. ft.)
                    </div>
                  </div>

                  {/* Card 3: Frosted Glass Card */}
                  <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white p-4 sm:p-5 flex flex-col justify-between min-h-[145px] transition-transform hover:-translate-y-0.5">
                    <div className="w-7 h-7 rounded-full bg-white/25 text-white text-xs font-black flex items-center justify-center shrink-0 border border-white/30 font-sans">
                      3
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold text-white/95 leading-snug mt-3 font-sans">
                      Planned retail expansion across South India
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Enquiry Form */}
              <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center bg-white rounded-[24px]">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans mb-1.5 uppercase">
                    JOIN US
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-manrope">
                    Fill out the enquiry form below to connect with our retail franchise team.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 text-center rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">
                      Enquiry Received
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-6">
                      Thank you, <strong className="text-slate-900">{formState.fullName}</strong>. Our franchise expansion desk will review your enquiry for <strong className="text-slate-900">{formState.city}</strong> and connect with you shortly.
                    </p>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          fullName: "",
                          phone: "",
                          email: "",
                          city: "",
                          ownsBusiness: "Yes",
                          hasSpace: "No",
                          message: "",
                        });
                      }}
                    >
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="sr-only">Name</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="Name"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full px-5 py-3.5 sm:py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-slate-800 placeholder:text-[#6C757D] text-sm sm:text-base outline-none focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all font-sans"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="Email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-5 py-3.5 sm:py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-slate-800 placeholder:text-[#6C757D] text-sm sm:text-base outline-none focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-5 py-3.5 sm:py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-slate-800 placeholder:text-[#6C757D] text-sm sm:text-base outline-none focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* City / State */}
                    <div>
                      <label htmlFor="city" className="sr-only">City / State</label>
                      <input
                        id="city"
                        type="text"
                        required
                        placeholder="City / State"
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        className="w-full px-5 py-3.5 sm:py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-slate-800 placeholder:text-[#6C757D] text-sm sm:text-base outline-none focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all font-sans"
                      />
                    </div>

                    {/* Business Ownership & Retail Space (Select a Subject Style) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="relative">
                        <label htmlFor="ownsBusiness" className="sr-only">Own a Business?</label>
                        <select
                          id="ownsBusiness"
                          value={formState.ownsBusiness}
                          onChange={(e) => setFormState({ ...formState, ownsBusiness: e.target.value })}
                          className="w-full px-5 py-3.5 sm:py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-[#6C757D] text-sm sm:text-base outline-none appearance-none cursor-pointer focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all pr-11 font-sans"
                        >
                          <option value="Yes">Own a Business: Yes</option>
                          <option value="No">Own a Business: No</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#6C757D] absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      <div className="relative">
                        <label htmlFor="hasSpace" className="sr-only">Commercial Space?</label>
                        <select
                          id="hasSpace"
                          value={formState.hasSpace}
                          onChange={(e) => setFormState({ ...formState, hasSpace: e.target.value })}
                          className="w-full px-5 py-3.5 sm:py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-[#6C757D] text-sm sm:text-base outline-none appearance-none cursor-pointer focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all pr-11 font-sans"
                        >
                          <option value="Yes">Commercial Space: Yes</option>
                          <option value="No">Commercial Space: No</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#6C757D] absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="sr-only">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Message..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-[18px] bg-[#F1F3F5] border border-transparent text-slate-800 placeholder:text-[#6C757D] text-sm sm:text-base outline-none focus:bg-white focus:border-cluster-teal focus:ring-2 focus:ring-cluster-teal/20 transition-all resize-none min-h-[120px] font-sans"
                      />
                    </div>

                    {/* Submit using Button component */}
                    <div className="pt-2">
                      <Button
                        variant="teal"
                        size="lg"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full justify-center tracking-widest uppercase font-bold text-xs sm:text-sm !rounded-[18px] py-4"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            CONTINUE <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center font-manrope leading-tight pt-1">
                      By signing up you agree to receive official franchise updates from Cluster Outfits.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. DIRECT FRANCHISE DESK (SEPARATE DEDICATED SECTION)
      ───────────────────────────────────────────────────────────── */}
      <section id="franchise-desk" className="py-14 sm:py-20 bg-slate-50 border-b border-cluster-border relative overflow-hidden">
        <Container>
          <Reveal direction="up" duration={0.6}>
            <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-cluster-border p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              {/* Subtle accent highlight */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cluster-blue via-cluster-teal to-cluster-coral" />

              <div className="flex items-center gap-5 sm:gap-6 text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cluster-blue text-white flex items-center justify-center shrink-0 shadow-lg shadow-cluster-blue/25">
                  <PhoneCall className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                      Direct Franchise Desk
                    </span>
                  </div>
                  <a
                    href="tel:+919747800041"
                    className="block text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 hover:text-cluster-blue transition-colors font-sans tracking-tight mb-1"
                  >
                    +91 97478 00041
                  </a>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium font-manrope">
                    Direct telephone assistance for franchise onboarding, store feasibility, and queries.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <Button
                  variant="blue"
                  size="default"
                  href="tel:+919747800041"
                  className="w-full sm:w-auto justify-center"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline-dark"
                  size="default"
                  href="https://wa.me/919747800041?text=Hi%2C%20I%20am%20interested%20in%20a%20Crew-D%20Franchise%20partnership"
                  external
                  className="w-full sm:w-auto justify-center"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CLOSING CTA: LET'S GROW TOGETHER (REFERENCE DESIGN)
      ───────────────────────────────────────────────────────────── */}
      <section id="grow-together" className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 bg-white relative">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#070D1E] text-white shadow-2xl">
            {/* Background image from public folder + dark moody overlay */}
            <div className="absolute inset-0 rounded-[32px] sm:rounded-[44px] overflow-hidden pointer-events-none">
              <Image
                src="/distributionback.jpg"
                alt="City Architecture Background"
                fill
                sizes="100vw"
                className="object-cover object-center opacity-30 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/98 via-[#0A1630]/92 to-[#040916]/85" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-black/55" />
              {/* Subtle ambient lighting glows */}
              <div className="absolute -top-20 left-1/4 w-96 h-96 bg-cluster-blue/20 rounded-full blur-[140px]" />
              <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-cluster-coral/15 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start relative z-20">
                {/* Logo & Subheading Row */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
                  <div className="relative h-11 sm:h-13 w-32 sm:w-40 rounded-xl overflow-hidden bg-white/95 backdrop-blur-md border border-white/30 p-1.5 shadow-md">
                    <Image
                      src="/logos/crew-d-logo.jpg"
                      alt="Crew-D Logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                      Expanding Across South India
                    </span>
                  </div>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-white leading-[1.06] mb-3 font-sans">
                  Let&apos;s Grow Together<span className="text-cluster-coral">.</span>
                </h2>

                {/* Subtitle Highlight */}
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-cluster-teal font-manrope tracking-tight mb-4">
                  Your City Could Be Our Next Destination.
                </p>

                {/* Narrative Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl mb-8">
                  Join us as we work towards making quality, comfortable, and affordable women&apos;s fashion accessible to more customers.
                </p>

                {/* Buttons matching Reference Image */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={scrollToEnquiry}
                    className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-xl bg-cluster-coral hover:bg-cluster-coral-hover text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-cluster-coral/30 group cursor-pointer font-manrope"
                  >
                    <span>Become a Franchise Partner</span>
                    <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </button>

                  <Link
                    href="/contact"
                    className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/20 backdrop-blur-md transition-all duration-200 font-manrope"
                  >
                    Contact Management
                  </Link>
                </div>
              </div>

              {/* Center: Playful curved doodle arrow pointing to the right figure (matching reference) */}
              <div className="hidden xl:block absolute left-[56%] top-[40%] -translate-y-1/2 z-20 pointer-events-none">
                <svg
                  viewBox="0 0 130 90"
                  fill="none"
                  className="w-24 h-18 text-white/90 stroke-current drop-shadow-md -rotate-3"
                >
                  <path
                    d="M10 65 C 22 22, 58 8, 78 40 C 88 58, 65 74, 54 54 C 44 34, 72 14, 118 36"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M98 22 L 120 36 L 108 52"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Right Column: Figure breaking the top edge of the card (matching reference) */}
              <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end">
                <div className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px] h-[360px] sm:h-[440px] lg:h-[520px] xl:h-[580px] -mt-10 sm:-mt-20 lg:-mt-32 xl:-mt-44 lg:-mb-20 pointer-events-none">
                  <Image
                    src="/descimg.png"
                    alt="Crew-D Fashion Ambassador"
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
