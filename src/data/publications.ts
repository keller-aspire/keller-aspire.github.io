import styleGuideImage from '../assets/images/home/developer.jpg';

export interface Author {
    name: string;
    institution?: string;
}

export interface FeaturedPublication {
    type: 'featured';
    headline: string;
    description: string;
    authors: Author[];
    link: {
        text: string;
        url: string;
    };
    image: {
        src: string | any;
        alt: string;
    };
    year?: number;
}

export interface SimpleCitation {
    type: 'citation';
    citation: string;
    link?: {
        text: string;
        url: string;
    };
    year?: number;
}

export type Publication = FeaturedPublication | SimpleCitation;

export interface PublicationCategory {
    name: 'Featured' | 'ASPIRE Lab' | 'Past';
    subcategories: {
        [key: string]: Publication[];
    };
}

export const publications: PublicationCategory[] = [
    {
        name: 'Featured',
        subcategories: {
            'Featured Publications': [
                {
                    type: 'featured',
                    headline: 'Publication Title 1',
                    description: 'This is where a summary of the abstract would go.',
                    authors: [
                        { name: 'Author One', institution: 'Institution' },
                        { name: 'Author Two', institution: 'Institution' },
                    ],
                    link: {
                        text: 'https://doi.org/10.1016/j.device.2024.100514',
                        url: 'https://www.sciencedirect.com/science/article/pii/S2666998624004149?via%3Dihub',
                    },
                    image: {
                        src: styleGuideImage,
                        alt: 'Publication Image',
                    },
                    year: 2024,
                },
            ],
        },
    },
    {
        name: 'ASPIRE Lab',
        subcategories: {
            'Original Research': [
                {
                    type: 'citation',
                    citation: 'Author(s). (Year). "Title of Article." Journal Name, Volume(Issue), Pages. doi:',
                    link: {
                        text: 'DOI Link',
                        url: '#',
                    },
                    year: 2024,
                },
            ],
            'Review Articles': [
                {
                    type: 'citation',
                    citation: 'Author(s). (Year). "Title of Presentation." Conference Name, Location.',
                    link: {
                        text: 'Link',
                        url: '#',
                    },
                    year: 2024,
                },
            ],
            'Case Reports': [
                {
                    type: 'citation',
                    citation: 'Author(s). (Year). Title of Report. Institution/Organization.',
                    link: {
                        text: 'Link',
                        url: '#',
                    },
                    year: 2024,
                },
            ],
        },
    },
    {
        name: 'Past',
        subcategories: {
            'Prior Publications': [
                {
                    type: 'citation',
                    citation: 'Author(s). (Year). "Title of Article." Journal Name, Volume(Issue), Pages. doi:',
                    link: {
                        text: 'DOI Link',
                        url: '#',
                    },
                    year: 2023,
                },
                {
                    type: 'citation',
                    citation: 'Author(s). (Year). "Title of Article." Journal Name, Volume(Issue), Pages. doi:',
                    link: {
                        text: 'DOI Link',
                        url: '#',
                    },
                    year: 2022,
                },
            ],
        },
    },
];
