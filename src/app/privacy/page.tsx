import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ShieldCheck, Lock, Eye, FileText, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Cluster Outfits Private Limited",
  description:
    "Learn how Cluster Outfits Private Limited collects, uses, and safeguards your personal data across our website, wholesale distribution network, and Crew-D franchise programs.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "data-sharing", title: "4. Data Sharing & Third Parties" },
  { id: "data-security", title: "5. Security & Data Retention" },
  { id: "your-rights", title: "6. Your Privacy Rights" },
  { id: "cookies-tracking", title: "7. Cookies & Tracking" },
  { id: "grievance-contact", title: "8. Grievance Officer & Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-800 selection:bg-cluster-teal selection:text-white pb-20">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER / HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-[#FAF9F6] border-b border-slate-200/80 pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cluster-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cluster-coral/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="max-w-5xl relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 font-manrope mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cluster-teal">Privacy Policy</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-cluster-teal rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-cluster-teal uppercase font-manrope">
              Legal &amp; Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight font-sans mb-4">
            Privacy Policy<span className="text-cluster-teal">.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            At <strong className="text-slate-900 font-semibold">Cluster Outfits Private Limited</strong>, we respect your privacy and are committed to protecting personal information entrusted to us by retail partners, franchise seekers, vendors, and website visitors.
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
                <FileText className="w-4 h-4 text-cluster-teal" />
                Table of Contents
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                {SECTIONS.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="block text-slate-600 hover:text-cluster-teal transition-colors py-0.5"
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2">
                <span className="text-xs text-slate-500 font-manrope">Need clarification?</span>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-cluster-teal hover:text-[#158767] flex items-center gap-1 font-manrope"
                >
                  Contact Legal Desk <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Clauses */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12 leading-relaxed text-slate-700 text-sm sm:text-base">
            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-cluster-teal shrink-0" />
                1. Introduction &amp; Scope
              </h2>
              <div className="space-y-3.5">
                <p>
                  This Privacy Policy applies to all services, digital platforms, websites (including <strong className="text-slate-900">clusteroutfits.com</strong>), communication channels, and business operations managed by:
                </p>
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-800 leading-normal">
                  <strong>Cluster Outfits Private Limited</strong>
                  <br />
                  CIN / Corporate Entity: Apparel Manufacturing &amp; Wholesale Distribution
                  <br />
                  Registered Office: Thujanth, B&amp;B Tower, TVM road, near Indian Coffee House, Pulamon Junction, Kottarakkara, Keralam 691531
                </div>
                <p>
                  It governs how we collect, store, process, and disclose information across our corporate brands including <strong className="text-slate-900">Cluster</strong> (contemporary womenswear), <strong className="text-slate-900">Matrutva</strong> (maternity and nursing apparel), <strong className="text-slate-900">Texvia</strong> (smart manufacturing facilities), and the <strong className="text-slate-900">Crew-D</strong> retail franchise network.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="information-we-collect" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Eye className="w-6 h-6 text-cluster-teal shrink-0" />
                2. Information We Collect
              </h2>
              <div className="space-y-3.5">
                <p>We collect information that you directly provide to us, as well as limited technical telemetry generated when you interact with our platforms:</p>
                
                <h3 className="text-sm sm:text-base font-bold text-slate-900 pt-2 font-sans uppercase tracking-wide">
                  A. Information You Provide Directly
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-teal">
                  <li>
                    <strong className="text-slate-900">Contact Details:</strong> Your full name, corporate title, email address, phone/WhatsApp number, and postal communication address.
                  </li>
                  <li>
                    <strong className="text-slate-900">Franchise &amp; Retail Applications:</strong> Store location preference, investment budget range, commercial property details, carpet area, and business experience submitted through our Crew-D franchise enquiry desk.
                  </li>
                  <li>
                    <strong className="text-slate-900">Wholesale &amp; Manufacturing Queries:</strong> GST identification number (GSTIN), business legal entity name, retail counter numbers, and order requirements.
                  </li>
                  <li>
                    <strong className="text-slate-900">Inquiry Communications:</strong> Any messages, feedback, resumes, or inquiries you submit through our contact forms or email inboxes.
                  </li>
                </ul>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 pt-3 font-sans uppercase tracking-wide">
                  B. Information Collected Automatically
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-teal">
                  <li>Device identifiers, operating system version, and browser types.</li>
                  <li>IP address, referring domain, general geographical location (city/state level).</li>
                  <li>Page interaction metrics (time spent, scroll depth, and navigation paths).</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-we-use" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-cluster-teal shrink-0" />
                3. How We Use Your Information
              </h2>
              <div className="space-y-3.5">
                <p>We utilize the collected information strictly for legitimate commercial and operational purposes, including:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Franchise Evaluation</h4>
                    <p className="text-xs text-slate-600">Reviewing eligibility for Crew-D franchise locations, scheduling discovery calls, and preparing business feasibility reports.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Wholesale Distribution</h4>
                    <p className="text-xs text-slate-600">Onboarding B2B retail counters across Kerala and Tamil Nadu, dispatching lookbooks, and coordinating logistics shipments.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Contract Manufacturing</h4>
                    <p className="text-xs text-slate-600">Executing sampling, fabric procurement, and production planning through Texvia smart manufacturing units.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Statutory Compliance</h4>
                    <p className="text-xs text-slate-600">Maintaining accounting books, GST invoices, and regulatory records under the Companies Act and Indian tax laws.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="data-sharing" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Lock className="w-6 h-6 text-cluster-teal shrink-0" />
                4. Data Sharing &amp; Third Parties
              </h2>
              <div className="space-y-3.5">
                <p className="p-4 bg-cluster-teal/[0.05] border-l-4 border-cluster-teal rounded-r-xl text-slate-800 font-medium">
                  <strong>We do not sell, rent, or trade your personal or business data</strong> to third-party marketing brokers or advertisers under any circumstances.
                </p>
                <p>We may share your data solely with vetted enterprise partners under strict confidentiality agreements:</p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-teal">
                  <li>
                    <strong className="text-slate-900">Logistics &amp; Courier Operators:</strong> To facilitate direct delivery of textile orders, lookbooks, and fabric swatch samples.
                  </li>
                  <li>
                    <strong className="text-slate-900">IT &amp; Cloud Infrastructure Providers:</strong> Secure hosting, encrypted email transmission, and database storage providers.
                  </li>
                  <li>
                    <strong className="text-slate-900">Statutory Authorities:</strong> Where disclosure is legally mandated by judicial orders, GST authorities, or law enforcement bodies in India.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="data-security" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-cluster-teal shrink-0" />
                5. Security &amp; Data Retention
              </h2>
              <div className="space-y-3.5">
                <p>
                  We implement administrative, physical, and technical safeguards designed to protect your information against unauthorized access, loss, alteration, or disclosure. All web communications are transmitted through Secure Sockets Layer (SSL / TLS) encryption.
                </p>
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was gathered, or as mandated by applicable statutory retention periods under Indian commercial law.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="your-rights" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Eye className="w-6 h-6 text-cluster-teal shrink-0" />
                6. Your Privacy Rights
              </h2>
              <div className="space-y-3.5">
                <p>
                  Subject to applicable Indian laws, including the <strong className="text-slate-900">Digital Personal Data Protection Act (DPDPA), 2023</strong> and the <strong className="text-slate-900">Information Technology Act, 2000</strong>, you hold the following rights:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-cluster-teal">
                  <li>The right to request a summary of personal information we hold about you.</li>
                  <li>The right to request correction or updating of inaccurate data.</li>
                  <li>The right to withdraw consent for direct marketing updates or franchise newsletters at any time.</li>
                  <li>The right to request deletion of your information, subject to statutory retention obligations.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="cookies-tracking" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Lock className="w-6 h-6 text-cluster-teal shrink-0" />
                7. Cookies &amp; Tracking Technologies
              </h2>
              <div className="space-y-3.5">
                <p>
                  Our website uses cookies and similar technologies to improve browsing experience, retain user selections, and analyze anonymized site traffic. For complete details on the cookies we use and how to control your preferences, please consult our dedicated{" "}
                  <Link href="/cookies" className="text-cluster-teal font-bold underline hover:text-[#158767]">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="grievance-contact" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase font-sans mb-4 flex items-center gap-2.5">
                <Mail className="w-6 h-6 text-cluster-teal shrink-0" />
                8. Grievance Officer &amp; Contact Details
              </h2>
              <div className="space-y-4">
                <p>
                  In accordance with the Information Technology Act, 2000 and rules made thereunder, any queries, concerns, or grievances concerning personal data processing may be directed to our designated officer:
                </p>
                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-sm">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      Grievance Officer – Legal &amp; Data Protection
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-manrope">
                      Cluster Outfits Private Limited
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <a
                      href="https://maps.app.goo.gl/mK36pXx6K9HJMzsB7"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Registered Office on Google Maps"
                      className="flex items-start gap-3 group/loc hover:text-cluster-teal transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-cluster-teal shrink-0 mt-0.5 group-hover/loc:scale-110 transition-transform" />
                      <div>
                        <strong className="group-hover/loc:underline">Registered Office (View on Map ↗):</strong>
                        <p className="text-slate-600 mt-0.5">
                          Thujanth, B&amp;B Tower, TVM road, near Indian Coffee House, Pulamon Junction, Kottarakkara, Keralam 691531
                        </p>
                      </div>
                    </a>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-cluster-teal shrink-0" />
                        <div>
                          <strong>Email:</strong>{" "}
                          <a href="mailto:contact@clusteroutfits.com" className="text-cluster-teal hover:underline font-medium">
                            contact@clusteroutfits.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-cluster-teal shrink-0" />
                        <div>
                          <strong>Phone:</strong>{" "}
                          <a href="tel:+919995832016" className="text-slate-800 hover:text-cluster-teal font-medium">
                            +91 99958 32016
                          </a>
                          {" / "}
                          <strong>WhatsApp:</strong>{" "}
                          <a href="https://wa.me/918848483741" target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-cluster-teal font-medium">
                            +91 88484 83741
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <Button variant="outline-dark" size="sm" href="/terms">
              Terms of Service
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
