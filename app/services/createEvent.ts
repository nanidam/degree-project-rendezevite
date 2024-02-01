"use server";

import prisma from "../db";
import { getEvent } from "./getEvent";
export interface ICreateEvent {
  eventName: string;
  eventDate: string;
  userId: string;
  eventPassword: string;
  eventId?: string
}

const createEvent = async ({ eventDate, eventName, userId, eventPassword }: ICreateEvent) => {
  const existingEvent = await getEvent(userId, eventName);
  if (existingEvent) return;

  const newEvent = await prisma.event.create({
    data: {
      eventName: eventName.toLowerCase(),
      eventDate,
      userId,
      eventPassword,
    },
  });

  return newEvent;
};

export default createEvent;
