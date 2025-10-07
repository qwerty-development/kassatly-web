import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { COMPANY_STATS, ABOUT_CONTENT } from "@/constants/company";

// Animation Variants (Consistent with Hero Section)
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Separately define variants for the visual element to give it a unique entrance
const visualVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30, rotateZ: -1.5 }, // Slight initial rotation for flair
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateZ: 0,
    transition: {
      duration: 1.0,
      ease: [0.2, 0.6, 0.2, 1], // Custom easing curve for premium feel
      delay: 0.3,
    },
  },
};

/**
 * **EXTREME PREMIUM REVAMP:** A dynamic, multi-layered About section inspired by the Hero's premium,
 * animated aesthetic, focusing on asymmetrical hierarchy and bold visual storytelling.
 */
export const AboutSection: React.FC = () => {
  return (
    <motion.section 
      id="about"
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-brand-light)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Dynamic, Subtle Background Pattern using Accent Color */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--color-terracotta-500)_1px,transparent_1px)] bg-[length:100px_100px]"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-start">
          
          {/* LEFT COLUMN: Enhanced Storytelling & Description */}
          <div className="order-2 lg:order-1 pt-8 lg:pt-0">
            
            {/* NEW: Premium Badge Design using Gradient background and Tailwind classes */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full border border-terracotta-300 shadow-xl bg-gradient-to-br from-navy-200 via-navy-100 to-white mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={itemVariants}
            >
              <span 
                className="text-xs sm:text-sm font-frutiger-bold tracking-wider uppercase"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Our Story
              </span>
            </motion.div>

            {/* Title with Powerful Contrast */}
            <motion.h2 
              className="mb-6 sm:mb-8 transition-all duration-300"
              variants={itemVariants}
            >
              <span 
                className="block text-4xl sm:text-5xl lg:text-6xl font-frutiger-bold leading-none mb-2"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {ABOUT_CONTENT.title.split(' ').slice(0, 2).join(' ')}
              </span>
              {/* APPLIED: Gradient to the key phrase "Kassatly Chtaura" */}
              <span 
                className="block text-2xl sm:text-3xl lg:text-4xl font-frutiger bg-gradient-to-r from-terracotta-500 via-burgundy-500 to-terracotta-500 bg-clip-text text-transparent opacity-100"
              >
                {ABOUT_CONTENT.title.split(' ').slice(2).join(' ')}
              </span>
            </motion.h2>

            {/* Description Block */}
            <motion.div 
              className="space-y-6 mb-8 sm:mb-12 transition-all duration-300"
              variants={itemVariants}
            >
              <p
                className="text-lg lg:text-xl font-frutiger leading-relaxed"
                style={{ color: "var(--color-charcoal-700)" }}
              >
                {ABOUT_CONTENT.description}
              </p>
              
              {/* Highlighted Quote/Fact Box (Premium Design) */}
              <div 
                className="p-6 rounded-xl border-l-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-default"
                style={{ 
                    borderColor: "var(--color-brand-accent)", 
                    backgroundColor: "white",
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                }}
              >
                <p 
                  className="font-frutiger-bold italic text-base lg:text-lg"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  "The beloved creation proved successful, introducing Kassatly Chtaura as a repute and innovative establishment."
                </p>
              </div>
            </motion.div>

            {/* CTA Button (Animated and Premium Hover Effect) */}
            <motion.div 
              className="text-center sm:text-left"
              variants={itemVariants}
            >
              <a
                href="#products"
                className="group inline-flex items-center px-8 py-3 rounded-full border-2 font-frutiger-bold text-base tracking-wide transition-all duration-300 hover:scale-[1.03] hover:text-white"
                style={{ 
                  borderColor: "var(--color-brand-accent)",
                  color: "var(--color-brand-accent)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-brand-accent)';
                    e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-brand-accent)';
                }}
              >
                <span>{ABOUT_CONTENT.ctaText}</span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: QUIRKY VISUAL STORY / HERITAGE PANEL - REVAMPED */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            variants={visualVariants}
          >
            <div className="relative group w-full max-w-lg mx-auto">
              
              {/* IMAGE CONTAINER with subtle rotate on hover */}
              <div 
                className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl relative transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:rotate-1"
                style={{ 
                    // UPDATED: Using user's requested path (assuming the file is now available)
                    backgroundImage: `url('/about-images/landing.jpg')`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 15px 50px -10px rgba(45, 53, 67, 0.6)',
                }}
              >
                {/* Layered Gradient Overlay (Darker top/lighter bottom for focus) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                
                {/* Secondary Abstract Layer/Pattern */}
                <div 
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ 
                        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                ></div>
              </div>

              {/* FLOATING ELEMENTS - The Quirks (Explicit smooth transition applied) */}
              
              {/* 1. Year Founded (Top-Right) - Accent Color on Dark BG */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center text-white font-frutiger-bold shadow-xl transition-all duration-500 hover:scale-110 z-10 p-3"
                style={{ 
                    backgroundColor: "var(--color-brand-accent)", 
                    boxShadow: '0 8px 25px rgba(175, 125, 105, 0.6)',
                    transform: 'translateY(0px) rotate(-5deg)', // Permanent slight rotation for quirk
                }}
              >
                <span className="text-xl sm:text-2xl leading-none">1974</span>
                <span className="text-xs opacity-90 tracking-widest">EST.</span>
              </div>
              
              {/* 2. Flagship Product Fact (Bottom-Left) - Secondary Color on Light BG */}
              <div
                className="absolute -bottom-6 -left-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center text-white font-frutiger-bold shadow-xl transition-all duration-500 hover:scale-110 delay-100 z-10 p-3"
                style={{ 
                    backgroundColor: "var(--color-brand-secondary)", 
                    boxShadow: '0 8px 25px rgba(155, 140, 100, 0.6)',
                    transform: 'translateY(0px) rotate(3deg)', // Permanent slight rotation for quirk
                }}
              >
                <span className="text-base sm:text-lg text-white leading-none">First</span>
                <span className="text-sm sm:text-base opacity-90 font-frutiger-bold">Jallab</span>
                <span className="text-xs opacity-90 tracking-wide">Bottled</span>
              </div>
              
              {/* 3. International Icon (Bottom-Right, subtle) */}
              <div 
                className="absolute -bottom-1 -right-1 p-2 rounded-full bg-navy-900/80 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-110 z-20"
                style={{ 
                    transform: 'translateY(0px) rotate(0deg)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                }}
              >
                <svg className="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.95L15.95 18.31c-1.4.06-2.83.06-4.22 0zM20 12c0 1.85-.63 3.55-1.69 4.95L8.05 5.69c1.4-.06 2.83-.06 4.22 0z"/>
                </svg>
              </div>

            </div>
          </motion.div>
        </div>

        {/* HORIZONTAL STATS BAR (Unchanged, remains bold and powerful) */}
        <motion.div 
            className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-3 divide-x rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
            style={{ 
                backgroundColor: "var(--color-brand-primary)", 
                borderColor: "var(--color-navy-700)",
                boxShadow: '0 10px 30px rgba(45, 53, 67, 0.4)'
            }}
            variants={staggerContainer}
        >
            {COMPANY_STATS.map((stat, index) => (
                <motion.div 
                    key={index} 
                    className="text-center p-6 sm:p-8 transition-all duration-300 hover:bg-navy-700 cursor-pointer"
                    style={{ color: "white" }}
                    variants={itemVariants}
                >
                    <div className="relative">
                        <div
                            className="text-4xl sm:text-5xl lg:text-6xl font-frutiger-bold mb-1"
                        >
                            {stat.value}
                        </div>
                        <div
                            className="text-sm sm:text-base font-frutiger tracking-wider uppercase opacity-80 leading-tight"
                            style={{ color: "var(--color-primary-200)" }}
                        >
                            {stat.label}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

      </div>
    </motion.section>
  );
};