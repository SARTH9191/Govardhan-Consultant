import { useState } from "react";
import { TrendingUp, Award, ShieldCheck, BarChart3, PieChart, Landmark, ArrowUpRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { FINANCIAL_METRICS } from "@/data/enterpriseData";

export function InvestorSection() {
  return (
    <section id="investor" className="py-24 bg-[#09090b] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4B400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full mb-3">
              <TrendingUp className="h-4 w-4 text-[#F4B400]" /> Enterprise Financial Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Investor Relations & Growth
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              Strong balance sheet, zero net debt, and a ₹3,450 Cr order book spanning turnkey commercial, luxury residential, and urban infrastructure projects.
            </p>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="liquid-glass rounded-2xl p-5 border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">Order Book Value</span>
            <span className="text-2xl font-extrabold text-[#F4B400]">{FINANCIAL_METRICS.orderBookValue}</span>
            <span className="text-[10px] text-emerald-400 font-semibold block flex items-center gap-0.5">
              <ArrowUpRight className="h-3 w-3" /> {FINANCIAL_METRICS.revenueGrowth}
            </span>
          </div>

          <div className="liquid-glass rounded-2xl p-5 border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">Enterprise Valuation</span>
            <span className="text-2xl font-extrabold text-white">{FINANCIAL_METRICS.marketCapEquivalent}</span>
            <span className="text-[10px] text-white/40 block">Unlisted Equity Equivalent</span>
          </div>

          <div className="liquid-glass rounded-2xl p-5 border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">EBITDA Margin</span>
            <span className="text-2xl font-extrabold text-white">{FINANCIAL_METRICS.ebitdaMargin}</span>
            <span className="text-[10px] text-emerald-400 font-semibold block">Industry Leading</span>
          </div>

          <div className="liquid-glass rounded-2xl p-5 border border-white/10 space-y-1">
            <span className="text-xs text-white/50 block">ESG Commitment</span>
            <span className="text-sm font-bold text-[#F4B400] block truncate">{FINANCIAL_METRICS.esgRating}</span>
            <span className="text-[10px] text-white/40 block">Zero Carbon Target 2030</span>
          </div>
        </div>

        {/* Financial Revenue Chart */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-[#F4B400]/30 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                Quarterly Revenue & Net Profit Growth (in ₹ Crores)
                <span className="text-xs bg-[#F4B400] text-[#111111] font-bold px-2 py-0.5 rounded">FY25-26</span>
              </h3>
              <p className="text-xs text-white/60">Consistent revenue compounding backed by milestone escrow releases.</p>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={FINANCIAL_METRICS.quarterlyRevenue}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F4B400" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F4B400" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="quarter" stroke="#71717a" fontSize={12} />
                <YAxis stroke="#71717a" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#18181b", borderColor: "#F4B400" }}
                  itemStyle={{ color: "#F4B400" }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#F4B400" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" name="Quarterly Revenue (₹ Cr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
