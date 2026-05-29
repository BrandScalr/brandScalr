import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Section 1: Cinematic Stagger Hero */}
        <Hero />

        {/* Section 2: Pain Identification Dark Grid */}
        <ProblemSection />

        {/* Section 3: Value-Driven Services Modular Grid */}
        <ServicesGrid />

        {/* Section 4: Scale Timeline drawing path */}
        <ProcessTimeline />

        {/* Section 5: High Contrast Conversion CTA */}
        <CTASection />
      </main>

      {/* Premium Minimal Luxury Footer */}
      <Footer />
    </>
  );
}
