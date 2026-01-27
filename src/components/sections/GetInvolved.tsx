'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HandHeart, Share2, Mail, ArrowRight, Plane } from 'lucide-react';
import { Heading, Text } from '../system';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/card';

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
    title: 'Start a Fundraiser',
    description: 'Start a campaign, make an impact, and help transform lives.',
    action: 'Start Fundraising',
    color: 'sage',
    href: '/fundraise'
  },
  {
    icon: Plane,
    title: 'Soul Caravan Trips',
    description: 'Soul Caravan trips combine travel with meaningful impact. Explore the beauty and culture of the places you visit while engaging in experiences that connect you with local communities.',
    action: 'Learn More',
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
            >
              <Card className="flex flex-col h-full border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-teal-700">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-white/20">
                    <way.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="font-serif text-2xl text-white">
                    {way.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-white leading-relaxed">
                    {way.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto text-white font-bold uppercase tracking-widest text-sm hover:text-white/80 hover:no-underline group/btn">
                    <Link to={way.href} className="flex items-center gap-2">
                      {way.action}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-brand-primary-dark px-6 py-12 shadow-2xl lg:px-16 lg:py-16"
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
                Join our community
              </h3>
              <p className="body-text text-teal-100/80 !text-lg max-w-md mx-auto lg:mx-0">
                Connect with us, stay inspired, and see the change you help create.
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
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="bg-white text-teal-900 hover:bg-teal-50 font-bold border-none"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
