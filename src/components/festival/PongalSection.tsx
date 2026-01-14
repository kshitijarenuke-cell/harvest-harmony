import FestivalSection from "./FestivalSection";
import PongalPot from "./PongalPot";

const PongalSection = () => {
  return (
    <FestivalSection id="pongal" className="bg-gradient-to-b from-amber-100 to-orange-100 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="kolam" patternUnits="userSpaceOnUse" width="60" height="60">
            <circle cx="30" cy="30" r="2" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
            <circle cx="45" cy="15" r="1" fill="currentColor" />
            <circle cx="15" cy="45" r="1" fill="currentColor" />
            <circle cx="45" cy="45" r="1" fill="currentColor" />
          </pattern>
          <rect fill="url(#kolam)" width="100%" height="100%" className="text-primary" />
        </svg>
      </div>

      {/* Banana leaves decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path
            d="M0,200 C200,150 300,180 400,160 C500,140 600,170 720,150 C840,130 960,160 1080,140 C1200,120 1320,150 1440,130 L1440,200 L0,200 Z"
            fill="hsl(120 50% 35%)"
          />
          <path
            d="M0,200 C180,170 360,190 540,170 C720,150 900,180 1080,160 C1260,140 1350,170 1440,155 L1440,200 L0,200 Z"
            fill="hsl(120 40% 28%)"
          />
        </svg>
      </div>

      {/* Sugarcane decorations */}
      <div className="absolute left-4 md:left-20 bottom-20 opacity-60">
        <div className="w-4 h-64 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
        <div className="absolute -right-6 bottom-0 w-4 h-48 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
      </div>
      <div className="absolute right-4 md:right-20 bottom-20 opacity-60">
        <div className="w-4 h-56 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
        <div className="absolute -left-6 bottom-0 w-4 h-40 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-body text-sm mb-6">
          Tamil Nadu
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
          Pongal
        </h2>

        {/* Pongal pot */}
        <div className="flex justify-center mb-8">
          <PongalPot className="transform scale-125 md:scale-150" />
        </div>

        <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Pongal is a <strong>thanksgiving festival</strong> to nature, farmers, and the Sun God.
          <span className="block mt-2">
            The overflowing pot of rice symbolizes <strong>abundance and prosperity</strong>.
          </span>
        </p>

        <p className="font-display text-xl md:text-2xl text-secondary italic mt-8">
          "பொங்கலோ பொங்கல்!"
        </p>
        <p className="font-body text-sm text-muted-foreground mt-2">
          "Let it overflow!" - A cry of joy as the rice boils over
        </p>

        {/* Turmeric and kolam decoration */}
        <div className="flex justify-center gap-4 mt-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg" />
        </div>
      </div>
    </FestivalSection>
  );
};

export default PongalSection;
