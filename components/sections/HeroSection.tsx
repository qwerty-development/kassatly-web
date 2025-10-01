import React from "react";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, COMPANY_INFO } from "@/constants/company";

/**
 * Enhanced Hero section with premium design and brand storytelling
 * Features sophisticated typography, animations, and visual hierarchy
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Video Background with Premium Overlay */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"></div>
        
        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>

        {/* Enhanced Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white group">
            {/* Premium play button */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-3 border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center group-hover:border-white/40 transition-all duration-500 hover:scale-110 cursor-pointer">
              <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1 group-hover:border-l-primary-200 transition-colors"></div>
            </div>
            <p className="text-lg font-frutiger-bold tracking-wide">
              {HERO_CONTENT.videoPlaceholder.title}
            </p>
            <p className="text-sm opacity-70 font-frutiger mt-1">
              {HERO_CONTENT.videoPlaceholder.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content with Enhanced Typography */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-4xl">
          {/* Heritage Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-primary-200 text-sm font-frutiger-bold tracking-wider uppercase">
              Est. {COMPANY_INFO.founded}
            </span>
            <div className="w-1 h-1 bg-primary-200 rounded-full mx-3"></div>
            <span className="text-white/90 text-sm font-frutiger">
              50+ Years of Excellence
            </span>
          </div>

          {/* Main Headline with Enhanced Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-frutiger-bold leading-[0.9] tracking-tight text-white mb-8">
            <span className="block">Catering</span>
            <span className="block text-primary-200">Quality Products</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl opacity-90">
              Since 1974
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-4 font-frutiger leading-relaxed max-w-3xl">
            {HERO_CONTENT.subtitle}
          </p>

          {/* Location Badge */}
          <div className="flex items-center text-primary-200 mb-12">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-frutiger text-sm tracking-wide">
              {COMPANY_INFO.headquarters}
            </span>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              href="#products"
              variant="accent"
              size="lg"
              className="group px-10 py-5 rounded-full bg-terracotta-500 hover:bg-terracotta-400 text-white font-frutiger-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            
            <Button
              href="#tours"
              variant="outline"
              size="lg"
              className="group px-10 py-5 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 font-frutiger-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <svg className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{HERO_CONTENT.secondaryCta}</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center mt-16 space-x-8 text-white/60">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-300 rounded-full mr-3"></div>
              <span className="font-frutiger text-sm">Award-Winning Quality</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-300 rounded-full mr-3"></div>
              <span className="font-frutiger text-sm">Global Distribution</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-300 rounded-full mr-3"></div>
              <span className="font-frutiger text-sm">Lebanese Heritage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer">
          <span className="text-xs font-frutiger tracking-wider uppercase mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-terracotta-300/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};
