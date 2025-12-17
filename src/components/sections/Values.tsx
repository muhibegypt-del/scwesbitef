'use client';

import { motion, type Variants } from 'framer-motion';
import { Heart, Globe, Users, ArrowUpRight } from 'lucide-react';
import { SectionHeading, BodyText, SubHeading } from '../ui/Typography';

// --- TYPES (Inlined for portability) ---
interface ValueItem {
  icon: typeof Heart;
  title: string;
  description: string;
}

const SPRING_CONFIG = { type: "spring", stiffness: 100, damping: 20 };

const values: ValueItem[] = [
  {
    icon: Heart,
    title: 'Community-Centered',
    description: 'We work directly with local communities in Kenya, ensuring our programs are led by and designed for the people we serve.',
  },
  {
    icon: Users,
    title: 'Grassroots Approach',
    description: 'As a grassroots organization, we focus on sustainable, locally-driven solutions that create lasting change from within.',
  },
  {
    icon: Globe,
    title: 'Transparent Impact',
    description: 'Every donation goes directly to our programs in Kenya, with full transparency about how funds are used to support communities.',
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 24 }
  }
};

export function Values() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      
      {/* 1. TEXTURE: Re-using the subtle dot pattern creates a 'System' feel across the site */}
      <div 
        className="absolute inset-0 opacity-[0.4]" 
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Soft gradient wash to break the stark white */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-gradient-to-b from-transparent via-brand-primary-lightest/30 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header: Centered & Strict */}
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING_CONFIG}
        >
          {/* Decorative Tag */}
          <div className="flex justify-center mb-6">
             <span className="px-3 py-1 rounded-full border border-brand-primary-darker/10 text-[10px] uppercase tracking-widest font-bold text-brand-primary-dark bg-white shadow-sm">
               Our Ethos
             </span>
          </div>

          <SectionHeading className="mb-6 font-geist text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-primary-darker tracking-tight">
            Driven by <span className="italic font-serif text-olive-600">purpose.</span>
          </SectionHeading>

          <BodyText className="text-lg text-brand-primary-dark/70 max-w-xl mx-auto">
            These principles guide everything we do, from program design to community partnerships.
          </BodyText>
        </motion.div>

        {/* Cards Grid: "Architectural" Layout */}
        <motion.div
          className="grid gap-6 lg:gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              variants={cardVariants}
              // 2. CRISPNESS: White background + Thin Border instead of filled color
              className="group relative flex flex-col justify-between h-full bg-white rounded-3xl p-8 lg:p-10 border border-brand-primary-darker/5 hover:border-brand-primary-darker/20 shadow-sm hover:shadow-xl hover:shadow-brand-primary-darker/5 transition-all duration-500"
            >
              
              {/* 3. INDEXING: Large number adds 'Editorial' structure without new colors */}
              <div className="absolute top-8 right-8 text-6xl font-geist font-bold text-brand-primary-lightest/80 group-hover:text-brand-primary-lightest transition-colors select-none z-0">
                0{index + 1}
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10">
                {/* Icon: Floating, not boxed */}
                <div className="mb-8 inline-flex items-center justify-center p-3 rounded-2xl bg-brand-primary-lightest text-brand-primary-dark group-hover:bg-brand-primary-darker group-hover:text-white transition-colors duration-500">
                  <value.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <SubHeading className="mb-4 font-geist text-2xl font-bold text-brand-primary-darker tracking-tight">
                  {value.title}
                </SubHeading>

                <BodyText className="text-base leading-relaxed text-brand-primary-dark/70 font-medium">
                  {value.description}
                </BodyText>
              </div>

              {/* Bottom Action Hint */}
              <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span>Read More</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-primary-lightest/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}