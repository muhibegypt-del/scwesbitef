import { motion } from 'framer-motion';
import { Droplets, Shield, Users, ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NarrativeImage } from '../components/ui/NarrativeImage';
import { WATER_WELL_IMAGES, IMAGES } from '../data/imageAssets';

const SQUARE_LINK = 'https://square.link/u/d5fSYpG9';

export function WaterWellAppeal() {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-teal-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={IMAGES.WATER.GIRL_COLLECTING}
            alt="Child collecting water from well"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Home
              </Link>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal-700 w-fit">
                <Droplets size={12} />
                Water Crisis Appeal
              </div>

              <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-teal-800 sm:text-5xl">
                Build a Water Well
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Provide clean, safe drinking water for an entire village. A single well can serve up to 200 people for over 10 years, transforming lives and preventing water-borne diseases.
              </p>

              <div className="flex flex-col gap-3 border-l-2 border-teal-200 pl-6 text-sm font-medium text-gray-500 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-teal-600" />
                  <span>Sadaqah Jariyah project</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Serves 200+ people for 10+ years</span>
                </div>
              </div>

              <a
                href={SQUARE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-teal-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                <Heart className="h-5 w-5 fill-white" aria-hidden="true" />
                Donate Now
              </a>
            </motion.div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* NARRATIVE IMAGE SECTION 1 */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <NarrativeImage
              src={WATER_WELL_IMAGES[1]}
              alt="Child using water tap"
              variant="feature"
            />
            <div>
              <h2 className="text-3xl font-serif font-semibold text-teal-800 mb-4 text-center">
                Clean Water Changes Everything
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Access to clean water transforms communities. Children no longer walk miles to collect contaminated water. Instead, they attend school. Women can pursue opportunities. Entire villages thrive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your donation provides sustainable infrastructure that serves generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NARRATIVE IMAGE SECTION 2 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-semibold text-teal-800 mb-4 text-center">
                Built to Last
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Each water well is constructed with durable materials and includes a storage tank to ensure consistent water supply. We partner with local communities for maintenance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A plaque bearing your name or the name of your loved one marks your contribution to this life-saving project.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <NarrativeImage
                src={WATER_WELL_IMAGES[2]}
                alt="Water well structure"
                variant="feature"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NARRATIVE IMAGE SECTION 3 */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <NarrativeImage
              src={WATER_WELL_IMAGES[3]}
              alt="Water well installation"
              variant="feature"
            />
            <div>
              <h2 className="text-3xl font-serif font-semibold text-teal-800 mb-4 text-center">
                A Legacy of Giving
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                When you build a water well, you create a source of sadaqah jariyah — continuous charity that keeps giving rewards as long as the well provides water.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Perfect for honoring a loved one's memory or celebrating a milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-24 bg-teal-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Droplets className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Transform a Community Today
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Your contribution helps us build water wells that serve over 200 people for more than a decade.
          </p>
          <a
            href={SQUARE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-teal-800 px-8 py-4 text-base font-bold shadow-lg transition-colors hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}
