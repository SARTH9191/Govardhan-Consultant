import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal className="text-center mb-12">
          <span className="text-[#F4B400] font-semibold tracking-wide uppercase text-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mt-3">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-black/10"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-[#111111] hover:no-underline hover:text-[#F4B400] py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#2F2F2F]/70 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
