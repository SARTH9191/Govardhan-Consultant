import { useState } from "react";
import { Briefcase, MapPin, CheckCircle2, ArrowRight, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAREER_JOBS, CareerJob } from "@/data/enterpriseData";

export function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [applied, setApplied] = useState(false);

  return (
    <section id="careers" className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full mb-3">
              <Briefcase className="h-4 w-4 text-[#F4B400]" /> Join India's Premier Construction Platform
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Career Opportunities
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              We are expanding across 10 regional hubs. Build your engineering, architectural, or project management career with BuildCraft.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAREER_JOBS.map((job) => (
            <div
              key={job.id}
              className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-[#F4B400]/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] bg-[#F4B400]/20 text-[#F4B400] font-bold px-2.5 py-0.5 rounded border border-[#F4B400]/30 uppercase">
                    {job.department}
                  </span>
                  <span className="text-xs text-white/50">{job.type} • {job.experience}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-[#F4B400] transition-colors">{job.title}</h3>
                <span className="text-xs text-[#F4B400] font-medium flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {job.location}
                </span>
                <p className="text-xs text-white/70 leading-relaxed pt-1">{job.description}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                <Button
                  onClick={() => {
                    setSelectedJob(job);
                    setApplied(false);
                  }}
                  className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs px-5 py-2 rounded-xl gap-1.5"
                >
                  Apply For Role <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#161619] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <h3 className="font-bold text-white text-base">Apply: {selectedJob.title}</h3>
                <span className="text-xs text-white/50">{selectedJob.department} • {selectedJob.location}</span>
              </div>
              <button onClick={() => setSelectedJob(null)} className="p-1.5 text-white/70 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {applied ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-lg text-white">Application Received!</h4>
                <p className="text-xs text-white/70">Our Talent Acquisition team will contact you within 48 hours.</p>
                <Button onClick={() => setSelectedJob(null)} className="bg-[#F4B400] text-[#111111] font-bold text-xs px-6 py-2 rounded-xl">Close</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-3 text-xs">
                <input required placeholder="Your Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#F4B400]" />
                <input required type="email" placeholder="Your Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#F4B400]" />
                <input required type="tel" placeholder="Mobile Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#F4B400]" />
                
                <div className="border border-dashed border-white/20 p-4 rounded-xl text-center space-y-1 bg-white/5">
                  <Upload className="h-6 w-6 text-[#F4B400] mx-auto" />
                  <span className="block text-white/70">Upload Resume (PDF / DOCX)</span>
                  <span className="text-[10px] text-white/40">Max file size 10MB</span>
                </div>

                <Button type="submit" className="w-full bg-[#F4B400] text-[#111111] font-bold text-xs py-3 rounded-xl">Submit Application</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
