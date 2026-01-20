'use client';

import { motion } from 'framer-motion';

const MARQUEE_ITEMS = [
    'Support our Ramadan Appeal',
    'Clean water changes lives',
    'Education is the key to the future',
    'Support our Ramadan Appeal',
    'Clean water changes lives',
    'Education is the key to the future',
];

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
        <path
            d="M16.8125 5.75C17.332 5.75 17.75 6.168 17.75 6.688V16.063C17.75 16.582 17.332 17 16.813 17C16.293 17 15.875 16.582 15.875 16.063V8.95L6.852 17.977C6.484 18.344 5.891 18.344 5.528 17.977C5.164 17.609 5.16 17.016 5.528 16.652L14.551 7.629L7.438 7.625C6.918 7.625 6.5 7.207 6.5 6.688C6.5 6.168 6.918 5.75 7.438 5.75H16.813Z"
            fill="currentColor"
        />
    </svg>
);

export function Marquee() {
    return (
        <div className="bg-teal-800 text-white py-2 overflow-hidden">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 20,
                        ease: 'linear',
                    },
                }}
            >
                {MARQUEE_ITEMS.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mx-8">
                        <p className="text-sm font-medium">{item}</p>
                        <span className="text-teal-300">
                            <ArrowIcon />
                        </span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {MARQUEE_ITEMS.map((item, index) => (
                    <div key={`dup-${index}`} className="flex items-center gap-3 mx-8">
                        <p className="text-sm font-medium">{item}</p>
                        <span className="text-teal-300">
                            <ArrowIcon />
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
