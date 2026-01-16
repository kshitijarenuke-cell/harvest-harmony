import { useEffect, useState, useRef } from "react";
import FestivalSection from "./FestivalSection";
import Kite from "./Kite";
import EmojiLadoo from "./EmojiLadoo";

interface FlyingKite {
  id: number;
  color: string;
  tailColor: string;
  startX: number;
  startY: number;
  endX: number;
  delay: number;
}

const SankrantiSection = () => {
  const [showBurst, setShowBurst] = useState(false);
  const [showBigLadoo, setShowBigLadoo] = useState(false);
  const [burstComplete, setBurstComplete] = useState(false);
  const [flyingKites, setFlyingKites] = useState<FlyingKite[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Show big ladoo first
          setShowBigLadoo(true);
          
          // After 1s, burst the ladoo
          setTimeout(() => {
            setShowBurst(true);
            
            // Generate flying kites from center
            const kiteColors = [
              { color: "#ef4444", tail: "#fbbf24" },
              { color: "#22c55e", tail: "#f97316" },
              { color: "#8b5cf6", tail: "#ec4899" },
              { color: "#3b82f6", tail: "#facc15" },
              { color: "#f97316", tail: "#14b8a6" },
              { color: "#ec4899", tail: "#22c55e" },
            ];
            
            const kites: FlyingKite[] = kiteColors.map((k, i) => ({
              id: i,
              color: k.color,
              tailColor: k.tail,
              startX: 50,
              startY: 50,
              endX: (i % 2 === 0 ? -30 : 130) + (Math.random() * 20 - 10),
              delay: i * 0.15,
            }));
            setFlyingKites(kites);
          }, 1000);
          
          // Hide big ladoo after burst
          setTimeout(() => {
            setShowBigLadoo(false);
            setBurstComplete(true);
          }, 1500);
          
          // Auto scroll to Pongal after animation
          setTimeout(() => {
            document.getElementById("pongal")?.scrollIntoView({ behavior: "smooth" });
          }, 4000);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} id="sankranti">
      <FestivalSection className="bg-sky-gradient relative overflow-hidden">
        {/* Big Ladoo that appears and bursts */}
        {showBigLadoo && (
          <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className={`transition-all duration-500 ${showBurst ? 'scale-150 opacity-0' : 'scale-100 opacity-100 animate-ladoo-popup'}`}>
              <EmojiLadoo size="xl" className="drop-shadow-2xl" style={{ width: 180, height: 180 }} />
            </div>
            
            {/* Burst rings */}
            {showBurst && (
              <>
                <div className="absolute w-48 h-48 rounded-full border-8 border-orange-400/80 animate-burst-ring" />
                <div className="absolute w-48 h-48 rounded-full border-8 border-amber-400/80 animate-burst-ring" style={{ animationDelay: '0.15s' }} />
                <div className="absolute w-48 h-48 rounded-full border-8 border-yellow-400/80 animate-burst-ring" style={{ animationDelay: '0.3s' }} />
              </>
            )}
          </div>
        )}

        {/* Big Kites flying out from burst */}
        {flyingKites.map((kite) => (
          <div
            key={kite.id}
            className="absolute z-40 pointer-events-none animate-kite-flyout"
            style={{
              left: `${kite.startX}%`,
              top: `${kite.startY}%`,
              '--end-x': `${kite.endX - kite.startX}vw`,
              '--end-y': `${-60 + Math.random() * 40}vh`,
              animationDelay: `${kite.delay}s`,
            } as React.CSSProperties}
          >
            <Kite color={kite.color} tailColor={kite.tailColor} size="lg" />
          </div>
        ))}

        {/* Static floating kites (show after burst) */}
        {burstComplete && (
          <>
            <Kite
              color="#ef4444"
              tailColor="#fbbf24"
              size="lg"
              className="absolute top-20 left-[5%] animate-kite"
            />
            <Kite
              color="#f97316"
              tailColor="#22c55e"
              size="md"
              className="absolute top-32 right-[10%] animate-kite-delayed"
            />
            <Kite
              color="#8b5cf6"
              tailColor="#f43f5e"
              size="sm"
              className="absolute bottom-40 left-[15%] animate-kite-slow"
            />
            <Kite
              color="#14b8a6"
              tailColor="#eab308"
              size="md"
              className="absolute top-48 left-[60%] animate-kite"
              style={{ animationDelay: "-4s" }}
            />
          </>
        )}

        {/* Content */}
        <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-700 ${burstComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-body text-sm mb-6 shadow-lg">
            Maharashtra & Gujarat
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Makara Sankranti
          </h2>

          {/* Ladoo Bowl - Properly positioned */}
          <div className="relative w-64 h-56 mx-auto mb-8">
            {/* Bowl SVG */}
            <svg viewBox="0 0 200 100" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-28">
              <defs>
                <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#92400e" />
                  <stop offset="50%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#451a03" />
                </linearGradient>
                <linearGradient id="bowlInner" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#451a03" />
                </linearGradient>
              </defs>
              {/* Bowl outer */}
              <ellipse cx="100" cy="25" rx="85" ry="20" fill="#78350f" />
              <path d="M15 25 Q15 85 100 90 Q185 85 185 25" fill="url(#bowlGrad)" />
              {/* Bowl inner shadow */}
              <ellipse cx="100" cy="25" rx="70" ry="12" fill="url(#bowlInner)" />
            </svg>
            
            {/* Ladoos sitting inside the bowl */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-end justify-center">
              {/* Back row */}
              <EmojiLadoo 
                size="md" 
                className={`absolute transition-all duration-500 ${burstComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ left: -28, bottom: 20, transitionDelay: '0.1s' }}
              />
              <EmojiLadoo 
                size="md" 
                className={`absolute transition-all duration-500 ${burstComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ left: 18, bottom: 22, transitionDelay: '0.2s' }}
              />
              <EmojiLadoo 
                size="sm" 
                className={`absolute transition-all duration-500 ${burstComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ left: -5, bottom: 38, transitionDelay: '0.3s' }}
              />
              {/* Front row */}
              <EmojiLadoo 
                size="lg" 
                className={`relative transition-all duration-500 ${burstComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ zIndex: 2, transitionDelay: '0.4s' }}
              />
            </div>
          </div>

          {/* Why we celebrate */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
            <h3 className="font-display text-lg text-white font-semibold mb-2">Why We Celebrate</h3>
            <p className="font-body text-white/90 text-sm leading-relaxed">
              Makara Sankranti marks the sun's northward journey (Uttarayan), symbolizing positivity and new beginnings.
              It celebrates the end of winter harvest season, thanking the Sun God for abundance.
              Flying kites connects us to the sky, while sharing tilgul strengthens bonds of love and sweetness.
            </p>
          </div>

          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            People fly <strong>colorful kites</strong> in the sky and share <strong>tilgul ladoo</strong> with love.
          </p>

          <p className="font-display text-xl md:text-2xl text-white italic mt-8 drop-shadow-lg">
            "तिळगूळ घ्या, गोड बोला"
          </p>
          <p className="font-body text-sm text-white/80 mt-2">
            "Take tilgul and speak sweetly"
          </p>
        </div>

        {/* Cloud decorations */}
        <div className="absolute top-10 right-10 w-32 h-16 bg-white/30 rounded-full blur-xl" />
        <div className="absolute top-20 left-20 w-48 h-20 bg-white/20 rounded-full blur-2xl" />
      </FestivalSection>
    </div>
  );
};

export default SankrantiSection;
