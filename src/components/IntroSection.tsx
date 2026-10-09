import Image from 'next/image';
import { Reveal } from '@/components/anim';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function IntroSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <Container>
        {/* Content Grid: Heading & Description Together on the Left, Clean Image on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Heading, Description & CTA Together */}
          <Reveal direction="up" className="lg:col-span-6 flex flex-col items-start">
            <div className="flex flex-col gap-6 sm:gap-7 max-w-xl">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 h-px bg-cluster-coral" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                    Introduction
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-cluster-text uppercase leading-[1.04] tracking-tight">
                  FROM FABRIC<br />
                  TO FASHION<span className="text-cluster-coral">.</span>
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-base sm:text-lg md:text-xl text-cluster-text leading-relaxed font-medium">
                  Cluster Outfits Private Limited brings together manufacturing capabilities, consumer brands and an extensive retail distribution network to create and deliver apparel at scale.
                </p>
                <p className="text-sm sm:text-base text-cluster-muted leading-relaxed font-normal">
                  One organisation. Four capabilities. A single supply chain — from the cutting table in Kerala and Tamil Nadu to thousands of retail counters across South India.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button variant="dark" href="/brands">
                  Explore Our Brands
                </Button>
                <Button variant="outline-dark" href="/manufacturing">
                  Our Manufacturing
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Clean Fashion Showcase Container without unwanted text and numbers */}
          <Reveal direction="up" delay={0.15} scale={0.97} className="lg:col-span-6 w-full">
            <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[32px] bg-gradient-to-b from-[#F5EFE6] via-[#EBE4D6] to-[#DDD4C4] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:w-[92%] lg:ml-auto shadow-2xl border border-black/[0.06] overflow-hidden group">
              {/* Subtle architectural corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cluster-blue/60 pointer-events-none z-20" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cluster-coral/60 pointer-events-none z-20" />

              {/* Ambient warm spotlight behind models */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-white/60 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/[0.08] to-transparent pointer-events-none rounded-b-[24px] md:rounded-b-[32px]" />

              {/* Clean Models Image Container */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="relative w-full h-[96%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
                  <Image
                    src="/descimg.png"
                    alt="Cluster Fashion Models — From Fabric to Fashion"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)] select-none"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
