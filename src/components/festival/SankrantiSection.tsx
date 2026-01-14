import FestivalSection from "./FestivalSection";
import Kite from "./Kite";
import Ladoo from "./Ladoo";

const SankrantiSection = () => {
  return (
    <FestivalSection id="sankranti" className="bg-sky-gradient relative overflow-hidden">
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
        <span className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-body text-sm mb-6">
          Maharashtra & Gujarat
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
          Makara Sankranti
        </h2>

        {/* Ladoo bowl */}
        <div className="relative w-48 h-32 mx-auto mb-8">
          {/* Bowl */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-16 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-full" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-44 h-6 bg-amber-800 rounded-full" />
          
          {/* Ladoos */}
          <Ladoo variant="tilgul" className="absolute bottom-10 left-1/2 -translate-x-8 animate-float" />
          <Ladoo variant="tilgul" className="absolute bottom-8 left-1/2 translate-x-2 animate-float" style={{ animationDelay: "-1s" } as React.CSSProperties} />
          <Ladoo variant="tilgul" className="absolute bottom-14 left-1/2 -translate-x-3 animate-float" style={{ animationDelay: "-0.5s" } as React.CSSProperties} />
        </div>

        <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Makara Sankranti marks the sun's journey into Capricorn. 
          <span className="block mt-2">
            People fly <strong>colorful kites</strong> in the sky and share <strong>tilgul ladoo</strong> with love.
          </span>
        </p>

        <p className="font-display text-xl md:text-2xl text-primary-foreground/80 italic mt-8">
          "तिळगूळ घ्या, गोड बोला"
        </p>
        <p className="font-body text-sm text-primary-foreground/60 mt-2">
          "Take tilgul and speak sweetly"
        </p>
      </div>

      {/* Cloud decorations */}
      <div className="absolute top-10 right-10 w-32 h-16 bg-white/30 rounded-full blur-xl" />
      <div className="absolute top-20 left-20 w-48 h-20 bg-white/20 rounded-full blur-2xl" />
    </FestivalSection>
  );
};

export default SankrantiSection;
