import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Utensils, HeartHandshake, ArrowRight, Building, Beef, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const appeals = [
  {
    title: 'Build a Water Well',
    description: 'Construct a deep-water tube well to provide clean, safe drinking water for an entire village (up to 200 people) for 10+ years.',
    image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=800&auto=format&fit=crop',
    category: 'Sadaqah Jariyah',
    isZakatEligible: true,
    href: '/water-well',
    icon: Droplets
  },
  {
    title: 'Orphan & Widow Care',
    description: 'Provide comprehensive support including school fees, uniforms, food, and psychosocial support for families who have lost their primary provider.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop',
    category: 'Monthly Support',
    isZakatEligible: true,
    href: '/orphan-care',
    icon: HeartHandshake
  },
  {
    title: 'Hot Meals & Food Packs',
    description: 'Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict.',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=800&auto=format&fit=crop',
    category: 'Emergency Relief',
    isZakatEligible: true,
    href: '/food-relief',
    icon: Utensils
  },
  {
    title: 'Build a Masjid',
    description: 'Construct a place of worship and community gathering that will serve generations. A masjid becomes the heart of spiritual and social life for the entire community.',
    image: 'https://images.unsplash.com/photo-1564769625392-651b2c0e7b8b?q=80&w=800&auto=format&fit=crop',
    category: 'Sadaqah Jariyah',
    isZakatEligible: false,
    href: '#masjid',
    icon: Building
  },
  {
    title: 'Qurbani',
    description: 'Fulfill your Qurbani obligation and share fresh meat with families in need. Your sacrifice provides protein-rich meals during Eid al-Adha celebrations.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    category: 'Seasonal Appeal',
    isZakatEligible: false,
    href: '#qurbani',
    icon: Beef
  },
  {
    title: 'Zakat',
    description: 'Calculate and pay your Zakat obligation to purify your wealth. Your Zakat directly supports the most vulnerable members of our community.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop',
    category: 'Religious Obligation',
    isZakatEligible: true,
    href: '#zakat',
    icon: DollarSign
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
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={appeal.image}
                    alt={appeal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <appeal.icon className="w-5 h-5" style={{ color: '#3e6d73' }} />
                    <span className="text-sm font-medium" style={{ color: '#3e6d73' }}>{appeal.category}</span>
                    {appeal.isZakatEligible && (
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                        Zakat Eligible
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#3e6d73' }}>
                    {appeal.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {appeal.description}
                  </p>

                  <Link
                    to={appeal.href}
                    className="inline-flex items-center gap-2 font-medium transition-colors"
                    style={{ color: '#3e6d73' }}
                  >
                    {appeal.title === 'Build a Masjid' ? 'Donate Now' : 
                     appeal.title === 'Qurbani' ? 'Select Qurbani' : 
                     appeal.title === 'Zakat' ? 'Pay Zakat' : 'Learn More'} 
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}