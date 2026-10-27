// Centralized content for Govardhan Consultant - Engineers & Contractors.
// Featuring authentic on-site engineering photography, 3D elevation renders, and testing certifications.

export const BRAND = {
  name: "Govardhan Consultant",
  shortName: "Govardhan Consultant",
  fullName: "Govardhan Consultant Engineers & Contractors",
  tagline: "Engineers & Contractors • Planning • Designing • Execution • Solapur • Pandharpur • Sangola • Mangalwedha",
  phone: "+91 99750 42346",
  email: "gcs.gpr77@gmail.com",
  secondaryEmail: "sarthp9191@gmail.com",
  address: "Govardhan Consultant, Pandharpur, Dist. Solapur, Maharashtra 413304",
  googleRating: "4.9 ★★★★★ (Verified Client Reviews)",
  reraApproved: "RERA Registered Licensed Structural Engineers & Contractors",
  isoCert: "ISO 9001:2015 Certified QA / NDT Testing Standards",
  logo: "/images/logo.jpg",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Projects", href: "#projects" },
  { label: "Live Tracker", href: "#live-tracker" },
  { label: "Cities", href: "#cities" },
  { label: "Calculators", href: "#calculators" },
  { label: "Quality Checks", href: "#quality-checks" },
  { label: "Materials", href: "#materials" },
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Craftsmen & Engineers" },
  { value: 120, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "+", label: "Quality Measures" },
  { value: 100, suffix: "%", label: "Solapur & Pandharpur Trust" },
];

export const CORE_VALUES = [
  {
    title: "Mission",
    desc: "To deliver world-class civil engineering, architectural planning, and turnkey construction solutions that combine structural longevity with luxury aesthetics.",
  },
  {
    title: "Vision",
    desc: "To be Maharashtra's most trusted engineering and contracting platform, delivering precision-driven residential and commercial landmarks.",
  },
  {
    title: "Core Values",
    desc: "Technical precision, on-site supervision integrity, 100% genuine certified materials (JK Super Cement, Fe550D TMT), and structural transparency.",
  },
];

export const ABOUT_IMAGES = [
  "/images/plinth-columns-phase.jpg",
  "/images/founder-engineer.jpg",
  "/images/completed-commercial-residence.jpg",
];

export type Service = {
  icon:
    | "home"
    | "building"
    | "factory"
    | "road"
    | "paintbrush"
    | "clipboard"
    | "hammer"
    | "drafting";
  title: string;
  desc: string;
  image?: string;
};

export const SERVICES: Service[] = [
  {
    icon: "home",
    title: "Luxury Residential Construction & Villas",
    desc: "Turnkey bungalow design, 3D architectural elevation, RCC column framing, and precision brickwork execution.",
    image: "/images/bungalow-elevation.jpg"
  },
  {
    icon: "building",
    title: "Commercial Hubs & Multi-Floor Complexes",
    desc: "Two-storey and multi-floor commercial buildings, retail shopping complexes, and office spaces with heavy-load RCC frames.",
    image: "/images/completed-commercial-residence.jpg"
  },
  {
    icon: "factory",
    title: "Material Supply & Cement Logistics (Govardhan Traders)",
    desc: "Authorized JK Super Cement wholesale distribution and primary-grade structural materials supply at transparent rates.",
    image: "/images/business-hub-cement.jpg"
  },
  {
    icon: "road",
    title: "Foundation & Plinth Structural Engineering",
    desc: "Excavation plotting, column centre line layouts, anti-termite treatments, and earthquake-resistant plinth beam casting.",
    image: "/images/plinth-columns-phase.jpg"
  },
  {
    icon: "paintbrush",
    title: "Masonry & Interior Architectural Finishing",
    desc: "Precision brick wall masonry, wooden door frame fixing, conduit electrical wiring, and smooth plaster finishing.",
    image: "/images/corridor-brick-structure.jpg"
  },
  {
    icon: "clipboard",
    title: "On-Site Supervision & Field Execution",
    desc: "Dedicated senior civil engineers personally supervising column rebar binding, shuttering plumb-lines, and concrete pours.",
    image: "/images/founder-site-collage.jpg"
  },
  {
    icon: "hammer",
    title: "Non-Destructive Testing (NDT Rebound Hammer)",
    desc: "Standard HT225-N concrete rebound hammer compressive strength testing to ensure M25/M30 grade slab strength.",
    image: "/images/rebound-hammer-qc.jpg"
  },
  {
    icon: "drafting",
    title: "Architectural Planning & Column Centre Line Plans",
    desc: "Comprehensive 2D blueprint drafting, column center line marking (Sonawane project), municipal sanctions, and 3D renders.",
    image: "/images/sonawane-column-centerline-plan.jpg"
  },
];

