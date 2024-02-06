import { saveEditedGuestService } from "@/app/services/saveEditedGuestService";
import { IEvent } from "@/app/utils/models/IEvent";
import { IGuest } from "@/app/utils/models/IGuest";
import { FormEvent } from "react";

interface ISaveEditGuest {
    e: FormEvent<HTMLFormElement>,
    guestId: string
    editGuestList: IGuest[]
    setEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>;
    event: IEvent
    setEditModeId: React.Dispatch<React.SetStateAction<string | null>>
}
export const handleSaveEditGuest = async (
    { e, guestId, editGuestList, setEditGuestList, setEvent, event, setEditModeId }: ISaveEditGuest
) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const attending = formData.get('attending') === "true";
    const guestName = formData.get('guest-name') as string;
    const phoneNumber = formData.get('guest-number') as string;
    const diet = formData.get('diet') as string;
    const guestEmail = formData.get('guest-email') as string;
    const allergies = formData.get('allergies') as string;
    const comments = formData.get('comments') as string;
    const additionalGuestName = formData.get('additional-guest') as string;
    const additionalGuestAllergies = formData.get('additional-guest-allergies') as string;
    const hasResponded = formData.get('has-responded') === "true";
    const additionalGuestAttending = formData.get('additional-guest-attending') === "true";
    const additionalGuestDiet = formData.get('additional-guest-diet') as string;

    const updatedGuest = await saveEditedGuestService({
        guestId,
        attending,
        guestName,
        phoneNumber,
        diet,
        guestEmail,
        allergies,
        comments,
        additionalGuestName,
        additionalGuestAllergies,
        hasResponded,
        additionalGuestAttending,
        additionalGuestDiet
    })

    if (updatedGuest) {
        const updatedGuestList = editGuestList.map((guest) => {
            if (guest.id === guestId) {
                return updatedGuest
            }
            return guest
        }) as IGuest[]

        setEditGuestList(updatedGuestList);
        setEvent({ ...event, guestList: updatedGuestList });
        setEditModeId(null);
    }

};