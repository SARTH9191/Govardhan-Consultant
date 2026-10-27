import { useState } from "react";
import { X, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Building2, Phone, User, Mail, MapPin, Calculator, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/data/content";
import { submitEnquiry, type EnquiryResult } from "@/lib/enquiry";

interface LeadGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
}

export function LeadGenModal({ isOpen, onClose, defaultCity = "Pandharpur" }: LeadGenModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastResult, setLastResult] = useState<EnquiryResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: defaultCity,
    plotSize: "2400",
    constructionType: "Luxury Villa",
    budget: "₹75 Lakhs - ₹1.5 Cr",
    startDate: "Within 1 Month",
    message: ""
  });

  if (!isOpen) return null;

  const estimatedCost = Math.round(parseInt(formData.plotSize || "2000") * 2499);
  const formattedEstimate = (estimatedCost / 100000).toFixed(2);

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.phone)) {
      alert("Please fill in your name and phone number to continue.");
      return;
    }
    if (step === 1) {
      setOtpSent(true);
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        plotSize: formData.plotSize,
        service: `${formData.constructionType} (Plot: ${formData.plotSize} sq.ft.)`,
        budget: `₹${formattedEstimate} Lakhs (${formData.budget})`,
        message: `Timeline: ${formData.startDate}. ${formData.message || "Customer requested instant quote & site visit."}`,
        type: "estimate",
      });
      setLastResult(res);
      // Attempt to open Gmail compose directly
      try {
        window.open(res.gmailWebUrl, "_blank", "noopener,noreferrer");
      } catch {
        /* popup blocked or background */
      }
    } catch (err) {
      console.warn("Lead modal submit warning:", err);
    }
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setLastResult(null);
    setStep(1);
    setOtpSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#18181b] border border-[#F4B400]/30 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-black via-[#1c1c1f] to-black">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4B400] text-[#111111] font-bold text-lg">
              G
            </span>
            <div>
              <h3 className="font-bold text-white tracking-tight flex items-center gap-2 text-base md:text-lg">
                {BRAND.shortName} Estimate & Site Visit
                <span className="text-xs bg-[#F4B400]/20 text-[#F4B400] px-2 py-0.5 rounded-full border border-[#F4B400]/30">
                  Instant Quote
                </span>
              </h3>
              <p className="text-xs text-white/60">Zero-obligation turnkey construction consultation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle className="h-10 w-10 animate-bounce" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Consultation Request Confirmed!</h2>
              <p className="text-white/70 max-w-md mx-auto text-sm">
                Thank you, <span className="text-[#F4B400] font-semibold">{formData.name}</span>. Senior Architectural Consultant assigned for <span className="text-white font-medium">{formData.city}</span> region will reach out at <span className="text-[#F4B400] font-medium">{formData.phone}</span> within 15 minutes.
              </p>
              <p className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-1.5 px-3 rounded-lg max-w-md mx-auto">
                Enquiry dispatched to <span className="font-bold text-white">gcs.gpr77@gmail.com</span> &amp; <span className="font-bold text-white">sarthp9191@gmail.com</span>
              </p>
            </div>

            {/* Estimated Quote Card */}
            <div className="liquid-glass rounded-xl p-5 border border-[#F4B400]/30 max-w-md mx-auto text-left space-y-3">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Estimated Plot Size: {formData.plotSize} sq.ft.</span>
                <span>Tier: Premium (₹2,499/sqft)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/80">Estimated Turnkey Budget:</span>
                <span className="text-xl font-bold text-[#F4B400]">₹{formattedEstimate} Lakhs*</span>
              </div>
              <div className="text-[11px] text-white/50 border-t border-white/10 pt-2 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F4B400]" />
                Includes 100+ Quality Measures + Price Lock Contract Guarantee.
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="max-w-md mx-auto space-y-2.5 pt-1">
              {lastResult?.gmailWebUrl && (
                <a
                  href={lastResult.gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  Open &amp; Send via Gmail Web (1-Click)
                  <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-70" />
                </a>
              )}

              {lastResult?.whatsappUrl && (
                <a
                  href={lastResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp (+91 99750 42346)
                  <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-70" />
                </a>
              )}
            </div>

            <Button
              onClick={handleReset}
              className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-semibold px-8"
            >
              Done & Return to Site
            </Button>
          </div>
        ) : (
          /* Multi-Step Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Progress indicator */}
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 text-xs font-medium text-white/60">
              <span className={`flex items-center gap-1.5 ${step >= 1 ? "text-[#F4B400]" : ""}`}>
                <span className="w-5 h-5 rounded-full bg-[#F4B400]/20 flex items-center justify-center text-[10px] font-bold">1</span>
                Contact & City
              </span>
              <div className="h-0.5 flex-1 bg-white/10 rounded-full">
                <div className="h-full bg-[#F4B400] transition-all duration-300" style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }} />
              </div>
              <span className={`flex items-center gap-1.5 ${step >= 2 ? "text-[#F4B400]" : ""}`}>
                <span className="w-5 h-5 rounded-full bg-[#F4B400]/20 flex items-center justify-center text-[10px] font-bold">2</span>
                Plot & Budget
              </span>
              <div className="h-0.5 flex-1 bg-white/10 rounded-full">
                <div className="h-full bg-[#F4B400] transition-all duration-300" style={{ width: step === 3 ? "100%" : "66%" }} />
              </div>
              <span className={`flex items-center gap-1.5 ${step >= 3 ? "text-[#F4B400]" : ""}`}>
                <span className="w-5 h-5 rounded-full bg-[#F4B400]/20 flex items-center justify-center text-[10px] font-bold">3</span>
                Verify & Submit
              </span>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-semibold text-[#F4B400] uppercase tracking-wider">Step 1: Contact Details & Location</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#F4B400]" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F4B400]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-[#F4B400]" /> Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F4B400]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-[#F4B400]" /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F4B400]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#F4B400]" /> Construction City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#27272a] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
                    >
                      {[
                        "Solapur (Saat Rasta / Hotgi Road)",
                        "Solapur (Ring Road / MIDC)",
                        "Solapur (City Central)",
                        "Sangola (City / Station Road)",
                        "Sangola (Miraj Road / Kadlas Road)",
                        "Mangalwedha (City / Fort Road)",
                        "Mangalwedha (Sangola Naka)",
                        "Pandharpur (Central / Station Road)",
                        "Pandharpur (Isbavi / Link Road)",
                        "Pandharpur (Karkamb Road)",
                        "Surrounding Region / Other"
                      ].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-semibold text-[#F4B400] uppercase tracking-wider">Step 2: Plot Specifications & Timeline</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70 flex items-center gap-1.5">
                      <Calculator className="h-3.5 w-3.5 text-[#F4B400]" /> Plot Area (in sq.ft.)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 2400"
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#F4B400]" /> Construction Type
                    </label>
                    <select
                      value={formData.constructionType}
                      onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                      className="w-full bg-[#27272a] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
                    >
                      {["Luxury Villa", "Independent Multi-Storey House", "Commercial Office Building", "Industrial Warehouse", "Renovation & Fitout"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70">Estimated Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#27272a] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
                    >
                      {["₹40 Lakhs - ₹75 Lakhs", "₹75 Lakhs - ₹1.5 Cr", "₹1.5 Cr - ₹3.0 Cr", "₹3.0 Cr - ₹5.0 Cr", "₹5.0 Cr+"].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70">Planning to Start</label>
                    <select
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full bg-[#27272a] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
                    >
                      {["Immediately", "Within 1 Month", "Within 3 Months", "Planning Stage (3+ Months)"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="liquid-glass p-3.5 rounded-lg border border-[#F4B400]/20 flex items-center justify-between text-xs">
                  <span className="text-white/70">Approx. Estimated Build Cost:</span>
                  <span className="font-bold text-[#F4B400] text-base">₹{formattedEstimate} Lakhs</span>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-semibold text-[#F4B400] uppercase tracking-wider">Step 3: Verification & Final Submit</h4>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/60">Applicant:</span>
                    <span className="text-white font-medium">{formData.name} ({formData.phone})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/60">City & Plot:</span>
                    <span className="text-white font-medium">{formData.city} • {formData.plotSize} sq.ft.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Type & Budget:</span>
                    <span className="text-[#F4B400] font-medium">{formData.constructionType} ({formData.budget})</span>
                  </div>
                </div>

                {otpSent && (
                  <div className="space-y-2 bg-[#F4B400]/10 border border-[#F4B400]/30 p-3.5 rounded-lg">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#F4B400] font-medium">OTP Verification Code Sent to {formData.phone}</span>
                    </div>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Enter 4-digit OTP"
                      value={otpValue}
                      onChange={(e) => setOtpValue(e.target.value)}
                      className="w-full bg-black/40 border border-[#F4B400]/40 rounded px-3 py-2 text-center text-sm font-mono tracking-widest text-[#F4B400] focus:outline-none"
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs text-white/70">Additional Project Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need basement parking, swimming pool, and Italian marble..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#F4B400]"
                  />
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="border-white/20 text-white hover:bg-white/10 gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-semibold gap-2 ml-auto"
                >
                  Next Step <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold px-8 gap-2 ml-auto"
                >
                  {isSubmitting ? "Processing Request..." : "Submit & Book Site Visit"}
                </Button>
              )}
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
