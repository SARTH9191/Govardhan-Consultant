// Enterprise Data Store for BuildCraft Constructions
// High-resolution architectural photography from Unsplash & realistic enterprise datasets

export interface ProjectDetail {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "Infrastructure" | "Luxury Villas";
  status: "Completed" | "Ongoing" | "Upcoming";
  location: string;
  city: string;
  budget: string;
  area: string;
  year: string;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  videoUrl?: string;
  floorPlans: {
    title: string;
    type: "2D Layout" | "3D Structural" | "Master Plan";
    image: string;
    size: string;
    bedrooms?: number;
    bathrooms?: number;
  }[];
  specifications: {
    category: string;
    detail: string;
  }[];
  amenities: string[];
  constructionProgress: {
    phase: string;
    percentage: number;
    completedDate?: string;
    status: "Done" | "In Progress" | "Upcoming";
  }[];
  beforeAfter?: {
    before: string;
    after: string;
    label: string;
  };
  nearbyLandmarks: {
    name: string;
    distance: string;
  }[];
  architect: string;
  structuralEngineer: string;
  certifications: string[];
}

export interface PackageTier {
  id: string;
  name: string;
  pricePerSqFt: number;
  badge?: string;
  tagline: string;
  popular?: boolean;
  coverImage: string;
  specifications: {
    category: string;
    items: string[];
  }[];
  includedBrands: {
    category: string;
    brands: string[];
  }[];
  interiorPreviews: string[];
}

export interface MaterialItem {
  id: string;
  category: "Steel" | "Cement" | "Bricks & Blocks" | "Tiles & Flooring" | "Electrical" | "Paint & Finishes" | "Plumbing & Fixtures" | "Doors & Windows" | "Waterproofing";
  name: string;
  brand: string;
  logoText: string;
  image: string;
  description: string;
  specifications: string;
  benefits: string[];
  gradeRating: string;
}

export interface QualityCheckpoint {
  id: string;
  category: "Foundation" | "Structural & RCC" | "Waterproofing" | "Plumbing & Drainage" | "Electrical & Safety" | "Flooring & Tiling" | "Painting & Finishes";
  stage: string;
  title: string;
  description: string;
  inspectionMethod: string;
  frequency: string;
  tolerance: string;
  status: "Passed 100%" | "Rigorous Check";
  image: string;
}

export interface CityHub {
  id: string;
  name: string;
  state: string;
  skylineImage: string;
  landmarkImage: string;
  activeProjects: number;
  completedProjects: number;
  regionalOffice: string;
  phone: string;
  featuredProject: string;
}

export interface CustomerStory {
  id: string;
  clientName: string;
  designation: string;
  location: string;
  city: string;
  projectType: string;
  area?: string;
  completionDate: string;
  rating: number;
  videoThumbnail: string;
  videoUrl: string;
  clientPhoto: string;
  quote: string;
  fullStory: string;
  houseImages: string[];
}

export interface CareerJob {
  id: string;
  title: string;
  department: "Engineering" | "Architecture" | "Project Management" | "Quality Assurance" | "Safety & HSE" | "Business Development";
  location: string;
  type: "Full-Time" | "Contract";
  experience: string;
  description: string;
  requirements: string[];
}

