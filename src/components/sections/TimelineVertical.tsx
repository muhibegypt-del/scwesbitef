import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { timelineData } from '@/data/timelineData';
import { FadeIn } from '@/components/ui/FadeIn';

export function TimelineVertical() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative space-y-20 lg:space-y-0">

            {/* CENTRAL LINE (Desktop) / LEFT LINE (Mobile) */}
            <div className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-teal-100/50 -translate-x-1/2" />

            {/* PROGRESS BEAM */}
            <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-teal-300 to-teal-500 -translate-x-1/2 z-10 origin-top"
            />

            {timelineData.map((item, index) => {
                const isAlternate = index % 2 === 1; // Right side on desktop
                const isCurrent = item.status === 'current';

                return (
                    <div key={item.year} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center ${isAlternate ? 'lg:flex-row-reverse' : ''}`}>

                        {/* 1. TIMELINE NODE */}
                        <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-4 shadow-sm transition-colors duration-500 bg-white ${isCurrent ? 'border-teal-500 scale-125' : 'border-teal-200'}`}>
                                {isCurrent && (
                                    <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20" />
                                )}
                                <div className={`w-2.5 h-2.5 rounded-full ${isCurrent ? 'bg-teal-600' : 'bg-teal-300'}`} />
                            </div>
                        </div>

                        {/* 2. CONTENT CARD (Left or Right) */}
                        <div className={`w-full lg:w-1/2 pl-14 sm:pl-20 lg:pl-0 ${isAlternate ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'}`}>
                            <FadeIn delay={index * 0.1} direction={isAlternate ? 'left' : 'right'}>
                                <div className={`group relative p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300`}>

                                    {/* Year Badge */}
                                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest ${isAlternate ? 'lg:flex-row-reverse' : ''} ${isCurrent ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-600'}`}>
                                        <Calendar size={12} />
                                        {item.year}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed text-base">
                                        {item.description}
                                    </p>

                                    {/* Image (If available) - Progressive Reveal */}
                                    {item.photos && item.photos.length > 0 && (
                                        <div className="mt-6 rounded-xl overflow-hidden aspect-[16/9] shadow-inner bg-slate-100">
                                            <img
                                                src={item.photos[0]}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    )}

                                    {/* Current Status Indicator */}
                                    {isCurrent && (
                                        <div className="mt-6 pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-teal-600">
                                                <Sparkles size={16} />
                                                Current Phase
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </FadeIn>
                        </div>

                        {/* 3. SPACER (Other Side) */}
                        <div className="hidden lg:block lg:w-1/2" />

                    </div>
                );
            })}
        </div>
    );
}
