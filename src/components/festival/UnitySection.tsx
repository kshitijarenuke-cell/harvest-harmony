import { useEffect, useState } from "react";
import FestivalSection from "./FestivalSection";
import Kite from "./Kite";
import Ladoo from "./Ladoo";
import Bonfire from "./Bonfire";
import Dhol from "./Dhol";
import PongalPot from "./PongalPot";

const UnitySection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <FestivalSection id="unity" className="bg-unity bg-background relative overflow-hidden">
      {/* Decorative rangoli pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="800" height="800" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="350" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <circle cx="400" cy="400" r="210" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <circle cx="400" cy="400" r="140" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="400"
              y1="50"
              x2="400"
              y2="750"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
              transform={`rotate(${i * 30} 400 400)`}
            />
          ))}
        </svg>
      </div>

      {/* Festival elements positioned around */}
      {mounted && (
        <>
          {/* Kite - top left */}
          <div className="absolute top-20 left-[10%] animate-kite">
            <Kite color="#ef4444" tailColor="#fbbf24" size="md" />
          </div>

          {/* Ladoo bowl - top right */}
          <div className="absolute top-24 right-[10%] animate-float">
            <div className="flex gap-1">
              <Ladoo variant="tilgul" />
              <Ladoo variant="besan" className="transform translate-y-2" />
            </div>
          </div>

          {/* Bonfire - bottom left */}
          <div className="absolute bottom-32 left-[8%] transform scale-75">
            <Bonfire />
          </div>

          {/* Dhol - bottom right */}
          <div className="absolute bottom-40 right-[8%] transform scale-75">
            <Dhol isBeating={true} />
          </div>

          {/* Pongal pot - center bottom */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 transform scale-90">
            <PongalPot />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Different Cultures
        </h2>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-8">
          One Harvest, One India 🇮🇳
        </h3>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          From the kite-filled skies of Gujarat to the bonfire nights of Punjab,
          from the overflowing Pongal pots of Tamil Nadu to the rhythmic Bihu dances of Assam —
          <span className="block mt-2 text-foreground font-medium">
            we celebrate together as one nation.
          </span>
        </p>

        {/* Festival badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#sankranti"
            className="px-6 py-3 bg-sky/20 hover:bg-sky/30 text-sky-foreground rounded-full transition-colors font-body text-sm"
          >
            🪁 Makara Sankranti
          </a>
          <a
            href="#pongal"
            className="px-6 py-3 bg-golden/20 hover:bg-golden/30 text-golden-foreground rounded-full transition-colors font-body text-sm"
          >
            🍚 Pongal
          </a>
          <a
            href="#lohri"
            className="px-6 py-3 bg-bonfire/20 hover:bg-bonfire/30 text-bonfire-foreground rounded-full transition-colors font-body text-sm"
          >
            🔥 Lohri
          </a>
          <a
            href="#bihu"
            className="px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground rounded-full transition-colors font-body text-sm"
          >
            🥁 Bihu
          </a>
        </div>

        {/* Closing message */}
        <div className="rangoli-border p-8 max-w-xl mx-auto bg-card/80 backdrop-blur-sm">
          <p className="font-display text-xl md:text-2xl text-foreground italic">
            "Unity in Diversity"
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Happy Harvest Festival! 🌾✨
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-body text-xs text-muted-foreground/60">
          Celebrating India's Harvest Festivals
        </p>
      </div>
    </FestivalSection>
  );
};

export default UnitySection;
