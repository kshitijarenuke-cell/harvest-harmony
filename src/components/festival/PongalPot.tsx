import { cn } from "@/lib/utils";

interface PongalPotProps {
  className?: string;
}

const PongalPot = ({ className }: PongalPotProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Steam effect */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="w-2 h-8 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-bubble" />
        <div className="w-3 h-10 bg-gradient-to-t from-white/30 to-transparent rounded-full animate-bubble" style={{ animationDelay: '-0.5s' }} />
        <div className="w-2 h-6 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-bubble" style={{ animationDelay: '-1s' }} />
      </div>
      
      {/* Pot */}
      <div className="relative">
        {/* Pot body */}
        <svg width="120" height="100" viewBox="0 0 120 100">
          <defs>
            <linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="riceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fcd34d" />
            </linearGradient>
          </defs>
          
          {/* Pot rim */}
          <ellipse cx="60" cy="15" rx="55" ry="12" fill="#92400e" />
          <ellipse cx="60" cy="15" rx="50" ry="10" fill="#b45309" />
          
          {/* Pot body */}
          <path
            d="M10 15 Q5 50 20 80 Q40 100 60 100 Q80 100 100 80 Q115 50 110 15"
            fill="url(#potGradient)"
          />
          
          {/* Overflowing rice */}
          <ellipse cx="60" cy="15" rx="45" ry="8" fill="url(#riceGradient)" />
          
          {/* Rice overflow drip */}
          <path
            d="M35 18 Q30 25 32 35 Q35 40 38 35 Q40 25 35 18"
            fill="#fcd34d"
          />
          <path
            d="M75 16 Q78 28 80 38 Q82 42 78 38 Q72 28 75 16"
            fill="#fcd34d"
          />
        </svg>
        
        {/* Bubbles */}
        <div className="absolute top-3 left-8 w-2 h-2 bg-amber-200 rounded-full animate-bubble opacity-70" />
        <div className="absolute top-4 right-10 w-1.5 h-1.5 bg-amber-100 rounded-full animate-bubble opacity-60" style={{ animationDelay: '-0.7s' }} />
        <div className="absolute top-2 left-12 w-1 h-1 bg-yellow-200 rounded-full animate-bubble opacity-80" style={{ animationDelay: '-1.3s' }} />
      </div>
      
      {/* Decorative leaves */}
      <div className="absolute -left-4 top-1/2 transform -rotate-45">
        <div className="w-8 h-3 bg-green-600 rounded-full" />
      </div>
      <div className="absolute -right-4 top-1/2 transform rotate-45">
        <div className="w-8 h-3 bg-green-600 rounded-full" />
      </div>
    </div>
  );
};

export default PongalPot;
