import React from "react";
import { ProductCard } from "./ProductCard";
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
    <section id="products" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-brand-primary)_1px,transparent_1px),linear-gradient(-45deg,var(--color-brand-primary)_1px,transparent_1px)] bg-[length:80px_80px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-navy-50 to-beige-50 border border-navy-100 mb-8 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-500 mr-3 transition-all duration-300"></div>
            <span 
              className="text-sm font-frutiger-bold tracking-wider uppercase transition-all duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Product Portfolio
            </span>
          </div>

          {/* Main Title with Enhanced Typography */}
          <h2 className="mb-6">
            <span 
              className="block text-5xl lg:text-6xl font-frutiger-bold leading-[0.9] mb-2 transition-all duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Our Products
            </span>
            <span 
              className="block text-2xl lg:text-3xl font-frutiger opacity-70 transition-all duration-300"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              The Range
            </span>
          </h2>

          {/* Enhanced Subtitle */}
          <p
            className="text-xl font-frutiger leading-relaxed max-w-3xl mx-auto mb-8 transition-all duration-300"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            10 types of refreshments to quench every thirst
          </p>

          {/* Quality Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-frutiger">
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-terracotta-400 mr-2 transition-all duration-300"></div>
              <span style={{ color: "var(--color-charcoal-500)" }} className="transition-all duration-300">Premium Quality</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-terracotta-400 mr-2 transition-all duration-300"></div>
              <span style={{ color: "var(--color-charcoal-500)" }} className="transition-all duration-300">Global Distribution</span>
            </div>
            <div className="flex items-center transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-terracotta-400 mr-2 transition-all duration-300"></div>
              <span style={{ color: "var(--color-charcoal-500)" }} className="transition-all duration-300">Award-Winning</span>
            </div>
          </div>
        </div>

        {/* Non-Alcoholic Products Section */}
        <div className="mb-24">
          {/* Category Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block transition-all duration-300 hover:scale-105">
              <h3
                className="text-3xl lg:text-4xl font-frutiger-bold mb-4 relative z-10 transition-all duration-300"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Non-Alcoholic Range
              </h3>
              {/* Decorative underline */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full transition-all duration-300"
                style={{ backgroundColor: "var(--color-brand-accent)" }}
              ></div>
            </div>
            <p 
              className="text-lg font-frutiger mt-6 max-w-2xl mx-auto transition-all duration-300"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Refreshing beverages crafted for every moment, from traditional favorites to innovative new flavors
            </p>
          </div>

          {/* Enhanced Product Grid with consistent heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {NON_ALCOHOLIC_PRODUCTS.map((product, index) => (
              <div 
                key={product.id}
                className="opacity-0 animate-fadeInUp transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Divider Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 flex items-center">
            <div 
              className="w-full border-t transition-all duration-300"
              style={{ borderColor: "var(--color-grey-200)" }}
            ></div>
          </div>
          <div className="relative flex justify-center">
            <div 
              className="px-8 py-4 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{ 
                backgroundColor: "white",
                borderColor: "var(--color-grey-200)"
              }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                ></div>
                <span 
                  className="font-frutiger-bold text-sm tracking-wider uppercase transition-all duration-300"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Premium Selection
                </span>
                <div 
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Alcoholic Products Section */}
        <div>
          {/* Category Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block transition-all duration-300 hover:scale-105">
              <h3
                className="text-3xl lg:text-4xl font-frutiger-bold mb-4 relative z-10 transition-all duration-300"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Alcoholic Range
              </h3>
              {/* Decorative underline */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full transition-all duration-300"
                style={{ backgroundColor: "var(--color-brand-accent)" }}
              ></div>
            </div>
            <p 
              className="text-lg font-frutiger mt-6 max-w-2xl mx-auto transition-all duration-300"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Premium spirits, wines, and beers that showcase our commitment to excellence and innovation
            </p>
          </div>

          {/* Enhanced Product Grid with consistent heights - 4 columns for alcoholic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {ALCOHOLIC_PRODUCTS.map((product, index) => (
              <div 
                key={product.id}
                className="opacity-0 animate-fadeInUp transition-all duration-300"
                style={{ 
                  animationDelay: `${(index + NON_ALCOHOLIC_PRODUCTS.length) * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center mt-20">
          <div 
            className="inline-block p-8 rounded-3xl bg-gradient-to-br from-navy-50 to-beige-50 border border-navy-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <h4 
              className="text-2xl font-frutiger-bold mb-4 transition-all duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Discover Our Heritage
            </h4>
            <p 
              className="text-lg font-frutiger mb-6 max-w-md transition-all duration-300"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Experience 50+ years of beverage excellence through our virtual tours
            </p>
            <button
              className="group inline-flex items-center px-8 py-4 rounded-full font-frutiger-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl text-white"
              style={{ backgroundColor: "var(--color-brand-primary)" }}
            >
              <svg className="mr-3 w-5 h-5 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="transition-all duration-300">Virtual Tours</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-terracotta-200/10 to-terracotta-300/10 blur-xl animate-pulse transition-all duration-300"></div>
      <div className="absolute bottom-1/4 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-navy-200/10 to-navy-300/10 blur-xl animate-pulse delay-1000 transition-all duration-300"></div>
    </section>
  );
};
