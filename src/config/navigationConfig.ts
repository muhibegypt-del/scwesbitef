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
            { label: 'Our Story', href: '/#year-2020' },
            { label: 'Our Values', href: '/#values' },
            { label: 'Leadership', href: '/leadership' },
            { label: 'Soul Caravan', href: '/soul-caravan' },
        ]
    },
    {
        label: 'Our Appeals',
        href: '/#appeals',
        dropdownItems: [
            { label: 'Build a Masjid', href: '/masjid' },
            { label: 'Build a Water Well', href: '/water-well' },
            { label: 'Widow and Orphan Care', href: '/orphan-care' },
            { label: 'Food Relief', href: '/food-relief' },
            { label: 'Education', href: '/education' },
            { label: 'Qurbani', href: '/qurbani' },
            // Zakat & View All Removed as requested
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
