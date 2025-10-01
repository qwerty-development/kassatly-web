import React from "react";
import { Card } from "@/ui/Card";
import { ProductCardProps } from "@/types";

/**
 * Enhanced product card component with consistent hover effects and height
 * Displays product information with icon, description, and launch year
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  return (
    <div className={`group h-full transition-all duration-300 ${className}`}>
      <Card className="p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Product Icon */}
        <div
          className="w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: product.color }}
        >
          <span className="text-2xl transition-all duration-300 group-hover:scale-110">
            {product.icon}
          </span>
        </div>

        {/* Product Info - Flex grow to fill available space */}
        <div className="flex-grow flex flex-col">
          <h4
            className="text-xl font-frutiger-bold mb-3 transition-all duration-300 group-hover:opacity-90"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {product.name}
          </h4>
          
          <p
            className="font-frutiger mb-4 flex-grow transition-all duration-300 group-hover:opacity-80"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            {product.description}
          </p>
          
          {/* Launch year at bottom */}
          <div className="mt-auto">
            <div
              className="text-sm font-frutiger-bold transition-all duration-300 group-hover:opacity-80"
              style={{ color: "var(--color-brand-accent)" }}
            >
              {product.launchYear === "Traditional" ||
              product.launchYear === "Popular" ||
              product.launchYear === "Premium"
                ? product.launchYear
                : `Launched ${product.launchYear}`}
            </div>
            
            {/* Hover indicator line */}
            <div 
              className="w-0 h-0.5 mt-2 rounded-full transition-all duration-300 group-hover:w-12"
              style={{ backgroundColor: "var(--color-brand-accent)" }}
            ></div>
          </div>
        </div>
      </Card>
    </div>
  );
};
