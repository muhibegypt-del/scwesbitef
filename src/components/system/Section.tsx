import { cn } from '../../lib/utils';
import { Z_INDEX } from '../../lib/design-tokens';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    background?: 'white' | 'gray' | 'dark';
    padding?: 'sm' | 'md' | 'lg';
    /** Z-index layer from design tokens */
    layer?: keyof typeof Z_INDEX;
    /** Full width without container constraint */
    fullWidth?: boolean;
}

const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-[#264144]',
};

const paddingClasses = {
    sm: 'py-12 lg:py-16',
    md: 'py-20 lg:py-28',
    lg: 'py-24 lg:py-32',
};

export function Section({
    children,
    id,
    className,
    background = 'white',
    padding = 'md',
    layer,
    fullWidth = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                bgClasses[background],
                paddingClasses[padding],
                'relative',
                className
            )}
            style={layer ? { zIndex: Z_INDEX[layer] } : undefined}
        >
            {fullWidth ? (
                children
            ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            )}
        </section>
    );
}
