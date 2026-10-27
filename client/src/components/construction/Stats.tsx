import { STATS } from "@/data/content";
import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";

export function Stats() {
  return (
    <section className="relative bg-[#111111] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 120} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F4B400] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-white/60 tracking-wide">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
