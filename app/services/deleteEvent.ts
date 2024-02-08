"use server";

import prisma from "../db";
import { getEvent } from "./getEvent";
import getUserId from "./getUserIdServices";

export const deleteEvent = async (eventName: string) => {
  const userId = await getUserId();
  if (!userId) {
    return;
  }

  const event = await getEvent(userId, eventName);

  if (!event) {
    return;
  }

  await prisma.event.delete({
    where: {
      id: event.id,
    },
  });
};
