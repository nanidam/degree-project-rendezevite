import { IGuest } from "./IGuest";

export interface IEvent {
    id: string;
    eventName: string;
    eventDate: string;
    RSVPDate: string | null;
    userId: string;
    eventPassword: string;
    includeFood: boolean | null;
    includeAllergies: boolean | null;
    inviteLink: string | null;
    template: string | null;
    text: string | null;
    header: string | null;
    guestList: IGuest[];
}