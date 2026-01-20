'use client';

import { useState, useEffect } from 'react';
import { User, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_CONFIG } from '../config/navigationConfig';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';
import { MobileMenu } from './MobileMenu';
import { NavigationItem } from './NavigationItem';
import { HamburgerToggle } from './navigation/HamburgerToggle';

// --- MAIN NAVIGATION ---
export function Navigation() {
  const isScrolled = useOptimizedScroll({ threshold: 20 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* MAIN HEADER - DARK TEAL AS REQUESTED */}
      <header
        className={`fixed left-0 right-0 w-full z-[100] bg-[#264144] transition-all duration-300 ${isScrolled ? 'top-0 shadow-lg' : 'top-0'}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md p-1 -ml-1">
              <img
                src="/design_8.svg"
                alt="Soul Caravan Foundation"
                className="h-10 lg:h-12 w-auto brightness-0 invert"
              />
              <div>
                <p className="text-white text-lg font-bold leading-none">Soul Caravan</p>
                <p className="text-teal-200 text-[10px] uppercase tracking-widest">Foundation</p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {NAV_CONFIG.map((link) => (
                <NavigationItem key={link.label} link={link} />
              ))}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Donate CTA */}
              <Link
                to="/appeals"
                className="flex items-center gap-2 bg-[#ff6f46] hover:bg-[#e55a35] text-white font-bold text-sm px-5 py-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff6f46] focus-visible:ring-offset-[#264144]"
              >
                Donate
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* User Icon */}
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
                <User className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                to="/appeals"
                className="bg-[#ff6f46] text-white font-bold text-sm px-4 py-2 rounded-full"
              >
                Donate
              </Link>
              <HamburgerToggle
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentHash={currentHash}
        navConfig={NAV_CONFIG}
      />
    </>
  );
}
