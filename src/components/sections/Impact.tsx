'use client';

import { motion, useScroll, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, CheckCircle2, CircleDashed, ArrowRight, Sparkles, X } from 'lucide-react';
import { SectionHeading, BodyText, SubHeading } from '../ui/Typography';

const EASE = [0.22, 1, 0.36, 1];

const timelineData = [
  {
    year: "2021",
    status: "completed",
    title: "The Seed is Planted",
    description: "Witnessing the water crisis in rural Kenya firsthand, we registered the foundation. The first 3 months were spent listening to village elders.",
    photos: [
      'https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop'
    ],
    detailedCopy: "In 2021, our founder Uthman Hanif traveled to rural Kenya and witnessed the devastating impact of the water crisis. Families were walking miles daily to collect unsafe water. This experience sparked the creation of Soul Caravan Foundation, with a mission to provide sustainable, community-led solutions."
  },
  {
    year: "2022",
    status: "completed",
    title: "First Well Commissioned",
    description: "With support from our first 50 donors, we broke ground in Garissa. Seeing clean water flow for the first time changed everything.",
    photos: [
      'https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=800&auto=format&fit=crop'
    ],
    detailedCopy: "Our first water well project in Garissa transformed a village of 150 people. With the support of 50 dedicated donors, we constructed a deep-water tube well that provided clean, safe drinking water for the entire community."
  },
  {
    year: "2023",
    status: "completed",
    title: "Education Initiative",
    description: "Expanded our focus to education. Partnered with 3 local madrasahs to provide uniforms and breakfast clubs, increasing attendance by 40%.",
    photos: [
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop'
    ],
    detailedCopy: "In 2023, we expanded beyond water to address education. We partnered with 3 local schools to provide uniforms, school supplies, and breakfast programs, resulting in a 40% increase in student attendance."
  },
  {
    year: "2024",
    status: "completed",
    title: "Scaling Operations",
    description: "Formalized our '100% Donation Policy' and established a local Nairobi office to oversee projects directly, cutting third-party costs. Completed our most successful year with 12 new wells.",
    photos: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop'
    ],
    detailedCopy: "2024 marked our most successful year. We formalized our 100% Donation Policy, ensuring every dollar goes directly to programs. We established a local office in Nairobi and completed 12 new water wells across Kenya."
  },
  {
    year: "2025",
    status: "current",
    title: "The 'Village 360' Pilot",
    description: "Launching our holistic adoption model. Instead of one-off aid, we are adopting one village to provide water, food, and education simultaneously.",
    photos: [
      'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=800&auto=format&fit=crop'
    ],
    detailedCopy: "In 2025, we're launching our most ambitious project yet: the Village 360 pilot program. Instead of single interventions, we're adopting one village to provide comprehensive support including water, food security, and education."
  },
  {
    year: "2026",
    status: "future",
    title: "Regional Expansion",
    description: "Goal: To expand our operations into neighboring Tanzania, replicating our community-led framework in regions with similar drought profiles.",
    photos: [],
    detailedCopy: "Looking ahead to 2026, we plan to expand our operations into Tanzania, bringing our community-led development model to new regions facing similar challenges with water scarcity and poverty."
  },
  {
    year: "2027",
    status: "future",
    title: "Self-Sustainability",
    description: "Goal: To launch our first 'Waqf' (Endowment) farm, where agricultural profits will fund our admin costs permanently.",
    photos: [],
    detailedCopy: "By 2027, we aim to achieve administrative self-sustainability through our first Waqf farm initiative, where agricultural profits will permanently fund our operational costs."
  }
];

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
    <section ref={containerRef} id="history" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary-lightest border border-brand-primary-light text-brand-primary-dark text-[11px] font-geist font-bold tracking-widest uppercase mb-6">
                  <Sparkles size={12} className="text-brand-primary" />
                  Our Journey
                </div>

                <SectionHeading className="text-4xl sm:text-5xl font-geist font-bold text-brand-primary-darker mb-6 tracking-tight">
                  Built on trust, <br/>
                  <span className="text-olive-600 font-serif italic">grown by community.</span>
                </SectionHeading>
                
                <BodyText className="text-lg text-brand-primary-dark/80 leading-relaxed">
                  What started as a single trip to Kenya has grown into a movement. We don't just build wells; we build relationships that last generations.
                </BodyText>
              </motion.div>

              {/* 2. FOUNDER CARD: Glassmorphism + Editorial Layout */}
              <motion.div
                className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-brand-primary-darker/5 p-8 overflow-hidden group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              >
                {/* Decorative background blob */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary-light/50 rounded-full blur-3xl group-hover:bg-brand-primary-light/80 transition-colors" />

                <Quote className="absolute top-8 right-8 h-12 w-12 text-brand-primary-light rotate-180" />
                
                <div className="relative z-10 space-y-6">
                  <p className="font-serif text-xl italic text-brand-primary-dark leading-relaxed">
                    "True charity isn't about pity; it's about partnership. We ask the communities what they need, and we deliver exactly that."
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-brand-primary-light/50">
                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                      <img
                        src="/WhatsApp Image 2025-11-28 at 5.30.38 PM.jpeg"
                        alt="Uthman Hanif"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-geist font-bold text-brand-primary-darker">Uthman Hanif</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-primary/80">Founder</div>
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
              className="absolute left-[8px] lg:left-[8px] top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-olive-500 to-teal-500 z-10"
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

function TimelineItem({ item, index, onClick }: { item: typeof timelineData[0], index: number, onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });
  const isFuture = item.status === 'future';
  const isCurrent = item.status === 'current';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-20% 0px -20% 0px", once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`relative pl-12 sm:pl-16 group cursor-pointer ${isFuture ? 'opacity-60 grayscale' : 'opacity-100'}`}
    >
      
      {/* 5. THE NODE: Custom markers based on status */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.div 
          animate={{ 
            scale: isInView ? 1.2 : 1,
            backgroundColor: isCurrent ? '#fff' : isInView ? '#fff' : '#fff'
          }}
          className={`
            relative w-4 h-4 rounded-full border-2 flex items-center justify-center bg-white transition-colors duration-500
            ${isCurrent ? 'border-olive-500 shadow-[0_0_0_4px_rgba(132,204,22,0.2)]' :
              isInView ? 'border-brand-primary shadow-sm' : 'border-gray-200'}
          `}
        >
          {item.status === 'completed' && isInView && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
          )}
          {isCurrent && (
             <span className="absolute inline-flex h-full w-full rounded-full bg-olive-500 opacity-20 animate-ping" />
          )}
        </motion.div>
      </div>

      {/* Content Block */}
      <div className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-80'}`}>
        
        {/* Header Row */}
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <span className={`font-geist font-bold text-xl tracking-tight transition-colors ${isInView ? 'text-brand-primary-darker group-hover:text-olive-600' : 'text-gray-400 group-hover:text-brand-primary'}`}>
            {item.year}
          </span>
          
          {isCurrent && (
            <span className="inline-flex items-center gap-1 rounded-md bg-olive-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-olive-700 border border-olive-100">
              Current Phase
            </span>
          )}
        </div>

        <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 ${isInView ? 'text-brand-primary-dark' : 'text-gray-600'}`}>
          {item.title}
        </h3>

        <BodyText className={`text-sm sm:text-base transition-colors duration-300 ${isInView ? 'text-brand-primary-dark/80' : 'text-gray-500'}`}>
          {item.description}
        </BodyText>

        {isCurrent && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4"
          >
             <button className="inline-flex items-center gap-2 text-sm font-bold text-olive-600 hover:text-olive-700 hover:underline decoration-2 underline-offset-4 transition-all">
                Read 2024 Report <ArrowRight size={14} />
             </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function TimelineModal({ year, onClose }: { year: typeof timelineData[0], onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="sticky top-0 bg-white border-b border-brand-primary-darker/10 px-8 py-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-3xl font-geist font-bold text-brand-primary-darker">{year.year}</h2>
            <p className="text-brand-primary font-medium">{year.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-primary-lightest transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-brand-primary-dark" />
          </button>
        </div>

        <div className="p-8">
          {year.photos.length > 0 && (
            <div className={`grid ${year.photos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-8`}>
              {year.photos.map((photo, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={photo}
                    alt={`${year.title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-brand-primary-dark/80 leading-relaxed">
              {year.detailedCopy}
            </p>
          </div>

          {year.status === 'current' && (
            <div className="mt-8 bg-olive-50 rounded-2xl p-6 border border-olive-200">
              <h3 className="font-geist font-bold text-brand-primary-darker mb-3">Current Status</h3>
              <p className="text-brand-primary-dark/80">
                This is our current active phase. Follow our progress and get updates on this initiative through our newsletter.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}