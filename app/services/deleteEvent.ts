"use server"

import prisma from "../db";
import { getEvent } from "./getEvent";
import getUserId from "./getUserId";

export const deleteEvent = async (eventName: string) => {
    const userId = await getUserId();
    if (!userId) {
        return;
    }

    const event = await getEvent(userId, eventName);

    console.log(event)
    if (!event) {
        return;
    }

    await prisma.event.delete({
        where: {
            id: event.id,
        },
    })


};
