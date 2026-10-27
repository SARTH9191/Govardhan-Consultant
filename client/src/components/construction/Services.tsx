import {
  Home as HomeIcon,
  Building2,
  Factory,
  RouteIcon,
  PaintBucket,
  ClipboardList,
  Hammer,
  Ruler,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SERVICES, type Service } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

const ICONS: Record<Service["icon"], typeof HomeIcon> = {
  home: HomeIcon,
  building: Building2,
  factory: Factory,
  road: RouteIcon,
  paintbrush: PaintBucket,
  clipboard: ClipboardList,
  hammer: Hammer,
  drafting: Ruler,
};

export function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-28 md:py-36 border-t border-white/10 overflow-hidden">
      
      {/* Background Architectural Photography */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/images/plinth-columns-phase.jpg"
          alt="Engineering Services"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/plinth-columns-phase.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      {/* Gold Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F4B400]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-[#F4B400]" /> End-To-End Turnkey Engineering
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Comprehensive Construction Services
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            From architectural 3D BIM design and soil SBC testing to luxury interior fit-outs and final keys handover.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="group relative h-full liquid-glass bg-black/80 rounded-3xl p-7 border border-white/15 overflow-hidden transition-all duration-500 hover:border-[#F4B400] hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4B400] text-[#111111] font-black text-xl mb-6 shadow-xl shadow-[#F4B400]/25 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="font-extrabold text-xl text-white group-hover:text-[#F4B400] mb-3 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/75 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <button className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] group-hover:underline">
                    Explore Capability
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
