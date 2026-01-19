import { useEffect } from 'react';

/**
 * Progressive Typography Enhancement Hook
 * Applies system-wide typography improvements progressively
 */
export function useProgressiveTypography() {
  useEffect(() => {
    // Apply typography enhancements to the document
    document.documentElement.classList.add('typography-enhanced');

    // Enhanced font loading detection
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('font-loaded');
        document.documentElement.classList.remove('font-loading');
      });
    }

    // Progressive enhancement for older browsers
    const supportsTextWrap = CSS.supports('text-wrap', 'balance');
    if (!supportsTextWrap) {
      // Fallback for browsers without text-wrap support
      const headings = document.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6');
      headings.forEach(heading => {
        heading.style.maxWidth = '22ch';
      });
    }

    // Cleanup function
    return () => {
      document.documentElement.classList.remove('typography-enhanced', 'font-loaded');
    };
  }, []);
}

/**
 * Progressive Typography Provider Component
 * Wraps the app to apply system-wide typography enhancements
 */
export function ProgressiveTypographyProvider({ children }: { children: React.ReactNode }) {
  useProgressiveTypography();
  return <>{children}</>;
}

/**
 * Typography Quality Checker
 * Development utility to validate typography implementation
 */
export function useTypographyQualityChecker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const checkTypographyQuality = () => {
      const issues: string[] = [];

      // Check for orphaned words in headings
      const headings = document.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        const text = heading.textContent?.trim();
        if (text) {
          const words = text.split(/\s+/);
          if (words.length > 1) {
            const lastWord = words[words.length - 1];
            if (lastWord.length <= 3) {
              issues.push(`Heading ${index + 1}: Potential orphaned word "${lastWord}"`);
            }
          }
        }
      });

      // Check for full-width display text
      const displayText = document.querySelectorAll('.text-4xl, .text-5xl, .text-6xl, .text-7xl');
      displayText.forEach((element, index) => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.maxWidth === 'none' || computedStyle.maxWidth === '100%') {
          issues.push(`Display text ${index + 1}: Missing max-width constraint`);
        }
      });

      // Check for missing text-balance on multi-line headings
      headings.forEach((heading, index) => {
        const computedStyle = window.getComputedStyle(heading);
        if (heading.offsetHeight > parseFloat(computedStyle.lineHeight) * 1.5) {
          // Multi-line heading detected
          if (!heading.classList.contains('text-balance') &&
            computedStyle.textWrap !== 'balance') {
            issues.push(`Multi-line heading ${index + 1}: Missing text-wrap: balance`);
          }
        }
      });

      // Log issues if found
      if (issues.length > 0) {
        console.group('Typography Quality Issues');
        issues.forEach(issue => console.warn(issue));
        console.groupEnd();
      } else {
        console.log('✅ Typography quality check passed');
      }
    };

    // Run check after fonts load and layout settles
    const timeoutId = setTimeout(checkTypographyQuality, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
}

/**
 * Auto-Typography Component
 * Automatically applies appropriate typography classes based on content
 */
interface AutoTypographyProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: 'display' | 'heading' | 'subheading' | 'body' | 'caption';
}

export function AutoTypography({
  children,
  as: Component = 'div',
  className = '',
  variant = 'body'
}: AutoTypographyProps) {
  const variantClasses = {
    display: 'display-heading text-4xl sm:text-5xl lg:text-6xl font-bold',
    heading: 'section-heading text-2xl sm:text-3xl lg:text-4xl font-semibold',
    subheading: 'subheading text-xl sm:text-2xl font-semibold',
    body: 'body-text text-base sm:text-lg',
    caption: 'caption-text text-sm'
  };

  return (
    <Component className={`${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </Component>
  );
}