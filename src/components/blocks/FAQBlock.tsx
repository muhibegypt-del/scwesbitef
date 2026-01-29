import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { SectionHeading, TypographyTheme } from '../ui/Typography';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQBlockProps {
    title?: string;
    items: FAQItem[];
    theme?: TypographyTheme;
    className?: string;
}

const themeStyles: Record<TypographyTheme, { border: string; hoverBg: string; icon: string }> = {
    default: {
        border: 'border-teal-100',
        hoverBg: 'hover:bg-teal-50/50',
        icon: 'text-teal-600',
    },
    blue: {
        border: 'border-teal-100',
        hoverBg: 'hover:bg-teal-50/50',
        icon: 'text-teal-600',
    },
    rose: {
        border: 'border-rose-100',
        hoverBg: 'hover:bg-rose-50/50',
        icon: 'text-rose-600',
    },
    amber: {
        border: 'border-amber-100',
        hoverBg: 'hover:bg-amber-50/50',
        icon: 'text-amber-600',
    },
};

function FAQAccordionItem({
    item,
    isOpen,
    onToggle,
    theme
}: {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
    theme: TypographyTheme;
}) {
    const styles = themeStyles[theme];

    return (
        <div className={cn('border-b', styles.border)}>
            <button
                onClick={onToggle}
                className={cn(
                    'w-full flex items-center justify-between py-5 px-1 text-left transition-colors min-h-14',
                    `lg:${styles.hoverBg}` // Only apply hover background on desktop
                )}
                aria-expanded={isOpen}
            >
                <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                </span>
                <ChevronDown
                    className={cn(
                        'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                        styles.icon,
                        isOpen && 'rotate-180'
                    )}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 px-1 text-gray-600 leading-relaxed">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}

export function FAQBlock({
    title = 'Frequently Asked Questions',
    items,
    theme = 'default',
    className
}: FAQBlockProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={cn('py-16 lg:py-24 bg-white', className)}>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeading theme={theme} className="mb-12">
                    {title}
                </SectionHeading>

                {/* Accordion */}
                <div className={cn('border-t', themeStyles[theme].border)}>
                    {items.map((item, index) => (
                        <FAQAccordionItem
                            key={item.question}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
