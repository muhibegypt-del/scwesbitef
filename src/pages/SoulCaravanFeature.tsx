'use client';

import { motion } from 'framer-motion';
import { SectionHeading, SubHeading, BodyText } from '../components/ui/Typography';
import { Plane, ArrowRight, MapPin, Calendar } from 'lucide-react';

const TRIPS = [
    {
        title: 'Kenya Adventure',
        description: 'Experience the raw beauty of the savannah while supporting education and water projects in rural communities.',
        image: 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg',
        date: 'August 2026'
    },
    {
        title: 'Indonesia Adventure',
        description: 'Journey across islands, explore lush landscapes, and contribute to orphan care and community rebuilding efforts.',
        image: 'https://ik.imagekit.io/dzmabcda0/finals/22-DSC00625.jpg',
        date: 'December 2026'
    },
    {
        title: 'Morocco Adventure',
        description: 'Traverse the Atlas Mountains and ancient cities. Engage in food relief and school refurbishment projects.',
        image: 'https://ik.imagekit.io/dzmabcda0/finals/25-DSC00589.jpg',
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
                        Soul Caravan trips combine travel with meaningful impact. We explore beautiful destinations while engaging in volunteer work that supports local communities. From building schools to distributing aid, every trip is designed to leave a positive footprint. Our journeys also include spiritual reflection and cultural immersion, creating a holistic experience for every traveler. If you’re looking for travel that goes beyond the ordinary, a Soul Caravan trip is the right experience for you.
                    </BodyText>
                </motion.div>
            </div>

            {/* Trips Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <SectionHeading className="mb-12 text-center text-brand-primary-dark">Upcoming Adventures</SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TRIPS.map((trip, i) => (
                        <motion.div
                            key={trip.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={trip.image}
                                    alt={trip.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary-dark shadow-sm">
                                    {trip.date}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold font-geist text-brand-primary-dark mb-3">{trip.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                    {trip.description}
                                </p>

                                <button className="w-full py-4 rounded-xl bg-brand-primary-dark text-white font-bold uppercase tracking-widest text-sm hover:bg-olive-600 transition-colors flex items-center justify-center gap-2">
                                    Apply Now <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA (Maybe unrelated to this specific page request, but good to have) */}
        </div>
    );
}
