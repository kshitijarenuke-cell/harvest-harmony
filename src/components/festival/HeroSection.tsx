import { useEffect, useState } from "react";
import Kite from "./Kite";
import Sun from "./Sun";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById("sankranti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-sunrise overflow-hidden flex flex-col items-center justify-center">
      {/* Animated field at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-600/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(45 70% 45%)"
            d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="hsl(35 60% 35%)"
            d="M0,40 C360,80 720,10 1080,50 C1260,70 1350,30 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      {/* Sun */}
      <div className="absolute top-20 md:top-10 left-1/2 -translate-x-1/2">
        <Sun />
      </div>

      {/* Flying kites */}
      <Kite
        color="#ef4444"
        tailColor="#fbbf24"
        size="lg"
        className="absolute top-32 left-[10%] animate-kite"
      />
      <Kite
        color="#22c55e"
        tailColor="#f97316"
        size="md"
        className="absolute top-48 right-[15%] animate-kite-delayed"
      />
      <Kite
        color="#8b5cf6"
        tailColor="#ec4899"
        size="sm"
        className="absolute top-64 left-[25%] animate-kite-slow"
      />
      <Kite
        color="#f97316"
        tailColor="#14b8a6"
        size="md"
        className="absolute top-40 right-[30%] animate-kite"
        style={{ animationDelay: "-2s" } as React.CSSProperties}
      />
      <Kite
        color="#3b82f6"
        tailColor="#facc15"
        size="sm"
        className="absolute top-72 right-[8%] animate-kite-delayed"
      />

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-shadow-warm">
          <span className="block">One Sun 🌞</span>
          <span className="block text-gradient-gold mt-2">One Harvest 🌾</span>
          <span className="block mt-2">Many Celebrations 🇮🇳</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8">
          <span className="inline-block px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full">
            Makara Sankranti • Pongal • Lohri • Bihu
          </span>
        </p>

        <p className="font-body text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto mt-6">
          A journey across India celebrating the harvest festival
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer animate-scroll-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
