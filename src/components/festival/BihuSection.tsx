import FestivalSection from "./FestivalSection";
import Dhol from "./Dhol";

const BihuSection = () => {
  return (
    <FestivalSection id="bihu" className="bg-bihu-green relative overflow-hidden">
      {/* Rice field pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 300" className="w-full">
          <defs>
            <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(100 60% 50%)" />
              <stop offset="100%" stopColor="hsl(100 50% 35%)" />
            </linearGradient>
          </defs>
          {/* Rice stalks pattern */}
          {[...Array(40)].map((_, i) => (
            <g key={i} transform={`translate(${i * 36}, 0)`}>
              <path
                d="M18 300 Q20 250 15 200 Q18 180 20 150"
                stroke="hsl(85 50% 45%)"
                strokeWidth="2"
                fill="none"
              />
              <ellipse cx="20" cy="148" rx="4" ry="8" fill="hsl(45 80% 65%)" />
            </g>
          ))}
          <path
            d="M0,250 C200,220 400,260 600,230 C800,200 1000,250 1200,220 C1300,210 1380,230 1440,215 L1440,300 L0,300 Z"
            fill="url(#fieldGrad)"
          />
        </svg>
      </div>

      {/* Decorative Assamese patterns */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
          <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
          <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
          <path d="M40 5 L40 75 M5 40 L75 40" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        </svg>
      </div>
      <div className="absolute top-10 right-10 opacity-20 transform rotate-45">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <rect x="10" y="10" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
          <rect x="20" y="20" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
          <rect x="30" y="30" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-secondary/30 backdrop-blur-sm rounded-full text-secondary-foreground font-body text-sm mb-6">
          Assam
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
          Bihu
        </h2>

        {/* Dhol */}
        <div className="flex justify-center mb-8">
          <Dhol className="transform scale-110 md:scale-125" />
        </div>

        {/* Dance pose silhouettes */}
        <div className="flex justify-center gap-12 mb-8 opacity-70">
          <div className="text-center">
            <svg width="50" height="70" viewBox="0 0 50 70" className="text-secondary">
              <circle cx="25" cy="8" r="7" fill="currentColor" />
              <path
                d="M25 15 L25 40 M25 25 L10 35 M25 25 L40 20 M25 40 L15 65 M25 40 L35 60"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="text-xs text-muted-foreground block mt-2">Bihu Dance</span>
          </div>
          <div className="text-center">
            <svg width="50" height="70" viewBox="0 0 50 70" className="text-secondary transform scale-x-[-1]">
              <circle cx="25" cy="8" r="7" fill="currentColor" />
              <path
                d="M25 15 L25 40 M25 25 L8 20 M25 25 L42 35 M25 40 L18 65 M25 40 L38 58"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="text-xs text-muted-foreground block mt-2">Folk Dance</span>
          </div>
        </div>

        <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Bihu celebrates <strong>new beginnings</strong> and the Assamese harvest season.
          <span className="block mt-2">
            The rhythmic beats of the <strong>dhol</strong> fill the air as people perform the traditional Bihu dance.
          </span>
        </p>

        <p className="font-display text-xl md:text-2xl text-secondary italic mt-8">
          "বহাগ বিহুৰ শুভেচ্ছা!"
        </p>
        <p className="font-body text-sm text-muted-foreground mt-2">
          "Happy Bohag Bihu!"
        </p>
      </div>
    </FestivalSection>
  );
};

export default BihuSection;
