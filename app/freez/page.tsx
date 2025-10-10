"use client";
import { useState, useCallback, useRef } from "react"; // Import useRef
import BackgroundForegroundCombo from "@/components/sections/BackgroundForegroundCombo";
import FixedForeground from "@/components/sections/FixedForeground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ... (imageCombinations array remains the same)
const imageCombinations = [
  {
    name: "apple-grape",
    backgroundImage: "/freez-page/backgrounds/apple-grape.png",
    foregroundImage: "/freez-page/foreground/apple-grape-w.png",
  },
  {
    name: "berry",
    backgroundImage: "/freez-page/backgrounds/berry.png",
    foregroundImage: "/freez-page/foreground/berry-m.png",
  },
  {
    name: "blue-hawaii",
    backgroundImage: "/freez-page/backgrounds/blue-hawaii.png",
    foregroundImage: "/freez-page/foreground/blue-hawaii-w.png",
  },
  {
    name: "kiwi-lime",
    backgroundImage: "/freez-page/backgrounds/kiwi-lime.png",
    foregroundImage: "/freez-page/foreground/kiwi-lime-w.png",
  },
  {
    name: "lemon-ginger",
    backgroundImage: "/freez-page/backgrounds/lemon-ginger.png",
    foregroundImage: "/freez-page/foreground/lemon-ginger-m.png",
  },
  {
    name: "lemon-mint",
    backgroundImage: "/freez-page/backgrounds/lemon-mint.png",
    foregroundImage: "/freez-page/foreground/lemon-mint-w.png",
  },
  {
    name: "lychee",
    backgroundImage: "/freez-page/backgrounds/lychee.png",
    foregroundImage: "/freez-page/foreground/lychee-m.png",
  },
  {
    name: "mango-peach",
    backgroundImage: "/freez-page/backgrounds/mango-peach.png",
    foregroundImage: "/freez-page/foreground/mango-peach-w.png",
  },
  {
    name: "mojito-strawberry",
    backgroundImage: "/freez-page/backgrounds/mojito-strawberry.png",
    foregroundImage: "/freez-page/foreground/mojito-strawberry-m.png",
  },
  {
    name: "pineapple-coconut",
    backgroundImage: "/freez-page/backgrounds/pineapple-coconut.png",
    foregroundImage: "/freez-page/foreground/pineapple-coconut-m.png",
  },
  {
    name: "pomegranate",
    backgroundImage: "/freez-page/backgrounds/pomegranate.png",
    foregroundImage: "/freez-page/foreground/pomegranate-m.png",
  },
  {
    name: "strawberry",
    backgroundImage: "/freez-page/backgrounds/strawberry.png",
    foregroundImage: "/freez-page/foreground/strawberry-m.png",
  },
  {
    name: "tamarind",
    backgroundImage: "/freez-page/backgrounds/tamarind.png",
    foregroundImage: "/freez-page/foreground/tamarind-m.png",
  },
];


export default function FreezPage() {
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);
  // Create a ref to hold an array of DOM elements
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIntersection = useCallback(
    (index: number, isIntersecting: boolean) => {
      if (isIntersecting) {
        setActiveBackgroundIndex(index);
      }
    },
    []
  );

  // Function to handle dot clicks
  const handleDotClick = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center", // Scrolls the section to the center of the viewport
    });
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      <main className="w-full relative z-10">
        <FixedForeground
          imageCombinations={imageCombinations}
          activeIndex={activeBackgroundIndex}
          onDotClick={handleDotClick} // Pass the click handler
        />

        {imageCombinations.map((combo, index) => (
          <BackgroundForegroundCombo
            key={combo.name}
            // Assign the ref for each section to our array
            ref={(el) => (sectionRefs.current[index] = el)}
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