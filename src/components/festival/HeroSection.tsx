import { useEffect, useState } from "react";
import Kite from "./Kite";
import Sun from "./Sun";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-warm">
          <span className="block text-amber-900 drop-shadow-lg">One Sun 🌞</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg" style={{ WebkitTextStroke: '1px rgba(139, 69, 19, 0.3)' }}>
            One Harvest 🌾
          </span>
          <span className="block mt-2 text-amber-900 drop-shadow-lg">Many Celebrations 🇮🇳</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-amber-900/90 max-w-2xl mx-auto mt-8">
          <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg">
            Makara Sankranti • Pongal • Lohri • Bihu
          </span>
        </p>

        <p className="font-body text-sm md:text-base text-amber-800/80 max-w-xl mx-auto mt-6">
          A journey across India celebrating the harvest festival
        </p>
      </div>

      {/* Festival Journey Navigation - Unique floating cards */}
      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-amber-800/70 text-sm mb-4 font-body">Begin Your Journey</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => scrollToSection("sankranti")}
              className="group flex items-center gap-2 px-4 py-2 bg-sky-500/90 hover:bg-sky-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🪁</span>
              <span className="font-body text-sm hidden md:inline">Sankranti</span>
            </button>
            <button
              onClick={() => scrollToSection("pongal")}
              className="group flex items-center gap-2 px-4 py-2 bg-amber-500/90 hover:bg-amber-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🍚</span>
              <span className="font-body text-sm hidden md:inline">Pongal</span>
            </button>
            <button
              onClick={() => scrollToSection("lohri")}
              className="group flex items-center gap-2 px-4 py-2 bg-orange-600/90 hover:bg-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🔥</span>
              <span className="font-body text-sm hidden md:inline">Lohri</span>
            </button>
            <button
              onClick={() => scrollToSection("bihu")}
              className="group flex items-center gap-2 px-4 py-2 bg-green-600/90 hover:bg-green-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🥁</span>
              <span className="font-body text-sm hidden md:inline">Bihu</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
