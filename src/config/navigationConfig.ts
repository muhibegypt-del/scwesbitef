export interface NavigationLink {
    label: string;
    href: string;
    dropdownItems?: { label: string; href: string }[];
}

export const NAV_CONFIG: NavigationLink[] = [
    {
        label: 'Who We Are',
        href: '/#history',
        dropdownItems: [
            { label: 'Our Story', href: '/#history' },
            { label: 'Our Values', href: '/#values' },
            { label: 'Our Team', href: '/leadership' },
        ]
    },
    {
        label: 'Our Appeals',
        href: '/#programs',
        dropdownItems: [
            { label: 'Build a Masjid', href: '/masjid' },
            { label: 'Build a Water Well', href: '/water-well' },
            { label: 'Widow and Orphan Care', href: '/orphan-care' },
            { label: 'Food Relief', href: '/food-relief' },
            { label: 'Education', href: '/education' },
            { label: 'Qurbani', href: '/qurbani' },
            { label: 'Zakat', href: '/zakat' },
        ]
    },
    {
        label: 'Get Involved',
        href: '/#involved',
        dropdownItems: [
            { label: 'Volunteer with Us', href: '/volunteer' }, // Updated to /volunteer
            { label: 'Start a Fundraiser', href: '/fundraise' },
            { label: 'Soul Caravan Trips', href: '/soul-caravan' }
        ]
    },
];
