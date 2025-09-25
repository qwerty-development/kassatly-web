import React from "react";
import { Button } from "@/ui/Button";
import { COMPANY_STATS, ABOUT_CONTENT } from "@/constants/company";

/**
 * About section component showcasing company story and statistics
 * Features the 50-year heritage and key company metrics
 */
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "var(--color-brand-light)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <h2
              className="text-4xl font-frutiger-bold mb-6"
              style={{ color: "var(--color-brand-primary)" }}
            >
              {ABOUT_CONTENT.title}
            </h2>
            <p
              className="text-lg mb-6 font-frutiger"
              style={{ color: "var(--color-charcoal-700)" }}
            >
              {ABOUT_CONTENT.description}
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {COMPANY_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-3xl font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              href="#products"
              variant="primary"
              size="md"
              className="inline-flex items-center"
            >
              {ABOUT_CONTENT.ctaText}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full flex items-center justify-center text-white font-frutiger-bold text-2xl"
                style={{ backgroundColor: "var(--color-brand-primary)" }}
              >
                Company Heritage Image
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-frutiger-bold text-sm"
              style={{ backgroundColor: "var(--color-brand-accent)" }}
            >
              1974
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full flex items-center justify-center text-white font-frutiger-bold text-sm"
              style={{ backgroundColor: "var(--color-brand-secondary)" }}
            >
              Lebanon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
