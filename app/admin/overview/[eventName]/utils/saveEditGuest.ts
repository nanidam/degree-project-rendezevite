interface ISaveEditGuest {
    e: React.FormEvent<HTMLFormElement>,
    guestId: string
}
export const saveEditGuest = async (
    { e, guestId }: ISaveEditGuest
) => {
    e.preventDefault();

    console.log("save", guestId);
};