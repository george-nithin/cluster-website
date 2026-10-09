import { JOURNEY } from "@/lib/data";
import HorizontalScrub from "@/components/HorizontalScrub";
import JourneyIcon from "@/components/JourneyIcon";

export default function Journey() {
  return (
    <section className="w-full relative">
      <HorizontalScrub>
        {/* ── Intro panel ── */}
        <div className="flex w-[min(82vw,500px)] sm:w-[min(38vw,500px)] min-w-[260px] sm:min-w-[300px] h-[440px] sm:h-[500px] flex-col justify-center relative shrink-0 pr-4 sm:pr-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-cluster-teal" />
            <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10.5px] sm:text-[11px] text-cluster-teal font-bold">
              The Business Journey
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.8vw,3.6rem)] font-black uppercase leading-[1.05] tracking-tight text-cluster-text">
            FROM MANUFACTURING<br />
            TO CUSTOMERS<span className="text-cluster-teal">.</span>
          </h2>
          <p className="mt-3 sm:mt-5 max-w-[360px] text-sm sm:text-[15px] text-cluster-muted leading-relaxed">
            Scroll to travel from the design table to the customer, across the full supply chain.
          </p>

          {/* Hint arrow */}
          <div className="mt-6 sm:mt-8 flex items-center gap-3 text-[10.5px] sm:text-[11px] tracking-widest text-cluster-muted uppercase font-semibold">
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-cluster-border text-cluster-coral shadow-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Scroll horizontally</span>
          </div>
        </div>

        {/* ── Stage cards ── */}
        {JOURNEY.map((s: { n: string; sub: string; t: string; d: string; stat: string; icon: string }, idx: number) => (
          <div
            key={s.n}
            className="group relative flex w-[min(82vw,460px)] sm:w-[min(35vw,460px)] min-w-[260px] sm:min-w-[300px] h-[440px] sm:h-[500px] flex-col justify-between border border-cluster-border bg-white p-5 sm:p-7 lg:p-9 rounded-2xl hover:border-cluster-blue/40 hover:shadow-2xl transition-all duration-500 shrink-0"
          >
            {/* Corner accent — animates on hover */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-cluster-blue group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-tl-2xl" />

            {/* Top label row */}
            <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.28em] text-cluster-muted font-semibold">
              <span>
                Stage{' '}
                <b className="text-cluster-coral font-bold">{s.n}</b>
                {' '}/ 05
              </span>
              <span className="bg-cluster-surface border border-cluster-border/60 px-2 py-0.5 rounded text-[9px] font-bold text-cluster-text tracking-wider">{s.sub}</span>
            </div>

            {/* Content Body */}
            <div className="my-auto py-2">
              <div className="flex items-center justify-between mb-4">
                {/* Large stage number */}
                <div className="text-[clamp(2.5rem,4vw,3.8rem)] font-black font-manrope leading-none select-none text-cluster-coral/90 group-hover:text-cluster-coral transition-colors duration-300">
                  {s.n}
                </div>
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <JourneyIcon type={s.icon} />
                </div>
              </div>

              <h3 className="text-[clamp(1.1rem,1.4vw,1.35rem)] font-bold mb-3 text-cluster-text">
                {s.t}
              </h3>
              <p className="max-w-[340px] text-[14px] sm:text-[15px] text-cluster-muted leading-relaxed">{s.d}</p>
            </div>

            {/* Stat footer */}
            <div className="pt-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-cluster-muted border-t border-cluster-border flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cluster-coral shrink-0" />
              {s.stat}
            </div>

            {/* Stage number watermark */}
            <div className="absolute bottom-6 right-6 text-[68px] font-black font-manrope text-cluster-border/25 leading-none select-none pointer-events-none group-hover:text-cluster-border/40 transition-colors duration-500 tabular-nums">
              {String(idx + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </HorizontalScrub>
    </section>
  );
}