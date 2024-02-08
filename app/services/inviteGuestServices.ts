"use server";

import prisma from "../db";

interface IInviteGuest {
  guestName: string;
  guestEmail: string;
  additionalGuest: string;
  eventId: string;
}

async function inviteGuest({
  guestName,
  guestEmail,
  additionalGuest,
  eventId,
}: IInviteGuest) {
  try {
    const result = await prisma.event.update({
      where: { id: eventId },
      data: {
        guestList: {
          create: {
            name: guestName,
            email: guestEmail,
            additionalGuest: {
              name: additionalGuest,
            },
          },
        },
      },
      include: {
        guestList: true,
      },
    });

    return result;
  } catch (error) {
    throw new Error("Failed to invite guest");
  }
}

export default inviteGuest;
