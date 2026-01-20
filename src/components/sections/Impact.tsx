'use client';

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { timelineData } from '../../data/timelineData';
import { TimelineItem } from '../ui/TimelineItem';
import { TimelineModal } from '../ui/TimelineModal';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState<typeof timelineData[0] | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="history" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden typography-enhanced">

      {/* 1. TEXTURE: Consistent Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* --- LEFT COLUMN: Story & Founder (Sticky) --- */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <div className="section-badge mb-6">
                  <Sparkles size={12} className="text-teal-600" />
                  Our Journey
                </div>

                <h2 className="section-title mb-6">
                  Built on trust, <br />
                  <span className="text-teal-600 italic">grown by community.</span>
                </h2>

                <p className="section-description">
                  What started as a single trip to Kenya has grown into a movement. We don't just build wells; we build relationships that last generations.
                </p>
              </motion.div>

              {/* 2. FOUNDER CARD: Glassmorphism + Editorial Layout */}
              <motion.div
                className="card-elevated p-8 relative overflow-hidden group backdrop-blur-optimized"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              >
                {/* Decorative background blob */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-teal-50 rounded-full blur-3xl group-hover:bg-teal-100 transition-colors" />

                <Quote className="absolute top-8 right-8 h-12 w-12 text-teal-100 rotate-180" />

                <div className="relative z-10 space-y-6">
                  <p className="font-serif text-xl italic text-gray-900 leading-relaxed">
                    "True charity isn't about pity; it's about partnership. We ask the communities what they need, and we deliver exactly that."
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                      <img
                        src="/WhatsApp Image 2025-11-28 at 5.30.38 PM.jpeg"
                        alt="Uthman Hanif"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Uthman Hanif</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-teal-600">Founder</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The "Living" Timeline --- */}
          <div className="lg:col-span-7 relative pt-8 lg:pt-4 pb-20">

            {/* 3. THE THREAD: Gray background line */}
            <div className="absolute left-[8px] lg:left-[8px] top-0 bottom-0 w-px bg-gray-100" />

            {/* 4. THE BEAM: Gradient progress line */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-[8px] lg:left-[8px] top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-300 to-teal-500 z-10"
            />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} onClick={() => setSelectedYear(item)} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {selectedYear && (
          <TimelineModal year={selectedYear} onClose={() => setSelectedYear(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}