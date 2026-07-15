import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Gem,
  MapPin,
  Phone,
  Mail,
 

} from "lucide-react";

/**
 * Shared site footer — Trax Management Group
 *
 * Drop this into every page (Home, RegisterInterest, etc.) for a
 * consistent footer across the whole site.
 *
 * BACKGROUND IMAGE — /public/assets/footer-table.jpg
 * Falls back to a plain dark gradient if the file isn't there yet.
 */

const FOOTER_LINKS = [
  
  { label: "Projects", href: "/#projects" },
  { label: "Register Interest", href: "/register-interest" },
];

const SERVICES_LINKS = [
  { label: "Snagging", href: "/#services" },
  { label: "De-Snagging", href: "/#services" },
  { label: "Project Management", href: "/#services" },
  { label: "Design & Fit-Out", href: "/#services" },
];



export default function Footer() {
  return (
    <footer className="relative bg-[#0B0A08] text-[#F5F1E6] overflow-hidden">
      {/* subtle background image, low opacity */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #0B0A08 0%, #241f18 100%)" }}
        />
        <img
          src="/assets/footer-table.jpg"
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ===== Tagline band ===== */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row gap-8 md:gap-16 md:items-center md:justify-center text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle2 size={20} className="text-[#C6A15B] shrink-0" strokeWidth={1.5} />
            <p className="text-[11px] tracking-[0.1em] uppercase font-semibold leading-relaxed">
              We Find It. We Fix It. You Enjoy It.
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Gem size={20} className="text-[#C6A15B] shrink-0" strokeWidth={1.5} />
            <p className="text-[11px] tracking-[0.1em] uppercase font-semibold leading-relaxed">
              Attention To Detail. Commitment To Quality. Built On Trust.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Main footer grid ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-display text-2xl tracking-[0.15em] block mb-2">TRAX</span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#F5F1E6]/60 mb-5">
            Management Group
          </p>
          <p className="text-[12.5px] text-[#F5F1E6]/55 leading-relaxed max-w-[220px]">
            Specialists in luxury fit-out, snagging, design and project management across the
            UAE.
          </p>
          
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-5 text-[#C6A15B]">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-[13px] text-[#F5F1E6]/65 hover:text-[#C6A15B] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-5 text-[#C6A15B]">
            Services
          </h4>
          <ul className="space-y-3">
            {SERVICES_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-[13px] text-[#F5F1E6]/65 hover:text-[#C6A15B] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-5 text-[#C6A15B]">
            Get In Touch
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C6A15B] shrink-0 mt-0.5" />
              <span className="text-[13px] text-[#F5F1E6]/65 leading-relaxed">
                Dubai JLT Cluster, C Palladium, Tower
Dubai, United Arab Emirates
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-[#C6A15B] shrink-0 mt-0.5" />
              <a
                href="tel:+97140000000"
                className="text-[13px] text-[#F5F1E6]/65 hover:text-[#C6A15B] transition-colors"
              >
                +97150 9244599
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-[#C6A15B] shrink-0 mt-0.5" />
              <a
                href="mailto:info@traxmanagementgroup.com"
                className="text-[13px] text-[#F5F1E6]/65 hover:text-[#C6A15B] transition-colors"
              >
                snagging@traxmanagementgroup.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom bar ===== */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#F5F1E6]/45">
          <p className="tracking-[0.1em]">
            © {new Date().getFullYear()} Trax Management Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C6A15B] transition-colors tracking-[0.1em]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C6A15B] transition-colors tracking-[0.1em]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}