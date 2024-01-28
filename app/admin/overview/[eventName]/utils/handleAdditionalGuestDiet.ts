import { IGuest } from "@/app/models/IGuest";


export const handleAdditionalGuestDiet = (
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
                        diet: e.target.value,
                    },
                }
                : guest
        )
    );
};