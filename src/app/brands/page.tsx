import Container from '@/components/ui/Container';
import Image from 'next/image';
import Lookbook, { Look } from '@/components/ui/Lookbook';
import { Reveal } from '@/components/anim';
import PartnerCta from '@/components/ui/PartnerCta';

const clusterLooks: Look[] = [
  { src: '/dress/look-01.jpg', name: 'Elegant Evening Wear', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-02.jpg', name: 'Casual Chic', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-03.jpg', name: 'Summer Breeze', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-04.jpg', name: 'Office Ready', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-05.jpg', name: 'Weekend Comfort', w: 1200, h: 1800, details: [] },
];

const maternityLooks: Look[] = [
  { src: '/dress/look-06.jpg', name: 'Comfort Feeding Bra', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-07.jpg', name: 'Everyday Maternity Top', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-08.jpg', name: 'Cozy Nightie', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-09.jpg', name: 'Stylish Maternity Dress', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-10.jpg', name: 'Lounge Wear', w: 1200, h: 1800, details: [] },
];

export default function Brands() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Immersive Hero */}
      <section className="relative w-full aspect-[16/10] sm:aspect-auto min-h-[260px] sm:min-h-[440px] md:min-h-[500px] h-auto sm:h-[55vh] md:h-[65vh] lg:h-[72vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image src="/hero3.png" alt="Fashion Hero" fill className="object-cover object-center sm:object-[center_30%]" priority />
        <div className="absolute inset-0 bg-black/35 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />
        <Reveal direction="up" duration={0.9} className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto text-white">
          <div className="py-4 sm:py-8">
            <span className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm font-bold mb-2 sm:mb-4 text-cluster-coral block">
              House of Brands
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-tight sm:leading-none mb-2 sm:mb-6 text-white">
              MODERN ELEGANCE.<br />
              <span className="text-cluster-coral">UNCOMPROMISED COMFORT.</span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl font-light text-white/85 max-w-2xl leading-relaxed mx-auto line-clamp-2 sm:line-clamp-none">
              Cluster and Matrutva represent our commitment to empowering women through exceptionally crafted apparel for every stage of life.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Cluster Brand Section - Image Left, Text Right */}
      <section id="cluster" className="w-full py-14 sm:py-20 md:py-32 bg-[#FAFAFA] scroll-mt-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-14 md:gap-24">
            <Reveal direction="right" duration={0.85} className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden group rounded-2xl shadow-sm">
                <Image src="/cards/clustercard.png" alt="Cluster Apparel" fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal direction="left" duration={0.85} delay={0.1} className="w-full md:w-1/2 flex flex-col items-start">
              <div>
                <span className="uppercase tracking-[0.2em] text-cluster-blue text-xs font-bold mb-3 sm:mb-4 block">Womenswear</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-gray-900 mb-4 sm:mb-6 tracking-tight leading-none">
                  CLUSTER<span className="text-cluster-blue">.</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 font-light">
                  Redefining the contemporary wardrobe with versatile, trend-forward pieces designed for the modern lifestyle. From elegant evening wear to effortless weekend comfort, Cluster embodies sophistication in every thread.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-5 gap-x-8 text-gray-700 font-light w-full border-t border-gray-200 pt-6 sm:pt-8 text-sm sm:text-base">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Ladies Bottoms</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Short Tops</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Ladies Tops</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Nightwear & Nighties</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Cluster Collection - Full Width Scroll */}
      <section className="w-full py-14 sm:py-20 bg-white overflow-hidden">
        <Reveal direction="up" className="flex flex-col items-center text-center mb-8 sm:mb-12 px-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4 sm:mb-6 tracking-tight leading-none">
              THE CLUSTER COLLECTION<span className="text-cluster-blue">.</span>
            </h2>
            <div className="w-12 h-[2px] bg-cluster-blue mx-auto"></div>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.15} className="w-full">
          <div className="w-full flex overflow-x-auto snap-x snap-mandatory pb-8 sm:pb-12 hide-scrollbar px-4 md:px-12 xl:px-24 gap-4 sm:gap-6 md:gap-8">
            {clusterLooks.map((look) => (
              <div key={look.src} className="relative shrink-0 snap-center w-[75vw] sm:w-[48vw] md:w-[38vw] lg:w-[28vw] aspect-[2/3] overflow-hidden group rounded-xl shadow-xs">
                <Image src={look.src} alt={look.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 text-white">
                  <p className="font-serif text-lg sm:text-2xl tracking-wide">{look.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Matrutva Brand Section - Text Left, Image Right */}
      <section id="maternity" className="w-full py-14 sm:py-20 md:py-32 bg-[#F7F5F0] scroll-mt-20">
        <Container>
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-14 md:gap-24">
            <Reveal direction="right" duration={0.85} className="w-full md:w-1/2 flex flex-col items-start">
              <div>
                <div className="relative h-12 sm:h-14 w-48 sm:w-56 mb-6 sm:mb-8 opacity-90 mix-blend-multiply">
                  <Image src="/logos/Matrutva Wordmark.png" alt="Matrutva Logo" fill className="object-contain object-left" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-gray-900 mb-4 sm:mb-6 tracking-tight leading-none">
                  MATRUTVA MATERNITY<span className="text-cluster-coral">.</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 font-light">
                  Supporting you through every beautiful stage of motherhood. Matrutva focuses on exceptionally comfortable, functional, and stylish maternity apparel designed to adapt to your changing body.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-5 gap-x-8 text-gray-700 font-light w-full border-t border-gray-300 pt-6 sm:pt-8 text-sm sm:text-base">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Feeding Bras</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Nighties</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Tops</span>
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Lounge Wear</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" duration={0.85} delay={0.1} className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden group rounded-2xl shadow-sm">
                <Image src="/cards/maternitycard.png" alt="Matrutva Maternity Wear" fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Matrutva Collection - Full Width Scroll */}
      <section className="w-full py-14 sm:py-20 bg-white overflow-hidden">
        <Reveal direction="up" className="flex flex-col items-center text-center mb-8 sm:mb-12 px-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4 sm:mb-6 tracking-tight leading-none">
              THE MATERNITY EDIT<span className="text-cluster-coral">.</span>
            </h2>
            <div className="w-12 h-[1px] bg-gray-400 mx-auto"></div>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.15} className="w-full">
          <div className="w-full flex overflow-x-auto snap-x snap-mandatory pb-8 sm:pb-12 hide-scrollbar px-4 md:px-12 xl:px-24 gap-4 sm:gap-6 md:gap-8">
            {maternityLooks.map((look) => (
              <div key={look.src} className="relative shrink-0 snap-center w-[75vw] sm:w-[48vw] md:w-[38vw] lg:w-[28vw] aspect-[2/3] overflow-hidden group rounded-xl shadow-xs">
                <Image src={look.src} alt={look.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 text-white">
                  <p className="font-serif text-lg sm:text-2xl tracking-wide">{look.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Partner With Us CTA */}
      <PartnerCta />
    </div>
  );
}
