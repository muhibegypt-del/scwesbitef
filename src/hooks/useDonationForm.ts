import { useState, useCallback } from 'react';
import type { DonationType } from '../types';

interface UseDonationFormProps {
  defaultAmount?: number;
  defaultType?: DonationType;
}

export function useDonationForm({ 
  defaultAmount = 50, 
  defaultType = 'one-time' 
}: UseDonationFormProps = {}) {
  const [donationType, setDonationType] = useState<DonationType>(defaultType);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(defaultAmount);
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAmountChange = useCallback((value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  }, []);

  const handleAmountSelect = useCallback((amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  }, []);

  const getCurrentAmount = useCallback(() => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  }, [customAmount, selectedAmount]);

  const resetForm = useCallback(() => {
    setDonationType(defaultType);
    setSelectedAmount(defaultAmount);
    setCustomAmount('');
  }, [defaultAmount, defaultType]);

  return {
    donationType,
    setDonationType,
    selectedAmount,
    setSelectedAmount,
    customAmount,
    setCustomAmount,
    handleCustomAmountChange,
    handleAmountSelect,
    getCurrentAmount,
    resetForm,
  };
}