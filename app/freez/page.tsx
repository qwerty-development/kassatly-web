'use client';
import { useState, useCallback } from "react";
import BackgroundForegroundCombo from "@/components/sections/BackgroundForegroundCombo";
import FixedForeground from "@/components/sections/FixedForeground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Define the image combinations based on the available files
const imageCombinations = [
  {
    name: "black",
    backgroundImage: "/freez-page/backgrounds/black.png",
    foregroundImage: "/freez-page/foreground/black.png",
  },
  {
    name: "pink",
    backgroundImage: "/freez-page/backgrounds/pink.png",
    foregroundImage: "/freez-page/foreground/pink.png",
  },
  {
    name: "red",
    backgroundImage: "/freez-page/backgrounds/red.png",
    foregroundImage: "/freez-page/foreground/red.png",
  },
];

export default function FreezPage() {
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);

  const handleIntersection = useCallback(
    (index: number, isIntersecting: boolean) => {
      if (isIntersecting) {
        setActiveBackgroundIndex(index);
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      {/* Fixed Foreground Component - stays centered and changes based on active background */}
      <FixedForeground
        imageCombinations={imageCombinations}
        activeIndex={activeBackgroundIndex}
      />

      <main className="w-full relative z-10">
        {imageCombinations.map((combo, index) => (
          <BackgroundForegroundCombo
            key={combo.name}
            backgroundImage={combo.backgroundImage}
            name={combo.name}
            index={index}
            onIntersection={handleIntersection}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
