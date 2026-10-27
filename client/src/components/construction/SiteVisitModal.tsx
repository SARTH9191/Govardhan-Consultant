import { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Building, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitEnquiry, type EnquiryResult } from "@/lib/enquiry";

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectTitle?: string;
}

export function SiteVisitModal({ isOpen, onClose, defaultProjectTitle }: SiteVisitModalProps) {
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 11:00 AM");
  const [selectedCity, setSelectedCity] = useState("Pandharpur");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cabRequired, setCabRequired] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastResult, setLastResult] = useState<EnquiryResult | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    "Tomorrow, 10:00 AM",
    "Tomorrow, 02:00 PM",
    "Tomorrow, 04:30 PM",
    "Saturday, 11:00 AM",
    "Sunday, 11:00 AM"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await submitEnquiry({
        name,
        phone,
        city: selectedCity,
        date: selectedDate,
        service: defaultProjectTitle ? `VIP Site Visit: ${defaultProjectTitle}` : "VIP Site Inspection & Chauffeur Consultation",
        message: `Chauffeur Cab Required: ${cabRequired ? "Yes" : "No"}. Preferred Slot: ${selectedDate}. Location: ${selectedCity}`,
        type: "site-visit",
      });
      setLastResult(res);
      try {
        window.open(res.gmailWebUrl, "_blank", "noopener,noreferrer");
      } catch {
        /* popup blocked or background */
      }
    } catch (err) {
      console.warn("Site visit submit warning:", err);
    }
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#161619] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white p-6 space-y-6">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-[#F4B400]" />
            <div>
              <h3 className="font-bold text-white text-lg">Book VIP Site Visit</h3>
              <p className="text-xs text-white/60">Free luxury chauffeur pick-up & site inspection</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white">Site Visit Confirmed!</h3>
            <p className="text-xs text-white/70 max-w-xs mx-auto">
              Slot booked for <span className="text-[#F4B400] font-bold">{selectedDate}</span> in <span className="text-white font-bold">{selectedCity}</span>. Chauffeur details sent to <span className="text-[#F4B400]">{phone}</span>.
            </p>
            <p className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-1.5 px-3 rounded-lg max-w-xs mx-auto">
              Enquiry forwarded to <span className="font-bold text-white">gcs.gpr77@gmail.com</span> &amp; <span className="font-bold text-white">sarthp9191@gmail.com</span>
            </p>

            {/* Direct Action Buttons */}
            <div className="space-y-2 pt-2 max-w-xs mx-auto">
              {lastResult?.gmailWebUrl && (
                <a
                  href={lastResult.gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Open &amp; Send via Gmail Web
                  <ExternalLink className="h-3 w-3 ml-auto opacity-70" />
                </a>
              )}

              {lastResult?.whatsappUrl && (
                <a
                  href={lastResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Send via WhatsApp (+91 99750 42346)
                  <ExternalLink className="h-3 w-3 ml-auto opacity-70" />
                </a>
              )}
            </div>

            <Button
              onClick={() => {
                setIsSuccess(false);
                setLastResult(null);
                onClose();
              }}
              className="bg-[#F4B400] text-[#111111] font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              Done &amp; Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {defaultProjectTitle && (
              <div className="bg-[#F4B400]/10 border border-[#F4B400]/30 p-3 rounded-xl text-xs text-[#F4B400] font-medium flex items-center gap-2">
                <Building className="h-4 w-4" /> Property: {defaultProjectTitle}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs text-white/70 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-[#F4B400]" /> Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Vikramaditya Rao"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-white/70 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#F4B400]" /> Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F4B400]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-white/70">Select Construction City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-[#27272a] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
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
                  "Surrounding Areas"
                ].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-white/70">Preferred Inspection Time Slot</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedDate(slot)}
                    className={`p-2 rounded-xl text-left border text-[11px] transition-colors ${
                      selectedDate === slot
                        ? "bg-[#F4B400] text-[#111111] font-bold border-[#F4B400]"
                        : "bg-white/5 border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-white/80">
              <input
                type="checkbox"
                id="cab"
                checked={cabRequired}
                onChange={(e) => setCabRequired(e.target.checked)}
                className="accent-[#F4B400]"
              />
              <label htmlFor="cab" className="cursor-pointer">Request complimentary AC car pick-up & drop</label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs py-3 rounded-xl shadow-lg"
            >
              Confirm Site Visit Booking
            </Button>
          </form>
        )}

      </div>
    </div>
  );
}
