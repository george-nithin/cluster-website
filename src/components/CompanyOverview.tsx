"use client";

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
    step: "01 · MASTER",
    stepBadgeColor: "bg-sky-50 text-sky-800 border-sky-200/80",
    category: "Enterprise Holding",
    categoryBadgeColor: "bg-sky-100/80 text-sky-800 border-sky-200/60",
    title: "Cluster Outfits Pvt. Ltd.",
    description:
      "The master holding organization uniting manufacturing, brand incubation, and supply chain logistics under a single mission: premium apparel delivered at scale.",
    logoPath: "/logos/cluster-main.png",
    logoAlt: "Cluster - The Best You Choose Official Logo",
    color: "#0E7293",
    href: "/about",
    ctaText: "Explore Cluster Outfits",
  },
  {
    id: "matrutva",
    step: "02 · BRAND",
    stepBadgeColor: "bg-orange-50 text-orange-800 border-orange-200/80",
    category: "Maternity & Nursing Wear",
    categoryBadgeColor: "bg-orange-100/80 text-orange-800 border-orange-200/60",
    title: "Matrutva",
    description:
      "Focused exclusively on ergonomic maternity dresses, kurtas, feeding dresses & tops, nightwear, and feeding bras engineered for comfort and everyday maternal life.",
    logoPath: "/logos/matrutva-clean-logo.png",
    logoAlt: "Matrutva Celebrating Motherhood Logo",
    color: "#FF8A65",
    href: "/brands",
    ctaText: "Explore Matrutva",
  },
  {
    id: "texvia",
    step: "03 · FACTORY",
    stepBadgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    category: "Manufacturing Infrastructure",
    categoryBadgeColor: "bg-emerald-100/80 text-emerald-800 border-emerald-200/60",
    title: "Texvia by Cluster",
    description:
      "Dedicated high-precision manufacturing infrastructure operating across Kerala (100+ artisans) and Cumbum, Tamil Nadu (250+ technicians) with zero-defect quality control.",
    logoPath: "/logos/texvia-logo-clean.png",
    logoAlt: "Texvia by Cluster Official Logo",
    color: "#22C195",
    href: "/manufacturing",
    ctaText: "Explore Texvia Facilities",
  },
];

/* ─────────────────────────────────────────────────────────────
   Main CompanyOverview Component
───────────────────────────────────────────────────────────── */
export default function CompanyOverview() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden bg-white">
      <Container>
        {/* ── Section Header ── */}
        <Reveal direction="up">
          <div className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-14 md:mb-16">
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

        {/* ── Three Columns 1 Row Grid Format (Per Reference Image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {THREE_COMPANIES.map((company, idx) => (
            <div
              key={company.id}
              className="relative rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 group overflow-hidden"
            >
              <div>
                {/* 1. Header: Logo & Step Badge */}
                <div className="flex items-center justify-between gap-4 min-h-[48px]">
                  <div className="relative h-10 sm:h-12 w-36 sm:w-44 flex items-center justify-start">
                    <Image
                      src={company.logoPath}
                      alt={company.logoAlt}
                      fill
                      className="object-contain object-left transition-transform duration-300 group-hover:scale-102"
                      priority={idx === 0}
                    />
                  </div>
                  <span
                    className={`shrink-0 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${company.stepBadgeColor}`}
                  >
                    {company.step}
                  </span>
                </div>

                {/* Divider Line */}
                <div className="h-px bg-slate-100 my-5 sm:my-6" />

                {/* 2. Brand / Manufacturing Unit Category Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide border ${company.categoryBadgeColor}`}
                  >
                    {company.category}
                  </span>
                </div>

                {/* 3. Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-manrope tracking-tight mb-2.5">
                  {company.title}
                </h3>

                {/* 4. Small Description */}
                <p className="text-xs sm:text-[13.5px] text-slate-600 font-light leading-relaxed mb-6">
                  {company.description}
                </p>
              </div>

              {/* 5. Button */}
              <div className="pt-5 border-t border-slate-100 mt-auto">
                <Button
                  variant="dark"
                  href={company.href}
                  className="w-full justify-center text-xs py-3 rounded-xl font-bold tracking-wider uppercase group-hover:bg-cluster-blue transition-colors"
                >
                  {company.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
