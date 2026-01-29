'use client';

import {
  Mail, MapPin, Instagram,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-teal-900 text-white overflow-hidden border-t border-teal-800">

      {/* 1. Subtle Background Texture (Noise/Grain feel via SVG) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="space-y-8">
            <div className="w-[140px]">
              <BrandLogo
                className="h-14 w-auto text-white opacity-90"
                aria-label="Soul Caravan Foundation"
              />
            </div>
            <p className="text-teal-100/70 text-base leading-relaxed max-w-sm">
              We are a grassroots charity working directly with communities to build sustainable futures through education, water, and essential care.
            </p>
          </div>

          {/* Contact Column */}
          <div className="md:text-right">
            <h4 className="text-white font-medium mb-6">Contact Us</h4>
            <div className="space-y-4 md:flex md:flex-col md:items-end">
              <a href="mailto:info.soulcaravan@gmail.com" className="flex items-center gap-4 text-teal-200/60 hover:text-white transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm">
                <Mail className="h-5 w-5 text-olive-400/80 group-hover:text-olive-400 transition-colors" />
                <span className="text-sm">info.soulcaravan@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-teal-200/60">
                <MapPin className="h-5 w-5 text-olive-400/80" />
                <span className="text-sm">United Kingdom</span>
              </div>
            </div>

            {/* Instagram Only */}
            <div className="flex gap-4 mt-8 md:justify-end">
              <a
                href="https://www.instagram.com/soulcaravanfoundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="p-2 bg-teal-800/40 rounded-lg hover:bg-teal-700 text-teal-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Simplified */}
        <div className="border-t border-teal-800/50 mt-16 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-teal-400/40">
            <span>&copy; {currentYear} Soul Caravan Foundation</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="group flex items-center gap-2 text-xs text-teal-300/60 hover:text-white hover:bg-transparent transition-colors uppercase tracking-wider font-medium p-0"
          >
            Back to Top
            <span className="p-1 rounded-full bg-teal-800 group-hover:bg-olive-500 transition-colors ml-2">
              <ArrowUp className="h-3 w-3" />
            </span>
          </Button>
        </div>
      </div>
    </footer>
  );
}