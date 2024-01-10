"use server";

import prisma from "../db";
import getUserId from "./getUserId";

const updateEventText = async (header: string, text: string, eventName: string) => {
  const userId = await getUserId();
  if (userId) {
    const event = await prisma.event.findFirst({
      where: {
        eventName,
        userId,
      },
    });

    if (event) {
      const updatedEvent = await prisma.event.update({
        where: {
          id: event.id,
        },
        data: {
          header,
          text,
        },
      });
      return updatedEvent;
    }
  }

  return null;
};

export default updateEventText;