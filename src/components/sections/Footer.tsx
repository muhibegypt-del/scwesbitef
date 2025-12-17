'use client';

import { 
  Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, 
  ArrowRight, Send, ArrowUp 
} from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Who We Are', href: '#history' },
    { label: 'Our Work', href: '#appeals' },
    { label: 'Get Involved', href: '#involved' },
    { label: 'Water Wells', href: '/water-well' },
    { label: 'Orphan Care', href: '/orphan-care' },
    { label: 'Food Relief', href: '/food-relief' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Annual Reports', href: '#' },
  ];

  return (
    <footer className="relative bg-teal-900 text-white overflow-hidden border-t border-teal-800">
      
      {/* 1. Subtle Background Texture (Noise/Grain feel via SVG) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
         </svg>
      </div>

      {/* 2. Top Section: Newsletter & Call to Action */}
      <div className="relative z-10 border-b border-teal-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Join our caravan of hope</h3>
              <p className="text-teal-200/80 text-base">
                Subscribe to receive updates on our latest projects in Kenya and see the direct impact of your support.
              </p>
            </div>
            
            <form className="relative max-w-md lg:ml-auto w-full">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full h-14 pl-6 pr-16 bg-teal-800/50 border border-teal-700 rounded-full text-white placeholder-teal-400/50 focus:outline-none focus:ring-2 focus:ring-olive-400/50 focus:border-olive-400 transition-all"
                />
                <button 
                  type="button"
                  className="absolute right-2 top-2 h-10 w-10 bg-olive-500 hover:bg-olive-400 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4 -ml-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <img
              src="/logo.svg"
              alt="Soul Caravan Foundation"
              className="h-14 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-teal-100/70 text-base leading-relaxed max-w-sm">
              We are a grassroots charity working directly with communities to build sustainable futures through education, water, and essential care.
            </p>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-teal-800/40 border border-teal-700/50 rounded-xl">
              <div className="p-2 bg-olive-500/20 rounded-full">
                <Heart className="h-5 w-5 text-olive-400 fill-olive-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">100% Donation Policy</span>
                <span className="text-xs text-teal-300/60">Every penny reaches the needy</span>
              </div>
            </div>
          </div>

          {/* Links Column (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-medium mb-6">Discover</h4>
            <ul className="space-y-4">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-teal-200/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-medium mb-6">Impact</h4>
            <ul className="space-y-4">
              {quickLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-teal-200/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:info@soulcaravan.org" className="flex items-start gap-4 text-teal-200/60 hover:text-white transition-colors group">
                <Mail className="h-5 w-5 mt-0.5 text-olive-400/80 group-hover:text-olive-400 transition-colors" />
                <span className="text-sm">info@soulcaravan.org</span>
              </a>
              <a href="tel:+254700000000" className="flex items-start gap-4 text-teal-200/60 hover:text-white transition-colors group">
                <Phone className="h-5 w-5 mt-0.5 text-olive-400/80 group-hover:text-olive-400 transition-colors" />
                <span className="text-sm">+254 700 000 000</span>
              </a>
              <div className="flex items-start gap-4 text-teal-200/60">
                <MapPin className="h-5 w-5 mt-0.5 text-olive-400/80" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-teal-800/40 rounded-lg hover:bg-teal-700 text-teal-300 hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Bottom Bar */}
        <div className="border-t border-teal-800/50 mt-16 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-xs text-teal-400/40">
            <span>&copy; {currentYear} Soul Caravan Foundation</span>
            <span>Charity No: 12345678</span>
            {legalLinks.map(link => (
              <a key={link.label} href={link.href} className="hover:text-teal-200 transition-colors">{link.label}</a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-teal-300/60 hover:text-white transition-colors uppercase tracking-wider font-medium"
          >
            Back to Top
            <span className="p-1.5 rounded-full bg-teal-800 group-hover:bg-olive-500 transition-colors">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}