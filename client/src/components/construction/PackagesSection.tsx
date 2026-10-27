import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  SlidersHorizontal,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Building,
  Check,
  Zap,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PACKAGE_TIERS, PackageTier } from "@/data/enterpriseData";
import { PackageCompareModal } from "./PackageCompareModal";

interface PackagesSectionProps {
  onOpenLeadModal: (defaultCity?: string) => void;
}

export function PackagesSection({ onOpenLeadModal }: PackagesSectionProps) {
  const [selectedCity, setSelectedCity] = useState("Pandharpur");
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const CITIES_LIST = ["Pandharpur", "Solapur", "Sangola", "Mangalwedha"];

  // Embla Carousel setup: max 3 slides on desktop, 2 on tablet, 1 on mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Standard pricing for Pandharpur, Solapur, Sangola, Mangalwedha
  const multiplier = 1.0;

  return (
    <section id="packages" className="relative py-28 md:py-36 bg-[#0a0a0c] text-white overflow-hidden border-t border-white/10">
      
      {/* Ambient background glow & image overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#F4B400]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4" /> {selectedCity} Turnkey Engineering Pricing
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {selectedCity} Construction Packages
            </h2>
            <p className="text-white/70 max-w-2xl text-base md:text-lg leading-relaxed">
              Transparent, itemized pricing tailored exclusively for <span className="text-[#F4B400] font-semibold">{selectedCity}, Maharashtra</span>. Contractually backed by our <span className="text-white font-semibold">100% Price Lock Guarantee</span>, JK Super Cement, and <span className="text-white font-semibold">100+ Quality Measures</span>.
            </p>
          </div>

          {/* City & Compare Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={() => setIsCompareOpen(true)}
              variant="outline"
              className="border-[#F4B400]/50 text-[#F4B400] hover:bg-[#F4B400]/15 text-xs font-bold gap-2 px-6 py-3 rounded-2xl shadow-xl"
            >
              <SlidersHorizontal className="h-4 w-4" /> Full 5-Tier Compare Matrix
            </Button>
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-white/5 p-2 rounded-2xl border border-white/10 w-fit">
          <span className="text-xs text-white/50 px-3 font-semibold flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#F4B400]" /> Select City:
          </span>
          {CITIES_LIST.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCity === city
                  ? "bg-[#F4B400] text-[#111111] shadow-lg shadow-[#F4B400]/30 font-black"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Carousel Navigation Bar (Left/Right Arrows & Indicators) */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs text-white/60 font-semibold flex items-center gap-2">
            <span>Swipe or click arrows to explore tiers:</span>
            <span className="text-[#F4B400] font-bold">({selectedIndex + 1} of {PACKAGE_TIERS.length})</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-2xl liquid-glass border border-white/20 hover:border-[#F4B400] text-white hover:text-[#F4B400] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
              aria-label="Previous Package"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-2xl liquid-glass border border-white/20 hover:border-[#F4B400] text-white hover:text-[#F4B400] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
              aria-label="Next Package"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* SWIPER / EMBLA CAROUSEL CONTAINER */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-3xl" ref={emblaRef}>
          <div className="flex gap-8">
            {PACKAGE_TIERS.map((pkg) => {
              const adjustedPrice = Math.round(pkg.pricePerSqFt * multiplier);

              return (
                <div
                  key={pkg.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_48%] lg:flex-[0_0_32.5%] min-w-0"
                >
                  <div
                    className={`h-full liquid-glass rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl relative group hover:border-[#F4B400]/70 ${
                      pkg.popular
                        ? "border-[#F4B400] shadow-2xl shadow-[#F4B400]/15 bg-[#141417]"
                        : "border-white/15 bg-[#121214]"
                    }`}
                  >
                    
                    {/* Top 35–40% High-Definition Photography Banner Header */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-white/10">
                      <img
                        src={pkg.coverImage}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/40" />

                      {/* Floating Badge */}
                      {pkg.popular && (
                        <div className="absolute top-4 left-4 bg-[#F4B400] text-[#111111] text-xs font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-xl flex items-center gap-1.5">
                          <Zap className="h-3.5 w-3.5 fill-[#111111]" /> {pkg.badge}
                        </div>
                      )}

                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20">
                        {pkg.includedBrands.length} Brand Partners
                      </div>

                      {/* Price Banner overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div>
                          <span className="text-[11px] text-white/70 block font-medium">Rate in {selectedCity}</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl sm:text-4xl font-black text-[#F4B400]">₹{adjustedPrice.toLocaleString()}</span>
                            <span className="text-xs text-white/70 font-semibold">/ sq.ft.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                      
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-tight">{pkg.name}</h3>
                        <p className="text-xs md:text-sm text-white/70 mt-1 min-h-[38px] leading-relaxed">{pkg.tagline}</p>
                      </div>

                      {/* UPFRONT VISIBLE SPECIFICATIONS (Structure, Steel, Cement, Flooring, Plumbing, Electrical) */}
                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <span className="text-xs font-extrabold text-[#F4B400] uppercase tracking-wider block">
                          Upfront Specifications Included
                        </span>

                        <div className="space-y-2.5 text-xs">
                          {pkg.specifications.flatMap(s => s.items).slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-white/90">
                              <CheckCircle2 className="h-4 w-4 text-[#F4B400] flex-shrink-0 mt-0.5" />
                              <span className="leading-normal font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* BRAND LOGO CHIPS */}
                      <div className="space-y-2 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-bold text-white/60 uppercase block">
                          Included Certified Brand Partners:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.includedBrands.flatMap(b => b.brands).map((bName, bIdx) => (
                            <span
                              key={bIdx}
                              className="bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg text-[11px] text-white font-semibold"
                            >
                              {bName}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interior Preview Image */}
                      {pkg.interiorPreviews[0] && (
                        <div className="h-32 rounded-2xl overflow-hidden border border-white/10 mt-2 relative group">
                          <img src={pkg.interiorPreviews[0]} alt="Interior Finish Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-mono">Interior Finish Sample</span>
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          onClick={() => onOpenLeadModal(selectedCity)}
                          className={`w-full font-black text-sm py-3.5 rounded-2xl transition-all shadow-xl ${
                            pkg.popular
                              ? "bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 shadow-[#F4B400]/30 hover:scale-[1.02]"
                              : "bg-white/10 text-white hover:bg-[#F4B400] hover:text-[#111111]"
                          }`}
                        >
                          Select {pkg.name} Tier <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === idx ? "w-8 bg-[#F4B400]" : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Compare Modal */}
      <PackageCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onSelectPackage={(pName) => onOpenLeadModal(selectedCity)}
      />
    </section>
  );
}
