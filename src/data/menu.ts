// src/data/menu.ts

export const headerMenu = [
    /*{ name: 'Dev Use', link: '/theme-info' , showArrow: false,
        children: [
            { name: 'News', link: '/news' },
            { name: 'Style Guide', link: '/style-guide' },
            { name: 'Components', link: '/components' },
        ]
    },*/
    { name: 'About Us', link: '/vision', showArrow: false,
        children: [
            { name: 'Our Vision', link: '/vision' },
            { name: 'Our Team', link: '/team' },
            { name: 'Steve Keller', link: '/steve-keller' },
        ]
    },
    { name: 'Research', link: '/research-areas', showArrow: false,
        children: [
            { name: 'Mechanisms of Organ Failure', link: '/research-areas/mechanisms' },
            { name: 'Organ Support Technologies', link: '/research-areas/support' },
            { name: 'Computational Physiology', link: '/research-areas/physiology' },
        ]
    },
    { name: 'Publications', link: '/publications' },
];

export const footerMenu = [
    { name: 'Contact', link: '/contact' },
    { name: 'Our Team', link: '/team' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

