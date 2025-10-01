import React from "react";
import { Card } from "@/components/ui/Card";
import { VIRTUAL_TOURS } from "@/constants/company";

/**
 * Enhanced Virtual Tours section with premium design and immersive experience
 * Features sophisticated animations, gradient overlays, and interactive elements
 */
export const VirtualToursSection: React.FC = () => {
  return (
    <section id="tours" className="py-32 relative overflow-hidden">
      {/* Premium Background with Brand Gradient Layers */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: "var(--color-brand-light)" }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(175,125,105,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,53,67,0.03),transparent_50%)]"></div>
      
      {/* Floating Decorative Elements with Brand Colors */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl animate-pulse"
        style={{ backgroundColor: "var(--color-terracotta-200)" }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000"
        style={{ backgroundColor: "var(--color-navy-200)" }}
      ></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/* Premium Badge with Brand Colors */}
          <div 
            className="inline-flex items-center px-8 py-4 rounded-full border backdrop-blur-sm mb-8 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer group"
            style={{ 
              backgroundColor: "var(--color-navy-50)",
              borderColor: "var(--color-navy-100)"
            }}
          >
            <div 
              className="w-3 h-3 rounded-full mr-4 animate-pulse"
              style={{ backgroundColor: "var(--color-terracotta-400)" }}
            ></div>
            <span 
              className="text-sm font-frutiger-bold tracking-wider uppercase group-hover:opacity-80 transition-opacity duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Immersive Experience
            </span>
            <div 
              className="w-3 h-3 rounded-full ml-4 animate-pulse delay-500"
              style={{ backgroundColor: "var(--color-navy-400)" }}
            ></div>
          </div>

          {/* Stunning Title with Brand Typography */}
          <div className="mb-8">
            <h2 
              className="text-6xl lg:text-7xl font-frutiger-bold leading-tight mb-4"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Virtual Tours
            </h2>
            <div 
              className="w-32 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "var(--color-brand-accent)" }}
            ></div>
          </div>

          {/* Enhanced Subtitle */}
          <p 
            className="text-2xl font-frutiger max-w-4xl mx-auto leading-relaxed mb-8"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            Step into our world of craftsmanship and innovation
          </p>
          <p 
            className="text-lg font-frutiger max-w-3xl mx-auto"
            style={{ color: "var(--color-charcoal-500)" }}
          >
            Experience our state-of-the-art facilities through cutting-edge virtual reality
          </p>
        </div>

        {/* Premium Tour Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {VIRTUAL_TOURS.map((tour, index) => (
            <div
              key={tour.id}
              className="group relative transition-all duration-700 hover:scale-[1.03] cursor-pointer"
              style={{ 
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Card Glow Effect with Brand Colors */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"
                style={{ 
                  background: `linear-gradient(45deg, var(--color-terracotta-400), var(--color-navy-400), var(--color-brand-accent))`
                }}
              ></div>
              
              {/* Main Card */}
              <Card className="relative p-12 text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden transition-all duration-700 group-hover:shadow-3xl group-hover:bg-white/90">
                {/* Card Background Pattern with Brand Colors */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <div 
                    className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-brand-primary)_1px,transparent_1px),linear-gradient(-45deg,var(--color-brand-primary)_1px,transparent_1px)] bg-[length:20px_20px]"
                  ></div>
                </div>

                {/* Tour Icon with Enhanced Animation */}
                <div className="relative mb-8">
                  <div 
                    className="absolute inset-0 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"
                    style={{ backgroundColor: "var(--color-navy-50)" }}
                  ></div>
                  <div className="relative text-8xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 filter group-hover:drop-shadow-lg">
                    {tour.icon}
                  </div>
                </div>

                {/* Tour Title */}
                <h3 
                  className="text-3xl font-frutiger-bold mb-6 transition-colors duration-500"
                  style={{ 
                    color: "var(--color-brand-primary)",
                  }}
                >
                  {tour.title}
                </h3>

                {/* Tour Description */}
                <p 
                  className="mb-8 text-lg font-frutiger leading-relaxed transition-colors duration-500"
                  style={{ color: "var(--color-charcoal-600)" }}
                >
                  {tour.description}
                </p>

                {/* Premium CTA Button with Brand Colors */}
                <div className="relative">
                  <button 
                    className="group/btn relative px-10 py-5 text-white rounded-2xl font-frutiger-bold text-lg tracking-wide overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, var(--color-brand-primary), var(--color-navy-600))`,
                    }}
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Button Content */}
                    <div className="relative flex items-center justify-center">
                      <svg className="mr-3 w-6 h-6 transition-transform duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="transition-all duration-300">Start Virtual Tour</span>
                      <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Tour Type Badge with Brand Colors */}
                <div className="absolute top-6 right-6">
                  <div 
                    className="px-4 py-2 backdrop-blur-sm rounded-full border"
                    style={{ 
                      backgroundColor: "var(--color-terracotta-50)",
                      borderColor: "var(--color-terracotta-200)"
                    }}
                  >
                    <span 
                      className="text-sm font-frutiger-bold capitalize"
                      style={{ color: "var(--color-brand-accent)" }}
                    >
                      {tour.type}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center">
          <div 
            className="inline-block p-10 rounded-3xl border backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group"
            style={{ 
              background: `linear-gradient(135deg, var(--color-navy-50), var(--color-beige-50), var(--color-terracotta-50))`,
              borderColor: "var(--color-navy-100)"
            }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--color-terracotta-400)" }}
                ></div>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse delay-200"
                  style={{ backgroundColor: "var(--color-navy-400)" }}
                ></div>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse delay-400"
                  style={{ backgroundColor: "var(--color-brand-accent)" }}
                ></div>
              </div>
              <h4 
                className="text-3xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Ready for the Journey?
              </h4>
              <p 
                className="text-xl font-frutiger max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--color-charcoal-600)" }}
              >
                Discover 50+ years of beverage excellence through our award-winning facilities
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="group/cta px-8 py-4 text-white rounded-xl font-frutiger-bold transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "var(--color-brand-primary)" }}
              >
                <div className="flex items-center justify-center">
                  <svg className="mr-3 w-5 h-5 transition-transform duration-300 group-hover/cta:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Explore All Tours</span>
                </div>
              </button>
              
              <button 
                className="group/cta px-8 py-4 border-2 rounded-xl font-frutiger-bold transition-all duration-500 hover:scale-105 hover:shadow-lg"
                style={{ 
                  borderColor: "var(--color-navy-200)",
                  color: "var(--color-brand-primary)",
                  backgroundColor: "transparent"
                }}
              >
                <div className="flex items-center justify-center">
                  <svg className="mr-3 w-5 h-5 transition-transform duration-300 group-hover/cta:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Learn More</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
