import { cn } from "@/lib/utils";

interface SunProps {
  className?: string;
}

const Sun = ({ className }: SunProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Sun glow */}
      <div className="absolute inset-0 rounded-full bg-golden animate-sun-glow" />
      
      {/* Sun body */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400">
        {/* Inner highlight */}
        <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-200 opacity-60 blur-sm" />
      </div>
      
      {/* Sun rays */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-16 md:h-24 bg-gradient-to-t from-amber-400 to-transparent origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Sun;
