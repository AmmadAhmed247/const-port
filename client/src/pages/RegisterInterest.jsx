import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Search,
  ClipboardList,
  CheckCircle2,
  Eye,
  Wrench,
  Home as HomeIcon,
  ShieldCheck,
  Award,
  Clock,
  Building2,
  BedDouble,
  CheckSquare,
  User,
  Phone,
  Mail,
  Lock,
} from "lucide-react";

/**
 * Register Interest / Snagging Landing — Trax Management Group
 *
 * IMAGES — drop these into /public/assets/:
 *   register-hero.png            (hero: living room w/ Dubai skyline)
 *   snags/snagging.jpg
 *   snags/reporting.jpg
 *   snags/desnagging.jpg
 *   snags/quality.jpg
 *   footer-table.jpg             (bottom-right lifestyle shot)
 * Until a file exists, a warm gradient fallback shows instead, so
 * nothing ever breaks.
 */

const Photo = ({ src, alt, gradient, className = "" }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={{ background: gradient }} />
      {!failed && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const HERO_FEATURES = [
  {
    icon: Search,
    title: "Detailed Inspections",
    desc: "We inspect every corner with precision",
  },
  {
    icon: ClipboardList,
    title: "Snagging Experts",
    desc: "Trained professionals with a keen eye",
  },
  {
    icon: CheckCircle2,
    title: "De-Snagging Done Right",
    desc: "We fix issues and deliver perfection",
  },
];

const SNAG_STEPS = [
  {
    icon: Eye,
    title: "Snagging",
    desc: "We inspect your property thoroughly to identify all defects and issues.",
    img: "/assets/snagging.png",
    gradient: "linear-gradient(160deg, #d8d2c4 0%, #b8b0a0 100%)",
  },
  {
    icon: ClipboardList,
    title: "Reporting",
    desc: "You receive a detailed snag report with photos and clear notes.",
    img: "/assets/reporting.png",
    gradient: "linear-gradient(160deg, #d0ccc4 0%, #a8a294 100%)",
  },
  {
    icon: Wrench,
    title: "De-Snagging",
    desc: "Our team fixes all issues with quality workmanship and care.",
    img: "/assets/last.png",
    gradient: "linear-gradient(160deg, #4a3a28 0%, #26201a 100%)",
  },
  {
    icon: HomeIcon,
    title: "Quality Assured",
    desc: "We recheck and ensure everything is perfect before handover.",
    img: "/assets/Quality.jfif",
    gradient: "linear-gradient(160deg, #3a3228 0%, #1c1812 100%)",
  },
];

const TRUST_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Experienced Professionals",
    desc: "Skilled team with industry knowledge",
  },
  {
    icon: Award,
    title: "High Standards",
    desc: "We follow strict quality and inspection standards",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We respect your time and deliver on schedule",
  },
  {
    icon: HomeIcon,
    title: "Peace of Mind",
    desc: "We ensure your property is in perfect condition",
  },
];

