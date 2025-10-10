import Image from "next/image";
import { useRef, useEffect } from "react";

interface BackgroundForegroundComboProps {
  backgroundImage: string;
  name: string;
  index: number;
  onIntersection: (index: number, isIntersecting: boolean) => void;
}

export default function BackgroundForegroundCombo({
  backgroundImage,
  name,
  index,
  onIntersection,
}: BackgroundForegroundComboProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when more than 50% of the element is visible
        if (entry.intersectionRatio > 0.5) {
          onIntersection(index, true);
        } else {
          onIntersection(index, false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index, onIntersection]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden group"
      data-background-index={index}
    >
      {/* Background Image with enhanced effects */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={`${name} background`}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          priority={index === 0} // Only prioritize the first image
        />
      </div>

      {/* Subtle overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Background name indicator (subtle) */}
      <div className="absolute top-8 left-8 z-10">
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
          {name.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
