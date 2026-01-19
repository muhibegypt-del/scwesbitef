'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Square payment links
const SQUARE_LINKS = {
  WATER_WELL: 'https://square.link/u/d5fSYpG9',
  EDUCATION: 'https://square.link/u/VFOiNlbN',
  ORPHANS: 'https://square.link/u/1muC8Kjs',
  FOOD_RELIEF: 'https://square.link/u/dpkEeY0Q',
  MASJID: 'https://square.link/u/PaNdJVqa',
  QURBANI: 'https://square.link/u/wTjNjHHp',
};

interface Program {
  title: string;
  description: string;
  image: string;
  href: string | null;
  donateLink: string;
}

const programs: Program[] = [
  {
    title: 'Build a Water Well',
    description: 'Construct a deep-water tube well to provide clean, safe drinking water for an entire village (up to 200 people) for 10+ years.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/8-DSC00857.jpg',
    href: '/water-well',
    donateLink: SQUARE_LINKS.WATER_WELL,
  },
  {
    title: 'Orphan & Widow Care',
    description: 'Provide comprehensive support including school fees, uniforms, food, and psychosocial support for families who have lost their primary provider.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/28-DSC00262.jpg',
    href: '/orphan-care',
    donateLink: SQUARE_LINKS.ORPHANS,
  },
  {
    title: 'Food Relief',
    description: 'Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/13-DSC00025.jpg',
    href: '/food-relief',
    donateLink: SQUARE_LINKS.FOOD_RELIEF,
  },
  {
    title: 'Support Education',
    description: 'Provide learning opportunities to children who need it most, opening doors to a brighter future through schools and supplies.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/29-DSC00256.jpg',
    href: '/education',
    donateLink: SQUARE_LINKS.EDUCATION,
  },
  {
    title: 'Build a Masjid',
    description: 'Construct a place of worship and community gathering that will serve generations as the heart of spiritual and social life.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/17-DSC00819.jpg',
    href: null,
    donateLink: SQUARE_LINKS.MASJID,
  },
  {
    title: 'Qurbani',
    description: 'Fulfill your Qurbani obligation and share fresh meat with families in need during Eid al-Adha celebrations.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/24-DSC00601.jpg',
    href: null,
    donateLink: SQUARE_LINKS.QURBANI,
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow-teal mb-4">
            Our Current Appeals
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-6">
            Supporting the Communities That Need Us the Most
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Check out our current appeals to see where help is needed most and how your support helps us respond on the ground.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {program.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  {program.href ? (
                    <Link
                      to={program.href}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-teal-600 text-teal-700 text-sm font-semibold hover:bg-teal-50 transition-colors"
                    >
                      Learn More
                      <ArrowUpRight size={14} />
                    </Link>
                  ) : (
                    <span className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-gray-200 text-gray-400 text-sm font-semibold cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                  <a
                    href={program.donateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Donate now
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}