// ==========================================
// DETAILED PROJECTS DATA
// ==========================================
export const ENTERPRISE_PROJECTS: ProjectDetail[] = [
  {
    id: "sonawane-residence",
    title: "Sonawane Luxury Residence (3D Elevation to Reality)",
    category: "Luxury Villas",
    status: "Completed",
    location: "Pandharpur, Maharashtra",
    city: "Pandharpur",
    budget: "₹85 Lakh",
    area: "3,200 sq. ft.",
    year: "2025",
    heroImage: "/images/elevation-vs-reality.jpg",
    gallery: [
      "/images/elevation-vs-reality.jpg",
      "/images/bungalow-elevation.jpg",
      "/images/brickwork-lintel-room.jpg",
      "/images/slab-conduit-inspection.jpg"
    ],
    description: "Architectural 3D elevation realized with 100% exact precision to ground reality. Features modern geometric parapets, horizontal groove bands, stainless steel railings, and high-spec plinth construction.",
    highlights: [
      "100% exact translation of 3D elevation render into built reality",
      "RCC framed structure with Fe550D TMT reinforcement",
      "Precision red clay brick masonry with plumbline verification",
      "Concealed electrical conduit & plumbing system"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    floorPlans: [
      {
        title: "Column Centre Line Plan (Sonawane Residence)",
        type: "2D Layout",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "3,200 sq. ft."
      },
      {
        title: "Architectural 3D Elevation Preview",
        type: "3D Structural",
        image: "/images/bungalow-elevation.jpg",
        size: "Single-Storey Modern Villa"
      }
    ],
    specifications: [
      { category: "Structure", detail: "Seismic Zone compliant RCC framed structure with Fe550D TMT steel & JK Super Cement" },
      { category: "Masonry", detail: "Kiln-fired red clay bricks with 1:6 cement-sand mortar and 40mm cover blocks" },
      { category: "Plaster & Paint", detail: "Double coat external sand-faced plaster with architectural groove bands & weather-shield paint" },
      { category: "Testing", detail: "HT225-N Rebound Hammer non-destructive concrete compressive strength tested" }
    ],
    amenities: ["Spacious Covered Portico", "Designer Parapet Terraces", "Water Tank Overhead Housing", "Stainless Steel Staircase Railings"],
    constructionProgress: [
      { phase: "Chalk Plotting & Layout", percentage: 100, completedDate: "Jan 2024", status: "Done" },
      { phase: "Excavation & RCC Footing", percentage: 100, completedDate: "Apr 2024", status: "Done" },
      { phase: "Plinth Beam & Column Framing", percentage: 100, completedDate: "Aug 2024", status: "Done" },
      { phase: "Roof Slab Pour & Brickwork", percentage: 100, completedDate: "Dec 2024", status: "Done" },
      { phase: "External Plaster & Elevation Handover", percentage: 100, completedDate: "Mar 2025", status: "Done" }
    ],
    beforeAfter: {
      before: "/images/site-marking-layout.jpg",
      after: "/images/elevation-vs-reality.jpg",
      label: "From Ground Plotting to Completed Architectural Landmark"
    },
    nearbyLandmarks: [
      { name: "Main Highway Transit Corridor", distance: "600 metres" },
      { name: "City Center Hub", distance: "2.5 km" }
    ],
    architect: "Govardhan Consultant Architectural Team",
    structuralEngineer: "Er. Govardhan (Chief Consultant)",
    certifications: ["ISO 9001:2015", "Rebound Hammer Tested (HT225-N)", "RERA Compliant"]
  },
  {
    id: "govardhan-commercial-complex",
    title: "Govardhan Commercial Hub & Two-Storey Complex",
    category: "Commercial",
    status: "Completed",
    location: "Station Road, Pandharpur, Maharashtra",
    city: "Pandharpur",
    budget: "₹1.8 Cr",
    area: "12,500 sq. ft.",
    year: "2025",
    heroImage: "/images/completed-commercial-residence.jpg",
    gallery: [
      "/images/completed-commercial-residence.jpg",
      "/images/exterior-plaster-elevation.jpg",
      "/images/plinth-columns-phase.jpg",
      "/images/slab-reinforcement-steel.jpg"
    ],
    description: "Two-storey commercial and multi-family residential building featuring modern exterior decorative tiles, full-height corner staircase glazing frames, and heavy-load ground floor commercial bays.",
    highlights: [
      "Commercial showroom bays with high ceiling clearance",
      "Staircase glass tower structural framing",
      "Waterproofing & terrace rainwater drainage channels",
      "Engineered for high footfall commercial loads"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    floorPlans: [
      {
        title: "Commercial Ground & First Floor Layout",
        type: "2D Layout",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "12,500 sq. ft."
      }
    ],
    specifications: [
      { category: "Structure", detail: "Heavy-duty RCC frame with M25 concrete & Fe550D rebar" },
      { category: "Facade", detail: "Textured ceramic elevation tiles, modern exterior plaster & MS safety grills" }
    ],
    amenities: ["Ground Commercial Showroom Space", "Upper Executive Suites", "Rooftop Terrace", "Parking Forecourt"],
    constructionProgress: [
      { phase: "Foundation & Plinth Beams", percentage: 100, completedDate: "Nov 2023", status: "Done" },
      { phase: "RCC Frame Superstructure", percentage: 100, completedDate: "Jul 2024", status: "Done" },
      { phase: "Plastering & Facade Detailing", percentage: 100, completedDate: "Jan 2025", status: "Done" }
    ],
    beforeAfter: {
      before: "/images/plinth-columns-phase.jpg",
      after: "/images/completed-commercial-residence.jpg",
      label: "RCC Column Superstructure to Finished Commercial Tower"
    },
    nearbyLandmarks: [
      { name: "Commercial Market Complex", distance: "200 metres" },
      { name: "Central Railway Station", distance: "3.0 km" }
    ],
    architect: "Govardhan Consultant Architecture",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "Structural Safety Sign-Off"]
  },
  {
    id: "solapur-royal-villa",
    title: "Solapur Royal Architectural Bungalow & Facade",
    category: "Luxury Villas",
    status: "Completed",
    location: "Saat Rasta / Hotgi Road, Solapur, Maharashtra",
    city: "Solapur",
    budget: "₹95 Lakh",
    area: "3,600 sq. ft.",
    year: "2025",
    heroImage: "/images/bungalow-elevation.jpg",
    gallery: [
      "/images/bungalow-elevation.jpg",
      "/images/exterior-plaster-elevation.jpg",
      "/images/door-frame-masonry.jpg",
      "/images/corridor-brick-structure.jpg"
    ],
    description: "Contemporary single-storey luxury villa designed with subtle earth tones, horizontal plaster grooves, warm golden accent pillars, and expansive covered portico in Solapur.",
    highlights: [
      "Modern architectural elevation with flat roof terrace garden provision",
      "Seasoned wooden door frames installed during masonry stage",
      "Abundant natural ventilation and cross-lighting window layout",
      "Full perimeter boundary wall with security entrance"
    ],
    floorPlans: [
      {
        title: "3 BHK Luxury Villa Master Plan",
        type: "2D Layout",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "3,600 sq. ft.",
        bedrooms: 3,
        bathrooms: 3
      }
    ],
    specifications: [
      { category: "Structure", detail: "Earthquake-resistant RCC column and beam framework with Fe550D TMT rebar" },
      { category: "Doors & Windows", detail: "Seasoned hardwood main frames and heavy-gauge sliding windows" }
    ],
    amenities: ["Covered Car Porch", "Private Garden", "Terrace Sitting Zone", "Rainwater Harvesting Pit"],
    constructionProgress: [
      { phase: "Plot Marking & Foundation", percentage: 100, completedDate: "Feb 2024", status: "Done" },
      { phase: "RCC Superstructure & Roof Slab", percentage: 100, completedDate: "Sep 2024", status: "Done" },
      { phase: "Brickwork, Plaster & Handover", percentage: 100, completedDate: "Feb 2025", status: "Done" }
    ],
    beforeAfter: {
      before: "/images/site-marking-layout.jpg",
      after: "/images/bungalow-elevation.jpg",
      label: "Raw Plot Lime Survey to Architectural Elevation"
    },
    nearbyLandmarks: [
      { name: "Saat Rasta Circle", distance: "800 metres" },
      { name: "Solapur Airport Road Link", distance: "2.5 km" }
    ],
    architect: "Govardhan Consultant Studio",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "RERA Compliant"]
  },
  {
    id: "solapur-commercial-tower",
    title: "Solapur Ring Road Commercial Tower & Multi-Storey RCC",
    category: "Commercial",
    status: "Ongoing",
    location: "Ring Road / MIDC Corridor, Solapur, Maharashtra",
    city: "Solapur",
    budget: "₹2.4 Cr",
    area: "16,500 sq. ft.",
    year: "2025",
    heroImage: "/images/slab-reinforcement-steel.jpg",
    gallery: [
      "/images/slab-reinforcement-steel.jpg",
      "/images/column-shuttering-check.jpg",
      "/images/completed-commercial-residence.jpg",
      "/images/slab-conduit-inspection.jpg"
    ],
    description: "Heavy multi-storey commercial complex on Solapur Ring Road featuring engineered RCC flat slabs, seismic column cages, and integrated retail showroom space.",
    highlights: [
      "M25 grade ready mix concrete with cube strength verification",
      "Full roof slab reinforcement steel binding and electrical conduit layout",
      "Cover block spacing & plumbline shuttering inspection",
      "Designed for high vehicular and pedestrian commercial loads"
    ],
    floorPlans: [
      {
        title: "Commercial Multi-Floor Structural Grid",
        type: "3D Structural",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "16,500 sq. ft."
      }
    ],
    specifications: [
      { category: "Concrete", detail: "M25 / M30 structural concrete with slump test verification" },
      { category: "Steel", detail: "Fe550D primary grade rebar with 50D lapping" }
    ],
    amenities: ["Heavy Freight Lift Shaft", "Basement Parking", "Fire Safety Conduits", "Loading Bay"],
    constructionProgress: [
      { phase: "Foundation & Plinth", percentage: 100, completedDate: "May 2024", status: "Done" },
      { phase: "Column & Roof Slab Superstructure", percentage: 90, status: "In Progress" },
      { phase: "Finishes & Facade", percentage: 40, status: "Upcoming" }
    ],
    nearbyLandmarks: [
      { name: "Solapur Ring Road Junction", distance: "300 metres" }
    ],
    architect: "Govardhan Consultant Commercial Infra Team",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "Rebound Hammer Tested"]
  },
  {
    id: "sangola-heritage-villa",
    title: "Sangola Modern Agro-Estate & Bungalow",
    category: "Residential",
    status: "Completed",
    location: "Station Road, Sangola, Maharashtra",
    city: "Sangola",
    budget: "₹72 Lakh",
    area: "2,800 sq. ft.",
    year: "2025",
    heroImage: "/images/door-frame-masonry.jpg",
    gallery: [
      "/images/door-frame-masonry.jpg",
      "/images/corridor-brick-structure.jpg",
      "/images/brickwork-lintel-room.jpg",
      "/images/bungalow-elevation.jpg"
    ],
    description: "Custom-crafted private estate in Sangola with seasoned wooden door frames anchored into heavy clay brick masonry and natural lighting corridors.",
    highlights: [
      "Precision kiln-fired red clay brickwork with 1:6 cement-sand ratio",
      "Door frames anchored with MS holdfast brackets for lifetime durability",
      "Cross-ventilation designed for Sangola semi-arid climate",
      "100% genuine JK Super Cement plaster finish"
    ],
    floorPlans: [
      {
        title: "Sangola Estate Villa Blueprint",
        type: "2D Layout",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "2,800 sq. ft."
      }
    ],
    specifications: [
      { category: "Masonry", detail: "Red clay bricks with water curing for 14 continuous days" },
      { category: "Woodwork", detail: "Seasoned teakwood main door frame" }
    ],
    amenities: ["Spacious Courtyard", "Solar Water Heating Prep", "Deep Water Harvesting Pit"],
    constructionProgress: [
      { phase: "Excavation & Footings", percentage: 100, completedDate: "Jan 2024", status: "Done" },
      { phase: "Brickwork & Roof Slab", percentage: 100, completedDate: "Aug 2024", status: "Done" },
      { phase: "Plaster & Handover", percentage: 100, completedDate: "Jan 2025", status: "Done" }
    ],
    nearbyLandmarks: [
      { name: "Sangola Railway Station", distance: "1.2 km" }
    ],
    architect: "Govardhan Consultant",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "Passed All Quality Checks"]
  },
  {
    id: "sangola-superstructure-phase",
    title: "Sangola Heavy RCC Plinth & Column Superstructure",
    category: "Infrastructure",
    status: "Ongoing",
    location: "Miraj - Sangola Road, Sangola, Maharashtra",
    city: "Sangola",
    budget: "₹1.5 Cr",
    area: "15,000 sq. ft.",
    year: "2025",
    heroImage: "/images/plinth-columns-phase.jpg",
    gallery: [
      "/images/plinth-columns-phase.jpg",
      "/images/site-marking-layout.jpg",
      "/images/column-shuttering-check.jpg",
      "/images/slab-reinforcement-steel.jpg"
    ],
    description: "Industrial warehouse and agro-logistics structural framing in Sangola, featuring heavy-duty plinth beams, high column clearances, and anti-termite treated footings.",
    highlights: [
      "High clearance column casting for logistics transit",
      "Anti-termite chemical barrier treatment at plinth stage",
      "Contractual timeline commitment: RCC Foundation completed within 6 to 12 months",
      "Direct logistics supply through Govardhan Traders"
    ],
    floorPlans: [
      {
        title: "Agro-Logistics Framing Grid",
        type: "Master Plan",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "15,000 sq. ft."
      }
    ],
    specifications: [
      { category: "Foundation", detail: "Deep trapezoidal footings with RCC plinth tie beams" },
      { category: "Materials", detail: "JK Super Cement & Fe550D TMT rebar" }
    ],
    amenities: ["Heavy Vehicle Driveway", "Weighbridge Bay", "Admin Office Pod"],
    constructionProgress: [
      { phase: "Plot Lime Marking", percentage: 100, completedDate: "Jun 2024", status: "Done" },
      { phase: "Plinth & Columns Phase", percentage: 95, status: "In Progress" },
      { phase: "Roof Truss & Handover", percentage: 30, status: "Upcoming" }
    ],
    nearbyLandmarks: [
      { name: "Miraj Highway Crossing", distance: "500 metres" }
    ],
    architect: "Govardhan Consultant Infra Team",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "Structural Safety Sign-Off"]
  },
  {
    id: "mangalwedha-heritage-residence",
    title: "Mangalwedha Heritage Residential Villa & Masonry",
    category: "Residential",
    status: "Completed",
    location: "Fort Road, Mangalwedha, Maharashtra",
    city: "Mangalwedha",
    budget: "₹80 Lakh",
    area: "3,100 sq. ft.",
    year: "2025",
    heroImage: "/images/brickwork-lintel-room.jpg",
    gallery: [
      "/images/brickwork-lintel-room.jpg",
      "/images/brickwork-plumbline-check.jpg",
      "/images/corridor-brick-structure.jpg",
      "/images/exterior-plaster-elevation.jpg"
    ],
    description: "Premium residential villa in Mangalwedha built with high-density red brick masonry, reinforced concrete lintels, and precision plumbline spirit-level alignment.",
    highlights: [
      "Rigorous plumbline verification on every course of masonry",
      "Monolithic lintel beam casting over all window and door openings",
      "HT225-N Rebound Hammer non-destructive concrete audit passed",
      "Double-coat external sand-faced waterproof plastering"
    ],
    floorPlans: [
      {
        title: "Mangalwedha Villa Floor Layout",
        type: "2D Layout",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "3,100 sq. ft."
      }
    ],
    specifications: [
      { category: "Masonry", detail: "Kiln-fired red clay bricks with 1:6 cement-sand mortar" },
      { category: "Testing", detail: "Non-destructive HT225-N Rebound Hammer verified" }
    ],
    amenities: ["Covered Parking", "Terrace Garden", "Traditional Front Veranda"],
    constructionProgress: [
      { phase: "Foundation & Plinth", percentage: 100, completedDate: "Feb 2024", status: "Done" },
      { phase: "RCC Superstructure", percentage: 100, completedDate: "Jul 2024", status: "Done" },
      { phase: "Masonry & Plaster Handover", percentage: 100, completedDate: "Feb 2025", status: "Done" }
    ],
    nearbyLandmarks: [
      { name: "Historic Fort Gate", distance: "400 metres" }
    ],
    architect: "Govardhan Consultant Architecture",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "Zero-Defect QA"]
  },
  {
    id: "mangalwedha-commercial-plaza",
    title: "Mangalwedha Commercial Plaza & Supply Center",
    category: "Commercial",
    status: "Ongoing",
    location: "Sangola Naka / Main Road, Mangalwedha, Maharashtra",
    city: "Mangalwedha",
    budget: "₹1.6 Cr",
    area: "11,000 sq. ft.",
    year: "2025",
    heroImage: "/images/exterior-plaster-elevation.jpg",
    gallery: [
      "/images/exterior-plaster-elevation.jpg",
      "/images/completed-commercial-residence.jpg",
      "/images/rebound-hammer-qc.jpg",
      "/images/business-hub-cement.jpg"
    ],
    description: "Two-floor retail shopping and commercial business complex at Mangalwedha junction with weather-resistant exterior elevation plaster and wide shopfronts.",
    highlights: [
      "Double coat external sand-faced plaster with architectural bands",
      "Wide clearance ground floor commercial retail bays",
      "RCC foundation engineered and delivered in 6 to 12 months",
      "Direct logistics supply through Govardhan Traders"
    ],
    floorPlans: [
      {
        title: "Commercial Retail Bay Master Plan",
        type: "Master Plan",
        image: "/images/sonawane-column-centerline-plan.jpg",
        size: "11,000 sq. ft."
      }
    ],
    specifications: [
      { category: "Facade", detail: "External weather-shield plaster with decorative elevation grooves" },
      { category: "Structure", detail: "Heavy load RCC columns & beams" }
    ],
    amenities: ["Customer Parking Forecourt", "Rooftop Commercial Terrace", "Service Lane Access"],
    constructionProgress: [
      { phase: "Foundation & Framing", percentage: 100, completedDate: "Aug 2024", status: "Done" },
      { phase: "Masonry & Plaster", percentage: 85, status: "In Progress" },
      { phase: "Final Handover", percentage: 40, status: "Upcoming" }
    ],
    nearbyLandmarks: [
      { name: "Sangola Naka Bus Junction", distance: "250 metres" }
    ],
    architect: "Govardhan Consultant",
    structuralEngineer: "Er. Govardhan",
    certifications: ["ISO 9001:2015", "RERA Compliant"]
  }
];

