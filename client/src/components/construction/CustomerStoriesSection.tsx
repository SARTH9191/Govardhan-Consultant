import { useState } from "react";
import { Play, Star, Quote, MapPin, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CUSTOMER_STORIES, CustomerStory } from "@/data/enterpriseData";

export function CustomerStoriesSection() {
  const [selectedStory, setSelectedStory] = useState<CustomerStory | null>(null);

  return (
    <section id="stories" className="py-24 bg-[#09090b] text-white border-t border-white/10 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 border border-[#F4B400]/20 px-3.5 py-1 rounded-full">
            Client Success & Video Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            120+ Happy Homeowners Speak
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Watch real home owners share their experience with our Price-Lock Guarantee, 100+ Quality Measures, and RCC Foundation in 6 to 12 months.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="liquid-glass rounded-2xl border border-white/10 overflow-hidden hover:border-[#F4B400]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Video Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={story.videoThumbnail}
                    alt={story.clientName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="w-14 h-14 rounded-full bg-[#F4B400] text-[#111111] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                    >
                      <Play className="h-6 w-6 fill-[#111111] ml-1" />
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] font-bold px-2.5 py-1 rounded border border-white/20">
                    {story.projectType}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-1 text-[#F4B400]">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F4B400]" />
                    ))}
                  </div>

                  <Quote className="h-6 w-6 text-[#F4B400]/40" />

                  <p className="text-sm font-medium text-white italic leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <img
                      src={story.clientPhoto}
                      alt={story.clientName}
                      className="w-11 h-11 rounded-full object-cover object-top border border-[#F4B400]/50"
                      style={{ objectPosition: "center 8%" }}
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">{story.clientName}</h4>
                      <span className="text-xs text-white/60 block">{story.designation}</span>
                      <span className="text-[10px] text-[#F4B400] font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3" /> {story.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  onClick={() => setSelectedStory(story)}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 text-xs font-semibold"
                >
                  Read & Watch Full Story
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#141417] border border-[#F4B400]/40 rounded-2xl shadow-2xl overflow-hidden text-white p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-bold text-white text-lg">{selectedStory.clientName}</h3>
                <p className="text-xs text-white/60">{selectedStory.projectType} • Handover: {selectedStory.completionDate}</p>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black">
              <iframe
                src={selectedStory.videoUrl}
                title={selectedStory.clientName}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <h4 className="font-bold text-[#F4B400]">Full Owner Testimonial Statement:</h4>
              <p className="text-white/80 leading-relaxed">{selectedStory.fullStory}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
