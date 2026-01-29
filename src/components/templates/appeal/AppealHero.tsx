import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/FadeIn';
import { BrandPalette } from './types';

interface AppealHeroProps {
    title: string;
    subtitle: string;
    image: string;
    ctaLink: string;
    ctaText?: string;
    backLink?: string;
    backText?: string;
}

export function AppealHero({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText = "Donate Now",
    backLink = "/",
    backText = "Back to Home"
}: AppealHeroProps) {
    return (
        <section className="relative min-h-[85vh] lg:min-h-screen grid lg:grid-cols-2">
            {/* Left Panel - Content */}
            <div className={`bg-${BrandPalette.background.slate} flex items-center py-24 lg:py-32 px-8 lg:px-16 order-2 lg:order-1`}>
                <div className="max-w-xl">
                    <FadeIn delay={0.1} direction="down">
                        {/* Back Link */}
                        <Button variant="ghost" className={`mb-8 pl-0 hover:bg-transparent hover:text-${BrandPalette.text.main} text-${BrandPalette.text.muted} gap-2`} asChild>
                            <Link to={backLink}>
                                <ArrowLeft size={16} />
                                {backText}
                            </Link>
                        </Button>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        {/* Headline */}
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-${BrandPalette.text.main} tracking-tight mb-6`}>
                            {title}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        {/* Body text */}
                        <p className={`text-lg text-${BrandPalette.text.muted} leading-relaxed mb-8`}>
                            {subtitle}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        {/* CTA */}
                        <Button
                            asChild
                            size="lg"
                            className={`rounded-full bg-${BrandPalette.primary.DEFAULT} hover:bg-${BrandPalette.primary.hover} text-white h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="gap-3">
                                <Heart className="h-5 w-5" />
                                {ctaText}
                            </a>
                        </Button>
                    </FadeIn>
                </div>
            </div>

            {/* Right Panel - Image */}
            <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                <FadeIn className="h-full w-full" duration={1} direction="none">
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                        // @ts-ignore
                        fetchPriority="high"
                        loading="eager"
                    />
                </FadeIn>
            </div>
        </section>
    );
}
