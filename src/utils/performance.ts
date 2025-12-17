// Performance utilities for optimizing React components

export const isMobile = () => window.innerWidth < 768;

export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || isMobile();
};

export const getOptimizedAnimationConfig = () => {
  if (shouldReduceMotion()) {
    return {
      type: "tween" as const,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    };
  }
  
  return {
    type: "spring" as const,
    stiffness: 100,
    damping: 20
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Optimized scroll handler with RAF
export const createScrollHandler = (callback: () => void) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};
// Intersection Observer with performance optimizations
export const createOptimizedObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async (images: string[]) => {
  const promises = images.map(preloadImage);
  try {
    await Promise.all(promises);
    console.log('Critical images preloaded');
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};