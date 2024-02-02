"use server";

import prisma from "../db";
import { ICreateUpdateEvent } from "../utils/models/ICreateUpdateEvent";


const updateEventNameDatePassword = async ({ eventDate, eventName, userId, eventPassword, eventId, event }: ICreateUpdateEvent) => {
    const updatedEvent = await prisma.event.update({
        where: {
            id: eventId
        },
        data: {
            eventName: eventName.toLowerCase(),
            eventDate,
            userId,
            eventPassword,
            template: event?.template
        }
    })

    return updatedEvent;
};

export default updateEventNameDatePassword;
