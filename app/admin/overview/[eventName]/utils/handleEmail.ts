import { IGuest } from "@/app/utils/models/IGuest";

export const handleEmail = (
  e: React.ChangeEvent<HTMLInputElement>,
  guestId: string,
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
  editGuestList: IGuest[]
) => {
  setEditGuestList(
    editGuestList.map((guest) =>
      guest.id === guestId ? { ...guest, email: e.target.value } : guest
    )
  );
};
