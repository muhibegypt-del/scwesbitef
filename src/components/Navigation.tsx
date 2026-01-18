'use client';

import { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import { NAV_CONFIG } from '../config/navigationConfig';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';
import { StatusIndicator } from './ui/StatusIndicator';
import { NavigationItem } from './NavigationItem';
import { MobileMenu } from './MobileMenu';

const ANIMATION_CONFIG = {
  SPRING: { type: "spring", stiffness: 300, damping: 30 },
  EASE: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
};

// --- SUB-COMPONENTS ---

const SoulLogo = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-start z-50 ${className}`}>
    <img
      src="/design_8.svg"
      alt="Soul Caravan Foundation"
      className="h-full w-auto object-contain scale-110 origin-left"
    />
    <div className="ml-3 block">
      <p className="text-white text-lg lg:text-xl font-bold tracking-tight leading-none drop-shadow-md transition-all duration-300">
        Soul Caravan
      </p>
      <p className="text-olive-400 text-[10px] lg:text-xs uppercase tracking-[0.25em] font-medium mt-0.5 transition-all duration-300">
        Foundation
      </p>
    </div>
  </div>
);

const HamburgerToggle = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <MotionConfig transition={ANIMATION_CONFIG.SPRING}>
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="relative h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-center items-center gap-1.5 lg:hidden z-50"
    >
      <motion.span
        className="w-6 h-0.5 bg-white origin-center rounded-full shadow-sm"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 },
        }}
      />
      <motion.span
        className="w-6 h-0.5 bg-white rounded-full shadow-sm"
        variants={{
          closed: { opacity: 1, x: 0 },
          open: { opacity: 0, x: 20 },
        }}
      />
      <motion.span
        className="w-6 h-0.5 bg-white origin-center rounded-full shadow-sm"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 },
        }}
      />
    </motion.button>
  </MotionConfig>
);

// --- MAIN COMPONENT ---
export function Navigation() {
  const isScrolled = useOptimizedScroll({ threshold: 20 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    handleHashChange();
    // Optimization: Consider using a centralized router listener instead of hashchange if we switch to full routing
    window.addEventListener('hashchange', handleHashChange);

    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Design Token compliance: Use semantic naming or CSS variables if possible in future
  const navBackgroundClass = isScrolled
    ? 'shadow-lg py-3 lg:py-4'
    : 'py-4 lg:py-6';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out ${navBackgroundClass}`}
        style={{ backgroundColor: '#3e6d73' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10">
          <div className="flex items-center justify-between">

            {/* 1. Logo */}
            <a href="/" aria-label="Home" className="group z-50 relative">
              <SoulLogo className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>

            {/* 2. Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12" role="navigation">
              {NAV_CONFIG.map((link) => (
                <NavigationItem
                  key={link.label}
                  link={link}
                  isActive={currentHash === link.href}
                />
              ))}
            </nav>

            {/* 3. Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Added Status Indicator Example */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                <StatusIndicator status="urgent" size="sm" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Appeal Active</span>
              </div>

              <a
                href="#login"
                className="text-white hover:text-white/80 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline decoration-olive-400 underline-offset-4"
              >
                <Lock className="h-3 w-3" strokeWidth={2.5} />
                Portal
              </a>

              {/* Donate Dropdown CTA */}
              <div
                className="relative group z-50"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-primary-dark px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:bg-brand-primary-lightest transition-all flex items-center gap-2"
                >
                  <span>Donate</span>
                  <Heart className="h-4 w-4 fill-brand-primary-dark text-brand-primary-dark" />
                </motion.button>

                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 min-w-[220px] bg-white rounded-xl shadow-xl border border-teal-900/10 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  {NAV_CONFIG.find(l => l.label === 'Our Appeals')?.dropdownItems?.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-teal-900 hover:bg-teal-50 transition-colors text-sm font-medium border-b border-gray-50 last:border-0 text-left"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Mobile Actions & Toggle */}
            <div className="flex items-center gap-3 lg:hidden z-50">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-colors ${isScrolled ? 'bg-white text-brand-primary-dark' : 'bg-brand-primary-dark text-white border border-white/20'}`}
              >
                Donate
              </motion.button>

              <HamburgerToggle
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentHash={currentHash}
        navConfig={NAV_CONFIG}
      />
    </>
  );
}
