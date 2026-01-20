import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { NavigationLink } from '../config/navigationConfig';
import { MegaMenuDropdown } from './navigation/MegaMenuDropdown';

interface NavigationItemProps {
  link: NavigationLink;
}

export function NavigationItem({ link }: NavigationItemProps) {
  const location = useLocation();
  const isActive = location.pathname === link.href || (link.dropdownItems?.some(item => item.href === location.pathname) ?? false);
  const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path || '/';

      if (location.pathname === targetPath || (targetPath === '/' && location.pathname === '/')) {
        e.preventDefault();
        const element = document.getElementById(hash) || document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="group relative h-full flex items-center">
      {hasDropdown ? (
        <button
          className={`flex items-center gap-1 font-bold text-sm transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md px-3 ${isActive ? 'text-white' : 'text-slate-100 hover:text-teal-200'}`}
        >
          {link.label}
          <ChevronDown className="w-4 h-4 text-current transition-transform duration-200 group-hover:rotate-180" />
        </button>
      ) : (
        <Link
          to={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className={`relative py-2 px-3 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md font-bold text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-100 hover:text-teal-200'}`}
          aria-current={isActive ? 'page' : undefined}
        >
          {link.label}
          {isActive && (
            <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-teal-400" />
          )}
        </Link>
      )}

      {hasDropdown && <MegaMenuDropdown link={link} />}
    </div>
  );
}
