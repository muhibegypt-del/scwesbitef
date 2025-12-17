import { motion } from 'framer-motion';
import { Droplets, Heart, Shield, Users, ArrowLeft } from 'lucide-react';
import { DonationForm } from '../components/ui/DonationForm';
import { DONATION_AMOUNTS, ANIMATION } from '../constants';

export function WaterWellAppeal() {
  const handleDonationSubmit = (data: { amount: number; type: 'one-time' | 'monthly' }) => {
    console.log('Water well donation:', data);
  };

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-gray-50/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: ANIMATION.EASING_CURVE }}
              className="flex flex-col"
            >
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-6 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Home
              </a>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal-700 w-fit">
                <Droplets size={12} />
                Water Crisis Appeal
              </div>

              <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-teal-800 sm:text-5xl">
                Build a Water Well
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Provide clean, safe drinking water for an entire village. A single well can serve up to 200 people for over 10 years, transforming lives and preventing water-borne diseases.
              </p>

              <div className="flex flex-col gap-3 border-l-2 border-teal-200 pl-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-teal-600" />
                  <span>Zakat eligible project</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Serves 200+ people for 10+ years</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: ANIMATION.EASING_CURVE }}
              className="relative w-full max-w-md mx-auto"
            >
              <DonationForm
                title="Fund This Well"
                subtitle="Help bring clean water to a community"
                amounts={DONATION_AMOUNTS.WATER_WELL}
                defaultAmount={100}
                onSubmit={handleDonationSubmit}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-teal-800 mb-4">
              Why Water Wells Matter
            </h2>
            <p className="text-lg text-gray-600">
              Access to clean water is fundamental to health, education, and economic development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2">Clean Water Access</h3>
              <p className="text-gray-600">Eliminates waterborne diseases and provides safe drinking water for entire communities.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2">Community Impact</h3>
              <p className="text-gray-600">Serves up to 200 people, reducing time spent collecting water and enabling education.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-olive-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2">Long-term Solution</h3>
              <p className="text-gray-600">Built to last 10+ years with proper maintenance, providing sustainable water access.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
