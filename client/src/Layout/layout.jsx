
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Shared page shell — Trax Management Group
 *
 * Wraps every route with the same Navbar + Footer.
 *
 * NOTE on spacing: Navbar is position:fixed and starts transparent,
 * turning solid only once you scroll past the hero (see Navbar.jsx's
 * `scrolled || !isHome` check) — Home's hero is designed to sit
 * edge-to-edge under it. Other pages (like RegisterInterest) get a
 * solid navbar immediately, so THEIR first section needs its own
 * `pt-20` (or more) to clear the fixed h-20 header. That's handled per
 * page, not globally here, so Home's full-bleed hero isn't pushed down.
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0A08]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}