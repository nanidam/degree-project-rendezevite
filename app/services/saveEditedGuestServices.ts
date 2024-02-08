"use server";

import prisma from "../db";

interface ISaveEditedGuest {
  guestId: string;
  attending: boolean;
  guestName: string;
  phoneNumber: string;
  diet: string;
  guestEmail: string;
  allergies: string;
  comments: string;
  additionalGuestName: string;
  additionalGuestAllergies: string;
  hasResponded: boolean;
  additionalGuestAttending: boolean;
  additionalGuestDiet: string;
}

export const saveEditedGuestService = async ({
  guestId,
  attending,
  diet,
  guestEmail,
  comments,
  additionalGuestName,
  guestName,
  phoneNumber,
  allergies,
  additionalGuestAllergies,
  hasResponded,
  additionalGuestAttending,
  additionalGuestDiet,
}: ISaveEditedGuest) => {
  try {
    const updatedGuest = await prisma.guest.update({
      where: { id: guestId },
      data: {
        name: guestName,
        email: guestEmail,
        phoneNumber,
        diet,
        comments,
        allergies,
        attending,
        hasResponded,
        inviteSent: true,
        additionalGuest: {
          name: additionalGuestName,
          attending: additionalGuestAttending,
          diet: additionalGuestDiet,
          allergies: additionalGuestAllergies,
        },
      },
    });

    return updatedGuest;
  } catch (error) {
    console.error("Failed to update guest:", error);
    throw error;
  }
};
