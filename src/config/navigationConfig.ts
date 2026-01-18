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
            { label: 'Leadership', href: '/leadership' }, // Placeholder for new page
            { label: 'Soul Caravan', href: '/soul-caravan' }, // Added Route
        ]
    },
    {
        label: 'Our Appeals', // Renamed from Our Work
        href: '/#appeals',
        dropdownItems: [
            { label: 'Build a Masjid', href: '/#appeals' },
            { label: 'Build a Water Well', href: '/water-well' },
            { label: 'Orphan Care', href: '/orphan-care' },
            { label: 'Food Relief', href: '/food-relief' },
            { label: 'Qurbani', href: '/#appeals' },
            { label: 'Zakat', href: '/#appeals' },
            { label: 'View All Appeals', href: '/appeals' } // Explicit View All
        ]
    },
    {
        label: 'Get Involved',
        href: '/#involved',
        dropdownItems: [ // Populated children
            { label: 'Join the Caravan', href: '/soul-caravan' }, // Contextual link
            { label: 'Volunteer', href: '/#involved' },
            { label: 'Ambassador Program', href: '/#involved' }
        ]
    },
];
