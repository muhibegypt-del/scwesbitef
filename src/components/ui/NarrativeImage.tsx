'use client';

import { useEffect, useRef, useState } from 'react';

interface NarrativeImageProps {
    src: string;
    alt: string;
    /** Layout variant: 'hero' (full-width), 'inline' (text-beside), 'feature' (card-style) */
    variant?: 'hero' | 'inline' | 'feature';
    /** Optional caption displayed below the image */
    caption?: string;
    /** Image position for 'inline' variant */
    position?: 'left' | 'right';
    /** Additional className */
    className?: string;
}

/**
 * NarrativeImage - Design System Component
 * 
 * Displays images in a narrative, scroll-triggered layout.
 * - Fades in smoothly when scrolled into view
 * - Three variants: hero, inline (with text), feature (card)
 * - Consistent styling across all pages
 */
export function NarrativeImage({
    src,
    alt,
    variant = 'feature',
    caption,
    position = 'left',
    className = '',
}: NarrativeImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const baseImageStyles = `
    w-full h-full object-cover transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}
  `;

    // Hero: Full-width, tall
    if (variant === 'hero') {
        return (
            <div
                ref={ref}
                className={`relative w-full aspect-[21/9] overflow-hidden rounded-xl shadow-xl ${className}`}
            >
                <img src={src} alt={alt} className={baseImageStyles} loading="lazy" />
                {caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <p className="text-white text-sm font-medium">{caption}</p>
                    </div>
                )}
            </div>
        );
    }

    // Inline: Text beside image
    if (variant === 'inline') {
        return (
            <div
                ref={ref}
                className={`flex flex-col ${position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center ${className}`}
            >
                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                    <img src={src} alt={alt} className={baseImageStyles} loading="lazy" />
                </div>
                {caption && (
                    <div className="w-full md:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed">{caption}</p>
                    </div>
                )}
            </div>
        );
    }

    // Feature: Card-style (default)
    return (
        <div
            ref={ref}
            className={`relative overflow-hidden rounded-xl shadow-lg bg-gray-100 ${className}`}
        >
            <div className="aspect-[4/3]">
                <img src={src} alt={alt} className={baseImageStyles} loading="lazy" />
            </div>
            {caption && (
                <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600 font-medium">{caption}</p>
                </div>
            )}
        </div>
    );
}
