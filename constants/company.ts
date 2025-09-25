import { CompanyStat, VirtualTour, NavLink } from "@/types";

// Company statistics for the about section
export const COMPANY_STATS: CompanyStat[] = [
  {
    value: "50+",
    label: "Years of Excellence",
  },
  {
    value: "10+",
    label: "Product Categories",
  },
  {
    value: "Global",
    label: "Distribution",
  },
];

// Virtual tours data
export const VIRTUAL_TOURS: VirtualTour[] = [
  {
    id: "chateau-ka-winery",
    title: "Chateau Ka Winery",
    description:
      "Explore our award-winning winery, discover the wine production process, and experience our tasting room. Learn about our founder's dream-come-true and the international recognition we've achieved.",
    type: "winery",
    gradientColors: ["from-burgundy-400", "to-burgundy-600"],
    buttonColor: "var(--color-brand-accent)",
  },
  {
    id: "beirut-beer-brewery",
    title: "Beirut Beer Brewery",
    description:
      "Visit our state-of-the-art brewery in the heart of Lebanon. See our brewing process, quality control procedures, and packaging facilities. Experience the authentic Pilsner beer production.",
    type: "brewery",
    gradientColors: ["from-navy-400", "to-navy-600"],
    buttonColor: "var(--color-brand-primary)",
  },
];

// Navigation links
export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#tours", label: "Virtual Tours" },
  { href: "#contact", label: "Contact" },
  { href: "#contact", label: "Get in Touch", isButton: true },
];

// Company information
export const COMPANY_INFO = {
  name: "Kassatly Chtaura",
  tagline: "Catering quality products since 1974",
  description:
    "A state-of-the-art brewery in the heart of Lebanon, delivering 10 types of refreshments to quench every thirst.",
  headquarters: "Nahr Al Mot, Metn, Lebanon",
  email: "info@kassatly.net",
  phone: "+961 4 123 456",
  founded: "1974",
  founder: "Akram Kassatly",
};

// Hero section content
export const HERO_CONTENT = {
  title: "Catering quality products since 1974",
  subtitle:
    "A state-of-the-art brewery in the heart of Lebanon, delivering 10 types of refreshments to quench every thirst.",
  primaryCta: "Explore Products",
  secondaryCta: "Virtual Tours",
  videoPlaceholder: {
    title: "Advertisement Showreel",
    subtitle: "Video will be embedded here",
  },
};

// About section content
export const ABOUT_CONTENT = {
  title: "Welcome to Kassatly Chtaura",
  description:
    "Get to know us better! Kassatly Chtaura was established in 1974, launching a revolutionary product at the time, bottled Jallab for home preparation. The beloved creation proved successful introducing Kassatly Chtaura as a repute and innovative establishment.",
  ctaText: "Learn More About Us",
};
