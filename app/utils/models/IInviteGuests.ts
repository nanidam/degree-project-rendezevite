import { IEvent } from "./IEvent";
import { IGuest } from "./IGuest";

export interface IInviteGuests {
    e: React.FormEvent<HTMLFormElement>
    eventId: string;
    setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
}