"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles, Target } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white select-none">
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/images/hero-background.png"
          alt="Abstract Growth Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Typography Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          {/* Subtle Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 w-fit"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
              Performance Growth Operator
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-deep-black tracking-tight leading-[0.95]"
          >
            Your Content Isn’t The Problem. <br />
            <span className="text-brand-orange">Your Strategy Is.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-soft-gray text-lg md:text-xl max-w-xl leading-relaxed font-sans"
          >
            We build custom content scaling systems, high-converting creative engines, and automated paid pipelines. We are your performance-driven growth partner and strategic operator — not a video editing agency.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 items-center"
          >
            <Link href="/#contact">
              <MagneticButton className="bg-brand-orange text-white hover:bg-deep-black text-sm font-semibold uppercase tracking-wider py-4 px-8 rounded-full shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/35 hover:shadow-2xl transition-all duration-300">
                Book Free Consultation <ArrowRight className="w-4 h-4 ml-3" />
              </MagneticButton>
            </Link>

            <a
              href="https://wa.me/917389526779"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton className="bg-transparent border-2 border-deep-black hover:border-brand-orange text-deep-black hover:text-white hover:bg-brand-orange text-sm font-semibold uppercase tracking-wider py-[14px] px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20">
                Talk on WhatsApp
              </MagneticButton>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Dashboard Mockups Side */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Main Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] max-w-[500px] bg-deep-black rounded-3xl overflow-hidden shadow-2xl p-[1px] glow-card-border"
          >
            <div className="w-full h-full bg-deep-black/95 rounded-[23px] overflow-hidden relative">
              <Image
                src="/images/analytics-ui.png"
                alt="Growth Operations Dashboard"
                fill
                priority
                className="object-cover opacity-80"
              />
              
              {/* Overlay Glass Panel Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block mb-1">
                    Monthly Performance
                  </span>
                  <span className="text-2xl font-heading font-extrabold text-white">
                    +342.8%
                  </span>
                </div>
                <div className="bg-brand-orange/10 border border-brand-orange/30 p-2 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-brand-orange" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Asset 1 */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -left-6 glass-panel-light px-5 py-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-black/5"
          >
            <div className="bg-brand-orange/10 p-2.5 rounded-xl">
              <Target className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="text-deep-black/40 text-[10px] uppercase font-bold tracking-widest block">
                Lead Conversion
              </span>
              <span className="text-base font-heading font-extrabold text-deep-black">
                12.4% Average
              </span>
            </div>
          </motion.div>

          {/* Floating UI Asset 2 */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-8 -right-4 bg-deep-black text-white px-6 py-4 rounded-2xl shadow-2xl flex flex-col space-y-1 border border-white/10"
          >
            <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest">
              Revenue Generated
            </span>
            <span className="text-xl font-heading font-extrabold text-brand-orange">
              $1.4M+
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
