"use server";

import prisma from "../db";
import { IEvent } from "../models/IEvent";

const createEvent = async ({ eventDate, eventName, userId, eventPassword }: IEvent) => {
  try {
    const newEvent = await prisma.event.create({
      data: {
        eventName,
        eventDate: new Date(eventDate),
        userId,
        eventPassword,
      },
    });

    return newEvent;
  } catch (error) {
    console.error("Error creating event:", error);
    return null;
  }
};

export default createEvent;
