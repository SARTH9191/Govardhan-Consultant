import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Send, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRAND, NAV_LINKS, SERVICES } from "@/data/content";

const SOCIAL_ICONS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/images/logo.jpg"
                alt={BRAND.name}
                className="h-9 w-9 rounded-full object-cover border border-[#F4B400] shadow-md shadow-[#F4B400]/20"
              />
              <div className="flex flex-col">
                <span className="text-base font-black text-white leading-tight">
                  {BRAND.shortName}
                </span>
                <span className="text-[8px] text-[#F4B400] font-bold tracking-widest uppercase">
                  Engineers & Contractors
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Delivering premium turnkey residential, commercial, and infrastructure engineering projects across Solapur, Pandharpur, Sangola, and Mangalwedha.
            </p>
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2 text-xs text-white/70 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <MapPin className="h-4 w-4 text-[#F4B400] flex-shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <Mail className="h-4 w-4 text-[#F4B400] flex-shrink-0" />
                <a href="mailto:gcs.gpr77@gmail.com?cc=sarthp9191@gmail.com" className="hover:text-[#F4B400] transition-colors">
                  gcs.gpr77@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-[#F4B400] hover:text-[#111111] transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="text-[#F4B400] hover:underline font-bold transition-colors inline-flex items-center gap-1 pt-1"
                >
                  Client & Staff Login &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#services");
                    }}
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe for project updates and construction insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-10"
              />
              <Button
                type="submit"
                className="bg-[#F4B400] hover:bg-[#F4B400]/90 text-[#111111] border-none h-10 px-3 flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            {subscribed && (
              <p className="text-xs text-[#F4B400] mt-2">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; 2026 {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#F4B400] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
