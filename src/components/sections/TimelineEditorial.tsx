import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { timelineData } from '@/data/timelineData';
import { FadeIn } from '@/components/ui/FadeIn';

// Shadcn Components
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export function TimelineEditorial() {
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
        <div ref={containerRef} className="relative space-y-16 lg:space-y-0">

            {/* CENTRAL LINE (Desktop) / LEFT LINE (Mobile) */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            {/* PROGRESS BEAM */}
            <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-teal-500 -translate-x-1/2 z-10 origin-top"
            />

            {timelineData.map((item, index) => {
                const isAlternate = index % 2 === 1; // Right side on desktop
                const isCurrent = item.status === 'current';

                return (
                    <div
                        key={item.year}
                        id={`year-${item.year}`}
                        className={`relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center ${isAlternate ? 'lg:flex-row-reverse' : ''} scroll-mt-32`}
                    >

                        {/* 1. TIMELINE NODE (Editorial: Clean Circle) */}
                        <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                            <div className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-500 bg-white ${isCurrent ? 'border-teal-500 scale-125' : 'border-slate-300'}`}>
                                {isCurrent && (
                                    <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20" />
                                )}
                                <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-teal-600' : 'bg-slate-300'}`} />
                            </div>
                        </div>

                        {/* 2. CONTENT CARD (Left or Right) */}
                        <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${isAlternate ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                            <FadeIn delay={index * 0.1} direction={isAlternate ? 'left' : 'right'}>
                                {/* 
                   GHOST CARD STRATEGY: 
                   We use the Card component for its internal structure (Header/Content),
                   but we remove the border/shadow to give it the "Magazine" floating feel.
                */}
                                <Card className="border-none shadow-none bg-transparent rounded-none p-0 group">

                                    <CardHeader className={`p-0 space-y-4 ${isAlternate ? 'lg:items-end' : 'lg:items-start'}`}>
                                        <div
                                            className={`text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#276280] via-[#6b8c96] to-[#276280] leading-none tracking-tighter w-full opacity-30 ${isAlternate ? 'lg:text-right' : 'lg:text-left'} will-change-transform`}
                                            style={{
                                                // Optimized drop-shadow: simpler on mobile, complex on desktop
                                                filter: 'drop-shadow(1px 1px 0px rgba(255,255,255,0.8))'
                                            }}
                                        >
                                            {item.year}
                                        </div>

                                        <CardTitle className="text-3xl font-serif text-slate-900 leading-tight">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className={`p-0 mt-4 space-y-6`}>
                                        <p className="text-slate-600 leading-relaxed max-w-xl">
                                            {item.description}
                                        </p>

                                        {/* SQUARED IMAGE (Aspect Square or 4:3) */}
                                        {item.photos && item.photos.length > 0 && (
                                            <div className={`relative overflow-hidden aspect-[4/3] w-full lg:max-w-md shadow-md ${isAlternate ? 'lg:ml-auto' : ''} transform-gpu`}>
                                                <div className="absolute inset-0 bg-slate-100 animate-pulse" />
                                                <img
                                                    src={item.photos[0]}
                                                    alt={item.title}
                                                    className="relative z-10 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 will-change-transform"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                        )}

                                        {isCurrent && (
                                            <div className={`flex items-center gap-2 text-sm font-semibold text-teal-600 ${isAlternate ? 'lg:justify-end' : ''}`}>
                                                <Sparkles size={16} />
                                                Current Phase
                                            </div>
                                        )}
                                    </CardContent>

                                </Card>
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
