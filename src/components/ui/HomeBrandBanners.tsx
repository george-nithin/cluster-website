import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { StaggerReveal } from '@/components/anim';
import Button from '@/components/ui/Button';

interface BannerItem {
  id: string;
  image: string;
  category: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  overlayTitle: string;
  buttonText: string;
  href: string;
  description: string;
}

const BANNERS: BannerItem[] = [
  {
    id: 'maternity',
    image: '/maternityhome.png',
    category: 'Maternity & Nursing Atelier',
    badge: 'NEW ARRIVALS',
    badgeColor: 'bg-cluster-teal',
    overlayTitle: 'MATRUTVA MATERNITY',
    buttonText: 'EXPLORE MATRUTVA',
    href: '/brands#maternity',
    title: 'Matrutva · Intuitive Maternity',
    description: 'Breathable organic cotton weaves, discreet feeding ergonomics, and gentle silhouettes crafted to celebrate motherhood with effortless grace.',
  },
  {
    id: 'ladies',
    image: '/ladieshome.png',
    category: 'Contemporary Ready-To-Wear',
    badge: 'BEST SELLER',
    badgeColor: 'bg-cluster-coral',
    overlayTitle: 'CLUSTER WOMENSWEAR',
    buttonText: 'EXPLORE WOMENSWEAR',
    href: '/brands#cluster',
    title: 'Cluster Studio · Everyday Chic',
    description: 'Artisanal tailoring, breezy co-ord palettes, and modern feminine silhouettes sculpted for effortless everyday elegance.',
  },
];

export default function HomeBrandBanners() {
  return (
    <section className="w-full py-4 sm:py-6">
      <Container>
        <StaggerReveal stagger={0.16} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {BANNERS.map((banner) => (
            <div key={banner.id} className="flex flex-col group">
              {/* Image Box — Full Portrait Aspect Ratio (3:4) with clean frame */}
              <Link
                href={banner.href}
                className="relative w-full aspect-[3/4] rounded-2xl md:rounded-[28px] overflow-hidden bg-white border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-500 block cursor-pointer"
              >
                <Image
                  src={banner.image}
                  alt={banner.overlayTitle}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                  priority
                />

                {/* Subtle soft gradient highlight on hover — keeps the fashion ad clean and fully visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badge top-left */}
                {banner.badge && (
                  <span
                    className={`absolute top-4 left-4 z-20 ${banner.badgeColor} text-white text-[10px] font-bold tracking-[0.2em] px-3.5 py-1.5 uppercase rounded-full shadow-md`}
                  >
                    {banner.badge}
                  </span>
                )}

                {/* Hover slide-up action button (always visible on mobile touch) */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6 flex items-center justify-between opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-3 sm:group-hover:translate-y-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Button
                    as="span"
                    variant="white"
                    size="sm"
                  >
                    {banner.buttonText}
                  </Button>
                </div>
              </Link>

              {/* Description Below Box — Sleek, Modern, and Editorial */}
              <div className="pt-4 pb-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cluster-blue" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-cluster-muted">
                    {banner.category}
                  </span>
                </div>

                <Link href={banner.href} className="group/link flex items-center justify-between">
                  <h4 className="text-lg sm:text-xl font-extrabold text-cluster-text tracking-tight group-hover/link:text-cluster-blue transition-colors duration-200">
                    {banner.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-cluster-muted opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-200 shrink-0 ml-2" />
                </Link>

                <p className="text-[13px] sm:text-[14px] text-cluster-muted font-normal leading-relaxed">
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
