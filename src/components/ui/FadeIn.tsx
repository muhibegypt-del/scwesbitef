'use client';

import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    viewport?: UseInViewOptions;
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.8, // Slightly faster than 0.95 for responsiveness, but still elegant
    direction = 'up',
    fullWidth = false,
    viewport = { once: true, margin: "-10%" } // Trigger a bit earlier
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const directionOffset = {
        up: { y: 24, x: 0 }, // Reduced offset for less "jumpy" movement
        down: { y: -24, x: 0 },
        left: { y: 0, x: 24 },
        right: { y: 0, x: -24 },
        none: { y: 0, x: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] // The "Apple" ease-out curve
            }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
}
