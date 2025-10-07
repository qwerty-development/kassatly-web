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
  hidden: { opacity: 0, scale: 0.9, rotateZ: 3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 1.0,
      ease: [0.2, 0.6, 0.2, 1], // Smooth, custom easing curve
      delay: 0.3,
    },
  },
};

/**
 * **EXTREME REVAMP:** A dynamic, multi-layered About section inspired by the Hero's premium,
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
            
            <motion.div 
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-navy-100 border border-navy-200 mb-6 sm:mb-8"
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
              className="mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <span 
                className="block text-4xl sm:text-5xl lg:text-6xl font-frutiger-bold leading-none mb-2"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {ABOUT_CONTENT.title.split(' ').slice(0, 2).join(' ')}
              </span>
              <span 
                className="block text-2xl sm:text-3xl lg:text-4xl font-frutiger opacity-70"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {ABOUT_CONTENT.title.split(' ').slice(2).join(' ')}
              </span>
            </motion.h2>

            {/* Description Block */}
            <motion.div 
              className="space-y-6 mb-8 sm:mb-12"
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
                className="p-6 rounded-xl border-l-4 shadow-lg"
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

          {/* RIGHT COLUMN: Bold Visual Story / Heritage Panel */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            variants={visualVariants} // Use separate, slower animation for visual element
          >
            {/* The Visual Panel: Uses layered background for depth */}
            <div 
                className="aspect-[4/5] w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-3xl relative p-8"
                style={{ 
                    backgroundImage: `linear-gradient(145deg, var(--color-brand-primary), var(--color-navy-700))`,
                    boxShadow: '0 15px 50px -10px rgba(45, 53, 67, 0.8)',
                    transform: 'translateZ(0)',
                }}
            >
                {/* Visual Narrative Placeholder (Abstract Map/Timeline) */}
                <div 
                    className="absolute inset-0 bg-white/5 opacity-50 backdrop-blur-sm"
                    style={{ 
                        backgroundImage: 'radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 85% 85%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>

                {/* Key Date Callout (Floating - New style) */}
                <div className="relative z-10 p-4 text-center mt-20">
                    <div 
                        className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: 'var(--color-brand-accent)' }}
                    >
                        <span className="text-white text-3xl font-frutiger-bold">50</span>
                    </div>
                    <p className="text-xl font-frutiger-bold text-white mb-2">Years of Legacy</p>
                    <p className="text-white/80 font-frutiger">Since our founding in **1974**</p>
                </div>

                {/* Secondary Feature Callout */}
                <div className="absolute bottom-10 left-10 p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <p className="font-frutiger-bold text-white text-sm">
                        Headquarters: 
                        <span className="font-frutiger opacity-80 block">Nahr Al Mot, Lebanon</span>
                    </p>
                </div>

                {/* Decorative element (Subtle Brand Mark) */}
                <div className="absolute top-10 right-10 text-white opacity-20 transform scale-150 rotate-12">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.48-7-7.43 0-2.85 1.6-5.34 4-6.62V3.06c3.08.74 5.3 3.5 5.3 6.94 0 3.95-3.03 7.02-7 7.43v2.5z"/>
                    </svg>
                </div>
            </div>
          </motion.div>
        </div>

        {/* HORIZONTAL STATS BAR (Separate Block for Max Impact) */}
        <motion.div 
            className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-3 divide-x rounded-xl overflow-hidden shadow-2xl"
            style={{ 
                backgroundColor: "var(--color-brand-primary)", 
                borderColor: "var(--color-navy-700)",
                boxShadow: '0 10px 30px rgba(45, 53, 67, 0.4)'
            }}
            variants={staggerContainer} // New stagger for stats
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