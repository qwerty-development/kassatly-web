import Image from "next/image";
import { useState, useEffect } from "react";

interface FixedForegroundProps {
  imageCombinations: Array<{
    name: string;
    backgroundImage: string;
    foregroundImage: string;
  }>;
  activeIndex: number;
}

export default function FixedForeground({
  imageCombinations,
  activeIndex,
}: FixedForegroundProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Smooth transition effect
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
      <div
        className={`transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Image
          src={imageCombinations[activeIndex]?.foregroundImage || ""}
          alt={`${imageCombinations[activeIndex]?.name || ""} foreground`}
          width={800}
          height={600}
          className="object-contain max-w-[90vw] max-h-[90vh] drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
