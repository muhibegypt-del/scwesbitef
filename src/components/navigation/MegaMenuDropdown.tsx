import { Link } from 'react-router-dom';
import { useHashNavigation } from '../../hooks/useHashNavigation';
import { NavigationLink } from '../../config/navigationConfig';
import { Z_INDEX } from '../../lib/design-tokens';

// Dynamic content mapping for each navigation section
const DROPDOWN_CONTENT: Record<string, { title: string; description: string; viewAllText: string }> = {
    'Who We Are': {
        title: 'About Soul Caravan Foundation',
        description: 'Learn about our mission, values, and the people behind our work.',
        viewAllText: 'Learn More'
    },
    'Our Appeals': {
        title: 'Our Current Projects',
        description: 'Explore our active projects we\'re working on right now across the world.',
        viewAllText: 'View All Projects'
    },
    'Get Involved': {
        title: 'Join Our Mission',
        description: 'Be part of the change. Discover ways to contribute and make an impact.',
        viewAllText: 'Get Started'
    }
};

interface MegaMenuDropdownProps {
    link: NavigationLink;
    isOpen: boolean;
    closeMenu: () => void;
}

export function MegaMenuDropdown({ link, isOpen, closeMenu }: MegaMenuDropdownProps) {
    const { handleHashNavigation } = useHashNavigation();

    if (!link.dropdownItems || link.dropdownItems.length === 0) return null;

    // Get dynamic content based on navigation label, fallback to Our Appeals
    const content = DROPDOWN_CONTENT[link.label] || DROPDOWN_CONTENT['Our Appeals'];

    // Dynamic positioning: If it's "Get Involved" (last item), align right to prevent overflow
    const isLastItem = link.label === 'Get Involved';
    const positionClasses = isLastItem
        ? 'right-0 w-[600px] origin-top-right'
        : 'left-1/2 -translate-x-1/2 w-[600px] origin-top';

    return (
        <div
            className={`absolute top-full pt-4 transition-all duration-200 ease-out transform ${positionClasses} ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}
            style={{ zIndex: Z_INDEX.header }}
        >

            {/* The Pointer (Speech Bubble Triangle) - POSITIONED OUTSIDE OVERFLOW WRAPPER */}
            {/* It sits in the padding area (pt-4) but needs to be visually connected to the white box below */}
            <div className={`absolute top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100 z-50 ${isLastItem ? 'right-10' : 'left-1/2 -translate-x-1/2'}`} />

            {/* Content Container - Background & Shadow apply here */}
            {/* NOTE: We remove the top border here safely since keyline is handled by wrapper or visually merged */}
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden relative">
                <div className="p-8 relative z-10">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">{content.title}</h3>
                        {/* VIEW ALL LINK REMOVED AS REQUESTED */}
                    </div>

                    <p className="text-sm text-gray-500 mb-6 font-medium">
                        {content.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {link.dropdownItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.href}
                                    onClick={(e) => handleHashNavigation(e, item.href, closeMenu)}
                                    className="text-gray-800 font-bold hover:text-teal-600 text-sm block transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* FOOTER ACTION REMOVED AS REQUESTED */}
                </div>
            </div>
        </div>
    );
}
