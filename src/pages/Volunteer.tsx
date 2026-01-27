import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VolunteerForm } from '../components/forms/VolunteerForm';

export function Volunteer() {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 lg:pt-24 pb-20 typography-enhanced">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-8 transition-colors">
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Home
                </Link>

                <div className="text-center mb-12">
                    <h1 className="section-title mb-4">Volunteer with Us</h1>
                    <img src="https://ik.imagekit.io/dzmabcda0/IMG_8549%20(1).JPG" alt="Volunteers in action" className="w-full max-w-2xl mx-auto rounded-lg mb-6 object-cover" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you want to help support communities, assist with programs on the ground, or contribute your skills in meaningful ways, your time can make a real difference. Volunteering with us gives you the opportunity to see your impact firsthand while working alongside local communities and other dedicated volunteers.
                    </p>
                </div>

                <VolunteerForm />
            </div>
        </div>
    );
}
