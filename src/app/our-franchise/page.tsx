"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TriangleHero from "@/components/ui/TriangleHero";
import PartnerCta from "@/components/ui/PartnerCta";
import Button from "@/components/ui/Button";
import { Reveal, StaggerReveal } from "@/components/anim";
import {
  Store,
  Building2,
  TrendingUp,
  ShieldCheck,
  Truck,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Calculator,
  ChevronDown,
  ChevronUp,
  Send,
  PhoneCall,
  MapPin,
  Clock,
  Layers,
  HelpCircle,
  FileText,
  BadgeCheck,
  Percent,
} from "lucide-react";

export default function OurFranchisePage() {
  // Selected Store Model for interactive showcase
  const [activeModel, setActiveModel] = useState<number>(0);

  // ROI Calculator State
  const [storeSize, setStoreSize] = useState<number>(800);

  // Form State
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "Kerala",
    city: "",
    model: "Exclusive Brand Outlet (EBO)",
    spaceAvailability: "Owned Commercial Space",
    carpetArea: "800",
    investmentBudget: "₹18 Lakhs - ₹25 Lakhs",
    experience: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Key franchise stats
  const performanceStats = [
    {
      metric: "35% – 42%",
      label: "Gross Profit Margins",
      sub: "Direct-from-factory pricing with zero middlemen cuts",
      color: "text-cluster-blue",
      bgColor: "bg-cluster-blue/10",
      borderColor: "border-cluster-blue/20",
    },
    {
      metric: "9,000+",
      label: "Active Retail Network",
      sub: "Proven market acceptance across Kerala & Tamil Nadu",
      color: "text-cluster-coral",
      bgColor: "bg-cluster-coral/10",
      borderColor: "border-cluster-coral/20",
    },
    {
      metric: "24–48h",
      label: "Express Restocking",
      sub: "Overnight replenishment from dual manufacturing hubs",
      color: "text-cluster-teal",
      bgColor: "bg-cluster-teal/10",
      borderColor: "border-cluster-teal/20",
    },
    {
      metric: "100%",
      label: "Stock Rotation Support",
      sub: "Curated seasonal rotation to ensure zero dead inventory",
      color: "text-slate-800",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-200",
    },
  ];

  // Franchise Models
  const franchiseModels = [
    {
      id: "ebo",
      tag: "FLAGSHIP FORMAT",
      name: "Exclusive Brand Outlet (EBO)",
      subtitle: "Dedicated Cluster Lifestyle & Maternity Destination",
      area: "700 – 1,500 sq. ft.",
      investment: "₹18 – ₹28 Lakhs",
      payback: "12 – 16 Months",
      image: "/ladieshome.png",
      description:
        "The complete flagship retail experience showcasing both Cluster Womenswear and Matrutva Maternity collections. Designed for high-street commercial hubs and premium shopping destinations.",
      highlights: [
        "Full branded store façade, architectural 3D layout & interior fit-out",
        "Complete opening inventory mix (over 400+ seasonal & staple SKUs)",
        "Integrated cloud POS billing software and RFID automated inventory scanning",
        "Comprehensive visual merchandising, display mannequins, and branded packaging",
        "Dedicated marketing launch campaign with local digital advertising blitz",
      ],
      idealFor: "Entrepreneurs and business owners seeking an exclusive branded apparel showroom.",
    },
    {
      id: "sis",
      tag: "HIGH TURNOVER",
      name: "Shop-in-Shop (SIS) / Brand Corner",
      subtitle: "Dedicated In-Store Experience for Established Retailers",
      area: "300 – 600 sq. ft.",
      investment: "₹8 – ₹14 Lakhs",
      payback: "8 – 12 Months",
      image: "/maternityhome.png",
      description:
        "An optimized, high-velocity shop-in-shop concept designed for existing multi-brand apparel showrooms and department stores looking to dedicate a high-margin specialty corner to Cluster brands.",
      highlights: [
        "Modular branded display racks, accent wall cladding, and illuminated signage",
        "Tailored high-turnover product curation suited to the store's customer base",
        "Low upfront capital expenditure with rapid revenue realization",
        "Seamless integration with existing store billing or standalone Cluster POS",
        "Continuous weekly replenishment powered by arterial freight corridors",
      ],
      idealFor: "Showroom owners wanting to monetize existing floor space with fast-moving fashion.",
    },
    {
      id: "distributor",
      tag: "TERRITORIAL SCALE",
      name: "Regional Franchise Distributor",
      subtitle: "Territorial Warehousing & Retail Supply Franchise",
      area: "1,200 – 2,500 sq. ft. Hub",
      investment: "₹35 – ₹55 Lakhs",
      payback: "14 – 18 Months",
      image: "/distributionhero.png",
      description:
        "An exclusive territorial distribution franchise holding sole supply rights for 50–100+ retail storefronts across a designated district or cluster of towns in South India.",
      highlights: [
        "Exclusive territorial monopoly for Cluster Womenswear and Matrutva supplies",
        "Direct warehouse staging with palletized dispatches from dual factories",
        "B2B ordering portal access with automated replenishment forecasts",
        "Substantial bulk volume incentives and recurring dealer commissions",
        "Dedicated corporate logistics manager and field sales territory support",
      ],
      idealFor: "Established wholesale distributors or logistics entrepreneurs seeking territorial scale.",
    },
  ];

  // 6 Pillars of Advantage
  const franchisePillars = [
    {
      title: "Direct-from-Factory Margins",
      desc: "Our dual vertically integrated facilities in Kerala and Cumbum eliminate brokers and middleman markups, passing 35%–42% gross margins directly to our franchise partners.",
      icon: Building2,
      color: "text-cluster-blue",
      border: "border-cluster-blue/20",
      bg: "bg-cluster-blue/5",
    },
    {
      title: "Rapid 200+ SKU Monthly Cycles",
      desc: "Our in-house design incubation teams release over 200 fresh, trend-forward styles monthly, engineered specifically for South Indian climate, festive cycles, and fits.",
      icon: Sparkles,
      color: "text-cluster-coral",
      border: "border-cluster-coral/20",
      bg: "bg-cluster-coral/5",
    },
    {
      title: "Turnkey 3D Architectural Fit-Out",
      desc: "Receive customized 3D CAD retail layouts, standardized lighting schemes, bespoke fixtures, and visual merchandising guides tailored to your exact store blueprint.",
      icon: Layers,
      color: "text-cluster-teal",
      border: "border-cluster-teal/20",
      bg: "bg-cluster-teal/5",
    },
    {
      title: "360° Omnichannel Marketing",
      desc: "Benefit from regional influencer collaborations, localized digital ad campaigns, seasonal festive point-of-sale kits, and high-impact grand opening promotional support.",
      icon: TrendingUp,
      color: "text-cluster-blue",
      border: "border-cluster-blue/20",
      bg: "bg-cluster-blue/5",
    },
    {
      title: "Cloud POS & RFID Auto-Replenishment",
      desc: "Cloud-connected inventory algorithms analyze your daily sales and trigger automatic buffer dispatches from the nearest staging node so you never miss a sale.",
      icon: Truck,
      color: "text-cluster-coral",
      border: "border-cluster-coral/20",
      bg: "bg-cluster-coral/5",
    },
    {
      title: "Staff Training & Retail Academy",
      desc: "We train your store managers and customer associates in garment craftsmanship, cross-selling Matrutva maternity solutions, and delivering a luxury retail standard.",
      icon: Users,
      color: "text-cluster-teal",
      border: "border-cluster-teal/20",
      bg: "bg-cluster-teal/5",
    },
  ];

  // 6-step Onboarding Process
  const onboardingSteps = [
    {
      step: "01",
      title: "Application & Profile Review",
      desc: "Submit your franchise expression of interest. Our corporate expansion team conducts an initial review within 48 business hours.",
    },
    {
      step: "02",
      title: "Location Catchment Feasibility",
      desc: "Our field team conducts an on-site footfall audit, micro-market demographic analysis, and commercial viability evaluation.",
    },
    {
      step: "03",
      title: "Franchise Agreement & Rights",
      desc: "Finalize territorial exclusivity, documentation, and operational rights with clear and transparent commercial covenants.",
    },
    {
      step: "04",
      title: "Store 3D Fit-Out & Fabrication",
      desc: "Our retail architects deliver turnkey 3D visual plans, modular display racks, illumination designs, and external signage.",
    },
    {
      step: "05",
      title: "Inventory Staging & Team Training",
      desc: "Receive initial stock curation tagged with RFID barcoding, along with comprehensive training on retail SOPs and billing.",
    },
    {
      step: "06",
      title: "Grand Launch & Revenue Blitz",
      desc: "Kick off store operations with targeted local advertising, influencer visits, opening promotional kits, and sales acceleration.",
    },
  ];

  // Dynamic ROI calculation based on chosen square footage
  const calculateRoi = (sqft: number) => {
    const fitoutCost = Math.round(sqft * 1100);
    const stockCost = Math.round(sqft * 1400);
    const workingCapital = Math.round(sqft * 400);
    const totalEst = fitoutCost + stockCost + workingCapital;
    const estMonthlySales = Math.round(sqft * 1250);
    const estGrossProfit = Math.round(estMonthlySales * 0.38);
    const estNetProfit = Math.round(estMonthlySales * 0.22);
    const paybackMonths = Math.max(10, Math.round(totalEst / estNetProfit));

    return {
      fitoutCost,
      stockCost,
      workingCapital,
      totalEst,
      estMonthlySales,
      estGrossProfit,
      estNetProfit,
      paybackMonths,
    };
  };

  const currentRoi = calculateRoi(storeSize);

  // FAQ Items
  const faqList = [
    {
      q: "What is the typical initial investment required to open a Cluster franchise?",
      a: "Depending on the model chosen, initial investment ranges from ₹8 Lakhs – ₹14 Lakhs for a Shop-in-Shop (SIS) format, ₹18 Lakhs – ₹28 Lakhs for an Exclusive Brand Outlet (EBO) of 700–1,200 sq.ft, and ₹35 Lakhs – ₹55 Lakhs for a Regional Distribution Franchise. This includes store fit-out, branded fixtures, billing hardware, opening inventory, and launch marketing.",
    },
    {
      q: "Does Cluster help in site selection and store interior design?",
      a: "Yes, absolutely. Our retail development team performs thorough catchment feasibility studies, assists in evaluating commercial rental agreements, and provides complimentary 3D architectural interior design layouts, lighting specifications, and standardized display rack fabrications.",
    },
    {
      q: "How does stock replenishment and inventory management work?",
      a: "We operate dual vertically integrated manufacturing facilities in Kerala and Cumbum (Tamil Nadu) supported by 14 regional cross-dock staging nodes. Franchise outlets receive express replenishment within 24 to 48 hours of placing replenishment orders through our connected cloud POS system.",
    },
    {
      q: "What is the policy regarding slow-moving or seasonal inventory?",
      a: "Cluster offers 100% stock rotation and seasonal exchange protection. To ensure high stock velocity and zero dead-stock accumulation, seasonal styles can be rotated back into our arterial distribution network in exchange for fresh, top-performing SKUs.",
    },
    {
      q: "Is prior retail or fashion apparel experience required?",
      a: "While prior retail or business background is helpful, it is not mandatory. Cluster provides comprehensive training covering customer service, garment fabric care, inventory controls, billing systems, and visual merchandising for you and your staff.",
    },
    {
      q: "Can I open a Cluster franchise in Tier-2 or Tier-3 towns?",
      a: "Yes! Tier-2, Tier-3, and developing suburban commercial hubs represent some of our highest-growth and highest-margin retail markets. With Cluster’s accessible luxury positioning and daily-wear demand, our brand resonates strongly with aspiring families and contemporary shoppers in these markets.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-cluster-text selection:bg-cluster-blue selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. Hero Section
      ───────────────────────────────────────────────────────────── */}
      <TriangleHero
        kicker="Franchise & Retail Expansion"
        heading="OWN A CLUSTER"
        headingHighlight="FRANCHISE."
        description="Step into South India’s premier apparel enterprise. Partner with Cluster Outfits to launch an Exclusive Brand Outlet or Multi-Brand Destination with direct-from-factory margins, zero dead-stock risk, and end-to-end retail incubation."
        buttonText="EXPLORE FRANCHISE MODELS"
        buttonHref="#franchise-models"
        backgroundImage="/aboutuss.png"
        backgroundAlt="Cluster Flagship Retail Store and Franchise"
        scrollTargetId="franchise-metrics"
        accentKickerColor="text-cluster-coral"
      />

      {/* ─────────────────────────────────────────────────────────────
          2. Franchise Performance Metrics Strip
      ───────────────────────────────────────────────────────────── */}
      <section
        id="franchise-metrics"
        className="relative z-30 mt-6 sm:-mt-14 md:-mt-16"
      >
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {performanceStats.map((stat, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.08} duration={0.6}>
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_12px_32px_rgba(5,24,36,0.08)] border border-slate-100 hover:shadow-[0_20px_44px_rgba(5,24,36,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-3xl sm:text-4xl md:text-[42px] font-black font-manrope tracking-tight leading-none text-slate-900 block mb-2">
                      {stat.metric}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1">
                      {stat.label}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-cluster-muted leading-relaxed pt-3 border-t border-slate-100 mt-3">
                    {stat.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. Franchise Formats & Store Models (Interactive Tabs)
      ───────────────────────────────────────────────────────────── */}
      <section id="franchise-models" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-100">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <Reveal direction="up">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cluster-coral mb-3">
                Store Formats Tailored For You
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight mb-4">
                CHOOSE YOUR FRANCHISE MODEL
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-cluster-muted font-normal leading-relaxed">
                Whether you seek a high-street flagship destination, a fast-turnover shop-in-shop, or regional distribution rights, our retail architectures are built for rapid profitability.
              </p>
            </Reveal>

            {/* Model Selector Tabs */}
            <Reveal direction="up" delay={0.15}>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm mt-8">
                {franchiseModels.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveModel(idx)}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                      activeModel === idx
                        ? "bg-cluster-blue text-white shadow-md shadow-cluster-blue/20"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span>{m.name.split("(")[0].trim()}</span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Active Model Spotlight Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left: Image & Badge */}
                <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full bg-slate-100 overflow-hidden group">
                  <Image
                    src={franchiseModels[activeModel].image}
                    alt={franchiseModels[activeModel].name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-cluster-coral text-white text-[11px] font-bold tracking-wider uppercase mb-2 shadow-sm">
                      {franchiseModels[activeModel].tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-white">
                      {franchiseModels[activeModel].name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
                      {franchiseModels[activeModel].subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Key Specs & Deliverables */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Metrics Matrix Bar */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 mb-8">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Space Required
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-900 block">
                          {franchiseModels[activeModel].area}
                        </span>
                      </div>
                      <div className="border-x border-slate-200/60 px-3 sm:px-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Est. Investment
                        </span>
                        <span className="text-sm sm:text-base font-bold text-cluster-blue block">
                          {franchiseModels[activeModel].investment}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Est. Payback
                        </span>
                        <span className="text-sm sm:text-base font-bold text-cluster-teal block">
                          {franchiseModels[activeModel].payback}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {franchiseModels[activeModel].description}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                      WHAT WE PROVIDE AS PART OF THIS MODEL:
                    </h4>

                    {/* Highlights List */}
                    <div className="space-y-3 mb-8">
                      {franchiseModels[activeModel].highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cluster-teal shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-xs text-cluster-muted italic">
                      Ideal For: {franchiseModels[activeModel].idealFor}
                    </span>
                    <a
                      href="#franchise-apply"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cluster-blue hover:bg-cluster-blue-hover text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-cluster-blue/20 shrink-0"
                    >
                      <span>APPLY FOR THIS MODEL</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. The Cluster Franchise Advantage (6 Core Pillars)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <Reveal direction="up">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cluster-teal mb-3">
                Uncompromising Support
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight mb-4">
                THE CLUSTER FRANCHISE ADVANTAGE
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-cluster-muted font-normal leading-relaxed">
                When you partner with Cluster, you do not just open a store—you plug directly into our vertically integrated powerhouse spanning state-of-the-art manufacturing, automated design, and proven retail logistics.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {franchisePillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.08} duration={0.65}>
                  <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-100 shadow-[0_8px_30px_rgba(5,24,36,0.06)] hover:shadow-[0_20px_48px_rgba(5,24,36,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div
                        className={`w-14 h-14 rounded-2xl ${p.bg} ${p.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComp className={`w-7 h-7 ${p.color}`} />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cluster-blue group-hover:gap-3 transition-all duration-200">
                      <span>Enterprise Guarantee</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. Interactive Investment & ROI Calculator
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#091C26] text-white relative overflow-hidden">
        {/* Ambient lighting glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cluster-blue/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cluster-coral/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Explainer & Sliders */}
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cluster-coral mb-3">
                  <Calculator className="w-4 h-4" />
                  Estimated Economics
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white mb-6">
                  FRANCHISE INVESTMENT & ROI ESTIMATOR
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8">
                  Get a realistic, data-backed projection of your store set-up capital, monthly revenue potential, and anticipated payback period based on our existing network metrics.
                </p>

                {/* Store Size Selector Buttons */}
                <div className="mb-8">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Select Proposed Store Size (Carpet Area):
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[500, 800, 1200].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setStoreSize(size)}
                        className={`py-3 px-4 rounded-xl text-center font-bold text-sm transition-all duration-200 border ${
                          storeSize === size
                            ? "bg-cluster-blue text-white border-cluster-blue shadow-lg shadow-cluster-blue/30"
                            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <span className="block text-lg font-black font-manrope">{size}</span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">sq. ft.</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-1">Notice on Estimates:</strong>
                  Estimates are illustrative guidelines derived from average operating metrics of retail apparel partners across Kerala & Tamil Nadu. Exact numbers depend on micro-location rent, staff configuration, and seasonal footfall.
                </div>
              </Reveal>
            </div>

            {/* Right: Projected Breakdown Card */}
            <div className="lg:col-span-6">
              <Reveal direction="right" delay={0.15}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Estimated Capital Expenditure
                      </span>
                      <span className="text-3xl sm:text-4xl font-black font-manrope text-white">
                        ₹{(currentRoi.totalEst / 100000).toFixed(1)} Lakhs
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cluster-teal block">
                        Anticipated Payback
                      </span>
                      <span className="text-2xl sm:text-3xl font-black font-manrope text-cluster-teal">
                        ~{currentRoi.paybackMonths} Months
                      </span>
                    </div>
                  </div>

                  {/* Breakdown lines */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                      <span className="text-slate-300">Turnkey Fit-Out & Architectural Fixtures</span>
                      <span className="font-bold text-white font-manrope">
                        ₹{(currentRoi.fitoutCost / 100000).toFixed(2)} L
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                      <span className="text-slate-300">Initial Curated Stock (400+ SKUs)</span>
                      <span className="font-bold text-white font-manrope">
                        ₹{(currentRoi.stockCost / 100000).toFixed(2)} L
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                      <span className="text-slate-300">Cloud POS Hardware & Working Buffer</span>
                      <span className="font-bold text-white font-manrope">
                        ₹{(currentRoi.workingCapital / 100000).toFixed(2)} L
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                      <span className="text-cluster-coral font-medium">Estimated Monthly Store Sales</span>
                      <span className="font-bold text-cluster-coral font-manrope">
                        ₹{(currentRoi.estMonthlySales / 100000).toFixed(2)} L / mo
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-2">
                      <span className="text-cluster-teal font-medium">Projected Gross Margin (38%)</span>
                      <span className="font-bold text-cluster-teal font-manrope">
                        ₹{(currentRoi.estGrossProfit / 100000).toFixed(2)} L / mo
                      </span>
                    </div>
                  </div>

                  <a
                    href="#franchise-apply"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-cluster-coral hover:bg-cluster-coral-hover text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-cluster-coral/25"
                  >
                    <span>REQUEST DETAILED FRANCHISE PROSPECTUS</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. Step-by-Step Onboarding Journey
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <Reveal direction="up">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cluster-blue mb-3">
                Transparent Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight mb-4">
                HOW TO BECOME A FRANCHISE PARTNER
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-cluster-muted font-normal leading-relaxed">
                From initial application review to grand opening day, our dedicated retail expansion team manages every milestone with precision.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onboardingSteps.map((step, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.08} duration={0.6}>
                <div className="bg-slate-50/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-cluster-blue/40 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl sm:text-4xl font-black font-manrope text-slate-300 group-hover:text-cluster-blue transition-colors duration-300">
                        {step.step}
                      </span>
                      <span className="w-3 h-3 rounded-full bg-cluster-blue/30 group-hover:bg-cluster-blue group-hover:scale-125 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200/50 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600">
                    Phase {idx + 1} of 6
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. Franchise Application Form
      ───────────────────────────────────────────────────────────── */}
      <section id="franchise-apply" className="py-20 sm:py-28 bg-slate-50/70">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cluster-coral mb-3">
                  Expression of Interest
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight mb-4">
                  APPLY FOR A CLUSTER FRANCHISE
                </h2>
                <p className="text-sm sm:text-base text-cluster-muted font-normal max-w-2xl mx-auto leading-relaxed">
                  Fill out the expression of interest form below. Our corporate business development director will get in touch within 24 to 48 business hours to schedule an introductory discovery call.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-18 h-18 rounded-full bg-cluster-teal/15 text-cluster-teal inline-flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                      Application Received!
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                      Thank you for expressing interest in partnering with Cluster Outfits. Our retail franchise team will review your details and reach out to <strong>{formState.email || "you"}</strong> shortly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href="https://wa.me/919447000000?text=Hi%20Cluster%20Team%2C%20I%20have%20submitted%20a%20Franchise%20Inquiry%20and%20would%20like%20to%20connect."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                      >
                        <span>Chat With Us on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.fullName}
                          onChange={(e) =>
                            setFormState({ ...formState, fullName: e.target.value })
                          }
                          placeholder="e.g. Anand Menon"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Phone Number (with WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Proposed State */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="name@example.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Proposed State *
                        </label>
                        <select
                          value={formState.state}
                          onChange={(e) =>
                            setFormState({ ...formState, state: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all bg-white"
                        >
                          <option value="Kerala">Kerala (All Districts)</option>
                          <option value="Tamil Nadu">Tamil Nadu (All Districts)</option>
                          <option value="Karnataka">Karnataka (Bangalore / Mysore / Mangalore)</option>
                          <option value="Andhra Pradesh">Andhra Pradesh & Telangana</option>
                          <option value="Other">Other Region in South India</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Proposed City & Model */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Proposed City / Town / District *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.city}
                          onChange={(e) =>
                            setFormState({ ...formState, city: e.target.value })
                          }
                          placeholder="e.g. Kochi / Coimbatore / Cumbum"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Preferred Franchise Format *
                        </label>
                        <select
                          value={formState.model}
                          onChange={(e) =>
                            setFormState({ ...formState, model: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all bg-white"
                        >
                          <option value="Exclusive Brand Outlet (EBO)">
                            Exclusive Brand Outlet (EBO) — 700 - 1,500 sq.ft
                          </option>
                          <option value="Shop-in-Shop (SIS)">
                            Shop-in-Shop (SIS) / Brand Corner — 300 - 600 sq.ft
                          </option>
                          <option value="Regional Franchise Distributor">
                            Regional Franchise Distributor — Warehouse Node
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Space Status & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Commercial Space Status *
                        </label>
                        <select
                          value={formState.spaceAvailability}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              spaceAvailability: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all bg-white"
                        >
                          <option value="Owned Commercial Space">Owned Property</option>
                          <option value="Rented / Leased Space">Rented / Leased</option>
                          <option value="Searching for Location">Currently Searching</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Carpet Area (sq. ft.)
                        </label>
                        <input
                          type="text"
                          value={formState.carpetArea}
                          onChange={(e) =>
                            setFormState({ ...formState, carpetArea: e.target.value })
                          }
                          placeholder="e.g. 800 sq. ft."
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Investment Budget *
                        </label>
                        <select
                          value={formState.investmentBudget}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              investmentBudget: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all bg-white"
                        >
                          <option value="₹8 Lakhs - ₹15 Lakhs">₹8 Lakhs - ₹15 Lakhs</option>
                          <option value="₹18 Lakhs - ₹25 Lakhs">₹18 Lakhs - ₹25 Lakhs</option>
                          <option value="₹25 Lakhs - ₹40 Lakhs">₹25 Lakhs - ₹40 Lakhs</option>
                          <option value="₹40 Lakhs+">₹40 Lakhs and Above</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Additional Information */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Business Background & Location Highlights (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Tell us about your proposed commercial location, footfall, or existing business experience..."
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cluster-blue focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="agree"
                        required
                        defaultChecked
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-cluster-blue focus:ring-cluster-blue"
                      />
                      <label htmlFor="agree" className="text-xs text-cluster-muted leading-relaxed">
                        I confirm that the information provided is accurate and authorize the Cluster Outfits corporate franchise expansion team to contact me regarding partnership opportunities.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-cluster-blue hover:bg-cluster-blue-hover text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-cluster-blue/20"
                      >
                        <Send className="w-4 h-4" />
                        <span>SUBMIT FRANCHISE EXPRESSION OF INTEREST</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. Frequently Asked Questions (FAQ Accordion)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 sm:mb-18">
              <Reveal direction="up">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cluster-teal mb-3">
                  Got Questions?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight mb-4">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-sm sm:text-base text-cluster-muted font-normal leading-relaxed">
                  Everything you need to know about the investment structure, stock exchange safeguards, and support ecosystem.
                </p>
              </Reveal>
            </div>

            <div className="space-y-4">
              {faqList.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={idx} direction="up" delay={idx * 0.05}>
                    <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 text-left bg-white hover:bg-slate-50/70 flex items-center justify-between gap-4 transition-colors"
                      >
                        <span className="font-bold text-sm sm:text-base text-slate-900 pr-2">
                          {faq.q}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-cluster-blue" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. Closing Partner CTA
      ───────────────────────────────────────────────────────────── */}
      <PartnerCta />
    </div>
  );
}
