import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function Leadership() {
    return (
        <div className="min-h-screen bg-white pt-20 lg:pt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-8 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Home
                </a>
                <h1 className="text-4xl lg:text-5xl font-bold font-geist text-brand-primary-darker mb-4">Leadership</h1>
                <p className="text-xl text-gray-600 mb-16 max-w-2xl">
                    Meet the team dedicated to driving our mission forward.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                    Photo {i}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Team Member Name</h3>
                            <p className="text-teal-600 font-medium mb-2">Position Title</p>
                            <p className="text-gray-500 text-sm">Brief bio description goes here. Dedicated to service and community impact.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
