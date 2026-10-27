import { useState } from "react";
import { Activity, Camera, ShieldCheck, ArrowRight, Smartphone, Eye, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveTrackerModal } from "./LiveTrackerModal";

export function LiveTrackerSection() {
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);

  return (
    <section id="live-tracker" className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#F4B400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full">
              <Activity className="h-4 w-4 animate-pulse" /> Client Dashboard Portal
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Track Your Construction Project <span className="text-[#F4B400]">In Real-Time</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed">
              No more unannounced site visits or guess-work. Our enterprise <span className="text-white font-semibold">Live Construction Tracker</span> provides daily 4K drone updates, concrete lab test certificates, and milestone sign-offs straight to your smartphone.
            </p>

            {/* Feature bullets */}
            <div className="space-y-3 pt-2">
              {[
                "Daily 4K drone & site supervisor photography at 06:00 PM",
                "28-Day Concrete cube compressive strength lab reports uploaded",
                "Escrow funds released only after QA pass verification",
                "Direct 1-click WhatsApp connect with Lead Site Supervisor"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[#F4B400] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => setIsTrackerOpen(true)}
                className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-sm px-7 py-3 rounded-xl gap-2 shadow-lg shadow-[#F4B400]/20"
              >
                <Eye className="h-4 w-4" /> Launch Interactive Live Tracker
              </Button>
            </div>
          </div>

          {/* Right Visual Dashboard Mock */}
          <div className="relative">
            <div className="liquid-glass rounded-2xl p-6 border border-[#F4B400]/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4B400] text-[#111111] font-bold flex items-center justify-center">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Site #GC-PDP-2026-V1</h4>
                    <span className="text-xs text-[#F4B400] font-medium">Sonawane Residence, Pandharpur, Maharashtra</span>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
                  <Activity className="h-3 w-3 animate-pulse" /> 78% COMPLETE
                </span>
              </div>

              {/* Progress meters */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-white/70">Superstructure & Glazing Stage</span>
                  <span className="text-[#F4B400]">85%</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F4B400]" style={{ width: "85%" }} />
                </div>
              </div>

              {/* Sample Photo */}
              <div className="relative h-56 rounded-xl overflow-hidden border border-white/10 group">
                <img
                  src="/images/completed-commercial-residence.jpg"
                  alt="Daily Site Capture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Camera className="h-4 w-4 text-[#F4B400]" /> Today's Drone Inspection
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded text-white/70 font-mono text-[10px]">06:00 PM Upload</span>
                </div>
              </div>

              {/* Footer CTA inside mock */}
              <button
                onClick={() => setIsTrackerOpen(true)}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-[#F4B400] flex items-center justify-center gap-1.5 transition-colors"
              >
                Inspect Full Milestone Logs & Lab Reports <ArrowRight className="h-4 w-4" />
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* Full Modal */}
      <LiveTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />
    </section>
  );
}
