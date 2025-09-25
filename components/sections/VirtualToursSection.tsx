import React from "react";
import { Card } from "@/ui/Button";
import { VIRTUAL_TOURS } from "@/constants/company";

/**
 * Virtual tours section component
 * Displays interactive tour options for winery and brewery
 */
export const VirtualToursSection: React.FC = () => {
  return (
    <section
      id="tours"
      className="py-20"
      style={{ backgroundColor: "var(--color-brand-light)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-frutiger-bold mb-4"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Virtual Tours
          </h2>
          <p
            className="text-xl font-frutiger"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            Experience our state-of-the-art facilities from anywhere in the
            world
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {VIRTUAL_TOURS.map((tour) => (
            <div key={tour.id} className="group">
              <Card className="overflow-hidden">
                {/* Tour Preview */}
                <div
                  className={`aspect-video bg-gradient-to-br ${tour.gradientColors.join(
                    " "
                  )} flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white/30 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                    <h3 className="text-2xl font-frutiger-bold mb-2">
                      {tour.title}
                    </h3>
                    <p className="font-frutiger opacity-90">
                      {tour.type === "winery"
                        ? "360° Virtual Experience"
                        : "Interactive Experience"}
                    </p>
                  </div>
                </div>

                {/* Tour Content */}
                <div className="p-8">
                  <h3
                    className="text-2xl font-frutiger-bold mb-4"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    {tour.title} Tour
                  </h3>
                  <p
                    className="font-frutiger mb-6"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    {tour.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: tour.buttonColor }}
                  >
                    Start Tour
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
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
