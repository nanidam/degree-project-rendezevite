"use server"
import prisma from "../db";
import { IEvent } from "../utils/models/IEvent";

export const getEvent = async (userId: string, eventName: string) => {
  const event = await prisma.event.findFirst({
    where: {
      eventName: eventName.toLowerCase(),
      userId,
    },
    include: {
      guestList: true,
    }
  });
  if (event) {
    return event as IEvent;
  }
  return null;
};
