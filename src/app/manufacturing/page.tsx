import type { Metadata } from "next";
import Image from "next/image";
import { Counter, SectionHead, Reveal, StaggerReveal } from "@/components/anim";
import { STATS, UNITS, KER_PATH, PEN_PATH } from "@/lib/data";
import Container from '@/components/ui/Container';
import ManufacturingStages from "@/components/manufacturing/ManufacturingStages";
import TexviaOverview from "@/components/manufacturing/TexviaOverview";
import PartnerCta from "@/components/ui/PartnerCta";
import TriangleHero from "@/components/ui/TriangleHero";

import { Layers, Cpu, Users, ShieldCheck, Boxes, Truck, MapPin } from "lucide-react";

export const metadata: Metadata = { title: "Manufacturing — Texvia by Cluster" };

const CAPABILITIES = [
  {
    number: "01.",
    title: "Design to Production",
    desc: "In-house production from design to final packing.",
    icon: (
      <Layers className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-transform duration-500 group-hover:scale-105" />
    ),
    // Top row - 01: Light Blue
    bg: "bg-[#EBF5F8]",
    textTitle: "text-[#0A3D4E]",
    textDesc: "text-[#285A6B]",
    iconColor: "text-[#0E7293]",
    numberColor: "text-[#0E7293]/70",
    border: "border-b md:border-b md:border-r border-[#D0E6EE]",
  },
  {
    number: "02.",
    title: "Modern Machinery",
    desc: "Cutting, stitching, finishing, ironing, and packing.",
    icon: (
      <Cpu className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-transform duration-500 group-hover:scale-105" />
    ),
    // Top row - 02: Medium Blue (Signature Brand Blue)
    bg: "bg-[#0E7293]",
    textTitle: "text-white",
    textDesc: "text-blue-100/90",
    iconColor: "text-white",
    numberColor: "text-white/70",
    border: "border-b md:border-b md:border-r border-[#0C5F7A]",
  },
  {
    number: "03.",
    title: "Skilled & Experienced Workforce",
    desc: "A trained team with a focus on quality.",
    icon: (
      <Users className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-transform duration-500 group-hover:scale-105" />
    ),
    // Top row - 03: Dark Blue (Midnight Navy)
    bg: "bg-[#06202B]",
    textTitle: "text-white",
    textDesc: "text-slate-300",
    iconColor: "text-cyan-300",
    numberColor: "text-cyan-300/70",
    border: "border-b md:border-b border-[#082B3A]",
  },
  {
    number: "04.",
    title: "Strict Quality Control",
    desc: "Quality checks at every stage of production.",
    icon: (
      <ShieldCheck className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-transform duration-500 group-hover:scale-105" />
    ),
    // Bottom row - 04: Dark Blue (Midnight Navy)
    bg: "bg-[#06202B]",
    textTitle: "text-white",
    textDesc: "text-slate-300",
    iconColor: "text-cyan-300",
    numberColor: "text-cyan-300/70",
    border: "border-b md:border-b-0 md:border-r border-[#082B3A]",
  },
  {
    number: "05.",
    title: "Flexible Production",
    desc: "Capability to handle bulk and customised orders.",
    icon: (
      <Boxes className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-transform duration-500 group-hover:scale-105" />
    ),
    // Bottom row - 05: Medium Blue (Signature Brand Blue)
    bg: "bg-[#0E7293]",
    textTitle: "text-white",
    textDesc: "text-blue-100/90",
    iconColor: "text-white",
    numberColor: "text-white/70",
    border: "border-b md:border-b-0 md:border-r border-[#0C5F7A]",
  },
  {
    number: "06.",
    title: "Timely Supply",
    desc: "Consistent and reliable delivery.",
    icon: (
      <Truck className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.2] transition-transform duration-500 group-hover:scale-105" />
    ),
    // Bottom row - 06: Light Blue
    bg: "bg-[#EBF5F8]",
    textTitle: "text-[#0A3D4E]",
    textDesc: "text-[#285A6B]",
    iconColor: "text-[#0E7293]",
    numberColor: "text-[#0E7293]/70",
    border: "",
  },
];

