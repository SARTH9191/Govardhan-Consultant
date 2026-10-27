import { Linkedin, Mail, Award, ShieldCheck } from "lucide-react";
import { TEAM } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

export function Team() {
  return (
    <section id="team" className="relative bg-black text-white py-28 md:py-36 border-t border-white/10 overflow-hidden">
      
      {/* Full-Bleed Architectural Corporate Background Photography */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/images/plinth-columns-phase.jpg"
          alt="Govardhan Site Engineering"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/founder-site-collage.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      {/* Gold Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#F4B400]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full">
            <Award className="h-4 w-4 text-[#F4B400]" /> Executive Leadership &amp; Board
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Meet Our Leadership Team
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Engineers, architects, and industry veterans driving turnkey structural excellence across Maharashtra.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 100}>
              <div className="liquid-glass rounded-3xl overflow-hidden border border-white/20 hover:border-[#F4B400]/70 transition-all duration-500 group relative aspect-[4/5] shadow-2xl">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/founder-engineer.jpg";
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: "center 0%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 z-10">
                  <span className="text-[10px] uppercase font-bold text-[#F4B400] bg-[#F4B400]/20 px-2.5 py-0.5 rounded border border-[#F4B400]/30 inline-block mb-1">
                    Executive Board
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#F4B400] transition-colors">{member.name}</h3>
                  <p className="text-xs md:text-sm text-white/80 font-medium">{member.role}</p>
                  
                  <div className="flex gap-2.5 pt-3 opacity-90 transition-all duration-300">
                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#F4B400] hover:text-[#111111] transition-all border border-white/15"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#F4B400] hover:text-[#111111] transition-all border border-white/15"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
