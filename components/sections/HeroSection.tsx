import React from "react";
import { Button } from "@/ui/Button";
import { HERO_CONTENT } from "@/constants/company";

/**
 * Hero section component with video placeholder and key messaging
 * Features the main call-to-action and company tagline
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Video placeholder - will be replaced with actual video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white/30 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
            </div>
            <p className="text-lg font-frutiger">
              {HERO_CONTENT.videoPlaceholder.title}
            </p>
            <p className="text-sm opacity-80 font-frutiger">
              {HERO_CONTENT.videoPlaceholder.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-frutiger-bold leading-tight tracking-tight text-white mb-6">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-xl text-white/90 mb-8 font-frutiger leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="#products"
              variant="accent"
              size="lg"
              className="px-8 py-4 rounded-full"
            >
              {HERO_CONTENT.primaryCta}
            </Button>
            <Button
              href="#tours"
              variant="outline"
              size="lg"
              className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-brand-primary"
            >
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
