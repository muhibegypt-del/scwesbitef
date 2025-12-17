'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { StatusIndicator } from '../ui/StatusIndicator';

// --- TYPES ---
type DonationType = 'one-time' | 'monthly';

interface DonationAmount {
  amount: number;
  description: string;
}

// --- CONSTANTS ---
const DONATION_AMOUNTS: DonationAmount[] = [
  { amount: 25, description: 'School supplies for one child' },
  { amount: 50, description: 'Clean water access for a family' },
  { amount: 100, description: 'Medical supplies for a village' },
  { amount: 250, description: 'Full education sponsorship' },
];

export function Hero() {
  const [donationType, setDonationType] = useState<DonationType>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section className="relative w-full min-h-[95vh] bg-gray-50 overflow-hidden flex flex-col justify-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        
        {/* 1. Reliable Image Source (Unsplash ID) */}
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
          alt="Charity Impact"
          className="w-full h-full object-cover object-center opacity-100" 
        />
        
        {/* 2. Premium Dot Pattern Overlay (Adds texture so it's never plain) */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: 'radial-gradient(#264245 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* 3. Gradient Map: Adjusted for visibility */}
        {/* Mobile: Heavier white fade from top so text is readable */}
        {/* Desktop: Fade from left to right */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/40 sm:bg-gradient-to-r sm:from-[#f0f5f5] sm:via-[#f0f5f5]/90 sm:to-[#f0f5f5]/20" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: Typography --- */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary-light/80 text-brand-primary-dark text-[11px] font-geist font-bold tracking-widest uppercase mb-6 border border-brand-primary-light/50 backdrop-blur-md shadow-sm">
                <StatusIndicator status="urgent" size="md" />
                Urgent Appeal
              </div>

              {/* HEADING */}
              <DisplayHeading className="font-geist text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-primary-darker tracking-tighter drop-shadow-sm">
                Help children in Kenya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive-700 to-teal-700">
                  build the future.
                </span>
              </DisplayHeading>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >
              <BodyText className="font-sans text-xl leading-relaxed text-brand-primary-dark/90 font-medium">
                Your contribution provides essential education, clean water, and healthcare. 
                Join a community dedicated to lasting change.
              </BodyText>
            </motion.div>

            {/* Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 pt-4 border-t border-teal-900/10"
            >
              <div className="flex items-center gap-3 group">
                <Shield className="w-5 h-5 text-olive-600" />
                <div className="text-sm font-geist">
                  <p className="font-bold text-brand-primary-darker">100% Secure</p>
                  <p className="text-brand-primary-dark/70 font-sans">Verified Charity</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Users className="w-5 h-5 text-olive-600" />
                <div className="text-sm font-geist">
                  <p className="font-bold text-brand-primary-darker">Community Led</p>
                  <p className="text-brand-primary-dark/70 font-sans">Direct Impact</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: The Card --- */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-teal-900/5 border border-white/60 p-6 sm:p-8 relative overflow-hidden">
              
              <div className="mb-8 text-center space-y-1">
                <h3 className="text-2xl font-geist font-bold text-brand-primary-darker tracking-tight">Make a Difference</h3>
                <p className="text-brand-primary/80 text-sm font-sans">Choose an amount to donate</p>
              </div>

              {/* Toggle */}
              <div className="flex p-1 bg-brand-primary-lightest/80 rounded-lg mb-6 border border-brand-primary-light/50">
                {(['one-time', 'monthly'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className={`
                      flex-1 py-2 text-sm font-geist font-semibold rounded-md transition-all duration-300 capitalize
                      ${donationType === type
                        ? 'bg-white text-brand-primary-dark shadow-sm ring-1 ring-black/5'
                        : 'text-brand-primary/70 hover:text-brand-primary-dark'}
                    `}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Amount Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {DONATION_AMOUNTS.map((item) => {
                  const isSelected = selectedAmount === item.amount;
                  return (
                    <button
                      key={item.amount}
                      onClick={() => { setSelectedAmount(item.amount); setCustomAmount(''); }}
                      className={`
                        relative py-4 px-4 rounded-xl border text-center transition-all duration-200
                        ${isSelected 
                          ? 'border-olive-500 bg-olive-50/50 text-brand-primary-dark ring-1 ring-olive-500/20' 
                          : 'border-brand-primary-light bg-white hover:border-olive-300 hover:bg-olive-50/30 text-brand-primary-dark'}
                      `}
                    >
                      <span className="font-geist font-bold text-xl tracking-tight">${item.amount}</span>
                      {isSelected && (
                        <motion.div layoutId="check" className="absolute top-2 right-2 text-olive-600">
                          <Check className="w-3 h-3" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Custom Input */}
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary font-geist font-bold text-lg">$</span>
                <input 
                  type="number"
                  placeholder="Other amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full bg-white border border-brand-primary-light rounded-xl py-3.5 pl-8 pr-4 text-brand-primary-dark placeholder:text-brand-primary/70 focus:outline-none focus:border-olive-500 focus:ring-4 focus:ring-olive-500/10 transition-all font-geist font-medium"
                />
              </div>

              {/* Impact Message */}
              <div className="min-h-[28px] mb-6">
                 <AnimatePresence mode="wait">
                  {selectedAmount && !customAmount && (
                    <motion.div
                      key="impact"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-center"
                    >
                      <span className="text-xs font-bold text-olive-700 bg-olive-100/50 py-1.5 px-3 rounded-md border border-olive-200/50 font-geist">
                         Your ${selectedAmount} provides: <span className="font-normal font-sans text-olive-800">{DONATION_AMOUNTS.find(d => d.amount === selectedAmount)?.description}</span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Main Button */}
              <button className="w-full bg-brand-primary-darker hover:bg-brand-primary-dark text-white font-geist font-bold py-4 rounded-xl shadow-lg shadow-brand-primary-darker/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
                <Heart className="w-4 h-4 text-olive-300 fill-olive-300 group-hover:scale-110 transition-transform" />
                <span>Donate {donationType === 'monthly' ? 'Monthly' : 'Now'}</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 text-center">
                 <p className="text-[10px] text-brand-primary/80 uppercase tracking-widest flex items-center justify-center gap-2 font-geist font-semibold">
                    <Shield className="w-3 h-3" /> Secure Payment
                 </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}