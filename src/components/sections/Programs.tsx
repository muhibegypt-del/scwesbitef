'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/data/imageAssets';

// Square payment links
const SQUARE_LINKS = {
  WATER_WELL: 'https://square.link/u/d5fSYpG9',
  EDUCATION: 'https://square.link/u/VFOiNlbN',
  ORPHANS: 'https://square.link/u/1muC8Kjs',
  FOOD_RELIEF: 'https://square.link/u/dpkEeY0Q',
  MASJID: 'https://square.link/u/PaNdJVqa',
  QURBANI: 'https://square.link/u/wTjNjHHp',
  ZAKAT: 'https://square.link/u/d5fSYpG9',
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
    description: 'Construct a deep-water tube well to provide clean, safe drinking water.',
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
    description: 'Provide learning opportunities to children who need it most, opening doors to a brighter future.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/29-DSC00256.jpg',
    href: '/education',
    donateLink: SQUARE_LINKS.EDUCATION,
  },
  {
    title: 'Build a Masjid',
    description: 'Construct a place of worship and community gathering that will serve generations as the heart of spiritual and social life.',
    image: IMAGES.MASJID.MAIN,
    href: '/masjid',
    donateLink: SQUARE_LINKS.MASJID,
  },
  {
    title: 'Qurbani',
    description: 'Fulfill your Qurbani obligation and share fresh meat with families in need during Eid al-Adha celebrations.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/24-DSC00601.jpg',
    href: '/qurbani',
    donateLink: SQUARE_LINKS.QURBANI,
  },
  {
    title: 'Zakat',
    description: 'Provide Zakat to support vulnerable families and communities in need.',
    image: IMAGES.FOOD_PARCEL.COMMUNITY_DISTRIBUTION,
    href: '/zakat',
    donateLink: SQUARE_LINKS.ZAKAT,
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Current Appeals</span>
          <h2 className="text-3xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Supporting communities <br className="hidden sm:block" />
            <span className="italic text-teal-700">where it matters most.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-[15px]">
            Check out our current appeals to see where help is needed most and how your support helps us respond on the ground.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Image - Strict 4:3, Sharp */}
              <div className="aspect-[4/3] w-full bg-gray-100 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 text-center bg-white border-t-0">
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                  {program.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {program.description}
                </p>

                {/* Action Stack */}
                <div className="space-y-3 mt-auto w-full">
                  {program.href ? (
                    <Button asChild variant="outline" className="w-full rounded-xl border-gray-200 hover:border-teal-600 hover:text-teal-700 h-11 uppercase tracking-widest text-xs font-bold">
                      <Link to={program.href}>
                        Learn More <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  ) : (
                    <div className="w-full h-11 flex items-center justify-center border border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest bg-gray-50 cursor-not-allowed rounded-xl">
                      Coming Soon
                    </div>
                  )}

                  <Button asChild className="w-full rounded-xl bg-teal-800 hover:bg-teal-700 text-white h-11 uppercase tracking-widest text-xs font-bold shadow-none">
                    <a href={program.donateLink} target="_blank" rel="noopener noreferrer">
                      Donate Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