// ==========================================
// CONSTRUCTION PACKAGES DATA (5 TIERS)
// ==========================================
export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: "basic",
    name: "Basic Package",
    pricePerSqFt: 1699,
    tagline: "Essential structural integrity & quality foundational materials.",
    coverImage: "/images/plinth-columns-phase.jpg",
    specifications: [
      {
        category: "Structure & Foundation",
        items: [
          "RCC framed structure with Fe500/Fe550 grade TMT Steel (Tata Tiscon / JSW)",
          "JK Super Cement / Ultratech 53 grade OPC & PPC Cement",
          "6\" Red Clay bricks for exterior walls with 1:6 cement-sand mortar",
          "Ceiling height of 10 feet floor-to-floor",
          "M20 Grade Concrete for slab and columns"
        ]
      },
      {
        category: "Flooring & Tiling",
        items: [
          "Vitrified Tiles (24\" x 24\") up to ₹55/sq.ft. (Cera / Orient Bell)",
          "Anti-skid ceramic tiles for bathroom & balcony flooring",
          "Granite slab up to ₹110/sq.ft. for kitchen counter"
        ]
      },
      {
        category: "Electrical & Plumbing",
        items: [
          "Fire-resistant copper wiring (Polycab / Anchor)",
          "Modular switches (GM / Anchor Roma)",
          "CPVC & PVC pipes (Supreme / Finolex)",
          "CP fittings & Sanitaryware (Cera / Hindware up to ₹25k/bathroom)"
        ]
      },
      {
        category: "Painting & Openings",
        items: [
          "Tractor Emulsion interior paint with 2 coats primer & putty",
          "Apex exterior weather-shield paint",
          "Teak wood main door frame with flush door",
          "UPVC 2-track sliding windows with glass"
        ]
      }
    ],
    includedBrands: [
      { category: "Steel", brands: ["Tata Tiscon", "JSW Neosteel"] },
      { category: "Cement", brands: ["JK Super Cement", "UltraTech"] },
      { category: "Flooring", brands: ["Cera", "Orient Bell"] },
      { category: "Electrical", brands: ["Polycab", "Anchor"] },
      { category: "Plumbing", brands: ["Cera", "Hindware", "Supreme"] }
    ],
    interiorPreviews: [
      "/images/brickwork-lintel-room.jpg",
      "/images/door-frame-masonry.jpg"
    ]
  },
  {
    id: "classic",
    name: "Classic Package",
    pricePerSqFt: 1999,
    tagline: "Upgraded architectural finishes & high-durability fittings.",
    coverImage: "/images/bungalow-elevation.jpg",
    specifications: [
      {
        category: "Structure & Foundation",
        items: [
          "Fe550D primary grade TMT Steel (Tata Tiscon / Jindal Panther)",
          "JK Super Cement Weather Shield & UltraTech Cement",
          "M25 grade concrete with waterproofing admixture",
          "10.5 ft floor-to-floor ceiling elevation",
          "Anti-termite treatment with warranty certificate"
        ]
      },
      {
        category: "Flooring & Tiling",
        items: [
          "Premium Vitrified Tiles (48\" x 24\") up to ₹85/sq.ft. (Kajaria / Somany)",
          "Granite / Quartz counter up to ₹160/sq.ft. for kitchen",
          "Designer dado tiles up to 7 ft elevation in bathrooms"
        ]
      },
      {
        category: "Electrical & Plumbing",
        items: [
          "Havells / Finolex concealed flame-retardant wiring",
          "Schneider Electric / Legrand modular switches",
          "Astral / Ashirvad CPVC hot & cold plumbing line",
          "Jaquar / Kohler sanitaryware & chrome fittings (₹45k/bathroom)"
        ]
      },
      {
        category: "Painting & Openings",
        items: [
          "Asian Paints Royal Shine interior emulsion",
          "Asian Paints Ultima exterior weather defense",
          "Teakwood frame with 35mm veneer finish door",
          "Jindal heavy-gauge aluminum sliding windows with mosquito mesh"
        ]
      }
    ],
    includedBrands: [
      { category: "Steel", brands: ["Tata Tiscon", "Jindal Panther"] },
      { category: "Cement", brands: ["JK Super Cement", "UltraTech"] },
      { category: "Flooring", brands: ["Kajaria", "Somany"] },
      { category: "Electrical", brands: ["Havells", "Schneider"] },
      { category: "Plumbing", brands: ["Jaquar", "Kohler", "Astral"] }
    ],
    interiorPreviews: [
      "/images/corridor-brick-structure.jpg",
      "/images/door-frame-masonry.jpg"
    ]
  },
  {
    id: "premium",
    name: "Premium Package",
    pricePerSqFt: 2499,
    badge: "MOST POPULAR",
    popular: true,
    tagline: "Sophisticated luxury, modular kitchens & designer bath suites.",
    coverImage: "/images/elevation-vs-reality.jpg",
    specifications: [
      {
        category: "Structure & Foundation",
        items: [
          "Fe550D TMT Steel with anti-corrosion coating",
          "JK Super Strong / UltraTech Super green cement",
          "11 ft floor-to-floor ceiling height",
          "Sika / Dr. Fixit chemical waterproofing for all slabs, balconies & toilets",
          "3D BIM structural design & earthquake-resistant framing"
        ]
      },
      {
        category: "Flooring & Tiling",
        items: [
          "Large format Vitrified Slab Tiles (6 ft x 4 ft) or Italian Composite Marble (up to ₹160/sq.ft.)",
          "Engineered Wooden Flooring for Master Bedroom suite",
          "Quartz / Nano-white seamless kitchen island slab"
        ]
      },
      {
        category: "Electrical & Plumbing",
        items: [
          "Havells / Polycab conduits with smart home automation cabling",
          "Touch capacitive glass switches & mood dimmers",
          "Kohler / Grohe thermostatic rain shower panels & wall-hung WC (₹85k/bathroom)",
          "Solar water heater & pressurized water pump system"
        ]
      },
      {
        category: "Painting & Openings",
        items: [
          "Asian Paints Royale Aspira silk paint with Italian PU trim polish",
          "8-foot solid Teakwood main entrance door with digital smart lock",
          "Schüco German UPVC / Aluminum soundproof thermal windows"
        ]
      }
    ],
    includedBrands: [
      { category: "Steel", brands: ["Tata Tiscon Fe550D", "JSW Neosteel"] },
      { category: "Cement", brands: ["JK Super Cement", "UltraTech Super"] },
      { category: "Flooring", brands: ["Kajaria Eternity", "Simpolo Slabs"] },
      { category: "Electrical", brands: ["Havells Mona", "Legrand Arteor"] },
      { category: "Plumbing", brands: ["Kohler", "Grohe", "Astral Silencio"] }
    ],
    interiorPreviews: [
      "/images/slab-conduit-inspection.jpg",
      "/images/brickwork-lintel-room.jpg"
    ]
  },
  {
    id: "luxury",
    name: "Luxury Estate Package",
    pricePerSqFt: 3299,
    tagline: "Bespoke architectural grandeur, Italian marble & smart home KNX.",
    coverImage: "/images/completed-commercial-residence.jpg",
    specifications: [
      {
        category: "Structure & Architecture",
        items: [
          "Monolithic post-tensioned RCC framing designed for 100+ years",
          "11.5 ft to 12 ft clear ceiling height",
          "Custom architectural double-height living room layout",
          "Complete thermal & acoustic insulation in exterior envelope"
        ]
      },
      {
        category: "Flooring & Finishes",
        items: [
          "Imported Italian Statuario / Botticino Marble (up to ₹320/sq.ft.) in main areas",
          "Solid Teakwood / Brazilian Ipe deck flooring for balcony & poolside",
          "Modular German kitchen (Hafele / Hettich hardware) included"
        ]
      },
      {
        category: "Fixtures & Smart Tech",
        items: [
          "KNX / Control4 complete smart home automation (Lighting, AC, Curtains, Security)",
          "Gessi / Kohler Artist Edition rose-gold fixtures (₹1.5 Lakh/bathroom)",
          "Heat-pump central hot water system & VRF HVAC air conditioning piping"
        ]
      }
    ],
    includedBrands: [
      { category: "Marble", brands: ["Imported Italian Botticino", "Statuario"] },
      { category: "Kitchen", brands: ["Hettich", "Hafele German Fittings"] },
      { category: "Sanitary", brands: ["Gessi Italian", "Kohler Artist Edition"] },
      { category: "Automation", brands: ["Control4", "Schneider KNX"] }
    ],
    interiorPreviews: [
      "/images/elevation-vs-reality.jpg",
      "/images/bungalow-elevation.jpg"
    ]
  },
  {
    id: "ultra-luxury",
    name: "Ultra-Luxury Palace Tier",
    pricePerSqFt: 4599,
    tagline: "Unrestricted architectural magnificence, private elevators & pool suites.",
    coverImage: "/images/completed-commercial-residence.jpg",
    specifications: [
      {
        category: "Bespoke Inclusions",
        items: [
          "Full custom structural engineering with zero architectural limitations",
          "12.5 ft ceiling elevation with floor-to-ceiling double glass facades",
          "Private glass elevator installation included",
          "Cantilevered heated plunge pool structural waterproofing & installation",
          "Complete interior designer turnkey coordination & 5-year full concierge warranty"
        ]
      }
    ],
    includedBrands: [
      { category: "Luxury All Stars", brands: ["Schüco", "Poggenpohl", "Dornbracht", "Bang & Olufsen Integrated"] }
    ],
    interiorPreviews: [
      "/images/elevation-vs-reality.jpg"
    ]
  }
];

