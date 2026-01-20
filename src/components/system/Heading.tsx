import { cn } from '../../lib/utils';
import { HEADING_STYLES } from '../../lib/design-tokens';

type HeadingLevel = 1 | 2 | 3 | 4;
type Alignment = 'left' | 'center' | 'right';

interface HeadingProps {
    level: HeadingLevel;
    children: React.ReactNode;
    align?: Alignment;
    className?: string;
    /** Remove max-width constraint (for hero headlines) */
    fluid?: boolean;
}

const alignClasses: Record<Alignment, string> = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
};

export function Heading({
    level,
    children,
    align = 'center',
    className,
    fluid = false
}: HeadingProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag
            className={cn(
                HEADING_STYLES[level],
                alignClasses[align],
                !fluid && level <= 2 && 'max-w-[22ch]',
                className
            )}
            style={fluid ? { maxWidth: 'none' } : undefined}
        >
            {children}
        </Tag>
    );
}
