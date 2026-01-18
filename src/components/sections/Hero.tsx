'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

// --- CONSTANTS ---
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066';
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg';
const GENERAL_DONATE_LINK = 'https://square.link/u/cI8AoKop';

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen bg-gray-900 overflow-hidden flex flex-col">

      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={POSTER_URL}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* --- CENTERED CONTENT OVERLAY --- */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <p className="eyebrow text-white/80 mb-4">
              Soul Caravan Foundation
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
              Building Futures,<br />
              One Community at a Time.
            </h1>

            {/* Tagline */}
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your donation provides clean water, education, food relief, and support for orphans and widows in Kenya.
            </p>

            {/* Primary CTA */}
            <a
              href={GENERAL_DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-elevated transition-all hover:shadow-lg"
            >
              <Heart className="w-5 h-5 fill-white" />
              Donate Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM STATS BAR --- */}
      <motion.div
        className="relative z-10 bg-teal-800 py-6 lg:py-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center lg:text-left">
                <span className="text-3xl lg:text-4xl font-geist font-bold text-white">15,000+</span>
                <p className="text-sm text-teal-200 font-medium">Lives Impacted</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-teal-600/50" />
              <div className="text-center lg:text-left">
                <span className="text-3xl lg:text-4xl font-geist font-bold text-white">6</span>
                <p className="text-sm text-teal-200 font-medium">Active Programs</p>
              </div>
            </div>

            {/* Secondary CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-teal-200 transition-colors group"
            >
              See Our Impact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}