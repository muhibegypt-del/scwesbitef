'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export function MagneticButton({ 
  children, 
  className, 
  variant = 'outline',
  onClick 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative px-8 py-3 rounded-full font-lato font-medium transition-all duration-300 cursor-pointer overflow-hidden";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-ambient",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-ambient",
    outline: "border border-primary/30 text-primary hover:bg-primary hover:text-white backdrop-blur-xs"
  };

  return (
    <motion.button
      ref={ref}
      className={cn(baseClasses, variantClasses[variant], className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.span
        className="relative z-10"
        animate={{
          x: -position.x * 0.5,
          y: -position.y * 0.5,
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}