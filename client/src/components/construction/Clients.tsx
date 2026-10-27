import { Building, Award, ShieldCheck } from "lucide-react";
import { CLIENT_LOGOS } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

export function Clients() {
  const looped = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative bg-black text-white py-24 md:py-32 border-y border-white/10 overflow-hidden">
      
      {/* Full-Bleed Architectural Corporate Background Photography */}
      <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
        <img
          src="/images/completed-commercial-residence.jpg"
          alt="Govardhan Commercial Complexes & Brand Partners"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/plinth-columns-phase.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Ambient Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F4B400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full">
            <Award className="h-4 w-4 text-[#F4B400]" /> Certified Materials &amp; Institutional Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Corporate Clients &amp; Brand Partners
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Partnered with India's leading Fortune 500 material manufacturers and enterprise developers to guarantee 100% genuine procurement.
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Slider with Liquid Glass Cards */}
      <div className="relative w-full overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-5 px-4">
          {looped.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="flex items-center gap-3 h-24 w-52 flex-shrink-0 rounded-2xl liquid-glass bg-black/75 border border-white/20 px-5 text-white/80 justify-center hover:border-[#F4B400] hover:text-[#F4B400] transition-all duration-300 shadow-2xl group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F4B400]/15 border border-[#F4B400]/40 flex items-center justify-center text-[#F4B400] group-hover:scale-110 transition-transform">
                <Building className="h-5 w-5" />
              </div>
              <span className="text-xs font-extrabold tracking-wide text-white group-hover:text-[#F4B400] transition-colors">{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
