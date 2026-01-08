import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from '@data/categories';

// Extract category names for the enum
const categoryNames = categories.map((category) => category.name);

const news = defineCollection({
    loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            excerpt: z.string(),
            featuredImage: image().optional(),
            publishDate: z.string().transform((str) => new Date(str)),
            publish: z.boolean().optional(),
            categories: z.array(z.enum(categoryNames as [string, ...string[]])),
            seo: z
                .object({
                    title: z.string().optional(),
                    description: z.string().optional(),
                    image: z.string().optional(),
                })
                .optional(),
        }),
});

const team = defineCollection({
    loader: glob({ base: './src/content/team', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            headshot: image().optional(),
            altImg: image().optional(),
            headshot2: image().optional(),
            jobTitle: z.string(),
            degree: z.string().optional(),
            undergrad: z.string().optional(),
            grad: z.string().optional(),
            medschool: z.string().optional(),
            phd: z.string().optional(),
            residency: z.string().optional(),
            category: z.enum(['PI', 'Postdoc', 'PhD', 'Staff', 'Past']),
            email: z.string().optional(),
            linkedin: z.string().url().optional(),
            linkedinUsername: z.string().optional(),
            xSocial: z.string().url().optional(),
            xSocialUsername: z.string().optional(),
            github: z.string().url().optional(),
            githubUsername: z.string().optional(),
            order: z.number().default(999),
            publish: z.boolean().default(true),
        }),
});

const legal = defineCollection({
    loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        lastUpdated: z.string().transform((str) => new Date(str)),
        seo: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
    }),
});

const vision = defineCollection({
    loader: glob({ base: './src/content/vision', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string().optional(),
    }),
});

const areas = defineCollection({
    loader: glob({ base: './src/content/research-areas', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string().optional(),
    }),
});

export const collections = { news, team, legal, vision, areas };
