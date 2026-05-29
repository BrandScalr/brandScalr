"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

// Centralized configuration for the Formspree integration
const FORMSPREE_FORM_ID = "mjgzzevd";

export default function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Explicit field validation
    if (!name.trim() || !email.trim()) {
      setSubmitError("Name and Email are required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          businessName: businessName.trim(),
          phone: phone.trim(),
          message: message.trim()
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Clear all form inputs on success
        setName("");
        setEmail("");
        setBusinessName("");
        setPhone("");
        setMessage("");
      } else {
        const data = await response.json();
        setSubmitError(data.error || "Submission failed. Please verify your connection and try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32 relative overflow-hidden select-none">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-deep-black" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-deep-black" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-deep-black" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-deep-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 w-fit">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Immediate Conversion Action
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-deep-black leading-[0.95] tracking-tight">
              Stop Guessing Your <br />
              <span className="text-brand-orange">Growth Strategy.</span>
            </h2>

            <p className="text-soft-gray text-base md:text-lg max-w-xl leading-relaxed font-sans">
              Stop bleeding ad spend, wasting creative resources, and losing audience attention. Book a free 30-minute growth call where we audit your assets and map your scaling path. No obligations.
            </p>

            {/* Value Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Assets & Hook Retention Audit",
                "Full funnel mapping & strategies",
                "Competitor conversion analysis",
                "Dedicated WhatsApp channel access",
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-deep-black/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social Icons / Connect block */}
            <div className="pt-6 border-t border-light-gray/80 flex flex-wrap items-center gap-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-gray">
                Connect Directly:
              </span>
              <a
                href="https://www.instagram.com/brandscalrofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-semibold text-soft-gray hover:text-brand-orange transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/917389526779"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-semibold text-soft-gray hover:text-brand-orange transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[32px] text-deep-black shadow-2xl relative overflow-hidden border border-light-gray/60 transition-all duration-300">
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-[50px] pointer-events-none" />

            <h3 className="font-heading font-extrabold text-2xl mb-6 tracking-tight text-deep-black">
              Lock In Your Audit
            </h3>

            {submitted ? (
              <div className="space-y-6 py-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-brand-orange/10 border border-brand-orange/30 rounded-2xl flex items-center justify-center mx-auto text-brand-orange mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-extrabold text-deep-black">
                  Audit Slot Requested!
                </h4>
                <p className="text-soft-gray text-sm leading-relaxed max-w-xs mx-auto">
                  Your consultation request has been received. BRANDSCALR will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-brand-orange hover:text-deep-black transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div>
                  <label htmlFor="client-name" className="text-deep-black/60 text-[10px] uppercase font-bold tracking-widest block mb-2">
                    Your Name <span className="text-brand-orange font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Hormozi"
                    className="w-full bg-light-gray/30 border border-light-gray/80 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/15 focus:outline-none rounded-xl px-5 py-3.5 text-sm text-deep-black placeholder-deep-black/35 hover:border-soft-gray/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email-address" className="text-deep-black/60 text-[10px] uppercase font-bold tracking-widest block mb-2">
                    Work Email <span className="text-brand-orange font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbrand.com"
                    className="w-full bg-light-gray/30 border border-light-gray/80 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/15 focus:outline-none rounded-xl px-5 py-3.5 text-sm text-deep-black placeholder-deep-black/35 hover:border-soft-gray/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="business-name" className="text-deep-black/60 text-[10px] uppercase font-bold tracking-widest block mb-2">
                    Business Name <span className="text-soft-gray/60 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Acquisition.com"
                    className="w-full bg-light-gray/30 border border-light-gray/80 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/15 focus:outline-none rounded-xl px-5 py-3.5 text-sm text-deep-black placeholder-deep-black/35 hover:border-soft-gray/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="text-deep-black/60 text-[10px] uppercase font-bold tracking-widest block mb-2">
                    Phone Number <span className="text-soft-gray/60 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99999 99999"
                    className="w-full bg-light-gray/30 border border-light-gray/80 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/15 focus:outline-none rounded-xl px-5 py-3.5 text-sm text-deep-black placeholder-deep-black/35 hover:border-soft-gray/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="client-message" className="text-deep-black/60 text-[10px] uppercase font-bold tracking-widest block mb-2">
                    Message <span className="text-soft-gray/60 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="client-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your brand scaling goals..."
                    className="w-full bg-light-gray/30 border border-light-gray/80 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/15 focus:outline-none rounded-xl px-5 py-3.5 text-sm text-deep-black placeholder-deep-black/35 hover:border-soft-gray/40 transition-all duration-200 resize-none font-sans"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs px-4 py-3 rounded-xl font-semibold">
                    {submitError}
                  </div>
                )}

                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-deep-black text-white text-xs font-semibold uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/35 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                </div>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-light-gray"></div>
                  <span className="flex-shrink mx-4 text-soft-gray/60 text-[10px] uppercase font-bold tracking-widest">
                    OR
                  </span>
                  <div className="flex-grow border-t border-light-gray"></div>
                </div>

                <a
                  href="https://wa.me/917389526779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <MagneticButton
                    type="button"
                    className="w-full flex items-center justify-center space-x-3 bg-light-gray/40 hover:bg-brand-orange hover:text-white border border-light-gray rounded-xl py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 animate-fade-in"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-orange group-hover:text-white" />
                    <span>Talk on WhatsApp</span>
                  </MagneticButton>
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
