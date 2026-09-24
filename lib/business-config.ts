/**
 * ============================================================================
 * K.M. CONSTRUCTIONS - BUSINESS CONFIGURATION
 * ============================================================================
 * All business details, contact information, social links, and content are
 * centralized here for easy maintenance and one-touch replacement.
 * 
 * TO UPDATE CONTACT DETAILS:
 * - Replace '[PHONE]' with your phone number (e.g. '+919876543210' or '044-XXXXXXXX')
 * - Replace '[WHATSAPP]' with your 10-digit WhatsApp number (e.g. '919876543210')
 * - Replace '[EMAIL]' with your official email address (e.g. 'contact@kmconstructions.com')
 * - Replace '[YOUR_WEB3FORMS_ACCESS_KEY_HERE]' with your free key from https://web3forms.com
 * ============================================================================
 */

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  taglineSecondary: string;
  experienceYears: string;
  location: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    mapQuery: string;
    mapEmbedUrl: string;
  };
  contact: {
    phonePlaceholder: string;
    phoneDisplay: string;
    phoneTelLink: string;
    whatsappPlaceholder: string;
    whatsappDisplay: string;
    whatsappLink: string;
    emailPlaceholder: string;
    emailDisplay: string;
    emailMailtoLink: string;
  };
  socials: {
    instagram: string;
    facebook: string;
  };
  form: {
    web3formsAccessKey: string; // Replace with free key from web3forms.com
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
    sublabel: string;
  }>;
  marqueeItems: string[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "K.M. Constructions",
  shortName: "KM",
  tagline: "We build your dream home the way you want.",
  taglineSecondary: "Over two decades of trusted construction work across Chennai.",
  experienceYears: "20+ Years",
  location: {
    street: "Gangai Amman Nagar, 10th Cross Street",
    area: "Maduravoyal",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600095",
    country: "India",
    fullAddress: "Gangai Amman Nagar, 10th Cross Street, Maduravoyal, Chennai, Tamil Nadu 600095, India",
    mapQuery: "Gangai Amman Nagar, 10th Cross Street, Maduravoyal, Chennai, Tamil Nadu 600095",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.976356783938!2d80.1583!3d13.0642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261765c92c89f%3A0x6a2c2bfba61a94bb!2sMaduravoyal%2C%20Chennai%2C%20Tamil%20Nadu%20600095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    phonePlaceholder: "[PHONE]",
    phoneDisplay: "[PHONE]",
    phoneTelLink: "tel:[PHONE]",
    whatsappPlaceholder: "[WHATSAPP]",
    whatsappDisplay: "[WHATSAPP]",
    whatsappLink: "https://wa.me/[WHATSAPP]?text=Hello%20K.M.%20Constructions%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project.",
    emailPlaceholder: "[EMAIL]",
    emailDisplay: "[EMAIL]",
    emailMailtoLink: "mailto:[EMAIL]?subject=Construction%20Enquiry%20-%20KM%20Constructions",
  },
  socials: {
    instagram: "https://www.instagram.com/k.m_constructions_",
    facebook: "https://www.facebook.com/profile.php?id=61569861913507",
  },
  form: {
    // Paste your Web3Forms access key here to receive email submissions instantly
    web3formsAccessKey: "[YOUR_WEB3FORMS_ACCESS_KEY_HERE]",
  },
  stats: [
    {
      value: 20,
      suffix: "+ Years",
      label: "Hands-on Experience",
      sublabel: "Over two decades of trusted construction across Chennai",
    },
    {
      value: 100,
      suffix: "%",
      label: "Built Your Way",
      sublabel: "Tailored to your architectural plan, family lifestyle & taste",
    },
  ],
  marqueeItems: [
    "20+ Years of Experience",
    "Custom Homes",
    "Built Your Way",
    "Maduravoyal, Chennai",
    "Transparent Pricing",
    "Quality Craftsmanship",
  ],
};

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "individual-houses",
    title: "Individual Houses / Custom Homes",
    description: "Tailored independent homes built from the ground up to match your architectural vision and family needs.",
    iconName: "Home",
  },
  {
    id: "villas",
    title: "Villas",
    description: "Spacious, premium residential villas designed with modern aesthetics, structural strength, and luxury finishes.",
    iconName: "Building2",
  },
  {
    id: "apartments",
    title: "Apartments",
    description: "Carefully planned multi-unit residential apartment blocks with optimal space utilization and ventilation.",
    iconName: "Layers",
  },
  {
    id: "commercial-buildings",
    title: "Commercial Buildings",
    description: "Robust, functional commercial spaces and mixed-use structures engineered for durability and business utility.",
    iconName: "Building",
  },
  {
    id: "renovation-remodelling",
    title: "Renovation & Remodelling",
    description: "Comprehensive home makeovers, floor additions, structural strengthening, and modern elevation upgrades.",
    iconName: "Wrench",
  },
  {
    id: "interior-finishing",
    title: "Interior & Finishing Works",
    description: "Quality flooring, modular woodworking, false ceiling, painting, and refined architectural detailing.",
    iconName: "Paintbrush",
  },
  {
    id: "construction-contracts",
    title: "Construction Contracts",
    description: "End-to-end turnkey construction contracts or labour + material contracts with transparent step-by-step milestones.",
    iconName: "FileCheck2",
  },
  {
    id: "planning-approvals",
    title: "Planning & Approvals Support",
    description: "Guidance with architectural layout planning, structural drawings, and liaison for building permit procedures.",
    iconName: "Compass",
  },
];

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Consultation",
    description: "We meet to discuss your plot location, space requirements, budget expectations, and design ideas.",
  },
  {
    stepNumber: "02",
    title: "Design & Planning",
    description: "Developing practical architectural layouts and structural plans tailored to your lifestyle and site orientation.",
  },
  {
    stepNumber: "03",
    title: "Transparent Quote",
    description: "A clear, itemized cost estimate with detailed material specifications and straightforward milestone stages.",
  },
  {
    stepNumber: "04",
    title: "Construction",
    description: "Careful on-site execution with regular site inspections, quality building materials, and active communication.",
  },
  {
    stepNumber: "05",
    title: "Handover",
    description: "Thorough quality checks, finishing touches, and handing over the keys to your completed dream home.",
  },
];

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "experience",
    title: "20+ Years of Hands-on Experience",
    description: "Over two decades of direct, on-site construction knowledge across Chennai soils, weather conditions, and structural nuances.",
  },
  {
    id: "built-your-way",
    title: "Built Exactly the Way You Want",
    description: "We don't force rigid cookie-cutter templates. Every room, window placement, and material choice reflects your personal taste.",
  },
  {
    id: "transparent-communication",
    title: "Transparent Communication & Pricing",
    description: "No confusing clauses or hidden charges. We keep you updated at every stage of the project with honest, straightforward pricing.",
  },
  {
    id: "quality-materials",
    title: "Quality Materials & Workmanship",
    description: "We use reputable, tested construction materials and experienced masons, carpenters, and civil supervisors.",
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery Focus",
    description: "Structured stage-wise milestone planning aimed at completing your home steadily without unnecessary delays.",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  imageSrc: string;
  altText: string;
}

