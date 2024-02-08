"use server";

import prisma from "../db";

export const updateEventPassword = async (eventPassword: string, eventId: string) => {
  try {
    const result = await prisma.event.update({
      where: { id: eventId },
      data: { eventPassword },
    });

    return result.eventPassword;
  } catch (error) {
    console.error("Error occured when updating event password:", error);
    throw error;
  }
};
