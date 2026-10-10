import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Cookie, CheckCircle2, Sliders, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Cluster Outfits Private Limited",
  description:
    "Understand how Cluster Outfits Private Limited uses cookies and similar web technologies to ensure optimal performance, analytics, and security on our website.",
};

const SECTIONS = [
  { id: "what-are-cookies", title: "1. What Are Cookies?" },
  { id: "how-we-use-cookies", title: "2. How We Use Cookies" },
  { id: "cookie-categories", title: "3. Categories of Cookies We Use" },
  { id: "third-party-cookies", title: "4. Third-Party Analytics & Services" },
  { id: "managing-cookies", title: "5. How You Can Manage Cookies" },
  { id: "updates-contact", title: "6. Updates & Contact Information" },
];

const COOKIE_TYPES = [
  {
    category: "Strictly Necessary Cookies",
    badge: "Always Active",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description:
      "Essential for the website to function properly. They enable core security features, form submissions (such as our franchise enquiry desk and contact forms), and network management. You cannot disable these without impairing site operations.",
    examples: ["Session security tokens", "CSRF protection identifiers", "Form progress state"],
  },
  {
    category: "Performance & Analytics Cookies",
    badge: "Performance",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description:
      "Help us understand how visitors interact with clusteroutfits.com by collecting aggregate, anonymized metrics on page load times, scroll depth, popular pages (e.g., our-franchise, brands, distribution), and error diagnostics.",
    examples: ["Aggregated page views", "Navigation speed metrics", "Core Web Vitals telemetry"],
  },
  {
    category: "Functional & Preference Cookies",
    badge: "Preferences",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    description:
      "Allow our platform to remember your selections and preferences, such as selected region filters on the interactive distribution map (Kerala vs. Tamil Nadu) and inquiry status indicators.",
    examples: ["Map filter selection cache", "Banner dismissal states", "Language and accessibility preferences"],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-800 selection:bg-cluster-coral selection:text-white pb-20">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER / HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-[#FAF9F6] border-b border-slate-200/80 pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cluster-coral/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cluster-teal/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="max-w-5xl relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 font-manrope mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cluster-coral">Cookie Policy</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-cluster-coral rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-coral uppercase font-manrope">
              Privacy &amp; Data
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight font-sans mb-4">
            Cookie Policy<span className="text-cluster-coral">.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            This policy outlines how <strong className="text-slate-900 font-semibold">Cluster Outfits Private Limited</strong> uses cookies and related technologies to provide an optimal browsing experience across our digital properties.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-200/80 text-xs sm:text-sm text-slate-500 font-manrope">
            <span>
              <strong>Effective Date:</strong> January 1, 2025
            </span>
            <span>•</span>
            <span>
              <strong>Last Updated:</strong> October 10, 2026
            </span>
            <span>•</span>
            <span className="text-slate-700 font-medium">Version 2.1</span>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CONTENT BODY
      ───────────────────────────────────────────────────────────── */}
      <Container className="max-w-5xl pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Quick Jump Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-manrope mb-4 flex items-center gap-2">
                <Cookie className="w-4 h-4 text-cluster-coral" />
                Table of Contents
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                {SECTIONS.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="block text-slate-600 hover:text-cluster-coral transition-colors py-0.5"
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2">
                <span className="text-xs text-slate-500 font-manrope">Need more details?</span>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-cluster-coral hover:text-[#c93920] flex items-center gap-1 font-manrope"
                >
                  Contact Data Team <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Clauses */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12 leading-relaxed text-slate-700 text-sm sm:text-base">
            {/* Section 1 */}
            <section id="what-are-cookies" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Cookie className="w-6 h-6 text-cluster-coral shrink-0" />
                1. What Are Cookies?
              </h2>
              <div className="space-y-3.5">
                <p>
                  Cookies are small text files placed on your computer, tablet, or smartphone by websites that you visit. They are widely used across the web to enable websites to function properly, enhance browsing efficiency, and provide diagnostic performance reports to site operators.
                </p>
                <p>
                  Cookies may be <strong className="text-slate-900">&ldquo;session cookies&rdquo;</strong> (which are temporary and automatically deleted once you close your browser) or <strong className="text-slate-900">&ldquo;persistent cookies&rdquo;</strong> (which remain stored on your device until they reach an expiration date or you manually remove them).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-we-use-cookies" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-cluster-coral shrink-0" />
                2. How We Use Cookies
              </h2>
              <div className="space-y-3.5">
                <p>
                  <strong className="text-slate-900">Cluster Outfits Private Limited</strong> uses cookies on <strong className="text-slate-900">clusteroutfits.com</strong> to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-coral">
                  <li>Safeguard form transmissions against malicious cross-site request attacks (CSRF).</li>
                  <li>Enable seamless navigation between our corporate sections (About, Brands, Manufacturing, Distribution, and Franchise).</li>
                  <li>Remember your region filter on the interactive distribution map (Kerala vs. Tamil Nadu staging hubs).</li>
                  <li>Measure website speed and responsiveness to optimize asset delivery across South India.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cookie-categories" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Sliders className="w-6 h-6 text-cluster-coral shrink-0" />
                3. Categories of Cookies We Use
              </h2>
              <div className="space-y-4 pt-2">
                {COOKIE_TYPES.map((cookie) => (
                  <div
                    key={cookie.category}
                    className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="font-bold text-slate-900 text-base font-sans">
                        {cookie.category}
                      </h3>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cookie.badgeColor} font-manrope`}
                      >
                        {cookie.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cookie.description}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-manrope">
                        Typical uses:
                      </span>
                      {cookie.examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-mono"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="third-party-cookies" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-cluster-coral shrink-0" />
                4. Third-Party Analytics &amp; Services
              </h2>
              <div className="space-y-3.5">
                <p>
                  We may occasionally utilize trusted third-party analytics services (such as Google Analytics or Vercel Web Analytics) to help us analyze visitor trends and technical health. These services use cookies to compile aggregate statistical reports.
                </p>
                <p className="p-4 bg-cluster-coral/[0.05] border-l-4 border-cluster-coral rounded-r-xl text-slate-800 font-medium">
                  <strong>Anonymized Data:</strong> All analytics data collected is aggregated and anonymized. We do not use third-party advertising cookies that track your browsing activity across unrelated third-party websites.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="managing-cookies" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Sliders className="w-6 h-6 text-cluster-coral shrink-0" />
                5. How You Can Manage Cookies
              </h2>
              <div className="space-y-3.5">
                <p>
                  Most modern web browsers allow you to manage or block cookies through their application settings. You can configure your browser to reject all cookies, notify you when a cookie is placed, or clear all stored cookies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <strong className="block text-slate-900 mb-1">Google Chrome</strong>
                    <span className="text-slate-600">Settings &gt; Privacy &amp; Security &gt; Third-party cookies</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <strong className="block text-slate-900 mb-1">Apple Safari</strong>
                    <span className="text-slate-600">Preferences &gt; Privacy &gt; Manage Website Data</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <strong className="block text-slate-900 mb-1">Mozilla Firefox</strong>
                    <span className="text-slate-600">Settings &gt; Privacy &amp; Security &gt; Cookies &amp; Site Data</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <strong className="block text-slate-900 mb-1">Microsoft Edge</strong>
                    <span className="text-slate-600">Settings &gt; Cookies and site permissions</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  *Please note that blocking essential cookies may cause certain interactive features or form submissions on clusteroutfits.com to malfunction.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="updates-contact" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-cluster-coral shrink-0" />
                6. Updates &amp; Contact Information
              </h2>
              <div className="space-y-3.5">
                <p>
                  We may periodically update this Cookie Policy to reflect changes in our operational technologies or regulatory standards. Updates take effect upon publication on this page.
                </p>
                <p>
                  For any questions or comments regarding our cookie usage, please contact:
                </p>
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 text-xs sm:text-sm font-mono text-slate-800 leading-normal">
                  <strong>Cluster Outfits Private Limited – Digital Team</strong>
                  <br />
                  Email:{" "}
                  <a href="mailto:contact@clusteroutfits.com" className="text-cluster-coral underline">
                    contact@clusteroutfits.com
                  </a>
                  <br />
                  Registered Office: 3rd Floor, VIII/307-1, Thujanth B&amp;B Tower, Pulamon (PO), Kottarakara, Kollam, Kerala – 691531, India
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 font-manrope"
          >
            ← Return to Homepage
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline-dark" size="sm" href="/privacy">
              Privacy Policy
            </Button>
            <Button variant="dark" size="sm" href="/terms">
              Terms of Service
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