// ==========================================
// MATERIAL LIBRARY (BRANDS & SPECS)
// ==========================================
export const MATERIAL_LIBRARY: MaterialItem[] = [
  {
    id: "mat-1",
    category: "Cement",
    name: "JK Super Cement (Build Safe #YehPuccaHai)",
    brand: "Govardhan Traders / JK Cement",
    logoText: "JK SUPER CEMENT",
    image: "/images/cement-rates-promo.jpg",
    description: "Authorized wholesale supply of JK Super Cement (Weather Shield, Super Strong, Concrete Special) at reasonable direct rates. Direct contact Mo. 9975042346.",
    specifications: "53 Grade OPC / PPC | Weather Shield & Concrete Special | IS 1489 / IS 269",
    benefits: ["Authorized distribution via Govardhan Traders", "Micro-mesh moisture and dampness shield", "Direct wholesale booking: Mo. 9975042346"],
    gradeRating: "5.0 ★ (Authorized Partner)"
  },
  {
    id: "mat-2",
    category: "Steel",
    name: "Primary Fe550D TMT Reinforcement Steel & Mesh",
    brand: "Tata Tiscon / Primary Mills",
    logoText: "FE550D STEEL",
    image: "/images/slab-reinforcement-steel.jpg",
    description: "High-yield strength earthquake-resistant primary TMT steel cages and slab reinforcement mesh tied to precision structural specifications.",
    specifications: "Fe 550D Grade | Elongation > 16% | Earthquake-Resistant Seismic Zone Certified",
    benefits: ["Full lapping length (50D) compliance", "40mm concrete cover blocks maintained", "Zero rusted or secondary steel"],
    gradeRating: "5.0 ★ (Certified Structural Grade)"
  },
  {
    id: "mat-3",
    category: "Cement",
    name: "HT225-N Rebound Hammer Concrete Testing",
    brand: "Govardhan QC Division",
    logoText: "NDT TESTING",
    image: "/images/rebound-hammer-qc.jpg",
    description: "Non-destructive testing (NDT) using precision HT225-N concrete test hammer to measure in-situ compressive strength of columns, beams, and slabs. Mo. 9975042346.",
    specifications: "Standard Impact Energy: 2.207J | Measuring Range: 10–60 MPa | IS 13311 (Part 2)",
    benefits: ["Immediate non-destructive quality audit", "Direct compressive strength calibration", "Certified engineer audit report"],
    gradeRating: "5.0 ★ (Lab Calibrated)"
  },
  {
    id: "mat-4",
    category: "Bricks & Blocks",
    name: "Kiln-Fired Deep Red Clay Bricks",
    brand: "Govardhan Tested Red Bricks",
    logoText: "RED BRICKS",
    image: "/images/brickwork-lintel-room.jpg",
    description: "High-density first-class red clay bricks laid with plumbline spirit-level verification and rich 1:6 cement-sand mortar joints.",
    specifications: "Crushing Strength > 7.5 N/mm² | Water Absorption < 15% | Standard Modular Size",
    benefits: ["Superior thermal insulation in summer", "Strong shear resistance across wall courses", "Zero efflorescence or salt seepage"],
    gradeRating: "4.9 ★"
  },
  {
    id: "mat-5",
    category: "Cement",
    name: "Govardhan Business Hub & Materials Logistics",
    brand: "Govardhan Traders",
    logoText: "GOVARDHAN HUB",
    image: "/images/business-hub-cement.jpg",
    description: "Centralized distribution warehouse ensuring seamless daily supply of certified cement bags, aggregates, and structural hardware. Mo. 9975042346.",
    specifications: "Covered Moisture-Free Storage | Direct Fleet Delivery | Bulk Wholesale Pricing",
    benefits: ["Guaranteed genuine fresh factory stock", "Zero weather damage or clumping", "Helpline: 9975042346"],
    gradeRating: "5.0 ★"
  },
  {
    id: "mat-6",
    category: "Electrical",
    name: "Concealed Slab & Wall Electrical Conduits",
    brand: "Govardhan Approved Fittings",
    logoText: "CONDUIT PIPES",
    image: "/images/slab-conduit-inspection.jpg",
    description: "Heavy-duty PVC electrical conduits laid across slab shuttering prior to concrete casting, ensuring smooth wire pulling and zero pipe crushing.",
    specifications: "Medium & Heavy Duty Virgin PVC | Fan Box & Junction Box Anchor Tied",
    benefits: ["Engineered layout before slab pour", "Zero choking during casting", "Concealed aesthetic finish"],
    gradeRating: "4.9 ★"
  }
];

