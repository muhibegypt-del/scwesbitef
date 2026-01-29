import { useLocation } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';

export function useHashNavigation() {
    const location = useLocation();
    const lenis = useLenis();

    const handleHashNavigation = (e: React.MouseEvent, href: string, closeMenu?: () => void) => {
        if (closeMenu) closeMenu();

        if (href.includes('#')) {
            const [path, hash] = href.split('#');
            const targetPath = path || '/';

            // Check if we are physically on the same page
            // Note: We treat location.pathname === '/' and targetPath === '/' as match
            // Also strictly check if location.pathname matches targetPath
            const isSamePage = location.pathname === targetPath || (targetPath === '/' && location.pathname === '/');

            if (isSamePage) {
                e.preventDefault();

                // Manual hash update to keep history clean but update URL
                window.history.pushState({}, '', href);

                const element = document.getElementById(hash);
                if (element) {
                    if (lenis) {
                        // Use Lenis for smooth scroll
                        lenis.scrollTo(element, { offset: -100 });
                    } else {
                        // Fallback
                        const top = element.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }
            }
            // If not same page, allow default Link behavior (NavigationLifecycle serves as backup for initial load scroll)
        }
    };

    return { handleHashNavigation };
}
