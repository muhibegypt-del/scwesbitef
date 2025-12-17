'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Droplets, Utensils, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SectionHeading, SubHeading, BodyText } from '../ui/Typography';

const EASE = [0.22, 1, 0.36, 1];

// Updated with reliable Unsplash IDs for consistent "Humanitarian" vibe
const programs = [
  {
    title: 'Build a Water Well',
    description: 'Construct a deep-water tube well to provide clean, safe drinking water for an entire village (up to 200 people) for 10+ years.',
    image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=800&auto=format&fit=crop', // Water well/pump
    category: 'Sadaqah Jariyah',
    isZakatEligible: true,
    href: '/water-well'
  },
  {
    title: 'Orphan & Widow Care',
    description: 'Provide comprehensive support including school fees, uniforms, food, and psychosocial support for families who have lost their primary provider.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop', // Child writing/Education
    category: 'Monthly Support',
    isZakatEligible: true,
    href: '/orphan-care'
  },
  {
    title: 'Hot Meals & Food Packs',
    description: 'Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict.',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=800&auto=format&fit=crop', // Food/Community
    category: 'Emergency Relief',
    isZakatEligible: true,
    href: '/food-relief'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: EASE }
  }
};

export function Programs() {
  return (
    <section id="appeals" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* 1. TEXTURE: Maintain the system consistency with the Values page */}
      <div 
        className="absolute inset-0 opacity-[0.3]" 
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary-light/80 text-brand-primary-dark text-[11px] font-geist font-bold tracking-widest uppercase mb-6 border border-brand-primary-light/50">
            Active Appeals
          </div>
          <SectionHeading className="text-4xl sm:text-5xl lg:text-6xl font-geist font-bold text-brand-primary-darker tracking-tighter mb-6">
            Direct aid where it is{' '}
            <span className="text-olive-600 font-serif italic">needed most.</span>
          </SectionHeading>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {programs.map((program) => (
            <motion.article
              key={program.title}
              variants={cardVariants}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-primary-darker/10 transition-all duration-500 ease-out hover:-translate-y-2"
            >
              
              {/* Image Container - Flush Full Width */}
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                <div className="absolute inset-0 bg-brand-primary-darker/0 group-hover:bg-brand-primary-darker/10 z-10 transition-colors duration-500" />
                
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Floating Tags (Glassmorphism) */}
                <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
                  
                  {/* Category Pill */}
                  <div className="backdrop-blur-md bg-white/90 border border-white/50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-geist font-bold tracking-wide shadow-lg text-brand-primary-dark">
                    {program.title.includes('Water') ? <Droplets size={12} className="text-brand-primary" /> :
                     program.title.includes('Food') ? <Utensils size={12} className="text-brand-accent" /> :
                     <HeartHandshake size={12} className="text-brand-secondary" />}
                    {program.category}
                  </div>

                  {/* Zakat Gold Badge (Premium Trust Signal) */}
                  {program.isZakatEligible && (
                    <div className="backdrop-blur-md bg-amber-50/95 border border-amber-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-geist font-bold tracking-wide shadow-lg text-amber-800">
                      <CheckCircle2 size={12} className="text-amber-600 fill-amber-600/20" />
                      Zakat
                    </div>
                  )}
                </div>
              </div>

              {/* Content Content */}
              <div className="p-8 flex flex-col flex-grow">
                
                <div className="mb-4">
                  <SubHeading className="text-2xl font-geist font-bold text-brand-primary-darker mb-3 leading-tight group-hover:text-brand-primary-dark transition-colors">
                    {program.title}
                  </SubHeading>
                  
                  {/* Line Clamp for uniform height */}
                  <BodyText className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {program.description}
                  </BodyText>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  
                  {/* Text Link */}
                  <span className="text-sm font-geist font-bold text-brand-primary-dark tracking-wide">
                    View Project
                  </span>

                  {/* Animated Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-brand-primary-lightest flex items-center justify-center text-brand-primary-dark group-hover:bg-brand-primary-darker group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight size={18} className="-ml-0.5" />
                  </div>
                </div>

                {/* Full Card Link Overlay */}
                <a href={program.href} className="absolute inset-0 z-30" aria-label={`View ${program.title}`}></a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA (Optional - Adds closure to the section) */}
        <div className="mt-16 text-center">
          <a href="#appeals" className="inline-flex items-center gap-2 text-olive-600 font-bold hover:text-olive-700 transition-colors border-b-2 border-olive-200 hover:border-olive-600 pb-0.5">
            View all active appeals <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}