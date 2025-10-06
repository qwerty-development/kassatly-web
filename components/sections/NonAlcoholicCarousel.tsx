import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { NON_ALCOHOLIC_PRODUCTS } from "@/constants/products";
import { Product } from "@/types";

interface NonAlcoholicCarouselProps {
  className?: string;
}

export const NonAlcoholicCarousel: React.FC<NonAlcoholicCarouselProps> = ({
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const products = NON_ALCOHOLIC_PRODUCTS;

  // Calculate how many products to show based on screen size
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile: 1 product
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet: 2 products
      } else {
        setVisibleCount(3); // Desktop: 3 products
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
        {/* Left Side - Title Section */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="mb-6">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-pink-50 border border-teal-100 mb-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-pink-400 mr-3"></div>
              <span
                className="text-sm font-frutiger-bold tracking-wider uppercase"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Non-Alcoholic Range
              </span>
            </div>

            {/* Main Title */}
            <h3
              className="text-2xl lg:text-3xl xl:text-4xl font-frutiger-bold mb-4 leading-tight"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Refreshing
              <br />
              <span className="opacity-70">Beverages</span>
            </h3>

            {/* Description */}
            <p
              className="text-base lg:text-lg font-frutiger leading-relaxed mb-6"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Discover our premium selection of non-alcoholic beverages, crafted
              with natural ingredients and traditional recipes.
            </p>

            {/* Product Count */}
            <div className="flex items-center text-sm font-frutiger">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></div>
              <span style={{ color: "var(--color-charcoal-500)" }}>
                {products.length} Products Available
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="lg:w-2/3 flex-1">
          <div className="relative">
            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="relative overflow-hidden rounded-2xl"
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleCount)
                  }%)`,
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <ProductCarouselCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Progress Line */}
              <div className="flex-1 mr-4">
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-pink-400 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-100 to-pink-100 border border-teal-200 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-100 to-pink-100 border border-teal-200 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-5 h-5"
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
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-teal-400 to-pink-400 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Product Card Component for Carousel
interface ProductCarouselCardProps {
  product: Product;
}

const ProductCarouselCard: React.FC<ProductCarouselCardProps> = ({
  product,
}) => {
  return (
    <div className="group h-full transition-all duration-300 hover:scale-[1.02]">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Product Image Container - Square with background color */}
        <div
          className="relative w-full aspect-square flex items-center justify-center p-6"
          style={{ backgroundColor: product.color }}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={`${product.name} product image`}
              width={200}
              height={200}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<span class="text-6xl transition-all duration-300 group-hover:scale-110">${product.icon}</span>`;
                }
              }}
            />
          ) : (
            <span className="text-6xl transition-all duration-300 group-hover:scale-110">
              {product.icon}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-6 flex-grow flex flex-col">
          <h4
            className="text-xl font-frutiger-bold mb-3 transition-all duration-300 group-hover:opacity-90 leading-tight"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {product.name}
          </h4>

          <p
            className="font-frutiger text-sm mb-4 flex-grow transition-all duration-300 group-hover:opacity-80 leading-relaxed"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            {product.description}
          </p>

          {/* Launch year at bottom */}
          <div className="mt-auto">
            <div
              className="text-xs font-frutiger-bold transition-all duration-300 group-hover:opacity-80"
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
              className="w-0 h-0.5 mt-2 rounded-full transition-all duration-300 group-hover:w-8"
              style={{ backgroundColor: "var(--color-brand-accent)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