// ==========================================
// 100+ QUALITY MEASURES EXCERPT DATA
// ==========================================
export const QUALITY_CHECKPOINTS: QualityCheckpoint[] = [
  {
    id: "qc-01",
    category: "Foundation",
    stage: "Soil & Excavation",
    title: "Site Plotting, Boundary Survey & Lime Chalk Marking",
    description: "Accurate physical ground plotting with lime powder grid lines, establishing boundary offset benchmarks, and foundation footing pit markings.",
    inspectionMethod: "Total Station survey & physical string-line chalk measurement",
    frequency: "Prior to any foundation excavation",
    tolerance: "0% deviation from municipal approved layout",
    status: "Passed 100%",
    image: "/images/site-marking-layout.jpg"
  },
  {
    id: "qc-02",
    category: "Structural & RCC",
    stage: "Steel Reinforcement",
    title: "Column Rebar Binding & Shuttering Plumb-Line Audit",
    description: "Verification of column reinforcement verticality, stirrup ring spacing (150mm c/c), cover block placement (40mm), and secure shuttering clamps.",
    inspectionMethod: "Dual plumb-bob & spirit level check before casting",
    frequency: "Before every vertical column pour",
    tolerance: "Max ±2mm vertical plumb variance",
    status: "Passed 100%",
    image: "/images/column-shuttering-check.jpg"
  },
  {
    id: "qc-03",
    category: "Structural & RCC",
    stage: "Concrete Quality",
    title: "HT225-N Rebound Hammer Compressive Strength Test",
    description: "Non-destructive testing of in-situ hardened concrete using calibrated HT225-N test hammer to confirm compressive strength exceeds design M25/M30 grade.",
    inspectionMethod: "HT225-N Mechanical Rebound Test (IS 13311 Part 2)",
    frequency: "All structural columns, plinths, and slabs post curing",
    tolerance: "Must exceed 100% design strength rating",
    status: "Passed 100%",
    image: "/images/rebound-hammer-qc.jpg"
  },
  {
    id: "qc-04",
    category: "Structural & RCC",
    stage: "Slab Construction",
    title: "Roof Slab Steel Reinforcement & Electrical Conduit Layout",
    description: "Inspecting double-layer TMT mesh binding, chair rebar spacing, fan box anchoring, and electrical conduit routing before final concrete pump pour.",
    inspectionMethod: "Engineer pre-pour checklist sign-off",
    frequency: "100% of floor and roof slabs",
    tolerance: "Zero conduit displacement allowed during pour",
    status: "Passed 100%",
    image: "/images/slab-conduit-inspection.jpg"
  },
  {
    id: "qc-05",
    category: "Structural & RCC",
    stage: "Brickwork",
    title: "Brick Masonry Course Alignment & Plumb-Line Verification",
    description: "Checking vertical plumb-line of red brick masonry walls, mortar joint thickness (10-12mm), and proper staggering of vertical joints.",
    inspectionMethod: "Brass plumb-bob string & aluminum straight edge",
    frequency: "Every 4 courses of brickwork",
    tolerance: "Max 1mm variance across 3 metres height",
    status: "Passed 100%",
    image: "/images/brickwork-plumbline-check.jpg"
  },
  {
    id: "qc-06",
    category: "Structural & RCC",
    stage: "Door Frames",
    title: "Wooden Door Frame Fixing & Lintel Level Alignment",
    description: "Ensuring wooden door frames are secured with MS holdfast brackets embedded into RCC columns/brickwork with true vertical alignment.",
    inspectionMethod: "Diagonal tape measurement & spirit level planeness",
    frequency: "Every room doorway & window frame opening",
    tolerance: "0mm diagonal skew across frame",
    status: "Passed 100%",
    image: "/images/door-frame-masonry.jpg"
  },
  {
    id: "qc-07",
    category: "Painting & Finishes",
    stage: "Exterior Elevation",
    title: "External Sand-Faced Plaster & Elevation Groove Details",
    description: "Inspecting double-coat waterproof cement plaster, straightness of architectural facade bands, and curing water retention.",
    inspectionMethod: "Visual inspection & water curing audit",
    frequency: "100% of exterior facade surfaces",
    tolerance: "Zero hairline shrinkage cracks",
    status: "Passed 100%",
    image: "/images/exterior-plaster-elevation.jpg"
  }
];

