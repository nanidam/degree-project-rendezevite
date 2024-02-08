"use server";

import prisma from "../db";

interface IDeleteGuest {
    guestId: string
}
export const deleteGuest = async ({ guestId }: IDeleteGuest) => {
    try {
        const deletedGuest = await prisma.guest.delete({
            where: {
                id: guestId,
            },
        });
        return deletedGuest;
    } catch (error) {
        throw new Error("Failed to delete guest");
    }
};

