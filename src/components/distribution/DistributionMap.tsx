"use client";

import { useEffect, useRef, useState } from "react";
import { HUBS, KER_PATH, PEN_PATH, UNITS } from "@/lib/data";

type Dot = { x: number; y: number; k: 0 | 1; ph: number; birth: number };
type Filter = "all" | "kl" | "tn";

const TARGETS: Record<Filter, number> = { all: 9000, kl: 4800, tn: 5200 };
const LABELS: Record<Filter, string> = {
  all: "Retail Shops — Total Active Footprint",
  kl: "Retail Shops — Kerala Commercial Staging",
  tn: "Retail Shops — Tamil Nadu Commercial Staging",
};

export default function DistributionMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);
  const [selectedHub, setSelectedHub] = useState<string | null>(null);
  const [count, setCount] = useState("0");
  const filterRef = useRef<Filter>("all");
  const startRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    filterRef.current = filter;
    startedRef.current = true;
    startRef.current = performance.now();
  }, [filter]);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const Pp = new Path2D(PEN_PATH);
    const Pk = new Path2D(KER_PATH);
    const probe = document.createElement("canvas").getContext("2d")!;
    const dots: Dot[] = [];

    // ── Generate Uniform Cartesian Dot-Matrix (Stipple Cartography as in Reference Image 1) ──
    const GRID_STEP = 8.5; // Fine regular dot lattice
    for (let y = 35; y <= 540; y += GRID_STEP) {
      for (let x = 300; x <= 825; x += GRID_STEP) {
        if (probe.isPointInPath(Pk, x, y)) {
          dots.push({
            x,
            y,
            k: 1, // Kerala
            ph: Math.random() * Math.PI * 2,
            birth: 0,
          });
        } else if (probe.isPointInPath(Pp, x, y)) {
          dots.push({
            x,
            y,
            k: 0, // Tamil Nadu
            ph: Math.random() * Math.PI * 2,
            birth: 0,
          });
        }
      }
    }

    const [N1, N2] = UNITS;
    let maxD = 0;
    dots.forEach((d) => {
      const b =
        (Math.min(
          Math.hypot(d.x - N1.x, d.y - N1.y),
          Math.hypot(d.x - N2.x, d.y - N2.y)
        ) /
          560) *
          0.72 +
        Math.random() * 0.28;
      d.birth = b;
      if (b > maxD) maxD = b;
    });

    const twinkle = dots.filter((_, i) => i % 8 === 0);
    let W = 0;
    let H = 0;
    let S = 1;

    const size = () => {
      if (!cv.parentElement) return;
      const r = cv.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(2, r.width * dpr);
      H = Math.max(2, r.height * dpr);
      cv.width = W;
      cv.height = H;
      S = W / 1000;
    };

    size();
    const ro = new ResizeObserver(size);
    if (cv.parentElement) ro.observe(cv.parentElement);

    const visibleRef = { v: false };
    const backOut = (t: number) => {
      const c1 = 1.70158;
      return 1 + (c1 + 1) * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };

    let raf = 0;
    const frame = () => {
      const f = filterRef.current;
      const vis = (d: Dot) =>
        f === "all" || (f === "kl" && d.k === 1) || (f === "tn" && d.k === 0);
      const now = performance.now();
      const p = startedRef.current
        ? Math.min(1, (now - startRef.current) / 2800)
        : 0;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, W, H);

      ctx.setTransform(S, 0, 0, S, 0, 0);

      // Subtle background arterial supply threads from manufacturing units
      HUBS.forEach((h, i) => {
        if (f !== "all" && h.st !== f) return;
        const u = h.st === "kl" ? N1 : N2;
        ctx.strokeStyle =
          h.st === "kl"
            ? "rgba(14, 114, 147, 0.16)"
            : "rgba(34, 193, 149, 0.16)";
        ctx.lineWidth = 0.9;
        ctx.setLineDash([3, 5]);
        ctx.lineDashOffset = -now * 0.012 - i * 2;
        ctx.beginPath();
        ctx.moveTo(u.x, u.y);
        ctx.quadraticCurveTo(
          (u.x + h.x) / 2,
          (u.y + h.y) / 2 - 20,
          h.x,
          h.y
        );
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // ── Render Uniform Matrix Dots (Matching Reference Image 1) ──
      const win = 0.35;
      for (const d of dots) {
        if (!vis(d)) continue;
        const lt = Math.max(0, Math.min(1, (p * (maxD + win) - d.birth) / win));
        const e = backOut(lt);

        // Reference Image 1 style: elegant neutral gray stipple matrix with soft brand tints
        let dotAlpha = 0.65;
        let dotColor = "rgba(165, 170, 180,"; // Clean neutral stipple gray

        if (f === "kl" && d.k === 1) {
          dotColor = "rgba(14, 114, 147,"; // Cluster Blue active
          dotAlpha = 0.85;
        } else if (f === "tn" && d.k === 0) {
          dotColor = "rgba(34, 193, 149,"; // Cluster Teal active
          dotAlpha = 0.85;
        } else if (f === "all") {
          dotColor = d.k === 1 ? "rgba(150, 155, 168," : "rgba(168, 173, 182,";
        }

        ctx.fillStyle = `${dotColor} ${dotAlpha * Math.min(1, e)})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.01, 1.6 * e), 0, Math.PI * 2);
        ctx.fill();
      }

      // Gentle cartographic twinkle across random stipple points
      twinkle.forEach((d) => {
        if (!vis(d)) return;
        const s = 0.4 + 0.6 * Math.sin(now * 0.0022 + d.ph);
        ctx.fillStyle = d.k
          ? `rgba(14, 114, 147, ${0.25 + 0.5 * s})`
          : `rgba(255, 138, 101, ${0.2 + 0.45 * s})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.8 + 0.4 * s, 0, Math.PI * 2);
        ctx.fill();
      });

      // Manufacturing units beacon rings (Cluster Coral #FF8A65)
      ([N1, N2] as const).forEach((n) => {
        const pr = (now * 0.012) % 24;
        ctx.strokeStyle = `rgba(255, 138, 101, ${Math.max(
          0,
          0.6 - (pr / 24) * 0.6
        )})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4 + pr, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "#FF8A65";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animated counter calculation
      const cnt = Math.round(TARGETS[f] * (1 - Math.pow(1 - p, 3)));
      setCount(cnt.toLocaleString("en-IN") + (p >= 1 ? "+" : ""));

      if (visibleRef.v) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visibleRef.v = e.isIntersecting;
        if (visibleRef.v && !startedRef.current) {
          startedRef.current = true;
          startRef.current = performance.now();
        }
        if (visibleRef.v && !raf) raf = requestAnimationFrame(frame);
        else if (!visibleRef.v && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: "60px" }
    );

    io.observe(cv);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* ── Top Bar: Dynamic Count, Legend, & Region Filter Tabs ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5 pb-2 border-b border-cluster-border/60">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-cluster-coral font-manrope tracking-tight leading-none">
              {count}
            </span>
            <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-neutral-800 font-manrope">
              {LABELS[filter]}
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1 max-w-xl">
            Audited physical counters stocked with Cluster &amp; Matrutva apparel across Kerala &amp; Tamil Nadu.
          </p>
        </div>

        {/* Region Filter Toggle (Clean Light Design) */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="inline-flex p-1 rounded-xl bg-white border border-cluster-border shadow-xs">
            {(["all", "kl", "tn"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  filter === f
                    ? "bg-cluster-coral text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {f === "all" ? "All (14)" : f === "kl" ? "Kerala (7)" : "Tamil Nadu (7)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Interactive Map Canvas Container (Max-Width, Dotted Territory & Teardrop Pins) ── */}
      <div className="relative aspect-[1000/600] w-full overflow-hidden rounded-[28px] border border-cluster-border bg-white shadow-xs select-none">


        {/* Stipple Dot Matrix Canvas Layer */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* ── Prominent Teardrop Map Pin Markers (Directly Matching Reference Image 1) ── */}
        {HUBS.map((h) => {
          const isVisible = filter === "all" || h.st === filter;
          const isHovered = hoveredHub === h.id;
          const isSelected = selectedHub === h.id;
          const isActive = isHovered || isSelected;

          return (
            <div
              key={h.id}
              className={`absolute z-20 -translate-x-1/2 -translate-y-full transition-all duration-300 ${
                isVisible
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-20 pointer-events-none scale-90"
              }`}
              style={{ left: `${(h.x / 1000) * 100}%`, top: `${(h.y / 620) * 100}%` }}
              onMouseEnter={() => setHoveredHub(h.id)}
              onMouseLeave={() => setHoveredHub(null)}
              onClick={() => setSelectedHub(selectedHub === h.id ? null : h.id)}
            >
              <div className="relative flex flex-col items-center cursor-pointer group/pin">
                {/* ── Interactive Floating Tooltip (Above Pin) ── */}
                <div
                  className={`absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none z-30 ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 translate-y-2"
                  }`}
                >
                  <div className="whitespace-nowrap rounded-xl bg-neutral-900 text-white px-3.5 py-1.5 shadow-xl border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cluster-coral" />
                    <span className="text-[11px] font-black uppercase tracking-wider font-manrope">
                      {h.n}
                    </span>
                    <span className="text-[10px] text-white/70 font-mono">
                      {h.c.toLocaleString("en-IN")}+ Outlets
                    </span>
                  </div>
                  {/* Tooltip beak triangle */}
                  <div className="w-2 h-2 bg-neutral-900 rotate-45 mx-auto -mt-1" />
                </div>

                {/* ── Classic Teardrop Pin Silhouette (Image 1 Reference) ── */}
                <svg
                  viewBox="0 0 24 32"
                  className={`w-5 h-7 sm:w-6 sm:h-8 transition-transform duration-200 drop-shadow-md origin-bottom ${
                    isActive ? "scale-125" : "hover:scale-115"
                  }`}
                >
                  {/* Pin outer teardrop shell */}
                  <path
                    d="M 12 0 C 5.37 0, 0 5.37, 0 12 C 0 21, 12 32, 12 32 C 12 32, 24 21, 24 12 C 24 5.37, 18.63 0, 12 0 Z"
                    fill={h.st === "kl" ? "#0E7293" : "#FF8A65"}
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                  />
                  {/* Inner crisp white circular dot/hole (Image 1 signature) */}
                  <circle cx="12" cy="11.5" r="3.8" fill="#FFFFFF" />
                </svg>

                {/* Subtle base pin pulse */}
                <span
                  className={`w-2 h-2 rounded-full -mt-1 transition-all ${
                    isActive
                      ? "bg-cluster-coral scale-150 animate-ping"
                      : "bg-black/20"
                  }`}
                />

                {/* City name label pill (Visible on desktop) */}
                <span className="mt-1 whitespace-nowrap rounded-md bg-white/95 backdrop-blur-xs border border-black/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs hidden md:inline-block">
                  {h.n}
                </span>
              </div>
            </div>
          );
        })}

        {/* ── Bottom Info Legend ── */}
        <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-wider text-neutral-700 shadow-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-3.5 rounded-full bg-cluster-blue border border-white" />
              Kerala Hubs (7)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-3.5 rounded-full bg-cluster-coral border border-white" />
              Tamil Nadu Hubs (7)
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              Each dot — Retail Shop
            </span>
          </div>

          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 hidden sm:inline-block">
            South India Commercial Network · 2026 Audit
          </span>
        </div>
      </div>
    </div>
  );
}
