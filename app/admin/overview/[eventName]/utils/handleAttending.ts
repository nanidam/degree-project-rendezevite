import { IGuest } from "@/app/utils/models/IGuest";

export const handleAttending = (
  e: React.ChangeEvent<HTMLSelectElement>,
  guestId: string,
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
  editGuestList: IGuest[]
) => {
  setEditGuestList(
    editGuestList.map((guest) =>
      guest.id === guestId ? { ...guest, attending: e.target.value === "true" } : guest
    )
  );
};
