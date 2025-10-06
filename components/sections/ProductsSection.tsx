import React from "react";
import { ProductCard } from "./ProductCard";
import { NonAlcoholicCarousel } from "./NonAlcoholicCarousel";
import {
  NON_ALCOHOLIC_PRODUCTS,
  ALCOHOLIC_PRODUCTS,
} from "@/constants/products";

/**
 * Enhanced Products section with premium design and sophisticated categorization
 * Features refined typography, elegant layouts, and brand-aligned visual storytelling
 */
export const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-white"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-brand-primary)_1px,transparent_1px),linear-gradient(-45deg,var(--color-brand-primary)_1px,transparent_1px)] bg-[length:80px_80px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-navy-50 to-beige-50 border border-navy-100 mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-500 mr-2 sm:mr-3 transition-all duration-300"></div>
            <span
              className="text-xs sm:text-sm font-frutiger-bold tracking-wider uppercase transition-all duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Product Portfolio
            </span>
          </div>

          {/* Main Title with Enhanced Typography */}
          <h2 className="mb-4 sm:mb-6">
            <span
              className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-frutiger-bold leading-[0.9] mb-1 sm:mb-2 transition-all duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Our Products
            </span>
            <span
              className="block text-xl sm:text-2xl lg:text-3xl font-frutiger opacity-70 transition-all duration-300"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              The Range
            </span>
          </h2>

          {/* Enhanced Subtitle */}
          <p
            className="text-base sm:text-lg lg:text-xl font-frutiger leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 transition-all duration-300"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            10 types of refreshments to quench every thirst
          </p>

          {/* Quality Indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-frutiger">
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 mr-1.5 sm:mr-2 transition-all duration-300"></div>
              <span
                style={{ color: "var(--color-charcoal-500)" }}
                className="transition-all duration-300"
              >
                Premium Quality
              </span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 mr-1.5 sm:mr-2 transition-all duration-300"></div>
              <span
                style={{ color: "var(--color-charcoal-500)" }}
                className="transition-all duration-300"
              >
                Global Distribution
              </span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 mr-1.5 sm:mr-2 transition-all duration-300"></div>
              <span
                style={{ color: "var(--color-charcoal-500)" }}
                className="transition-all duration-300"
              >
                Award-Winning
              </span>
            </div>
          </div>
        </div>

        {/* Non-Alcoholic Products Section - Carousel */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <NonAlcoholicCarousel />
        </div>

        {/* Divider Section */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="absolute inset-0 flex items-center">
            <div
              className="w-full border-t transition-all duration-300"
              style={{ borderColor: "var(--color-grey-200)" }}
            ></div>
          </div>
          <div className="relative flex justify-center">
            <div
              className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-grey-200)",
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                ></div>
                <span
                  className="font-frutiger-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Premium Selection
                </span>
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Alcoholic Products Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Category Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="relative inline-block transition-all duration-300 hover:scale-105">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-frutiger-bold mb-3 sm:mb-4 relative z-10 transition-all duration-300"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Alcoholic Range
              </h3>
              {/* Decorative underline */}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 rounded-full transition-all duration-300"
                style={{ backgroundColor: "var(--color-brand-accent)" }}
              ></div>
            </div>
            <p
              className="text-sm sm:text-base lg:text-lg font-frutiger mt-4 sm:mt-6 max-w-2xl mx-auto transition-all duration-300"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Premium spirits, wines, and beers that showcase our commitment to
              excellence and innovation
            </p>
          </div>

          {/* Enhanced Product Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {ALCOHOLIC_PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-fadeInUp transition-all duration-300"
                style={{
                  animationDelay: `${
                    (index + NON_ALCOHOLIC_PRODUCTS.length) * 100
                  }ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center">
          <div className="relative group max-w-2xl mx-auto">
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-terracotta-400/20 via-navy-400/20 to-terracotta-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Main card */}
            <div className="relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-navy-50/80 via-white to-beige-50/80 border border-navy-100/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-terracotta-400)_1px,transparent_1px),radial-gradient(circle_at_70%_80%,var(--color-navy-400)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-3 right-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-terracotta-200/20 to-terracotta-300/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-200/20 to-navy-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Premium badge */}
                <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full bg-gradient-to-r from-terracotta-100/80 to-navy-100/80 border border-terracotta-200/50 mb-4 sm:mb-6 lg:mb-8 transition-all duration-300 hover:scale-105">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-terracotta-400 to-navy-400 mr-2 sm:mr-3 animate-pulse"></div>
                  <span
                    className="text-xs sm:text-sm font-frutiger-bold tracking-wider uppercase"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Heritage Experience
                  </span>
                </div>

                {/* Enhanced title */}
                <h4
                  className="text-xl sm:text-2xl lg:text-3xl font-frutiger-bold mb-3 sm:mb-4 lg:mb-6 transition-all duration-300 group-hover:scale-[1.02]"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  <span className="block mb-1">Discover Our</span>
                  <span className="block bg-gradient-to-r from-terracotta-500 to-navy-600 bg-clip-text text-transparent">
                    Heritage
                  </span>
                </h4>

                {/* Enhanced description */}
                <p
                  className="text-sm sm:text-base lg:text-lg font-frutiger mb-4 sm:mb-6 lg:mb-8 max-w-xl mx-auto leading-relaxed transition-all duration-300"
                  style={{ color: "var(--color-charcoal-600)" }}
                >
                  Experience{" "}
                  <span className="font-frutiger-bold text-terracotta-600">
                    50+ years
                  </span>{" "}
                  of beverage excellence through our immersive virtual tours
                </p>

                {/* Enhanced CTA button */}
                <a
                  href="#tours"
                  className="group/btn relative inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 font-frutiger-bold text-sm sm:text-base lg:text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl min-h-[44px] sm:min-h-[48px] lg:min-h-[56px] overflow-hidden"
                  style={{
                    borderColor: "var(--color-brand-primary)",
                    color: "var(--color-brand-primary)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                  }}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                  {/* Button content */}
                  <div className="relative flex items-center">
                    <svg
                      className="mr-2 sm:mr-3 lg:mr-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover/btn:scale-110 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="transition-all duration-300">
                      Virtual Tours
                    </span>
                    <svg
                      className="ml-2 sm:ml-3 lg:ml-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover/btn:translate-x-1 transition-all duration-300"
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
                  </div>
                </a>

                {/* Additional visual elements */}
                <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 animate-pulse"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy-400 animate-pulse delay-300"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-terracotta-400 animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-4 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-terracotta-200/10 to-terracotta-300/10 blur-xl animate-pulse transition-all duration-300"></div>
      <div className="absolute bottom-1/4 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-navy-200/10 to-navy-300/10 blur-xl animate-pulse delay-1000 transition-all duration-300"></div>
    </section>
  );
};
