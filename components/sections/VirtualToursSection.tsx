import React from "react";
import { Card } from "@/components/ui/Card";
import { VIRTUAL_TOURS } from "@/constants/company";

/**
 * Virtual tours section component
 * Displays available virtual tour options
 */
export const VirtualToursSection: React.FC = () => {
  return (
    <section id="tours" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Virtual Tours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our facilities from the comfort of your home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {VIRTUAL_TOURS.map((tour) => (
            <Card key={tour.id} className="p-8 text-center">
              <div className="text-6xl mb-6">{tour.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{tour.title}</h3>
              <p className="text-gray-600 mb-6">{tour.description}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Tour
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
