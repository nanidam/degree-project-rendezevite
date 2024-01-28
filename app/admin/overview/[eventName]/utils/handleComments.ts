import { IGuest } from "@/app/models/IGuest";
export const handleComments = (
    e: React.ChangeEvent<HTMLInputElement>,
    guestId: string,
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
    editGuestList: IGuest[]
) => {
    setEditGuestList(
        editGuestList.map((guest) =>
            guest.id === guestId ? { ...guest, comments: e.target.value } : guest
        )
    );
};