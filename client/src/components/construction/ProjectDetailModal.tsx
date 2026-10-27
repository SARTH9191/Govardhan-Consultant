import { useState } from "react";
import { X, MapPin, Calendar, Award, Layers, ShieldCheck, Download, ChevronRight, Play, Compass, CheckCircle2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectDetail } from "@/data/enterpriseData";

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onBookVisit: () => void;
}

export function ProjectDetailModal({ project, onClose, onBookVisit }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "floorplans" | "specs" | "timeline" | "landmarks">("overview");
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);
  const [show360Mock, setShow360Mock] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#141416] border border-[#F4B400]/30 rounded-2xl shadow-2xl overflow-hidden text-white max-h-[92vh] flex flex-col">
        
        {/* Header Banner */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden flex-shrink-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#F4B400] hover:text-[#111111] transition-all"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#F4B400] text-[#111111] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  project.status === "Completed" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                }`}>
                  {project.status}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h2>
              <p className="text-sm text-white/70 flex items-center gap-1.5 mt-1">
                <MapPin className="h-4 w-4 text-[#F4B400]" /> {project.location}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => {
                  alert(`Downloading Official Brochure for ${project.title} (PDF)...`);
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-xs md:text-sm gap-2"
              >
                <Download className="h-4 w-4" /> Download PDF Brochure
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  onBookVisit();
                }}
                className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs md:text-sm px-5"
              >
                Book Private Site Visit
              </Button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-2 bg-[#18181c] overflow-x-auto">
          {[
            { id: "overview", label: "Overview & Highlights" },
            { id: "floorplans", label: "2D/3D Floor Plans & 360" },
            { id: "specs", label: "Material Specifications" },
            { id: "timeline", label: "Construction Progress" },
            { id: "landmarks", label: "Location & Landmarks" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-[#F4B400] text-[#111111] font-bold"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="liquid-glass rounded-xl p-4 border border-white/10">
                  <span className="text-xs text-white/50 block mb-1">Turnkey Budget</span>
                  <span className="text-lg font-bold text-[#F4B400]">{project.budget}</span>
                </div>
                <div className="liquid-glass rounded-xl p-4 border border-white/10">
                  <span className="text-xs text-white/50 block mb-1">Built-up Area</span>
                  <span className="text-lg font-bold text-white">{project.area}</span>
                </div>
                <div className="liquid-glass rounded-xl p-4 border border-white/10">
                  <span className="text-xs text-white/50 block mb-1">Completion Year</span>
                  <span className="text-lg font-bold text-white">{project.year}</span>
                </div>
                <div className="liquid-glass rounded-xl p-4 border border-white/10">
                  <span className="text-xs text-white/50 block mb-1">Lead Architect</span>
                  <span className="text-sm font-bold text-white truncate block">{project.architect}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Project Architectural Summary</h3>
                <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-base font-bold text-[#F4B400] mb-3 uppercase tracking-wider text-xs">Architectural & Structural Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#F4B400] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before / After comparison slider if present */}
              {project.beforeAfter && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Groundbreaking Transformation (Before vs After)</h3>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden border border-white/10 select-none">
                    <img src={project.beforeAfter.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                    <div
                      className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#F4B400]"
                      style={{ width: `${sliderPos}%` }}
                    >
                      <img src={project.beforeAfter.before} alt="Before" className="w-full h-full object-cover max-w-none" style={{ width: "100%" }} />
                      <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-mono">BEFORE</span>
                    </div>
                    <span className="absolute top-3 right-3 bg-[#F4B400] text-[#111111] font-bold text-[10px] px-2 py-0.5 rounded">AFTER HANDOVER</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPos}
                      onChange={(e) => setSliderPos(Number(e.target.value))}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 accent-[#F4B400] z-20 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Image Gallery Grid */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">High-Definition Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="relative group aspect-video rounded-lg overflow-hidden border border-white/10">
                      <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FLOORPLANS & 360 TAB */}
          {activeTab === "floorplans" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div>
                  <h3 className="font-bold text-white text-base">Architectural Blueprints & 360 Renders</h3>
                  <p className="text-xs text-white/60">Switch between 2D layouts, 3D BIM models and immersive view</p>
                </div>
                <Button
                  onClick={() => setShow360Mock(!show360Mock)}
                  className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs gap-2"
                >
                  <Eye className="h-4 w-4" /> {show360Mock ? "Return to Floor Plan" : "Launch 360° VR View"}
                </Button>
              </div>

              {show360Mock ? (
                <div className="relative h-80 rounded-xl overflow-hidden border border-[#F4B400]/50 flex items-center justify-center bg-black">
                  <img
                    src={project.heroImage}
                    alt="360 View"
                    className="w-full h-full object-cover opacity-60 animate-pulse"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                    <Compass className="h-16 w-16 text-[#F4B400] animate-spin duration-1000 mb-3" />
                    <h4 className="text-xl font-bold text-white">Interactive 360° Architectural VR Model</h4>
                    <p className="text-xs text-white/70 max-w-md mt-1">
                      Click and drag mouse to inspect structural beams, floor elevation, ceiling lighting grid and spatial flow.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex gap-2 border-b border-white/10 pb-2">
                    {project.floorPlans.map((fp, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedFloorPlan(idx)}
                        className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                          selectedFloorPlan === idx ? "bg-[#F4B400] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                        }`}
                      >
                        {fp.title} ({fp.type})
                      </button>
                    ))}
                  </div>

                  {project.floorPlans[selectedFloorPlan] && (
                    <div className="liquid-glass rounded-xl p-4 border border-white/10 space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#F4B400] font-bold">{project.floorPlans[selectedFloorPlan].title}</span>
                        <span className="text-white/60">Area: {project.floorPlans[selectedFloorPlan].size}</span>
                      </div>
                      <div className="h-80 w-full rounded-lg overflow-hidden border border-white/10 bg-black/50">
                        <img
                          src={project.floorPlans[selectedFloorPlan].image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* SPECS TAB */}
          {activeTab === "specs" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-sm font-bold text-[#F4B400] uppercase tracking-wider">Itemized Engineering & Material Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.specifications.map((spec, idx) => (
                  <div key={idx} className="liquid-glass p-4 rounded-xl border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-[#F4B400] uppercase">{spec.category}</span>
                    <p className="text-sm text-white/90 font-medium">{spec.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Certifications & Standards Compliance</h4>
                <div className="flex flex-wrap gap-2">
                  {project.certifications.map((c, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 text-white/80 text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#F4B400]" /> {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TIMELINE TAB */}
          {activeTab === "timeline" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-sm font-bold text-[#F4B400] uppercase tracking-wider">Construction Milestone Roadmap</h3>
              <div className="space-y-3">
                {project.constructionProgress.map((item, idx) => (
                  <div key={idx} className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{item.phase}</span>
                        {item.completedDate && (
                          <span className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded">{item.completedDate}</span>
                        )}
                      </div>
                      <div className="w-full md:w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F4B400]" style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-bold text-[#F4B400] text-sm">{item.percentage}%</span>
                      <span className={`px-2.5 py-1 rounded font-semibold ${
                        item.status === "Done" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LANDMARKS TAB */}
          {activeTab === "landmarks" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-sm font-bold text-[#F4B400] uppercase tracking-wider">Location Connectivity & Key Landmarks</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.nearbyLandmarks.map((lm, idx) => (
                  <div key={idx} className="liquid-glass p-4 rounded-xl border border-white/10 space-y-1">
                    <span className="text-xs text-white/50 block">Landmark {idx + 1}</span>
                    <h4 className="text-sm font-bold text-white">{lm.name}</h4>
                    <span className="text-xs text-[#F4B400] font-semibold">{lm.distance} away</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
