import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { NavigationLink } from '../config/navigationConfig';
import { MegaMenuDropdown } from './navigation/MegaMenuDropdown';
import { useHashNavigation } from '../hooks/useHashNavigation';

// import { useLenis } from '@studio-freight/react-lenis';

interface NavigationItemProps {
  link: NavigationLink;
  isOpen: boolean;
  onOpen: () => void;
  onLeave: () => void;
  onClose: () => void;
}

export function NavigationItem({ link, isOpen, onOpen, onLeave, onClose }: NavigationItemProps) {
  const justClosedRef = useRef(false);
  const { handleHashNavigation } = useHashNavigation();
  const location = useLocation();
  const isActive = location.pathname === link.href || (link.dropdownItems?.some(item => item.href === location.pathname) ?? false);
  const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    handleHashNavigation(e, href, () => {
      handleDropdownClose();
    });
  };

  const handleMouseEnter = () => {
    // Don't reopen if we just closed via click
    if (justClosedRef.current) return;
    onOpen();
  };

  const handleDropdownClose = () => {
    // Mark that we just closed via click
    justClosedRef.current = true;
    onClose();

    // Clear the flag after a delay to allow normal hover behavior later
    setTimeout(() => {
      justClosedRef.current = false;
    }, 300);
  };

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
    >
      {hasDropdown ? (
        <Link
          to={link.href}
          onClick={(e) => onLinkClick(e, link.href)}
          className={`flex items-center gap-1 font-bold text-sm transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md px-3 ${isActive || isOpen ? 'text-white' : 'text-slate-100 hover:text-teal-200'}`}
        >
          {link.label}
          <ChevronDown className={`w-4 h-4 text-current transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
      ) : (
        <Link
          to={link.href}
          onClick={(e) => onLinkClick(e, link.href)}
          className={`relative py-2 px-3 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md font-bold text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-100 hover:text-teal-200'}`}
          aria-current={isActive ? 'page' : undefined}
        >
          {link.label}
          {isActive && (
            <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-teal-400" />
          )}
        </Link>
      )}

      {hasDropdown && (
        <MegaMenuDropdown
          link={link}
          isOpen={isOpen}
          closeMenu={handleDropdownClose}
        />
      )}
    </div>
  );
}
