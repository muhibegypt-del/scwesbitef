'use client';

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

    </section>
  );
}
