// Product types for the beverage catalog
export interface Product {
  id: string;
  name: string;
  description: string;
  category: "non-alcoholic" | "alcoholic";
  launchYear: string;
  icon: string;
  color: string;
  features: string[];
}

// Company statistics for the about section
export interface CompanyStat {
  value: string;
  label: string;
}

// Virtual tour information
export interface VirtualTour {
  id: string;
  title: string;
  description: string;
  type: "winery" | "brewery";
  gradientColors: string[];
  buttonColor: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Navigation link structure
export interface NavLink {
  href: string;
  label: string;
  isButton?: boolean;
}

// Brand color system
export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
}

// Component props interfaces
export interface SectionProps {
  className?: string;
  id?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ProductCardProps {
  product: Product;
  className?: string;
}
