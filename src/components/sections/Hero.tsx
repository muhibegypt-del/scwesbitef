'use client';

import HeroLogo from '../ui/HeroLogo';
import { Button } from '@/components/ui/button';

// --- CONSTANTS ---
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066';
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg';

import { useState, useRef, useEffect } from 'react';

export function Hero() {
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <section className="relative w-full h-dvh flex flex-col font-sans overflow-hidden bg-gray-900">

      {/* BACKGROUND VIDEO (Full Screen) - No overlays */}
      <div className="absolute inset-0 w-full h-full">
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
        {/* Subtle gradient for visual depth only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* HERO CONTENT OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 gap-8">
          <div className="w-full max-w-2xl opacity-0 animate-[fadeIn_2.5s_ease-in-out_forwards]">
            <HeroLogo />
          </div>
          <div className={`transition-all duration-200 ease-out fill-mode-forwards ${showButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-olive-500 hover:bg-olive-600 border-none"
            >
              <a
                href="https://square.link/u/cI8AoKop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </Button>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>

    </section >
  );
}
