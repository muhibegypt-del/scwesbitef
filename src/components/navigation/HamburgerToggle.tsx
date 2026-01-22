interface HamburgerToggleProps {
    isOpen: boolean;
    toggle: () => void;
}

export function HamburgerToggle({ isOpen, toggle }: HamburgerToggleProps) {
    return (
        <button
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex flex-col justify-center items-center gap-1 lg:hidden z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
        >
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
    );
}
