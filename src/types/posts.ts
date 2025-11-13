export type Posts = {
    id: number;
    title: string;
    content: string | null;
    body: string | null;
    imageUrl: string | null;
    authorId: number;
    createdAt: Date;
    author: {
        id: number;
        name: string;
    };
};
