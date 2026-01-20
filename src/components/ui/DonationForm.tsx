import { motion } from 'framer-motion';
import { Heart, Shield, CheckCircle2 } from 'lucide-react';
import { useDonationForm } from '../../hooks/useDonationForm';
import { ANIMATION } from '../../constants';
import type { DonationAmount } from '../../types';

interface DonationFormProps {
  title: string;
  subtitle: string;
  amounts: readonly DonationAmount[] | DonationAmount[];
  defaultAmount?: number;
  defaultType?: 'one-time' | 'monthly';
  onSubmit?: (data: { amount: number; type: 'one-time' | 'monthly' }) => void;
}

export function DonationForm({
  title,
  subtitle,
  amounts,
  defaultAmount = 50,
  defaultType = 'one-time',
  onSubmit
}: DonationFormProps) {
  const {
    donationType,
    setDonationType,
    selectedAmount,
    customAmount,
    handleCustomAmountChange,
    handleAmountSelect,
    getCurrentAmount
  } = useDonationForm({ defaultAmount, defaultType });

  const handleSubmit = () => {
    const amount = getCurrentAmount();
    if (amount && amount > 0) {
      onSubmit?.({ amount, type: donationType });
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-sage-500/10 blur-3xl rounded-full" />

      <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-xl ring-1 ring-gray-900/5 lg:p-8">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-serif font-semibold text-brand-primary-dark">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>

        <fieldset className="relative mb-8 flex rounded-xl bg-gray-100 p-1">
          <legend className="sr-only">Donation Frequency</legend>
          {(['one-time', 'monthly'] as const).map((type) => (
            <label key={type} className="relative z-10 flex-1 cursor-pointer">
              <input
                type="radio"
                name="donation-type"
                value={type}
                checked={donationType === type}
                onChange={() => setDonationType(type)}
                className="sr-only"
              />
              <span className={`block py-3 text-center text-sm font-semibold capitalize transition-colors ${donationType === type ? 'text-brand-primary-dark' : 'text-gray-500 hover:text-brand-primary'
                }`}>
                {donationType === type && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5"
                    transition={ANIMATION.SPRING_CONFIG}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </span>
            </label>
          ))}
        </fieldset>

        <fieldset className="mb-6 grid grid-cols-2 gap-3">
          <legend className="sr-only">Select Donation Amount</legend>
          {amounts.map((item) => {
            const isSelected = selectedAmount === item.amount;
            return (
              <label
                key={item.amount}
                className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${isSelected
                  ? 'border-brand-primary bg-brand-primary-lightest text-brand-primary-dark ring-1 ring-brand-primary'
                  : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-brand-primary-light hover:bg-white'
                  }`}
              >
                <input
                  type="radio"
                  name="donation-amount"
                  value={item.amount}
                  checked={isSelected}
                  onChange={() => handleAmountSelect(item.amount)}
                  className="sr-only"
                />
                <div className="text-lg font-bold">${item.amount}</div>
                {isSelected && (
                  <div className="absolute right-2 top-2 text-brand-primary">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                )}
              </label>
            );
          })}
        </fieldset>

        <div className="mb-6 flex min-h-10 items-center justify-center" aria-live="polite">
          {/* Impact description removed as per request */}
        </div>

        <div className="relative mb-6">
          <label htmlFor="custom-amount" className="sr-only">Custom Amount</label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="text-lg text-gray-400 font-medium">$</span>
          </div>
          <input
            id="custom-amount"
            type="number"
            min="1"
            placeholder="Custom amount"
            className="block w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-4 pl-10 pr-4 text-gray-900 font-medium placeholder:text-gray-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
          />
        </div>

        <motion.button
          type="button"
          onClick={handleSubmit}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary py-4 text-base font-bold text-white shadow-lg shadow-brand-primary/20 transition-all hover:bg-brand-primary-hover"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={ANIMATION.SPRING_CONFIG}
        >
          <Heart className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:fill-current" strokeWidth={1.5} />
          Donate {donationType === 'monthly' ? 'Monthly' : 'Now'}
        </motion.button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
          <Shield className="h-3 w-3" />
          <span>Secure SSL Payment</span>
        </div>
      </div>
    </div>
  );
}
