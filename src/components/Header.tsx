"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "How We Scale", href: "/#process" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-b border-light-gray/20 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo - Uses uploaded BRANDSCALR logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[36px] w-[72px] md:h-[44px] md:w-[88px] transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt="BRANDSCALR"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-soft-gray hover:text-deep-black transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/917389526779"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="bg-transparent border border-soft-gray/30 hover:border-brand-orange text-soft-gray hover:text-brand-orange hover:shadow-brand-orange/20 hover:shadow-md text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300">
              Talk on WhatsApp
            </MagneticButton>
          </a>
          
          <Link href="/#contact">
            <MagneticButton className="bg-brand-orange text-white hover:bg-deep-black text-xs font-semibold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/35 transition-all duration-300">
              Book Free Consultation
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-deep-black hover:text-brand-orange transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] z-40 bg-white border-t border-light-gray flex flex-col justify-between p-8 animate-fade-in">
          <nav className="flex flex-col space-y-8 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-extrabold text-deep-black hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col space-y-4 mb-16">
            <a
              href="https://wa.me/917389526779"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-light-gray rounded-full py-4 text-deep-black font-semibold hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-brand-orange" />
              <span>Talk on WhatsApp</span>
            </a>
            
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-orange text-white text-center rounded-full py-4 font-semibold hover:bg-deep-black transition-all"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
