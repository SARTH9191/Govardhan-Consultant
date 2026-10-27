import { useState } from "react";
import { Sparkles, X, ZoomIn } from "lucide-react";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    // SOLAPUR SITES
    { title: "Solapur Ring Road Roof Slab Steel Reinforcement & Shuttering", category: "Structural & RCC", city: "Solapur", img: "/images/slab-reinforcement-steel.jpg" },
    { title: "Solapur Royal Villa Architectural Facade & Covered Portico", category: "Elevation & Facade", city: "Solapur", img: "/images/bungalow-elevation.jpg" },
    { title: "Solapur Commercial Tower Double-Coat Plaster Scaffolding", category: "Masonry & Plaster", city: "Solapur", img: "/images/exterior-plaster-elevation.jpg" },
    { title: "Solapur Multi-Floor Column Box Shuttering & Rebar Alignment", category: "Structural & RCC", city: "Solapur", img: "/images/column-shuttering-check.jpg" },
    { title: "Solapur Completed Commercial & Residential Plaza", category: "Commercial & Supply", city: "Solapur", img: "/images/completed-commercial-residence.jpg" },

    // SANGOLA SITES
    { title: "Sangola Agro-Logistics Heavy RCC Plinth Beam & Superstructure", category: "Structural & RCC", city: "Sangola", img: "/images/plinth-columns-phase.jpg" },
    { title: "Sangola Estate Villa Teakwood Door Frame Anchoring", category: "Masonry & Plaster", city: "Sangola", img: "/images/door-frame-masonry.jpg" },
    { title: "Sangola Boundary Lime Plotting & Column Grid Markings", category: "Structural & RCC", city: "Sangola", img: "/images/site-marking-layout.jpg" },
    { title: "Sangola Commercial Supply Logistics & JK Cement Depot", category: "Commercial & Supply", city: "Sangola", img: "/images/business-hub-cement.jpg" },
    { title: "Sangola Roof Slab Electrical Conduit Layout Inspection", category: "Structural & RCC", city: "Sangola", img: "/images/slab-conduit-inspection.jpg" },

    // MANGALWEDHA SITES
    { title: "Mangalwedha Heritage Villa Red Clay Brick Masonry & Lintel Level", category: "Masonry & Plaster", city: "Mangalwedha", img: "/images/brickwork-lintel-room.jpg" },
    { title: "Mangalwedha Spirit-Level Plumbline & Alignment Verification", category: "Masonry & Plaster", city: "Mangalwedha", img: "/images/brickwork-plumbline-check.jpg" },
    { title: "Mangalwedha Internal Brick Passage & Cross-Lighting Corridor", category: "Masonry & Plaster", city: "Mangalwedha", img: "/images/corridor-brick-structure.jpg" },
    { title: "Mangalwedha HT225-N Rebound Hammer Compressive Strength QC", category: "Blueprint & Quality Testing", city: "Mangalwedha", img: "/images/rebound-hammer-qc.jpg" },

    // PANDHARPUR SITES
    { title: "Pandharpur Sonawane Residence Render to 100% Built Reality", category: "Elevation & Facade", city: "Pandharpur", img: "/images/elevation-vs-reality.jpg" },
    { title: "Pandharpur Sonawane Column Centre Line Architectural Blueprint", category: "Blueprint & Quality Testing", city: "Pandharpur", img: "/images/sonawane-column-centerline-plan.jpg" },
    { title: "Pandharpur 2-Storey Commercial & Residential Building", category: "Commercial & Supply", city: "Pandharpur", img: "/images/completed-commercial-residence.jpg" },
    { title: "Er. Govardhan - On-Site Blueprint & Rebar Column Inspection", category: "Site Supervision", city: "Pandharpur", img: "/images/founder-engineer.jpg" },
    { title: "Govardhan Field Engineering & Quality Supervision Collage", category: "Site Supervision", city: "Pandharpur", img: "/images/founder-site-collage.jpg" },
    { title: "JK Super Cement Authorized Supply Depot & Promo", category: "Commercial & Supply", city: "Pandharpur", img: "/images/cement-rates-promo.jpg" }
  ];

  const cities = ["All", "Solapur", "Sangola", "Mangalwedha", "Pandharpur"];

  const categories = [
    "All", 
    "Structural & RCC", 
    "Masonry & Plaster", 
    "Blueprint & Quality Testing", 
    "Elevation & Facade", 
    "Commercial & Supply", 
    "Site Supervision"
  ];

  const filteredItems = galleryItems.filter((i) => {
    const matchesCategory = selectedCategory === "All" || i.category === selectedCategory;
    const matchesCity = selectedCity === "All" || i.city === selectedCity;
    return matchesCategory && matchesCity;
  });

  return (
    <section id="gallery" className="py-24 bg-[#0d0d0f] text-white border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full mb-3">
              <Sparkles className="h-4 w-4 text-[#F4B400]" /> Authentic Construction Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Govardhan Project Gallery
            </h2>
            <p className="text-white/70 max-w-xl text-base mt-2">
              Real high-definition field photography from foundation plotting, RCC slab casting, brickwork, non-destructive testing, to turnkey elevation delivery.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-end">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#F4B400] text-[#111111] font-bold"
                      : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* City Filter Pills */}
            <div className="flex items-center gap-1.5 bg-black/60 p-1.5 rounded-xl border border-white/10 text-xs">
              <span className="text-[11px] text-white/50 px-2 font-medium">Filter City:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    selectedCity === city
                      ? "bg-[#F4B400] text-[#111111] shadow"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.img)}
              className="relative group h-64 rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-black/40"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                style={item.img.includes("founder") ? { objectPosition: "center 0%" } : undefined}
                loading="lazy"
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-black/70 backdrop-blur-md text-[#F4B400] border border-[#F4B400]/40 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {item.city}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-[#F4B400] uppercase tracking-wider">{item.category}</span>
                <h4 className="text-xs font-bold text-white line-clamp-2 mt-0.5">{item.title}</h4>
                <div className="flex items-center gap-1 text-[11px] text-white/70 mt-1">
                  <ZoomIn className="h-3 w-3 text-[#F4B400]" /> Click to view full image
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <button 
            onClick={() => setActiveImage(null)} 
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-8 w-8 text-[#F4B400]" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeImage} 
              alt="Govardhan Project" 
              className="max-w-full max-h-[82vh] rounded-xl object-contain border border-[#F4B400]/40 shadow-2xl" 
            />
          </div>
        </div>
      )}
    </section>
  );
}
