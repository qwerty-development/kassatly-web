import BackgroundForegroundCombo from "@/components/sections/BackgroundForegroundCombo";
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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        {imageCombinations.map((combo, index) => (
          <BackgroundForegroundCombo
            key={combo.name}
            backgroundImage={combo.backgroundImage}
            foregroundImage={combo.foregroundImage}
            name={combo.name}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
