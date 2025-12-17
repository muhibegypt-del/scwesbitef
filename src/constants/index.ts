// Animation and UI Constants
export const ANIMATION = {
  EASING_CURVE: [0.22, 1, 0.36, 1] as const,
  SPRING_CONFIG: { type: "spring", stiffness: 100, damping: 20 } as const,
  MOBILE_CONFIG: { type: "tween", duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,
  SCROLL_DEBOUNCE_MS: 16,
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

export const TEXTURES = {
  NOISE_SVG: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
  NOISE_PNG: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGklEQVQYV2M8c+YMAxYwiqIoiqIoiqIoOikAAEX8A/nGmjQkAAAAAElFTkSuQmCC")`,
} as const;

export const CONTACT = {
  PHONE: '+254 700 000 000',
  EMAIL: 'info@soulcaravan.org',
  CHARITY_NUMBER: '12345678',
} as const;

export const DONATION_AMOUNTS = {
  WATER_WELL: [
    { amount: 25, description: 'Provides water for 1 person for 1 month' },
    { amount: 50, description: 'Supports well maintenance for 6 months' },
    { amount: 100, description: 'Funds water testing and purification' },
    { amount: 500, description: 'Contributes to full well construction' }
  ],
  ORPHAN_CARE: [
    { amount: 30, description: 'School supplies for one month' },
    { amount: 60, description: 'Food support for one month' },
    { amount: 120, description: 'Full monthly support package' },
    { amount: 360, description: 'Quarterly comprehensive care' }
  ],
  FOOD_RELIEF: [
    { amount: 15, description: 'Hot meals for 5 people' },
    { amount: 30, description: 'Food pack for one family' },
    { amount: 75, description: 'Weekly food support for 10 families' },
    { amount: 150, description: 'Monthly food distribution' }
  ],
  GENERAL: [
    { amount: 25, description: 'School supplies for one child' },
    { amount: 50, description: 'Clean water access for a family' },
    { amount: 100, description: 'Medical supplies for a village' },
    { amount: 250, description: 'Full education sponsorship' }
  ]
} as const;