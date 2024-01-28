import { IGuest } from "@/app/models/IGuest";

export const handleName = (
    e: React.ChangeEvent<HTMLInputElement>,
    guestId: string,
    setEditGuestList: React.Dispatch<React.SetStateAction<IGuest[]>>,
    editGuestList: IGuest[]
) => {
    // setEditGuestList(
    //   editGuestList.map((g) => {
    //     if (g.id === guestId) {
    //       return { ...g, name: e.target.value };
    //     }
    //     return g;
    //   })
    // );
    setEditGuestList(
        editGuestList.map((guest) =>
            guest.id === guestId ? { ...guest, name: e.target.value } : guest
        )
    );
};