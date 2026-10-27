import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  return (
    <section className="relative bg-[#F8F8F8] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#F4B400] font-semibold tracking-wide uppercase text-sm">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mt-3">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Carousel opts={{ align: "start", loop: true }} className="px-2">
            <CarouselContent>
              {TESTIMONIALS.map((t) => (
                <CarouselItem
                  key={t.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-white rounded-2xl p-7 border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <Quote className="h-8 w-8 text-[#F4B400]/40 mb-4" />
                    <p className="text-[#2F2F2F]/80 leading-relaxed mb-6 flex-1">
                      "{t.feedback}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-[#111111] text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-[#2F2F2F]/60">
                          {t.company}
                        </p>
                        <div className="flex gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={`h-3.5 w-3.5 ${
                                idx < t.rating
                                  ? "fill-[#F4B400] text-[#F4B400]"
                                  : "text-black/15"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white border-black/10 hover:bg-[#111111] hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-white border-black/10 hover:bg-[#111111] hover:text-white" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
