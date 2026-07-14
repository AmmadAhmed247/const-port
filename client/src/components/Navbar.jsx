import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * Shared site navbar — Trax Management Group
 *
 * Drop this into every page for a consistent header across the whole site.
 * Handles both:
 *  - in-page anchor links (#services, #projects, etc.) that only make
 *    sense on the Home page
 *  - real routes (e.g. /register-interest)
 *
 * When not on the home page, anchor links get prefixed with "/" so they
 * still take you back to the right section on Home instead of breaking.
 */

const NAV_LINKS = [
  { label: "Home", href: "/", type: "route" },
  
  { label: "Services", href: "#services", type: "anchor" },
  { label: "Projects", href: "#projects", type: "anchor" },
  
  { label: "Contact", href: "#contact", type: "anchor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const resolveHref = (link) => {
    if (link.type === "route") return link.href;
    // anchor link: if not on home, send back to home first so the
    // section actually exists to scroll to
    return isHome ? link.href : `/${link.href}`;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || !isHome
          ? "bg-[#0B0A08]/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="leading-none">
          <span className="block font-display text-2xl tracking-[0.3em] text-[#F5F1E6]">
            TRAX
          </span>
          <span className="block text-[9px] tracking-[0.35em] text-[#F5F1E6]/60 mt-1">
            MANAGEMENT GROUP
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => {
            const active = l.type === "route" && location.pathname === l.href;
            const commonClasses =
              "relative text-[11px] tracking-[0.15em] uppercase text-[#F5F1E6]/85 hover:text-[#C6A15B] transition-colors pb-1";

            return l.type === "route" ? (
              <Link key={l.label} to={l.href} className={commonClasses}>
                {l.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#C6A15B]" />
                )}
              </Link>
            ) : (
              <a key={l.label} href={resolveHref(l)} className={commonClasses}>
                {l.label}
              </a>
            );
          })}
        </nav>

        <Link
          to="/register-interest"
          className="hidden md:inline-flex items-center bg-[#C6A15B] text-[#0B0A08] px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-semibold hover:bg-[#d6b571] transition-colors"
        >
          Get In Touch
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-[#F5F1E6] p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0B0A08] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) =>
            l.type === "route" ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-[12px] tracking-[0.15em] uppercase text-[#F5F1E6]/85 hover:text-[#C6A15B] transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={resolveHref(l)}
                className="text-[12px] tracking-[0.15em] uppercase text-[#F5F1E6]/85 hover:text-[#C6A15B] transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <Link
            to="/register-interest"
            className="inline-flex items-center justify-center bg-[#C6A15B] text-[#0B0A08] px-5 py-3 text-[11px] tracking-[0.15em] uppercase font-semibold hover:bg-[#d6b571] transition-colors mt-2"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}