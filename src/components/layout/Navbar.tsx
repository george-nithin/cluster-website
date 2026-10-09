"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Brands', href: '/brands' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Distribution', href: '/distribution' },
  { name: 'Our Reach', href: '/our-reach' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-cluster-border shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
            : 'bg-white/90 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-[20px] md:px-[32px] lg:px-[48px] h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Logo className="group-hover:opacity-80 transition-opacity duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-nav rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-cluster-blue font-semibold'
                      : 'text-cluster-muted hover:text-cluster-text hover:bg-cluster-bg'
                  }`}
                >
                  {link.name}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-cluster-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="blue"
              size="sm"
              href="/contact"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-1 rounded-lg text-cluster-text hover:bg-cluster-bg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — full-screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-cluster-text/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(85vw,360px)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-[68px] border-b border-cluster-border shrink-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-muted uppercase">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg hover:bg-cluster-bg transition-colors text-cluster-text"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cluster-blue/8 text-cluster-blue'
                      : 'text-cluster-text hover:bg-cluster-bg hover:text-cluster-blue'
                  }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {link.name}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cluster-blue" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA at bottom */}
          <div className="px-4 pb-8 pt-4 border-t border-cluster-border shrink-0">
            <Button
              variant="blue"
              href="/contact"
              className="w-full"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
