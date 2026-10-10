"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { Reveal } from "@/components/anim";

interface Milestone {
  year: string;
  yearSub?: string;
  step: string;
  tag: string;
  title: string;
  desc: string;
  highlight: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2015",
    step: "01",
    tag: "Market Entry",
    title: "Ladies' Garment Industry",
    desc: "Entered the ladies’ garment industry and built a strong market presence across Kerala.",
    highlight: "Foundational retail presence established across Kerala",
  },
  {
    year: "2022",
    step: "02",
    tag: "Leadership Transition",
    title: "Cluster Outfits Established",
    desc: "Following Devan’s voluntary retirement from the Indian Air Force, the business was established as Cluster Outfits under a proprietorship model.",
    highlight: "Proprietorship model · IAF veteran leadership",
  },
  {
    year: "2025",
    step: "03",
    tag: "Corporate Expansion",
    title: "Incorporated as Private Limited",
    desc: "Incorporated as Cluster Outfits Private Limited, marking the beginning of its next growth phase.",
    highlight: "Private Limited incorporation · Industrial scale & multi-state grid",
  },
  {
    year: "2,000+",
    yearSub: "Counters",
    step: "04",
    tag: "Retail Network",
    title: "Extensive Retail Reach",
    desc: "Supplying to 2,000+ A-Class and B-Class retail counters across Kerala.",
    highlight: "Supplying 2,000+ A-Class & B-Class storefronts across Kerala",
  },
];

export default function CompanyJourney() {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveIdx(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#FAF9F6] border-y border-cluster-border py-20 sm:py-28 md:py-36 relative">
      <Container className="max-w-6xl relative">
        {/* ─────────────────────────────────────────────────────────────
            Header: Matches Reference Editorial Style
        ───────────────────────────────────────────────────────────── */}
        <Reveal direction="up" duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                  Company History
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-none font-manrope">
                Company Journey<span className="text-cluster-coral">.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-2xl">
                From our origins in the ladies&apos; garment industry to establishing Cluster Outfits under Indian Air Force veteran leadership, and incorporating into an agile Private Limited apparel manufacturing enterprise supplying over 2,000+ retail counters across South India.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ─────────────────────────────────────────────────────────────
            Timeline Rows: Giant Numeral + Details (Matches Reference Design)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative border-t border-slate-300/80">
          {MILESTONES.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`group border-b border-slate-300/80 py-12 sm:py-16 md:py-20 transition-all duration-500 -mx-4 sm:-mx-8 px-4 sm:px-8 rounded-2xl ${
                  isActive ? "bg-white/70 shadow-xs" : "hover:bg-white/40"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-baseline">
                  {/* Left Column: Giant Year Typography */}
                  <div className="lg:col-span-5 flex items-baseline gap-3">
                    <span
                      className={`text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-extrabold tracking-tighter leading-none font-manrope transition-colors duration-500 select-none ${
                        isActive
                          ? "text-cluster-blue"
                          : "text-slate-900 group-hover:text-cluster-blue"
                      }`}
                    >
                      {item.year}
                    </span>
                    {item.yearSub && (
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cluster-coral font-manrope">
                        {item.yearSub}
                      </span>
                    )}
                  </div>

                  {/* Right Column: Title, Description & Badge */}
                  <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight font-manrope transition-colors duration-300 ${
                          isActive
                            ? "text-cluster-coral"
                            : "text-slate-900 group-hover:text-cluster-coral"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider font-manrope bg-slate-200/80 text-slate-700 group-hover:bg-cluster-blue/10 group-hover:text-cluster-blue transition-colors">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-xl">
                      {item.desc}
                    </p>

                    {item.highlight && (
                      <div className="text-xs sm:text-sm font-semibold text-cluster-teal flex items-center gap-2 pt-1 font-manrope">
                        <span className="w-1.5 h-1.5 rounded-full bg-cluster-teal" />
                        {item.highlight}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Right Scroll Indicator (matches • | in reference image) */}
          <div className="hidden xl:flex absolute -right-8 sm:-right-10 top-0 bottom-0 flex-col items-center justify-center pointer-events-none">
            <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              {MILESTONES.map((_, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`transition-all duration-300 rounded-full ${
                      activeIdx === i
                        ? "w-2.5 h-2.5 bg-slate-900"
                        : "w-1.5 h-1.5 bg-slate-300"
                    }`}
                  />
                  {activeIdx === i && (
                    <span className="w-0.5 h-3.5 bg-slate-900 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
