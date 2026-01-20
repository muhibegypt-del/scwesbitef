import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { timelineData } from '../../data/timelineData';

type TimelineItemType = typeof timelineData[0];

interface TimelineModalProps {
    year: TimelineItemType;
    onClose: () => void;
}

export function TimelineModal({ year, onClose }: TimelineModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
                <div className="sticky top-0 bg-white border-b border-brand-primary-darker/10 px-8 py-6 flex items-center justify-between z-10">
                    <div>
                        <h2 className="text-3xl font-geist font-bold text-brand-primary-darker">{year.year}</h2>
                        <p className="text-brand-primary font-medium">{year.title}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-brand-primary-lightest transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 text-brand-primary-dark" />
                    </button>
                </div>

                <div className="p-8">
                    {year.photos.length > 0 && (
                        <div className={`grid ${year.photos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-8`}>
                            {year.photos.map((photo, index) => (
                                <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                                    <img
                                        src={photo}
                                        alt={`${year.title} - Photo ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-brand-primary-dark/80 leading-relaxed">
                            {year.detailedCopy}
                        </p>
                    </div>

                    {year.status === 'current' && (
                        <div className="mt-8 bg-olive-50 rounded-xl p-6 border border-olive-200">
                            <h3 className="font-geist font-bold text-brand-primary-darker mb-3">Current Status</h3>
                            <p className="text-brand-primary-dark/80">
                                This is our current active phase. Follow our progress and get updates on this initiative through our newsletter.
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
