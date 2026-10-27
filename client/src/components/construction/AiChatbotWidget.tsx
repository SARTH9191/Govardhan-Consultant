import { useState } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, Calendar, Calculator, ShieldCheck } from "lucide-react";
import { BRAND } from "@/data/content";

interface AiChatbotWidgetProps {
  onOpenLeadModal: () => void;
  onOpenSiteVisit: () => void;
}

export function AiChatbotWidget({ onOpenLeadModal, onOpenSiteVisit }: AiChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: `Hello! I am BuildCraft's AI Construction Concierge. How can I assist you with plot estimates, 100+ Quality Measures, RCC foundation in 6-12 months, or site visits across Solapur, Sangola, Mangalwedha & Pandharpur?`
    }
  ]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputMsg("");

    setTimeout(() => {
      let botReply = `Thank you for reaching out! BuildCraft provides turnkey luxury & enterprise construction with 120+ completed projects, 8+ years of engineering experience, 150+ master craftsmen, 120+ happy customers, and 100+ Quality Measures. RCC foundation delivered in 6 to 12 months. All enquiries are sent directly to gcs.gpr77@gmail.com and sarthp9191@gmail.com.`;

      if (text.toLowerCase().includes("cost") || text.toLowerCase().includes("price") || text.toLowerCase().includes("rate")) {
        botReply = `Our construction packages start at ₹1,699/sq.ft. for Basic, ₹1,999/sq.ft. for Classic, and ₹2,499/sq.ft. for Premium. Tap 'Get Instant Quote' to calculate your exact project budget!`;
      } else if (text.toLowerCase().includes("warranty") || text.toLowerCase().includes("guarantee")) {
        botReply = `We guarantee a 10-Year Structural Warranty, 100+ Quality Measures, and RCC foundation in 6 to 12 months with price-lock assurance.`;
      } else if (text.toLowerCase().includes("email") || text.toLowerCase().includes("contact") || text.toLowerCase().includes("enquiry")) {
        botReply = `You can email our engineering desk directly at gcs.gpr77@gmail.com (cc: sarthp9191@gmail.com) or click 'Send Enquiry' below.`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#F4B400] text-[#111111] font-bold p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 border-2 border-[#111111]"
        >
          <Bot className="h-6 w-6" />
          <span className="hidden md:inline text-xs uppercase tracking-wider font-extrabold pr-1">
            AI Assistant
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-[#161619] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col h-[460px] animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Top Bar */}
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-black via-[#1c1c20] to-black flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F4B400] text-[#111111] font-bold flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-xs">BuildCraft AI Concierge</h4>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online 24/7
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Action Chips */}
          <div className="p-2 border-b border-white/5 bg-white/5 flex gap-1.5 overflow-x-auto text-[10px]">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenLeadModal();
              }}
              className="bg-[#F4B400] text-[#111111] font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1"
            >
              <Calculator className="h-3 w-3" /> Get Instant Quote
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSiteVisit();
              }}
              className="bg-white/10 text-white font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1 hover:bg-white/20"
            >
              <Calendar className="h-3 w-3" /> Book Site Visit
            </button>
            <a
              href="mailto:gcs.gpr77@gmail.com?cc=sarthp9191@gmail.com&subject=Enquiry%20from%20BuildCraft%20Website"
              className="bg-amber-500/20 text-[#F4B400] border border-[#F4B400]/40 font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1 hover:bg-[#F4B400] hover:text-black transition-colors"
            >
              <Send className="h-3 w-3" /> Send Enquiry
            </a>
            <a
              href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 text-white font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1 hover:bg-emerald-500"
            >
              WhatsApp
            </a>
          </div>

          {/* Messages */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded bg-[#F4B400] text-[#111111] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                    BC
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#F4B400] text-[#111111] font-medium"
                      : "bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-white/10 bg-[#121214] flex gap-2">
            <input
              type="text"
              placeholder="Ask AI anything..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F4B400]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-[#F4B400] text-[#111111] font-bold hover:bg-[#F4B400]/90"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
