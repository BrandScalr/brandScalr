import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Reels & Shorts Scaling", href: "/services/reels" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Websites", href: "/services/websites" },
    { name: "Paid Ads", href: "/services/ads" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
    { name: "Social Handling", href: "/services/social-media-handling" },
    { name: "SEO Optimisation", href: "/services/seo" },
    { name: "Content Strategy", href: "/services/content-creation" },
  ];

  return (
    <footer className="bg-deep-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Orange Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            {/* Logo wrapped in an elegant white backing card for deep-black footer integration */}
            <div className="bg-white py-2 px-4 rounded-xl inline-block mb-6 shadow-sm">
              <div className="relative h-[32px] w-[64px] md:h-[38px] md:w-[76px]">
                <Image
                  src="/images/logo.png"
                  alt="BRANDSCALR Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-soft-gray text-base max-w-sm leading-relaxed mb-8 font-sans">
              We build custom content scaling systems, high-converting creative engines, and strategic paid growth pipelines. Not an agency, your dedicated growth operators.
            </p>
            
            <a
              href="https://wa.me/917389526779"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white/5 hover:bg-brand-orange hover:text-white border border-white/10 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-brand-orange" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>

          {/* Service Sitemap */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-6">
              Core Capabilities
            </h4>
            <ul className="space-y-4">
              {services.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-soft-gray hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-6">
              Growth Solutions
            </h4>
            <ul className="space-y-4">
              {services.slice(4).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-soft-gray hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-soft-gray">
          <div>
            © {new Date().getFullYear()} BRANDSCALR. All rights reserved. Built for modern growth.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-4 border-r border-white/10 pr-6 mr-2">
              <a
                href="https://www.instagram.com/brandscalrofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray hover:text-brand-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/917389526779"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray hover:text-brand-orange transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
