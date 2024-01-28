import { IGuest } from "@/app/models/IGuest";

export const handleHasResponded = (
    e: React.ChangeEvent<HTMLSelectElement>,
    guestId: string,
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
    editGuestList: IGuest[]
) => {
    setEditGuestList(
        editGuestList.map((guest) =>
            guest.id === guestId
                ? { ...guest, hasResponded: e.target.value === "true" }
                : guest
        )
    );
};
