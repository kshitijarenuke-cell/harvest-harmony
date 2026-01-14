import { cn } from "@/lib/utils";

interface DholProps {
  className?: string;
  isBeating?: boolean;
}

const Dhol = ({ className, isBeating = true }: DholProps) => {
  return (
    <div className={cn("relative", isBeating && "animate-drum", className)}>
      {/* Drum body */}
      <svg width="140" height="100" viewBox="0 0 140 100">
        <defs>
          <linearGradient id="drumBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c2d12" />
            <stop offset="30%" stopColor="#c2410c" />
            <stop offset="70%" stopColor="#c2410c" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
          <linearGradient id="drumHead" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#d4a574" />
          </linearGradient>
        </defs>
        
        {/* Left drum head */}
        <ellipse cx="25" cy="50" rx="20" ry="45" fill="url(#drumHead)" />
        <ellipse cx="25" cy="50" rx="15" ry="35" fill="#f5deb3" opacity="0.5" />
        
        {/* Drum body */}
        <rect x="25" y="5" width="90" height="90" rx="5" fill="url(#drumBody)" />
        
        {/* Decorative patterns */}
        <line x1="45" y1="10" x2="45" y2="90" stroke="#fbbf24" strokeWidth="2" />
        <line x1="70" y1="10" x2="70" y2="90" stroke="#fbbf24" strokeWidth="2" />
        <line x1="95" y1="10" x2="95" y2="90" stroke="#fbbf24" strokeWidth="2" />
        
        {/* Zigzag pattern */}
        <path
          d="M30 30 L40 20 L50 30 L60 20 L70 30 L80 20 L90 30 L100 20 L110 30"
          fill="none"
          stroke="#fcd34d"
          strokeWidth="2"
        />
        <path
          d="M30 70 L40 80 L50 70 L60 80 L70 70 L80 80 L90 70 L100 80 L110 70"
          fill="none"
          stroke="#fcd34d"
          strokeWidth="2"
        />
        
        {/* Right drum head */}
        <ellipse cx="115" cy="50" rx="20" ry="45" fill="url(#drumHead)" />
        <ellipse cx="115" cy="50" rx="15" ry="35" fill="#f5deb3" opacity="0.5" />
        
        {/* Rope details */}
        <circle cx="25" cy="20" r="3" fill="#92400e" />
        <circle cx="25" cy="80" r="3" fill="#92400e" />
        <circle cx="115" cy="20" r="3" fill="#92400e" />
        <circle cx="115" cy="80" r="3" fill="#92400e" />
      </svg>
      
      {/* Drumsticks */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-2 bg-amber-800 rounded-full transform rotate-45 origin-left" />
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-2 bg-amber-800 rounded-full transform -rotate-45 origin-right" />
      
      {/* Sound waves when beating */}
      {isBeating && (
        <>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-8 border-l-2 border-primary rounded-l-full opacity-50 animate-ping" />
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-8 border-r-2 border-primary rounded-r-full opacity-50 animate-ping" style={{ animationDelay: '-0.5s' }} />
        </>
      )}
    </div>
  );
};

export default Dhol;
