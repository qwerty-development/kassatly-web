import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, COMPANY_INFO } from "@/constants/company";

// A single particle component
const Particle = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/20"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
    }}
    animate={{ y: [y, y - 100, y], opacity: [0, 1, 0] }}
    transition={{
      duration: Math.random() * 5 + 5,
      repeat: Infinity,
      ease: "linear",
      delay: Math.random() * 5,
    }}
  />
);

// Particle container
const Particles = ({ count = 20 }) => (
  <div className="absolute inset-0 z-0">
    {Array.from({ length: count }).map((_, i) => (
      <Particle
        key={i}
        x={Math.random() * 100}
        y={Math.random() * 100 + 100}
        size={Math.random() * 3 + 1}
      />
    ))}
  </div>
);


const bottleImages = [
  "/images/products/beirut-beer.png",
  "/images/products/buzz.png",
  "/images/products/chateau-ka.png",
];

/**
 * A completely revamped, extraordinary Hero section for a premium beverage company.
 * Features:
 * - Dynamic 3D-style rotating bottle showcase with Framer Motion.
 * - Interactive, animated particle background simulating bubbles/fizz.
 * - Sophisticated, staggered text animations for a premium feel.
 * - Enhanced micro-interactions on buttons and interactive elements.
 * - A modern, polished, and mobile-first responsive design.
 */
export const HeroSection: React.FC = () => {
  const [currentBottle, setCurrentBottle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBottle((prev) => (prev + 1) % bottleImages.length);
    }, 4000); // Rotate bottle every 4 seconds
    return () => clearInterval(interval);
  }, []);
  
  // Mouse movement interaction for the background
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [-5, 5]);
  const rotateY = useTransform(x, [-100, 100], [5, -5]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      className="relative min-h-screen h-screen w-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
        {/* Background Layers */}
        <motion.div 
            className="absolute inset-0 z-0 bg-gradient-to-br from-navy-900 via-navy-800 to-charcoal-800"
            style={{ rotateX, rotateY }}
        >
            <Particles />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Left Side: Text Content */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heritage Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-primary-200 text-xs font-frutiger-bold tracking-wider uppercase">
              Est. {COMPANY_INFO.founded}
            </span>
            <div className="w-1 h-1 bg-primary-200 rounded-full mx-2.5"></div>
            <span className="text-white/90 text-xs font-frutiger">
              50+ Years of Excellence
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-frutiger-bold leading-tight tracking-tight text-white mb-6"
          >
            A Legacy of <span className="text-primary-300">Taste</span>,
            <br />
            Bottling <span className="text-terracotta-300">Innovation</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/80 font-frutiger leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              href="#products"
              variant="accent"
              size="lg"
              className="group rounded-full font-frutiger-bold text-base tracking-wide shadow-2xl shadow-terracotta-500/20"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            
            <a
              href="#tours"
              className="group relative px-8 py-4 rounded-full border-2 border-white/30 text-white font-frutiger-bold text-base tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm flex items-center justify-center"
            >
              <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Bottle Showcase */}
        <div className="relative h-96 w-full flex items-center justify-center">
            <AnimatePresence>
                {bottleImages.map((src, index) => 
                    index === currentBottle && (
                        <motion.div
                            key={src}
                            className="absolute"
                            initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: 90 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -50, rotateY: -90 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.img 
                                src={src} 
                                alt="Kassatly Chtaura Product" 
                                className="max-h-96 w-auto object-contain drop-shadow-2xl"
                                style={{ rotateX, rotateY }}
                            />
                        </motion.div>
                    )
                )}
            </AnimatePresence>
        </div>

      </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1"
            >
                <motion.div 
                    className="w-1 h-2 bg-white/80 rounded-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>
        </div>

    </motion.section>
  );
};

export default HeroSection;