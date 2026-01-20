import { cn } from '../../lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /** Forces card to stretch full height in flex/grid containers */
    stretch?: boolean;
}

const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

function CardRoot({
    children,
    className,
    padding = 'md',
    stretch = true
}: CardProps) {
    return (
        <div className={cn(
            'bg-white rounded-xl shadow-sm ring-1 ring-gray-900/5',
            'transition-shadow duration-300 hover:shadow-md',
            paddingClasses[padding],
            stretch && 'flex flex-col h-full',
            className
        )}>
            {children}
        </div>
    );
}

// Sub-components for structured cards
function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn('mb-4', className)}>{children}</div>;
}

function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn('flex-grow', className)}>{children}</div>;
}

function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn('mt-auto pt-4', className)}>{children}</div>;
}

export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});
