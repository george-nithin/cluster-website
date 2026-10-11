import Image from "next/image";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Award, 
  Boxes
} from "lucide-react";
import Container from "@/components/ui/Container";
import { Reveal } from "@/components/anim";

export default function TexviaOverview() {
  return (
    <section id="texvia-overview" className="relative py-16 sm:py-24 md:py-32 bg-[#F8FAFC] border-b border-cluster-border overflow-hidden">
      {/* Background Subtle Geometric Grid Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Top Header: Manufacturing Strength & Texvia Logo (Side-by-Side) ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Left Side: Content */}
          <div className="flex flex-col items-start max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-[1.08] font-manrope">
              QUALITY APPAREL <span className="text-cluster-teal">AT SCALE.</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-700 font-light leading-relaxed">
              Our manufacturing capabilities combine skilled craftsmanship, modern machinery, and streamlined production processes to deliver quality apparel at scale. With manufacturing units in Kerala and Tamil Nadu, we focus on consistent quality, efficient production, and reliable delivery.
            </p>
          </div>

          {/* Right Side: Texvia Logo Card with Continuous LIVE Animation */}
          <div className="shrink-0 flex items-center justify-start lg:justify-end w-full lg:w-auto">
            <div className="relative p-6 sm:p-8 rounded-[24px] bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center overflow-hidden group">
              {/* Live Shimmer Beam Passing Continuously */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-transparent via-cluster-teal/15 to-transparent animate-live-shimmer" />
              </div>

              {/* Logo with Continuous Live Levitation & Breathing Ambient Glow */}
              <div className="relative w-60 sm:w-72 md:w-80 h-20 sm:h-24 md:h-28 flex items-center justify-center animate-live-logo">
                <div className="absolute inset-0 bg-gradient-to-r from-cluster-teal/25 via-cyan-400/20 to-cluster-blue/25 rounded-full animate-live-glow pointer-events-none" />
                <Image
                  src="/logos/texvia-logo-clean.png"
                  alt="Texvia by Cluster Official Logo"
                  fill
                  className="object-contain relative z-10 drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 4 Strength Pillars Interactive Grid (Envato Bento Style) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cluster-teal mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-tight text-slate-900 font-manrope mb-1.5">
              Quality
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Quality checks at every stage of production from raw yarn to final packing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-tight text-slate-900 font-manrope mb-1.5">
              Consistency
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Standardized CAD grading and disciplined production ensures exact specifications every time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
              <Boxes className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-tight text-slate-900 font-manrope mb-1.5">
              Scalability
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Dual facilities across Kerala &amp; Tamil Nadu capable of handling both bulk volume and custom runs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-cluster-coral mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-tight text-slate-900 font-manrope mb-1.5">
              Cost Advantage
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Complete in-house production with zero intermediaries and optimized raw material utilization.
            </p>
          </div>
        </div>

        {/* ── Combined Manufacturing Master Box (Single Unified Section) ── */}
        <Reveal direction="up" duration={0.8} className="w-full mt-10 sm:mt-14 md:mt-18">
          <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#06202B] via-[#093545] to-[#0E7293] text-white p-6 sm:p-10 lg:p-14 relative overflow-visible shadow-2xl border border-white/10">
            {/* Atmospheric Lighting Glows */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-cluster-teal/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10">
              {/* Content Grid: Heading, Desc, Checklist on Left & women.jpg on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Heading, Desc & Checklist */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Kicker */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-7 h-0.5 bg-cluster-teal rounded-full" />
                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 font-manrope">
                        TEXVIA APPAREL MANUFACTURING
                      </span>
                    </div>

                    {/* One Heading */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black uppercase text-white tracking-tight font-manrope leading-[1.08] mb-4">
                      Artisanal Mastery Meets High-Velocity Automation.
                    </h3>

                    {/* One Desc */}
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6">
                      Founded to establish total quality sovereignty over our supply chain, <strong className="font-semibold text-white">Texvia by Cluster</strong> designs, cuts, stitches, and finishes garments at scale. Powering 100% of the apparel output for <strong className="font-semibold text-white">Cluster Womenswear</strong> and <strong className="font-semibold text-white">Matrutva Maternity</strong>, Texvia guarantees consistent quality, rapid production turnaround, and end-to-end craftsmanship across all collections.
                    </p>

                    {/* Checklist Under Desc */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/15">
                      <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-100 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>100% In-House Production</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-100 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>350+ Skilled Tailors &amp; Technicians</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-100 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Zero-Defect 4-Point QC Standard</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-100 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>15,000+ Units Daily Finished Capacity</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: women.jpg image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] border border-white/20 shadow-2xl group">
                    <Image
                      src="/women.jpg"
                      alt="Texvia Skilled Women Workforce"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
