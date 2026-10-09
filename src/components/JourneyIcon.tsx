"use client";

/**
 * JourneyIcon — animated SVG icons for the Journey section.
 * Designed for a light (#F7F7F5 / white) background.
 *   - Dark strokes  → primary shapes
 *   - #FF8A65 coral → animated accent highlights
 *   - Soft grey     → ghost/guide lines
 */

const O = "#FF8A65";                   // coral accent
const S = "#111111";                   // dark stroke
const G = "rgba(17,17,17,0.15)";      // ghost / guide lines
const BG = "rgba(17,17,17,0.04)";     // subtle fill

const icons: Record<string, React.ReactNode> = {

  /* ──────────────────────────────────────────────────────────────
     01 · DESIGN & DEVELOPMENT
     Garment silhouette with dashed dark border + orange sliding dot.
  ────────────────────────────────────────────────────────────── */
  design: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
      <style>{`
        @keyframes d01-dash {
          0%   { stroke-dashoffset: 280; }
          72%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes d01-dot {
          0%   { transform: translateX(-22px); opacity:0; }
          12%  { opacity:1; }
          88%  { opacity:1; }
          100% { transform: translateX(22px); opacity:0; }
        }
        @keyframes d01-scan { 0%,100%{opacity:.18} 50%{opacity:.5} }
        .d01-outline { stroke-dasharray: 8 5; stroke-dashoffset:280; animation: d01-dash 3s ease-in-out infinite; }
        .d01-dot     { animation: d01-dot  3s ease-in-out infinite; }
        .d01-scan    { animation: d01-scan 3s ease-in-out infinite; }
      `}</style>
      {/* guide rails */}
      <line className="d01-scan" x1="14" y1="36" x2="86" y2="36" stroke={G} strokeWidth="1" strokeDasharray="5 4" />
      <line className="d01-scan" x1="14" y1="66" x2="86" y2="66" stroke={G} strokeWidth="1" strokeDasharray="5 4" />
      <line className="d01-scan" x1="14" y1="82" x2="86" y2="82" stroke={G} strokeWidth="1" strokeDasharray="5 4" />
      {/* garment silhouette */}
      <path
        className="d01-outline"
        d="M36 36 C31 39 26 46 26 56 L26 82 L74 82 L74 56 C74 46 69 39 64 36 L56 31 C53 29 50 28 50 28 C50 28 47 29 44 31 Z"
        stroke={S} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        fill={BG}
      />
      {/* orange sliding dot on top rail */}
      <g className="d01-dot" style={{ transformOrigin: "50px 36px" }}>
        <circle cx="50" cy="36" r="3.5" fill={O} />
        <circle cx="50" cy="36" r="6.5" stroke={O} strokeWidth="1" opacity="0.3" />
      </g>
      {/* orange shoulder accents */}
      <line x1="36" y1="36" x2="26" y2="48" stroke={O} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="64" y1="36" x2="74" y2="48" stroke={O} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),

  /* ──────────────────────────────────────────────────────────────
     02 · SOURCING
     Spool (concentric rings) with dashed fabric rows + orange pulse.
  ────────────────────────────────────────────────────────────── */
  sourcing: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
      <style>{`
        @keyframes d02-spin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes d02-pulse { 0%,100%{r:4;opacity:1} 50%{r:7;opacity:.55} }
        @keyframes d02-thread{ 0%{stroke-dashoffset:50;opacity:0} 20%{opacity:1} 80%{stroke-dashoffset:0;opacity:1} 100%{stroke-dashoffset:0;opacity:0} }
        @keyframes d02-row   { 0%,100%{opacity:.2} 50%{opacity:.55} }
        .d02-spool  { animation: d02-spin   5s linear     infinite; transform-origin:42px 50px; }
        .d02-core   { animation: d02-pulse  2s ease-in-out infinite; }
        .d02-thread { stroke-dasharray:50; animation: d02-thread 2s ease-out infinite; }
        .d02-r1 { animation: d02-row 2s ease-in-out 0s    infinite; }
        .d02-r2 { animation: d02-row 2s ease-in-out .22s  infinite; }
        .d02-r3 { animation: d02-row 2s ease-in-out .44s  infinite; }
      `}</style>
      {/* spool rings */}
      <g className="d02-spool">
        <circle cx="42" cy="50" r="22" stroke={S} strokeWidth="1.8" />
        <circle cx="42" cy="50" r="14" stroke={S} strokeWidth="1"   opacity="0.4" />
        <circle cx="42" cy="50" r="6"  stroke={S} strokeWidth="1"   opacity="0.25" />
        <line x1="42" y1="28" x2="42" y2="72" stroke={S} strokeWidth="0.8" opacity="0.15" />
        <line x1="20" y1="50" x2="64" y2="50" stroke={S} strokeWidth="0.8" opacity="0.15" />
      </g>
      {/* orange pulsing core */}
      <circle className="d02-core" cx="42" cy="50" r="4" fill={O} />
      {/* dashed fabric rows */}
      <line className="d02-r1" x1="70" y1="42" x2="94" y2="42" stroke={S} strokeWidth="1.4" strokeDasharray="5 4" />
      <line className="d02-r2" x1="70" y1="50" x2="94" y2="50" stroke={S} strokeWidth="1.4" strokeDasharray="5 4" />
      <line className="d02-r3" x1="70" y1="58" x2="94" y2="58" stroke={S} strokeWidth="1.4" strokeDasharray="5 4" />
      {/* bobbin pillar */}
      <rect x="82" y="62" width="3" height="12" rx="1.5" fill={S} opacity="0.35" />
      {/* thread */}
      <path className="d02-thread" d="M64 50 Q68 46 70 42" stroke={O} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  ),

  /* ──────────────────────────────────────────────────────────────
     03 · CUTTING & STITCHING
     Scissors opening/closing with stitch dots along a fabric strip.
  ────────────────────────────────────────────────────────────── */
  cutting: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
      <style>{`
        @keyframes d03-top   { 0%,100%{transform:rotate(0deg)} 45%{transform:rotate(-20deg)} 72%{transform:rotate(0deg)} }
        @keyframes d03-bot   { 0%,100%{transform:rotate(0deg)} 45%{transform:rotate( 20deg)} 72%{transform:rotate(0deg)} }
        @keyframes d03-flash { 0%,100%{r:2.5;opacity:.12} 45%{r:5.5;opacity:.5} }
        @keyframes d03-stitch{ 0%,100%{opacity:.25} 50%{opacity:.85} }
        .d03-top { animation: d03-top    1.8s ease-in-out infinite; transform-origin:30px 50px; }
        .d03-bot { animation: d03-bot    1.8s ease-in-out infinite; transform-origin:30px 50px; }
        .d03-fl  { animation: d03-flash  1.8s ease-in-out infinite; }
        .d03-s1  { animation: d03-stitch 1.8s ease-in-out 0s    infinite; }
        .d03-s2  { animation: d03-stitch 1.8s ease-in-out .18s  infinite; }
        .d03-s3  { animation: d03-stitch 1.8s ease-in-out .36s  infinite; }
        .d03-s4  { animation: d03-stitch 1.8s ease-in-out .54s  infinite; }
      `}</style>
      {/* fabric strip */}
      <rect x="44" y="43" width="50" height="14" rx="3" fill={BG} stroke={G} strokeWidth="1" />
      {/* stitch dots */}
      <circle className="d03-s1" cx="54" cy="50" r="2" fill={O} />
      <circle className="d03-s2" cx="64" cy="50" r="2" fill={O} />
      <circle className="d03-s3" cx="74" cy="50" r="2" fill={O} />
      <circle className="d03-s4" cx="84" cy="50" r="2" fill={O} />
      {/* top blade */}
      <g className="d03-top">
        <circle cx="26" cy="39" r="9"  stroke={S} strokeWidth="1.8" />
        <circle cx="26" cy="39" r="4"  stroke={O} strokeWidth="1.2" opacity="0.7" />
        <line x1="34" y1="45" x2="96" y2="45" stroke={S} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* bottom blade */}
      <g className="d03-bot">
        <circle cx="26" cy="61" r="9"  stroke={S} strokeWidth="1.8" />
        <circle cx="26" cy="61" r="4"  stroke={O} strokeWidth="1.2" opacity="0.7" />
        <line x1="34" y1="55" x2="96" y2="55" stroke={S} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* cut flash */}
      <circle className="d03-fl" cx="76" cy="50" r="2.5" fill={O} />
    </svg>
  ),

  /* ──────────────────────────────────────────────────────────────
     04 · FINISHING & QC
     Magnifier with scanning beam + checkmark drawing in.
  ────────────────────────────────────────────────────────────── */
  qc: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
      <style>{`
        @keyframes d04-scan {
          0%   { transform:translateY(-14px); opacity:0; }
          14%  { opacity:.75; }
          86%  { opacity:.75; }
          100% { transform:translateY(14px);  opacity:0; }
        }
        @keyframes d04-check {
          0%,55%  { stroke-dashoffset:40; opacity:0; }
          70%     { opacity:1; }
          100%    { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes d04-bob { 0%,100%{transform:translate(0,0)} 50%{transform:translate(1px,-1px)} }
        @keyframes d04-rim { 0%,100%{opacity:.35} 50%{opacity:.75} }
        .d04-g    { animation: d04-bob   2.8s ease-in-out infinite; }
        .d04-scan { animation: d04-scan  2.8s ease-in-out infinite; }
        .d04-chk  { stroke-dasharray:40; animation: d04-check 2.8s ease-in-out infinite; }
        .d04-rim  { animation: d04-rim   2.8s ease-in-out infinite; }
      `}</style>
      <g className="d04-g">
        {/* lens */}
        <circle cx="44" cy="44" r="26" stroke={S} strokeWidth="2" fill={BG} />
        <circle className="d04-rim" cx="44" cy="44" r="20" stroke={O} strokeWidth="1" />
        {/* scan beam */}
        <line className="d04-scan" x1="22" y1="44" x2="66" y2="44"
          stroke={O} strokeWidth="2" strokeLinecap="round" />
        {/* checkmark */}
        <polyline className="d04-chk"
          points="30,44 41,55 60,33"
          stroke={O} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* handle */}
      <line x1="64" y1="64" x2="90" y2="90" stroke={S} strokeWidth="4" strokeLinecap="round" />
      <circle cx="90" cy="90" r="3.5" fill={O} />
    </svg>
  ),

  /* ──────────────────────────────────────────────────────────────
     05 · PACKAGING
     Box with lid closing + bounce + ribbon pop.
  ────────────────────────────────────────────────────────────── */
  packaging: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
      <style>{`
        @keyframes d05-bounce {
          0%,36%  { transform:translateY(0); }
          50%      { transform:translateY(-8px); }
          62%      { transform:translateY(0); }
          72%      { transform:translateY(-3px); }
          100%     { transform:translateY(0); }
        }
        @keyframes d05-lid {
          0%   { transform:rotateX(-50deg); opacity:.35; }
          36%  { transform:rotateX(0deg);   opacity:1; }
          100% { transform:rotateX(0deg);   opacity:1; }
        }
        @keyframes d05-ribbon { 0%,28%{opacity:0} 44%,100%{opacity:1} }
        @keyframes d05-shadow { 0%,36%{transform:scaleX(1);opacity:.18} 50%{transform:scaleX(.6);opacity:.06} 62%{transform:scaleX(1);opacity:.18} 72%{transform:scaleX(.8);opacity:.12} 100%{transform:scaleX(1);opacity:.18} }
        .d05-box    { animation: d05-bounce 2.4s ease-in-out infinite; transform-origin:50px 88px; }
        .d05-lid    { animation: d05-lid    2.4s ease-in-out infinite; transform-origin:50px 40px; transform-box:fill-box; }
        .d05-rib    { animation: d05-ribbon 2.4s ease-in-out infinite; }
        .d05-shadow { animation: d05-shadow 2.4s ease-in-out infinite; transform-origin:50px 86px; }
      `}</style>
      {/* ground shadow */}
      <ellipse className="d05-shadow" cx="50" cy="86" rx="28" ry="3.5" fill={S} />
      <g className="d05-box">
        {/* box body */}
        <rect x="18" y="42" width="64" height="42" rx="3" fill={BG} stroke={S} strokeWidth="1.8" />
        {/* centre crease */}
        <line x1="50" y1="42" x2="50" y2="84" stroke={S} strokeWidth="0.8" opacity="0.2" />
        {/* ribbons */}
        <line className="d05-rib" x1="50" y1="42" x2="50" y2="84" stroke={O} strokeWidth="2" />
        <line className="d05-rib" x1="18" y1="63" x2="82" y2="63" stroke={O} strokeWidth="2" />
        {/* bow */}
        <g className="d05-rib">
          <path d="M44 42 Q50 34 56 42" stroke={O} strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <circle cx="50" cy="42" r="2.8" fill={O} />
        </g>
        {/* lid */}
        <g className="d05-lid">
          <path d="M18 42 L50 33 L82 42 L50 44 Z"
            fill={BG} stroke={S} strokeWidth="1.8" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  ),
};

export default function JourneyIcon({ type, className = "" }: { type: string; className?: string }) {
  const icon = icons[type];
  if (!icon) return null;
  return (
    <div className={className} style={{ width: "100%", height: "100%" }} aria-hidden="true">
      {icon}
    </div>
  );
}
