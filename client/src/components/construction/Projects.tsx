import { useState } from "react";
import { PROJECT_CATEGORIES } from "@/data/content";
import { ENTERPRISE_PROJECTS, ProjectDetail } from "@/data/enterpriseData";
import { MapPin, Eye, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  onSelectProject?: (project: ProjectDetail) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = ENTERPRISE_PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesStatus = activeStatus === "All" || p.status === activeStatus;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F4B400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full mb-3">
              Architectural & Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Enterprise Project Explorer
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              Explore our turnkey portfolio across Commercial Towers, Luxury Estate Villas, Sky Residences, Industrial Logistics, and Infrastructure.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-[#161619] p-4 rounded-2xl border border-white/10">
          
          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search projects by city or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F4B400]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto w-full md:w-auto">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-[#F4B400] text-[#111111] font-bold"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
            {["All", "Completed", "Ongoing", "Upcoming"].map((st) => (
              <button
                key={st}
                onClick={() => setActiveStatus(st)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  activeStatus === st ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProject && onSelectProject(p)}
              className="liquid-glass rounded-2xl border border-white/10 overflow-hidden hover:border-[#F4B400]/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#F4B400] text-[#111111] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase">
                      {p.category}
                    </span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded border ${
                      p.status === "Completed" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  <span className="absolute bottom-3 right-3 text-xs font-bold text-[#F4B400] bg-black/80 px-3 py-1 rounded border border-[#F4B400]/30">
                    {p.budget}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F4B400] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">{p.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#F4B400]" /> {p.location}
                    </span>
                    <span className="font-mono text-white/50">{p.year}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectProject) onSelectProject(p);
                  }}
                  className="w-full bg-white/10 hover:bg-[#F4B400] text-white hover:text-[#111111] font-bold text-xs py-2.5 rounded-xl transition-all gap-1.5"
                >
                  <Eye className="h-4 w-4" /> Inspect Floor Plans & Specs
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
