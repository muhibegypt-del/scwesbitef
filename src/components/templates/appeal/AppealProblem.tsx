import { Play } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { BrandPalette } from './types';

interface AppealProblemProps {
    label?: string;
    title: string;
    intro: React.ReactNode; // Can be string or JSX for multiple paragraphs
    bullets: string[];
    image: {
        src: string;
        alt: string;
        videoTrigger?: boolean; // If true, shows play button overlay
    };
    onVideoClick?: () => void;
}

export function AppealProblem({
    label = "What we're solving",
    title,
    intro,
    bullets,
    image,
    onVideoClick
}: AppealProblemProps) {
    return (
        <section className={`py-20 lg:py-28 bg-${BrandPalette.background.white}`}>
            <div className="mx-auto max-w-7xl px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left - Problem Content */}
                    <div>
                        <FadeIn>
                            <p className={`text-sm font-semibold text-${BrandPalette.primary.DEFAULT} uppercase tracking-wider mb-4`}>
                                {label}
                            </p>
                            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-${BrandPalette.text.main} leading-tight mb-6`}>
                                {title}
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className={`space-y-5 text-lg text-${BrandPalette.text.muted} leading-relaxed`}>
                                {intro}
                            </div>
                        </FadeIn>

                        {bullets.length > 0 && (
                            <>
                                <FadeIn delay={0.3}>
                                    <h3 className={`text-xl font-bold text-${BrandPalette.text.main} mt-10 mb-5`}>
                                        How this project makes a difference
                                    </h3>
                                </FadeIn>

                                <ul className={`space-y-4 text-${BrandPalette.text.muted}`}>
                                    {bullets.map((bullet, idx) => (
                                        <FadeIn key={idx} delay={0.4 + (idx * 0.1)} direction="right">
                                            <li className="flex items-start gap-3">
                                                <span className={`w-2 h-2 rounded-full bg-teal-500 mt-2.5 flex-shrink-0`} /> {/* Explicit teal-500 from source */}
                                                {bullet}
                                            </li>
                                        </FadeIn>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Right - Image/Video */}
                    <div className="relative">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover scale-105"
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                />

                                {image.videoTrigger && (
                                    <button
                                        onClick={onVideoClick}
                                        className="absolute inset-0 flex items-center justify-center bg-slate-900/20 hover:bg-slate-900/30 transition-colors group"
                                    >
                                        <div className="min-w-11 min-h-11 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-slate-800 ml-1" />
                                        </div>
                                    </button>
                                )}
                            </div>

                            <p className={`mt-5 text-center text-${BrandPalette.text.muted}`}>
                                Your donation makes a direct impact
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
