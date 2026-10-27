import { useState } from "react";
import { X, CheckCircle, Clock, Camera, FileText, Activity, ShieldCheck, Download, AlertCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getActiveSession } from "@/lib/authStorage";

interface LiveTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LiveTrackerModal({ isOpen, onClose }: LiveTrackerModalProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "milestones" | "qa" | "payments">("photos");

  if (!isOpen) return null;

  const session = getActiveSession();

  const projectDetails = {
    code: session?.projectId || "GC-PDP-SONAWANE",
    name: session?.projectName || "Sonawane Turnkey Residence & Commercial Project",
    client: session?.name || "Sonawane Family",
    location: "Pandharpur, Maharashtra",
    stage: "Superstructure Framing & Roof Slab Curing",
    overallProgress: 78,
    completionDate: "May 2026",
    supervisor: "Er. Govardhan (Lead Site Engineer)"
  };

  const milestones = [
    { title: "Soil SBC Testing & Foundation Excavation", date: "Jan 15, 2024", status: "Completed 100%", qa: "Passed (Pass ID #QC-901)" },
    { title: "RCC Footing & Anti-Termite Injection", date: "Mar 02, 2024", status: "Completed 100%", qa: "Passed (Pass ID #QC-914)" },
    { title: "Ground & 1st Floor Column Framing", date: "Jul 18, 2024", status: "Completed 100%", qa: "Passed (Pass ID #QC-930)" },
    { title: "Slab Concrete Curing & 28-Day Cube Test", date: "Nov 10, 2024", status: "Completed 100%", qa: "Passed (M25 Strength 31.2 MPa)" },
    { title: "Brickwork Masonry & Concealed Conduit Plumbing", date: "Jan 25, 2025", status: "In Progress (85%)", qa: "Auditing" },
    { title: "Italian Marble Flooring & Exterior Facade Glazing", date: "Upcoming", status: "Scheduled Apr 2025", qa: "Pending" }
  ];

  const dailyPhotos = [
    {
      title: "Roof Slab Steel & Shuttering Plates Inspection",
      date: "Today 10:30 AM",
      img: "/images/slab-reinforcement-steel.jpg",
      fallbackImg: "/images/slab-reinforcement-steel.jpg"
    },
    {
      title: "Column Shuttering & Rebar Alignment",
      date: "Yesterday 4:15 PM",
      img: "/images/column-shuttering-check.jpg",
      fallbackImg: "/images/column-shuttering-check.jpg"
    },
    {
      title: "Brickwork Masonry Plumbline Verification",
      date: "Feb 02, 2025",
      img: "/images/brickwork-plumbline-check.jpg",
      fallbackImg: "/images/brickwork-plumbline-check.jpg"
    },
    {
      title: "Sonawane Column Centreline Blueprint & Axis",
      date: "Jan 28, 2025",
      img: "/images/sonawane-column-centerline-plan.jpg",
      fallbackImg: "/images/sonawane-column-centerline-plan.jpg"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#141417] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#1c1c20] to-black">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Govardhan Consultant"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#F4B400] shadow-md shadow-[#F4B400]/30"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-lg">{projectDetails.name}</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                  <Activity className="h-3 w-3 animate-pulse" /> LIVE STREAM
                </span>
              </div>
              <p className="text-xs text-white/60">ID: {projectDetails.code} • Client: {projectDetails.client} • {projectDetails.location}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Metric Banner */}
        <div className="p-6 bg-white/5 border-b border-white/10 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <span className="text-xs text-white/50">Overall Construction Progress</span>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold text-[#F4B400]">{projectDetails.overallProgress}%</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#F4B400]" style={{ width: `${projectDetails.overallProgress}%` }} />
              </div>
            </div>
          </div>

          <div className="space-y-0.5">
            <span className="text-xs text-white/50">Current Active Stage</span>
            <span className="text-sm font-bold text-white block truncate">{projectDetails.stage}</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-xs text-white/50">Target Handover</span>
            <span className="text-sm font-bold text-white block">{projectDetails.completionDate}</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-xs text-white/50">On-Site Lead Supervisor</span>
            <span className="text-xs font-semibold text-[#F4B400] block truncate">{projectDetails.supervisor}</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-2 bg-[#18181c] overflow-x-auto">
          {[
            { id: "photos", label: "Daily 4K Site Photos", icon: Camera },
            { id: "milestones", label: "Stage Milestones", icon: CheckCircle },
            { id: "qa", label: "QA Checkpoint Sign-Offs", icon: ShieldCheck },
            { id: "payments", label: "Escrow Milestone Payments", icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#F4B400] text-[#111111] font-bold"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* PHOTOS TAB */}
          {activeTab === "photos" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Site Drone & Camera Upload Feed (Updated Daily at 06:00 PM)</span>
                <span className="text-[#F4B400] font-semibold">4 High-Res Stream Items</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dailyPhotos.map((photo, idx) => (
                  <div key={idx} className="liquid-glass rounded-xl overflow-hidden border border-white/10 space-y-2 p-3">
                    <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 bg-[#1e1e24]">
                      <img
                        src={photo.img}
                        alt={photo.title}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.src !== photo.fallbackImg) {
                            target.src = photo.fallbackImg;
                          }
                        }}
                        className="w-full h-full object-cover block opacity-95"
                      />
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                        {photo.date}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">{photo.title}</span>
                      <button
                        onClick={() => alert(`Viewing High-Res Image: ${photo.title}`)}
                        className="text-[#F4B400] hover:underline text-[11px] font-semibold"
                      >
                        Inspect 4K
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MILESTONES TAB */}
          {activeTab === "milestones" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              {milestones.map((m, idx) => (
                <div key={idx} className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-sm">{m.title}</h4>
                    <span className="text-white/50 block">Target: {m.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#F4B400] font-mono">{m.qa}</span>
                    <span className={`px-2.5 py-1 rounded font-bold ${
                      m.status.includes("100%") ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* QA TAB */}
          {activeTab === "qa" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between">
                <span>100+ / 100+ Total Safety & Quality Measures Approved to Date</span>
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="liquid-glass p-4 rounded-xl border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-white border-b border-white/10 pb-2">
                  <span>Last Inspection: 28-Day Concrete Cube Compression Test</span>
                  <span className="text-[#F4B400]">PASSED (31.2 MPa)</span>
                </div>
                <p className="text-white/70">
                  Sampled at slab pour on Nov 10, 2024. Crushing test performed under independent NABL certified laboratory press. Certificate #NABL-BC-9042 attached.
                </p>
              </div>
            </div>
          )}

          {/* PAYMENTS TAB */}
          {activeTab === "payments" && (
            <div className="space-y-3 animate-in fade-in duration-200 text-xs">
              <div className="liquid-glass p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white">Escrow Stage 3: Superstructure Completion</h4>
                  <span className="text-white/50">Amount: ₹18.5 Lakhs (Pending Final Glazing Audit)</span>
                </div>
                <span className="bg-amber-500/20 text-amber-400 font-bold px-3 py-1 rounded">
                  Held in Escrow
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
