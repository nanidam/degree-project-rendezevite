import { IGuest } from "./IGuest";

export interface IInvitationRsvpProps {
  guest: IGuest;
  eventId: string;
  eventName: string;
}
