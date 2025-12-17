import { useEffect, useCallback } from 'react';

/**
 * System Typography Hook
 * Provides utilities for managing typography at the system level
 */
export function useSystemTypography() {
  
  /**
   * Applies typography enhancements to dynamically added content
   */
  const enhanceElement = useCallback((element: HTMLElement) => {
    // Auto-apply typography classes based on element type and content
    const tagName = element.tagName.toLowerCase();
    const textContent = element.textContent?.trim() || '';
    const wordCount = textContent.split(/\s+/).length;

    // Apply heading enhancements
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
      element.classList.add('text-balance');
      
      // Apply appropriate max-width based on heading level and content length
      if (tagName === 'h1' || wordCount > 8) {
        element.classList.add('max-w-display');
      } else {
        element.classList.add('max-w-heading');
      }
    }

    // Apply paragraph enhancements
    if (tagName === 'p') {
      element.classList.add('max-w-body');
      if (textContent.length > 100) {
        element.style.textWrap = 'pretty';
      }
    }

    // Apply button enhancements
    if (tagName === 'button' || element.classList.contains('btn')) {
      if (wordCount > 3) {
        element.classList.add('multiline');
        element.style.textWrap = 'balance';
      } else {
        element.style.textWrap = 'nowrap';
      }
    }
  }, []);

  /**
   * Scans and enhances all typography in a container
   */
  const enhanceContainer = useCallback((container: HTMLElement = document.body) => {
    const textElements = container.querySelectorAll('h1, h2, h3, h4, h5, h6, p, button, .btn');
    textElements.forEach(element => enhanceElement(element as HTMLElement));
  }, [enhanceElement]);

  /**
   * Validates typography quality and reports issues
   */
  const validateTypography = useCallback(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const issues: Array<{ type: string; element: HTMLElement; message: string }> = [];

    // Check for orphaned words
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      const text = heading.textContent?.trim();
      if (text) {
        const words = text.split(/\s+/);
        if (words.length > 1 && words[words.length - 1].length <= 3) {
          issues.push({
            type: 'orphaned-word',
            element: heading as HTMLElement,
            message: `Orphaned word: "${words[words.length - 1]}"`
          });
        }
      }
    });

    // Check for missing max-width constraints
    const displayText = document.querySelectorAll('.text-4xl, .text-5xl, .text-6xl, .text-7xl');
    displayText.forEach(element => {
      const style = window.getComputedStyle(element);
      if (style.maxWidth === 'none' || style.maxWidth === '100%') {
        issues.push({
          type: 'missing-constraint',
          element: element as HTMLElement,
          message: 'Missing max-width constraint on display text'
        });
      }
    });

    // Check for long paragraphs without proper wrapping
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      const text = p.textContent?.trim() || '';
      if (text.length > 200) {
        const style = window.getComputedStyle(p);
        if (style.textWrap !== 'pretty' && style.textWrap !== 'balance') {
          issues.push({
            type: 'poor-wrapping',
            element: p as HTMLElement,
            message: 'Long paragraph without optimized text wrapping'
          });
        }
      }
    });

    return issues;
  }, []);

  /**
   * Auto-fixes common typography issues
   */
  const autoFixTypography = useCallback(() => {
    const issues = validateTypography();
    
    issues.forEach(issue => {
      switch (issue.type) {
        case 'missing-constraint':
          issue.element.classList.add('max-w-display');
          break;
        case 'poor-wrapping':
          issue.element.style.textWrap = 'pretty';
          break;
        // Note: Orphaned words require manual content adjustment
      }
    });

    return issues.length;
  }, [validateTypography]);

  /**
   * Observes DOM changes and applies typography enhancements
   */
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            enhanceElement(element);
            enhanceContainer(element);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [enhanceElement, enhanceContainer]);

  return {
    enhanceElement,
    enhanceContainer,
    validateTypography,
    autoFixTypography
  };
}

/**
 * Typography Performance Monitor
 * Tracks typography-related performance metrics
 */
export function useTypographyPerformance() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const measureTypographyPerformance = () => {
      const start = performance.now();
      
      // Count typography elements
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
      const paragraphs = document.querySelectorAll('p').length;
      const textElements = document.querySelectorAll('[class*="text-"]').length;
      
      const end = performance.now();
      
      // Log performance metrics
      console.log('Typography Performance:', {
        scanTime: `${(end - start).toFixed(2)}ms`,
        headings,
        paragraphs,
        textElements,
        totalElements: headings + paragraphs + textElements
      });
    };

    // Measure after initial render
    const timeoutId = setTimeout(measureTypographyPerformance, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);
}