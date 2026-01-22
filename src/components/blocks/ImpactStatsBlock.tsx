import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';
import { TypographyTheme } from '../ui/Typography';

interface Stat {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
}

interface ImpactStatsBlockProps {
    stats: Stat[];
    theme?: TypographyTheme;
    className?: string;
}

const themeStyles: Record<TypographyTheme, { accent: string; bg: string; border: string }> = {
    default: {
        accent: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
    },
    blue: {
        accent: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
    },
    rose: {
        accent: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
    },
    amber: {
        accent: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
    },
};

function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        const duration = 1500;
        const startTime = performance.now();
        const startValue = 0;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startValue + (value - startValue) * eased);

            setDisplayValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}

export function ImpactStatsBlock({ stats, theme = 'default', className }: ImpactStatsBlockProps) {
    const styles = themeStyles[theme];

    return (
        <section className={cn('py-16 lg:py-20', styles.bg, className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={cn(
                    'grid gap-8',
                    'grid-cols-1', // Default: Mobile (0-639px)
                    stats.length === 3
                        ? 'sm:grid-cols-3' // Tablet+
                        : 'sm:grid-cols-2 lg:grid-cols-4' // Tablet+ and Desktop
                )}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className={cn('text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight', styles.accent)}>
                                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div className="mt-2 text-sm sm:text-base font-medium text-gray-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
