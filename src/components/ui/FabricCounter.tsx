"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   Animated Number Count-Up Component
───────────────────────────────────────────────────────────── */
function AnimatedCounterValue({
  target,
  duration = 2000,
  startAnimation = false,
}: {
  target: number;
  duration?: number;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, startAnimation]);

  return <span className="tabular-nums font-manrope">{count.toLocaleString("en-IN")}</span>;
}

/* ─────────────────────────────────────────────────────────────
   Main FabricCounter Component — Full Width Cinematic Canvas
───────────────────────────────────────────────────────────── */
export default function FabricCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] sm:min-h-[640px] md:min-h-[740px] lg:min-h-[800px] overflow-hidden bg-black text-white flex flex-col justify-between py-10 sm:py-16 md:py-24 group shadow-2xl"
    >
      <style>{`
        @keyframes pulse-badge-glow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(34, 193, 149, 0.4));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 20px rgba(34, 193, 149, 0.7));
          }
        }
        .anim-badge-glow {
          animation: pulse-badge-glow 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* ── Full-Bleed Background Image & Ken Burns Zoom ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/counterbg.jpg"
          alt="Cluster Textile Manufacturing Line & Retail Inventory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[10000ms] ease-out group-hover:scale-105"
        />

        {/* ── Multi-Layer Black Gradient Overlays (Reduced by 20% for Enhanced Background Visibility) ── */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 via-55% to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
      </div>

      {/* ── Top Header Area (Spans full width with max content constraint) ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8 sm:pb-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-cluster-teal" />
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase">
                Scale &amp; Performance
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              MEASURED AT EVERY LAYER<span className="text-cluster-teal">.</span>
            </h2>
          </div>

          <div className="text-[10px] sm:text-[11px] tracking-[0.2em] text-white/60 font-mono uppercase shrink-0">
            Audited Supply Chain · 2026
          </div>
        </div>
      </div>

      {/* ── Bottom Counters Row (Directly matching Reference Layout with Authentic Data) ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 md:px-14 lg:px-20 mt-auto pt-10 sm:pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-16 items-end">

          {/* ────────────────────────────────────────────────────────
              Counter 01: 9,000+ Retail Counters
          ──────────────────────────────────────────────────────── */}
          <div
            className={`flex items-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Number + Accent */}
            <div className="flex items-baseline font-black font-manrope tracking-tight text-white leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <AnimatedCounterValue target={9000} duration={2200} startAnimation={isVisible} />
              <span className="text-cluster-blue font-black font-manrope ml-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_12px_rgba(14,114,147,0.7)]">
                +
              </span>
            </div>

            {/* Label Beside Number */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xs sm:text-base lg:text-xl font-bold text-white tracking-tight uppercase">
                retail
              </span>
              <span className="text-xs sm:text-base lg:text-xl font-bold text-white/80 tracking-tight uppercase">
                counters
              </span>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────
              Counter 02: 25,000+ Monthly Customers
          ──────────────────────────────────────────────────────── */}
          <div
            className={`flex items-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Number + Accent */}
            <div className="flex items-baseline font-black font-manrope tracking-tight text-white leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <AnimatedCounterValue target={25000} duration={1800} startAnimation={isVisible} />
              <span className="text-cluster-coral font-black font-manrope ml-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_12px_rgba(255,138,101,0.7)]">
                +
              </span>
            </div>

            {/* Label Beside Number */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xs sm:text-base lg:text-xl font-bold text-white tracking-tight uppercase">
                monthly
              </span>
              <span className="text-xs sm:text-base lg:text-xl font-bold text-white/80 tracking-tight uppercase">
                customers
              </span>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────
              Counter 03: 100% Quality Audited
          ──────────────────────────────────────────────────────── */}
          <div
            className={`flex items-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Number + Accent */}
            <div className="flex items-baseline font-black font-manrope tracking-tight text-white leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <AnimatedCounterValue target={100} duration={2000} startAnimation={isVisible} />
              <span className="text-cluster-teal font-black font-manrope ml-1 text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_12px_rgba(34,193,149,0.7)]">
                %
              </span>
            </div>

            {/* Label Beside Number */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xs sm:text-base lg:text-xl font-bold text-white tracking-tight uppercase">
                quality
              </span>
              <span className="text-xs sm:text-base lg:text-xl font-bold text-white/80 tracking-tight uppercase">
                audited
              </span>
            </div>
          </div>

        </div>

        {/* ── Subtitle Footnote Bar ── */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] sm:text-[13px] text-white/60">
          <p>
            Operating across 2 specialized production facilities in Kerala &amp; Cumbum, Tamil Nadu with state-wide retail dispatch.
          </p>
          <div className="flex items-center gap-4 text-white/80 text-[11px] font-semibold tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cluster-blue" />
              Cluster Outfits
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cluster-coral" />
              Matrutva
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal" />
              Texvia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
