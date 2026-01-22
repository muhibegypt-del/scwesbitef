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
    sm: 'px-4 py-2 text-sm min-h-[44px]', // Mobile-first: ALWAYS 44px minimum for touch
    md: 'px-6 py-3 text-base min-h-[44px] md:min-h-[48px]', // Scale up slightly on desktop
    lg: 'px-8 py-5 text-lg min-h-[56px] md:min-h-[64px]',
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elevated',
    secondary: 'bg-background text-primary border-2 border-primary hover:bg-accent hover:border-primary/80',
    outline: 'border-2 border-primary text-primary hover:bg-accent',
    ghost: 'text-muted-foreground hover:bg-accent hover:text-foreground',
};

const baseClasses = `
  inline-flex items-center justify-center gap-2 
  font-semibold rounded-xl
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
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
