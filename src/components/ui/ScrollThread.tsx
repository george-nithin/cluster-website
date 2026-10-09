"use client";

import { useEffect, useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   Apparel Scroll Thread — The Weaving Seam of Cluster
   - Pure pointer-events-none (never disrupts clicks or hovers)
   - Smooth requestAnimationFrame lerping for fluid inertia
   - Incorporates our Design System colors: #0E7293, #22C195, #FF8A65
   - Features an animated embroidery needle tip and subtle seam milestones
───────────────────────────────────────────────────────────── */
export default function ScrollThread() {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Refs for smooth animation loop
  const currentPosRef = useRef(0);
  const targetPosRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const raw = window.scrollY / totalScroll;
        targetPosRef.current = Math.min(Math.max(raw, 0), 1);
      }

      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Smooth Lerp loop for organic silk-thread elasticity
    const updateLoop = () => {
      const diff = targetPosRef.current - currentPosRef.current;
      currentPosRef.current += diff * 0.12;

      setScrollProgress(currentPosRef.current);
      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (!mounted) return null;

  // Percentage from 0 to 100
  const progressPct = Math.min(Math.max(scrollProgress * 100, 0), 100);

  // Subtle milestone notches along the seam (Design to Shop Shelf)
  const milestones = [
    { pos: 15, label: "Design", color: "#0E7293" },
    { pos: 42, label: "Fabrics", color: "#22C195" },
    { pos: 70, label: "Tailoring", color: "#FF8A65" },
    { pos: 94, label: "Shelf", color: "#111111" },
  ];

  return (
    <div
      aria-hidden="true"
      className="hidden md:flex fixed left-5 md:left-7 lg:left-9 top-0 bottom-0 z-40 pointer-events-none select-none flex-col items-center justify-between py-6"
    >
      {/* ── Top Thread Spool Bobbin ── */}
      <div className="relative flex flex-col items-center">
        {/* Subtle top origin knot */}
        <div className="w-2.5 h-2.5 rounded-full bg-cluster-blue/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-cluster-blue shadow-[0_0_8px_rgba(14,114,147,0.6)]" />
        </div>
      </div>

      {/* ── Vertical Seam Track ── */}
      <div className="relative flex-1 w-6 flex items-center justify-center my-1">
        {/* Background Guide Seam (Dashed Tailor's Basting Line) */}
        <div
          className="absolute inset-y-0 w-[1.5px] opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0E7293 1px, transparent 1.5px)",
            backgroundSize: "1.5px 8px",
          }}
        />

        {/* Milestone Seam Eyelets (Subtle micro-nodes) */}
        {milestones.map((m) => {
          const isPassed = progressPct >= m.pos;
          return (
            <div
              key={m.label}
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              style={{ top: `${m.pos}%` }}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  isPassed
                    ? "scale-125 shadow-[0_0_6px_rgba(255,138,101,0.8)]"
                    : "scale-75 opacity-30"
                }`}
                style={{
                  backgroundColor: isPassed ? m.color : "#999999",
                }}
              />
            </div>
          );
        })}

        {/* ── The Active Colored Thread (Draws with Scroll Progress) ── */}
        <div className="absolute top-0 bottom-0 w-6 flex items-start justify-center">
          {/* Thread Ribbon / Line */}
          <div
            className="w-[1.75px] rounded-full transition-all duration-75 origin-top relative"
            style={{
              height: `${progressPct}%`,
              background:
                "linear-gradient(to bottom, #0E7293 0%, #0E7293 30%, #22C195 65%, #FF8A65 100%)",
              boxShadow: "0 0 6px rgba(14, 114, 147, 0.4)",
            }}
          >
            {/* Soft ambient blur glow strand */}
            <div
              className="absolute inset-0 blur-[1px] opacity-60"
              style={{
                background:
                  "linear-gradient(to bottom, #0E7293, #22C195, #FF8A65)",
              }}
            />
          </div>

          {/* ── Needle & Active Stitch Tip ── */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-transform duration-75 flex flex-col items-center"
            style={{
              top: `${progressPct}%`,
              transform: `translate(-50%, -50%) ${
                isScrolling ? "scale(1.08)" : "scale(1)"
              }`,
            }}
          >
            {/* The Sewing Needle SVG */}
            <div
              className={`relative transition-transform duration-200 ${
                isScrolling ? "-rotate-6" : "rotate-0"
              }`}
            >
              <svg
                width="14"
                height="32"
                viewBox="0 0 14 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
              >
                {/* Needle Eyelet (Top Loop) */}
                <path
                  d="M7 2C5.5 2 4.5 3 4.5 4.5V9C4.5 10.5 5.5 11.5 7 11.5C8.5 11.5 9.5 10.5 9.5 9V4.5C9.5 3 8.5 2 7 2Z"
                  fill="#E2E8F0"
                  stroke="#64748B"
                  strokeWidth="0.75"
                />
                {/* Eyelet Hole where thread passes */}
                <ellipse cx="7" cy="6.5" rx="1.1" ry="2.2" fill="#0E7293" />

                {/* Needle Shaft tapering down */}
                <path
                  d="M5.5 10L6.5 29C6.6 30.5 7.4 30.5 7.5 29L8.5 10"
                  fill="#CBD5E1"
                  stroke="#94A3B8"
                  strokeWidth="0.75"
                />

                {/* Polished Sharp Needle Tip */}
                <circle cx="7" cy="30" r="1" fill="#FF8A65" />
              </svg>

              {/* Glowing Thread Droplet / Pulse at the Eyelet */}
              <div
                className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full pointer-events-none animate-ping opacity-75"
                style={{ backgroundColor: "#FF8A65" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Anchor Knot (Complete Garment Hem) ── */}
      <div className="relative flex flex-col items-center">
        <div
          className={`w-2.5 h-2.5 rounded-full border transition-all duration-500 ${
            progressPct > 98
              ? "bg-cluster-coral border-cluster-coral scale-125 shadow-[0_0_10px_rgba(255,138,101,0.8)]"
              : "bg-white border-cluster-border/60 opacity-40"
          }`}
        />
      </div>
    </div>
  );
}