export type Project = {
  title: string;
  image: string;
  location: string;
  category: string;
  year: string;
  budget: string;
  desc: string;
  id?: string;
  status?: "Completed" | "Ongoing" | "Upcoming";
};

export const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Luxury Villas"
];

export const PROJECTS: Project[] = [
  {
    id: "sonawane-residence",
    title: "Sonawane Residence (3D Elevation to Reality)",
    image: "/images/elevation-vs-reality.jpg",
    location: "Maharashtra",
    category: "Luxury Villas",
    year: "2025",
    budget: "₹85 Lakh",
    status: "Completed",
    desc: "Complete turnkey construction matching 3D architectural elevation to 100% exact ground reality with designer facade bands and parapet detailing.",
  },
  {
    id: "govardhan-commercial-complex",
    title: "Govardhan Commercial & Residential Complex",
    image: "/images/completed-commercial-residence.jpg",
    location: "Maharashtra",
    category: "Commercial",
    year: "2025",
    budget: "₹1.8 Cr",
    status: "Completed",
    desc: "Two-storey commercial and multi-family residential building featuring modern balcony railings, decorative exterior tiles, and high-clearance ground floor.",
  },
  {
    id: "modern-bungalow-elevation",
    title: "Modern Architectural Bungalow Estate",
    image: "/images/bungalow-elevation.jpg",
    location: "Maharashtra",
    category: "Residential",
    year: "2025",
    budget: "₹65 Lakh",
    status: "Completed",
    desc: "Contemporary single-storey bungalow elevation with horizontal groove plaster bands, golden accent pillars, and expansive covered portico.",
  },
  {
    id: "rcc-plinth-superstructure",
    title: "Heavy RCC Plinth & Superstructure Phase",
    image: "/images/plinth-columns-phase.jpg",
    location: "Maharashtra",
    category: "Infrastructure",
    year: "2024",
    budget: "₹1.2 Cr",
    status: "Ongoing",
    desc: "Plinth beam casting and vertical column rebar fabrication using Fe550D TMT steel and high-grade brick masonry foundation.",
  },
  {
    id: "govardhan-business-hub",
    title: "Govardhan Business Hub & Cement Supply",
    image: "/images/business-hub-cement.jpg",
    location: "Maharashtra",
    category: "Industrial",
    year: "2024",
    budget: "₹95 Lakh",
    status: "Completed",
    desc: "Govardhan Traders authorized logistics and warehouse hub for JK Super Cement and primary construction materials distribution.",
  },
  {
    id: "turnkey-residential-execution",
    title: "Turnkey Field Masonry & Slab Execution",
    image: "/images/founder-site-collage.jpg",
    location: "Maharashtra",
    category: "Residential",
    year: "2025",
    budget: "₹75 Lakh",
    status: "Ongoing",
    desc: "Complete end-to-end site supervision from column layout marking, plumb-line verification, to electrical conduit slab casting.",
  },
];

export type WhyItem = {
  icon: "engineer" | "equipment" | "quality" | "delivery" | "safety" | "pricing";
  title: string;
  desc: string;
};

