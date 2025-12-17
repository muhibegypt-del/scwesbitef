'use client';

import { motion } from 'framer-motion';
import { HandHeart, Share2, Mail, ArrowRight, Plane } from 'lucide-react';
import { SectionHeading, BodyText, SubHeading } from '../ui/Typography';

const EASE = [0.22, 1, 0.36, 1];

const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer with Us',
    description: 'Join our "Khidmat" (Service) team on the ground. Use your skills - medical, media, or logistical - to serve directly.',
    action: 'Apply to Volunteer',
    color: 'teal'
  },
  {
    icon: Share2,
    title: 'Become an Ambassador',
    description: 'You don\'t need money to make an impact. Use your voice to fundraise within your network and multiply your reward.',
    action: 'Start Fundraising',
    color: 'sage'
  },
  {
    icon: Plane,
    title: 'Soul Caravan 2026 Kenya Adventure',
    description: 'Find service through exploration. Join us for a life-changing journey where we combine adventure with meaningful volunteer work.',
    action: 'Apply for 2026',
    color: 'olive'
  }
];

export function GetInvolved() {
  return (
    <section id="involved" className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-6 inline-flex justify-center">
            <span className="rounded-full border border-sage-200 bg-sage-50 px-4 py-1.5 text-xs font-geist font-bold uppercase tracking-widest text-sage-700">
              Join The Caravan
            </span>
          </div>

          <SectionHeading className="text-4xl sm:text-5xl font-geist font-semibold text-brand-primary-dark mb-6">
            More ways to leave <br/> a <span className="text-sage-600">lasting legacy.</span>
          </SectionHeading>

          <BodyText className="text-lg text-gray-600 max-w-2xl mx-auto">
            Charity is not just about giving wealth; it is about giving of oneself.
            Choose the path that speaks to your heart.
          </BodyText>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
              className="group relative bg-brand-primary rounded-2xl p-8 hover:bg-brand-primary-hover transition-colors duration-300"
            >
              <div className={`
                w-14 h-14 mb-8 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110
                ${way.color === 'teal' ? 'bg-brand-primary/50 text-white group-hover:bg-brand-primary group-hover:text-white' :
                  way.color === 'sage' ? 'bg-brand-primary/50 text-white group-hover:bg-sage-500 group-hover:text-white' :
                  'bg-brand-primary/50 text-white group-hover:bg-olive-500 group-hover:text-white'}
              `}>
                <way.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <SubHeading className="text-xl font-geist font-semibold text-white mb-4 group-hover:text-olive-300 transition-colors">
                {way.title}
              </SubHeading>

              <BodyText className="text-brand-primary-light/80 mb-8 flex-grow">
                {way.description}
              </BodyText>

              <div className="mt-auto">
                <button className="group/btn flex items-center gap-2 text-sm font-geist font-bold uppercase tracking-widest text-white transition-colors hover:text-olive-300">
                  <span className="absolute inset-0 z-10 rounded-2xl" aria-hidden="true" />
                  {way.action}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-12 shadow-2xl lg:px-16 lg:py-16"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-brand-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-4 text-olive-400">
                <Mail className="w-6 h-6" />
                <span className="text-sm font-geist font-bold uppercase tracking-widest">Stay Connected</span>
              </div>
              <SubHeading className="text-3xl font-geist font-semibold text-white mb-4">
                Join our weekly newsletter
              </SubHeading>
              <BodyText className="text-teal-100/80 text-lg max-w-md">
                Receive impactful stories from the field, transparency reports, and urgent appeals directly to your inbox. No spam, ever.
              </BodyText>
            </div>

            <form className="relative flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                id="email-address"
                placeholder="Enter your email"
                className="w-full rounded-xl border-0 bg-white/10 px-5 py-4 text-white placeholder:text-brand-primary-light/60 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-olive-400 focus:bg-white/15 transition-all backdrop-blur-sm"
              />
              <button
                type="button"
                className="whitespace-nowrap rounded-xl bg-white px-8 py-4 text-base font-geist font-bold text-brand-primary-dark shadow-lg hover:bg-olive-100 hover:text-brand-primary-darker transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
