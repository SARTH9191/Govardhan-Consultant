import {
  HardHat,
  Truck,
  BadgeCheck,
  Clock,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { WHY_CHOOSE_US, type WhyItem } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

const ICONS: Record<WhyItem["icon"], typeof HardHat> = {
  engineer: HardHat,
  equipment: Truck,
  quality: BadgeCheck,
  delivery: Clock,
  safety: ShieldCheck,
  pricing: Receipt,
};

export function WhyChooseUs() {
  return (
    <section className="relative bg-[#111111] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#F4B400] font-semibold tracking-wide uppercase text-sm">
            Why BuildCraft
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            Why Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 90}>
                <div className="group flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#F4B400]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4B400]/15 text-[#F4B400] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
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