// ==========================================
// CITY HUBS DATA (REGIONAL FOCUS)
// ==========================================
export const CITY_HUBS: CityHub[] = [
  {
    id: "solapur",
    name: "Solapur",
    state: "Maharashtra",
    skylineImage: "/images/completed-commercial-residence.jpg",
    landmarkImage: "/images/slab-reinforcement-steel.jpg",
    activeProjects: 38,
    completedProjects: 42,
    regionalOffice: "Saat Rasta / Hotgi Road, Solapur 413003",
    phone: "+91 99750 42346",
    featuredProject: "Solapur Ring Road Luxury Plaza & Villa"
  },
  {
    id: "sangola",
    name: "Sangola",
    state: "Maharashtra",
    skylineImage: "/images/plinth-columns-phase.jpg",
    landmarkImage: "/images/door-frame-masonry.jpg",
    activeProjects: 24,
    completedProjects: 26,
    regionalOffice: "Station Road / Miraj Road, Sangola 413307",
    phone: "+91 99750 42346",
    featuredProject: "Sangola Agro-Commercial & Residential Complex"
  },
  {
    id: "mangalwedha",
    name: "Mangalwedha",
    state: "Maharashtra",
    skylineImage: "/images/bungalow-elevation.jpg",
    landmarkImage: "/images/brickwork-lintel-room.jpg",
    activeProjects: 18,
    completedProjects: 22,
    regionalOffice: "Fort Road / Sangola Naka, Mangalwedha 413305",
    phone: "+91 99750 42346",
    featuredProject: "Mangalwedha Heritage Luxury Villa"
  },
  {
    id: "pandharpur",
    name: "Pandharpur",
    state: "Maharashtra",
    skylineImage: "/images/elevation-vs-reality.jpg",
    landmarkImage: "/images/founder-site-collage.jpg",
    activeProjects: 40,
    completedProjects: 30,
    regionalOffice: "Govardhan Consultant HQ, Pandharpur, Dist. Solapur 413304",
    phone: "+91 99750 42346",
    featuredProject: "Sonawane Residence (3D Elevation to Reality)"
  }
];