export default function RegisterInterest() {
  const [formData, setFormData] = useState({
    building_name: "",
    bedrooms: "",
    area: "",
    full_name: "",
    mobile: "",
    email: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({
        building_name: "",
        bedrooms: "",
        area: "",
        full_name: "",
        mobile: "",
        email: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#F5F1E6] text-[#0B0A08] font-body antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Poppins:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* ================= HERO + FORM ================= */}
      <section className="relative pt-20">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] items-stretch">
          {/* Left: hero panel — image as full background, text overlaid on top */}
          <div className="relative text-[#F5F1E6] min-h-[600px] lg:min-h-0">
            <Photo
              src="/assets/support.jfif"
              alt="Luxury living room interior with Dubai skyline"
              gradient="linear-gradient(160deg, #3a2c1c 0%, #0B0A08 80%)"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08] via-[#0B0A08]/80 to-[#0B0A08]/25" />

            <div className="relative z-10 h-full p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <Link to="/" className="mb-8 inline-block">
                <span className="font-display text-3xl md:text-4xl tracking-[0.15em]">
                  TRAX
                </span>
              </Link>
              <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#F5F1E6]/70 font-semibold mb-6">
                Snagging &amp; De-Snagging Services
              </p>
              <span className="w-10 h-0.5 bg-[#C6A15B] mb-6" />

              <h1 className="font-display font-normal text-3xl md:text-4xl leading-[1.2] mb-2">
                We find the details.
              </h1>
              <h1 className="font-display font-normal italic text-3xl md:text-4xl leading-[1.2] text-[#C6A15B] mb-6">
                We perfect your home.
              </h1>

              <p className="text-[#F5F1E6]/80 text-[13px] leading-relaxed mb-10 max-w-xs">
                Professional snagging and de-snagging to ensure your property is flawless,
                functional and ready to enjoy.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-md">
                {HERO_FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title}>
                      <span className="w-11 h-11 rounded-full border border-[#C6A15B]/60 flex items-center justify-center mb-3 bg-[#0B0A08]/40">
                        <Icon size={18} className="text-[#C6A15B]" strokeWidth={1.5} />
                      </span>
                      <p className="text-[10px] tracking-[0.05em] uppercase font-semibold leading-snug mb-1">
                        {f.title}
                      </p>
                      <p className="text-[10.5px] text-[#F5F1E6]/70 leading-snug">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: form panel */}
          <div className="bg-[#EDE7D8] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="w-16 h-16 rounded-full bg-[#0B0A08] border border-[#C6A15B]/50 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/20">
              <HomeIcon size={26} className="text-[#C6A15B]" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl text-center leading-[1.2] mb-3">
              Let's make your
              <br />
              property perfect.
            </h2>
            <p className="text-[12.5px] text-[#0B0A08]/60 text-center leading-relaxed mb-2">
              Share your details and we will take care of the rest.
            </p>
            <span className="w-10 h-0.5 bg-[#C6A15B] mx-auto block mb-6" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-[11.5px] font-semibold mb-1.5">
                  <Building2 size={14} className="text-[#0B0A08]/60" /> Building Name
                </label>
                <input
                  type="text"
                  name="building_name"
                  required
                  value={formData.building_name}
                  onChange={handleChange}
                  placeholder="Enter building name"
                  className="w-full border border-[#0B0A08]/15 bg-white/60 px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[11.5px] font-semibold mb-1.5">
                  <BedDouble size={14} className="text-[#0B0A08]/60" /> No. of Bedrooms
                </label>
                <select
                  name="bedrooms"
                  required
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full border border-[#0B0A08]/15 bg-white/60 px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#C6A15B] text-[#0B0A08]/80"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[11.5px] font-semibold mb-1.5">
                  <CheckSquare size={14} className="text-[#0B0A08]/60" /> Area (sq.ft.)
                </label>
                <input
                  type="number"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Enter area in sq.ft."
                  className="w-full border border-[#0B0A08]/15 bg-white/60 px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[11.5px] font-semibold mb-1.5">
                  <User size={14} className="text-[#0B0A08]/60" /> Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-[#0B0A08]/15 bg-white/60 px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[11.5px] font-semibold mb-1.5">
                  <Phone size={14} className="text-[#0B0A08]/60" /> Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full border border-[#0B0A08]/15 bg-white/60 px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[11.5px] font-semibold mb-1.5">
                  <Mail size={14} className="text-[#0B0A08]/60" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border border-[#0B0A08]/15 bg-white/60 px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#0B0A08] text-[#C6A15B] py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#1a1814] transition-colors disabled:opacity-60 mt-2"
              >
                {status === "sending" ? "Submitting..." : "I'm Interested"}
              </button>

              {status === "success" && (
                <p className="text-green-700 text-[12.5px] text-center">
                  Thanks — we'll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-700 text-[12.5px] text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#0B0A08]/50 text-center pt-1">
                <Lock size={11} /> Your information is secure and confidential.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= WE MANAGE SNAGS ================= */}
      <section className="bg-[#F5F1E6] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
              We Manage Snags.{" "}
              <span className="relative inline-block">
                We Deliver Perfection.
                <span className="absolute left-0 -bottom-2 w-16 h-0.5 bg-[#C6A15B] mx-auto right-0" />
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
            {SNAG_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="text-center">
                  <div className="relative aspect-[4/3] mb-8">
                    <Photo src={s.img} alt={s.title} gradient={s.gradient} className="absolute inset-0" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#F5F1E6] border border-[#C6A15B] flex items-center justify-center shadow-md">
                      <Icon size={20} className="text-[#C6A15B]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-[13px] tracking-[0.1em] uppercase font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[12.5px] text-[#0B0A08]/60 leading-relaxed max-w-[220px] mx-auto">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-[#0B0A08] text-[#F5F1E6] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`flex items-start gap-3 ${
                  i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""
                }`}
              >
                <Icon size={22} className="text-[#C6A15B] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-[11px] tracking-[0.08em] uppercase font-semibold mb-1">
                    {f.title}
                  </p>
                  <p className="text-[11.5px] text-[#F5F1E6]/55 leading-snug">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}