export const WHY_CHOOSE_US: WhyItem[] = [
  {
    icon: "engineer",
    title: "Experienced Consulting Engineers",
    desc: "Personal on-site technical supervision by Er. Govardhan and licensed civil engineering specialists.",
  },
  {
    icon: "equipment",
    title: "Modern Testing & Equipment",
    desc: "HT225-N Rebound Hammer non-destructive testing, laser leveling, and precision shuttering plates.",
  },
  {
    icon: "quality",
    title: "100+ Quality Measures",
    desc: "Rigorous plumb-line checking, column cover block verification, and 28-day concrete cube strength audits across 100+ checkpoints.",
  },
  {
    icon: "delivery",
    title: "RCC Foundation in 6 to 12 Months",
    desc: "Stage-wise precision execution guaranteeing robust RCC foundation and framing completion within 6 to 12 months.",
  },
  {
    icon: "safety",
    title: "Zero Compromise Safety & Materials",
    desc: "100% primary Fe550D TMT rebar and certified JK Super Cement with zero unbranded substitutions.",
  },
  {
    icon: "pricing",
    title: "Transparent Fixed Pricing",
    desc: "Itemized estimates with contractual Price-Lock guarantee against raw material price escalation.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Site Plotting & Footing Marking",
    desc: "Lime powder chalk line plotting, column centre line survey, and foundation pit marking.",
    image: "/images/site-marking-layout.jpg"
  },
  {
    title: "Column Centre Line & Blueprints",
    desc: "Architectural 2D column grid planning (Sonawane project), 3D elevations, and municipal approvals.",
    image: "/images/sonawane-column-centerline-plan.jpg"
  },
  {
    title: "Plinth & Column Rebar Shuttering",
    desc: "High-grade steel fabrication, cover block positioning, and plumb-line shuttering inspection.",
    image: "/images/column-shuttering-check.jpg"
  },
  {
    title: "Roof Slab Steel Binding & Conduits",
    desc: "Reinforcement mesh tie, electrical conduit placement, and concrete pour preparation.",
    image: "/images/slab-reinforcement-steel.jpg"
  },
  {
    title: "Red Brickwork Masonry & Door Frames",
    desc: "Plumb-line verified brick masonry, lintel casting, and seasoned wooden door frames installation.",
    image: "/images/brickwork-lintel-room.jpg"
  },
  {
    title: "Plastering & Elevation Realization",
    desc: "Exterior cement plastering, architectural bands, painting, and 100% 3D design realization.",
    image: "/images/exterior-plaster-elevation.jpg"
  },
];

export type Testimonial = {
  name: string;
  company: string;
  rating: number;
  photo: string;
  feedback: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mr. Sonawane",
    company: "Homeowner, Sonawane Residence",
    rating: 5,
    photo: "/images/elevation-vs-reality.jpg",
    feedback:
      "Govardhan Consultant transformed our 3D elevation drawing into an exact ground reality. Er. Govardhan's personal on-site supervision at every column and slab pour gave us complete peace of mind.",
  },
  {
    name: "Govardhan Traders Partner",
    company: "Commercial Logistics & Material Partner",
    rating: 5,
    photo: "/images/business-hub-cement.jpg",
    feedback:
      "We rely on Govardhan Consultant for premium civil construction and certified JK Super Cement supply. Always on time, totally transparent, and strictly engineered.",
  },
  {
    name: "Bungalow Estate Client",
    company: "Executive Residential Client",
    rating: 5,
    photo: "/images/bungalow-elevation.jpg",
    feedback:
      "From chalk plotting on day one to the final exterior plastering, the quality was top notch. Zero hidden costs and genuine structural engineering excellence.",
  },
];

