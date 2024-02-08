"use server";

import prisma from "../db";
import { getEvent } from "./getEventServices";
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

  try {
    await prisma.event.delete({
      where: {
        id: event.id,
      },
    });
  } catch (error) {
    console.error("An error occurred while deleting the event:", error);
    throw error;
  }
};
