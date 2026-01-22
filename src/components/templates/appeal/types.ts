export const BrandPalette = {
    primary: {
        DEFAULT: 'teal-600',
        hover: 'teal-700',
        light: 'teal-50',
        accent: 'teal-400',
    },
    text: {
        main: 'slate-900',
        muted: 'slate-700',
        light: 'zinc-200', // For dark backgrounds
        white: 'white',
    },
    background: {
        white: 'white',
        slate: 'slate-100', // The primary alternating rhythm color
        card: 'slate-50',
        dark: 'slate-900', // For cinematic overlays
    }
} as const;

export type BrandTheme = 'brand'; // Strict single theme for now
