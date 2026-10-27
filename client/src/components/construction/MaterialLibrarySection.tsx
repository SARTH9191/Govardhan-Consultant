import { useState } from "react";
import { Sparkles, ShieldCheck, CheckCircle2, Filter, Info } from "lucide-react";
import { MATERIAL_LIBRARY, MaterialItem } from "@/data/enterpriseData";

export function MaterialLibrarySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Steel", "Cement", "Tiles & Flooring", "Electrical", "Plumbing & Fixtures", "Paint & Finishes"];

  const filteredMaterials = selectedCategory === "All"
    ? MATERIAL_LIBRARY
    : MATERIAL_LIBRARY.filter((m) => m.category === selectedCategory);

  return (
    <section id="materials" className="py-24 bg-[#0e0e11] text-white border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest mb-3">
              <Sparkles className="h-4 w-4" /> 100% Brand Transparency
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Enterprise Material Library
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              We exclusively use primary-grade, lab-tested materials from India's most trusted manufacturers. Zero counterfeit or unbranded substitutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#F4B400] text-[#111111] font-bold shadow-md shadow-[#F4B400]/20"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((item) => (
            <div
              key={item.id}
              className="liquid-glass rounded-2xl border border-white/10 overflow-hidden hover:border-[#F4B400]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-[#F4B400] text-[#111111] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {item.logoText}
                  </span>
                  
                  <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-black/70 px-2.5 py-1 rounded border border-white/20">
                    {item.gradeRating}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F4B400] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">{item.description}</p>

                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-[11px] font-mono text-[#F4B400] flex items-center gap-2">
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{item.specifications}</span>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-2">
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F4B400] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 text-[11px] text-white/50 border-t border-white/10 pt-3 flex items-center justify-between">
                <span>Category: {item.category}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Lab Certified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
