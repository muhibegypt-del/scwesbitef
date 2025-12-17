import { cn } from '../../lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export function DisplayHeading({ 
  children, 
  className, 
  as: Component = 'h1' 
}: TypographyProps) {
  return (
    <Component className={cn('display-heading', className)}>
      {children}
    </Component>
  );
}

export function SectionHeading({ 
  children, 
  className, 
  as: Component = 'h2' 
}: TypographyProps) {
  return (
    <Component className={cn('section-heading', className)}>
      {children}
    </Component>
  );
}

export function SubHeading({ 
  children, 
  className, 
  as: Component = 'h3' 
}: TypographyProps) {
  return (
    <Component className={cn('subheading', className)}>
      {children}
    </Component>
  );
}

export function BodyText({ 
  children, 
  className, 
  as: Component = 'p' 
}: TypographyProps) {
  return (
    <Component className={cn('body-text', className)}>
      {children}
    </Component>
  );
}

export function CaptionText({ 
  children, 
  className, 
  as: Component = 'span' 
}: TypographyProps) {
  return (
    <Component className={cn('caption-text', className)}>
      {children}
    </Component>
  );
}