import { cn } from '../../lib/utils';

type TextSize = 'sm' | 'base' | 'lg' | 'xl';
type TextColor = 'default' | 'muted' | 'white' | 'inherit';

interface TextProps {
    children: React.ReactNode;
    size?: TextSize;
    color?: TextColor;
    className?: string;
    as?: 'p' | 'span' | 'div';
}

const sizeClasses: Record<TextSize, string> = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};

const colorClasses: Record<TextColor, string> = {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    white: 'text-white',
    inherit: '',
};

export function Text({
    children,
    size = 'base',
    color = 'default',
    className,
    as: Tag = 'p'
}: TextProps) {
    return (
        <Tag className={cn(
            sizeClasses[size],
            colorClasses[color],
            'leading-relaxed',
            className
        )}>
            {children}
        </Tag>
    );
}
