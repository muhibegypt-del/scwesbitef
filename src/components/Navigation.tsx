'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants, MotionConfig } from 'framer-motion';
import { Phone, Lock, ChevronDown, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_CONFIG } from '../config/navigationConfig';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';
import { StatusIndicator } from './ui/StatusIndicator';

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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  const navBackgroundClass = isScrolled
    ? 'bg-brand-primary shadow-lg border-white/5 py-3 lg:py-4'
    : 'bg-brand-primary border-white/10 py-4 lg:py-6';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[100] border-b transition-all duration-500 ease-in-out ${navBackgroundClass}`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10">
          <div className="flex items-center justify-between">

            {/* 1. Logo */}
            <a href="/" aria-label="Home" className="group z-50 relative">
              <SoulLogo className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>

            {/* 2. Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12" role="navigation">
              {NAV_CONFIG.map((link) => {
                const isActive = currentHash === link.href;
                const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setHoveredItem(link.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* HYBRID NAVIGATION PATTERN: Parent is a Link */}
                    <Link
                      to={link.href.startsWith('#') ? '/' : link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                        setHoveredItem(null);
                      }}
                      className="relative group py-2 flex items-center gap-1 focus:outline-none"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className={`text-sm xl:text-base font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'text-white hover:text-white/80'} drop-shadow-sm`}>
                        {link.label}
                      </span>

                      {hasDropdown && (
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${hoveredItem === link.label ? 'rotate-180' : ''}`} />
                      )}

                      <span className={`absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-olive-400 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>

                    {hasDropdown && (
                      <AnimatePresence>
                        {hoveredItem === link.label && (
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
                                to={item.href.startsWith('#') ? '/' : item.href}
                                onClick={(e) => {
                                  if (item.href.startsWith('#')) {
                                    e.preventDefault();
                                    const element = document.querySelector(item.href);
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }
                                  setHoveredItem(null);
                                }}
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
              })}
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

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-primary-dark px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:bg-brand-primary-lightest transition-all flex items-center gap-2"
              >
                <span>Donate Now</span>
                <Heart className="h-4 w-4 fill-brand-primary-dark text-brand-primary-dark" />
              </motion.button>
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
      />
    </>
  );
}

// --- MOBILE MENU COMPONENT ---
const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, clipPath: "circle(0% at 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "circle(150% at 100% 0)",
    transition: { type: "spring", stiffness: 40, damping: 20, staggerChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    clipPath: "circle(0% at 100% 0)",
    transition: { type: "spring", stiffness: 40, damping: 20, staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function MobileMenu({ isOpen, onClose, currentHash }: { isOpen: boolean; onClose: () => void; currentHash: string }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          // Fix: Uses brand-primary and handled stacking context
          className="fixed inset-0 top-0 z-40 bg-brand-primary flex flex-col pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <nav className="flex flex-col space-y-2 relative z-10">
            {NAV_CONFIG.map((link) => {
              const isActive = currentHash === link.href;
              const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;

              return (
                <div key={link.label} className="border-b border-white/10 last:border-0">
                  <motion.a
                    href={link.href}
                    variants={itemVariants}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-4 ${isActive ? 'text-white' : 'text-white'}`}
                  >
                    {/* TYPOGRAPHY REFACtor: Text-xl (Body scale) instead of huge display text for better density */}
                    <span className={`text-xl font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                      {link.label}
                    </span>
                    {/* {hasDropdown && <ChevronDown className="h-5 w-5 text-white/70" />} */}
                  </motion.a>

                  {/* Render simplistic mobile dropdown items inline for now */}
                  {hasDropdown && (
                    <div className="pl-4 pb-4 space-y-3">
                      {link.dropdownItems!.map(sub => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={onClose}
                          className="block text-brand-primary-light text-base hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <motion.div variants={itemVariants} className="mt-auto relative z-10 space-y-6 pt-12">
            <div className="flex flex-col gap-4">
              <a href="#login" className="flex items-center gap-3 text-white hover:text-white/90 text-sm font-bold uppercase tracking-widest">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Lock className="h-4 w-4" />
                </div>
                Access Donor Portal
              </a>

              <div className="h-px w-full bg-white/10 my-2" />

              <div className="flex items-center justify-between text-white text-sm">
                <span>Reg No: 12345678</span>
                <a href="tel:+123456789" className="flex items-center gap-2 hover:text-white/90 transition-colors">
                  <Phone className="h-3 w-3" /> Contact Support
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-white text-brand-primary-dark text-lg font-bold py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex justify-center items-center gap-2"
            >
              Donate Now
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}