"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { Reveal, StaggerReveal } from "@/components/anim";

/* ─────────────────────────────────────────────────────────────
   Animated Icons (Preserving full motion & adaptive hover colors)
───────────────────────────────────────────────────────────── */

/** 01. Brand Icon — Floating apparel contour + rotating spark + dynamic stitch sweep */
function AnimatedBrandIcon() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-110"
      >
        <style>{`
          @keyframes brand-spark {
            0%, 100% { transform: scale(0.9) rotate(0deg); opacity: 0.85; }
            50% { transform: scale(1.15) rotate(180deg); opacity: 1; }
          }
          @keyframes brand-thread {
            0% { stroke-dashoffset: 40; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -40; }
          }
          .anim-brand-spark {
            transform-origin: 32px 16px;
            animation: brand-spark 3.6s ease-in-out infinite;
          }
          .anim-brand-thread {
            stroke-dasharray: 12 8;
            animation: brand-thread 3s linear infinite;
          }
        `}</style>
        {/* Soft background glow */}
        <circle
          cx="24"
          cy="24"
          r="16"
          fill="#22C195"
          className="transition-colors duration-300 opacity-20 group-hover:fill-white group-hover:opacity-20"
        />

        {/* Fashion hanger / silhouette contour */}
        <path
          d="M24 13 C22.5 13 21 14.5 21 16.5 C21 18.5 23 19.5 24 20 L12 28 C11 28.7 11.5 30 13 30 L35 30 C36.5 30 37 28.7 36 28 L24 20"
          stroke="#168063"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover:stroke-white"
        />
        {/* Animated dynamic stitch rail */}
        <path
          d="M14 35 C20 37.5 28 37.5 34 35"
          stroke="#22C195"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="anim-brand-thread transition-colors duration-300 group-hover:stroke-white"
        />
        {/* Rotating 4-point spark */}
        <path
          d="M32 11 L33 15 L37 16 L33 17 L32 21 L31 17 L27 16 L31 15 Z"
          fill="#22C195"
          className="anim-brand-spark transition-colors duration-300 group-hover:fill-white"
        />
      </svg>
    </div>
  );
}

/** 02. Manufacturing Icon — Isometric interlocking smart cubes & gear */
function AnimatedManufacturingIcon() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-110"
      >
        <style>{`
          @keyframes mfg-gear {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes mfg-pulse {
            0%, 100% { transform: scale(1); opacity: 0.95; }
            50% { transform: scale(1.08); opacity: 1; }
          }
          .anim-mfg-gear {
            transform-origin: 24px 24px;
            animation: mfg-gear 12s linear infinite;
          }
          .anim-mfg-pulse {
            transform-origin: 24px 24px;
            animation: mfg-pulse 2.8s ease-in-out infinite;
          }
        `}</style>
        {/* Soft blue backdrop */}
        <circle
          cx="24"
          cy="24"
          r="16"
          fill="#0E7293"
          className="transition-colors duration-300 opacity-20 group-hover:fill-white group-hover:opacity-20"
        />

        {/* Outer tech ring */}
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="#0E7293"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          className="anim-mfg-gear opacity-60 transition-colors duration-300 group-hover:stroke-white group-hover:opacity-85"
        />

        {/* Isometric Cube Group */}
        <g className="anim-mfg-pulse">
          {/* Top Face */}
          <polygon
            points="24,14 33,19 24,24 15,19"
            fill="#EBF7FA"
            stroke="#0E7293"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:fill-white/40 group-hover:stroke-white"
          />
          {/* Left Face */}
          <polygon
            points="15,19 24,24 24,34 15,29"
            fill="#82C4D7"
            stroke="#0E7293"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:fill-white/60 group-hover:stroke-white"
          />
          {/* Right Face */}
          <polygon
            points="24,24 33,19 33,29 24,34"
            fill="#0E7293"
            stroke="#0E7293"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
          />
          {/* Glowing central node */}
          <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}

