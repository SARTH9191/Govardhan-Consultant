import { Download, FileText, ShieldCheck, Award, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadCenterSection() {
  const documents = [
    { title: "BuildCraft Corporate Brochure 2025-26", size: "14.2 MB", type: "PDF Report", desc: "Turnkey project portfolio, enterprise capabilities, and executive team profile." },
    { title: "Construction Package Specifications Matrix", size: "4.8 MB", type: "PDF Specs", desc: "Detailed breakdown of Basic, Classic, Premium, Luxury & Ultra-Luxury tiers." },
    { title: "470+ Quality Checkpoints Audit Manual", size: "8.5 MB", type: "PDF Manual", desc: "Complete testing standards, soil SBC thresholds, and concrete slump test rules." },
    { title: "ISO 9001:2015 & OHSAS Certificates", size: "2.1 MB", type: "PDF Cert", desc: "Official quality management and zero-harm workplace safety compliance certs." }
  ];

  return (
    <section id="download-center" className="py-20 bg-[#0e0e11] text-white border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full mb-3">
              <Download className="h-4 w-4 text-[#F4B400]" /> Resource Library
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Enterprise Download Center
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              Access official company brochures, package matrices, quality manuals, and ISO certificates in high-resolution PDF format.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-[#F4B400]/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F4B400]/10 border border-[#F4B400]/30 flex items-center justify-center text-[#F4B400] group-hover:scale-110 transition-transform">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] bg-white/10 text-white/70 font-mono px-2 py-0.5 rounded">{doc.type} • {doc.size}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#F4B400] transition-colors mt-2">{doc.title}</h3>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">{doc.desc}</p>
                </div>
              </div>

              <Button
                onClick={() => alert(`Downloading Official PDF: ${doc.title}...`)}
                className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs py-2.5 rounded-xl gap-2"
              >
                <Download className="h-4 w-4" /> Download PDF
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