export default function ManufacturingPage() {
  return (
    <div className="bg-white min-h-screen text-cluster-text selection:bg-cluster-teal selection:text-white">
      {/* Redesigned Triangle Hero */}
      <TriangleHero
        kicker="Manufacturing Division"
        heading="MADE TO"
        headingHighlight="SCALE."
        description="Texvia by Cluster operates dual precision facilities producing high-velocity retail garments with zero-defect engineering."
        buttonText="EXPLORE TEXVIA"
        buttonHref="#texvia-overview"
        backgroundImage="/manufacture.png"
        backgroundAlt="Texvia Textile Manufacturing Facility"
        scrollTargetId="stats"
      />

      {/* Stats Section */}
      <div id="stats" className="mt-8 sm:mt-12 md:mt-16">
        <Container>
          <StaggerReveal stagger={0.14} className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-cluster-border rounded-[24px] sm:rounded-feature overflow-hidden border border-cluster-border shadow-sm">
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between group hover:bg-neutral-50 transition-colors duration-500">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-cluster-muted mb-6 sm:mb-10">Total Manufacturing</span>
              <div>
                <b className="text-4xl sm:text-5xl lg:text-7xl font-light text-cluster-teal flex items-baseline gap-1 leading-none font-manrope">
                  <Counter to={STATS.workforce} suffix="+" />
                </b>
                <span className="mt-3 sm:mt-4 block text-xs sm:text-sm text-cluster-muted">Global Workforce</span>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between group hover:bg-neutral-50 transition-colors duration-500">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-cluster-muted mb-6 sm:mb-10">Unit 01</span>
              <div>
                <b className="text-4xl sm:text-5xl lg:text-7xl font-light text-cluster-text flex items-baseline gap-1 leading-none font-manrope">
                  <Counter to={STATS.keralaWorkforce} suffix="+" />
                </b>
                <span className="mt-3 sm:mt-4 block text-xs sm:text-sm text-cluster-muted">Workforce — Kerala</span>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between group hover:bg-neutral-50 transition-colors duration-500">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-cluster-muted mb-6 sm:mb-10">Unit 02</span>
              <div>
                <b className="text-4xl sm:text-5xl lg:text-7xl font-light text-cluster-text flex items-baseline gap-1 leading-none font-manrope">
                  <Counter to={STATS.tamilNaduWorkforce} suffix="+" />
                </b>
                <span className="mt-3 sm:mt-4 block text-xs sm:text-sm text-cluster-muted">Workforce — Cumbum, TN</span>
              </div>
            </div>
          </StaggerReveal>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Texvia by Cluster — Comprehensive Industrial Overview
      ───────────────────────────────────────────────────────────── */}
      <TexviaOverview />

      {/* The Line / Process Section - Full Width */}
      <section className="mt-14 sm:mt-20 md:mt-28 w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionHead kicker="Manufacturing Process" title="Seven-Stage Production Workflow." right="02 / PROCESS" />
        </div>
        <div className="mt-6 sm:mt-10 w-full">
          <ManufacturingStages />
        </div>
      </section>

      {/* Locations Section */}
      <div id="locations" className="mt-14 sm:mt-20 md:mt-28 pb-14 sm:pb-20 md:pb-28">
        <Container>
          <SectionHead kicker="Manufacturing Locations" title="Two States. One Network." right="03 / LOCATIONS" />
          <div className="mt-8 sm:mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Map */}
            <Reveal direction="up" duration={0.8} className="w-full">
              <div
                className="relative block rounded-[20px] sm:rounded-[24px] overflow-hidden bg-cluster-surface border border-cluster-border p-4 sm:p-6 md:p-8 group shadow-inner hover:border-cluster-teal/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cluster-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Floating Map Action Badges */}
                <div className="absolute top-4 right-4 z-10 flex flex-wrap items-center gap-2">
                  <a
                    href="https://maps.app.goo.gl/mK36pXx6K9HJMzsB7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 shadow-xs text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-800 font-manrope hover:bg-cluster-coral hover:text-white hover:border-cluster-coral transition-all cursor-pointer"
                    title="View Cluster Kerala HQ on Google Maps"
                  >
                    <MapPin className="w-3 h-3 text-cluster-coral group-hover:text-white" />
                    <span>Kerala HQ ↗</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/GdVJD8dj4W8fbHE29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 shadow-xs text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-800 font-manrope hover:bg-cluster-teal hover:text-white hover:border-cluster-teal transition-all cursor-pointer"
                    title="View Texvia Cumbum Facility on Google Maps"
                  >
                    <MapPin className="w-3 h-3 text-cluster-teal group-hover:text-white" />
                    <span>Texvia Cumbum ↗</span>
                  </a>
                </div>

                <svg viewBox="0 0 1000 620" className="block w-full drop-shadow-md">
                  <path d={PEN_PATH} className="fill-slate-100 stroke-slate-200" strokeWidth="1" />
                  <path d={KER_PATH} fill="rgba(14,114,147,.1)" stroke="rgba(14,114,147,.4)" strokeWidth="1.5" className="transition-all duration-700 group-hover:fill-rgba(14,114,147,.15)" />
                  <text x="250" y="270" fill="rgba(14,114,147,.6)" fontSize="24" letterSpacing="10" fontWeight="600" className="font-sans">KERALA</text>
                  <text x="560" y="300" fill="rgba(100,116,139,.4)" fontSize="24" letterSpacing="10" fontWeight="600" className="font-sans">TAMIL NADU</text>
                  {UNITS.map((n, i) => (
                    <a
                      key={i}
                      href={i === 0 ? "https://maps.app.goo.gl/mK36pXx6K9HJMzsB7" : "https://maps.app.goo.gl/GdVJD8dj4W8fbHE29"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={i === 0 ? "Open Kerala Unit on Google Maps" : "Open Texvia Cumbum Unit on Google Maps"}
                      className="cursor-pointer"
                    >
                      <g transform={`translate(${n.x},${n.y})`} className="group/pin">
                        <circle r="12" fill="none" stroke={i === 0 ? "#FF8A65" : "#22C195"} strokeWidth="1.5" className="animate-ping opacity-60" style={{ transformOrigin: "center", transformBox: "fill-box" }} />
                        <circle r="6" fill={i === 0 ? "#FF8A65" : "#22C195"} fillOpacity=".9" />
                        <circle r="2" fill="#fff" />
                      </g>
                    </a>
                  ))}
                </svg>
              </div>
            </Reveal>
            
            {/* Unit Details */}
            <StaggerReveal stagger={0.16} className="flex flex-col gap-4 sm:gap-6">
              {/* Kerala Unit Card */}
              <div className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-cluster-border bg-cluster-surface shadow-sm p-6 sm:p-8 hover:shadow-md transition-all duration-500 hover:border-cluster-coral/30">
                <div className="absolute top-0 left-0 w-1 h-full bg-cluster-coral transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                <h4 className="text-xl sm:text-2xl font-black uppercase text-cluster-text mb-1">Kerala Unit</h4>
                <a
                  href="https://maps.app.goo.gl/mK36pXx6K9HJMzsB7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cluster-coral hover:underline text-xs sm:text-sm tracking-widest uppercase font-semibold font-manrope mb-3 sm:mb-4 group/loc"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kottarakkara Facility · Kerala, India (View on Map ↗)</span>
                </a>

                {/* Official Facility Address */}
                <a
                  href="https://maps.app.goo.gl/mK36pXx6K9HJMzsB7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-cluster-coral/40 shadow-2xs mb-5 text-xs sm:text-[13px] text-slate-700 leading-relaxed block group/kerala cursor-pointer transition-all"
                  title="View Cluster Kerala Office on Google Maps"
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-cluster-coral shrink-0 mt-0.5 group-hover/kerala:scale-110 transition-transform" />
                      <address className="not-italic flex flex-col">
                        <span className="font-bold text-slate-900 group-hover/kerala:text-cluster-coral transition-colors">Thujanth, B&amp;B Tower</span>
                        <span className="text-slate-600">TVM road, near Indian Coffee House</span>
                        <span className="text-slate-600">Pulamon Junction, Kottarakkara, Keralam 691531</span>
                      </address>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cluster-coral shrink-0 mt-0.5">
                      View on Map ↗
                    </span>
                  </div>
                </a>
                <div className="space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm text-cluster-muted">
                  <p className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-coral shrink-0" />
                    <span>Manufacturing unit</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-coral shrink-0" />
                    <span>Skilled workforce</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-coral shrink-0" />
                    <span>Focused production for key categories</span>
                  </p>
                </div>
                <div className="flex items-end gap-2 pt-4 border-t border-slate-200/60">
                  <b className="text-3xl sm:text-4xl font-manrope font-bold text-cluster-text leading-none"><Counter to={100} suffix="+" /></b>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-cluster-muted mb-1">Skilled Artisans</span>
                </div>
              </div>

              {/* Texvia Manufacturing Unit - Cumbum, Tamil Nadu */}
              <div className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-cluster-border bg-cluster-surface shadow-sm p-6 sm:p-8 hover:shadow-md transition-all duration-500 hover:border-cluster-teal/30">
                <div className="absolute top-0 left-0 w-1 h-full bg-cluster-teal transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xl sm:text-2xl font-black uppercase text-cluster-text">Texvia by Cluster</h4>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cluster-teal/10 text-cluster-teal font-manrope">Manufacturing Unit</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/GdVJD8dj4W8fbHE29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cluster-teal hover:underline text-xs sm:text-sm tracking-widest uppercase font-semibold font-manrope mb-3 sm:mb-4 group/loc"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Cumbum Facility · Tamil Nadu, India (View on Map ↗)</span>
                </a>
                
                {/* Official Facility Address */}
                <a
                  href="https://maps.app.goo.gl/GdVJD8dj4W8fbHE29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-cluster-teal/40 shadow-2xs mb-5 text-xs sm:text-[13px] text-slate-700 leading-relaxed block group/cumbum cursor-pointer transition-all"
                  title="View Texvia Cumbum Facility on Google Maps"
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-cluster-teal shrink-0 mt-0.5 group-hover/cumbum:scale-110 transition-transform" />
                      <address className="not-italic flex flex-col">
                        <span className="font-bold text-slate-900 group-hover/cumbum:text-cluster-teal transition-colors">10-K2, P Kuruppathevar Building</span>
                        <span className="text-slate-600">Near Cumbum New Bus Stand, Cumbum</span>
                        <span className="text-slate-600">Kambam, Theni District, Tamil Nadu – 625516</span>
                      </address>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cluster-teal shrink-0 mt-0.5">
                      View on Map ↗
                    </span>
                  </div>
                </a>

                <div className="space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm text-cluster-muted">
                  <p className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal shrink-0" />
                    <span>State-of-the-art apparel production facility</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal shrink-0" />
                    <span>High-velocity cutting, stitching, and finishing lines</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal shrink-0" />
                    <span>Powers Cluster Womenswear &amp; Matrutva collections</span>
                  </p>
                </div>
                <div className="flex items-end gap-2 pt-4 border-t border-slate-200/60">
                  <b className="text-3xl sm:text-4xl font-manrope font-bold text-cluster-text leading-none"><Counter to={250} suffix="+" /></b>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-cluster-muted mb-1">Skilled Artisans</span>
                </div>
              </div>
            </StaggerReveal>
          </div>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Our Manufacturing Capabilities
      ───────────────────────────────────────────────────────────── */}
      <section id="capabilities" className="py-16 sm:py-24 md:py-32 bg-slate-50/70 border-t border-cluster-border">
        <Container className="max-w-[1440px]">
          <SectionHead
            kicker="Production Excellence"
            title="Our Manufacturing Capabilities."
            right="04 / CAPABILITIES"
          />

          <div className="mt-10 sm:mt-14 md:mt-16">
            <Reveal direction="up" duration={0.6}>
              {/* Flush Seamless Grid Matching Reference Layout */}
              <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/90 shadow-xl grid grid-cols-1 md:grid-cols-3">
                {CAPABILITIES.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.bg} ${item.border} p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] transition-all duration-300 group`}
                  >
                    {/* Header: Big Icon (No Box/Background) + Number on Right */}
                    <div className="flex items-start justify-between">
                      <div className={item.iconColor}>
                        {item.icon}
                      </div>
                      <span className={`text-xs sm:text-sm font-mono font-bold tracking-widest ${item.numberColor}`}>
                        {item.number}
                      </span>
                    </div>

                    {/* Content: Title & Description (No tags or badges) */}
                    <div className="pt-14 sm:pt-20">
                      <h3 className={`text-2xl sm:text-[28px] font-black tracking-tight leading-snug mb-3.5 font-sans ${item.textTitle}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed font-normal ${item.textDesc}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
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
