import Image from "next/image";
import { useState, useEffect } from "react";

interface FixedForegroundProps {
  imageCombinations: Array<{
    name: string;
    backgroundImage: string;
    foregroundImage: string;
  }>;
  activeIndex: number;
  onDotClick: (index: number) => void; // Added prop for click handling
}

export default function FixedForeground({
  imageCombinations,
  activeIndex,
  onDotClick, // Destructure the new prop
}: FixedForegroundProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setIsVisible(false);

    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const timer2 = setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center p-8">
      <div
        className={`transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } ${isAnimating ? "animate-pulse" : ""}`}
      >
        <Image
          src={imageCombinations[activeIndex]?.foregroundImage || ""}
          alt={`${imageCombinations[activeIndex]?.name || ""} foreground`}
          width={500}
          height={400}
          className="object-contain max-w-[60vw] max-h-[60vh] drop-shadow-2xl"
          priority
        />
      </div>

      {/* Overlay and clickable dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 p-2 bg-black/20 rounded-full backdrop-blur-sm pointer-events-auto">
        {imageCombinations.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)} // Call the handler on click
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white shadow-lg scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}