'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function FundraiserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cause: '',
        goalAmount: '',
        idea: '',
        additionalInfo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Fundraiser Form Data:', formData);
        // Handle submission logic here (e.g., API call)
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold font-geist text-brand-primary-dark mb-2">Start a Fundraiser</h2>
            <p className="text-gray-600 mb-8">Tell us about your campaign idea and we'll help you get started.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="cause" className="text-sm font-bold text-gray-700">What are you fundraising for?</label>
                    <select
                        id="cause"
                        name="cause"
                        required
                        value={formData.cause}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    >
                        <option value="">Select a cause...</option>
                        <option value="Water Well">Build a Water Well</option>
                        <option value="Orphan Care">Orphan & Widow Care</option>
                        <option value="Food Relief">Food Relief</option>
                        <option value="Education">Support Education</option>
                        <option value="General">General/Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="goalAmount" className="text-sm font-bold text-gray-700">Goal Amount ($)</label>
                    <input
                        type="number"
                        id="goalAmount"
                        name="goalAmount"
                        required
                        value={formData.goalAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="e.g. 5000"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="idea" className="text-sm font-bold text-gray-700">Fundraiser Idea</label>
                    <textarea
                        id="idea"
                        name="idea"
                        required
                        value={formData.idea}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                        placeholder="Describe your fundraising idea (e.g. Marathon, Bake Sale, Birthday Fundraiser...)"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="additionalInfo" className="text-sm font-bold text-gray-700">Anything else?</label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                        placeholder="Any questions or special requests?"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2"
                >
                    <Send size={18} />
                    Submit Request
                </motion.button>
            </form>
        </div>
    );
}
