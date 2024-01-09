"use server";

import prisma from "../db";
import { IEvent } from "../models/IEvent";
import { getEvent } from "./getEvent";

const createEvent = async ({ eventDate, eventName, userId, eventPassword }: IEvent) => {
  const existingEvent = await getEvent(userId, eventName);
  if (existingEvent) {
    console.error("Error creating event:", "Event already exists");
    return null;
  }

  const newEvent = await prisma.event.create({
    data: {
      eventName: eventName.toLowerCase(),
      eventDate: new Date(eventDate),
      userId,
      eventPassword,
    },
  });

  console.log("Created event:", newEvent);
  return newEvent;
};

export default createEvent;
