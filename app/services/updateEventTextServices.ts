"use server";

import prisma from "../db";
import getUserId from "./getUserIdServices";

interface IUpdateEventText {
  header: string;
  text: string;
  eventName: string;
}
const updateEventText = async ({ header, text, eventName }: IUpdateEventText) => {
  const userId = await getUserId();
  try {
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
  } catch (error) {
    console.error("Can't update event's text:", error);
    throw error;
  }
};

export default updateEventText;
