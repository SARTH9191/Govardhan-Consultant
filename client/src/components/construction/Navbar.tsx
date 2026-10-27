import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Activity, Calculator, LogIn, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/data/content";
import { getActiveSession, clearActiveSession, UserRecord } from "@/lib/authStorage";

interface NavbarProps {
  onOpenLeadModal?: (defaultCity?: string) => void;
  onOpenSiteVisit?: () => void;
  onOpenLiveTracker?: () => void;
  onOpenAdminDemo?: () => void;
}

export function Navbar({ onOpenLeadModal, onOpenSiteVisit, onOpenLiveTracker, onOpenAdminDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [session, setSession] = useState<UserRecord | null>(null);

  useEffect(() => {
    setSession(getActiveSession());
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    clearActiveSession();
    setSession(null);
  };

  // Scroll-spy
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-[#F4B400]/40 shadow-2xl py-3"
          : "bg-black/80 backdrop-blur-xl border-b border-white/15 py-3.5 md:py-4"
      }`}
    >
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-3">
        
        {/* Left Side Container — Logo + Nav Links shifted left */}
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 flex-1 overflow-hidden">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5 group cursor-pointer flex-shrink-0"
          >
            <img
              src="/images/logo.jpg"
              alt={BRAND.name}
              className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover border-2 border-[#F4B400] shadow-xl shadow-[#F4B400]/30 group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-sm md:text-lg xl:text-xl font-black tracking-tight text-white leading-none">
                {BRAND.shortName}
              </span>
              <span className="text-[8px] md:text-[9px] text-[#F4B400] font-extrabold tracking-[0.18em] uppercase mt-1">
                Engineers & Contractors
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — Positioned left next to logo */}
          <ul className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-xs xl:text-sm font-extrabold text-white/90 flex-shrink-0">
            {NAV_LINKS.slice(0, 7).map((item) => (
              <li key={item.href} className="flex-shrink-0">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative pb-1 transition-all whitespace-nowrap inline-block hover:text-[#F4B400] ${
                    active === item.href ? "text-[#F4B400] font-black" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#F4B400] transition-all duration-300 ${
                      active === item.href ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Right CTAs — Shifted left to ensure Get Instant Quote is 100% visible */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
          
          {/* Phone Button */}
          <a
            href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
            className="hidden 2xl:flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F4B400] transition-colors px-2.5 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-[#F4B400]/50 whitespace-nowrap flex-shrink-0"
          >
            <Phone className="h-3.5 w-3.5 text-[#F4B400] flex-shrink-0" />
            <span className="whitespace-nowrap">{BRAND.phone}</span>
          </a>

          {/* Live Tracker Button */}
          {onOpenLiveTracker && (
            <button
              onClick={onOpenLiveTracker}
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-2 rounded-xl hover:bg-emerald-500/20 transition-all whitespace-nowrap flex-shrink-0"
            >
              <Activity className="h-3.5 w-3.5 animate-pulse text-emerald-400 flex-shrink-0" />
              <span className="whitespace-nowrap">Live Tracker</span>
            </button>
          )}

          {/* Admin Console Demo */}
          {onOpenAdminDemo && (
            <button
              onClick={onOpenAdminDemo}
              className="hidden 2xl:flex items-center gap-1 text-xs font-bold text-white/70 hover:text-white bg-white/5 border border-white/15 px-2.5 py-2 rounded-xl transition-all whitespace-nowrap flex-shrink-0"
            >
              Admin
            </button>
          )}

          {/* Portal Login / User session */}
          {session ? (
            <div className="flex items-center gap-1.5 bg-[#F4B400]/10 border border-[#F4B400]/30 px-2.5 py-1.5 rounded-xl text-xs font-bold text-white flex-shrink-0">
              <User className="h-3.5 w-3.5 text-[#F4B400]" />
              <span className="max-w-[80px] sm:max-w-[120px] truncate text-[#F4B400]">{session.name.split(" ")[0]}</span>
              <button
                onClick={handleLogout}
                title="Log out"
                className="text-white/60 hover:text-red-400 p-0.5 ml-1 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-[#F4B400] bg-white/5 border border-white/15 hover:border-[#F4B400]/50 px-3 py-2 rounded-xl transition-all whitespace-nowrap flex-shrink-0"
            >
              <LogIn className="h-3.5 w-3.5 text-[#F4B400] flex-shrink-0" />
              <span>Login / Register</span>
            </Link>
          )}

          {/* Instant Quote CTA — 100% visible on screen with comfortable right margin */}
          <Button
            onClick={() => onOpenLeadModal ? onOpenLeadModal() : handleNavClick("#contact")}
            className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 border-none font-black text-xs md:text-sm px-4 py-2.5 rounded-xl shadow-xl shadow-[#F4B400]/25 transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
          >
            <Calculator className="h-4 w-4 mr-1.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Get Instant Quote</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2 rounded-xl bg-white/10 flex-shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden w-full overflow-hidden transition-all duration-300 ${
          open ? "max-h-[580px] mt-2" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 border-b border-[#F4B400]/40 shadow-2xl">
          <div className="grid grid-cols-2 gap-3.5 text-base font-bold">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`py-2 transition-colors hover:text-[#F4B400] ${
                  active === item.href ? "text-[#F4B400] font-extrabold" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/15 flex flex-col gap-3">
            {session ? (
              <div className="flex items-center justify-between bg-[#F4B400]/10 border border-[#F4B400]/30 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#F4B400]" />
                  <span className="font-bold text-white text-sm">{session.name} ({session.role})</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-400 font-semibold px-2 py-1 bg-red-500/10 rounded-lg hover:bg-red-500/20"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 text-base font-bold text-white bg-white/10 py-3 rounded-xl border border-white/20 hover:border-[#F4B400] transition-colors"
              >
                <LogIn className="h-4 w-4 text-[#F4B400]" /> Login / Register Portal
              </Link>
            )}

            <a
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 text-base font-bold text-white bg-white/10 py-3 rounded-xl border border-white/20"
            >
              <Phone className="h-4 w-4 text-[#F4B400]" /> {BRAND.phone}
            </a>

            <Button
              onClick={() => {
                setOpen(false);
                if (onOpenLeadModal) onOpenLeadModal();
              }}
              className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-extrabold text-base w-full py-3.5 rounded-xl shadow-lg"
            >
              Get Instant Quote & Estimate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
