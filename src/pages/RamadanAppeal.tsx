import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';
import { IMAGES } from '@/data/imageAssets';

const SQUARE_LINK = 'https://checkout.square.site/merchant/MLAAADG4MBDM3/checkout/LZHY5QXEAVERT3CC25PZ3KK4';

const RAMADAN_IMAGES = {
  hero: 'https://ik.imagekit.io/dzmabcda0/DSC00607.jpg',
  womanParcel: '/images/ramadan-hero.jpg',
  child: '/images/ramadan-child.jpeg',
};

const GALLERY_IMAGES = [
  { src: IMAGES.FOOD_PARCEL.PARCEL_ADDITION_1, alt: 'Food distribution event' },
  { src: IMAGES.FOOD_PARCEL.PARCEL_ADDITION_2, alt: 'Community aid during Ramadan' },
  { src: IMAGES.FOOD_PARCEL.PARCEL_CLOSEUP, alt: 'Food parcel contents' },
  { src: IMAGES.FOOD_PARCEL.WOMAN_CARRYING_ORANGE, alt: 'Woman receiving parcel' },
  { src: IMAGES.FOOD_PARCEL.WOMAN_CARRYING_BLUE, alt: 'Carrying food home' },
  { src: IMAGES.FOOD_PARCEL.COMMUNITY_DISTRIBUTION, alt: 'Community distribution' },
];

const FAQ_ITEMS = [
  { question: 'Is my Ramadan donation Zakat eligible?', answer: 'Yes. Our Ramadan food relief programs are designed to be Zakat eligible, reaching the poor and needy who qualify as recipients under Islamic guidelines.' },
  { question: 'What does a food parcel contain?', answer: 'Each Ramadan food parcel includes essentials such as rice, flour, cooking oil, dates, lentils, sugar, and tea — carefully selected to sustain a family throughout the blessed month.' },
  { question: 'How does my donation reach families?', answer: 'We work directly with local communities and trusted partners on the ground. Your donation is used to purchase and distribute food parcels directly to families in need, with full transparency.' },
  { question: 'Can I donate on behalf of a loved one?', answer: 'Of course. Many donors give Sadaqah Jariyah during Ramadan on behalf of family members, both living and deceased. Your generosity benefits them too.' },
  { question: 'Where does Soul Caravan distribute during Ramadan?', answer: 'Our Ramadan programs primarily serve communities in East Africa, focusing on areas facing food insecurity and poverty. We target the most vulnerable families in remote and underserved regions.' },
];

function RamadanHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={RAMADAN_IMAGES.hero}
          alt="Ramadan 2026 - Feeding families in need"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-900/80 to-teal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-teal-950/30" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
          <div className="max-w-2xl">
            <FadeIn delay={0.1} direction="down">
              <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-white text-white/60 gap-2" asChild>
                <Link to="/">
                  <ArrowLeft size={16} />
                  Back to Home
                </Link>
              </Button>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-16 bg-olive-400/60" />
                <span className="text-olive-300 font-semibold tracking-[0.2em] uppercase text-xs">
                  The Blessed Month
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Ramadan
                <span className="block text-olive-300 mt-2">2026</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mt-8 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                Only <span className="text-white font-bold">£50</span> can feed up
                to <span className="text-white font-bold">20 people</span> this Ramadan.
                Provide iftar meals and food parcels to families who have nothing to break their fast with.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-olive-500 hover:bg-olive-600 text-white h-14 px-10 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={SQUARE_LINK} target="_blank" rel="noopener noreferrer" className="gap-3">
                    <Heart className="h-5 w-5" />
                    Donate Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-white/30 bg-transparent hover:bg-white/10 text-white h-14 px-10 text-lg transition-all duration-300"
                >
                  <a href="#why-ramadan" className="gap-3">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}

function WhyRamadanSection() {
  return (
    <section id="why-ramadan" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">
                Why Give During Ramadan
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                The Month of Mercy and Generosity
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
                <p>
                  Ramadan is a time of spiritual reflection, self-discipline, and compassion. For millions of
                  families living in poverty, it is also a time of immense struggle — when the pain of hunger
                  is felt most acutely during the long days of fasting.
                </p>
                <p>
                  Your generosity during this sacred month carries multiplied reward. The Prophet (peace be upon him)
                  said: <em className="text-teal-700 font-medium">"Whoever feeds a fasting person will have a reward
                  like that of the fasting person."</em>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-5">
                How your donation transforms lives
              </h3>
            </FadeIn>

            <ul className="space-y-4 text-slate-700">
              {[
                'Iftar meals served to families who cannot afford to break their fast',
                'Monthly food parcels providing essential staples for the entire month',
                'Community feeding programs bringing people together in unity',
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.4 + (idx * 0.1)} direction="right">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div className="relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={RAMADAN_IMAGES.womanParcel}
                  alt="Woman receiving Ramadan food parcel"
                  className="w-full h-full object-cover scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <p className="mt-5 text-center text-slate-700">
                Every parcel provides weeks of nourishment
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="mx-auto max-w-7xl px-8 lg:px-12 mb-10">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            On the Ground
          </h2>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            See the direct impact of your generosity. Every parcel delivered, every meal served,
            every smile — made possible by donors like you.
          </p>
        </FadeIn>
      </div>

      <div className="px-12 max-w-[1400px] mx-auto">
        <FadeIn delay={0.2} direction="up" fullWidth>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {GALLERY_IMAGES.map((img, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="rounded-2xl overflow-hidden shadow-xl border-none">
                      <div className="aspect-[4/3]">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 w-12 h-12 border-none shadow-lg" />
            <CarouselNext className="right-4 w-12 h-12 border-none shadow-lg" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}

function CinematicSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${IMAGES.FOOD_PARCEL.POT_SETUP})` }}
      />
      <div className="absolute inset-0 bg-slate-900/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-1">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-teal-600/50" />
                <span className="text-teal-400 font-medium tracking-widest uppercase text-sm">Real Impact</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Nourishing Communities, Building Hope
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-zinc-200/90 leading-relaxed">
                <p>
                  When Ramadan arrives, our teams mobilise across communities to ensure that
                  no family goes without. From sourcing locally to hand-delivering every parcel,
                  we are there — on the ground, in the villages, at the doorsteps of those who
                  need it most.
                </p>
                <p>
                  Each food parcel is carefully assembled with staples that sustain a family
                  throughout the holy month: rice, flour, dates, cooking oil, lentils, and more.
                  For many recipients, this is the difference between hunger and dignity.
                </p>

                <blockquote className="mt-8 border-l-4 border-teal-600 pl-6 py-2">
                  <p className="text-teal-400 font-serif italic text-2xl leading-relaxed">
                    "The best charity is that given in Ramadan."
                  </p>
                </blockquote>
              </div>
            </FadeIn>
          </div>

          <div className="order-2 perspective-1000">
            <FadeIn direction="left" delay={0.3} duration={1.2}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-700 rounded-[2.6rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700 ease-out border-4 border-white/10">
                  <img
                    src={IMAGES.FOOD_PARCEL.WOMAN_CARRYING_ORANGE}
                    alt="Woman carrying food parcel during Ramadan distribution"
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RamadanAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">
      <RamadanHero />
      <WhyRamadanSection />
      <GallerySection />
      <CinematicSection />

      <AppealFAQ items={FAQ_ITEMS} title="Ramadan Giving FAQ" />

      <AppealCTA
        title="Make This Ramadan Count"
        text="Your donation provides life-sustaining food parcels to families with nothing to break their fast. Give generously this blessed month."
        ctaLink={SQUARE_LINK}
      />
    </div>
  );
}
