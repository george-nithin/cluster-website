"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalScrub({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;

    const ctx = gsap.context(() => {
      const getTranslateDistance = () => {
        if (!track.current || !wrap.current) return 0;
        const children = Array.from(track.current.children) as HTMLElement[];
        if (children.length === 0) return 0;
        const lastChild = children[children.length - 1];
        // Exact pixel position of the right edge of the last card relative to track start
        const totalContentWidth = lastChild.offsetLeft + lastChild.offsetWidth + 80;
        const viewWidth = wrap.current.clientWidth;
        return Math.max(0, totalContentWidth - viewWidth);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${Math.round(getTranslateDistance() * 0.9)}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 0,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        track.current,
        {
          x: () => -getTranslateDistance(),
          ease: "none",
        },
        0
      );

      if (progressBar.current) {
        tl.to(
          progressBar.current,
          {
            scaleX: 1,
            ease: "none",
          },
          0
        );
      }
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrap}
      className="relative w-full h-screen min-h-[560px] sm:min-h-[600px] max-h-[960px] overflow-hidden flex flex-col justify-center bg-cluster-surface border-y border-cluster-border pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6"
    >


      {/* Horizontal scrolling track */}
      <div
        ref={track}
        className="flex w-max items-center gap-4 sm:gap-8 lg:gap-10 px-4 sm:px-10 lg:px-20 will-change-transform z-10"
      >
        {children}
      </div>

      {/* Scrub / Progress Bar */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-10 lg:left-20 right-4 sm:right-10 lg:right-20 flex items-center gap-3 sm:gap-4 z-10 pointer-events-none">
        <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-cluster-muted">
          01
        </div>
        <div className="flex-1 h-[2px] bg-cluster-border/60 rounded-full overflow-hidden">
          <div
            ref={progressBar}
            className="h-full bg-cluster-coral origin-left w-full scale-x-0 will-change-transform"
          />
        </div>
        <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-cluster-muted">
          05
        </div>
      </div>
    </div>
  );
}