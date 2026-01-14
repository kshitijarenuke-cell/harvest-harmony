import { cn } from "@/lib/utils";

interface KiteProps {
  color: string;
  tailColor: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const Kite = ({ color, tailColor, className, size = "md", style }: KiteProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28",
  };

  return (
    <div className={cn("relative", className)} style={style}>
      {/* Kite body */}
      <div
        className={cn(
          "relative transform rotate-45",
          sizeClasses[size]
        )}
        style={{ backgroundColor: color }}
      >
        {/* Kite pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%),
                        linear-gradient(-45deg, transparent 45%, white 45%, white 55%, transparent 55%)`,
          }}
        />
        {/* Center decoration */}
        <div
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: tailColor }}
        />
      </div>
      
      {/* Kite tail */}
      <svg
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
        width="40"
        height="80"
        viewBox="0 0 40 80"
      >
        <path
          d="M20 0 Q30 20 15 30 Q25 45 10 55 Q25 65 20 80"
          fill="none"
          stroke={tailColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Tail bows */}
        <circle cx="15" cy="30" r="4" fill={color} />
        <circle cx="10" cy="55" r="4" fill={color} />
      </svg>
    </div>
  );
};

export default Kite;
