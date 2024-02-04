export interface ISession {
    user: {
        name?: string;
        email?: string;
        image?: string;
    };
    id: string;
    access: string;
}