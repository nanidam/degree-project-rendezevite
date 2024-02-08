"use server";

import prisma from "../db";
import getUserId from "./getUserIdServices";

const updateEventFood = async (
  includeFood: boolean,
  includeAllergies: boolean,
  eventName: string
) => {
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
            includeFood,
            includeAllergies,
          },
        });
        return updatedEvent;
      }
    }

    return null;
  } catch (error) {
    console.error("Error when updating event food:", error);
    throw error;
  }
};

export default updateEventFood;
