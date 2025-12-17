'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants, MotionConfig } from 'framer-motion';
import { Phone, Lock, ChevronDown, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- TYPES & CONSTANTS ---
type NavigationLink = {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
};

const NAV_LINKS: NavigationLink[] = [
  {
    label: 'Who We Are',
    href: '#history',
    dropdownItems: [
      { label: 'Our Story', href: '#history' },
      { label: 'Our Values', href: '#values' },
      { label: 'Leadership', href: '#team' },
    ]
  },
  {
    label: 'Our Appeals',
    href: '#appeals',
    dropdownItems: [
      { label: 'Build a Masjid', href: '#appeals' },
      { label: 'Build a Water Well', href: '/water-well' },
      { label: 'Orphan Care', href: '/orphan-care' },
      { label: 'Food Relief', href: '/food-relief' },
      { label: 'Qurbani', href: '#appeals' },
      { label: 'Zakat', href: '#appeals' },
    ]
  },
  {
    label: 'Get Involved',
    href: '#involved',
  },
];

const ANIMATION_CONFIG = {
  SPRING: { type: "spring", stiffness: 300, damping: 30 },
  EASE: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
};

// --- HOOKS ---
function useScrollPosition(threshold: number = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

// --- SUB-COMPONENTS ---

const SoulLogo = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-start z-50 ${className}`}>
    <img
      src="/design_8.svg"
      alt="Soul Caravan Foundation"
      // IMPROVEMENT: Adjusted logo sizing for better scaling
      className="h-full w-auto object-contain scale-110 origin-left" 
    />
    <div className="ml-3 block">
        {/* IMPROVEMENT: Responsive text sizing (larger on desktop) */}
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
      // IMPROVEMENT: Adjusted hover state opacity and border
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
  const isScrolled = useScrollPosition(20);
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

  // IMPROVEMENT: Responsive padding logic.
  // Mobile: py-3 (scrolled) / py-4 (top)
  // Desktop: py-4 (scrolled) / py-6 (top) - creates more "premium" spacing
  const navBackgroundClass = isScrolled
    ? 'bg-brand-primary shadow-lg border-white/5 py-3 lg:py-4'
    : 'bg-brand-primary border-white/10 py-4 lg:py-6';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[100] border-b transition-all duration-500 ease-in-out ${navBackgroundClass}`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        {/* IMPROVEMENT: Increased horizontal padding (px-5 md:px-8) so content isn't too close to edges */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10">
          <div className="flex items-center justify-between">
            
            {/* 1. Logo */}
            <a href="/" aria-label="Home" className="group">
               {/* IMPROVEMENT: Logo scales nicely on lg screens */}
               <SoulLogo className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>

            {/* 2. Desktop Navigation */}
            {/* IMPROVEMENT: Increased gap (gap-8 xl:gap-12) for wider screens */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12" role="navigation">
              {NAV_LINKS.map((link) => {
                const isActive = currentHash === link.href;
                const hasDropdown = link.dropdownItems && link.dropdownItems.length > 0;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setHoveredItem(link.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
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
                      className="relative group py-2 flex items-center gap-1"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className={`
                        text-sm xl:text-base font-medium tracking-wide transition-colors duration-300
                        ${isActive ? 'text-white font-bold' : 'text-white hover:text-white/80'}
                        drop-shadow-sm
                      `}>
                        {link.label}
                      </span>

                      {hasDropdown && (
                        <ChevronDown className={`
                          w-4 h-4 text-white transition-transform duration-300
                          ${hoveredItem === link.label ? 'rotate-180' : ''}
                        `} />
                      )}

                      <span className={`
                        absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-olive-400
                        origin-left transition-transform duration-300 ease-out
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      `} />
                    </Link>

                    {hasDropdown && (
                      <AnimatePresence>
                        {hoveredItem === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 min-w-[200px] bg-white rounded-xl shadow-xl border border-teal-900/10 overflow-hidden z-50"
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
                                className="block px-4 py-3 text-teal-900 hover:bg-teal-50 transition-colors text-sm font-medium"
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
              <a 
                href="#login" 
                className="text-white hover:text-white/80 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline decoration-olive-400 underline-offset-4"
              >
                <Lock className="h-3 w-3" strokeWidth={2.5} />
                Donor Portal
              </a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // IMPROVEMENT: Slightly larger padding on desktop button
                className="bg-white text-brand-primary-dark px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:bg-brand-primary-lightest transition-all flex items-center gap-2"
              >
                <span>Donate Now</span>
                <Heart className="h-4 w-4 fill-brand-primary-dark text-brand-primary-dark" />
              </motion.button>
            </div>

            {/* 4. Mobile Actions & Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
               <motion.button
                whileTap={{ scale: 0.95 }}
                // IMPROVEMENT: Increased mobile button size (text-sm, px-5) for better touch target
                className={`
                  px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-colors
                  ${isScrolled ? 'bg-white text-brand-primary-dark' : 'bg-brand-primary-dark text-white border border-white/20'}
                `}
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
          className="fixed inset-0 top-0 z-40 bg-[#3e6d73] flex flex-col pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
          className="fixed inset-0 top-0 z-40 bg-brand-primary flex flex-col pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <nav className="flex flex-col space-y-4 relative z-10">
            {NAV_LINKS.map((link) => {
              const isActive = currentHash === link.href;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={itemVariants}
                  onClick={onClose}
                  className={`
                    group flex items-center justify-between py-5 border-b border-white/10
                    ${isActive ? 'text-white' : 'text-white'} 
                  `}
                >
                  {/* IMPROVEMENT: Slightly tighter tracking on large mobile text */}
                  <span className={`text-lg font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                    {link.label}
                  </span>
                  <ChevronDown className={`
                    h-6 w-6 transition-transform duration-300
                    ${isActive ? 'text-olive-400 rotate-0' : 'text-white/70 -rotate-90 group-hover:text-white'}
                  `} />
                </motion.a>
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