'use client';

import { motion, type Variants } from 'framer-motion';
import { Heart, Globe, Users, ArrowRight } from 'lucide-react';
import { Heading, Text, Button } from '../system';

// --- TYPES ---
interface ValueItem {
  icon: typeof Heart;
  title: string;
  description: string;
  image: string;
}

const SPRING_CONFIG = { type: "spring", stiffness: 100, damping: 20 } as const;

const values: ValueItem[] = [
  {
    icon: Users,
    title: 'Community',
    description: 'We work directly with local communities, ensuring our programs are led by and designed for the people we serve.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/25-DSC00589.jpg'
  },
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'We provide communities with the tools, resources, and support they need to build sustainable solutions and take ownership of their own development.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/29-DSC00256.jpg'
  },
  {
    icon: Globe,
    title: 'Transparency',
    description: 'We ensure the majority of your donation goes directly to our projects, with minimal administrative costs. Local staff are paid fairly to implement programs effectively on the ground',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/13-DSC00025.jpg'
  }
];

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
    <section id="values" className="relative overflow-hidden bg-white py-24 lg:py-32 typography-enhanced">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING_CONFIG}
        >
          <div className="flex justify-center mb-6">
            <span className="section-badge bg-gray-50 text-gray-600 border-gray-200">
              Our Ethos
            </span>
          </div>

          <Heading level={2} className="mb-6">
            Driven by <span className="italic font-serif text-teal-600">purpose.</span>
          </Heading>

          <Text size="base" color="muted" className="mx-auto">
            These principles guide everything we do, from program design to community partnerships.
          </Text>
        </motion.div>

        {/* Visual Storytelling Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value) => (
            <motion.article
              key={value.title}
              variants={cardVariants}
              className="group relative flex flex-col h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src={value.image}
                  alt={value.title}
                  width={400}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-8 flex flex-col justify-end" />
              </div>

              <div className="relative z-10 p-8 pt-64 flex flex-col justify-end h-full text-white text-center">
                <div className="mb-4 mx-auto inline-flex items-center justify-center p-3 rounded-xl bg-white/20 backdrop-blur-md text-white w-fit">
                  <value.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <h3 className="subheading text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-white/90 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="secondary" size="lg" href="/purpose" icon={<ArrowRight size={16} />}>
            Read Our Full Purpose
          </Button>
        </div>
      </div>
    </section>
  );
}
