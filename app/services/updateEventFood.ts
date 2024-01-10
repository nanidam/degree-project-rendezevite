"use server";

import prisma from "../db";
import getUserId from "./getUserId";

const updateEventFood = async (
  includeFood: boolean,
  includeAllergies: boolean,
  eventName: string
) => {
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
          includeFood,
          includeAllergies,
        },
      });
      return updatedEvent;
    }
  }

  return null;
};

export default updateEventFood;
