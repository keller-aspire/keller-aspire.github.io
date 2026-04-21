export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Publication 1",
                answer: "Publication 1 description."
            },
            {
                question: "Publication 2",
                answer: "Publication 2 description."
            },
            {
                question: "Publication 3",
                answer: "Publication 3 description."
            }
        ]
    }
};
