import React, { useState, useEffect } from "react";
import {
  Building2,
  PenTool,
  LayoutGrid,
  CheckCircle2,
  Users,
  Award,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
/**
 * Trax Management Group — exact replica of the reference design.
 *
 * FULLY SELF-CONTAINED — no tailwind.config.js edits needed. All colors are
 * literal arbitrary-value classes, and fonts are loaded + declared in the
 * <style> block rendered inside the component, so this drops into any
 * Tailwind project and renders identically regardless of existing config.
 *
 * Palette (sampled from the reference):
 *   #0B0A08   ink        near-black background
 *   #F5F1E6   paper      off-white text / light band background
 *   #C6A15B   gold       primary accent (buttons, eyebrows, numbers)
 *
 * Fonts:
 *   Playfair Display  — serif display headings
 *   Poppins           — nav, labels, body copy
 *
 * ASSETS — drop these into your project's /public/assets/ folder.
 * Paths are already wired up below; until a file exists (or if it fails to
 * load) each spot falls back to a warm gradient so nothing ever breaks:
 *   /public/assets/hero-skyline.jpg               (hero: living room with Dubai skyline)
 *   /public/assets/projects/private-villa.jpg
 *   /public/assets/projects/corporate-office.jpg
 *   /public/assets/projects/fb-restaurant.jpg
 *   /public/assets/projects/retail-boutique.jpg
 *   /public/assets/cta-skyline.jpg                 (bottom CTA band background)
 *
 * NOTE on the "Trusted By" logos: the brand names are rendered as plain
 * text, not as the companies' actual trademarked logo artwork — swap in
 * licensed logo files yourself if you have rights to use them.
 */

const SITE_URL = "https://traxmanagementgroup.com/";

/* ---------- helpers ---------- */

// Image with graceful gradient fallback so the layout never breaks before
// real photography is dropped into /public/assets/.
const Photo = ({ src, alt, gradient, className = "" }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={` overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={{ background: gradient }} />
      {!failed && (
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            // fall back to a known hero image if the requested src fails to load
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/hero.png";
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const Eyebrow = ({ children }) => (
  <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold mb-4">
    {children}
  </p>
);

const OutlineButton = ({ href, children, ...props }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 border border-[#C6A15B] text-[#C6A15B] px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#C6A15B] hover:text-[#0B0A08] transition-colors"
    {...props}
  >
    {children} <ArrowRight size={14} />
  </a>
);

const SolidButton = ({ href, children, ...props }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#0B0A08] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d6b571] transition-colors"
    {...props}
  >
    {children} <ArrowRight size={14} />
  </a>
);

/* ---------- data ---------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
//   { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
//   { label: "Our Process", href: "#process" },
//   { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Project Management",
    desc: "End-to-end project management ensuring time, quality and budget are delivered.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Creative, functional and timeless design solutions tailored to your vision.",
  },
  {
    icon: LayoutGrid,
    title: "Fit-Out",
    desc: "High-quality fit-out services built on precision, craftsmanship and attention to detail.",
  },
  {
    icon: CheckCircle2,
    title: "Snagging & Quality",
    desc: "Professional snagging and quality inspection for flawless handover and client satisfaction.",
  },
];

const PROJECTS = [
  {
    name: "Private Villa",
    location: "Emirates Hills, Dubai",
    
    img: "/assets/8.jfif",
    gradient: "linear-gradient(160deg, #3a2c1c 0%, #0B0A08 75%)",
  },
  {
    name: "Corporate Office",
    location: "DIFC, Dubai",
    
    img: "/assets/2.jfif",
    gradient: "linear-gradient(160deg, #2a2a28 0%, #0B0A08 75%)",
  },
  {
    name: "F&B Restaurant",
    location: "Jumeirah, Dubai",
   
    img: "/assets/6.jfif",
    gradient: "linear-gradient(160deg, #3d2e18 0%, #0B0A08 75%)",
  },
  {
    name: "Retail Boutique",
    location: "Mall of the Emirates, Dubai",
    
    img: "/assets/3.jfif",
    gradient: "linear-gradient(160deg, #2e2a24 0%, #0B0A08 75%)",
  },
];

const STATS = [
  { icon: Users, value: "15+", label: "Years of Experience" },
  { icon: Building2, value: "250+", label: "Projects Delivered" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: Handshake, value: null, label: "Trusted by Leading Brands Across the UAE" },
];

const BRANDS = ["EMAAR", "NAKHEEL", "DUBAI HOLDING", "MERAAS", "SELECT GROUP", "OMNIYAT"];

/* ---------- page ---------- */

export default function TraxLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#0B0A08] text-[#F5F1E6] font-body antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Poppins:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* ---------- NAV ---------- */}
      

      {/* ---------- HERO ---------- */}
      <section id="home" className="relative h-[92vh] min-h-[640px] flex items-center overflow-hidden">
        <Photo
          src="/assets/main.jfif"
          alt="Luxury living room interior with Dubai skyline at dusk"
          gradient="linear-gradient(100deg, #0B0A08 15%, #2a2115 55%, #4a3520 100%)"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08] via-[#0B0A08]/70 to-[#0B0A08]/10" />

        <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10">
          <div className="max-w-xl">
            <Eyebrow>We Don't Just Build Spaces</Eyebrow>
            <h1 className="font-display font-normal text-5xl md:text-6xl leading-[1.08] mb-6">
              We Create
              <br />
              Exceptional Experiences
            </h1>
            <p className="text-[#F5F1E6]/70 text-[15px] leading-relaxed mb-9 max-w-md">
              Specialists in luxury fit-out, design, project management and quality delivery
              across the UAE.
            </p>
           
          </div>
        </div>
      </section>

      {/* ---------- SERVICES STRIP ---------- */}
      <section id="services" className="bg-[#0B0A08]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`lg:pl-8 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <Icon size={28} className="text-[#C6A15B] mb-5" strokeWidth={1.3} />
                <h3 className="text-xs tracking-[0.15em] uppercase font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#F5F1E6]/60 leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="#services"
                  className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-[#C6A15B] hover:text-[#d6b571]"
                >
                  Learn More <ArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section id="projects" className="bg-[#0B0A08] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-3">
            <Eyebrow>Featured Projects</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.1] mb-5">
              Spaces That
              <br />
              Inspire
            </h2>
            <p className="text-[13px] text-[#F5F1E6]/60 leading-relaxed mb-7">
              We take pride in delivering exceptional projects that reflect quality, innovation
              and excellence.
            </p>
            <OutlineButton href="#projects">Explore All Projects</OutlineButton>
          </div>

          <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS.map((p) => (
              <div key={p.name} className="group relative aspect-[3/4] overflow-hidden">
                <Photo src={p.img} alt={p.name} gradient={p.gradient} className="absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] via-[#0B0A08]/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-xs tracking-[0.1em] uppercase font-semibold">{p.name}</h3>
                  <p className="text-[11px] text-[#F5F1E6]/60 mb-2">{p.location}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE TRAX ---------- */}
      <section className="bg-[#0B0A08] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-4">
            <Eyebrow>Why Choose Trax</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.1] mb-5">
              Commitment.
              <br />
              Precision. Excellence.
            </h2>
            <p className="text-[13px] text-[#F5F1E6]/60 leading-relaxed mb-7 max-w-sm">
              We combine industry expertise with a client-first approach to deliver spaces that
              exceed expectations.
            </p>
            <OutlineButton href="#about">About Us</OutlineButton>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`px-6 py-8 text-center flex flex-col items-center ${
                    i > 0 ? "border-l border-white/10" : ""
                  }`}
                >
                  <Icon size={26} className="text-[#C6A15B] mb-4" strokeWidth={1.3} />
                  {s.value && (
                    <p className="font-display text-3xl md:text-4xl mb-2">{s.value}</p>
                  )}
                  <p className="text-[10px] tracking-[0.1em] uppercase text-[#F5F1E6]/60 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- TRUSTED BY LEADING BRANDS ---------- */}
      <section className="bg-[#F5F1E6] py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#0B0A08]/50 font-semibold mb-9">
            Trusted By Leading Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {BRANDS.map((b) => (
              <span
                key={b}
                className="font-display text-lg md:text-xl tracking-wide text-[#0B0A08]/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section id="contact" className="relative py-28 md:py-32 overflow-hidden">
        <Photo
          src="/assets/1.jfif"
          alt="Dubai skyline at dusk"
          gradient="linear-gradient(120deg, #0B0A08 20%, #2c2013 100%)"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[#0B0A08]/70" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-[#F5F1E6]/70 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            From concept to completion, we are your trusted partner in creating exceptional
            spaces.
          </p>
          <Link to={"/register-interest"} className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#0B0A08] px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d6b571] transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      
    </div>
  );
}