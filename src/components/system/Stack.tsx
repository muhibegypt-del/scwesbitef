import { cn } from '../../lib/utils';

interface StackProps {
    children: React.ReactNode;
    gap?: 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12;
    direction?: 'vertical' | 'horizontal';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between';
    className?: string;
}

const gapClasses: Record<number, string> = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
};

const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
};

const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
};

export function Stack({
    children,
    gap = 4,
    direction = 'vertical',
    align = 'stretch',
    justify = 'start',
    className
}: StackProps) {
    return (
        <div className={cn(
            'flex',
            direction === 'vertical' ? 'flex-col' : 'flex-row',
            gapClasses[gap],
            alignClasses[align],
            justifyClasses[justify],
            className
        )}>
            {children}
        </div>
    );
}
