import { useEffect, useState, useRef } from "react";
import FestivalSection from "./FestivalSection";
import PongalPot from "./PongalPot";

const PongalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
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

      {/* Animated Sugarcane decorations */}
      <div className={`absolute left-4 md:left-20 bottom-20 transition-all duration-1000 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="w-4 h-64 bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-sway" />
        <div className="absolute -right-6 bottom-0 w-4 h-48 bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-sway" style={{ animationDelay: '-1s' }} />
      </div>
      <div className={`absolute right-4 md:right-20 bottom-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="w-4 h-56 bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-sway" style={{ animationDelay: '-0.5s' }} />
        <div className="absolute -left-6 bottom-0 w-4 h-40 bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-sway" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-body text-sm mb-6">
          Tamil Nadu
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
          Pongal
        </h2>

        {/* Pongal pot with steam animation */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <PongalPot className="transform scale-125 md:scale-150" />
        </div>

        {/* Why we celebrate */}
        <div className="bg-orange-200/50 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
          <h3 className="font-display text-lg text-foreground font-semibold mb-2">Why We Celebrate</h3>
          <p className="font-body text-foreground/80 text-sm leading-relaxed">
            Pongal is a 4-day thanksgiving festival dedicated to the Sun God, farmers, and cattle who help in harvest.
            The word "Pongal" means "to boil over" — symbolizing abundance and prosperity in life.
            It marks the end of winter solstice and celebrates the harvest of rice, turmeric, and sugarcane.
          </p>
        </div>

        <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          The overflowing pot of rice symbolizes <strong>abundance and prosperity</strong>.
        </p>

        {/* Tamil phrase with explanation */}
        <div className="mt-8 bg-gradient-to-r from-orange-300/50 via-amber-200/50 to-orange-300/50 rounded-2xl p-6 max-w-xl mx-auto">
          <p className="font-display text-2xl md:text-3xl text-secondary italic">
            "பொங்கலோ பொங்கல்!"
          </p>
          <p className="font-body text-base text-foreground/90 mt-3 font-medium">
            "Pongalo Pongal!" — Let it overflow!
          </p>
          <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
            This joyful cry is shouted when the rice milk boils over the pot, symbolizing that prosperity and 
            happiness are overflowing into our lives. The more it overflows, the more auspicious it is!
          </p>
        </div>

        {/* Traditional offerings instead of buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <div className="w-16 h-20 mx-auto mb-2 relative">
              <svg viewBox="0 0 60 80" className="w-full h-full">
                {/* Turmeric root */}
                <ellipse cx="30" cy="50" rx="15" ry="20" fill="#f59e0b" />
                <ellipse cx="20" cy="40" rx="8" ry="12" fill="#fbbf24" transform="rotate(-20 20 40)" />
                <ellipse cx="40" cy="45" rx="6" ry="10" fill="#d97706" transform="rotate(25 40 45)" />
                <ellipse cx="30" cy="30" rx="4" ry="8" fill="#fcd34d" />
              </svg>
            </div>
            <span className="text-xs text-foreground/70 font-body">Turmeric</span>
          </div>
          <div className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
            <div className="w-16 h-20 mx-auto mb-2 relative">
              <svg viewBox="0 0 60 80" className="w-full h-full">
                {/* Banana bunch */}
                <ellipse cx="30" cy="15" rx="12" ry="8" fill="#4d7c0f" />
                <ellipse cx="18" cy="35" rx="6" ry="15" fill="#facc15" transform="rotate(-15 18 35)" />
                <ellipse cx="30" cy="38" rx="6" ry="16" fill="#fde047" />
                <ellipse cx="42" cy="35" rx="6" ry="15" fill="#facc15" transform="rotate(15 42 35)" />
                <ellipse cx="24" cy="55" rx="5" ry="12" fill="#eab308" transform="rotate(-10 24 55)" />
                <ellipse cx="36" cy="55" rx="5" ry="12" fill="#eab308" transform="rotate(10 36 55)" />
              </svg>
            </div>
            <span className="text-xs text-foreground/70 font-body">Banana</span>
          </div>
          <div className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1s' }}>
            <div className="w-16 h-20 mx-auto mb-2 relative">
              <svg viewBox="0 0 60 80" className="w-full h-full">
                {/* Sugarcane */}
                <rect x="27" y="5" width="6" height="70" rx="3" fill="#84cc16" />
                <line x1="30" y1="15" x2="30" y2="15" stroke="#65a30d" strokeWidth="6" />
                <line x1="30" y1="30" x2="30" y2="30" stroke="#65a30d" strokeWidth="6" />
                <line x1="30" y1="45" x2="30" y2="45" stroke="#65a30d" strokeWidth="6" />
                <line x1="30" y1="60" x2="30" y2="60" stroke="#65a30d" strokeWidth="6" />
                {/* Leaves */}
                <path d="M30 5 Q20 -5 15 10" stroke="#22c55e" strokeWidth="2" fill="none" />
                <path d="M30 5 Q40 -5 45 10" stroke="#22c55e" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-xs text-foreground/70 font-body">Sugarcane</span>
          </div>
        </div>
      </div>
    </FestivalSection>
    </div>
  );
};

export default PongalSection;
