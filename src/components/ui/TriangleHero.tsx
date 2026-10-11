"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

interface TriangleHeroProps {
  kicker?: string;
  brandBadge?: React.ReactNode;
  heading: string;
  headingHighlight?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage: string;
  backgroundAlt?: string;
  accentOverlayColor?: string; // Color for the right translucent triangle
  accentKickerColor?: string;
  scrollTargetId?: string;
}

export default function TriangleHero({
  kicker,
  brandBadge,
  heading,
  headingHighlight,
  description,
  buttonText = "GET STARTED",
  buttonHref = "#explore",
  backgroundImage,
  backgroundAlt = "Hero Background",
  accentOverlayColor = "from-cluster-coral/80 via-cluster-coral/65 to-cluster-coral/40",
  accentKickerColor = "text-cluster-coral",
  scrollTargetId,
}: TriangleHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTriangleRef = useRef<HTMLDivElement>(null);
  const rightTriangleRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const leftEl = leftTriangleRef.current;
    const rightEl = rightTriangleRef.current;
    const tagEl = tagRef.current;
    const headingEl = headingRef.current;
    const descEl = descRef.current;
    const buttonEl = buttonRef.current;
    const scrollEl = scrollIndicatorRef.current;

    if (!leftEl || !rightEl) return;

    if (prefersReducedMotion) {
      gsap.set([leftEl, rightEl], { xPercent: 0 });
      gsap.set([tagEl, headingEl, descEl, buttonEl, scrollEl].filter(Boolean), {
        opacity: 1,
        y: 0,
      });
      return;
    }

    // Set initial off-screen positions for triangles and hidden text
    gsap.set(leftEl, { xPercent: -105 });
    gsap.set(rightEl, { xPercent: 105 });

    const textElements = [tagEl, headingEl, descEl, buttonEl].filter(
      Boolean
    ) as HTMLElement[];

    gsap.set(textElements, { opacity: 0, y: 35 });
    if (scrollEl) gsap.set(scrollEl, { opacity: 0, y: 15 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Step 1: Both triangles slide simultaneously from left & right
    tl.to(leftEl, {
      xPercent: 0,
      duration: 1.05,
      ease: "power3.out",
    }, 0.1);

    tl.to(rightEl, {
      xPercent: 0,
      duration: 1.05,
      ease: "power3.out",
    }, 0.1);

    // Step 2: Once aligned, text elements animate in
    if (tagEl) {
      tl.to(
        tagEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.15"
      );
    }

    if (headingEl) {
      tl.to(
        headingEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.25"
      );
    }

    if (descEl) {
      tl.to(
        descEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      );
    }

    if (buttonEl) {
      tl.to(
        buttonEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "back.out(1.5)",
        },
        "-=0.2"
      );
    }

    if (scrollEl) {
      tl.to(
        scrollEl,
        {
          opacity: 0.85,
          y: 0,
          duration: 0.6,
        },
        "-=0.2"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 border-b border-cluster-border"
    >
      {/* 1. Underlying Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle dark tint to ensure contrast on all viewports */}
        <div className="absolute inset-0 bg-slate-950/45 sm:bg-slate-950/30" />
      </div>

      {/* 2. Right Translucent Triangle (Slides in from the right) */}
      <div
        ref={rightTriangleRef}
        className={`absolute inset-0 z-10 pointer-events-none bg-gradient-to-bl ${accentOverlayColor} [clip-path:polygon(100%_0,100%_100%,65%_100%)] sm:[clip-path:polygon(100%_0,100%_100%,50%_100%)] md:[clip-path:polygon(100%_0,100%_100%,46%_100%)] lg:[clip-path:polygon(100%_0,100%_100%,48%_100%)]`}
        style={{ willChange: "transform" }}
      />

      {/* 3. Left Dark Triangle (Slides in from the left, holds text) */}
      <div
        ref={leftTriangleRef}
        className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-br from-[#04121E] via-[#071F32] to-[#0A2A44] [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] sm:[clip-path:polygon(0_0,85%_0,45%_100%,0_100%)] md:[clip-path:polygon(0_0,68%_0,30%_100%,0_100%)] lg:[clip-path:polygon(0_0,62%_0,26%_100%,0_100%)] shadow-2xl"
        style={{ willChange: "transform" }}
      >
        {/* Subtle internal gradient edge light along the diagonal cut */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-white/[0.08]" />
      </div>

      {/* 4. Foreground Content (Overlays Left Triangle) */}
      <Container className="relative z-30 py-16 sm:py-24 md:py-32">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
          {/* Optional Brand Badge */}
          {brandBadge && (
            <div className="mb-4 sm:mb-5">
              {brandBadge}
            </div>
          )}

          {/* Optional Kicker */}
          {kicker && (
            <div ref={tagRef} className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
              <span
                className={`uppercase tracking-[0.25em] text-[11px] font-bold ${accentKickerColor} font-manrope`}
              >
                {kicker}
              </span>
            </div>
          )}

          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.4rem] font-black text-white uppercase tracking-tight leading-[1.02] sm:leading-[0.98] mb-4 sm:mb-6 font-manrope break-words w-full"
          >
            {heading}
            {headingHighlight && (
              <>
                {" "}
                <span className="text-cluster-coral">{headingHighlight}</span>
              </>
            )}
          </h1>

          {/* Short Description (~10 words) */}
          <p
            ref={descRef}
            className="text-sm sm:text-base md:text-lg text-slate-200/90 font-light leading-relaxed mb-6 sm:mb-8 max-w-lg"
          >
            {description}
          </p>

          {/* Action Button (Styled cleanly like the reference design) */}
          <div ref={buttonRef} className="pt-1 sm:pt-2">
            <Button
              variant="outline-white"
              href={buttonHref}
              showArrow
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>

      {/* 5. Center Bottom Scroll Indicator (Matching reference down-arrow in circle) */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-2 pointer-events-auto"
      >
        <Link
          href={scrollTargetId ? `#${scrollTargetId}` : "#content"}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/90 hover:border-white hover:bg-white/10 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
