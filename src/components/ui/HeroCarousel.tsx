"use client";

import { useEffect, useState, useRef } from "react";

const IMAGES = ["/hero.png", "/hero2.png", "/hero3.png"];
const INTERVAL = 5000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        setProgress(0);
        startTimeRef.current = Date.now();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[55vh] md:h-[70vh] lg:h-[85vh] max-h-[960px] overflow-hidden bg-white group">
      {/* Image Slider */}
      <div
        className="flex w-full h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 900ms cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {IMAGES.map((src, index) => (
          <div key={src} className="w-full h-full flex-shrink-0 relative">
            <img
              src={src}
              alt={`Cluster Hero ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ willChange: "transform" }}
            />
          </div>
        ))}
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

      {/* Slide counter + controls */}
      <div className="absolute bottom-2.5 sm:bottom-6 left-0 right-0 px-3 sm:px-6 md:px-10 flex items-center justify-between z-10">
        {/* Slide index */}
        <span className="text-white/80 font-mono text-[9.5px] sm:text-[11px] tracking-widest select-none bg-black/25 backdrop-blur-xs px-2 py-0.5 rounded-full">
          {String(currentIndex + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
        </span>

        {/* Progress Dots */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="relative flex items-center justify-center p-0.5 sm:p-1 cursor-pointer"
            >
              {/* Track */}
              <span className={`block rounded-full transition-all duration-300 bg-white/40 ${
                currentIndex === index ? "w-8 sm:w-14 h-1" : "w-3 sm:w-5 h-1 hover:bg-white/60"
              }`} />
              {/* Progress fill */}
              {currentIndex === index && (
                <span
                  className="absolute left-0.5 sm:left-1 top-0.5 sm:top-1 h-1 rounded-full bg-white transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
