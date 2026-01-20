import { cn } from '../../lib/utils';

type Alignment = 'left' | 'center' | 'right';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  align?: Alignment;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const alignmentClasses: Record<Alignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function DisplayHeading({
  children,
  className,
  align = 'center',
  as: Component = 'h1'
}: TypographyProps) {
  return (
    <Component className={cn('display-heading', alignmentClasses[align], className)}>
      {children}
    </Component>
  );
}

export function SectionHeading({
  children,
  className,
  align = 'center',
  as: Component = 'h2'
}: TypographyProps) {
  return (
    <Component className={cn('section-heading', alignmentClasses[align], className)}>
      {children}
    </Component>
  );
}

export function SubHeading({
  children,
  className,
  align = 'center',
  as: Component = 'h3'
}: TypographyProps) {
  return (
    <Component className={cn('subheading', alignmentClasses[align], className)}>
      {children}
    </Component>
  );
}

export function BodyText({
  children,
  className,
  align = 'left',
  as: Component = 'p'
}: TypographyProps) {
  return (
    <Component className={cn('body-text', alignmentClasses[align], className)}>
      {children}
    </Component>
  );
}

export function CaptionText({
  children,
  className,
  align = 'left',
  as: Component = 'span'
}: TypographyProps) {
  return (
    <Component className={cn('caption-text', alignmentClasses[align], className)}>
      {children}
    </Component>
  );
}