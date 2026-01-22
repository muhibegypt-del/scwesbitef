import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    external?: boolean;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
    icon?: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-5 py-3 text-sm min-h-[44px]',
    lg: 'px-8 py-4 text-base min-h-[60px]',
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-soft hover:shadow-elevated',
    secondary: 'bg-white text-brand-primary border-2 border-brand-primary hover:bg-brand-primary-lightest',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary-lightest',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-brand-primary',
};

const baseClasses = `
  inline-flex items-center justify-center gap-2 
  font-semibold rounded-full 
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500
  disabled:opacity-50 disabled:cursor-not-allowed
`;

export function Button({
    children,
    variant = 'secondary',
    size = 'md',
    href,
    external,
    className,
    disabled,
    onClick,
    type = 'button',
    icon,
}: ButtonProps) {
    const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

    // External link
    if (href && external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                {children}
                {icon}
            </a>
        );
    }

    // Internal link
    if (href) {
        return (
            <Link to={href} className={classes}>
                {children}
                {icon}
            </Link>
        );
    }

    // Button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
            {icon}
        </button>
    );
}
