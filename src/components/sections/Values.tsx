'use client';

import { motion } from 'framer-motion';
import { Heading } from '../system';

// --- TYPES ---
interface ValueItem {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const values: ValueItem[] = [
  {
    title: 'Community Centered',
    description: 'We work directly with local communities, ensuring our programs are led by and designed for the people we serve.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/25-DSC00589.jpg'
  },
  {
    title: 'Empowerment Focused',
    description: 'We provide communities with the tools, resources, and support they need to build sustainable solutions and take ownership of their own development.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/29-DSC00256.jpg'
  },
  {
    title: 'Transparent Impact',
    description: 'We ensure the majority of your donation goes directly to our projects, with minimal administrative costs. Local staff are paid fairly to implement programs effectively on the ground.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/13-DSC00025.jpg'
  }
];

export function Values() {
  return (
    <section id="values" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Editorial Header - Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Ethos</span>
            <Heading level={2} className="font-serif text-4xl lg:text-5xl text-gray-900">
              Driven by <span className="italic text-teal-700">purpose.</span>
            </Heading>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed pb-2">
            These principles are not just words—they are the architectural pillars of every program we design and every partnership we build.
          </p>
        </div>

        {/* Editorial Grid - Stacked & Sharp */}
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {values.map((value, i) => {
            const content = (
              <>
                {/* Image - Sharp, 4:3 Ratio, No Overlays */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-8 relative">
                  <img
                    src={value.image}
                    alt={value.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content - Clean, Serif Headings */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-serif font-medium text-gray-900">
                    {value.title}
                  </h3>

                  <div className="w-12 h-px bg-teal-200" />

                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {value.description}
                  </p>
                </div>
              </>
            );

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col"
              >
                {value.link ? (
                  <a href={value.link} className="flex flex-col h-full hover:opacity-90 transition-opacity">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
