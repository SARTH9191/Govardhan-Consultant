import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/construction/Navbar";
import { Hero } from "@/components/construction/Hero";
import { Stats } from "@/components/construction/Stats";
import { About } from "@/components/construction/About";
import { Services } from "@/components/construction/Services";
import { Projects } from "@/components/construction/Projects";
import { WhyChooseUs } from "@/components/construction/WhyChooseUs";
import { Process } from "@/components/construction/Process";
import { Testimonials } from "@/components/construction/Testimonials";
import { Clients } from "@/components/construction/Clients";
import { Team } from "@/components/construction/Team";
import { Certifications } from "@/components/construction/Certifications";
import { FAQSection } from "@/components/construction/FAQSection";
import { Contact } from "@/components/construction/Contact";
import { Footer } from "@/components/construction/Footer";
import { BackToTop } from "@/components/construction/BackToTop";

// Enterprise Section Imports
import { PackagesSection } from "@/components/construction/PackagesSection";
import { GuaranteeSection } from "@/components/construction/GuaranteeSection";
import { LiveTrackerSection } from "@/components/construction/LiveTrackerSection";
import { MaterialLibrarySection } from "@/components/construction/MaterialLibrarySection";
import { QualityChecksSection } from "@/components/construction/QualityChecksSection";
import { CalculatorsSection } from "@/components/construction/CalculatorsSection";
import { CustomerStoriesSection } from "@/components/construction/CustomerStoriesSection";
import { CareersSection } from "@/components/construction/CareersSection";
import { GallerySection } from "@/components/construction/GallerySection";
import { CityAvailabilitySection } from "@/components/construction/CityAvailabilitySection";

// Enterprise Modal & Widget Imports
import { LeadGenModal } from "@/components/construction/LeadGenModal";
import { ProjectDetailModal } from "@/components/construction/ProjectDetailModal";
import { LiveTrackerModal } from "@/components/construction/LiveTrackerModal";
import { SiteVisitModal } from "@/components/construction/SiteVisitModal";
import { AdminDashboardModal } from "@/components/construction/AdminDashboardModal";

import { BRAND } from "@/data/content";
import { ProjectDetail } from "@/data/enterpriseData";

