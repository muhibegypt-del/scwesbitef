'use client';

import HeroLogo from '../ui/HeroLogo';
import { Button } from '@/components/ui/button';

// --- CONSTANTS ---
// Optimized Video: 720p width (w-720), 70% quality (q-70), No Audio Channel (ac-none)
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066&tr=w-720,q-70';
// Optimized Poster: 800px width (w-800), 80% quality (q-80)
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg?tr=w-800,q-70';

import { useRef, useEffect } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      // Attempt to programmatically play the video
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Auto-play was prevented:', error);
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full h-dvh flex flex-col font-sans overflow-hidden bg-gray-900">

      {/* BACKGROUND VIDEO (Full Screen) - No overlays */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={POSTER_URL}
        />
        {/* Subtle gradient for visual depth only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* HERO CONTENT OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 gap-6">
          <div className="w-full max-w-sm opacity-0 animate-[fadeIn_2.5s_ease-in-out_forwards]">
            <HeroLogo />
          </div>
          <div className={`transition-all duration-200 ease-out fill-mode-forwards opacity-100 translate-y-0 scale-100`}>
            <Button
              asChild
              className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-olive-500 hover:bg-olive-600 border-none"
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
