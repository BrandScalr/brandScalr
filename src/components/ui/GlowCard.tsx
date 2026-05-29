"use client";

import React from "react";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glow = true,
  ...props
}: GlowCardProps) {
  return (
    <div
      className={`relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 ${
        glow ? "glow-card-border" : "border border-white/10"
      } ${className}`}
      {...props}
    >
      {/* Inner solid wrapper */}
      <div className="w-full h-full bg-deep-black/95 rounded-[15px] p-6 text-white relative z-10">
        {children}
      </div>
    </div>
  );
}
