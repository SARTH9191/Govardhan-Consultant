import { X, Check, Minus, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PACKAGE_TIERS } from "@/data/enterpriseData";

interface PackageCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageName: string) => void;
}

export function PackageCompareModal({ isOpen, onClose, onSelectPackage }: PackageCompareModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#121214] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#1c1c1f] to-black">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              Construction Packages Side-by-Side Matrix
              <span className="text-xs bg-[#F4B400] text-[#111111] font-bold px-2.5 py-0.5 rounded-full">
                5 Tiers
              </span>
            </h2>
            <p className="text-xs text-white/60 mt-1">
              Compare structural specifications, premium brands, and warranty inclusions across all tiers.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Table */}
        <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-3 text-xs uppercase tracking-wider text-white/50 w-1/5 sticky left-0 bg-[#121214]">Feature / Spec</th>
                {PACKAGE_TIERS.map((pkg) => (
                  <th key={pkg.id} className="p-3 text-center w-1/5 border-l border-white/5">
                    <div className="font-bold text-sm text-white">{pkg.name}</div>
                    <div className="text-base font-bold text-[#F4B400] mt-0.5">₹{pkg.pricePerSqFt.toLocaleString()}<span className="text-[10px] text-white/50 font-normal">/sq.ft.</span></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              
              {/* Row: Steel Grade */}
              <tr>
                <td className="p-3 font-semibold text-white/80 sticky left-0 bg-[#121214]">TMT Steel Grade</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">Fe500 Grade</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">Fe550D Primary</td>
                <td className="p-3 text-center border-l border-white/5 font-bold text-[#F4B400]">Fe550D Anti-Corrosion</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Post-Tensioned Monolithic</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Custom Bespoke Steel</td>
              </tr>

              {/* Row: Cement Grade */}
              <tr>
                <td className="p-3 font-semibold text-white/80 sticky left-0 bg-[#121214]">Cement Grade & Brand</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">Coromandel / ACC 53</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">UltraTech / Ambuja Weatherproof</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">UltraTech Super Green</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">UltraTech / ACC Plus</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Highest Strength Custom Mix</td>
              </tr>

              {/* Row: Ceiling Height */}
              <tr>
                <td className="p-3 font-semibold text-white/80 sticky left-0 bg-[#121214]">Ceiling Height</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">10 Feet</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">10.5 Feet</td>
                <td className="p-3 text-center border-l border-white/5 font-bold text-[#F4B400]">11 Feet</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">11.5 - 12 Feet</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">12.5 Feet Double-Height</td>
              </tr>

              {/* Row: Flooring Material */}
              <tr>
                <td className="p-3 font-semibold text-white/80 sticky left-0 bg-[#121214]">Flooring</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">Vitrified (24"x24") ₹55/sqft</td>
                <td className="p-3 text-center border-l border-white/5 text-white/70">Vitrified (48"x24") ₹85/sqft</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Vitrified Slab (6'x4') ₹160/sqft</td>
                <td className="p-3 text-center border-l border-white/5 font-bold text-[#F4B400]">Italian Statuario Marble ₹320/sqft</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Imported Rare Marble / Teak</td>
              </tr>

              {/* Row: Smart Home Automation */}
              <tr>
                <td className="p-3 font-semibold text-white/80 sticky left-0 bg-[#121214]">Smart Home Tech</td>
                <td className="p-3 text-center border-l border-white/5 text-white/40"><Minus className="h-4 w-4 mx-auto" /></td>
                <td className="p-3 text-center border-l border-white/5 text-white/40"><Minus className="h-4 w-4 mx-auto" /></td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Smart Wiring Ready</td>
                <td className="p-3 text-center border-l border-white/5 font-bold text-[#F4B400] flex items-center justify-center gap-1">
                  <Check className="h-4 w-4 text-[#F4B400]" /> Full KNX / Control4
                </td>
                <td className="p-3 text-center border-l border-white/5 font-bold text-[#F4B400] flex items-center justify-center gap-1">
                  <Check className="h-4 w-4 text-[#F4B400]" /> Complete Automation
                </td>
              </tr>

              {/* Row: Warranty */}
              <tr>
                <td className="p-3 font-semibold text-white/80 sticky left-0 bg-[#121214]">Structural Warranty</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">10 Years</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">10 Years</td>
                <td className="p-3 text-center border-l border-white/5 font-bold text-[#F4B400]">10 Years Contractual</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">10 Years + Concierge</td>
                <td className="p-3 text-center border-l border-white/5 text-white/90">Lifetime Concierge</td>
              </tr>

              {/* CTA Row */}
              <tr>
                <td className="p-3 sticky left-0 bg-[#121214]"></td>
                {PACKAGE_TIERS.map((pkg) => (
                  <td key={pkg.id} className="p-3 text-center border-l border-white/5">
                    <Button
                      onClick={() => {
                        onClose();
                        onSelectPackage(pkg.name);
                      }}
                      className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs w-full py-1.5"
                    >
                      Select {pkg.name.split(" ")[0]}
                    </Button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-white/10 bg-[#18181c] flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#F4B400]" />
            <span>All prices include 100+ Quality Measures & Price Lock Guarantee.</span>
          </div>
          <Button
            onClick={() => alert("Downloading Package Comparison Matrix (PDF)...")}
            variant="ghost"
            className="text-xs text-[#F4B400] hover:text-[#F4B400] gap-1 p-0 h-auto"
          >
            <Download className="h-3.5 w-3.5" /> Download Full Spec Sheet (PDF)
          </Button>
        </div>

      </div>
    </div>
  );
}