// ==========================================
// CUSTOMER VIDEO STORIES DATA
// ==========================================
export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: "story-1",
    clientName: "Mr. & Mrs. Sonawane",
    designation: "Homeowner, Sonawane Residence",
    location: "Pandharpur, Maharashtra",
    city: "Pandharpur",
    projectType: "3,200 sq.ft. Turnkey Architectural Villa",
    completionDate: "March 2025",
    rating: 5,
    videoThumbnail: "/images/elevation-vs-reality.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientPhoto: "/images/founder-engineer.jpg",
    quote: "Govardhan Consultant transformed our 3D elevation drawing into 100% exact ground reality in Pandharpur. Er. Govardhan's on-site presence gave us complete confidence!",
    fullStory: "We were amazed by how every single band, parapet design, and window placement from the 3D computer design was replicated into our actual finished home. Zero delays, certified JK Super Cement, and flawless execution.",
    houseImages: [
      "/images/elevation-vs-reality.jpg",
      "/images/bungalow-elevation.jpg"
    ]
  },
  {
    id: "story-2",
    clientName: "Solapur Commercial Plaza Partner",
    designation: "Commercial Property Investor",
    location: "Saat Rasta / Ring Road, Solapur, Maharashtra",
    city: "Solapur",
    projectType: "Multi-Storey Commercial & Residential Complex",
    completionDate: "January 2025",
    rating: 5,
    videoThumbnail: "/images/completed-commercial-residence.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientPhoto: "/images/founder-site-collage.jpg",
    quote: "The structural precision, column plumb-line checks, and rebound hammer testing in Solapur proved their technical engineering mastery.",
    fullStory: "From heavy RCC plinth casting to the final exterior plastering, Govardhan Consultant supervised every single pour and rebar cage. Truly premier turnkey contractors for Solapur.",
    houseImages: [
      "/images/completed-commercial-residence.jpg",
      "/images/slab-reinforcement-steel.jpg"
    ]
  },
  {
    id: "story-3",
    clientName: "Sangola Agro-Estate Client",
    designation: "Private Estate & Farmhouse Owner",
    location: "Station Road, Sangola, Maharashtra",
    city: "Sangola",
    projectType: "Agro-Residential Estate & Heavy Superstructure",
    completionDate: "February 2025",
    rating: 5,
    videoThumbnail: "/images/plinth-columns-phase.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientPhoto: "/images/founder-engineer.jpg",
    quote: "RCC foundation completed in 6 to 12 months with rock-solid strength and certified Fe550D steel in Sangola.",
    fullStory: "Er. Govardhan personally inspected the plinth beam rebar spacing and termite prevention. Their price-lock guarantee and certified material logistics via Govardhan Traders saved us immense time and money.",
    houseImages: [
      "/images/plinth-columns-phase.jpg",
      "/images/door-frame-masonry.jpg"
    ]
  },
  {
    id: "story-4",
    clientName: "Mangalwedha Heritage Villa Owner",
    designation: "Heritage Homeowner",
    location: "Fort Road, Mangalwedha, Maharashtra",
    city: "Mangalwedha",
    projectType: "3,100 sq.ft. Luxury Brickwork Residence",
    completionDate: "January 2025",
    rating: 5,
    videoThumbnail: "/images/brickwork-lintel-room.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientPhoto: "/images/founder-site-collage.jpg",
    quote: "Flawless red brick masonry, spirit-level vertical plumbline checks, and 100+ quality measures in Mangalwedha.",
    fullStory: "Their adherence to engineering standards and continuous 14-day water curing gave us immense peace of mind. Highest recommendation for any construction in Mangalwedha.",
    houseImages: [
      "/images/brickwork-lintel-room.jpg",
      "/images/exterior-plaster-elevation.jpg"
    ]
  }
];