const FRAME_BASE_URL = "https://sarth9191.github.io/construction_animation_frames/";
const TOTAL_FRAMES = 120;

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameContainerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // Enterprise Modal States
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadDefaultCity, setLeadDefaultCity] = useState("Pandharpur");

  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [siteVisitProject, setSiteVisitProject] = useState<string | undefined>(undefined);

  const [isLiveTrackerModalOpen, setIsLiveTrackerModalOpen] = useState(false);
  const [isAdminDemoOpen, setIsAdminDemoOpen] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.scale(dpr, dpr);
      render();
    };

    const render = () => {
      const img = imagesRef.current[currentFrameRef.current];
      if (!img) return;

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
      const x = (canvasWidth - img.width * scale) / 2;
      const y = (canvasHeight - img.height * scale) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Preload frames
    const preloadImages = async () => {
      let loadedCount = 0;
      const promises = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const frameNum = String(i).padStart(3, "0");
        const url = `${FRAME_BASE_URL}${frameNum}.png`;

        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.crossOrigin = "anonymous";
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
            resolve(img);
          };
          img.onerror = () => {
            console.error(`Failed to load frame: ${url}`);
            reject(new Error(`Failed to load ${url}`));
          };
        });
        promises.push(promise);
      }

      try {
        const loadedImages = await Promise.all(promises);
        imagesRef.current = loadedImages;
        setIsLoading(false);
        setCanvasSize();
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();

    // Scroll handler for frame animation & reset when returning to Hero
    const handleScroll = () => {
      if (isLoading || !frameContainerRef.current || !canvasRef.current) return;

      const frameSection = frameContainerRef.current;
      const frameTop = frameSection.offsetTop;
      const frameHeight = frameSection.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollPosition = window.scrollY;
      const sectionStart = frameTop - windowHeight * 0.2;
      const sectionEnd = frameTop + frameHeight;

      if (scrollPosition < sectionStart) {
        // User is at Hero / top of page: hide canvas so Hero video background shows cleanly
        canvas.style.opacity = "0";
        canvas.style.pointerEvents = "none";
        if (currentFrameRef.current !== 0) {
          currentFrameRef.current = 0;
          render();
        }
      } else if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
        // User is inside 400vh animation section: make canvas visible & update frame
        canvas.style.opacity = "1";
        canvas.style.pointerEvents = "none";
        const scrollInSection = Math.max(0, scrollPosition - frameTop);
        const scrollProgress = Math.min(scrollInSection / (frameHeight - windowHeight), 1);
        const frameNumber = Math.floor(scrollProgress * (TOTAL_FRAMES - 1));
        const clampedFrame = Math.max(0, Math.min(frameNumber, TOTAL_FRAMES - 1));

        if (clampedFrame !== currentFrameRef.current) {
          currentFrameRef.current = clampedFrame;
          render();
        }
      } else {
        // User is below animation section: hide canvas
        canvas.style.opacity = "0";
        canvas.style.pointerEvents = "none";
      }
    };

    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpenLeadModal = (defaultCity = "Pandharpur") => {
    setLeadDefaultCity(defaultCity);
    setIsLeadModalOpen(true);
  };

  const handleOpenSiteVisit = (projectTitle?: string) => {
    setSiteVisitProject(projectTitle);
    setIsSiteVisitOpen(true);
  };

  return (
    <div className="relative bg-black text-white selection:bg-[#F4B400] selection:text-[#111111]">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/images/logo.jpg"
              alt={BRAND.name}
              className="h-14 w-14 rounded-full object-cover border-2 border-[#F4B400] shadow-xl shadow-[#F4B400]/40"
            />
            <div className="flex flex-col text-left">
              <span className="font-sans text-2xl tracking-wide font-black text-white">
                {BRAND.shortName}
              </span>
              <span className="text-[10px] text-[#F4B400] font-bold tracking-widest uppercase">
                Engineers & Contractors
              </span>
            </div>
          </div>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#F4B400] transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-6 font-mono text-xs text-[#F4B400] tracking-[0.3em]">
            LOADING ENTERPRISE PLATFORM {loadingProgress}%
          </div>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        onOpenLeadModal={handleOpenLeadModal}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
        onOpenLiveTracker={() => setIsLiveTrackerModalOpen(true)}
        onOpenAdminDemo={() => setIsAdminDemoOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onQuoteClick={() => handleOpenLeadModal()}
        onProjectsClick={() => scrollToSection("#projects")}
        onOpenLeadModal={() => handleOpenLeadModal()}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
      />

      {/* Cinematic scroll-driven frame animation */}
      <section
        ref={frameContainerRef}
        className="relative bg-black"
        style={{ height: "400vh" }}
      >
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-screen z-0 transition-opacity duration-500 opacity-0 pointer-events-none"
        />


        <div className="relative z-10 h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <div className="liquid-glass rounded-2xl p-12 border border-white/10">
              <h2 className="font-sans text-4xl sm:text-5xl font-bold mb-6 text-white tracking-tight">
                From Blueprint to Reality
              </h2>
              <p className="text-lg text-white/70 mb-2 leading-relaxed">
                Watch a project come to life frame by frame — from
                groundbreaking to a fully realized structure — the way we
                approach every build at {BRAND.shortName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Company Stats */}
      <Stats />

      {/* Construction Packages Hub */}
      <PackagesSection onOpenLeadModal={handleOpenLeadModal} />

      {/* 8-Pillar Guarantee & Safety Section */}
      <GuaranteeSection />

      {/* Enterprise Projects Explorer */}
      <Projects onSelectProject={(p) => setSelectedProject(p)} />

      {/* Live Construction Tracker Section */}
      <LiveTrackerSection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Interactive Financial & Cost Calculators */}
      <CalculatorsSection onBookConsultation={() => handleOpenLeadModal()} />

      {/* 100+ Quality Measures Explorer */}
      <QualityChecksSection />

      {/* Brand & Material Transparency Library */}
      <MaterialLibrarySection />

      {/* Construction Process */}
      <Process />


      {/* Customer Video Stories */}
      <CustomerStoriesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Architectural Photo Gallery */}
      <GallerySection />

      {/* Regional City Operations & Site Network */}
      <CityAvailabilitySection onSelectCity={(city) => handleOpenLeadModal(city)} />

      {/* Careers Portal */}
      <CareersSection />

      {/* Clients & Partner Brands */}
      <Clients />

      {/* Executive Leadership Team */}
      <Team />

      {/* ISO Certifications */}
      <Certifications />

      {/* FAQs */}
      <FAQSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Back To Top Button */}
      <BackToTop />


      {/* ENTERPRISE MODALS */}
      <LeadGenModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultCity={leadDefaultCity}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookVisit={() => handleOpenSiteVisit(selectedProject?.title)}
      />

      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        defaultProjectTitle={siteVisitProject}
      />

      <LiveTrackerModal
        isOpen={isLiveTrackerModalOpen}
        onClose={() => setIsLiveTrackerModalOpen(false)}
      />

      <AdminDashboardModal
        isOpen={isAdminDemoOpen}
        onClose={() => setIsAdminDemoOpen(false)}
      />

    </div>
  );
}
