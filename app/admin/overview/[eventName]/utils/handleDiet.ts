import { IGuest } from "@/app/utils/models/IGuest";

export const handleDiet = (
  e: React.ChangeEvent<HTMLSelectElement>,
  guestId: string,
  setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
  editGuestList: IGuest[]
) => {
  setEditGuestList(
    editGuestList.map((guest) =>
      guest.id === guestId ? { ...guest, diet: e.target.value } : guest
    )
  );
};
