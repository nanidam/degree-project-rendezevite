"use server";

import prisma from "../db";
import { getEvent } from "./getEvent";
interface ICreateEvent {
  eventName: string;
  eventDate: string;
  userId: string;
  eventPassword: string;
}

const createEvent = async ({ eventDate, eventName, userId, eventPassword }: ICreateEvent) => {
  const existingEvent = await getEvent(userId, eventName);
  if (existingEvent) {
    console.error("Error creating event:", "Event already exists");
    return null;
  }

  const newEvent = await prisma.event.create({
    data: {
      eventName: eventName.toLowerCase(),
      eventDate,
      userId,
      eventPassword,
    },
  });

  console.log("Created event:", newEvent);
  return newEvent;
};

export default createEvent;
