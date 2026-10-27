import { ABOUT_IMAGES, BRAND, CORE_VALUES } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

const FALLBACK_ABOUT_IMAGES = [
  "/images/plinth-columns-phase.jpg",
  "/images/founder-engineer.jpg",
  "/images/completed-commercial-residence.jpg"
];

export function About() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackIndex: number) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_ABOUT_IMAGES[fallbackIndex]) {
      target.src = FALLBACK_ABOUT_IMAGES[fallbackIndex];
    }
  };

  return (
    <section id="about" className="relative bg-[#0d0d0f] text-white py-24 md:py-32 border-t border-white/10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F4B400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Image cards composition */}
          <ScrollReveal className="relative h-[440px] md:h-[540px]">
            <img
              src={ABOUT_IMAGES[0]}
              onError={(e) => handleImgError(e, 0)}
              alt="BuildCraft construction site"
              className="absolute left-0 top-0 w-[62%] h-[75%] object-cover rounded-2xl shadow-2xl border border-white/15 transition-transform duration-500 hover:-translate-y-2"
            />
            <img
              src={ABOUT_IMAGES[1]}
              onError={(e) => handleImgError(e, 1)}
              alt="Govardhan Consultant Project Engineer"
              className="absolute right-0 top-[2%] w-[48%] h-[68%] object-cover object-top rounded-2xl shadow-2xl border-4 border-[#0d0d0f] transition-transform duration-500 hover:-translate-y-2 z-10"
              style={{ objectPosition: "center 0%" }}
            />
            <img
              src={ABOUT_IMAGES[2]}
              onError={(e) => handleImgError(e, 2)}
              alt="BuildCraft completed building"
              className="absolute left-[18%] bottom-0 w-[55%] h-[44%] object-cover rounded-2xl shadow-2xl border-4 border-[#0d0d0f] transition-transform duration-500 hover:-translate-y-2 z-20"
            />
            <div className="absolute -bottom-4 right-2 md:right-6 bg-[#F4B400] text-[#111111] rounded-2xl px-6 py-4 shadow-2xl z-30 border border-black/20">
              <div className="text-3xl md:text-4xl font-extrabold leading-none">8+</div>
              <div className="text-xs font-bold tracking-wider uppercase mt-1">
                Years Experience
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full mb-3">
                Corporate Legacy & Craftsmanship
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight">
                Engineering Trust, One Landmark Project at a Time
              </h2>
              <p className="text-white/75 leading-relaxed mb-4 text-base">
                With over <span className="text-white font-bold">8+ years of experience</span>, <span className="text-white font-bold">{BRAND.name}</span> has delivered over <span className="text-[#F4B400] font-bold">120+ landmark projects</span> and satisfied over <span className="text-white font-bold">120+ happy customers</span> across Solapur, Pandharpur, Sangola, and Mangalwedha.
              </p>
              <p className="text-white/75 leading-relaxed mb-8 text-base">
                Our in-house team of <span className="text-[#F4B400] font-bold">150+ craftsmen</span> and licensed structural engineers ensures every build meets <span className="text-white font-bold">100+ quality measures</span>, delivers earthquake-resistant <span className="text-[#F4B400] font-bold">RCC foundations in 6 to 12 months</span>, and provides contractual Price-Lock peace of mind.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-5">
              {CORE_VALUES.map((v, i) => (
                <ScrollReveal
                  key={v.title}
                  delay={150 + i * 120}
                  className="liquid-glass rounded-2xl p-5 border border-white/10 shadow-xl hover:border-[#F4B400]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-bold text-[#F4B400] mb-2 text-base">{v.title}</h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {v.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
