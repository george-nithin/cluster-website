"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/anim";
import Button from "@/components/ui/Button";

/* ─────────────────────────────────────────────────────────────
   3 Core Companies Data
───────────────────────────────────────────────────────────── */
const THREE_COMPANIES = [
  {
    id: "cluster-outfits",
    title: "Cluster Outfits Pvt. Ltd.",
    description:
      "The master holding organization uniting manufacturing, brand incubation, and supply chain logistics under a single mission: premium apparel delivered at scale. We oversee end-to-end design incubation, state-of-the-art textile manufacturing, and proprietary retail distribution powering 9,000+ counters across South India.",
    logoPath: "/logos/cluster-main.png",
    logoAlt: "Cluster - The Best You Choose Official Logo",
    color: "#0E7293",
    href: "/about",
    ctaText: "Explore Cluster Outfits",
  },
  {
    id: "matrutva",
    title: "Matrutva Maternity",
    description:
      "Thoughtfully designed nursing dresses, maternity essentials, and breathable cotton wear engineered for the comfort, dignity, and grace every mother deserves. Tested for delicate mother and baby contact with zero harsh chemical residues, discreet nursing access, and adaptive silhouettes that celebrate every stage.",
    logoPath: "/logos/matrutva-clean-logo.png",
    logoAlt: "Matrutva Celebrating Motherhood Logo",
    color: "#FF8A65",
    href: "/brands",
    ctaText: "Explore Matrutva Collection",
  },
  {
    id: "texvia",
    title: "Texvia by Cluster",
    description:
      "Two advanced manufacturing facilities across Kerala and Tamil Nadu. 350+ master artisans, automated CAD cutting, and in-line quality systems producing at zero waste. From raw yarn procurement to finished packaging, Texvia ensures uncompromising durability, precision finishing, and dependable scale.",
    logoPath: "/logos/texvia-logo.png",
    logoAlt: "Texvia by Cluster Textiles & Precision Manufacturing Logo",
    color: "#22C195",
    href: "/manufacturing",
    ctaText: "Explore Texvia Facilities",
  },
];

/* ─────────────────────────────────────────────────────────────
   Main CompanyOverview Component
───────────────────────────────────────────────────────────── */
export default function CompanyOverview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentCompany = THREE_COMPANIES[activeIdx];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden bg-white">
      <Container>
        {/* ── Section Header ── */}
        <Reveal direction="up">
          <div className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-14 md:mb-18">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                Who We Are · Three Core Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase text-cluster-text leading-[1.04] tracking-tight">
                  ONE COMPANY.{" "}
                  <br className="hidden sm:block" />
                  <span className="text-cluster-blue">DESIGN</span> TO{" "}
                  <span className="text-cluster-coral">SHOP SHELF</span>
                  <span className="text-cluster-coral">.</span>
                </h2>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end gap-4 sm:gap-5">
                <p className="text-sm sm:text-base text-cluster-muted leading-relaxed font-normal">
                  We develop market-ready fashion, fabricate in our own high-precision units, and sell under our proprietary brands — powering retail storefronts across South India.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 self-start text-[12px] font-bold tracking-widest text-cluster-text hover:text-cluster-blue transition-colors group/link uppercase font-manrope"
                >
                  <span>Learn More About Cluster</span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-cluster-border group-hover/link:border-cluster-blue group-hover/link:bg-cluster-blue/5 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Interactive Logo Shelf & Details ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ──── LEFT COLUMN: Logos Stack with Indicator Rail ──── */}
          <div className="md:col-span-5 lg:col-span-4 flex items-center md:items-stretch gap-4 sm:gap-6">
            {/* Logo Buttons Container */}
            <div className="flex-1 flex flex-row md:flex-col gap-3 sm:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
              {THREE_COMPANIES.map((company, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={company.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`
                      relative group flex-1 md:flex-none flex items-center justify-center
                      min-w-[140px] md:min-w-0 h-[100px] sm:h-[115px] md:h-[130px] px-5 py-4
                      rounded-2xl transition-all duration-300 text-left outline-hidden cursor-pointer
                      ${
                        isActive
                          ? "bg-white border-2 border-cluster-text shadow-[0_12px_36px_rgba(0,0,0,0.08)] scale-[1.02]"
                          : "bg-white/70 border border-cluster-border/80 hover:bg-white hover:border-cluster-border hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] opacity-50 hover:opacity-90"
                      }
                    `}
                    aria-label={`Select ${company.title}`}
                  >
                    {/* Active Brand Accent Bar (left on desktop, top on mobile) */}
                    {isActive && (
                      <span
                        className="absolute md:left-0 md:top-3 md:bottom-3 md:w-1 left-3 right-3 top-0 h-1 rounded-full transition-all duration-300"
                        style={{ backgroundColor: company.color }}
                      />
                    )}

                    {/* Logo Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={company.logoPath}
                        alt={company.logoAlt}
                        width={220}
                        height={60}
                        className={`
                          max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain
                          transition-all duration-300
                          ${isActive ? "scale-105 filter-none" : "grayscale-[30%] group-hover:grayscale-0"}
                        `}
                        priority={idx === 0}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Vertical Indicator Rail with Dots (Reference Image Style) */}
            <div className="hidden md:flex flex-col items-center justify-around py-8 px-1 relative shrink-0">
              {/* Vertical connecting line */}
              <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-cluster-border/60" />

              {THREE_COMPANIES.map((company, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={`dot-${company.id}`}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className="relative z-10 p-2 cursor-pointer group/dot outline-hidden"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {isActive ? (
                      /* Active filled dot matching reference image (warm golden accent) */
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#E5A93C] ring-4 ring-[#E5A93C]/25 shadow-xs transition-all duration-300" />
                    ) : (
                      /* Inactive hollow ring dot */
                      <span className="block w-3.5 h-3.5 rounded-full border-2 border-[#D1D5DB] bg-white group-hover/dot:border-[#E5A93C] group-hover/dot:scale-110 transition-all duration-200" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ──── RIGHT COLUMN: Name, Description & Button Only (Per User Request) ──── */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            <div
              key={currentCompany.id}
              className="relative flex flex-col justify-between rounded-[28px] bg-white border border-cluster-border/80 shadow-[0_12px_44px_rgba(0,0,0,0.04)] p-8 sm:p-12 lg:p-14 overflow-hidden transition-all duration-500 animate-fadeIn"
            >
              <div>
                {/* 1. Name of the Logo */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-cluster-text tracking-tight leading-[1.08]">
                  {currentCompany.title}
                </h3>

                {/* 2. Description */}
                <p className="text-base sm:text-lg text-cluster-muted leading-relaxed font-normal mt-5 sm:mt-6 max-w-2xl">
                  {currentCompany.description}
                </p>
              </div>

              {/* 3. Button */}
              <div className="pt-8 sm:pt-10 mt-6 sm:mt-8 border-t border-cluster-border/60">
                <Button variant="dark" href={currentCompany.href}>
                  {currentCompany.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Embedded CSS for smooth content fade */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
