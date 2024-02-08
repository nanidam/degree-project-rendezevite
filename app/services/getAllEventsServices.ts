"use server";

import prisma from "../db";
import getUserId from "./getUserIdServices";

export const getAllEvents = async () => {
  const userId = await getUserId();
  if (!userId) {
    return null;
  }

  try {
    const events = await prisma.event.findMany({
      where: {
        userId,
      },
    });

    if (events) {
      return events;
    }

    return null;
  } catch (error) {
    console.error("An error occurred while fetching events:", error);
    throw error;
  }
};
