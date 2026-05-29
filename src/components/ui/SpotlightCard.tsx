"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string; // e.g. rgba(255, 106, 47, 0.15)
  borderColor?: string; // e.g. rgba(255, 106, 47, 0.4)
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 106, 47, 0.12)",
  borderColor = "rgba(255, 106, 47, 0.3)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-deep-black transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Background Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      
      {/* Border Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border transition-opacity duration-300"
        style={{
          opacity,
          borderColor: "transparent",
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 80%)`,
          maskImage: "linear-gradient(white, white)",
          WebkitMaskImage: "linear-gradient(white, white)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
