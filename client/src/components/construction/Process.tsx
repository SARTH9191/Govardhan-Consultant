import { PROCESS_STEPS } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";
import { Sparkles, CheckCircle2, Compass, Layers, FileCheck, HardHat, ShieldCheck, Key } from "lucide-react";
import { useState } from "react";

const STEP_ICONS = [Compass, Layers, FileCheck, HardHat, ShieldCheck, Key];

const PROCESS_CARD_DATA = [
  {
    bgImage: "/images/site-marking-layout.jpg",
    fallbackImage: "/images/site-marking-layout.jpg"
  },
  {
    bgImage: "/images/sonawane-column-centerline-plan.jpg",
    fallbackImage: "/images/sonawane-column-centerline-plan.jpg"
  },
  {
    bgImage: "/images/plinth-columns-phase.jpg",
    fallbackImage: "/images/plinth-columns-phase.jpg"
  },
  {
    bgImage: "/images/slab-reinforcement-steel.jpg",
    fallbackImage: "/images/slab-conduit-inspection.jpg"
  },
  {
    bgImage: "/images/rebound-hammer-qc.jpg",
    fallbackImage: "/images/brickwork-plumbline-check.jpg"
  },
  {
    bgImage: "/images/elevation-vs-reality.jpg",
    fallbackImage: "/images/completed-commercial-residence.jpg"
  }
];

export function Process() {
  return (
    <section id="process" className="py-28 md:py-36 bg-black text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Full-Bleed Architectural Process Photography Background */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/images/plinth-columns-phase.jpg"
          alt="Construction Planning & Process"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/plinth-columns-phase.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      {/* Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#F4B400]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-[#F4B400]" /> Systematic Turnkey Workflow
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Our 6-Stage Construction Process
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            From initial soil SBC testing and 3D BIM modeling to 100+ Quality Measures and RCC foundation completion in 6 to 12 months — tracked 24/7 on your smartphone.
          </p>
        </ScrollReveal>

        {/* 6 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const StepIcon = STEP_ICONS[i % STEP_ICONS.length];
            const mediaData = PROCESS_CARD_DATA[i % PROCESS_CARD_DATA.length];
            const stepNum = String(i + 1).padStart(2, "0");

            return (
              <ScrollReveal key={step.title} delay={i * 100}>
                <ProcessCard
                  step={step}
                  stepNum={stepNum}
                  StepIcon={StepIcon}
                  primaryImg={mediaData.bgImage}
                  fallbackImg={mediaData.fallbackImage}
                />
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: { title: string; desc: string };
  stepNum: string;
  StepIcon: any;
  primaryImg: string;
  fallbackImg: string;
}

function ProcessCard({ step, stepNum, StepIcon, primaryImg, fallbackImg }: ProcessCardProps) {
  const [imgSrc, setImgSrc] = useState(primaryImg);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallbackImg) {
      setImgSrc(fallbackImg);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="liquid-glass rounded-3xl border border-white/15 hover:border-[#F4B400]/70 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl group bg-[#121214] h-full">
      
      {/* Top HD Photo Header Banner */}
      <div className="relative h-52 w-full overflow-hidden border-b border-white/10 bg-[#1e1e24]">
        {!hasError ? (
          <img
            src={imgSrc}
            alt={step.title}
            onError={handleError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block opacity-95"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#F4B400]/20 via-[#18181c] to-[#111111] flex items-center justify-center p-6">
            <StepIcon className="h-14 w-14 text-[#F4B400]/40" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30 pointer-events-none" />

        {/* Step Number Badge */}
        <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-[#F4B400] text-[#111111] font-black text-xl flex items-center justify-center shadow-2xl shadow-[#F4B400]/30 group-hover:scale-110 transition-transform">
          {stepNum}
        </div>

        {/* Floating Icon */}
        <div className="absolute top-4 right-4 h-10 w-10 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F4B400]">
          <StepIcon className="h-5 w-5" />
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between bg-[#121214]">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#F4B400] transition-colors tracking-tight">
            {step.title}
          </h3>
          <p className="text-xs md:text-sm text-white/75 leading-relaxed mt-2">
            {step.desc}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#F4B400]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#F4B400]" /> Contractually Verified
          </span>
          <span className="text-white/40 font-mono">Stage {stepNum}/06</span>
        </div>
      </div>

    </div>
  );
}
