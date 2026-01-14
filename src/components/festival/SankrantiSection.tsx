import { useEffect, useState, useRef } from "react";
import FestivalSection from "./FestivalSection";
import Kite from "./Kite";
import tilgulLadoo from "@/assets/tilgul-ladoo.png";

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
  delay: number;
}

const SankrantiSection = () => {
  const [showBurst, setShowBurst] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => setShowBurst(true), 300);
          
          const colors = ["#ef4444", "#f97316", "#8b5cf6", "#14b8a6", "#fbbf24", "#22c55e"];
          const newParticles: Particle[] = [];
          const kitePositions = [
            { x: 5, y: 20 }, { x: 90, y: 15 }, { x: 15, y: 70 }, { x: 60, y: 25 },
          ];
          
          for (let i = 0; i < 20; i++) {
            const targetKite = kitePositions[i % kitePositions.length];
            newParticles.push({
              id: i, x: 50, y: 50,
              targetX: targetKite.x + (Math.random() - 0.5) * 10,
              targetY: targetKite.y + (Math.random() - 0.5) * 10,
              color: colors[Math.floor(Math.random() * colors.length)],
              size: 8 + Math.random() * 12,
              delay: Math.random() * 0.5,
            });
          }
          setParticles(newParticles);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef}>
    <FestivalSection id="sankranti" className="bg-sky-gradient relative overflow-hidden">
      {/* Particles flying to kites */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-particle-fly pointer-events-none z-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            '--target-x': `${particle.targetX - particle.x}vw`,
            '--target-y': `${particle.targetY - particle.y}vh`,
            animationDelay: `${particle.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Floating kites */}
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
        style={{ animationDelay: "-4s" } as React.CSSProperties}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-body text-sm mb-6 shadow-lg">
          Maharashtra & Gujarat
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Makara Sankranti
        </h2>

        {/* Real Ladoo with burst animation */}
        <div className="relative w-64 h-48 mx-auto mb-8 flex items-center justify-center">
          {/* Burst ring effect */}
          {showBurst && (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-amber-400/60 animate-burst-ring" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-orange-400/60 animate-burst-ring" style={{ animationDelay: '0.2s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-yellow-400/60 animate-burst-ring" style={{ animationDelay: '0.4s' }} />
              </div>
            </>
          )}
          
          {/* Bowl */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20">
            <svg viewBox="0 0 200 80" className="w-full h-full">
              <defs>
                <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#92400e" />
                  <stop offset="50%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#451a03" />
                </linearGradient>
              </defs>
              <ellipse cx="100" cy="20" rx="90" ry="15" fill="#92400e" />
              <path d="M10 20 Q10 70 100 75 Q190 70 190 20" fill="url(#bowlGrad)" />
            </svg>
          </div>
          
          {/* Ladoos in bowl */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            <img 
              src={tilgulLadoo} 
              alt="Tilgul Ladoo" 
              className={`w-16 h-16 object-cover rounded-full shadow-lg transition-all duration-700 ${showBurst ? 'animate-ladoo-popup scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            />
            <img 
              src={tilgulLadoo} 
              alt="Tilgul Ladoo" 
              className={`w-14 h-14 object-cover rounded-full shadow-lg transition-all duration-700 ${showBurst ? 'animate-ladoo-popup scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ animationDelay: '0.15s' }}
            />
            <img 
              src={tilgulLadoo} 
              alt="Tilgul Ladoo" 
              className={`w-12 h-12 object-cover rounded-full shadow-lg transition-all duration-700 ${showBurst ? 'animate-ladoo-popup scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
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
