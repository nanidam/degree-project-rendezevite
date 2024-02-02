import { IEvent } from "./IEvent";

export interface ICreateUpdateEvent {
    eventName: string;
    eventDate: string;
    userId: string;
    eventPassword: string;
    eventId?: string
    event?: IEvent
}
