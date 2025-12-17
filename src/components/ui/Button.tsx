import { motion, type Variants } from 'framer-motion';
import { cn } from '../../lib/utils';
import type { ButtonProps } from '../../types';

// Physics-based spring configuration
const buttonVariants: Variants = {
  hover: { 
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
  tap: { 
    scale: 0.98,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
};

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  onClick,
  href,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-green-light text-white hover:bg-green-moss focus-visible:ring-green-light shadow-sm",
    secondary: "bg-teal-deep text-white hover:bg-green-moss focus-visible:ring-teal-deep",
    outline: "border border-green-moss/30 text-green-moss hover:bg-green-moss hover:text-white focus-visible:ring-green-moss"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg h-8",
    md: "px-6 py-3 text-sm rounded-lg h-10",
    lg: "px-8 py-4 text-base rounded-lg h-12"
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        variants={buttonVariants}
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      variants={buttonVariants}
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
    >
      {children}
    </motion.button>
  );
}