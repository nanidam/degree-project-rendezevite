
export interface IClientSession {
    user: {
        email?: string;
    }
    expires: string
    id: string
    access: string
}