import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FileCheck, Shield, AlertCircle, ShoppingBag, Store, Building2, Gavel, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Cluster Outfits Private Limited",
  description:
    "Review the Terms of Service governing the use of the Cluster Outfits website, B2B wholesale distribution channels, manufacturing engagements, and Crew-D franchise programs.",
};

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "corporate-entity", title: "2. Corporate Entity & Operations" },
  { id: "ip-rights", title: "3. Intellectual Property Rights" },
  { id: "wholesale-distribution", title: "4. Wholesale & Retail Counter Terms" },
  { id: "franchise-inquiries", title: "5. Crew-D Franchise Inquiries" },
  { id: "manufacturing-services", title: "6. Contract Manufacturing (Texvia)" },
  { id: "prohibited-conduct", title: "7. User Conduct & Acceptable Use" },
  { id: "disclaimers", title: "8. Disclaimers & Limitation of Liability" },
  { id: "governing-law", title: "9. Governing Law & Dispute Resolution" },
  { id: "modifications", title: "10. Modifications & Inquiries" },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-800 selection:bg-cluster-blue selection:text-white pb-20">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER / HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-[#FAF9F6] border-b border-slate-200/80 pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cluster-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cluster-coral/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="max-w-5xl relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 font-manrope mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cluster-blue">Terms of Service</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-cluster-blue rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-blue uppercase font-manrope">
              Terms &amp; Conditions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight font-sans mb-4">
            Terms of Service<span className="text-cluster-blue">.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            These terms define the legal relationship between you and <strong className="text-slate-900 font-semibold">Cluster Outfits Private Limited</strong> regarding your use of our website, commercial communications, and business inquiry services.
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
                <FileCheck className="w-4 h-4 text-cluster-blue" />
                Table of Contents
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                {SECTIONS.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="block text-slate-600 hover:text-cluster-blue transition-colors py-0.5"
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2">
                <span className="text-xs text-slate-500 font-manrope">Questions about these terms?</span>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-cluster-blue hover:text-[#0E7293] flex items-center gap-1 font-manrope"
                >
                  Contact Legal Desk <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Clauses */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12 leading-relaxed text-slate-700 text-sm sm:text-base">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <FileCheck className="w-6 h-6 text-cluster-blue shrink-0" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-3.5">
                <p>
                  By accessing, browsing, or utilizing the website (<strong className="text-slate-900">clusteroutfits.com</strong>) or submitting inquiries through our digital channels, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our{" "}
                  <Link href="/privacy" className="text-cluster-blue font-bold underline hover:text-[#0E7293]">
                    Privacy Policy
                  </Link>.
                </p>
                <p>
                  If you are entering into these terms on behalf of a retail store, distributor, corporation, or partnership entity, you represent and warrant that you possess full legal authority to bind that entity to these provisions.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="corporate-entity" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-cluster-blue shrink-0" />
                2. Corporate Entity &amp; Operations
              </h2>
              <div className="space-y-3.5">
                <p>
                  This platform is owned, maintained, and operated by:
                </p>
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-800 leading-normal">
                  <strong>Cluster Outfits Private Limited</strong>
                  <br />
                  Incorporated under the Indian Companies Act, 2013
                  <br />
                  Registered Office: Thujanth, B&amp;B Tower, TVM road, near Indian Coffee House, Pulamon Junction, Kottarakkara, Keralam 691531
                </div>
                <p>
                  Cluster Outfits operates as an integrated apparel conglomerate managing brand incubation (<strong className="text-slate-900">Cluster</strong> and <strong className="text-slate-900">Matrutva</strong>), high-velocity industrial manufacturing (<strong className="text-slate-900">Texvia Garments</strong>), multi-state retail distribution, and franchise operations (<strong className="text-slate-900">Crew-D</strong>).
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="ip-rights" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Shield className="w-6 h-6 text-cluster-blue shrink-0" />
                3. Intellectual Property Rights
              </h2>
              <div className="space-y-3.5">
                <p>
                  All content published on this website, including but not limited to brand names, logos, trademarks (<strong className="text-slate-900">Cluster®</strong>, <strong className="text-slate-900">Matrutva®</strong>, <strong className="text-slate-900">Texvia®</strong>, <strong className="text-slate-900">Crew-D®</strong>), apparel designs, lookbook photographs, graphic banners, editorial copy, product catalogs, and website code, are the proprietary intellectual property of Cluster Outfits Private Limited.
                </p>
                <p className="p-4 bg-cluster-blue/[0.05] border-l-4 border-cluster-blue rounded-r-xl text-slate-800 font-medium">
                  <strong>Restricted Use:</strong> You may not copy, scrape, modify, reproduce, republish, distribute, or create derivative works from any material without prior explicit written permission from our authorized signatories.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="wholesale-distribution" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <ShoppingBag className="w-6 h-6 text-cluster-blue shrink-0" />
                4. Wholesale &amp; Retail Counter Terms
              </h2>
              <div className="space-y-3.5">
                <p>
                  Inquiries submitted regarding stocking Cluster or Matrutva merchandise in A-Class and B-Class retail counters are subject to commercial vetting:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-blue">
                  <li>Submission of wholesale interest does not guarantee exclusive territory or supply allocation.</li>
                  <li>All trade supplies are governed by formalized Purchase Orders (PO), Proforma Invoices, GSTIN verification, and defined dispatch schedules.</li>
                  <li>Wholesale pricing tiers, Minimum Order Quantities (MOQ), and payment credit terms are determined independently based on partner verification.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="franchise-inquiries" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Store className="w-6 h-6 text-cluster-blue shrink-0" />
                5. Crew-D Franchise Inquiries
              </h2>
              <div className="space-y-3.5">
                <p>
                  The <strong className="text-slate-900">Crew-D</strong> concept overview and franchise enquiry form provide preliminary information to prospective franchisees, entrepreneurs, and retail partners.
                </p>
                <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl text-slate-800">
                  <strong className="block text-amber-900 font-bold mb-1">Non-Binding Preliminary Expression:</strong>
                  The submission of a franchise inquiry or application form does not constitute an offer, commitment, or guarantee to grant a Crew-D retail franchise. Binding franchise relationships are established solely upon execution of formal Franchise Agreements, compliance checks, and location feasibility approvals.
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="manufacturing-services" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-cluster-blue shrink-0" />
                6. Contract Manufacturing (Texvia)
              </h2>
              <div className="space-y-3.5">
                <p>
                  Inquiries for contract apparel manufacturing through our Texvia precision garment production units in Kerala and Tamil Nadu are governed by separate Master Supply Agreements (MSA), Technical Specification Sheets, Fabric Quality Standards, and Delivery Schedules.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="prohibited-conduct" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <AlertCircle className="w-6 h-6 text-cluster-blue shrink-0" />
                7. User Conduct &amp; Acceptable Use
              </h2>
              <div className="space-y-3.5">
                <p>While using our website and digital services, you agree not to:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-blue">
                  <li>Provide fraudulent, misleading, or stolen contact information or business credentials.</li>
                  <li>Engage in automated data collection, scraping, or crawling without written authorization.</li>
                  <li>Introduce malicious code, viruses, or exploit server vulnerabilities.</li>
                  <li>Impersonate Cluster Outfits personnel, brand representatives, or retail agents.</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="disclaimers" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Shield className="w-6 h-6 text-cluster-blue shrink-0" />
                8. Disclaimers &amp; Limitation of Liability
              </h2>
              <div className="space-y-3.5">
                <p>
                  The information provided on this website is for general informational purposes. While we strive to maintain accurate catalog representations, fabric descriptions, and operational statistics, we do not warrant that all content is entirely error-free or uninterrupted.
                </p>
                <p>
                  To the maximum extent permitted under applicable law, Cluster Outfits Private Limited shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from your use of or inability to access this website.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="governing-law" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Gavel className="w-6 h-6 text-cluster-blue shrink-0" />
                9. Governing Law &amp; Dispute Resolution
              </h2>
              <div className="space-y-3.5">
                <p>
                  These Terms of Service and any commercial relationships arising out of the website shall be governed by, construed, and enforced in accordance with the substantive laws of <strong className="text-slate-900">India</strong>.
                </p>
                <p>
                  Any legal dispute, action, or proceeding arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-slate-900">Kottarakara / Kollam, Kerala, India</strong>.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="modifications" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <FileCheck className="w-6 h-6 text-cluster-blue shrink-0" />
                10. Modifications &amp; Inquiries
              </h2>
              <div className="space-y-3.5">
                <p>
                  We reserve the right to revise or replace these Terms of Service at any time. Material changes will be indicated with an updated &ldquo;Last Updated&rdquo; date at the top of this page.
                </p>
                <p>
                  For any legal questions or notices, please contact us at:{" "}
                  <a href="mailto:contact@clusteroutfits.com" className="text-cluster-blue font-bold hover:underline">
                    contact@clusteroutfits.com
                  </a>{" "}
                  or write to our registered office in Kottarakara, Kollam, Kerala.
                </p>
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
            <Button variant="dark" size="sm" href="/cookies">
              Cookie Policy
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
