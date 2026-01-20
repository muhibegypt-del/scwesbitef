'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Heading, Button, Stack } from '../system';

// --- CONSTANTS ---
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066';
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg';
const GENERAL_DONATE_LINK = 'https://square.link/u/cI8AoKop';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col font-sans overflow-hidden bg-gray-900">

      {/* 1. BACKGROUND VIDEO (Full Screen) */}
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
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* 2. CENTERED CONTENT OVERLAY */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Heading level={1} fluid className="text-white mb-6 drop-shadow-lg">
              Because Food is a Right, Not a Privilege.
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            <Stack direction="horizontal" gap={4} align="center" justify="center" className="flex-wrap">
              <Button
                variant="primary"
                size="lg"
                href={GENERAL_DONATE_LINK}
                external
                icon={<Heart className="w-5 h-5 fill-white/20 group-hover:fill-white/40 transition-colors" />}
                className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
              >
                Donate Now
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href="/impact"
                className="text-white border border-white/30 backdrop-blur-sm hover:bg-white/10"
              >
                Our Impact
              </Button>
            </Stack>
          </motion.div>

        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}
