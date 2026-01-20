'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HandHeart, Share2, Mail, ArrowRight, Plane } from 'lucide-react';
import { Heading, Text } from '../system';

const EASE = [0.22, 1, 0.36, 1] as const;

const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer with Us',
    description: 'Turn your compassion into action by volunteering in projects that truly matter.',
    action: 'Apply to Volunteer',
    color: 'teal',
    href: '/volunteer'
  },
  {
    icon: Share2,
    title: 'Become an Ambassador',
    description: 'Start a campaign, make an impact, and help transform lives.',
    action: 'Start Fundraising',
    color: 'sage',
    href: '/fundraise'
  },
  {
    icon: Plane,
    title: 'Soul Caravan 2026 Kenya Adventure',
    description: 'Find service through exploration. Join us for a life-changing journey where we combine adventure with meaningful volunteer work.',
    action: 'Apply for 2026',
    color: 'olive',
    href: '/soul-caravan'
  }
];



export function GetInvolved() {
  return (
    <section id="involved" className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden typography-enhanced">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-6 inline-flex justify-center">
            <span className="section-badge bg-teal-50 text-teal-700 border-teal-200">
              Join The Caravan
            </span>
          </div>

          <Heading level={2} className="mb-6">
            More ways to leave <br /> a <span className="text-teal-600">lasting legacy.</span>
          </Heading>

          <Text size="base" color="muted" className="mx-auto">
            Charity is not just about giving wealth; it is about giving of oneself.
            Choose the path that speaks to your heart.
          </Text>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
              className="group relative bg-[#264144] rounded-xl p-8 hover:bg-[#1f3638] transition-colors duration-300"
            >
              <div className={`
                w-14 h-14 mx-auto mb-8 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110
                bg-white/10 text-white
              `}>
                <way.icon className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
              </div>

              <h3 className="subheading text-white mb-4 text-center">
                {way.title}
              </h3>

              <p className="body-text text-teal-100/80 mb-8 flex-grow text-center !text-base">
                {way.description}
              </p>

              <div className="mt-auto flex justify-center">
                <button className="group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-teal-200">
                  <Link to={way.href} className="absolute inset-0 z-10 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500" aria-hidden="true" />
                  {way.action}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
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
          className="relative overflow-hidden rounded-3xl bg-[#264144] px-6 py-12 shadow-2xl lg:px-16 lg:py-16"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-teal-800/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center text-center lg:text-left">
            <div className="flex-1">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-teal-200">
                <Mail className="w-6 h-6" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-widest">Stay Connected</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Join our weekly newsletter
              </h3>
              <p className="body-text text-teal-100/80 !text-lg max-w-md mx-auto lg:mx-0">
                Receive impactful stories from the field, transparency reports, and urgent appeals directly to your inbox. No spam, ever.
              </p>
            </div>

            <form className="relative flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                id="email-address"
                name="email"
                autoComplete="email"
                placeholder="Enter your email…"
                className="w-full lg:w-80 rounded-xl border-0 bg-white/10 px-5 py-4 text-white placeholder:text-teal-200/60 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-teal-400 focus:bg-white/15 transition-all backdrop-blur-sm"
              />
              <button
                type="submit"
                className="btn-secondary border-none bg-white text-teal-900 hover:bg-teal-50"
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
