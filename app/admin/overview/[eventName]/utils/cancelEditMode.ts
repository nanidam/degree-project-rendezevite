import { IGuest } from "@/app/models/IGuest";

export const cancelEditMode = (
    guestList: IGuest[],
    setEditModeId: React.Dispatch<React.SetStateAction<string | null>>,
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
) => {
    setEditGuestList(guestList);
    setEditModeId(null);
};

