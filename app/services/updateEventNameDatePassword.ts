"use server";

import prisma from "../db";
import { ICreateEvent } from "./createEvent";


const updateEventNameDatePassword = async ({ eventDate, eventName, userId, eventPassword, eventId }: ICreateEvent) => {

    const updatedEvent = await prisma.event.update({
        where: {
            id: eventId
        },
        data: {
            eventName: eventName.toLowerCase(),
            eventDate,
            userId,
            eventPassword
        }
    })

    return updatedEvent;
};

export default updateEventNameDatePassword;
