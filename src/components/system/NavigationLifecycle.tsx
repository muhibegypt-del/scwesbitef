import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';

export function NavigationLifecycle() {
    const location = useLocation();
    const navType = useNavigationType();
    const lenis = useLenis();
    const lastPathname = useRef(location.pathname);

    // 1. The 'Fresh Start' & 3. The 'Time Travel' Check
    useEffect(() => {
        // If we are just changing hash on the same page, don't hard reset
        const isSamePage = location.pathname === lastPathname.current;

        // On 'POP' (Back button), we generally want to let the browser restore scroll position.
        // However, if the browser doesn't do it well with Lenis/SPA, we might need manual handling.
        // For now, we STRICTLY enforce "Fresh Start" on PUSH (new page) actions.
        if (navType === 'PUSH' && !isSamePage) {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        }

        lastPathname.current = location.pathname;
    }, [location.pathname, navType, lenis]);

    // 2. The 'Deep Dive' Check (Anchor Accuracy)
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            const element = document.getElementById(targetId);

            if (element) {
                // Slight delay to ensure layout is stable/loaded
                setTimeout(() => {
                    if (lenis) {
                        lenis.scrollTo(element, {
                            offset: -100, // Header offset
                            immediate: false // Smooth scroll to anchor is usually nice
                        });
                    } else {
                        const top = element.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    }, [location.hash, lenis]); // Run when hash changes

    return null;
}
