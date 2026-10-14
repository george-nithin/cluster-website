import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import Lookbook, { Look } from '@/components/ui/Lookbook';
import { Reveal } from '@/components/anim';
import PartnerCta from '@/components/ui/PartnerCta';
import { Instagram } from 'lucide-react';

const clusterLooks: Look[] = [
  { src: '/dress/Ladies bottom.jpg', name: 'Bottom', w: 1200, h: 1800, details: [] },
  { src: '/dress/Ladies Tops.webp', name: 'Kurtas', w: 1200, h: 1800, details: [] },
  { src: '/dress/Short Tops.jpeg', name: 'Short Top', w: 1200, h: 1800, details: [] },
  { src: '/dress/ladies dress.webp', name: 'Dress', w: 1200, h: 1800, details: [] },
  { src: '/dress/ladies shirt.jpg', name: 'Shirt', w: 1200, h: 1800, details: [] },
  { src: '/dress/Nightwear & Nighties.jpg', name: 'Night Wear', w: 1200, h: 1800, details: [] },
];

const maternityLooks: Look[] = [
  { src: '/dress/maternity dress.jpg', name: 'Maternity Dress', w: 1200, h: 1800, details: [] },
  { src: '/dress/maternity kurta.jpg', name: 'Maternity Kurta', w: 1200, h: 1800, details: [] },
  { src: '/dress/look-09.jpeg', name: 'Maternity Feeding Dress', w: 1200, h: 1800, details: [] },
  { src: '/dress/feeding top.jpg', name: 'Maternity Feeding Top', w: 1200, h: 1800, details: [] },
  { src: '/dress/Maternity Nightie.jpg', name: 'Maternity Night Dress', w: 1200, h: 1800, details: [] },
  { src: '/dress/maternity suit.jpg', name: 'Maternity Night Suit', w: 1200, h: 1800, details: [] },
  { src: '/dress/Maternity Feeding Bras.jpg', name: 'Feeding Bra', w: 1200, h: 1800, details: [] },
];

export default function Brands() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Brand Page Hero Banner */}
      <section className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[55vh] md:h-[70vh] lg:h-[80vh] max-h-[920px] overflow-hidden bg-white">
        <Image
          src="/hero2.png"
          alt="Matrutva Maternity - House of Brands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* House of Brands Intro Section */}
      <section className="w-full py-10 sm:py-14 md:py-16 bg-white border-b border-gray-100">
        <Container>
          <Reveal direction="up" className="max-w-4xl mx-auto text-center px-4">
            <span className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm font-bold mb-3 text-cluster-coral block">
              House of Brands
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight sm:leading-none mb-3 sm:mb-4 text-gray-900">
              MODERN ELEGANCE.<br className="hidden sm:inline" />{" "}
              <span className="text-cluster-coral">UNCOMPROMISED COMFORT.</span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg font-light text-gray-600 max-w-2xl leading-relaxed mx-auto">
              Cluster and Matrutva represent our commitment to empowering women through exceptionally crafted apparel for every stage of life.
            </p>
          </Reveal>
        </Container>
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
                <div className="relative h-12 sm:h-14 w-48 sm:w-56 mb-6 sm:mb-8">
                  <Image src="/logos/cluster-main.png" alt="Cluster Logo" fill className="object-contain object-left" />
                </div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 h-0.5 bg-cluster-blue rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-blue uppercase font-manrope">
                    Womenswear
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-gray-900 mb-4 sm:mb-6 tracking-tight leading-none">
                  CLUSTER<span className="text-cluster-blue">.</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 font-light">
                  Redefining the contemporary wardrobe with versatile, trend-forward pieces designed for the modern lifestyle. From elegant evening wear to effortless weekend comfort, Cluster embodies sophistication in every thread.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 text-gray-700 font-light w-full border-t border-gray-200 pt-6 sm:pt-8 text-sm sm:text-base">
                  <Link href="/ladies-bottom" className="flex items-center justify-between group py-1 px-3 -mx-3 rounded-xl hover:bg-cluster-blue/5 transition-all text-gray-900 font-medium">
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cluster-blue group-hover:scale-125 transition-transform"></span>
                      <span className="group-hover:text-cluster-blue font-semibold transition-colors">Bottom</span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-cluster-blue bg-cluster-blue/10 px-2 py-0.5 rounded-full group-hover:bg-cluster-blue group-hover:text-white transition-all">
                      View Series →
                    </span>
                  </Link>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Kurtas</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Short Top</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Dress</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Shirt</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Night Wear</span>
                </div>

                <div className="pt-6 w-full">
                  <a
                    href="https://www.instagram.com/cluster_outfits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:border-cluster-blue hover:text-cluster-blue text-xs font-semibold text-slate-700 transition-all hover:scale-105 shadow-2xs"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    <span>Follow @cluster_outfits on Instagram</span>
                  </a>
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
            {clusterLooks.map((look) => {
              const isLadiesBottom = look.name.toLowerCase().includes('bottom');
              const CardInner = (
                <div className="relative w-full h-full">
                  <Image src={look.src} alt={look.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 text-white">
                    <p className="font-serif text-lg sm:text-2xl tracking-wide">{look.name}</p>
                    {isLadiesBottom && (
                      <span className="inline-flex items-center gap-1.5 mt-1 text-xs font-sans font-bold uppercase tracking-wider text-cluster-coral">
                        Explore 5 Styles →
                      </span>
                    )}
                  </div>
                </div>
              );

              return isLadiesBottom ? (
                <Link
                  key={look.src}
                  href="/ladies-bottom"
                  className="relative shrink-0 snap-center w-[75vw] sm:w-[48vw] md:w-[38vw] lg:w-[28vw] aspect-[2/3] overflow-hidden group rounded-xl shadow-xs cursor-pointer ring-2 ring-transparent hover:ring-cluster-coral/50 transition-all"
                >
                  {CardInner}
                </Link>
              ) : (
                <div key={look.src} className="relative shrink-0 snap-center w-[75vw] sm:w-[48vw] md:w-[38vw] lg:w-[28vw] aspect-[2/3] overflow-hidden group rounded-xl shadow-xs">
                  {CardInner}
                </div>
              );
            })}
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
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
                    Maternity Wear
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-gray-900 mb-4 sm:mb-6 tracking-tight leading-none">
                  MATRUTVA MATERNITY<span className="text-cluster-coral">.</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 font-light">
                  Supporting you through every beautiful stage of motherhood. Matrutva focuses on exceptionally comfortable, functional, and stylish maternity apparel designed to adapt to your changing body.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 text-gray-700 font-light w-full border-t border-gray-300 pt-6 sm:pt-8 text-sm sm:text-base">
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Dress</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Kurta</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Feeding Dress</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Feeding Top</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Night Dress</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Maternity Night Suit</span>
                  <span className="flex items-center gap-3 py-1"><span className="w-1.5 h-1.5 rounded-full bg-[#8c7e75]"></span>Feeding Bra</span>
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
