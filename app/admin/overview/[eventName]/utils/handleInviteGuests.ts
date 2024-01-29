import inviteGuests from "@/app/services/inviteGuests";
import { IEvent } from "@/app/utils/models/IEvent";
import { IInviteGuests } from "@/app/utils/models/IInviteGuests";


export const handleInviteGuests = async ({ e, eventId, setEvent, setEditGuestList }: IInviteGuests) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const guestName = data.get("guestName") as string;
    const guestEmail = data.get("guestEmail") as string;
    const additionalGuest = data.get("additionalGuest") as string;

    const updatedEvent = (await inviteGuests({
        guestName,
        guestEmail,
        additionalGuest,
        eventId,
    })) as IEvent;

    if (updatedEvent) {
        setEvent(updatedEvent);
        setEditGuestList(updatedEvent.guestList);
    }
};