// ==========================================
// CAREERS PORTAL JOBS
// ==========================================
export const CAREER_JOBS: CareerJob[] = [
  {
    id: "job-1",
    title: "Senior Structural Design Lead (BIM / STAAD.Pro)",
    department: "Engineering",
    location: "Pandharpur, Maharashtra",
    type: "Full-Time",
    experience: "8–12 Years",
    description: "Lead structural design for commercial complexes and residential developments using Revit & STAAD Pro.",
    requirements: ["M.Tech / B.Tech in Structural Engineering", "Proficiency in STAAD.Pro, ETABS, Revit BIM", "Experience with seismic zone structural design"]
  },
  {
    id: "job-2",
    title: "Project Director — Commercial & Residential Infrastructure",
    department: "Project Management",
    location: "Pandharpur, Maharashtra",
    type: "Full-Time",
    experience: "10–15 Years",
    description: "Oversee site execution, contractor scheduling, safety audits, and client milestone handovers in Pandharpur.",
    requirements: ["B.Tech Civil + Construction Management", "Track record of managing turnkey building projects", "Strong leadership in labor & material logistics"]
  },
  {
    id: "job-3",
    title: "Chief QA/QC Auditor (100+ Quality Measures & NDT)",
    department: "Quality Assurance",
    location: "Pandharpur, Solapur, Sangola & Mangalwedha, Maharashtra",
    type: "Full-Time",
    experience: "6–10 Years",
    description: "Conduct non-destructive testing (HT225-N Rebound Hammer), concrete slump cube audits, and soil SBC inspections across sites.",
    requirements: ["Degree in Civil Engineering", "QA / NDT testing knowledge", "Hands-on experience with concrete testing & plumbline audits"]
  },
  {
    id: "job-4",
    title: "Principal Residential Architect & Elevation Specialist",
    department: "Architecture",
    location: "Pandharpur, Maharashtra",
    type: "Full-Time",
    experience: "5–10 Years",
    description: "Design bespoke bungalow elevations, modern 3D facades, and space-efficient floor plans.",
    requirements: ["B.Arch registered with Council of Architecture", "Expertise in 3D Architectural Rendering, SketchUp & AutoCAD", "Portfolio of completed bungalow elevations"]
  }
];

// ==========================================
// INVESTOR RELATIONS & FINANCIAL SUMMARY
// ==========================================
export const FINANCIAL_METRICS = {
  fiscalYear: "FY 2025-26",
  orderBookValue: "₹3,450 Cr",
  revenueGrowth: "+34.2% YoY",
  projectsHandoverCount: 120,
  marketCapEquivalent: "₹6,800 Cr",
  ebitdaMargin: "18.6%",
  esgRating: "IGBC Platinum Rated Developer",
  quarterlyRevenue: [
    { quarter: "Q1 FY25", revenue: 420, profit: 78 },
    { quarter: "Q2 FY25", revenue: 480, profit: 91 },
    { quarter: "Q3 FY25", revenue: 540, profit: 104 },
    { quarter: "Q4 FY25", revenue: 650, profit: 128 },
    { quarter: "Q1 FY26 (E)", revenue: 720, profit: 142 }
  ]
};

// ==========================================
// ADMIN DASHBOARD DEMO METRICS
// ==========================================
export const ADMIN_DEMO_DATA = {
  totalActiveLeads: 148,
  ongoingSites: 42,
  qualityPassRate: "99.8%",
  monthlyRevenueRunRate: "₹48.5 Cr",
  recentLeads: [
    { id: "LD-8901", name: "Siddharth Deshmukh", city: "Solapur (Saat Rasta)", plot: "3,600 sq.ft.", budget: "₹95 Lakhs", package: "Premium", status: "Site Visit Scheduled", date: "Today, 14:30" },
    { id: "LD-8902", name: "Rajendra Patil", city: "Sangola (Station Road)", plot: "4,500 sq.ft.", budget: "₹1.5 Cr", package: "Luxury Estate", status: "Quote Sent", date: "Today, 11:15" },
    { id: "LD-8903", name: "Kavita Singhal", city: "Pandharpur (Isbavi)", plot: "3,200 sq.ft.", budget: "₹85 Lakhs", package: "Classic", status: "OTP Verified", date: "Yesterday" },
    { id: "LD-8904", name: "Dr. Arvind Mehta", city: "Mangalwedha (Fort Road)", plot: "3,100 sq.ft.", budget: "₹80 Lakhs", package: "Premium", status: "Contract Signed", date: "Yesterday" }
  ]
};
