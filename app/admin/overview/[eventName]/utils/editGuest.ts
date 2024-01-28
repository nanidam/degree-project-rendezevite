export const editGuest = (
    e: React.MouseEvent<HTMLButtonElement>,
    guestId: string,
    setEditModeId: React.Dispatch<React.SetStateAction<string | null>>,
) => {
    e.preventDefault();
    setEditModeId(guestId);
};
