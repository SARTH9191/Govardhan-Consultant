import { ShieldCheck, Lock, Clock, Award, Smartphone, Wallet } from "lucide-react";
import { useState } from "react";

export function GuaranteeSection() {
  // Reliable image URLs with fallback backup options
  const guarantees = [
    {
      icon: Wallet,
      title: "Escrow Milestone Safety",
      desc: "Your funds are held in secure bank escrow. Payments are released strictly after stage completion and 100+ Quality Measures sign-off.",
      badge: "100% Secure",
      bgImage: "/images/plinth-columns-phase.jpg",
      fallbackImage: "/images/slab-reinforcement-steel.jpg"
    },
    {
      icon: Lock,
      title: "Contractual Price Lock",
      desc: "Zero cost escalations post-contract signing. Govardhan Consultant absorbs 100% of raw material price hikes during build.",
      badge: "Guaranteed",
      bgImage: "/images/business-hub-cement.jpg",
      fallbackImage: "/images/cement-rates-promo.jpg"
    },
    {
      icon: Clock,
      title: "RCC Foundation in 6-12 Months",
      desc: "Contractual commitment: RCC foundation & structural framing completed within 6 to 12 months, backed by daily delay compensation.",
      badge: "6-12 Mo.",
      bgImage: "/images/completed-commercial-residence.jpg",
      fallbackImage: "/images/bungalow-elevation.jpg"
    },
    {
      icon: ShieldCheck,
      title: "10-Year Structural Warranty",
      desc: "Comprehensive 10-year warranty covering foundation, RCC slab, column integrity, and waterproofing damp protection.",
      badge: "10-Yr Covered",
      bgImage: "/images/slab-reinforcement-steel.jpg",
      fallbackImage: "/images/column-shuttering-check.jpg"
    },
    {
      icon: Smartphone,
      title: "Live Tracker 4K App",
      desc: "Access daily site supervisor photography, concrete cube strength reports, and material delivery logs from anywhere.",
      badge: "Real-Time",
      bgImage: "/images/founder-site-collage.jpg",
      fallbackImage: "/images/founder-engineer.jpg"
    },
    {
      icon: Award,
      title: "100+ Quality Measures",
      desc: "Multi-stage non-destructive testing, HT225-N rebound hammer concrete tests, and spirit-level plumbline checks across 100+ quality measures.",
      badge: "Certified",
      bgImage: "/images/rebound-hammer-qc.jpg",
      fallbackImage: "/images/brickwork-plumbline-check.jpg"
    }
  ];

  return (
    <section id="guarantee" className="py-28 md:py-36 bg-black text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Architectural Glow & Image */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/images/plinth-columns-phase.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/30 px-4 py-1.5 rounded-full">
            Enterprise Client Assurance
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            8-Pillar Peace of Mind Guarantee
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            We eliminate contractor risk by binding quality, cost, safety, and delivery timelines into legally enforceable contracts.
          </p>
        </div>

        {/* 6 Guarantee Cards with Visible High-Definition Photography Header Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GuaranteeCard key={idx} item={item} Icon={Icon} />
            );
          })}
        </div>

      </div>
    </section>
  );
}

interface GuaranteeCardProps {
  item: {
    icon: any;
    title: string;
    desc: string;
    badge: string;
    bgImage: string;
    fallbackImage: string;
  };
  Icon: any;
}

function GuaranteeCard({ item, Icon }: GuaranteeCardProps) {
  const [imgSrc, setImgSrc] = useState(item.bgImage);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== item.fallbackImage) {
      setImgSrc(item.fallbackImage);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="liquid-glass rounded-3xl border border-white/15 hover:border-[#F4B400]/70 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl group bg-[#121214]">
      
      {/* Top 45% HD Photography Banner Header */}
      <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-[#1e1e24]">
        {!hasError ? (
          <img
            src={imgSrc}
            alt={item.title}
            onError={handleError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block opacity-90"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#F4B400]/20 via-[#18181c] to-[#111111] flex items-center justify-center p-6 text-center">
            <Icon className="h-16 w-16 text-[#F4B400]/40" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30 pointer-events-none" />

        {/* Floating Glass Icon */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md border border-[#F4B400]/60 flex items-center justify-center text-[#F4B400] shadow-2xl group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6" />
        </div>

        {/* Floating Badge */}
        <span className="absolute top-4 right-4 text-xs font-black uppercase bg-[#F4B400] text-[#111111] px-3.5 py-1.5 rounded-full shadow-xl">
          {item.badge}
        </span>
      </div>

      {/* Card Content Body */}
      <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col justify-between bg-[#121214]">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#F4B400] transition-colors tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-white/75 leading-relaxed mt-2">
            {item.desc}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center text-xs font-bold text-[#F4B400]">
          <span>Contractually Backed & Legally Binding</span>
        </div>
      </div>

    </div>
  );
}
