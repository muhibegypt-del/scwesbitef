import { motion } from 'framer-motion';
import { HeartHandshake, Heart, Shield, GraduationCap, ArrowLeft } from 'lucide-react';
import { NarrativeImage } from '../components/ui/NarrativeImage';
import { ORPHAN_CARE_IMAGES, IMAGES } from '../data/imageAssets';

const SQUARE_LINK = 'https://square.link/u/1muC8Kjs';

export function OrphanCareAppeal() {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-rose-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={IMAGES.EDUCATION.BOY_SMILING}
            alt="Child smiling"
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
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-rose-700 mb-6 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Home
              </a>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-700 w-fit">
                <HeartHandshake size={12} />
                Orphan & Widow Care
              </div>

              <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-rose-900 sm:text-5xl">
                Support Orphans & Widows
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Provide comprehensive support including school fees, uniforms, food, and psychosocial support for families who have lost their primary provider. Your monthly support creates stability and hope.
              </p>

              <div className="flex flex-col gap-3 border-l-2 border-rose-200 pl-6 text-sm font-medium text-gray-500 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-rose-600" />
                  <span>Monthly support available</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-rose-600" />
                  <span>Education, food & healthcare included</span>
                </div>
              </div>

              <a
                href={SQUARE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-rose-700 transition-all w-fit"
              >
                <Heart className="h-5 w-5 fill-white" />
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
              src={ORPHAN_CARE_IMAGES[1]}
              alt="Child receiving meal"
              variant="feature"
            />
            <div>
              <h2 className="text-3xl font-serif font-semibold text-rose-800 mb-4">
                Nourishment for Growing Minds
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Every child deserves nutritious meals that fuel their growth and learning. Our orphan support program ensures no child goes hungry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From daily meals to special treats, we provide the sustenance they need to thrive.
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
              <h2 className="text-3xl font-serif font-semibold text-rose-800 mb-4">
                Education Opens Doors
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We cover school fees, uniforms, and supplies so orphaned children can continue their education. Knowledge is their pathway to independence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Many of our supported children go on to become teachers, doctors, and community leaders.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <NarrativeImage
                src={ORPHAN_CARE_IMAGES[2]}
                alt="Children in classroom"
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
              src={ORPHAN_CARE_IMAGES[3]}
              alt="Community support"
              variant="feature"
            />
            <div>
              <h2 className="text-3xl font-serif font-semibold text-rose-800 mb-4">
                A Community of Care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Beyond material support, we provide a network of care. Widows receive vocational training while their children receive mentorship and guidance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Together, we build resilient families who can support themselves and give back to their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-24 bg-rose-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <HeartHandshake className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Be a Guardian of Hope
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Your support provides complete care for orphaned children — education, nutrition, healthcare, and love.
          </p>
          <a
            href={SQUARE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-rose-800 px-8 py-4 text-base font-bold shadow-lg transition-all hover:bg-rose-50"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}
