import React from "react";
import { Button } from "@/components/ui/Button";
import { COMPANY_STATS, ABOUT_CONTENT } from "@/constants/company";

/**
 * Enhanced About section with sophisticated visual storytelling
 * Features premium typography, refined statistics, and elegant visual elements
 */
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-brand-light)" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,var(--color-brand-primary)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          
          {/* Enhanced Content Section */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-100 border border-navy-200 mb-8">
              <span 
                className="text-sm font-frutiger-bold tracking-wider uppercase"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Our Story
              </span>
            </div>

            {/* Enhanced Title with Visual Hierarchy */}
            <h2 className="mb-8">
              <span 
                className="block text-5xl lg:text-6xl font-frutiger-bold leading-[0.9] mb-2"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {ABOUT_CONTENT.title.split(' ').slice(0, 2).join(' ')}
              </span>
              <span 
                className="block text-3xl lg:text-4xl font-frutiger opacity-70"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {ABOUT_CONTENT.title.split(' ').slice(2).join(' ')}
              </span>
            </h2>

            {/* Enhanced Description */}
            <div className="space-y-6 mb-12">
              <p
                className="text-xl font-frutiger leading-relaxed"
                style={{ color: "var(--color-charcoal-700)" }}
              >
                {ABOUT_CONTENT.description}
              </p>
              
              {/* Additional heritage emphasis */}
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-brand-accent)" }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="font-frutiger-bold text-lg mb-1"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Quality Commitment
                  </h4>
                  <p 
                    className="font-frutiger text-sm leading-relaxed"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Five decades of unwavering dedication to excellence in every bottle we produce.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {COMPANY_STATS.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <div
                      className="text-4xl lg:text-5xl font-frutiger-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm font-frutiger tracking-wide uppercase opacity-80"
                      style={{ color: "var(--color-charcoal-600)" }}
                    >
                      {stat.label}
                    </div>
                    
                    {/* Subtle accent line */}
                    <div 
                      className="w-8 h-0.5 mx-auto mt-3 rounded-full group-hover:w-12 transition-all duration-300"
                      style={{ backgroundColor: "var(--color-brand-accent)" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <Button
              href="#products"
              variant="primary"
              size="lg"
              className="group inline-flex items-center px-8 py-4 rounded-full font-frutiger-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: "var(--color-brand-primary)",
                color: "white"
              }}
            >
              <span>{ABOUT_CONTENT.ctaText}</span>
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            </Button>
          </div>

          {/* Enhanced Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              {/* Main image container with sophisticated styling */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-100 to-navy-200 relative">
                {/* Premium placeholder with better visual hierarchy */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center text-white relative overflow-hidden"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-frutiger-bold text-2xl mb-2">Company Heritage</h3>
                    <p className="font-frutiger text-sm opacity-80">Visual Story Coming Soon</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center text-white font-frutiger-bold shadow-xl group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "var(--color-brand-accent)" }}
              >
                <span className="text-2xl">1974</span>
                <span className="text-xs opacity-80">Founded</span>
              </div>
              
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full flex flex-col items-center justify-center text-white font-frutiger-bold shadow-xl group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "var(--color-brand-secondary)" }}
              >
                <span className="text-lg">Lebanon</span>
                <span className="text-xs opacity-80">Heart</span>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 rounded-full bg-primary-300/20 backdrop-blur-sm animate-pulse"></div>
              <div className="absolute bottom-1/3 -right-2 w-6 h-6 rounded-full bg-terracotta-300/20 backdrop-blur-sm animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