export const CLIENT_LOGOS = [
  { name: "JK Super Cement", id: 1 },
  { name: "Govardhan Traders", id: 2 },
  { name: "Tata Tiscon", id: 3 },
  { name: "UltraTech Cement", id: 4 },
  { name: "Jindal Panther", id: 5 },
  { name: "Kajaria", id: 6 },
  { name: "Havells", id: 7 },
  { name: "Asian Paints", id: 8 },
];

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Er. Govardhan",
    role: "Founder & Chief Structural Consultant",
    photo: "/images/founder-engineer.jpg",
    bio: "Senior Consulting Civil Engineer leading Govardhan Consultant. Specialist in 3D architectural planning, RCC structural designs, and on-site construction execution."
  },
  {
    name: "Site Engineering Team",
    role: "Field Execution & Quality Assurance Leads",
    photo: "/images/founder-site-collage.jpg",
    bio: "Experienced site supervisors conducting daily plumb-line checks, column rebar binding audits, and concrete slump test verifications."
  },
  {
    name: "Architectural BIM Designers",
    role: "3D Elevation & Planning Division",
    photo: "/images/bungalow-elevation.jpg",
    bio: "Specializing in turnkey 3D architectural elevations, modern facade treatments, and municipal building sanction drawings."
  },
  {
    name: "Govardhan Traders Materials Division",
    role: "JK Super Cement & Materials Logistics",
    photo: "/images/business-hub-cement.jpg",
    bio: "Authorized direct supply chain for JK Super Cement, Fe550D primary steel, and certified building materials."
  },
];

export const CERTIFICATIONS = [
  { title: "Licensed Structural Engineers", desc: "Registered Civil & Structural Engineering License" },
  { title: "NDT Concrete Testing Lab", desc: "Equipped with HT225-N Rebound Hammer Test Protocol" },
  { title: "Authorized JK Super Partner", desc: "Govardhan Traders Official Cement Distributor" },
  { title: "Turnkey Contracting Authority", desc: "Planning, Designing & Execution from Blueprint to Handover" },
];

export const FAQS = [
  {
    q: "What services does Govardhan Consultant provide?",
    a: "Govardhan Consultant provides complete turnkey engineering and construction services: 2D column grid blueprints, 3D architectural elevation design, municipal sanctions, RCC foundation and column casting, brick masonry, slab reinforcement, exterior plastering, and NDT rebound hammer strength testing.",
  },
  {
    q: "Can I contact Govardhan Consultant directly for an estimate?",
    a: "Yes! You can call or WhatsApp Er. Govardhan directly at +91 99750 42346 for instant plot consultation, cost estimation, and site visit scheduling.",
  },
  {
    q: "How do you ensure the finished house matches the 3D design?",
    a: "We pride ourselves on 100% design-to-reality execution (as seen in our Sonawane Residence project). Our engineers build directly from the architectural 3D blueprints, taking exact measurements for facade bands, window placements, and portico overhangs.",
  },
  {
    q: "What testing and quality checks do you perform on site?",
    a: "We conduct 100+ quality measures and checks including soil compaction, column plumb-line checks with spirit levels, steel cover block spacing, 28-day concrete cube strength testing, and non-destructive HT225-N Rebound Hammer compressive strength testing.",
  },
  {
    q: "What is the timeline for RCC foundation and structural work?",
    a: "We complete the full earthquake-resistant RCC foundation, plinth beams, and column superstructure within 6 to 12 months, backed by our contractual delay compensation guarantee.",
  },
  {
    q: "Do you supply building materials like cement and steel?",
    a: "Yes, through Govardhan Traders, we are authorized distributors of JK Super Cement ('Build Safe #YehPuccaHai') and primary grade Fe550D TMT steel at highly competitive rates.",
  },
  {
    q: "How does the milestone payment system work?",
    a: "You only pay for completed stages (Foundation, Plinth Beam, Ground Slab, Brickwork, Plastering, Final Handover) after verifying on-site quality and technical approval.",
  },
];

export const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/919975042346" },
  { label: "Phone", href: "tel:+919975042346" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