/** 03. Distribution Icon — High-speed delivery carrier + radar pulse */
function AnimatedDistributionIcon() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-110"
      >
        <style>{`
          @keyframes dist-wave {
            0% { transform: scale(0.6); opacity: 0.9; }
            50% { opacity: 0.4; }
            100% { transform: scale(1.35); opacity: 0; }
          }
          @keyframes dist-dash {
            0% { stroke-dashoffset: 16; }
            100% { stroke-dashoffset: 0; }
          }
          .anim-dist-wave1 {
            transform-origin: 32px 18px;
            animation: dist-wave 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          }
          .anim-dist-wave2 {
            transform-origin: 32px 18px;
            animation: dist-wave 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite 0.7s;
          }
          .anim-dist-dash {
            stroke-dasharray: 4 4;
            animation: dist-dash 1.2s linear infinite;
          }
        `}</style>
        {/* Soft peach glow */}
        <circle
          cx="24"
          cy="24"
          r="16"
          fill="#FF8A65"
          className="transition-colors duration-300 opacity-20 group-hover:fill-white group-hover:opacity-20"
        />

        {/* Animated radar ripples */}
        <circle
          cx="32"
          cy="18"
          r="6"
          stroke="#FF8A65"
          strokeWidth="1.2"
          className="anim-dist-wave1 transition-colors duration-300 group-hover:stroke-white"
        />
        <circle
          cx="32"
          cy="18"
          r="6"
          stroke="#FF8A65"
          strokeWidth="1.2"
          className="anim-dist-wave2 transition-colors duration-300 group-hover:stroke-white"
        />

        {/* Cargo truck / logistics container */}
        <rect
          x="10"
          y="18"
          width="18"
          height="14"
          rx="2"
          fill="#FFE0D4"
          stroke="#FF7043"
          strokeWidth="1.8"
          className="transition-all duration-300 group-hover:fill-white/30 group-hover:stroke-white"
        />
        <path
          d="M28 22 L36 22 L39 26 L39 32 L28 32 Z"
          fill="#FF8A65"
          stroke="#FF7043"
          strokeWidth="1.8"
          strokeLinejoin="round"
          className="transition-all duration-300 group-hover:fill-white/60 group-hover:stroke-white"
        />
        {/* Wheels */}
        <circle
          cx="16"
          cy="33"
          r="3"
          fill="#111111"
          className="transition-colors duration-300 group-hover:fill-white"
        />
        <circle cx="16" cy="33" r="1" fill="#FFFFFF" />
        <circle
          cx="34"
          cy="33"
          r="3"
          fill="#111111"
          className="transition-colors duration-300 group-hover:fill-white"
        />
        <circle cx="34" cy="33" r="1" fill="#FFFFFF" />

        {/* Speed trail */}
        <line
          x1="8"
          y1="36"
          x2="38"
          y2="36"
          stroke="#FF8A65"
          strokeWidth="1.5"
          className="anim-dist-dash transition-colors duration-300 group-hover:stroke-white"
        />
      </svg>
    </div>
  );
}

/** 04. Reach Icon — Rotating globe axis with orbiting coordinate beacon */
function AnimatedReachIcon() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-110"
      >
        <style>{`
          @keyframes reach-orbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes reach-beacon {
            0%, 100% { opacity: 0.3; transform: scale(0.85); }
            50% { opacity: 1; transform: scale(1.15); }
          }
          .anim-reach-orbit {
            transform-origin: 24px 24px;
            animation: reach-orbit 8s linear infinite;
          }
          .anim-reach-beacon {
            transform-origin: 24px 24px;
            animation: reach-beacon 2s ease-in-out infinite;
          }
        `}</style>
        {/* Soft backdrop */}
        <circle
          cx="24"
          cy="24"
          r="16"
          fill="#0E7293"
          className="transition-colors duration-300 opacity-20 group-hover:fill-white group-hover:opacity-20"
        />

        {/* Globe body */}
        <circle
          cx="24"
          cy="24"
          r="12"
          stroke="#0E7293"
          strokeWidth="1.8"
          fill="#EBF6F9"
          className="transition-all duration-300 group-hover:fill-white/30 group-hover:stroke-white"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="6"
          ry="12"
          stroke="#0E7293"
          strokeWidth="1.2"
          opacity="0.75"
          className="transition-colors duration-300 group-hover:stroke-white"
        />
        <line
          x1="12"
          y1="24"
          x2="36"
          y2="24"
          stroke="#0E7293"
          strokeWidth="1.2"
          opacity="0.75"
          className="transition-colors duration-300 group-hover:stroke-white"
        />

        {/* Orbit ring */}
        <g className="anim-reach-orbit">
          <ellipse
            cx="24"
            cy="24"
            rx="16"
            ry="7"
            stroke="#22C195"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            transform="rotate(-25 24 24)"
            opacity="0.85"
            className="transition-colors duration-300 group-hover:stroke-white"
          />
          {/* Orbiting satellite point */}
          <circle
            cx="38"
            cy="18"
            r="2.5"
            fill="#22C195"
            className="transition-colors duration-300 group-hover:fill-white"
          />
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Pillars Data Specification
───────────────────────────────────────────────────────────── */

interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "brands",
    number: "01.",
    title: "Brand Incubation",
    description: "In-house womenswear and maternity collections engineered from CAD to 9,000+ stores.",
    href: "/brands",
    icon: AnimatedBrandIcon,
  },
  {
    id: "manufacturing",
    number: "02.",
    title: "Manufacturing",
    description: "Dual state-of-the-art facilities in Kerala & Tamil Nadu with 350+ master artisans.",
    href: "/manufacturing",
    icon: AnimatedManufacturingIcon,
  },
  {
    id: "distribution",
    number: "03.",
    title: "Regional Logistics",
    description: "14 strategic hubs across South India with barcode tracking and 99.8% on-time SLA.",
    href: "/distribution",
    icon: AnimatedDistributionIcon,
  },
  {
    id: "reach",
    number: "04.",
    title: "Retail Network",
    description: "Supplying 9,000+ multi-brand counters and departmental stores with agile replenishment.",
    href: "/our-reach",
    icon: AnimatedReachIcon,
  },
];

/* ─────────────────────────────────────────────────────────────
   Main CorePillars Component
───────────────────────────────────────────────────────────── */

export default function CorePillars() {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden" id="pillars">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
          {/* ── Section Header ── */}
          <Reveal direction="up">
            <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl pb-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-cluster-blue rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-blue uppercase font-manrope">
                  Ecosystem Architecture · Our Core Pillars
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.3rem,4.2vw,3.8rem)] font-black uppercase text-[#111111] tracking-tight leading-none">
                DESIGN BOLDER. SCALE SMARTER.{" "}
                <span className="bg-gradient-to-r from-cluster-blue to-cluster-teal bg-clip-text text-transparent">
                  DELIVER FASTER.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                Uniting vertically integrated enterprise apparel manufacturing with expansive direct retail distribution across South India.
              </p>
            </div>
          </Reveal>

          {/* ── Contiguous 4-Column Single Row (Reference Layout with Animated Icons) ── */}
          <StaggerReveal stagger={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E2E1DC] border border-[#E2E1DC] rounded-2xl overflow-hidden shadow-xs [&>*]:bg-white">
              {PILLARS_DATA.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <Link
                    key={pillar.id}
                    href={pillar.href}
                    className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-11 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] h-full transition-colors duration-300 ease-out hover:bg-cluster-blue select-none cursor-pointer"
                  >
                    {/* Top: Index Number (01., 02., etc.) */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-[14px] font-bold font-manrope text-neutral-500 group-hover:text-white/90 transition-colors duration-300">
                        {pillar.number}
                      </span>
                    </div>

                    {/* Middle: Prominent Centered Bespoke Animated Icon */}
                    <div className="my-auto py-5 sm:py-8 lg:py-10 flex items-center justify-center">
                      <IconComponent />
                    </div>

                    {/* Bottom: Title & 2-Line Subtitle */}
                    <div className="flex flex-col gap-2 pt-4">
                      <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111111] group-hover:text-white transition-colors duration-300 tracking-tight leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-neutral-600 group-hover:text-white/85 transition-colors duration-300 leading-relaxed font-normal line-clamp-2">
                        {pillar.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
