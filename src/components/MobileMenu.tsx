import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, Phone } from 'lucide-react';
import type { NavigationLink } from '../types';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    currentHash: string;
    navConfig: NavigationLink[];
}

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

export function MobileMenu({ isOpen, onClose, currentHash, navConfig }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 top-0 z-40 bg-[#264144] flex flex-col pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
                >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <nav className="flex flex-col space-y-2 relative z-10">
                        {navConfig.map((link) => {
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
                                        <span className={`text-xl font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                                            {link.label}
                                        </span>
                                    </motion.a>

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
