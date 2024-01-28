import { IGuest } from "@/app/models/IGuest";


export const handleAdditionalGuestAllergies = (
    e: React.ChangeEvent<HTMLSelectElement>,
    guestId: string,
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
    editGuestList: IGuest[]
) => {
    setEditGuestList(
        editGuestList.map((guest) =>
            guest.id === guestId
                ? {
                    ...guest,
                    additionalGuest: {
                        ...guest.additionalGuest,
                        allergies: e.target.value,
                    },
                }
                : guest
        )
    );
};