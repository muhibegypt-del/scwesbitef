import { useState, useEffect, useCallback } from 'react';
import { ANIMATION } from '../constants';

interface UseOptimizedScrollOptions {
  threshold?: number;
  passive?: boolean;
}

export function useOptimizedScroll({ 
  threshold = 10, 
  passive = true 
}: UseOptimizedScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > threshold;
    setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
  }, [threshold]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, ANIMATION.SCROLL_DEBOUNCE_MS);
    };

    window.addEventListener('scroll', debouncedScroll, { passive });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll, passive]);

  return isScrolled;
}