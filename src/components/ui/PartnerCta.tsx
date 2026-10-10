"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/anim";
import Button from "@/components/ui/Button";

export default function PartnerCta() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0D0F11] border-t border-white/10 text-white">
      <style>{`
        @keyframes float-gentle-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-gentle-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .anim-leaf-1 {
          animation: float-gentle-1 6s ease-in-out infinite;
        }
        .anim-leaf-2 {
          animation: float-gentle-2 7s ease-in-out infinite;
        }
      `}</style>

      {/* ── Ambient Background Lighting in Design System Colors ── */}
      {/* Cluster Coral Glow (#FF8A65) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cluster-coral/10 rounded-full blur-[140px] pointer-events-none" />
      {/* Cluster Blue Glow (#0E7293) */}
      <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] bg-cluster-blue/15 rounded-full blur-[120px] pointer-events-none" />
      {/* Cluster Teal Glow (#22C195) */}
      <div className="absolute top-1/2 right-10 w-[420px] h-[420px] bg-cluster-teal/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Main Full-Width Content Container ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-10">
          
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: Typography & Actions
          ──────────────────────────────────────────────────────── */}
          <Reveal direction="up">
            <div className="flex flex-col items-start justify-center max-w-2xl">
              {/* Kicker with Design System Coral Bar */}
              <div className="flex items-center gap-3 mb-4 sm:mb-8">
                <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                  Partner With Us
                </span>
              </div>

              {/* Main Editorial Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.3rem,4.6vw,4.6rem)] font-black text-white tracking-[-0.02em] leading-[1.08] sm:leading-[1.04] uppercase">
                Let&apos;s build the<br />
                next generation<br />
                of{" "}
                <span className="font-serif italic font-normal text-cluster-coral capitalize tracking-normal inline-block">
                  Apparel.
                </span>
              </h2>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#A0A0A0] leading-relaxed mt-4 sm:mt-7 max-w-xl font-light">
                Partner with Cluster Outfits and become part of our vertically integrated ecosystem — uniting in-house brand incubation, dual Texvia smart factories, and 9,000+ retail partners across South India.
              </p>

              {/* Action Buttons in Design System Styling */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-10 w-full sm:w-auto">
                {/* Primary Blue Button (#0E7293) matching Reference Image */}
                <Button variant="blue" href="/contact">
                  Partner With Us
                </Button>

                {/* Secondary Dark Outline Button matching Reference Image */}
                <Button variant="outline" href="/contact">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Reveal>

          {/* ────────────────────────────────────────────────────────
              RIGHT COLUMN: Dual Editorial Fashion Showcase (leaf1 & leaf2)
          ──────────────────────────────────────────────────────── */}
          <Reveal direction="left" delay={0.15}>
            <div className="relative flex items-center justify-center w-full min-h-[360px] sm:min-h-[480px] lg:min-h-[580px] select-none mt-4 lg:mt-0">
              
              {/* Ambient Concentric Rings in Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] rounded-full border border-white/10" />
                <div className="w-[200px] sm:w-[360px] h-[200px] sm:h-[360px] rounded-full border border-cluster-teal/20" />
                <div className="w-[140px] sm:w-[240px] h-[140px] sm:h-[240px] rounded-full border border-cluster-coral/20" />
              </div>

              {/* Dual Model Fashion Stage */}
              <div className="relative w-full max-w-[560px] h-[360px] sm:h-[480px] lg:h-[580px] flex items-end justify-center">
                
                {/* Model 02: Tropical Teal Palms (Left / Center) */}
                <div className="absolute bottom-0 left-1 sm:left-6 w-[170px] sm:w-[260px] lg:w-[320px] h-[95%] sm:h-[98%] anim-leaf-2 z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]">
                  <Image
                    src="/leaf2.png"
                    alt="Cluster Fashion - Model in Tropical Emerald Silhouettes"
                    fill
                    priority
                    sizes="(max-width: 640px) 170px, (max-width: 1024px) 260px, 320px"
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Model 01: Tropical Coral Palms (Right / Foreground) */}
                <div className="absolute bottom-0 right-1 sm:right-6 w-[160px] sm:w-[250px] lg:w-[310px] h-[88%] sm:h-[92%] anim-leaf-1 z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.75)]">
                  <Image
                    src="/leaf1.png"
                    alt="Cluster Fashion - Model in Floral Coral Co-ords"
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 250px, 310px"
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Floating Pill Badges in Design System Styling */}
                <div className="absolute top-2 sm:top-8 right-1 sm:right-4 z-30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9.5px] sm:text-[11px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cluster-coral animate-pulse" />
                  <span>Cluster &amp; Matrutva</span>
                </div>

                <div className="absolute bottom-3 sm:bottom-10 left-1 sm:left-4 z-30 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9.5px] sm:text-[11px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cluster-teal" />
                  <span className="font-manrope">9,000+ Retail Counters</span>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
