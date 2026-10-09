"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export type Look = {
  src: string;
  name: string;
  w: number;
  h: number;
  details: { label: string; x: number; y: number; s: number }[];
};

export default function Lookbook({ looks }: { looks: Look[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [cur, setCur] = useState(0);
  const [capIdx, setCapIdx] = useState(0);
  const [out, setOut] = useState(false);
  const [sel, setSel] = useState(-1);
  const [moving, setMoving] = useState<number[]>([]);
  const curRef = useRef(0);
  const busy = useRef(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setBox({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const go = useCallback((n: number) => {
    n = clamp(n, 0, looks.length - 1);
    if (n === curRef.current || busy.current) return;
    busy.current = true;
    const prev = curRef.current;
    curRef.current = n;
    setSel(-1);
    setOut(true);
    setMoving([prev, n]);
    setCur(n);
    setTimeout(() => { setCapIdx(n); setOut(false); }, 300);
    setTimeout(() => { setMoving([]); busy.current = false; }, 620);
  }, [looks.length]);

  useEffect(() => {
    let last = 0, tx = 0, ty = 0;
    const wheel = (e: WheelEvent) => {
      const v = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(v) < 12 || Date.now() - last < 650) return;
      last = Date.now();
      go(curRef.current + (v > 0 ? 1 : -1));
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(curRef.current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(curRef.current - 1);
    };
    const ts = (e: TouchEvent) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; };
    const te = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
      const v = Math.abs(dx) > Math.abs(dy) ? dx : dy;
      if (Math.abs(v) > 40) go(curRef.current + (v < 0 ? 1 : -1));
    };
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("keydown", key);
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchend", te, { passive: true });
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("touchstart", ts);
      window.removeEventListener("touchend", te);
    };
  }, [go]);

  if (!looks || looks.length === 0) return null;

  const mobile = box.w < 700;
  const zoomStyle = (i: number): React.CSSProperties => {
    if (i !== cur || sel < 0) return { transform: "none" };
    const detail = looks[i].details[sel];
    if (!detail) return { transform: "none" };
    const { x, y, s } = detail;
    const lim = 50 - 50 / s; 
    return { transform: `scale(${s}) translate(${clamp(50 - x, -lim, lim)}%, ${clamp(50 - y, -lim, lim)}%)` };
  };

  const capLook = looks[capIdx] || looks[0];

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] overflow-hidden bg-transparent text-gray-900 rounded-xl">
      <header className="absolute top-4 left-4 z-20 flex justify-between w-[calc(100%-2rem)]">
        <h1 className="text-xl font-serif tracking-widest uppercase text-gray-800">Lookbook</h1>
        <span className="text-sm tracking-widest text-gray-600">{pad(cur + 1)} / {pad(looks.length)}</span>
      </header>

      <div className="absolute inset-0 z-10 flex items-center justify-center perspective-[1000px]" ref={stageRef}>
        {box.w > 0 && looks.map((l, i) => {
          const d = i - cur, a = Math.abs(d), ar = l.w / l.h;
          const H = Math.min(box.h * 0.96, (box.w * (mobile ? 0.72 : 0.5)) / ar), W = H * ar;
          return (
            <div
              key={l.src}
              className="absolute cursor-pointer transition-all duration-[620px] ease-[cubic-bezier(0.25,1,0.5,1)]"
              onClick={() => (i !== cur ? go(i) : sel >= 0 && setSel(-1))}
              style={{
                width: W, height: H, marginLeft: -W / 2, marginTop: -H / 2,
                transform: `translateX(${d * box.w * (mobile ? 0.5 : 0.36)}px) scale(${d ? 0.62 : 1}) rotateY(${-d * 10}deg)`,
                filter: d ? "blur(5px) saturate(.8)" : moving.includes(i) ? "blur(7px)" : "none",
                opacity: a > 1 ? 0 : d ? 0.75 : 1,
                zIndex: 10 - a,
                pointerEvents: a > 1 ? "none" : "auto",
              }}
            >
              <div className="w-full h-full overflow-hidden rounded-md shadow-2xl bg-gray-100">
                <img src={l.src} alt={l.name} draggable={false} className="w-full h-full object-cover transition-transform duration-500 ease-out" style={zoomStyle(i)} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={`absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 transition-all duration-300 ${out ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
        <small className="block text-xs text-gray-500 tracking-wider mb-1">LOOK {pad(capIdx + 1)}</small>
        <b className="text-base sm:text-lg tracking-wide text-gray-900 font-serif">{capLook.name}</b>
      </div>

      {capLook.details && capLook.details.length > 0 && (
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {capLook.details.map((dt, k) => {
            const p = (n: number) => clamp(((n / 100) * dt.s - 0.5) / (dt.s - 1), 0, 1) * 100;
            return (
              <button
                key={dt.label}
                title={dt.label}
                className={`w-12 h-12 rounded-full border-2 transition-all ${sel === k ? "border-gray-900 scale-110" : "border-transparent opacity-50 hover:opacity-100"}`}
                onClick={() => setSel(sel === k ? -1 : k)}
                style={{
                  backgroundImage: `url(${capLook.src})`,
                  backgroundSize: `${dt.s * 100}%`,
                  backgroundPosition: `${p(dt.x)}% ${p(dt.y)}%`,
                }}
              />
            );
          })}
        </div>
      )}

      <button className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-400 hover:text-gray-900 text-4xl pb-1" onClick={() => go(cur - 1)}>←</button>
      <button className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-gray-400 hover:text-gray-900 text-4xl pb-1" onClick={() => go(cur + 1)}>→</button>

      <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {looks.map((l, i) => (
          <button key={l.src} className={`w-2 h-2 rounded-full transition-all ${i === cur ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-500"}`} onClick={() => go(i)} />
        ))}
      </nav>
    </div>
  );
}
