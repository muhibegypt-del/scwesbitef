'use client';

import { useState, useEffect } from 'react';
import { User, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_CONFIG } from '../config/navigationConfig';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';
import { MobileMenu } from './MobileMenu';
import { NavigationItem } from './NavigationItem';
import { HamburgerToggle } from './navigation/HamburgerToggle';
import { Button } from './ui/button';

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
        className={`fixed left-0 right-0 w-full z-header transition-all duration-300 bg-brand-primary-dark ${isScrolled ? 'top-0 shadow-soft' : 'top-0'}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* LOGO - flex-shrink-0 prevents compression, min-w ensures space */}
            <Link
              to="/"
              className="flex-shrink-0 min-w-[80px] lg:min-w-0 flex items-center z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md overflow-visible"
            >
              <img
                src="https://ik.imagekit.io/dzmabcda0/Design_6.svg"
                alt="Soul Caravan Foundation"
                className="h-12 lg:h-14 w-auto scale-[1.8] lg:scale-[2.8] origin-left lg:origin-center"
              />
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
                to="/#programs"
                className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary-darker font-bold text-sm px-5 py-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent focus-visible:ring-offset-brand-primary-darker"
              >
                Donate
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* User Icon */}
              <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors">
                <User className="w-5 h-5" />
              </Button>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                to="/#programs"
                className="bg-brand-accent text-brand-primary-darker font-bold text-sm px-4 py-2 rounded-full"
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
