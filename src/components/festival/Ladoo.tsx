import { cn } from "@/lib/utils";

interface LadooProps {
  className?: string;
  variant?: "tilgul" | "besan";
  style?: React.CSSProperties;
}

const Ladoo = ({ className, variant = "tilgul", style }: LadooProps) => {
  const colors = {
    tilgul: {
      base: "#d4a574",
      highlight: "#e8c9a0",
      speckle: "#1a1a1a",
    },
    besan: {
      base: "#f59e0b",
      highlight: "#fbbf24",
      speckle: "#92400e",
    },
  };

  const c = colors[variant];

  return (
    <div className={cn("relative", className)} style={style}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <defs>
          <radialGradient id={`ladooGrad-${variant}`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={c.highlight} />
            <stop offset="100%" stopColor={c.base} />
          </radialGradient>
        </defs>
        
        {/* Main ladoo body */}
        <circle cx="30" cy="30" r="25" fill={`url(#ladooGrad-${variant})`} />
        
        {/* Texture dots for tilgul (sesame seeds) */}
        {variant === "tilgul" && (
          <>
            <circle cx="20" cy="20" r="1.5" fill={c.speckle} opacity="0.6" />
            <circle cx="35" cy="18" r="1" fill={c.speckle} opacity="0.5" />
            <circle cx="25" cy="35" r="1.5" fill={c.speckle} opacity="0.6" />
            <circle cx="40" cy="30" r="1" fill={c.speckle} opacity="0.5" />
            <circle cx="22" cy="28" r="1" fill={c.speckle} opacity="0.4" />
            <circle cx="38" cy="40" r="1.5" fill={c.speckle} opacity="0.5" />
            <circle cx="30" cy="25" r="1" fill={c.speckle} opacity="0.4" />
          </>
        )}
        
        {/* Highlight */}
        <ellipse cx="22" cy="22" rx="8" ry="6" fill="white" opacity="0.3" />
      </svg>
    </div>
  );
};

export default Ladoo;
