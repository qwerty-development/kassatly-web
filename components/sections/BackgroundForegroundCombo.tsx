import Image from "next/image";

interface BackgroundForegroundComboProps {
  backgroundImage: string;
  foregroundImage: string;
  name: string;
}

export default function BackgroundForegroundCombo({
  backgroundImage,
  foregroundImage,
  name,
}: BackgroundForegroundComboProps) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={`${name} background`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Foreground Image - Centered */}
      <div className="relative z-10 flex items-center justify-center">
        <Image
          src={foregroundImage}
          alt={`${name} foreground`}
          width={800}
          height={600}
          className="object-contain max-w-[90vw] max-h-[90vh]"
        />
      </div>
    </div>
  );
}
