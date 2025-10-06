import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCarousel } from "./ProductCarousel";
import {
  NON_ALCOHOLIC_PRODUCTS,
  ALCOHOLIC_PRODUCTS,
} from "@/constants/products";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const heritageImages = [
  "/images/group-shots/buzz-group.png",
  "/images/group-shots/chateau-ka-group-2.png",
  "/images/group-shots/chateau-ka-group.png",
  "/images/group-shots/freez-group.png",
  "/images/group-shots/liqueur-group.png",
  "/images/group-shots/syrups-group.png",
];

export const ProductsSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heritageImages.length
      );
    }, 3500); // Image changes every 3.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="products"
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-brand-primary)_1px,transparent_1px),linear-gradient(-45deg,var(--color-brand-primary)_1px,transparent_1px)] bg-[length:80px_80px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="mb-4 sm:mb-6" variants={itemVariants}>
            <span
              className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-frutiger-bold leading-[0.9] mb-1 sm:mb-2"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Our Products
            </span>
            <span
              className="block text-xl sm:text-2xl lg:text-3xl font-frutiger opacity-70"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              The Range
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl font-frutiger leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8"
            style={{ color: "var(--color-charcoal-600)" }}
            variants={itemVariants}
          >
            10 types of refreshments to quench every thirst
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-frutiger"
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center transition-all duration-300 ease-in-out hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 mr-1.5 sm:mr-2"></div>
              <span style={{ color: "var(--color-charcoal-500)" }}>
                Premium Quality
              </span>
            </motion.div>
            <motion.div
              className="flex items-center transition-all duration-300 ease-in-out hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 mr-1.5 sm:mr-2"></div>
              <span style={{ color: "var(--color-charcoal-500)" }}>
                Global Distribution
              </span>
            </motion.div>
            <motion.div
              className="flex items-center transition-all duration-300 ease-in-out hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 mr-1.5 sm:mr-2"></div>
              <span style={{ color: "var(--color-charcoal-500)" }}>
                Award-Winning
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-16 sm:mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ProductCarousel
            products={NON_ALCOHOLIC_PRODUCTS}
            title="Refreshing"
            subtitle="Beverages"
            description="Discover our premium selection of non-alcoholic beverages, crafted with natural ingredients and traditional recipes."
            badgeText="Non-Alcoholic Range"
          />
        </motion.div>

        <motion.div
          className="relative mb-16 sm:mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div
              className="w-full border-t"
              style={{ borderColor: "var(--color-grey-200)" }}
            ></div>
          </div>
          <div className="relative flex justify-center">
            <div
              className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-grey-200)",
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                ></div>
                <span
                  className="font-frutiger-bold text-xs sm:text-sm tracking-wider uppercase"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Premium Selection
                </span>
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ProductCarousel
            products={ALCOHOLIC_PRODUCTS}
            title="Premium"
            subtitle="Spirits"
            description="Premium spirits, wines, and beers that showcase our commitment to excellence and innovation."
            badgeText="Alcoholic Range"
          />
        </motion.div>

        <motion.div
          className="group relative rounded-2xl lg:rounded-3xl border border-navy-100/60 bg-gradient-to-br from-white via-beige-50/50 to-white p-1"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-terracotta-400/20 via-navy-400/20 to-terracotta-400/20 blur-xl opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-60"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                <span className="block opacity-70 font-frutiger text-lg sm:text-xl lg:text-2xl">
                  Our Legacy
                </span>
                A Tradition of Taste
              </h3>
              <p
                className="text-base sm:text-lg font-frutiger leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
                style={{ color: "var(--color-charcoal-600)" }}
              >
                Explore over{" "}
                <span className="font-frutiger-bold text-terracotta-600">
                  50 years
                </span>{" "}
                of beverage excellence and discover the stories behind our
                most celebrated creations.
              </p>
              <a
                href="#tours"
                className="group/btn relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-frutiger-bold text-sm sm:text-base tracking-wide transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px] sm:min-h-[52px] overflow-hidden"
                style={{
                  color: "white",
                  backgroundColor: "var(--color-brand-primary)",
                }}
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full transition-transform duration-500 ease-in-out group-hover/btn:translate-x-0"></div>
                <svg
                  className="relative w-5 h-5 sm:w-6 sm:h-6 mr-3 transition-transform duration-300 ease-in-out group-hover/btn:scale-110 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <span className="relative">Explore Our Heritage</span>
              </a>
            </div>

            <div className="relative w-full h-64 lg:h-full min-h-[250px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-black/5 z-10"></div>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heritageImages[currentImageIndex]}
                  alt="Showcased beverage group shot"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 right-4 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-terracotta-200/10 to-terracotta-300/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-navy-200/10 to-navy-300/10 blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};