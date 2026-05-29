"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function FloatingCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto hidden md:block">
      <a
        href="https://wa.me/917389526779"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tooltip Label */}
        <div
          className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-deep-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-white/10 shadow-2xl transition-all duration-300 pointer-events-none whitespace-nowrap ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Talk on WhatsApp
        </div>

        {/* Pulse Glowing rings behind button */}
        <div className="absolute inset-0 rounded-full bg-brand-orange/30 animate-ping pointer-events-none" />

        {/* Button Wrapper */}
        <MagneticButton className="w-14 h-14 bg-brand-orange hover:bg-deep-black text-white rounded-full flex items-center justify-center shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/45 hover:shadow-2xl transition-all duration-300 border border-white/10">
          <MessageCircle className="w-6 h-6 animate-pulse" />
        </MagneticButton>
      </a>
    </div>
  );
}
