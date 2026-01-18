import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { FundraiserForm } from '../components/forms/FundraiserForm';

export function Fundraise() {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 lg:pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-8 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Home
                </a>

                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold font-geist text-brand-primary-dark mb-4">Become an Ambassador</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Use your voice and network to amplify our impact. Start your own campaign today.
                    </p>
                </div>

                <FundraiserForm />
            </div>
        </div>
    );
}
