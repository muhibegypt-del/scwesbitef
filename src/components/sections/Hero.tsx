'use client';

import { motion } from 'framer-motion';
import { Heart, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

// --- CONSTANTS ---
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066';
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg';
const GENERAL_DONATE_LINK = 'https://square.link/u/cI8AoKop';

// Animation easing
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full bg-gray-900 overflow-hidden">

      {/* --- VIDEO SECTION (Focal Point) --- */}
      <div className="relative w-full aspect-video max-h-[70vh] lg:max-h-[75vh]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={POSTER_URL}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Subtle gradient overlay at bottom for transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />

        {/* Play/Pause control */}
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <Play
            className={`w-5 h-5 transition-transform ${isPlaying ? 'opacity-50' : 'opacity-100'}`}
            fill={isPlaying ? 'transparent' : 'currentColor'}
          />
        </button>
      </div>

      {/* --- CONTENT SECTION (Below Video) --- */}
      <div className="relative z-10 bg-gray-900">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_rgba(20,184,166,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 py-12 lg:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Eyebrow */}
            <p className="text-sm font-geist font-bold uppercase tracking-widest text-teal-400 mb-4">
              Soul Caravan Foundation
            </p>

            {/* Headline - Responsive sizing with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-white mb-6 leading-tight text-balance">
              Building Futures, One Community at a Time.
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your donation provides clean water, education, food relief, and support for orphans and widows in Kenya.
            </p>

            {/* CTAs - Stack on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GENERAL_DONATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold text-base lg:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                <Heart className="w-5 h-5 fill-white" aria-hidden="true" />
                Donate Now
              </a>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base lg:text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Watch Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* --- STATS BAR --- */}
        <motion.div
          className="border-t border-gray-800"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Stats */}
              <div className="flex items-center gap-6 sm:gap-10">
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-geist font-bold text-white tabular-nums">15,000+</span>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Lives Impacted</p>
                </div>
                <div className="w-px h-10 sm:h-12 bg-gray-600 shadow-[0_0_8px_rgba(20,184,166,0.2)]" />
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-geist font-bold text-white tabular-nums">6</span>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Active Programs</p>
                </div>
                <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-600 shadow-[0_0_8px_rgba(20,184,166,0.2)]" />
                <div className="hidden sm:block text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-geist font-bold text-white tabular-nums">100%</span>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Transparency</p>
                </div>
              </div>

              {/* Secondary CTA */}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded-sm"
              >
                See Our Impact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}