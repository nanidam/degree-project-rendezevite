import { IGuest } from "./IGuest";

export interface IInvitationRsvp {
  guest: IGuest;
  eventId: string;
  eventName: string;
}
