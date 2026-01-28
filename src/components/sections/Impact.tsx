'use client';

import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';
// import { TimelineVertical } from '@/components/sections/TimelineVertical'; // BLUE (Old)
import { TimelineEditorial } from '@/components/sections/TimelineEditorial'; // GREEN (New)

const EASE = [0.22, 1, 0.36, 1] as const;

export function Impact() {
  return (
    <section id="history" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden typography-enhanced">

      {/* 1. TEXTURE: Consistent Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal-700 w-fit mb-6">
              <Sparkles size={12} className="text-teal-600" />
              Our Journey
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 font-serif">
              Built on trust, <br />
              <span className="text-teal-600 italic">grown by community.</span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              What started as a single trip to Kenya has grown into a movement. We don't just build wells; we build relationships that last generations.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE COMPONENT */}
        <div className="mb-32">
          {/* <TimelineVertical /> */}
          <TimelineEditorial />
        </div>


        {/* FOUNDER QUOTE (Moved to bottom as a closing thought) */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 overflow-hidden will-change-transform"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50" />
            <Quote className="absolute top-8 right-8 h-12 w-12 text-teal-100 rotate-180" />

            <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden ring-4 ring-teal-50 shadow-lg mx-auto md:mx-0">
                <img
                  src="https://ik.imagekit.io/dzmabcda0/WhatsApp%20Image%202026-01-20%20at%202.47.57%20PM.jpeg?updatedAt=1768995667343"
                  alt="Uthman Hanif"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover scale-[1.3] origin-top object-top"
                />
              </div>

              <div className="text-center md:text-left space-y-4">
                <p className="font-serif text-2xl italic text-slate-800 leading-relaxed">
                  "Charity is not pity. It is presence. It is empathy. It is sitting with communities, understanding their needs, and responding with care."
                </p>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Uthman Hanif</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-teal-600">Founder</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}