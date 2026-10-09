import Container from '@/components/ui/Container';
import HeroCarousel from '@/components/ui/HeroCarousel';
import HomeBrandBanners from '@/components/ui/HomeBrandBanners';
import Journey from '@/components/Journey';
import IntroSection from '@/components/IntroSection';
import CompanyOverview from '@/components/CompanyOverview';
import CorePillars from '@/components/CorePillars';
import FabricCounter from '@/components/ui/FabricCounter';
import PartnerCta from '@/components/ui/PartnerCta';
import ScrollThread from '@/components/ui/ScrollThread';

export default function Home() {
  return (
    <div className="flex flex-col pb-12 sm:pb-16 relative bg-white">
      {/* Dynamic Apparel Scroll Thread */}
      <ScrollThread />
      {/* Top Hero & Dual Brand Banners */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <HeroCarousel />
        <IntroSection />
        <HomeBrandBanners />
      </div>

      {/* Company Overview — Design to Shop Shelf */}
      <CompanyOverview />

      {/* The Journey Section */}
      <Journey />

      {/* Scale & Performance Counter Section — MEASURED AT EVERY LAYER */}
      <section className="w-full overflow-hidden">
        <FabricCounter />
      </section>

      {/* Pillars Section — DESIGN BOLDER. SCALE SMARTER. DELIVER FASTER */}
      <CorePillars />

      {/* CTA Section — Let's Build the Next Generation of Apparel */}
      <PartnerCta />

    </div>
  );
}
