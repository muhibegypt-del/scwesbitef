import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MailerLiteFundraiserEmbed } from '../components/forms/MailerLiteFundraiserEmbed';

export function Fundraise() {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 lg:pt-24 pb-20 typography-enhanced">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-8 transition-colors">
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Home
                </Link>

                <div className="text-center mb-12">
                    <h1 className="section-title mb-4">Start a Fundraiser</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether it's building a school, providing food, supporting orphanages, or bringing clean water to a village, your fundraising can make a real difference. Campaign with friends, host an event, or dedicate a special occasion - there's no limit to what you can achieve. Fill out the form below to tell us about your ideas and we'll help guide you on how to get started!
                    </p>
                </div>

                <MailerLiteFundraiserEmbed />
            </div>
        </div>
    );
}
