interface EmojiLadooProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  style?: React.CSSProperties;
}

const EmojiLadoo = ({ size = "md", className = "", style }: EmojiLadooProps) => {
  const sizes = {
    sm: 40,
    md: 56,
    lg: 80,
    xl: 120,
  };

  const dotSizes = {
    sm: 3,
    md: 4,
    lg: 6,
    xl: 8,
  };

  const s = sizes[size];
  const d = dotSizes[size];

  // Generate random brown dots positions
  const dots = [
    { x: 30, y: 25 },
    { x: 55, y: 20 },
    { x: 70, y: 35 },
    { x: 45, y: 50 },
    { x: 25, y: 55 },
    { x: 60, y: 65 },
    { x: 35, y: 70 },
    { x: 75, y: 55 },
    { x: 20, y: 40 },
    { x: 50, y: 35 },
  ];

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: s, height: s, ...style }}
    >
      {/* Orange circle base */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffb347, #f97316, #ea580c)",
          boxShadow: "inset -4px -4px 8px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.2)",
        }}
      />
      
      {/* Brown sesame seed dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: d,
            height: d,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            backgroundColor: i % 2 === 0 ? "#5c3d2e" : "#8b6914",
            transform: "translate(-50%, -50%)",
            opacity: 0.8,
          }}
        />
      ))}
      
      {/* Highlight */}
      <div 
        className="absolute rounded-full"
        style={{
          width: s * 0.3,
          height: s * 0.2,
          left: "20%",
          top: "15%",
          background: "rgba(255,255,255,0.4)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
};

export default EmojiLadoo;
