import { FadeIn } from '@/components/ui/FadeIn';

interface AppealCinematicStoryProps {
    background: string;
    personName: string;
    story: React.ReactNode;
    quote: string;
    personImage: string;
    personImageAlt: string;
}

export function AppealCinematicStory({
    background,
    personName,
    story,
    quote,
    personImage,
    personImageAlt
}: AppealCinematicStoryProps) {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Immersive Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${background})` }}
            />
            {/* Dark overlay for text readability - FIXED: hardcoded class */}
            <div className="absolute inset-0 bg-slate-900/90" />

            <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left - Story Text */}
                    <div className="order-1">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-12 bg-teal-600/50"></span>
                                <span className="text-teal-400 font-medium tracking-widest uppercase text-sm">Real Impact</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                                {personName}
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="space-y-6 text-lg text-zinc-200/90 leading-relaxed">
                                {story}

                                <blockquote className="mt-8 border-l-4 border-teal-600 pl-6 py-2">
                                    <p className="text-teal-400 font-serif italic text-2xl leading-relaxed">
                                        "{quote}"
                                    </p>
                                </blockquote>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right - Floating Card Image */}
                    <div className="order-2 perspective-1000">
                        <FadeIn direction="left" delay={0.3} duration={1.2}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-700 rounded-[2.6rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700 ease-out border-4 border-white/10">
                                    <img
                                        src={personImage}
                                        alt={personImageAlt}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                    />

                                    {/* Subtle inner gloss */}
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
