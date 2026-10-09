"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

/**
 * NeedleSplashScreen
 * 
 * Elegant full-screen splash screen that appears only once upon initial site entry.
 * Features the idle thread, moving precision needle, and dynamic color-changing seam.
 * Does NOT trigger on internal page-to-page navigation inside the website.
 */
export default function NeedleLoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === "undefined") return;

    // Check if the splash screen has already been shown in this session
    const hasShown = sessionStorage.getItem("cluster_splash_shown");
    if (hasShown) {
      return; // Do not show again when navigating inside the website
    }

    // Mark as shown so future route changes/clicks never re-trigger it
    sessionStorage.setItem("cluster_splash_shown", "true");
    setIsVisible(true);

    const durationMs = 1700; // 1.7s initial splash experience
    const startTime = Date.now();
    const interval = 16; // ~60fps

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawPct = elapsed / durationMs;

      if (rawPct < 1) {
        // Organic ease-out stitch progression
        let eased: number;
        if (rawPct < 0.3) {
          eased = (rawPct / 0.3) * 35; // brisk start to 35%
        } else if (rawPct < 0.7) {
          eased = 35 + ((rawPct - 0.3) / 0.4) * 40; // steady mid stitch to 75%
        } else {
          eased = 75 + ((rawPct - 0.7) / 0.3) * 24; // smooth finish
        }
        setProgress(Math.min(eased, 99));
      } else {
        clearInterval(timer);
        setProgress(100);

        // Hold at 100% momentarily, then smoothly fade out to reveal the website
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 600); // Fade duration
        }, 220);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Cluster Outfits"
      className={`fixed inset-0 z-[999999] bg-white flex flex-col items-center justify-center select-none transition-opacity duration-600 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-sm w-full px-6">
        {/* Brand Logo */}
        <div className="mb-10 scale-110 sm:scale-125 transition-transform duration-500">
          <Logo />
        </div>

        {/* ── Needle & Thread Loading Bar ── */}
        <div className="w-full relative h-10 flex items-center justify-center my-3">
          {/* 1. IDLE THREAD (Sits still across the loading line) */}
          <div className="absolute inset-x-0 h-[2.5px] bg-neutral-200/90 rounded-full overflow-hidden">
            <div
              className="w-full h-full opacity-60"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #94A3B8 0px, #94A3B8 4px, transparent 4px, transparent 8px)",
              }}
            />
          </div>

          {/* 2. ACTIVE THREAD (Changes color behind moving needle like a loading bar) */}
          <div
            className="absolute left-0 h-[3.5px] transition-[width] duration-75 ease-linear rounded-full"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #0E7293 0%, #1793B3 40%, #22C195 70%, #FF8A65 100%)",
              boxShadow:
                "0 0 10px rgba(34, 193, 149, 0.6), 0 0 4px rgba(255, 138, 101, 0.8)",
            }}
          />

          {/* 3. THE MOVING NEEDLE (Travels across the idle thread) */}
          <div
            className="absolute top-1/2 transition-[left] duration-75 ease-linear pointer-events-none"
            style={{
              left: `${progress}%`,
              transform: "translate(-96%, -50%)",
            }}
          >
            <div className="relative flex items-center select-none animate-needleBob">
              {/* Realistic Sewing Needle SVG */}
              <svg
                width="46"
                height="16"
                viewBox="0 0 46 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] overflow-visible"
              >
                <defs>
                  {/* Metallic Chrome Gradient */}
                  <linearGradient id="needleChrome" x1="0" y1="0" x2="0" y2="16">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="25%" stopColor="#E2E8F0" />
                    <stop offset="55%" stopColor="#94A3B8" />
                    <stop offset="80%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>

                  {/* Glowing Thread in Eyelet */}
                  <linearGradient id="threadInEye" x1="0" y1="8" x2="10" y2="8">
                    <stop offset="0%" stopColor="#0E7293" />
                    <stop offset="100%" stopColor="#FF8A65" />
                  </linearGradient>
                </defs>

                {/* Thread trailing into needle eyelet from the left */}
                <path
                  d="M-4 8 C 0 8, 2 8, 6 8"
                  stroke="url(#threadInEye)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Needle Body (Polished Chrome Steel) */}
                <path
                  d="M 2 8 
                     C 2 6, 4 5, 8 5 
                     L 32 6 
                     C 37 6.5, 42 7.5, 45 8 
                     C 42 8.5, 37 9.5, 32 10 
                     L 8 11 
                     C 4 11, 2 10, 2 8 Z"
                  fill="url(#needleChrome)"
                  stroke="#64748B"
                  strokeWidth="0.6"
                />

                {/* Eyelet Oval Hole */}
                <ellipse
                  cx="7"
                  cy="8"
                  rx="3.2"
                  ry="1.4"
                  fill="#0F172A"
                  stroke="#94A3B8"
                  strokeWidth="0.5"
                />

                {/* Colored Thread passing through eyelet */}
                <ellipse
                  cx="7"
                  cy="8"
                  rx="2.2"
                  ry="0.9"
                  fill="#FF8A65"
                />

                {/* Top Metallic Highlight Line */}
                <path
                  d="M 9 6.2 L 34 6.8"
                  stroke="#FFFFFF"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Pointed Needle Tip Spark */}
                <circle
                  cx="45"
                  cy="8"
                  r="1.8"
                  fill="#FFFFFF"
                  className="animate-pulse"
                />
                <circle
                  cx="45"
                  cy="8"
                  r="3.5"
                  fill="#FF8A65"
                  opacity="0.6"
                  className="animate-ping"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Minimal Progress Indicator Below */}
        <div className="flex items-center justify-between w-full mt-2 text-[10.5px] font-mono text-neutral-400 uppercase tracking-widest">
          <span>TAILORING QUALITY</span>
          <span className="font-semibold text-neutral-600 font-numbers">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Embedded CSS Keyframes */}
      <style jsx>{`
        @keyframes needleBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-1.5px) rotate(-1.5deg);
          }
        }
        .animate-needleBob {
          animation: needleBob 0.65s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
