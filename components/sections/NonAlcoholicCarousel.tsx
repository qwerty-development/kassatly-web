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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const products = NON_ALCOHOLIC_PRODUCTS;

  // Calculate how many products to show based on screen size
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile: 1 product for better touch experience
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

  // Reset drag state when currentIndex changes
  useEffect(() => {
    setIsDragging(false);
    setDragOffset(0);
  }, [currentIndex]);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Enhanced touch event handlers for better mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);

    // Calculate drag offset for visual feedback
    const offset = currentTouch - touchStart;
    setDragOffset(offset);

    // Prevent default scrolling when swiping horizontally
    if (Math.abs(offset) > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30; // Reduced threshold for easier swiping
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset states
    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  return (
    <div className={`w-full ${className}`}>
      <style jsx>{`
        .carousel-slider {
          transition: transform 300ms ease-in-out !important;
        }
        .progress-bar {
          transition: width 300ms ease-in-out !important;
        }
        .dot-indicator {
          transition: all 300ms ease-in-out !important;
        }
        .carousel-container {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }
        .carousel-container:active {
          cursor: grabbing;
        }
        .carousel-container:active .carousel-slider {
          cursor: grabbing;
        }
        @media (max-width: 640px) {
          .carousel-container {
            padding: 0 8px;
          }
        }
      `}</style>
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
              className="relative overflow-hidden touch-pan-x select-none carousel-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                touchAction: "pan-x",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <div
                className="flex carousel-slider"
                style={{
                  transform: `translateX(calc(-${
                    currentIndex * (100 / visibleCount)
                  }% + ${isDragging ? dragOffset * 0.3 : 0}px))`,
                  transition: isDragging
                    ? "none"
                    : "transform 300ms ease-in-out",
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
                    className="h-full bg-gradient-to-r from-teal-400 to-pink-400 rounded-full progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-100 to-pink-100 border border-teal-200 flex items-center justify-center"
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
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-100 to-pink-100 border border-teal-200 flex items-center justify-center"
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
                  className={`w-2 h-2 rounded-full dot-indicator ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-teal-400 to-pink-400 w-8"
                      : "bg-gray-300"
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
    <div className="h-full flex flex-col">
      {/* Product Image Container - Fixed square size with background color */}
      <div
        className="relative w-full h-64 flex items-center justify-center p-8"
        style={{ backgroundColor: product.color }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} product image`}
            width={180}
            height={180}
            className="w-44 h-44 object-contain"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-5xl">${product.icon}</span>`;
              }
            }}
          />
        ) : (
          <span className="text-5xl">{product.icon}</span>
        )}
      </div>

      {/* Product Details - Outside the image container */}
      <div className="mt-6 flex-grow flex flex-col">
        <h4
          className="text-xl font-frutiger-bold mb-3 leading-tight"
          style={{ color: "var(--color-brand-primary)" }}
        >
          {product.name}
        </h4>

        <p
          className="font-frutiger text-sm mb-4 flex-grow leading-relaxed"
          style={{ color: "var(--color-charcoal-600)" }}
        >
          {product.description}
        </p>

        {/* Launch year at bottom */}
        <div className="mt-auto">
          <div
            className="text-xs font-frutiger-bold"
            style={{ color: "var(--color-brand-accent)" }}
          >
            {product.launchYear === "Traditional" ||
            product.launchYear === "Popular" ||
            product.launchYear === "Premium"
              ? product.launchYear
              : `Launched ${product.launchYear}`}
          </div>
        </div>
      </div>
    </div>
  );
};
