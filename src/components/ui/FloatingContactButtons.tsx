"use client";

import { Phone } from "lucide-react";

/**
 * Official WhatsApp SVG Vector Icon
 */
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function FloatingContactButtons() {
  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Call Button */}
      <div className="relative group flex items-center">
        <span
          className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block"
        >
          Call: +91 88484 83741
        </span>
        <a
          href="tel:+918848483741"
          aria-label="Call Cluster Outfits at +91 88484 83741"
          className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0E7293] text-white shadow-[0_8px_24px_rgba(14,114,147,0.35)] transition-all duration-300 hover:bg-[#0A5872] hover:scale-110 active:scale-95 hover:shadow-[0_12px_28px_rgba(14,114,147,0.45)] focus:outline-none focus:ring-4 focus:ring-[#0E7293]/30"
        >
          <Phone className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2.2]" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group flex items-center">
        <span
          className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block"
        >
          Chat on WhatsApp
        </span>
        <a
          href="https://wa.me/918848483741?text=Hello%20Cluster%20Outfits%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20franchise%20opportunities."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Cluster Outfits on WhatsApp"
          className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:bg-[#20BD5A] hover:scale-110 active:scale-95 hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        >
          {/* Subtle pulse radar ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          <WhatsAppIcon className="h-6 w-6 sm:h-6.5 sm:w-6.5 relative z-10" />
        </a>
      </div>
    </aside>
  );
}
