"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface StageItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  facility: string;
  description: string;
  image: string;
  spec: string;
  dotColor: string;
}

const STAGES: StageItem[] = [
  {
    id: "stage-01",
    number: "01",
    tag: "Pre-Production",
    title: "Design & Development",
    facility: "CAD Studio & Pattern Room",
    description:
      "Translating fashion concepts into master digital tech packs, graded CAD pattern blocks, and precision sample prototypes.",
    image: "/design.jpg",
    spec: "48h Prototype SLA",
    dotColor: "#22C195",
  },
  {
    id: "stage-02",
    number: "02",
    tag: "Material Inbound",
    title: "Material Sourcing",
    facility: "Raw Material Warehouse",
    description:
      "Procuring certified combed cottons, viscose blends, and custom trims from audited mills with strict in-house fabric shrinkage testing.",
    image: "/sourching.jpg",
    spec: "100% Roll Verification",
    dotColor: "#F59E0B",
  },
  {
    id: "stage-03",
    number: "03",
    tag: "Fabrication Prep",
    title: "Precision Cutting",
    facility: "Automated Spreading Floor",
    description:
      "Computerized tension-free fabric spreading and multi-ply CNC knife cutting maximizing fabric utilization with sub-millimeter tolerances.",
    image: "/cutting.jpg",
    spec: "±0.5mm Accuracy",
    dotColor: "#0284C7",
  },
  {
    id: "stage-04",
    number: "04",
    tag: "Assembly Line",
    title: "Artisan Stitching",
    facility: "Kerala & Cumbum Units",
    description:
      "Synchronized multi-line assembly operated by 350+ skilled artisans equipped with high-speed automated sewing and flatlock machinery.",
    image: "/stitching.jpg",
    spec: "12 Assembly Lines",
    dotColor: "#10B981",
  },
  {
    id: "stage-05",
    number: "05",
    tag: "Quality Audit",
    title: "Finishing & QC",
    facility: "Quality Testing Lab",
    description:
      "End-to-end inline inspection, calibrated needle detection scanning, industrial vacuum steam pressing, and dimensional compliance audits.",
    image: "/qc.jpg",
    spec: "AQL 1.5 Standard",
    dotColor: "#8B5CF6",
  },
  {
    id: "stage-06",
    number: "06",
    tag: "Retail Logistics",
    title: "Packaging & Dispatch",
    facility: "Central Logistics Hub",
    description:
      "Individual barcode serialization, shelf-ready brand tagging, moisture-resistant packaging, and rapid logistics dispatch across 9,000+ retail counters.",
    image: "/packing.png",
    spec: "9,000+ Retail Outlets",
    dotColor: "#FF8A65",
  },
];

// Default card active when not hovering (card index 1: second card, exactly like the reference image)
const DEFAULT_ACTIVE_INDEX = 1;

export default function ManufacturingStages() {
  const [activeIdx, setActiveIdx] = useState<number>(DEFAULT_ACTIVE_INDEX);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 sm:gap-10">
      {/* ─────────────────────────────────────────────────────────────
          1. Six Stages Interactive Hover-Reveal Stage Cards (Full Width)
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full overflow-x-auto pb-4 no-scrollbar">
        <div
          onMouseLeave={() => setActiveIdx(DEFAULT_ACTIVE_INDEX)}
          className="flex gap-3 sm:gap-4 lg:gap-5 w-full min-w-[740px] md:min-w-[900px] lg:min-w-0 h-[380px] sm:h-[460px] lg:h-[520px]"
        >
          {STAGES.map((stage, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={stage.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View stage ${stage.number}: ${stage.title}`}
                className={`
                  group relative rounded-[24px] sm:rounded-[32px] overflow-hidden cursor-pointer
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${
                    isActive
                      ? "flex-[2.6] lg:flex-[2.8] xl:flex-[3] shadow-2xl ring-1 ring-black/10"
                      : "flex-1 bg-[#E7E7E3] hover:bg-[#DFDFDA]"
                  }
                `}
              >
                {/* ── Background Image (Only visible when active / hovered) ── */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-105"
                  }`}
                >
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={idx === 1}
                  />

                  {/* High-contrast gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />
                </div>

                {/* ── Card Content Container ── */}
                <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 sm:p-7 select-none">
                  {/* Top Pill / Tag */}
                  <div className="self-start">
                    <span
                      className={`
                        inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors duration-300
                        ${
                          isActive
                            ? "border border-white/35 bg-black/40 backdrop-blur-md text-white shadow-xs"
                            : "border border-black/15 bg-black/[0.03] text-black/60"
                        }
                      `}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="flex flex-col justify-end">
                    {/* Title */}
                    <h3
                      className={`
                        font-extrabold tracking-tight transition-all duration-300
                        ${
                          isActive
                            ? "text-white text-xl sm:text-2xl lg:text-[1.65rem] drop-shadow-sm leading-tight"
                            : "text-[#111111] text-base sm:text-lg lg:text-xl leading-snug"
                        }
                      `}
                    >
                      {stage.title}
                    </h3>

                    {/* Active State Details (Visible ONLY on Hover / Active Card) */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${
                          isActive
                            ? "max-h-[160px] opacity-100 mt-2.5"
                            : "max-h-0 opacity-0 mt-0 pointer-events-none"
                        }
                      `}
                    >
                      <p className="text-[12px] sm:text-[13px] text-white/80 line-clamp-2 leading-relaxed font-normal">
                        {stage.description}
                      </p>

                      <div className="pt-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#111111] text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase shadow-md transition-transform duration-300 hover:scale-105">
                          <span>Explore Stage</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <span className="hidden sm:inline-block text-[11px] font-mono text-white/70 font-medium">
                          {stage.spec}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
