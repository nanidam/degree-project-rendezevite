export interface IGuest {
    id: string;
    name: string;
    email: string;
    phoneNumber: string | null;
    diet: string | null;
    comments: string | null;
    allergies: string | null;
    eventId: string;
    attending: boolean;
    hasResponded: boolean;
    inviteSent: boolean;
    additionalGuest: IAdditionalGuest;
}

interface IAdditionalGuest {
    name: string;
    comments: string | null;
    diet: string | null;
    allergies: string | null;
    attending: boolean;
}