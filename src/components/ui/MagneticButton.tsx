"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  range?: number; // Distance in pixels at which magnetism activates
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MagneticButton({
  children,
  className = "",
  range = 60,
  type = "button",
  disabled = false,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Pull toward cursor
      setPosition({ x: distanceX * 0.35, y: distanceY * 0.35 });
    } else {
      // Return to center
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  React.useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y, x, y]);

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}
