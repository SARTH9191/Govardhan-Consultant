import { useState } from "react";
import { ShieldCheck, Search, CheckCircle2, FileCheck, Award, Eye } from "lucide-react";
import { QUALITY_CHECKPOINTS } from "@/data/enterpriseData";

export function QualityChecksSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Foundation", "Structural & RCC", "Waterproofing", "Plumbing & Drainage", "Electrical & Safety", "Flooring & Tiling"];

  const filteredCheckpoints = QUALITY_CHECKPOINTS.filter((qc) => {
    const matchesCat = selectedCategory === "All" || qc.category === selectedCategory;
    const matchesSearch = qc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          qc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          qc.stage.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="quality-checks" className="py-28 md:py-36 bg-black text-white border-t border-white/10 relative overflow-hidden">
      
      {/* High-Visibility Full-Bleed Inspection Background Image */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <img
          src="/images/plinth-columns-phase.jpg"
          alt="QA Construction Site Inspection"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/plinth-columns-phase.jpg";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Gold Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F4B400]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header & Feature Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/15 border border-[#F4B400]/40 px-4 py-1.5 rounded-full shadow-lg">
              <ShieldCheck className="h-4 w-4 text-[#F4B400]" /> Zero-Defect NABL Audit Protocol
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              100+ Quality Measures Explorer
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
              Every cubic metre of concrete, rebar cover block, HT225-N rebound hammer test, plumbline check, and electrical conduit inspection is logged on site.
            </p>
          </div>

          {/* Featured Visual Inspection Card */}
          <div className="lg:col-span-4">
            <div className="liquid-glass rounded-3xl p-3 border border-[#F4B400]/40 shadow-2xl overflow-hidden group">
              <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/rebound-hammer-qc.jpg"
                  alt="HT225-N Rebound Hammer Concrete Testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 flex items-end justify-between">
                  <span className="text-xs font-extrabold text-[#F4B400] flex items-center gap-1.5">
                    <Award className="h-4 w-4" /> HT225-N NDT Calibrated
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    100% Audit Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-black/80 backdrop-blur-2xl p-4 rounded-2xl border border-white/20 shadow-2xl">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search checkpoints (e.g. Concrete, Rebar, Slump...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-white placeholder-white/50 focus:outline-none focus:border-[#F4B400]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#F4B400] text-[#111111] font-black shadow-lg"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Checkpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCheckpoints.map((qc) => (
            <div
              key={qc.id}
              className="liquid-glass rounded-2xl p-6 border border-white/20 hover:border-[#F4B400]/60 transition-all space-y-4 group shadow-2xl bg-black/80 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] bg-[#F4B400]/20 text-[#F4B400] font-extrabold px-2.5 py-0.5 rounded-md border border-[#F4B400]/40 uppercase tracking-wider">
                      {qc.category}
                    </span>
                    <span className="text-xs text-white/60 font-medium">• Stage: {qc.stage}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-[#F4B400] transition-colors">
                    {qc.title}
                  </h3>
                </div>

                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-black px-3 py-1 rounded-full border border-emerald-500/30 flex-shrink-0 flex items-center gap-1 shadow-lg">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {qc.status}
                </span>
              </div>

              <p className="text-xs md:text-sm text-white/80 leading-relaxed">{qc.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-3 border-t border-white/10 text-white/70 font-mono">
                <div><span className="text-white/40">Audit Tool:</span> {qc.inspectionMethod}</div>
                <div><span className="text-white/40">Tolerance:</span> {qc.tolerance}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center text-xs md:text-sm text-white/70 flex items-center justify-center gap-2">
          <FileCheck className="h-4.5 w-4.5 text-[#F4B400]" />
          <span>Full 100+ Quality Measures Audit Handbook provided to every client at contract sign-off.</span>
        </div>

      </div>
    </section>
  );
}
