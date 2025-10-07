import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, COMPANY_INFO } from "@/constants/company";

// Synchronized Data Structure for Slideshow
const heroSlides = [
  {
    bottleImage: "/images/products/beirut-beer.png",
    backgroundImage: "/hero-images/tropical.jpg",
  },
  {
    bottleImage: "/images/products/buzz.png",
    backgroundImage: "/hero-images/grenadine.avif",
  },
  {
    bottleImage: "/images/products/chateau-ka.png",
    backgroundImage: "/hero-images/pineapple.jpg",
  },
];

/**
 * A completely revamped, extraordinary Hero section for a premium beverage company.
 * Features:
 * - Stiff, carousel-style sliding background animation with seamless looping.
 * - Scaled-up backgrounds to prevent empty edges on interaction.
 * - Dynamic 3D-style rotating bottle showcase with Framer Motion.
 * - Barely-noticeable, interactive mouse-following parallax effect.
 * - Sophisticated, staggered text animations that trigger on view.
 * - Modernized, stylish, and interactive CTA buttons.
 * - "Cut-out" transparent gradient text effect on keywords.
 * - Fully responsive typography and layout.
 */
export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Rotate slide every 4 seconds
    return () => clearInterval(interval);
  }, []);
  
  // Final, minimal intensity for mouse movement interaction
  const rawX = useMotionValue(0); // Raw, instant mouse position input
  const rawY = useMotionValue(0); // Raw, instant mouse position input

  // Use useSpring to smooth out the raw motion values for a fluid effect
  // Adjust damping and stiffness for desired lag/smoothness
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const rotateX = useTransform(y, [-100, 100], [-1, 1]);
  const rotateY = useTransform(x, [-100, 100], [1, -1]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    // Set the instantaneous mouse position to the raw motion values
    rawX.set(event.clientX - rect.left - rect.width / 2);
    rawY.set(event.clientY - rect.top - rect.height / 2);
  };
  
  const handleMouseLeave = () => {
    // Reset the raw motion values to 0 when the mouse leaves
    rawX.set(0);
    rawY.set(0);
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
  
  const bottleAnimation = {
      initial: { opacity: 0, scale: 0.8, y: 50, rotateY: 90 },
      animate: { opacity: 1, scale: 1, y: 0, rotateY: 0 },
      exit: { opacity: 0, scale: 0.8, y: -50, rotateY: -90 },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <motion.section 
      // MODIFIED: h-auto for default (<380px), h-[calc(100vh-81px)] from 380px up.
      className="relative h-auto min-[380px]:h-[calc(100vh-81px)] w-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
        {/* Background Layers */}
        <motion.div 
            className="absolute inset-0 z-0"
            // Apply the parallax rotation and scale the entire background layer (e.g., 115% for safer coverage)
            style={{ 
              rotateX, 
              rotateY,
              scale: 1.15, 
            }}
        >
            {/* Carousel Container: Now a direct child of the parallax layer */}
            <motion.div 
                className="absolute inset-0 h-full flex"
                style={{ width: `${heroSlides.length * 100}%`}}
                animate={{ x: `-${currentIndex * (100 / heroSlides.length)}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {heroSlides.map((slide) => (
                    <div 
                        key={slide.backgroundImage}
                        // Removed 'transform scale-110' as it's now applied to the parent motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                    />
                ))}
            </motion.div>
            <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

      {/* Main Content Grid */}
      {/* MODIFIED: px-6 and h-full applied from 380px up. py-12 is the default spacing. */}
      <div className="relative z-10 mx-auto max-w-7xl px-4  min-[380px]:px-6 min-[380px]:h-full flex flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

        {/* Left Side: Text Content - pt-16 is crucial on h-auto for spacing from the Header */}
        <motion.div
          className="pt-16 text-center lg:pt-0 lg:text-left"
          variants={containerVariants}
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
            A Legacy of <span className="bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500/50 bg-clip-text text-transparent">Taste</span>,
            <br />
            Bottling <span className="bg-gradient-to-tr from-terracotta-300 via-terracotta-400 to-terracotta-500/50 bg-clip-text text-transparent">Innovation</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/80 font-frutiger leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>
          
          {/* CTA Buttons - MODIFIED: flex-col for default (<380px), flex-row from 380px up */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 justify-center min-[380px]:flex-row lg:justify-start">
            <a
              href="#products"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-frutiger-bold text-white text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-terracotta-500/30 bg-gradient-to-r from-terracotta-500 to-terracotta-600"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#tours"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-frutiger-bold text-sm sm:text-base tracking-wide transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-white/50 group-hover:scale-110"></div>
              <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Bottle Showcase */}
        {/* MODIFIED: The h-96 size is now applied from 380px up. */}
        <motion.div variants={itemVariants} className="pb-12 relative h-72 min-[380px]:h-96 w-full flex items-center justify-center lg:pb-0">
            <AnimatePresence>
              <motion.div
                  key={currentIndex}
                  className="absolute"
                  {...bottleAnimation}
              >
                  <motion.img 
                      src={heroSlides[currentIndex].bottleImage} 
                      alt="Kassatly Chtaura Product" 
                      // MODIFIED: max-h-56 for default (<380px), max-h-96 from 380px up.
                      className="max-h-56 min-[380px]:max-h-96 w-auto object-contain drop-shadow-2xl"
                      style={{ rotateX, rotateY }}
                  />
              </motion.div>
            </AnimatePresence>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroSection;