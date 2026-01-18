import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { NavigationLink } from '../types';

interface NavigationItemProps {
  link: NavigationLink;
  isActive: boolean;
}

export function NavigationItem({ link, isActive }: NavigationItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const location = window.location; // Using window.location for simplicity as useLocation requires Router context inside the component which is fine, but simpler is better if we just need pathname. Actually useLocation is safer within Router.
  // Converting to useLocation requires import.

  const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path || '/';

      // If we are on the same page
      if (location.pathname === targetPath || (targetPath === '/' && location.pathname === '/')) {
        e.preventDefault();
        const element = document.getElementById(hash) || document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If different page, allow default navigation which will go to page and anchor
    }
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={link.href}
        onClick={(e) => handleScroll(e, link.href)}
        className="relative group py-2 flex items-center gap-1 focus:outline-none"
        aria-current={isActive ? 'page' : undefined}
      >
        <span className={`text-sm xl:text-base font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'text-white hover:text-white/80'} drop-shadow-sm`}>
          {link.label}
        </span>

        {hasDropdown && (
          <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
        )}

        <span className={`absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-olive-400 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
      </Link>

      {hasDropdown && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 min-w-[220px] bg-white rounded-xl shadow-xl border border-teal-900/10 overflow-hidden z-50"
            >
              {link.dropdownItems!.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block px-4 py-3 text-teal-900 hover:bg-teal-50 transition-colors text-sm font-medium border-b border-gray-50 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
