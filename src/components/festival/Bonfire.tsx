import { cn } from "@/lib/utils";

interface BonfireProps {
  className?: string;
}

const Bonfire = ({ className }: BonfireProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Fire glow */}
      <div className="absolute -inset-8 bg-orange-500/20 rounded-full blur-3xl" />
      
      {/* Wood logs */}
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-amber-900 rounded-full transform -rotate-12" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-amber-800 rounded-full transform rotate-12" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-3 bg-amber-700 rounded-full" />
      </div>
      
      {/* Fire flames */}
      <div className="relative -top-4 flex justify-center">
        {/* Center flame */}
        <div className="animate-fire origin-bottom">
          <svg width="80" height="120" viewBox="0 0 80 120">
            <defs>
              <linearGradient id="fireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
            </defs>
            <path
              d="M40 120 Q20 80 30 50 Q25 30 40 0 Q55 30 50 50 Q60 80 40 120"
              fill="url(#fireGradient)"
            />
          </svg>
        </div>
        
        {/* Left flame */}
        <div className="absolute left-2 animate-fire origin-bottom" style={{ animationDelay: '-0.2s' }}>
          <svg width="50" height="80" viewBox="0 0 50 80">
            <path
              d="M25 80 Q10 50 20 30 Q15 15 25 0 Q35 15 30 30 Q40 50 25 80"
              fill="url(#fireGradient)"
            />
          </svg>
        </div>
        
        {/* Right flame */}
        <div className="absolute right-2 animate-fire origin-bottom" style={{ animationDelay: '-0.4s' }}>
          <svg width="50" height="80" viewBox="0 0 50 80">
            <path
              d="M25 80 Q10 50 20 30 Q15 15 25 0 Q35 15 30 30 Q40 50 25 80"
              fill="url(#fireGradient)"
            />
          </svg>
        </div>
      </div>
      
      {/* Sparks */}
      <div className="absolute -top-16 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle" />
      <div className="absolute -top-20 left-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-sparkle" style={{ animationDelay: '-0.5s' }} />
      <div className="absolute -top-14 right-1/4 w-2 h-2 bg-amber-300 rounded-full animate-sparkle" style={{ animationDelay: '-1s' }} />
    </div>
  );
};

export default Bonfire;
