"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

/**
 * WhatsApp Official Vector Icon
 */
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const FOOTER_COLUMNS = {
  shop: {
    title: "SHOP & BRANDS",
    links: [
      { name: "Cluster Studio", href: "/brands" },
      { name: "Matrutva Maternity", href: "/brands" },
      { name: "Everyday Tops & Bottoms", href: "/brands" },
      { name: "Feeding Wear & Nighties", href: "/brands" },
      { name: "Latest Lookbooks", href: "/brands" },
    ],
  },
  about: {
    title: "ABOUT US",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Texvia Manufacturing", href: "/manufacturing" },
      { name: "Retail Network & Reach", href: "/our-reach" },
      { name: "350+ Master Artisans", href: "/about" },
      { name: "Sustainability & Ethics", href: "/about" },
    ],
  },
  help: {
    title: "HELP & SUPPORT",
    links: [
      { name: "Wholesale & Dealerships", href: "/contact" },
      { name: "Supply Chain & Logistics", href: "/distribution" },
      { name: "Track Order Inquiries", href: "/contact" },
      { name: "Press & Media", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
};

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    label: "Follow Cluster on Facebook",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    label: "Follow Cluster on Instagram",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    label: "Subscribe to Cluster on YouTube",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "Connect with Cluster on LinkedIn",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    href: "https://wa.me/918848483741",
    label: "Chat with Cluster on WhatsApp",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white text-cluster-text border-t border-neutral-200 relative overflow-hidden select-none font-sans">
      {/* ─────────────────────────────────────────────────────────────
          TOP SECTION: Clean Editorial Layout Matching Reference Image 1
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand Info & Direct Contacts (Leftmost) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <Link href="/" className="inline-block group">
              <Logo className="transition-opacity group-hover:opacity-80" />
            </Link>

            <p className="text-[13.5px] text-cluster-muted leading-relaxed font-normal max-w-xs">
              Designing apparel experiences that connect manufacturing, brand incubation, and retail distribution across South India.
            </p>

            {/* Direct Contact Metadata Matching Reference Image */}
            <div className="flex flex-col gap-3 pt-2 text-xs sm:text-[13px] text-cluster-text font-medium">
              <a
                href="mailto:contact@clusteroutfits.com"
                className="inline-flex items-center gap-2.5 hover:text-cluster-blue transition-colors group"
              >
                <span className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center text-cluster-blue group-hover:bg-cluster-blue/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span>contact@clusteroutfits.com</span>
              </a>

              <a
                href="tel:+918848483741"
                className="inline-flex items-center gap-2.5 hover:text-cluster-coral transition-colors group"
              >
                <span className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center text-cluster-coral group-hover:bg-cluster-coral/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-numbers font-semibold">+91 88484 83741</span>
              </a>

              <div className="inline-flex items-center gap-2.5 text-neutral-600">
                <span className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center text-cluster-teal">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span>Kerala &amp; Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: SHOP / BRANDS */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.22em] text-[#111111] uppercase font-manrope mb-4 sm:mb-6">
              {FOOTER_COLUMNS.shop.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.shop.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-cluster-muted hover:text-cluster-blue transition-colors duration-200 inline-block font-normal hover:translate-x-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: ABOUT US */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.22em] text-[#111111] uppercase font-manrope mb-4 sm:mb-6">
              {FOOTER_COLUMNS.about.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.about.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-cluster-muted hover:text-cluster-blue transition-colors duration-200 inline-block font-normal hover:translate-x-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: HELP & SUPPORT */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.22em] text-[#111111] uppercase font-manrope mb-4 sm:mb-6">
              {FOOTER_COLUMNS.help.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.help.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-cluster-muted hover:text-cluster-blue transition-colors duration-200 inline-block font-normal hover:translate-x-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: NEWSLETTER (Rightmost) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[11px] font-bold tracking-[0.22em] text-[#111111] uppercase font-manrope mb-1">
              NEWSLETTER
            </h4>
            <p className="text-[13px] text-cluster-muted leading-relaxed font-normal">
              Subscribe to get updates on seasonal collections, wholesale inquiries &amp; manufacturing insights.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-[2px] flex items-center gap-2 text-xs text-emerald-800 font-medium animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-2">
                <div className="flex rounded-[2px] overflow-hidden border border-neutral-300 focus-within:border-black transition-all bg-white shadow-2xs">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-4 py-3 text-xs outline-none text-[#111111] placeholder:text-neutral-400 font-manrope"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="bg-[#141414] hover:bg-black text-white px-4 sm:px-5 flex items-center justify-center transition-colors shrink-0 group cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MIDDLE SECTION: Panoramic Sewing Thread Rolls Illustration
          (Fine line-art woodcut engraving of wooden thread rolls, 
           bobbins, needles, and flowing colorful threads)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full border-t border-b border-neutral-100 bg-white overflow-hidden py-3 sm:py-6">
        
        {/* Soft edge blend masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="relative w-full h-[180px] sm:h-[230px] md:h-[280px] lg:h-[320px]">
            <Image
              src="/sewing-threads-footer.png"
              alt="Cluster Sewing Thread Rolls, Wooden Bobbins & Embroidery Needles Editorial Panorama"
              fill
              sizes="(max-width: 1024px) 100vw, 1440px"
              priority
              className="object-contain object-center select-none drop-shadow-xs"
            />
          </div>
        </div>

        {/* Ambient Subtle Weaving Caption Watermark */}
        <div className="text-center mt-1">
          <span className="text-[10px] sm:text-[11px] font-manrope font-bold uppercase tracking-[0.3em] text-neutral-400 select-none">
            From Spool to Seam · Textile Engineering &amp; Apparel Craftsmanship
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM BAR: Social Media Icons (Left) & Legal Links (Right)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Social Media Icons (Facebook, Instagram, YouTube, LinkedIn, WhatsApp) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200 bg-white hover:bg-[#141414] hover:border-[#141414] text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95"
              >
                <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px]" />
              </a>
            );
          })}
        </div>

        {/* Legal Links & Copyright on Right */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-6 text-[12px] text-cluster-muted">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cluster-blue transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <Link href="/terms" className="hover:text-cluster-blue transition-colors">
              Terms of Service
            </Link>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <Link href="/cookies" className="hover:text-cluster-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
          <span className="text-[11.5px] text-neutral-400">
            © {new Date().getFullYear()} Cluster Outfits Private Limited. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
