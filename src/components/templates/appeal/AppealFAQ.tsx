import { FadeIn } from '@/components/ui/FadeIn';
import { Card } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { BrandPalette } from './types';

interface AppealFAQProps {
    title?: string;
    items: Array<{
        question: string;
        answer: string;
    }>;
}

export function AppealFAQ({ title = "Frequently Asked Questions", items }: AppealFAQProps) {
    return (
        <section className={`py-20 lg:py-28 bg-${BrandPalette.background.white}`}>
            <div className="mx-auto max-w-3xl px-8 lg:px-12">
                <FadeIn>
                    <h2 className={`text-3xl sm:text-4xl font-bold text-${BrandPalette.text.main} text-center mb-12`}>
                        {title}
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <Card className={`bg-${BrandPalette.background.card} border-none shadow-xl p-5 sm:p-8 lg:p-10`}>
                        <Accordion type="single" collapsible className="w-full">
                            {items.map((item, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b-slate-200">
                                    <AccordionTrigger className={`text-base font-medium text-slate-800 hover:text-${BrandPalette.primary.hover} hover:no-underline py-5 text-left min-h-[44px]`}>
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className={`text-${BrandPalette.text.muted} leading-relaxed text-base`}>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Card>
                </FadeIn>
            </div>
        </section>
    );
}
