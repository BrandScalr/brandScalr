"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Video,
  Palette,
  Globe,
  TrendingUp,
  Users,
  Search,
  Share2,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    slug: "reels",
    title: "Reels & Shorts Scaling",
    description: "Engineering strategic visual pipelines, psychological hook architectures, and organic viewer conversion systems.",
    icon: Video,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description: "Premium visual assets, high-converting carousel ads, and modern typography that commands feeding attention.",
    icon: Palette,
  },
  {
    slug: "websites",
    title: "Websites",
    description: "High-speed conversion-focused Next.js websites built with premium motion and luxury visual systems.",
    icon: Globe,
  },
  {
    slug: "ads",
    title: "Paid Ads",
    description: "Multi-channel paid acquisition pipelines optimized for ROAS, low CPA, and automated booking systems.",
    icon: TrendingUp,
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    description: "Engineered creator partnerships that establish instant product credibility and scale organic acquisition.",
    icon: Users,
  },
  {
    slug: "social-media-handling",
    title: "Social Media Handling",
    description: "Complete hands-off content distribution, platform SEO setups, and daily analytical iteration.",
    icon: Share2,
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description: "Commanding organic search dominance for high-intent queries that capture buyer traffic on autopilot.",
    icon: Search,
  },
  {
    slug: "content-creation",
    title: "Content Strategy",
    description: "Full-stack conversion roadmap, hook ideation, script frameworks, and retention analytics auditing.",
    icon: FileText,
  },
];

export default function ServicesGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="services" className="bg-light-gray/40 py-24 md:py-32 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-4">
              Core Capabilities
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-deep-black leading-tight">
              We Build Growth Engines. <br />
              Not Just Deliverables.
            </h2>
          </div>
          <p className="text-soft-gray text-base md:text-lg max-w-sm leading-relaxed font-sans">
            Every service is engineered as a core cog inside a high-performing brand conversion machine.
          </p>
        </div>

        {/* Modular Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block bg-white rounded-3xl p-8 border border-light-gray hover:border-brand-orange/30 shadow-sm hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between"
                >
                  {/* Subtle Orange Glow hover background */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl group-hover:scale-[3] transition-all duration-700 pointer-events-none" />

                  {/* Header */}
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 bg-light-gray/50 rounded-2xl flex items-center justify-center mb-8 text-deep-black group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-heading font-extrabold text-deep-black mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-soft-gray text-xs leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Call-to-action bar */}
                  <div className="pt-8 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold uppercase tracking-wider text-deep-black/60 group-hover:text-brand-orange transition-colors">
                      Explore Framework
                    </span>
                    <div className="w-8 h-8 rounded-full bg-light-gray flex items-center justify-center text-deep-black group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hover active orange bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
