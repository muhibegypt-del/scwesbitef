'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { motion } from 'framer-motion';
import { SectionHeading, BodyText } from '../components/ui/Typography';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const TRIPS = [
    {
        title: 'Kenya',
        image: 'https://ik.imagekit.io/dzmabcda0/kenya?updatedAt=1768994461063',
        date: 'August 2026'
    },
    {
        title: 'Indonesia',
        image: 'https://ik.imagekit.io/dzmabcda0/lombok?updatedAt=1768994446046',
        date: 'December 2026'
    },
    {
        title: 'Morocco',
        image: 'https://ik.imagekit.io/dzmabcda0/morocco?updatedAt=1768994428462',
        date: 'April 2027'
    }
];

export function SoulCaravanFeature() {
    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-white min-h-screen">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl lg:text-7xl font-geist font-bold text-brand-primary-dark mb-8">
                        Journey with <br className="hidden sm:block" />
                        <span className="text-olive-600">Soul Caravan</span>
                    </h1>

                    <BodyText className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Soul Caravan trips combine travel with meaningful impact. Explore the beauty and culture of the places you visit while engaging in experiences that connect you with local communities. These journeys are more than sightseeing — they are transformative experiences. Immerse yourself in new cultures, build connections, and take part in projects that leave a tangible mark on the communities you visit. Travel with purpose and come away with a broader perspective, deeper understanding, and memories that last a lifetime. If you're looking for travel that goes beyond the ordinary, combining exploration with meaningful contribution, a Soul Caravan trip is the right experience for you.
                    </BodyText>
                </motion.div>
            </div>

            {/* Trips Grid - Editorial Style */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <SectionHeading className="mb-12 text-center text-brand-primary-dark">Upcoming Adventures</SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TRIPS.map((trip, i) => (
                        <FadeIn key={trip.title} delay={i * 0.1}>
                            <Card className="group overflow-hidden border-none shadow-none bg-transparent">
                                {/* Image - Sharp, 4:3 Ratio */}
                                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-6 relative">
                                    <img
                                        src={trip.image}
                                        alt={trip.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Date Badge */}
                                    <Badge
                                        variant="outline"
                                        className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border-teal-200 text-teal-700 rounded-sm px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-sm"
                                    >
                                        {trip.date}
                                    </Badge>
                                </div>

                                <CardContent className="p-0 space-y-6">
                                    {/* Country Title - Serif, Editorial */}
                                    <h3 className="text-3xl font-serif font-medium text-slate-900">
                                        {trip.title}
                                    </h3>

                                    {/* Subtle Divider */}
                                    <div className="w-12 h-px bg-teal-200" />

                                    {/* CTA Button */}
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-full border-gray-300 text-gray-600 hover:text-teal-700 hover:border-teal-700 hover:bg-transparent px-8 py-6 uppercase tracking-widest text-xs font-bold transition-all"
                                    >
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
