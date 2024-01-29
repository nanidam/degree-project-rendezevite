import { IGuest } from "@/app/utils/models/IGuest";

export const handleAdditionalGuestAttending = (
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
              attending: e.target.value === "true",
            },
          }
        : guest
    )
  );
};
