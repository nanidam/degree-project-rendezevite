import { IGuest } from "@/app/models/IGuest";


export const handleAdditionalGuestName = (
    e: React.ChangeEvent<HTMLInputElement>,
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
                        name: e.target.value,
                    },
                }
                : guest
        )
    );
};