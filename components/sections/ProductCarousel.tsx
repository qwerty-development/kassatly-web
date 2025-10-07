import React, { useState, useRef, useEffect } from "react";
import { Product } from "@/types";

interface ProductCarouselProps {
  products: Product[];
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  className?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  title,
  subtitle,
  description,
  badgeText,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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

    const offset = currentTouch - touchStart;
    setDragOffset(offset);

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
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

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
      <div className="flex flex-col gap-8">
        {/* Title Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-pink-50 border border-teal-100 mb-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-pink-400 mr-3"></div>
            <span
              className="text-sm font-frutiger-bold tracking-wider uppercase"
              style={{ color: "var(--color-brand-primary)" }}
            >
              {badgeText}
            </span>
          </div>

          <h3
            className="text-2xl lg:text-3xl xl:text-4xl font-frutiger-bold mb-4 leading-tight"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {title} <span className="opacity-70">{subtitle}</span>
          </h3>

          <p
            className="text-base lg:text-lg font-frutiger leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            {description}
          </p>
        </div>

        {/* Carousel */}
        <div>
          <div className="relative">
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
                {products.map((product) => (
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

            <div className="hidden sm:flex items-center justify-between mt-6">
              <div className="flex-1 mr-4">
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-pink-400 rounded-full progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

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
                    viewBox="0 0 24"
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

interface ProductCarouselCardProps {
  product: Product;
}

const ProductCarouselCard: React.FC<ProductCarouselCardProps> = ({
  product,
}) => {
  return (
    <div className="group relative h-full flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105" style={{ background: `linear-gradient(135deg, ${product.color}, #ffffff)`}}>
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white font-frutiger-bold text-lg tracking-wider">View Product</span>
      </div>

      <div className="relative text-center mb-4">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} product image`}
            className="w-full h-48 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            onError={(e) => {
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

      <div className="relative text-center flex-grow flex flex-col">
        <h4
          className="text-xl font-frutiger-bold mb-2 leading-tight inline-block"
          style={{ color: "var(--color-brand-primary)" }}
        >
          {product.name}
           <div className="w-0 h-0.5 bg-terracotta-500 mx-auto transition-all duration-300 ease-in-out group-hover:w-1/2"></div>
        </h4>

        <p
          className="font-frutiger text-sm mb-4 flex-grow leading-relaxed"
          style={{ color: "var(--color-charcoal-700)" }}
        >
          {product.description}
        </p>

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