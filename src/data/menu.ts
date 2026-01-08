// src/data/menu.ts

export const headerMenu = [
    { name: 'Theme Info', link: '/theme-info' , showArrow: false,
        children: [
            { name: 'News', link: '/news' },
            { name: 'Style Guide', link: '/style-guide' },
            { name: 'Components', link: '/components' },
        ]
    },
    { name: 'About Us', link: '/', showArrow: false,
        children: [
            { name: 'Vision', link: '/vision' },
            { name: 'People', link: '/team' },
        ]
    },
    { name: 'Research', link: '/', showArrow: false,
        children: [
            { name: 'Research Areas', link: '/research-areas' },
            { name: 'Publications', link: '/publications' },
        ]
    },
    
];

export const footerMenu = [
    { name: 'Contact', link: '/contact' },
    { name: 'Team', link: '/team' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

