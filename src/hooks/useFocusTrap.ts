import { useEffect, useRef } from 'react';

export function useFocusTrap(isActive: boolean) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isActive) return;

        const element = containerRef.current;
        if (!element) return;

        const focusableElements = element.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        element.addEventListener('keydown', handleTabKey);

        // Initial focus
        if (firstElement) {
            firstElement.focus();
        }

        return () => {
            element.removeEventListener('keydown', handleTabKey);
        };
    }, [isActive]);

    return containerRef;
}
