"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Play, ZoomIn } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Diagnose",
    tagline: "Pinpoint performance leaks",
    description: "We audit your historical content performance, current watch retention curves, traffic drop-offs, and ad copy statistics. We identify the exact bottlenecks suppressing conversions.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    tagline: "Build the bespoke playbook",
    description: "We define precise audience cohorts, wireframe narrative hooks, select optimal channels, design interactive high-converting funnels, and draft your custom growth roadmap.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Execute",
    tagline: "High-velocity systems rollout",
    description: "Our team takes over production. We script hooks, design visual elements, set up tracking pipelines, launch high-ROAS ads, and execute hands-off, optimized content distribution.",
    icon: Play,
  },
  {
    step: "04",
    title: "Scale",
    tagline: "Continuous compound growth",
    description: "We analyze real-time performance indicators, double down on winning hooks, re-allocate budgets to top-performing funnels, and launch secondary expansion pipelines.",
    icon: ZoomIn,
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-deep-black text-white py-24 md:py-32 relative overflow-hidden select-none">
      {/* Background glowing gradients */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-brand-orange/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-4">
            Our Methodology
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white leading-tight">
            How We Scale <br />
            <span className="text-brand-orange">Brands To Authority.</span>
          </h2>
        </div>

        {/* Timeline Path Grid */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing step marker dot */}
                  <div className="absolute left-[30px] md:left-1/2 top-1.5 w-10 h-10 rounded-full bg-deep-black border-2 border-brand-orange flex items-center justify-center -translate-x-1/2 z-20">
                    <span className="text-brand-orange font-heading font-extrabold text-xs">
                      {step.step}
                    </span>
                  </div>

                  {/* Left spacer / right active box */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="glass-panel p-8 rounded-3xl border border-white/5 relative group hover:border-brand-orange/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-orange">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-orange block">
                            {step.tagline}
                          </span>
                          <h3 className="text-2xl font-heading font-extrabold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-soft-gray text-sm leading-relaxed font-sans">
                        {step.description}
                      </p>

                      {/* Hover subtle index glow */}
                      <span className="absolute top-6 right-6 text-white/5 font-heading font-extrabold text-5xl select-none pointer-events-none transition-colors group-hover:text-brand-orange/10">
                        {step.step}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty spacer for grid alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
