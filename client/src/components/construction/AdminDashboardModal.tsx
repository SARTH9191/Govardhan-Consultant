import { useState } from "react";
import { X, Users, Building, ShieldCheck, DollarSign, Activity, Search, Filter, Plus, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADMIN_DEMO_DATA } from "@/data/enterpriseData";

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminDashboardModal({ isOpen, onClose }: AdminDashboardModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filteredLeads = ADMIN_DEMO_DATA.recentLeads.filter((ld) =>
    ld.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ld.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ld.package.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#121215] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#1a1a1e] to-black">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Govardhan Consultant"
              className="h-10 w-10 rounded-full object-cover border-2 border-[#F4B400] shadow-md shadow-[#F4B400]/20"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-lg">Govardhan Consultant Admin Console</h3>
                <span className="text-[10px] bg-[#F4B400]/20 text-[#F4B400] font-bold px-2 py-0.5 rounded border border-[#F4B400]/30">
                  PANDHARPUR HQ
                </span>
              </div>
              <p className="text-xs text-white/60">Pandharpur live site pipelines, QA compliance & material inventory</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Executive Stats Cards */}
        <div className="p-6 bg-white/5 border-b border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="liquid-glass p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">Active Consultation Leads</span>
            <span className="text-2xl font-bold text-[#F4B400]">{ADMIN_DEMO_DATA.totalActiveLeads}</span>
          </div>
          <div className="liquid-glass p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">Ongoing Active Sites</span>
            <span className="text-2xl font-bold text-white">{ADMIN_DEMO_DATA.ongoingSites}</span>
          </div>
          <div className="liquid-glass p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">100+ QA Measures Audit Score</span>
            <span className="text-2xl font-bold text-emerald-400">{ADMIN_DEMO_DATA.qualityPassRate}</span>
          </div>
          <div className="liquid-glass p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">Monthly Revenue Run Rate</span>
            <span className="text-xl font-bold text-white">{ADMIN_DEMO_DATA.monthlyRevenueRunRate}</span>
          </div>
        </div>

        {/* Content Body: Lead Management Table */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h4 className="font-bold text-white text-base">Recent High-Value Consultation Inquiries</h4>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F4B400]"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#18181c] text-white/50 border-b border-white/10">
                <tr>
                  <th className="p-3">Lead ID</th>
                  <th className="p-3">Client Name</th>
                  <th className="p-3">City & Plot</th>
                  <th className="p-3">Estimated Budget</th>
                  <th className="p-3">Package Tier</th>
                  <th className="p-3">Current Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((ld) => (
                  <tr key={ld.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-mono text-[#F4B400] font-bold">{ld.id}</td>
                    <td className="p-3 font-semibold text-white">{ld.name}</td>
                    <td className="p-3 text-white/70">{ld.city} ({ld.plot})</td>
                    <td className="p-3 font-bold text-white">{ld.budget}</td>
                    <td className="p-3 text-white/80">{ld.package}</td>
                    <td className="p-3">
                      <span className="bg-[#F4B400]/20 text-[#F4B400] font-bold px-2 py-0.5 rounded text-[11px]">
                        {ld.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}
