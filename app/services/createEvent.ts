"use server";

import prisma from "../db";
import { ICreateUpdateEvent } from "../utils/models/ICreateUpdateEvent";
import { getEvent } from "./getEvent";

const createEvent = async ({ eventDate, eventName, userId, eventPassword }: ICreateUpdateEvent) => {
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
