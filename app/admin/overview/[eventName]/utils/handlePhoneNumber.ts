import { IGuest } from "@/app/utils/models/IGuest";

export const handlePhoneNumber = (
  e: React.ChangeEvent<HTMLInputElement>,
  guestId: string,
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
  editGuestList: IGuest[]
) => {
  setEditGuestList(
    editGuestList.map((guest) =>
      guest.id === guestId ? { ...guest, phoneNumber: e.target.value } : guest
    )
  );
};
