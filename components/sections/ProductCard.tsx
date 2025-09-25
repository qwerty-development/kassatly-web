import React from "react";
import { Card } from "@/ui/Card";
import { ProductCardProps } from "@/types";

/**
 * Individual product card component
 * Displays product information with icon, description, and launch year
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  return (
    <div className={`group ${className}`}>
      <Card className="p-8">
        {/* Product Icon */}
        <div
          className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
          style={{ backgroundColor: product.color }}
        >
          <span className="text-2xl">{product.icon}</span>
        </div>

        {/* Product Info */}
        <h4
          className="text-xl font-frutiger-bold mb-3"
          style={{ color: "var(--color-brand-primary)" }}
        >
          {product.name}
        </h4>
        <p
          className="font-frutiger mb-4"
          style={{ color: "var(--color-charcoal-600)" }}
        >
          {product.description}
        </p>
        <div
          className="text-sm font-frutiger"
          style={{ color: "var(--color-brand-accent)" }}
        >
          {product.launchYear === "Traditional" ||
          product.launchYear === "Popular" ||
          product.launchYear === "Premium"
            ? product.launchYear
            : `Launched ${product.launchYear}`}
        </div>
      </Card>
    </div>
  );
};
