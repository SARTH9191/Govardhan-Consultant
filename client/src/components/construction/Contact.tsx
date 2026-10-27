import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Loader2, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAND, SERVICES } from "@/data/content";
import { ScrollReveal } from "./ScrollReveal";
import { submitEnquiry, type EnquiryResult, PRIMARY_ENQUIRY_EMAIL, SECONDARY_ENQUIRY_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";

const CITIES = [
  "Solapur",
  "Pandharpur",
  "Sangola",
  "Mangalwedha",
];

const BUDGET_RANGES = [
  "Under ₹50 Lakh",
  "₹50 Lakh – ₹1 Cr",
  "₹1 Cr – ₹5 Cr",
  "₹5 Cr – ₹25 Cr",
  "Above ₹25 Cr",
];

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(2, "Please share a few details about your project"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastResult, setLastResult] = useState<EnquiryResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { 
      city: "Solapur", 
      service: "Turnkey Residential Construction", 
      budget: "₹50 Lakh – ₹1 Cr",
      message: ""
    },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const result = await submitEnquiry({
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city || "Solapur",
        service: data.service || "Turnkey Residential Construction",
        budget: data.budget || "₹50 Lakh – ₹1 Cr",
        message: data.message,
        type: "contact",
      });
      setLastResult(result);
      setSubmitted(true);

      // Attempt to directly open Gmail Web in a new tab for 1-click delivery
      try {
        window.open(result.gmailWebUrl, "_blank", "noopener,noreferrer");
      } catch {
        /* popup blocked or background fallback */
      }
    } catch (e) {
      console.error("Enquiry submission error:", e);
      setSubmitted(true);
    }
  };

  const handleCopy = () => {
    if (lastResult?.body) {
      navigator.clipboard.writeText(lastResult.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setLastResult(null);
    reset();
  };

  return (
    <section id="contact" className="relative bg-[#111111] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Info column */}
          <ScrollReveal className="lg:col-span-2">
            <span className="text-[#F4B400] font-semibold tracking-wide uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              Let's Build Something Great Together
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Share your project details. All enquiries are dispatched directly to our engineering desk at{" "}
              <span className="text-[#F4B400] font-semibold">{PRIMARY_ENQUIRY_EMAIL}</span> and{" "}
              <span className="text-[#F4B400] font-semibold">{SECONDARY_ENQUIRY_EMAIL}</span>.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4B400]/15 text-[#F4B400] flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Call / WhatsApp</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-white font-medium hover:text-[#F4B400]">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4B400]/15 text-[#F4B400] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Primary Enquiry Email</p>
                  <a
                    href={`mailto:${PRIMARY_ENQUIRY_EMAIL}?cc=${SECONDARY_ENQUIRY_EMAIL}`}
                    className="text-white font-medium hover:text-[#F4B400] transition-colors"
                  >
                    {PRIMARY_ENQUIRY_EMAIL}
                  </a>
                  <p className="text-[11px] text-[#F4B400]/80">Cc: {SECONDARY_ENQUIRY_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4B400]/15 text-[#F4B400] flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Operational Hubs</p>
                  <p className="text-white font-medium">Solapur • Pandharpur • Sangola • Mangalwedha</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal delay={150} className="lg:col-span-3">
            {!submitted ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="liquid-glass border border-white/10 rounded-2xl p-6 md:p-8 space-y-4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Full Name *</label>
                    <Input
                      placeholder="e.g. Sarthak Pawar"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Mobile Number *</label>
                    <Input
                      placeholder="e.g. 99750 42346"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Construction City *</label>
                    <Select
                      value={watch("city")}
                      onValueChange={(v) => setValue("city", v)}
                    >
                      <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-11">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        {CITIES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Service Needed</label>
                    <Select
                      value={watch("service")}
                      onValueChange={(v) => setValue("service", v)}
                    >
                      <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-11">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.title} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Estimated Budget</label>
                    <Select
                      value={watch("budget")}
                      onValueChange={(v) => setValue("budget", v)}
                    >
                      <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-11">
                        <SelectValue placeholder="Select Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_RANGES.map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/60 mb-1 block">Project Requirements *</label>
                  <Textarea
                    placeholder="Tell us about your plot size, floors, or specific requirements..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F4B400] hover:bg-[#F4B400]/90 text-[#111111] font-bold py-3 text-base border-none transition-all duration-200 hover:shadow-lg hover:shadow-[#F4B400]/30 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Enquiry to Engineering Desk
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-center text-white/50">
                  Enquiry automatically delivered to <span className="text-[#F4B400] font-semibold">{PRIMARY_ENQUIRY_EMAIL}</span> &amp; <span className="text-[#F4B400] font-semibold">{SECONDARY_ENQUIRY_EMAIL}</span>
                </p>
              </form>
            ) : (
              /* Success & Interactive Dispatch Actions Panel */
              <div className="liquid-glass border border-emerald-500/40 rounded-2xl p-6 md:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/40">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Enquiry Dispatched Successfully!</h3>
                    <p className="text-xs text-white/70 mt-1">
                      Your enquiry has been logged for <span className="text-[#F4B400] font-semibold">{PRIMARY_ENQUIRY_EMAIL}</span> &amp; <span className="text-[#F4B400] font-semibold">{SECONDARY_ENQUIRY_EMAIL}</span>.
                    </p>
                  </div>
                </div>

                {/* 1-Click Action Buttons */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Confirm / Send via your preferred app:
                  </p>

                  {/* Gmail Web 1-Click Button */}
                  {lastResult?.gmailWebUrl && (
                    <a
                      href={lastResult.gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all shadow-lg shadow-red-600/20 hover:scale-[1.01]"
                    >
                      <Mail className="h-4 w-4" />
                      Open &amp; Send in Gmail Web (1-Click)
                      <ExternalLink className="h-3.5 w-3.5 opacity-70 ml-auto" />
                    </a>
                  )}

                  {/* WhatsApp Button */}
                  {lastResult?.whatsappUrl && (
                    <a
                      href={lastResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.01]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp to +91 99750 42346
                      <ExternalLink className="h-3.5 w-3.5 opacity-70 ml-auto" />
                    </a>
                  )}

                  {/* Default Mail Client Button */}
                  {lastResult?.mailtoUrl && (
                    <a
                      href={lastResult.mailtoUrl}
                      className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#F4B400]" />
                      Open in Outlook / Default Mail App
                    </a>
                  )}

                  {/* Copy Details Button */}
                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium text-xs transition-all border border-white/10"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Enquiry Text Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy Formatted Enquiry Details
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-white/50">Our engineering desk will contact you within 15 minutes.</span>
                  <button
                    onClick={handleReset}
                    className="text-[#F4B400] hover:underline font-semibold"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
