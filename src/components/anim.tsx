"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────────
   1. Universal Section / Element Reveal Component
───────────────────────────────────────────────────────────── */
interface RevealProps {
  children: ReactNode;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  scale?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  y = 28,
  x = 0,
  delay = 0,
  duration = 0.85,
  scale = 1,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let initX = x;
    let initY = y;

    if (direction === "up") {
      initY = y || 28;
      initX = 0;
    } else if (direction === "down") {
      initY = -Math.abs(y || 28);
      initX = 0;
    } else if (direction === "left") {
      initX = x || 36;
      initY = 0;
    } else if (direction === "right") {
      initX = -Math.abs(x || 36);
      initY = 0;
    } else if (direction === "none") {
      initX = 0;
      initY = 0;
    }

    const tween = gsap.fromTo(
      el,
      {
        y: initY,
        x: initX,
        opacity: 0,
        scale: scale !== 1 ? scale : 1,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
        onComplete: () => {
          gsap.set(el, { clearProps: "transform,opacity" });
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, x, delay, duration, scale, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. Staggered Container for Grids / Lists of Cards
───────────────────────────────────────────────────────────── */
interface StaggerRevealProps {
  children: ReactNode;
  stagger?: number;
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export function StaggerReveal({
  children,
  stagger = 0.12,
  y = 30,
  delay = 0,
  duration = 0.8,
  className = "",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const childElements = el.children;
    if (!childElements || childElements.length === 0) return;

    const tween = gsap.fromTo(
      childElements,
      {
        y,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onComplete: () => {
          Array.from(childElements).forEach((child) => {
            gsap.set(child, { clearProps: "transform,opacity" });
          });
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stagger, y, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. Animated Counter for Numeric Metrics
───────────────────────────────────────────────────────────── */
export function Counter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = to.toLocaleString("en-IN") + suffix;
      return;
    }

    const o = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(o, {
          v: to,
          duration: 2.2,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent =
              Math.round(o.v).toLocaleString("en-IN") + suffix;
          },
        }),
    });

    return () => st.kill();
  }, [to, suffix]);

  return <span ref={ref} className="font-manrope tabular-nums">0</span>;
}

/* ─────────────────────────────────────────────────────────────
   4. Animated Section Heading
───────────────────────────────────────────────────────────── */
export function SectionHead({
  kicker,
  title,
  dark = false,
  right,
}: {
  kicker: string;
  title: string;
  dark?: boolean;
  right?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
        onComplete: () => {
          gsap.set(el, { clearProps: "transform,opacity" });
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-wrap items-end justify-between gap-6 border-b pb-5 mb-10 ${
        dark ? "border-white/15" : "border-cluster-border"
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-cluster-coral" />
          <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
            {kicker}
          </span>
        </div>
        <h2 className="text-[clamp(1.8rem,3.4vw,3.1rem)] font-black uppercase tracking-tight leading-none text-cluster-text">
          {title}
        </h2>
      </div>
      {right && (
        <span
          className={`font-manrope text-xs tracking-[0.2em] uppercase font-bold ${
            dark ? "text-white/60" : "text-cluster-muted"
          }`}
        >
          {right}
        </span>
      )}
    </div>
  );
}