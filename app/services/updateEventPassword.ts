"use server";

import prisma from "../db";

export const updateEventPassword = async (eventPassword: string, eventId: string) => {

    const result = await prisma.event.update({
        where: { id: eventId },
        data: { eventPassword },
    });

    return result.eventPassword
}

