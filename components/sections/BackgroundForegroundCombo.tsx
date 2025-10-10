import Image from "next/image";
import { useRef, useEffect, forwardRef } from "react";

interface BackgroundForegroundComboProps {
  backgroundImage: string;
  name: string;
  index: number;
  onIntersection: (index: number, isIntersecting: boolean) => void;
}

const BackgroundForegroundCombo = forwardRef<HTMLDivElement, BackgroundForegroundComboProps>(
  ({ backgroundImage, name, index, onIntersection }, ref) => {
    // Internal ref for the IntersectionObserver
    const internalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Trigger callback when more than 50% of the element is visible
          if (entry.intersectionRatio > 0.5) {
            onIntersection(index, true);
          }
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is visible
          rootMargin: "0px",
        }
      );

      // We use the internal ref for observing
      const currentRef = internalRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [index, onIntersection]);

    return (
      <div
        // This callback ref assigns the DOM node to both refs
        ref={(node) => {
          (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className="relative w-full h-screen overflow-hidden group"
        data-background-index={index}
      >
        {/* ... (rest of the component is unchanged) ... */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt={`${name} background`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            priority={index === 0}
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-8 left-8 z-10">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
            {name.toUpperCase()}
          </div>
        </div>
      </div>
    );
  }
);

BackgroundForegroundCombo.displayName = "BackgroundForegroundCombo";

export default BackgroundForegroundCombo;