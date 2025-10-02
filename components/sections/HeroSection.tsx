import React from "react";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, COMPANY_INFO } from "@/constants/company";

/**
 * Enhanced Hero section with premium design and mobile-first responsiveness
 * Features sophisticated typography, animations, and optimized mobile experience
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Video Background with Premium Overlay */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"></div>
        
        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Subtle pattern overlay for texture - responsive opacity */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:50px_50px]"></div>

        {/* Enhanced Video Placeholder - responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white group px-4">
            {/* Premium play button - responsive sizing */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 rounded-full border-2 border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center group-hover:border-white/40 transition-all duration-500 hover:scale-110 cursor-pointer">
              <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] lg:border-l-[12px] border-l-white border-y-[6px] sm:border-y-[8px] lg:border-y-[9px] border-y-transparent ml-1 group-hover:border-l-primary-200 transition-colors"></div>
            </div>
            <p className="text-sm sm:text-base font-frutiger-bold tracking-wide">
              {HERO_CONTENT.videoPlaceholder.title}
            </p>
            <p className="text-xs sm:text-sm opacity-70 font-frutiger mt-1">
              {HERO_CONTENT.videoPlaceholder.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content with Enhanced Typography - Mobile Optimized */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-4xl">
          {/* Heritage Badge - Mobile Responsive */}
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
            <span className="text-primary-200 text-xs font-frutiger-bold tracking-wider uppercase">
              Est. {COMPANY_INFO.founded}
            </span>
            <div className="w-1 h-1 bg-primary-200 rounded-full mx-2"></div>
            <span className="text-white/90 text-xs font-frutiger">
              50+ Years of Excellence
            </span>
          </div>

          {/* Main Headline with Enhanced Typography - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-frutiger-bold leading-[1.1] tracking-tight text-white mb-4 sm:mb-6">
            <span className="block mb-1 sm:mb-2">Catering</span>
            <span className="block text-primary-200 mb-1 sm:mb-2">Quality Products</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-90">
              Since 1974
            </span>
          </h1>

          {/* Enhanced Subtitle - Mobile Responsive */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-2 sm:mb-3 font-frutiger leading-relaxed max-w-3xl">
            {HERO_CONTENT.subtitle}
          </p>

          {/* Location Badge - Mobile Optimized */}
          <div className="flex items-center text-primary-200 mb-6 sm:mb-8">
            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-frutiger text-xs sm:text-sm tracking-wide">
              {COMPANY_INFO.headquarters}
            </span>
          </div>

          {/* Enhanced CTA Buttons - Mobile First Design */}
          <div className="flex flex-row gap-3 sm:gap-4">
            <Button
              href="#products"
              variant="accent"
              size="lg"
              className="group flex-1 sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-full bg-terracotta-500 hover:bg-terracotta-400 text-white font-frutiger-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[44px] flex items-center justify-center"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <svg className="ml-1 sm:ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            
            <a
              href="#tours"
              className="group flex-1 sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 font-frutiger-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 backdrop-blur-sm min-h-[44px] flex items-center justify-center"
            >
              <svg className="mr-1 sm:mr-2 w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          {/* Trust Indicators - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row sm:items-center mt-8 sm:mt-12 space-y-2 sm:space-y-0 sm:space-x-6 text-white/60">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-2 flex-shrink-0"></div>
              <span className="font-frutiger text-xs sm:text-sm">Award-Winning Quality</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-2 flex-shrink-0"></div>
              <span className="font-frutiger text-xs sm:text-sm">Global Distribution</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-2 flex-shrink-0"></div>
              <span className="font-frutiger text-xs sm:text-sm">Lebanese Heritage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest - Mobile Responsive */}
      <div className="absolute top-1/4 right-2 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 bg-primary-200/5 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-2 sm:left-6 w-12 h-12 sm:w-20 sm:h-20 bg-terracotta-300/5 rounded-full blur-lg sm:blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
