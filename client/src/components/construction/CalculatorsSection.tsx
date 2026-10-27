import { useState } from "react";
import { Calculator, Download, Sparkles, Building2, DollarSign, Calendar, Sliders, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalculatorsSectionProps {
  onBookConsultation: () => void;
}

export function CalculatorsSection({ onBookConsultation }: CalculatorsSectionProps) {
  const [activeTab, setActiveTab] = useState<"cost" | "emi" | "area">("cost");

  // Cost Calculator State
  const [plotArea, setPlotArea] = useState<number>(2400);
  const [floors, setFloors] = useState<number>(2);
  const [pkgTier, setPkgTier] = useState<number>(2499); // Premium default
  const [city] = useState("Pandharpur, Maharashtra");

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // Calculations
  const totalBuiltUpArea = plotArea * floors;
  const totalCost = totalBuiltUpArea * pkgTier;
  const formattedTotalCost = (totalCost / 100000).toFixed(2); // In Lakhs

  // EMI Calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  return (
    <section id="calculators" className="py-24 bg-[#0d0d0f] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4B400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full">
            <MapPin className="h-4 w-4 text-[#F4B400]" /> Pandharpur Construction Financial Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Pandharpur Turnkey Cost &amp; EMI Calculator
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Real-time turnkey construction estimates and home loan calculations tailored specifically for Pandharpur, Solapur District, Maharashtra.
          </p>

          {/* Tab Switchers */}
          <div className="flex justify-center gap-2 pt-4">
            {[
              { id: "cost", label: "Turnkey Cost Estimator" },
              { id: "emi", label: "Home Loan EMI Calculator" },
              { id: "area", label: "Timeline & Area Estimator" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#F4B400] text-[#111111] shadow-lg shadow-[#F4B400]/20"
                    : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CALCULATOR PANELS */}
        <div className="max-w-4xl mx-auto">
          
          {/* COST CALCULATOR */}
          {activeTab === "cost" && (
            <div className="liquid-glass rounded-2xl p-6 md:p-10 border border-[#F4B400]/30 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              
              {/* Inputs (7 cols) */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Location indicator */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#F4B400] bg-[#F4B400]/10 border border-[#F4B400]/30 px-3 py-1.5 rounded-xl w-fit">
                  <MapPin className="h-3.5 w-3.5" /> Pandharpur, Maharashtra Rates
                </div>
                
                {/* Plot Area Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70 font-semibold">Plot Area:</span>
                    <span className="text-[#F4B400] font-bold text-sm">{plotArea.toLocaleString()} sq.ft.</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={plotArea}
                    onChange={(e) => setPlotArea(Number(e.target.value))}
                    className="w-full accent-[#F4B400] bg-white/10 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-mono">
                    <span>1,000 sq.ft.</span>
                    <span>10,000 sq.ft.</span>
                  </div>
                </div>

                {/* Number of Floors Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70 font-semibold">Number of Floors:</span>
                    <span className="text-[#F4B400] font-bold text-sm">G + {floors - 1} ({floors} Floors)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full accent-[#F4B400] bg-white/10 rounded cursor-pointer"
                  />
                </div>

                {/* Package Tier Selection */}
                <div className="space-y-2">
                  <span className="text-xs text-white/70 font-semibold block">Quality Package Tier:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "Classic", rate: 1999 },
                      { name: "Premium", rate: 2499 },
                      { name: "Luxury", rate: 3299 }
                    ].map((p) => (
                      <button
                        key={p.rate}
                        onClick={() => setPkgTier(p.rate)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                          pkgTier === p.rate
                            ? "bg-[#F4B400] text-[#111111] border-[#F4B400]"
                            : "bg-white/5 border-white/10 text-white/80 hover:text-white"
                        }`}
                      >
                        <div>{p.name}</div>
                        <div className="text-[10px] font-normal opacity-80">₹{p.rate}/sqft</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Result Summary Box (5 cols) */}
              <div className="md:col-span-5 bg-gradient-to-b from-[#1c1c20] to-black p-6 rounded-2xl border border-[#F4B400]/40 space-y-6 text-center">
                <div className="space-y-1">
                  <span className="text-xs text-white/50 uppercase tracking-wider block">Total Built-Up Area</span>
                  <span className="text-xl font-bold text-white">{totalBuiltUpArea.toLocaleString()} sq.ft.</span>
                </div>

                <div className="space-y-1 border-t border-b border-white/10 py-4">
                  <span className="text-xs text-[#F4B400] uppercase font-bold tracking-wider block">Estimated Turnkey Cost</span>
                  <span className="text-3xl font-extrabold text-[#F4B400]">₹{formattedTotalCost} Lakhs*</span>
                  <span className="text-[10px] text-white/50 block">Includes 100+ Quality Measures + Price Lock</span>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={onBookConsultation}
                    className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs py-3 rounded-xl gap-2"
                  >
                    Lock Estimate & Book Visit <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => alert(`Generating itemized PDF quote for ${totalBuiltUpArea} sq.ft. in ${city}...`)}
                    variant="ghost"
                    className="w-full text-xs text-white/70 hover:text-white gap-1.5"
                  >
                    <Download className="h-3.5 w-3.5" /> Download Itemized Quote PDF
                  </Button>
                </div>
              </div>

            </div>
          )}

          {/* EMI CALCULATOR */}
          {activeTab === "emi" && (
            <div className="liquid-glass rounded-2xl p-6 md:p-10 border border-[#F4B400]/30 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              <div className="md:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70 font-semibold">Home Loan Amount:</span>
                    <span className="text-[#F4B400] font-bold text-sm">₹{(loanAmount / 100000).toFixed(2)} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="30000000"
                    step="500000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#F4B400] bg-white/10 rounded cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70 font-semibold">Annual Interest Rate (%):</span>
                    <span className="text-[#F4B400] font-bold text-sm">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7.0"
                    max="12.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#F4B400] bg-white/10 rounded cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/70 font-semibold">Tenure (Years):</span>
                    <span className="text-[#F4B400] font-bold text-sm">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-[#F4B400] bg-white/10 rounded cursor-pointer"
                  />
                </div>

              </div>

              <div className="md:col-span-5 bg-gradient-to-b from-[#1c1c20] to-black p-6 rounded-2xl border border-[#F4B400]/40 space-y-6 text-center">
                <div className="space-y-1">
                  <span className="text-xs text-white/50 uppercase tracking-wider block">Estimated Monthly EMI</span>
                  <span className="text-3xl font-extrabold text-[#F4B400]">₹{emi.toLocaleString()}</span>
                  <span className="text-[10px] text-white/50 block">/ Month</span>
                </div>

                <Button
                  onClick={onBookConsultation}
                  className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs py-3 rounded-xl"
                >
                  Apply with Banking Partners
                </Button>
              </div>
            </div>
          )}

          {/* AREA & TIMELINE TAB */}
          {activeTab === "area" && (
            <div className="liquid-glass rounded-2xl p-6 md:p-10 border border-[#F4B400]/30 shadow-2xl text-center space-y-6 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-white">Estimated Project Execution Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-white/50">Planning & BIM Approval</span>
                  <span className="text-lg font-bold text-[#F4B400] block">3 - 4 Weeks</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-white/50">RCC Foundation & Framing</span>
                  <span className="text-lg font-bold text-[#F4B400] block">6 - 12 Months</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-white/50">Finishes & Key Handover</span>
                  <span className="text-lg font-bold text-[#F4B400] block">3 - 4 Months</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
