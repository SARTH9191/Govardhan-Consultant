import { useState } from "react";
import { MapPin, Building, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CITY_HUBS } from "@/data/enterpriseData";

interface CityAvailabilitySectionProps {
  onSelectCity: (city: string) => void;
}

export function CityAvailabilitySection({ onSelectCity }: CityAvailabilitySectionProps) {
  const [selectedCityId, setSelectedCityId] = useState<string>("solapur");

  const activeHub = CITY_HUBS.find((c) => c.id === selectedCityId) || CITY_HUBS[0];

  return (
    <section id="cities" className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F4B400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full mb-3">
              <MapPin className="h-4 w-4 text-[#F4B400]" /> Regional Presence & City Operations
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Solapur • Pandharpur • Sangola • Mangalwedha
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              Explore active project sites, certified material logistics, and turnkey construction execution across key regional hubs in Maharashtra.
            </p>
          </div>
        </div>

        {/* Cities Grid & Active Hub Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cities Pills (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-3">
            {CITY_HUBS.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCityId(city.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  selectedCityId === city.id
                    ? "bg-[#F4B400] text-[#111111] border-[#F4B400] font-bold shadow-lg shadow-[#F4B400]/20 scale-[1.02]"
                    : "liquid-glass border-white/10 text-white/80 hover:text-white hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold tracking-tight">{city.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                      selectedCityId === city.id ? "bg-black/20 text-[#111111]" : "bg-white/10 text-white/60"
                    }`}>
                      {city.activeProjects} Active
                    </span>
                  </div>
                  <span className={`text-xs block mt-0.5 ${
                    selectedCityId === city.id ? "text-[#111111]/70" : "text-white/50"
                  }`}>
                    {city.state}
                  </span>
                </div>
                
                <div className={`text-[11px] mt-3 pt-2 border-t font-semibold ${
                  selectedCityId === city.id ? "border-[#111111]/20 text-[#111111]" : "border-white/10 text-[#F4B400]"
                }`}>
                  {city.completedProjects}+ Handover Projects
                </div>
              </button>
            ))}
          </div>

          {/* Active Hub Spotlight Card (7 cols) */}
          <div className="lg:col-span-7 liquid-glass rounded-2xl border border-[#F4B400]/40 overflow-hidden shadow-2xl space-y-6 p-6 md:p-8">
            
            {/* Banner Image */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-white/10">
              <img
                src={activeHub.skylineImage}
                alt={activeHub.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-xs font-bold text-[#F4B400] uppercase tracking-wider block">Regional Hub Spotlight</span>
                  <h3 className="text-3xl font-extrabold text-white">{activeHub.name}, {activeHub.state}</h3>
                </div>
                <Button
                  onClick={() => onSelectCity(activeHub.name)}
                  className="bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-bold text-xs px-5 py-2.5 rounded-xl gap-1.5"
                >
                  Book Visit in {activeHub.name} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-0.5">
                <span className="text-white/50 block">Active Construction Sites</span>
                <span className="text-xl font-bold text-[#F4B400]">{activeHub.activeProjects} Sites</span>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-0.5">
                <span className="text-white/50 block">Delivered Handovers</span>
                <span className="text-xl font-bold text-white">{activeHub.completedProjects}+ Units</span>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-0.5 col-span-2 sm:col-span-1">
                <span className="text-white/50 block">Flagship Development</span>
                <span className="text-xs font-bold text-white truncate block">{activeHub.featuredProject}</span>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#F4B400] font-bold">
                <Building className="h-4 w-4" /> Regional Headquarters Office
              </div>
              <p className="text-white/80">{activeHub.regionalOffice}</p>
              <div className="flex items-center gap-2 text-white/60 pt-1 border-t border-white/10">
                <Phone className="h-3.5 w-3.5 text-[#F4B400]" /> Direct Desk: {activeHub.phone}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
