"use server";

import prisma from "../db";
import getUserId from "./getUserIdServices";

const chooseTemplate = async (template: string, eventName: string) => {
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
            template,
          },
        });
        return updatedEvent;
      }
    }

    return null;
  } catch (error) {
    console.error("An occured in choose template:", error);
    throw error;
  }
};

export default chooseTemplate;
