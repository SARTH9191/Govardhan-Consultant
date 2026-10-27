import { ShieldCheck, HardHat, Landmark, Leaf } from "lucide-react";
import { CERTIFICATIONS } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

const ICONS = [ShieldCheck, HardHat, Landmark, Leaf];

export function Certifications() {
  return (
    <section className="relative bg-[#0d0d0f] py-20 md:py-24 border-t border-white/10 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4B400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <ScrollReveal key={cert.title} delay={i * 100}>
                <div className="liquid-glass flex items-center gap-4 bg-black/80 border border-white/15 rounded-2xl p-6 hover:border-[#F4B400]/60 transition-all duration-300 shadow-xl group">
                  <div className="flex-shrink-0 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#F4B400]/15 text-[#F4B400] border border-[#F4B400]/30 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base group-hover:text-[#F4B400] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed mt-0.5">{cert.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
