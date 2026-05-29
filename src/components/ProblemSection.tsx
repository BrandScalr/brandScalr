"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, EyeOff, ZapOff, RefreshCcw, HelpCircle } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const painPoints = [
  {
    icon: EyeOff,
    title: "Inconsistent Posting",
    description: "Your team creates content only when inspiration strikes. Without structural discipline, algorithms deprioritise your channels and audiences forget your presence.",
  },
  {
    icon: ZapOff,
    title: "Weak Branding",
    description: "Your assets blend into the infinite feed scroll. If your brand doesn't command immediate visual authority, you cannot command premium prices.",
  },
  {
    icon: AlertCircle,
    title: "Poor Hooks & Retention",
    description: "Losing 80% of viewers in the first 3 seconds. Without psychological narrative design, high-quality production is simply wasted budget.",
  },
  {
    icon: RefreshCcw,
    title: "No Growth System",
    description: "Hoping a piece goes viral rather than engineering conversion models that transform casual viewers into high-value consultation bookings.",
  },
  {
    icon: HelpCircle,
    title: "Random Content Strategy",
    description: "Posting content based on blind trends or guessing instead of using historical audience data, customer pain patterns, and analytical funnels.",
  },
];

export default function ProblemSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section className="bg-deep-black text-white py-24 md:py-32 relative overflow-hidden select-none">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-brand-orange/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Grid */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-4">
            Pain Identification
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white leading-tight">
            Low Views. <br />
            Weak Retention. <br />
            <span className="text-brand-orange/80">Ads Not Converting?</span>
          </h2>
        </div>

        {/* Modular Spotlight Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <SpotlightCard className="h-full p-8 flex flex-col justify-between">
                  <div>
                    {/* Icon container with clean styling */}
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-brand-orange">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-heading font-extrabold text-white mb-4">
                      {point.title}
                    </h3>
                    
                    <p className="text-soft-gray text-sm leading-relaxed font-sans">
                      {point.description}
                    </p>
                  </div>

                  {/* Aesthetic index number */}
                  <span className="text-white/10 font-heading font-extrabold text-3xl block mt-8 text-right select-none">
                    0{index + 1}
                  </span>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
