"use server";

import prisma from "../db";
import { ICreateUpdateEvent } from "../utils/models/ICreateUpdateEvent";
import { getEvent } from "./getEventServices";

const createEvent = async ({
  eventDate,
  eventName,
  userId,
  eventPassword,
}: ICreateUpdateEvent) => {
  const existingEvent = await getEvent(userId, eventName);
  if (existingEvent) return;

  try {
    const newEvent = await prisma.event.create({
      data: {
        eventName: eventName,
        eventDate,
        userId,
        eventPassword,
      },
    });

    return newEvent;
  } catch (error) {
    console.error("An error occurred when creating a new event:", error);
    throw error;
  }
};

export default createEvent;
