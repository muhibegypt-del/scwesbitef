/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3e6d73',
          'primary-lightest': '#f0f5f5',
          'primary-light': '#d9e7e8',
          'primary-hover': '#32585c',
          'primary-dark': '#264245',
          'primary-darker': '#0d1717',
          teal: '#3e6d73',
          secondary: '#6b8869',
          accent: '#98a55f',
        },
        'teal': {
          50: '#f0f5f5',
          100: '#d9e7e8',
          200: '#b3ced1',
          300: '#8db6ba',
          400: '#669da3',
          500: '#3e6d73',
          600: '#32585c',
          700: '#264245',
          800: '#192d2e',
          900: '#0d1717',
        },
        'sage': {
          50: '#f3f5f3',
          100: '#e3e8e2',
          200: '#c7d1c5',
          300: '#abbaa8',
          400: '#8fa38b',
          500: '#6b8869',
          600: '#566d54',
          700: '#40523f',
          800: '#2b362a',
          900: '#161b15',
        },
        'olive': {
          50: '#f7f8f3',
          100: '#ebede0',
          200: '#d7dbc1',
          300: '#c3c9a2',
          400: '#afb783',
          500: '#98a55f',
          600: '#7a844c',
          700: '#5b6339',
          800: '#3d4226',
          900: '#1e2113',
        },
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Lato', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        geist: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      // Sacred Geometry: 8px base grid system
      // 8 × 1 = 8px, 8 × 2 = 16px, 8 × 4 = 32px, 8 × 8 = 64px, etc.
      spacing: {
        // Base units (multiples of 8)
        '0': '0px',
        'px': '1px',
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '2': '0.5rem',      // 8px   ← Base unit
        '3': '0.75rem',     // 12px
        '4': '1rem',        // 16px  ← 8 × 2
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px  ← 8 × 3
        '7': '1.75rem',     // 28px
        '8': '2rem',        // 32px  ← 8 × 4
        '9': '2.25rem',     // 36px
        '10': '2.5rem',     // 40px  ← 8 × 5
        '11': '2.75rem',    // 44px
        '12': '3rem',       // 48px  ← 8 × 6
        '14': '3.5rem',     // 56px  ← 8 × 7
        '16': '4rem',       // 64px  ← 8 × 8
        '18': '4.5rem',     // 72px  ← 8 × 9
        '20': '5rem',       // 80px  ← 8 × 10
        '24': '6rem',       // 96px  ← 8 × 12
        '28': '7rem',       // 112px ← 8 × 14
        '32': '8rem',       // 128px ← 8 × 16
        '36': '9rem',       // 144px ← 8 × 18
        '40': '10rem',      // 160px ← 8 × 20
        '44': '11rem',      // 176px
        '48': '12rem',      // 192px ← 8 × 24
        '52': '13rem',      // 208px
        '56': '14rem',      // 224px ← 8 × 28
        '60': '15rem',      // 240px
        '64': '16rem',      // 256px ← 8 × 32
        '72': '18rem',      // 288px ← 8 × 36
        '80': '20rem',      // 320px ← 8 × 40
        '96': '24rem',      // 384px ← 8 × 48
        '112': '28rem',     // 448px ← 8 × 56
        '128': '32rem',     // 512px ← 8 × 64
      },
      maxWidth: {
        '65ch': '65ch',
        'display': '18ch',
        'heading': '22ch',
        'subheading': '26ch',
        'body': '65ch',
        '7xl': '80rem',
        '8xl': '96rem',
      },
      // Border radius: 8px increments
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px
        'DEFAULT': '0.5rem', // 8px   ← Base
        'md': '0.75rem',    // 12px
        'lg': '1rem',       // 16px  ← 8 × 2
        'xl': '1.5rem',     // 24px  ← 8 × 3
        '2xl': '2rem',      // 32px  ← 8 × 4
        '3xl': '2.5rem',    // 40px  ← 8 × 5
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 1px 3px -1px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
