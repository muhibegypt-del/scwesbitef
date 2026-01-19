import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Purpose() {
    return (
        <div className="min-h-screen bg-white pt-20 lg:pt-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-8 transition-colors">
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Home
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold font-geist text-brand-primary-darker mb-8">Our Purpose</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    Details about the organization's purpose, mission, and vision will go here.
                    We are dedicated to empowering communities and transforming lives through sustainable development and compassionate action.
                </p>

                {/* Placeholder for more content */}
                <div className="h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                    Content Placeholder
                </div>
            </div>
        </div>
    );
}
