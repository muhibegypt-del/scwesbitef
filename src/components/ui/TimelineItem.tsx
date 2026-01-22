import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { BodyText } from '../ui/Typography';
import type { timelineData } from '../../data/timelineData';

type TimelineItemType = typeof timelineData[0];

interface TimelineItemProps {
    item: TimelineItemType;
    index: number;
    onClick: () => void;
}

export function TimelineItem({ item, index, onClick }: TimelineItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });
    const isFuture = item.status === 'future';
    const isCurrent = item.status === 'current';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={onClick}
            className={`relative pl-12 sm:pl-16 group cursor-pointer ${isFuture ? 'opacity-60 grayscale' : 'opacity-100'}`}
        >

            {/* 5. THE NODE: Custom markers based on status */}
            <div className="absolute left-0 top-1 -translate-x-1/2 z-raised flex flex-col items-center">
                <motion.div
                    animate={{
                        scale: isInView ? 1.2 : 1,
                    }}
                    className={`
            relative w-4 h-4 rounded-full border-2 flex items-center justify-center bg-white transition-colors duration-500
            ${isCurrent ? 'border-olive-500 shadow-[0_0_0_4px_rgba(132,204,22,0.2)]' :
                            isInView ? 'border-brand-primary shadow-sm' : 'border-gray-200'}
          `}
                >
                    {item.status === 'completed' && isInView && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-brand-primary rounded-full" />
                    )}
                    {isCurrent && (
                        <span className="absolute inline-flex h-full w-full rounded-full bg-olive-500 opacity-20 animate-ping" />
                    )}
                </motion.div>
            </div>

            {/* Content Block */}
            <div className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-80'}`
            }>

                {/* Header Row */}
                < div className="flex flex-wrap items-baseline gap-3 mb-2" >
                    <span className={`font-geist font-bold text-xl tracking-tight transition-colors ${isInView ? 'text-brand-primary-darker group-hover:text-olive-600' : 'text-gray-400 group-hover:text-brand-primary'}`}>
                        {item.year}
                    </span>

                    {
                        isCurrent && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-olive-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-olive-700 border border-olive-100">
                                Current Phase
                            </span>
                        )
                    }
                </div >

                <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 ${isInView ? 'text-brand-primary-dark' : 'text-gray-600'}`}>
                    {item.title}
                </h3>

                <BodyText className={`text-sm sm:text-base transition-colors duration-300 ${isInView ? 'text-brand-primary-dark/80' : 'text-gray-500'}`}>
                    {item.description}
                </BodyText>

                {
                    isCurrent && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4"
                        >
                            <button className="inline-flex items-center gap-2 text-sm font-bold text-olive-600 hover:text-olive-700 hover:underline decoration-2 underline-offset-4 transition-all py-2">
                                View Report <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    )
                }
            </div >
        </motion.div >
    );
}
