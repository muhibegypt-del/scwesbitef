'use client';

import HeroLogo from '../ui/HeroLogo';

// --- CONSTANTS ---
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066';
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg';

export function Hero() {
  return (
    <section className="relative w-full h-dvh flex flex-col font-sans overflow-hidden bg-gray-900">

      {/* BACKGROUND VIDEO (Full Screen) - No overlays */}
      <div className="absolute inset-0 w-full h-full">
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
        {/* Subtle gradient for visual depth only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* HERO CONTENT OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="w-full max-w-2xl mb-6 opacity-0 animate-[fadeIn_2.5s_ease-in-out_forwards]">
            <HeroLogo />
          </div>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl drop-shadow-md opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            Empowering communities through education, water, and care.
          </p>
          <button className="mt-8 px-12 py-4 text-lg md:text-xl font-semibold text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]" style={{ backgroundColor: '#98a45f' }}>
            Donate Now
          </button>
        </div>
      </div>

    </section>
  );
}
