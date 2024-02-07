import { IGuest } from "./IGuest";

export interface IInvitationWelcomeProps {
  eventName: string;
  eventId: string;
  eventDate: string;
  guest: IGuest;
}
