"use server"

import prisma from "../db";
import getUserId from "./getUserId";

export const getAllEvents = async () => {
    const userId = await getUserId();
    if (!userId) {
        return null;
    }

    const events = await prisma.event.findMany({
        where: {
            userId,
        },
        // include: { guestList: true },
    })

    if (events) {
        return events;
    }

    return null;
};
