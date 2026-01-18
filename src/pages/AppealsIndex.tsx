import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Utensils, HeartHandshake, ArrowRight, Building, Beef, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Square payment links
const SQUARE_LINKS = {
  MASJID: 'https://square.link/u/PaNdJVqa',
  WATER_WELL: 'https://square.link/u/d5fSYpG9',
  EDUCATION: 'https://square.link/u/VFOiNlbN',
  ORPHANS: 'https://square.link/u/1muC8Kjs',
  FOOD_RELIEF: 'https://square.link/u/dpkEeY0Q',
  QURBANI: 'https://square.link/u/wTjNjHHp',
  GENERAL: 'https://square.link/u/cI8AoKop',
};

const appeals = [
  {
    title: 'Build a Water Well',
    description: 'Construct a deep-water tube well to provide clean, safe drinking water for an entire village (up to 200 people) for 10+ years.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg',
    category: 'Sadaqah Jariyah',
    href: '/water-well',
    donateLink: SQUARE_LINKS.WATER_WELL,
    icon: Droplets
  },
  {
    title: 'Orphan & Widow Care',
    description: 'Provide comprehensive support including school fees, uniforms, food, and psychosocial support for families who have lost their primary provider.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/28-DSC00262.jpg',
    category: 'Monthly Support',
    href: '/orphan-care',
    donateLink: SQUARE_LINKS.ORPHANS,
    icon: HeartHandshake
  },
  {
    title: 'Food Relief',
    description: 'Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/13-DSC00025.jpg',
    category: 'Emergency Relief',
    href: '/food-relief',
    donateLink: SQUARE_LINKS.FOOD_RELIEF,
    icon: Utensils
  },
  {
    title: 'Support Education',
    description: 'Provide learning opportunities to children who need it most, opening doors to a brighter future through schools and supplies.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/29-DSC00256.jpg',
    category: 'Sadaqah Jariyah',
    href: '/education',
    donateLink: SQUARE_LINKS.EDUCATION,
    icon: GraduationCap
  },
  {
    title: 'Build a Masjid',
    description: 'Construct a place of worship and community gathering that will serve generations. A masjid becomes the heart of spiritual and social life for the entire community.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/17-DSC00819.jpg',
    category: 'Sadaqah Jariyah',
    href: null,
    donateLink: SQUARE_LINKS.MASJID,
    icon: Building
  },
  {
    title: 'Qurbani',
    description: 'Fulfill your Qurbani obligation and share fresh meat with families in need. Your sacrifice provides protein-rich meals during Eid al-Adha celebrations.',
    image: 'https://ik.imagekit.io/dzmabcda0/finals/24-DSC00601.jpg',
    category: 'Seasonal Appeal',
    href: null,
    donateLink: SQUARE_LINKS.QURBANI,
    icon: Beef
  }
];

export function AppealsIndex() {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-teal-800 mb-6">
              Our Active Appeals
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Choose from our current humanitarian projects and make a direct impact on communities in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appeals.map((appeal, index) => (
              <motion.article
                key={appeal.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={appeal.image}
                    alt={appeal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <appeal.icon className="w-5 h-5 text-teal-700" />
                    <span className="text-sm font-medium text-teal-700">{appeal.category}</span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-teal-800 mb-3">
                    {appeal.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {appeal.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-auto">
                    {appeal.href && (
                      <Link
                        to={appeal.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    )}
                    <a
                      href={appeal.donateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
                    >
                      <Heart size={14} className="fill-white" />
                      Donate
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}