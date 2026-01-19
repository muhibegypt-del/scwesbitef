'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SmoothScrollingProps {
  children: ReactNode;
}

export function SmoothScrolling({ children }: SmoothScrollingProps) {
  const prefersReducedMotion = useReducedMotion();

  // Disable smooth scrolling for users who prefer reduced motion
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 0.8, // Reduced for better performance
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false, // Disable on mobile for better native feel
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}