import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Heart, Shield, Users, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { useState } from 'react';

const EASE = [0.22, 1, 0.36, 1];

const donationAmounts = [
  { amount: 15, description: 'Hot meals for 5 people' },
  { amount: 30, description: 'Food pack for one family' },
  { amount: 75, description: 'Weekly food support for 10 families' },
  { amount: 150, description: 'Monthly food distribution' }
];

export function FoodReliefAppeal() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(30);
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-gray-50/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-col"
            >
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-700 mb-6 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Home
              </a>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive-200 bg-olive-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-olive-700 w-fit">
                <Clock size={12} />
                Emergency Relief
              </div>

              <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-teal-800 sm:text-5xl">
                Emergency Food Relief
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict. When hunger strikes, immediate action saves lives.
              </p>

              <div className="flex flex-col gap-3 border-l-2 border-olive-200 pl-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-olive-600" />
                  <span>Zakat eligible emergency aid</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-olive-600" />
                  <span>Immediate distribution to families in need</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-olive-500/20 to-sage-500/20 blur-2xl rounded-full opacity-50" />

              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-md lg:p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-serif font-semibold text-teal-800">Feed Families</h3>
                  <p className="text-sm text-gray-500">Provide immediate food relief</p>
                </div>

                <fieldset className="relative mb-8 flex rounded-xl bg-gray-100 p-1">
                  <legend className="sr-only">Donation Frequency</legend>
                  {(['one-time', 'monthly'] as const).map((type) => {
                    const isActive = donationType === type;
                    return (
                      <label key={type} className="relative z-10 flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="donation-type"
                          value={type}
                          checked={isActive}
                          onChange={() => setDonationType(type)}
                          className="sr-only"
                        />
                        <span className={`block py-2.5 text-center text-sm font-bold capitalize transition-colors ${
                          isActive ? 'text-teal-800' : 'text-gray-500 hover:text-teal-600'
                        }`}>
                          {isActive && (
                            <motion.div
                              layoutId="activeTabFood"
                              className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">{type}</span>
                        </span>
                      </label>
                    );
                  })}
                </fieldset>

                <fieldset className="mb-6 grid grid-cols-2 gap-3">
                  <legend className="sr-only">Select Donation Amount</legend>
                  {donationAmounts.map((item) => {
                    const isSelected = selectedAmount === item.amount;
                    return (
                      <label
                        key={item.amount}
                        className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                          isSelected
                            ? 'border-olive-500 bg-olive-50 text-olive-800 ring-1 ring-olive-500'
                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-olive-300 hover:bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="donation-amount"
                          value={item.amount}
                          checked={isSelected}
                          onChange={() => { setSelectedAmount(item.amount); setCustomAmount(''); }}
                          className="sr-only"
                        />
                        <div className="text-lg font-bold">${item.amount}</div>
                        {isSelected && (
                          <div className="absolute right-2 top-2 text-olive-600">
                            <CheckCircle2 size={16} strokeWidth={3} />
                          </div>
                        )}
                      </label>
                    );
                  })}
                </fieldset>

                <div className="mb-6 flex min-h-10 items-center justify-center" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {selectedAmount && !customAmount && (
                      <motion.div
                        key={selectedAmount}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="rounded-full bg-sage-100 px-4 py-2 text-center text-xs font-semibold text-sage-800"
                      >
                        {donationAmounts.find(d => d.amount === selectedAmount)?.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative mb-6">
                  <label htmlFor="custom-amount-food" className="sr-only">Custom Amount</label>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-lg text-gray-400 font-medium">$</span>
                  </div>
                  <input
                    id="custom-amount-food"
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    className="block w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-4 pl-10 pr-4 text-gray-900 font-medium placeholder:text-gray-400 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 focus:outline-none transition-all"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-4 text-base font-bold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700"
                >
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:fill-current" strokeWidth={1.5} />
                  Donate {donationType === 'monthly' ? 'Monthly' : 'Now'}
                </motion.button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  <Shield className="h-3 w-3" />
                  <span>Secure SSL Payment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-teal-800 mb-4">
              Emergency Food Distribution
            </h2>
            <p className="text-lg text-gray-600">
              Immediate relief for families facing hunger due to drought, conflict, or economic hardship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-olive-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-olive-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2">Hot Meals</h3>
              <p className="text-gray-600">Nutritious, ready-to-eat meals distributed daily to families in crisis.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2">Food Parcels</h3>
              <p className="text-gray-600">Monthly food packages with rice, beans, oil, and essentials for families.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2">Rapid Response</h3>
              <p className="text-gray-600">Quick deployment during emergencies to prevent malnutrition and starvation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