/**
 * PORTFOLIO IMAGES:
 * Replace these placeholder images with actual site photographs from K.M. Constructions
 * Instagram (@k.m_constructions_) or site archives as they become available.
 */
export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: "project-1",
    title: "Contemporary Custom Residence",
    category: "Individual House",
    location: "Residential, Chennai",
    imageSrc: "/images/project_custom_home_1790236187031.jpg",
    altText: "Modern independent custom residence built by K.M. Constructions in Chennai",
  },
  {
    id: "project-2",
    title: "Multi-Storey Luxury Villa",
    category: "Villa",
    location: "Residential, Chennai",
    imageSrc: "/images/project_luxury_villa_1790236202331.jpg",
    altText: "Luxury residential villa with architectural elevation in Chennai",
  },
  {
    id: "project-3",
    title: "Boutique Residential Apartments",
    category: "Apartments",
    location: "Residential, Chennai",
    imageSrc: "/images/project_apartment_block_1790236252226.jpg",
    altText: "Modern residential apartment building constructed in Chennai",
  },
  {
    id: "project-4",
    title: "Custom Interior & Living Craft",
    category: "Interior Works",
    location: "Residential, Chennai",
    imageSrc: "/images/project_interior_craft_1790236268383.jpg",
    altText: "Finished interior living room woodworking and ceiling lighting in Chennai home",
  },
  {
    id: "project-5",
    title: "Architectural Duplex House",
    category: "Custom Home",
    location: "Residential, Chennai",
    imageSrc: "/images/project_duplex_residence_1790236287508.jpg",
    altText: "Architectural duplex home with cantilever balcony in Chennai",
  },
  {
    id: "project-6",
    title: "Elevation & Home Renovation",
    category: "Renovation",
    location: "Residential, Chennai",
    imageSrc: "/images/project_renovation_craft_1790236302151.jpg",
    altText: "Completed house renovation and modern exterior elevation remodel in Chennai",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-cost",
    question: "What is the construction cost per sq.ft in Chennai?",
    answer: "Construction costs vary based on your choice of structural specifications, soil condition, floor count, and finishing materials (flooring, sanitary ware, woodwork). Because every home is custom-built to your budget and taste, we provide a transparent, itemized quotation after understanding your requirements. We welcome you to contact us for a site visit and custom estimate.",
  },
  {
    id: "faq-timeline",
    question: "How long does a typical house take to build?",
    answer: "An independent residential home typically takes between 6 to 12 months depending on the built-up area, architectural complexity, weather conditions, and customization scope. We provide a milestone-based schedule at the start of the project so you can track progress every month.",
  },
  {
    id: "faq-approvals",
    question: "Do you handle plan approvals and sanction support?",
    answer: "Yes, we assist you throughout the process with compliant architectural plan drafting, structural drawings, and coordination required for building approvals in Chennai.",
  },
  {
    id: "faq-customisation",
    question: "Can I customise the room layouts and design details?",
    answer: "Absolutely. 100% of our projects are tailored to the client's preferences. From room dimensions and pooja room orientation to electrical points, tile selections, and exterior elevation styles, you have full creative say with our technical guidance.",
  },
  {
    id: "faq-materials",
    question: "What building materials and brands do you use?",
    answer: "We believe in long-term structural integrity and recommend reputable ISI-standard brands for steel (TMT), cement, electrical wiring, plumbing pipes, and bathroom fittings. All material specifications are documented clearly in our construction contract before ground breaking.",
  },
  {
    id: "faq-quote",
    question: "How do I get a detailed quote for my plot or project?",
    answer: "You can call us directly, reach out via WhatsApp, or fill out the enquiry form on this page with your plot dimensions and location. We will arrange a free preliminary discussion to review your requirements and provide a transparent quotation.",
  },
];
