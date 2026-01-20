import { motion } from 'framer-motion';
import { Utensils, Shield, Clock, ArrowLeft, Heart } from 'lucide-react';
import { NarrativeImage } from '../components/ui/NarrativeImage';
import { FOOD_RELIEF_IMAGES, IMAGES } from '../data/imageAssets';

const SQUARE_LINK = 'https://square.link/u/dpkEeY0Q';

export function FoodReliefAppeal() {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-orange-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={IMAGES.HOT_MEALS.GIRL_PLATE}
            alt="Girl with hot meal"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-700 mb-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 rounded-sm"
              >
                <ArrowLeft size={16} />
                Back to Home
              </a>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 w-fit">
                <Clock size={12} />
                Emergency Relief
              </div>

              <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-orange-900 sm:text-5xl">
                Emergency Food Relief
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict. When hunger strikes, immediate action saves lives.
              </p>

              <div className="flex flex-col gap-3 border-l-2 border-orange-200 pl-6 text-sm font-medium text-gray-500 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span>Emergency aid distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span>Immediate distribution to families in need</span>
                </div>
              </div>

              <a
                href={SQUARE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-orange-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
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
              src={FOOD_RELIEF_IMAGES[1]}
              alt="Child eating nutritious meal"
              variant="feature"
            />
            <div>
              <h2 className="text-3xl font-serif font-semibold text-orange-800 mb-4 text-center">
                Hot Meals That Nourish
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our hot meal programs provide freshly cooked, nutritious food to those who need it most. From community halls to school feeding programs, we reach the hungry where they are.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every meal includes rice, protein, and vegetables — a complete, balanced diet.
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
              <h2 className="text-3xl font-serif font-semibold text-orange-800 mb-4 text-center">
                Food Parcels for Families
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Beyond daily meals, we distribute monthly food parcels containing rice, flour, cooking oil, lentils, and other essentials. Each parcel feeds a family for weeks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These provisions ensure that families have the stability of knowing where their next meal will come from.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <NarrativeImage
                src={FOOD_RELIEF_IMAGES[2]}
                alt="Woman carrying food parcel"
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
              src={FOOD_RELIEF_IMAGES[3]}
              alt="Food distribution setup"
              variant="feature"
            />
            <div>
              <h2 className="text-3xl font-serif font-semibold text-orange-800 mb-4 text-center">
                Community Distribution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We set up distribution points in villages and community centers, ensuring that aid reaches even the most remote areas. Local volunteers help identify families in need.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your donation doesn't just provide food — it builds community resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-24 bg-orange-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif font-semibold mb-4">
            No One Should Go Hungry
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Your generosity feeds hope and provides essential nutrition to families in need.
          </p>
          <a
            href={SQUARE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-orange-800 px-8 py-4 text-base font-bold shadow-lg transition-colors hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}
