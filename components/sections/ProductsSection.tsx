import React from "react";
import { ProductCard } from "./ProductCard";
import {
  NON_ALCOHOLIC_PRODUCTS,
  ALCOHOLIC_PRODUCTS,
} from "@/constants/products";

/**
 * Products section component showcasing all beverage categories
 * Displays both non-alcoholic and alcoholic product ranges
 */
export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-frutiger-bold mb-4"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Our Products
          </h2>
          <p
            className="text-xl font-frutiger"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            The Range - 10 types of refreshments to quench every thirst
          </p>
        </div>

        {/* Non-Alcoholic Products */}
        <div className="mb-16">
          <h3
            className="text-2xl font-frutiger-bold mb-8 text-center"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Non-Alcoholic Range
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NON_ALCOHOLIC_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Alcoholic Products */}
        <div>
          <h3
            className="text-2xl font-frutiger-bold mb-8 text-center"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Alcoholic Range
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALCOHOLIC_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
