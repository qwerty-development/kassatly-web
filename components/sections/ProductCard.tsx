import React from "react";
import Image from "next/image";
import { Card } from "@/ui/Card";
import { ProductCardProps } from "@/types";

/**
 * Enhanced product card component with mobile-first responsive design
 * Optimized for compact mobile layouts while maintaining premium desktop experience
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  return (
    <div className={`group h-full transition-all duration-300 ${className}`}>
      <Card className="p-4 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Product Icon */}
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center transition-all p-2  duration-300 group-hover:scale-110 overflow-hidden"
          style={{ backgroundColor: product.color }}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={`${product.name} product image`}
              width={48}
              height={48}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<span class="text-lg sm:text-xl lg:text-2xl transition-all duration-300 group-hover:scale-110">${product.icon}</span>`;
                }
              }}
            />
          ) : (
            <span className="text-lg sm:text-xl lg:text-2xl transition-all duration-300 group-hover:scale-110">
              {product.icon}
            </span>
          )}
        </div>

        {/* Product Info - Flex grow to fill available space */}
        <div className="flex-grow flex flex-col">
          <h4
            className="text-lg sm:text-xl font-frutiger-bold mb-2 sm:mb-3 transition-all duration-300 group-hover:opacity-90 leading-tight"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {product.name}
          </h4>

          <p
            className="font-frutiger text-sm sm:text-base mb-3 sm:mb-4 flex-grow transition-all duration-300 group-hover:opacity-80 leading-relaxed"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            {product.description}
          </p>

          {/* Launch year at bottom */}
          <div className="mt-auto">
            <div
              className="text-xs sm:text-sm font-frutiger-bold transition-all duration-300 group-hover:opacity-80"
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
              className="w-0 h-0.5 mt-1.5 sm:mt-2 rounded-full transition-all duration-300 group-hover:w-8 sm:group-hover:w-12"
              style={{ backgroundColor: "var(--color-brand-accent)" }}
            ></div>
          </div>
        </div>
      </Card>
    </div>
  );
};
