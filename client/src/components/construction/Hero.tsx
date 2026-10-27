import { Button } from "@/components/ui/button";
import { FadeIn, AnimatedHeading } from "@/components/HeroComponents";
import { ArrowRight, PlayCircle, Star, ShieldCheck, Award, Calendar, Calculator } from "lucide-react";
import { BRAND } from "@/data/content";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

interface HeroProps {
  onQuoteClick: () => void;
  onProjectsClick: () => void;
  onOpenLeadModal?: () => void;
  onOpenSiteVisit?: () => void;
}

export function Hero({ onQuoteClick, onProjectsClick, onOpenLeadModal, onOpenSiteVisit }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/35 z-0" />

      {/* Hero Content — Aligned at Bottom */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 lg:pb-20 pt-32 sm:pt-36">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
          
          {/* Left Column (7 cols) — Aligned at bottom */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Trust Badges Bar */}
            <FadeIn delay={0} duration={600}>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 liquid-glass border border-[#F4B400]/40 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs text-[#F4B400] font-semibold tracking-wide">
                  <Star className="h-3.5 w-3.5 fill-[#F4B400]" /> 4.9 ★ Google Rated (1,450+ Reviews)
                </span>
                <span className="inline-flex items-center gap-1.5 liquid-glass border border-white/20 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs text-white/90 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#F4B400]" /> ISO 9001 & RERA Approved
                </span>
                <span className="inline-flex items-center gap-1.5 liquid-glass border border-white/20 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs text-white/90 font-medium">
                  <Award className="h-3.5 w-3.5 text-[#F4B400]" /> 25+ Yrs • 520+ Projects
                </span>
              </div>
            </FadeIn>

            {/* Headline - Guaranteed no mid-word linebreaks */}
            <AnimatedHeading
              text={"Building Tomorrow\nWith Precision & Luxury"}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight"
              delay={200}
              charDelay={20}
              duration={500}
            />

            <FadeIn delay={900} duration={1000}>
              <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                Pandharpur's premier civil engineering &amp; turnkey construction platform. Turnkey Commercial Complexes, Luxury Bungalows, and RCC Infrastructure with <span className="text-[#F4B400] font-semibold">10-Year Structural Warranty &amp; Price-Lock</span>.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <Button
                  onClick={onOpenLeadModal || onQuoteClick}
                  className="bg-[#F4B400] text-[#111111] px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-extrabold hover:bg-[#F4B400]/90 shadow-xl shadow-[#F4B400]/20 text-sm md:text-base group w-full sm:w-auto"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Instant Plot Estimate
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  onClick={onOpenSiteVisit || onProjectsClick}
                  className="liquid-glass border border-white/20 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-[#111111] transition-all text-sm md:text-base gap-2 w-full sm:w-auto"
                >
                  <Calendar className="h-5 w-5 text-[#F4B400]" />
                  Book VIP Site Visit
                </Button>

                <Button
                  onClick={onProjectsClick}
                  variant="ghost"
                  className="text-white hover:text-[#F4B400] text-sm md:text-base gap-1.5 w-full sm:w-auto justify-center"
                >
                  <PlayCircle className="h-5 w-5" /> Explore 520+ Projects
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (5 cols) - Floating Enterprise Stats Card */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass border border-white/20 p-6 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 max-w-md ml-auto shadow-2xl bg-black/80 backdrop-blur-2xl">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs text-white/60 uppercase font-extrabold tracking-wider">Engineering Excellence</span>
                  <span className="text-xs bg-[#F4B400] text-[#111111] font-black px-3 py-1 rounded-full shadow-lg">
                    150+ Craftsmen
                  </span>
                </div>

                {/* Grid Metrics 1 */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-2xl sm:text-3xl font-black text-[#F4B400] block">120+</span>
                    <span className="text-xs text-white/70 font-semibold mt-0.5 block">Projects Completed</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-2xl sm:text-3xl font-black text-white block">120+</span>
                    <span className="text-xs text-white/70 font-semibold mt-0.5 block">Happy Customers</span>
                  </div>
                </div>

                {/* Grid Metrics 2 */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-[#F4B400]/10 border border-[#F4B400]/30 p-3 rounded-2xl">
                    <span className="text-base sm:text-lg font-extrabold text-[#F4B400] block">100+ QA</span>
                    <span className="text-[10px] text-white/70 uppercase font-bold">Quality Measures</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <span className="text-base sm:text-lg font-extrabold text-white block">8+ Years</span>
                    <span className="text-[10px] text-white/70 uppercase font-bold">Experience</span>
                  </div>
                </div>

                {/* Footer Delivery Commitment */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/90 font-semibold">
                  <span>RCC Foundation:</span>
                  <span className="text-[#F4B400] font-extrabold bg-[#F4B400]/10 border border-[#F4B400]/30 px-3 py-1 rounded-xl">
                    In 6 to 12 Months
                  </span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
