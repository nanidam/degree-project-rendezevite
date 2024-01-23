import { IGuest } from "./IGuest";

export interface IEvent {
    id: string;
    eventName: string;
    eventDate: string;
    RSVPDate: string | null;
    userId: string;
    eventPassword: string;
    includeFood: boolean | null;
    includeAllergies: boolean;
    inviteLink: string | null;
    template: string | null;
    text: string;
    header: string;
    guestList: IGuest[];
}